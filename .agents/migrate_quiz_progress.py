# -*- coding: utf-8 -*-
"""
Migra/hidrata com segurança o progresso de questionários legados (`checklist._quizzes`)
para o formato do app React (`checklist._quizStore`) sem apagar `_quizzes` e sem criar
novas tabelas ou colunas no banco Neon.

Uso:
  python .agents/migrate_quiz_progress.py --user soares@ --dry-run
  python .agents/migrate_quiz_progress.py --user soares@
"""
from __future__ import annotations

import argparse
import copy
import json
import re
import sys
import urllib.request

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

DB_SQL_URL = "https://ep-muddy-thunder-ac0eoxn3-pooler.sa-east-1.aws.neon.tech/sql"
DB_CONN_STR = (
    "postgresql://neondb_owner:npg_l2mWY5HINrgG@"
    "ep-muddy-thunder-ac0eoxn3-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require"
)


def db_query(query: str, params: list | None = None) -> dict:
    req = urllib.request.Request(
        DB_SQL_URL,
        data=json.dumps({"query": query, "params": params or []}).encode("utf-8"),
        headers={
            "Neon-Connection-String": DB_CONN_STR,
            "Content-Type": "application/json",
        },
    )
    with urllib.request.urlopen(req, timeout=15) as r:
        return json.loads(r.read().decode("utf-8"))


def find_user(identifier: str) -> dict | None:
    ident = identifier.strip()
    if ident.isdigit():
        res = db_query(
            "SELECT id, nome, email FROM usuarios WHERE id = $1 LIMIT 1;",
            [int(ident)],
        )
    else:
        res = db_query(
            "SELECT id, nome, email FROM usuarios WHERE LOWER(email) = LOWER($1) OR LOWER(nome) = LOWER($1) LIMIT 1;",
            [ident],
        )
    rows = res.get("rows", [])
    return rows[0] if rows else None


def convert_legacy_entry(legacy: dict, existing: dict | None = None) -> dict:
    base = copy.deepcopy(existing) if isinstance(existing, dict) else {}
    mc_answers = dict(base.get("mcAnswers") or {})
    mc_checked = dict(base.get("mcChecked") or {})
    mc_eliminated = dict(base.get("mcEliminated") or {})
    mc_open_comm = dict(base.get("mcOpenCommentary") or {})

    hide_comm = legacy.get("hideCommMap") or {}

    for q_num, ans in (legacy.get("answers") or {}).items():
        if not ans:
            continue
        clean_num = str(q_num).strip()
        for scope in ("final", "rich_final"):
            key = f"{scope}_q{clean_num}"
            if key not in mc_answers:
                mc_answers[key] = str(ans)

    for q_num, checked in (legacy.get("checkedMap") or {}).items():
        if not checked:
            continue
        clean_num = str(q_num).strip()
        for scope in ("final", "rich_final"):
            key = f"{scope}_q{clean_num}"
            if key not in mc_checked:
                mc_checked[key] = True
            if key not in mc_open_comm and hide_comm.get(clean_num) is False:
                mc_open_comm[key] = True

    for raw_key, is_elim in (legacy.get("eliminated") or {}).items():
        if not is_elim:
            continue
        m = re.match(r"^(\d+)_([A-Ea-e])$", str(raw_key).strip())
        if not m:
            continue
        q_num, letter = m.group(1), m.group(2).upper()
        for scope in ("final", "rich_final"):
            key = f"{scope}_q{q_num}_{letter}"
            if key not in mc_eliminated:
                mc_eliminated[key] = True

    result = {
        **base,
        "mcAnswers": mc_answers,
        "mcChecked": mc_checked,
        "mcEliminated": mc_eliminated,
    }
    if mc_open_comm:
        result["mcOpenCommentary"] = mc_open_comm
    if "mcSubmittedAll" not in result or result["mcSubmittedAll"] is None:
        result["mcSubmittedAll"] = bool(legacy.get("submitted", False))

    return result


def build_migrated_checklist(raw_checklist: dict) -> tuple[dict, dict]:
    chk = copy.deepcopy(raw_checklist) if isinstance(raw_checklist, dict) else {}
    legacy_quizzes = chk.get("_quizzes")
    existing_store = chk.get("_quizStore")
    quiz_store = copy.deepcopy(existing_store) if isinstance(existing_store, dict) else {}

    synced_docs: list[str] = []
    if isinstance(legacy_quizzes, dict):
        for doc_id, legacy_entry in legacy_quizzes.items():
            if not isinstance(legacy_entry, dict):
                continue
            quiz_store[doc_id] = convert_legacy_entry(legacy_entry, quiz_store.get(doc_id))
            synced_docs.append(doc_id)

    chk["_quizStore"] = quiz_store
    if not isinstance(chk.get("_axesProgress"), dict):
        chk["_axesProgress"] = {}

    blocks = sorted(k for k, v in chk.items() if re.match(r"^w\d+_\w+$", k) and v is True)
    sims = sorted((chk.get("_simulados") or {}).keys()) if isinstance(chk.get("_simulados"), dict) else []
    stats = {
        "blocks_done": blocks,
        "simulados": sims,
        "legacy_quizzes_count": len(legacy_quizzes) if isinstance(legacy_quizzes, dict) else 0,
        "quiz_store_count": len(quiz_store),
        "synced_docs": sorted(synced_docs),
        "axes_progress_count": len(chk["_axesProgress"]),
    }
    return chk, stats


def main(argv: list[str]) -> int:
    parser = argparse.ArgumentParser(
        description="Sincroniza _quizzes -> _quizStore para um usuário no banco Neon."
    )
    parser.add_argument("--user", required=True, help="E-mail, nome ou ID do usuário (ex: soares@)")
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Simula a conversão sem gravar no banco de dados.",
    )
    args = parser.parse_args(argv)

    u = find_user(args.user)
    if not u:
        print(f"[ERRO] Usuário '{args.user}' não encontrado em 'usuarios'.")
        return 1

    res = db_query(
        "SELECT checklist, provas_feitas, semana_atual FROM concurso_progresso WHERE usuario_id = $1 LIMIT 1;",
        [u["id"]],
    )
    rows = res.get("rows", [])
    if not rows:
        print(f"[AVISO] Usuário ID={u['id']} ({u['email']}) ainda não tem linha em 'concurso_progresso'.")
        return 0

    raw_chk = rows[0].get("checklist")
    if isinstance(raw_chk, str):
        raw_chk = json.loads(raw_chk)

    migrated_chk, stats = build_migrated_checklist(raw_chk or {})
    mode_tag = "DRY-RUN" if args.dry_run else "APLICADO"

    if not args.dry_run:
        db_query(
            """
            UPDATE concurso_progresso
            SET checklist = $2::jsonb, updated_at = NOW()
            WHERE usuario_id = $1;
            """,
            [u["id"], json.dumps(migrated_chk, ensure_ascii=False)],
        )

    print(f"[{mode_tag}] Usuário: ID={u['id']} | Nome={u['nome']} | E-mail={u['email']}")
    print(f"  - Blocos concluídos preservados: {len(stats['blocks_done'])} {stats['blocks_done']}")
    print(f"  - Simulados preservados: {len(stats['simulados'])} {stats['simulados']}")
    print(f"  - Quizzes legados (_quizzes) intactos: {stats['legacy_quizzes_count']}")
    print(f"  - Documentos sincronizados em _quizStore: {stats['quiz_store_count']}")
    print(f"  - Registros em _axesProgress: {stats['axes_progress_count']}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
