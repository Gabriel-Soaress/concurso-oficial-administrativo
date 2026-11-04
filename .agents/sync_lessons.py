# -*- coding: utf-8 -*-
"""
Script oficial de sincronização dos conteúdos (.md) das semanas com o site (index.html).
Diretriz Obrigatória: Todo novo arquivo .md gerado em semana-01..semana-12 deve ser
incorporado ao sistema rodando `python .agents/sync_lessons.py`.
"""
import os
import re
import sys
import glob
import json

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTPUT_JS = os.path.join(ROOT_DIR, "aulas-data.js")


def classify_subject(filename, h1_text):
    fname = filename.lower()
    h1 = h1_text.lower()

    if any(k in fname for k in ["portugues", "port_", "gramatica", "interpretacao"]):
        return "port"
    if any(k in fname for k in ["matematica", "rlm", "raciocinio", "fracoes", "decimais", "dizimas", "equac", "geometr", "aritmetica"]):
        return "rlm"
    if any(k in fname for k in ["especifico", "administrac", "lei_", "lai", "lgpd", "protocolo", "arquivo", "redacao_oficial"]):
        return "esp"
    if any(k in fname for k in ["gerais", "historia", "geografia", "atualidades", "birigui"]):
        return "ger"

    # Fallback by H1 content
    if "portuguesa" in h1 or "gramática" in h1:
        return "port"
    if any(k in h1 for k in ["matemática", "raciocínio", "frações", "decimais", "dízimas"]):
        return "rlm"
    if any(k in h1 for k in ["específicos", "administração", "estado", "governo"]):
        return "esp"
    if any(k in h1 for k in ["gerais", "história", "territorial", "geografia"]):
        return "ger"

    return "rlm"


def detect_kind_and_counts(filename, text):
    fname = filename.lower()
    mc_questions = re.findall(r'^###\s+Questão\s+\d+', text, flags=re.M)
    if mc_questions:
        return "lesson", len(mc_questions)

    # Check if it's a numbered worksheet like exercicios_fracoes_decimais_dizimas.md
    if "## 📝 Caderno de Questões" in text or fname.startswith("exercicios") or fname.startswith("lista"):
        qs = re.findall(r'^\d+\.\s+.+?\\_.*$', text, flags=re.M)
        if qs:
            return "worksheet", len(qs)

    return "lesson", len(mc_questions)


def build_short_title(filename, h1_text, kind, q_count):
    if kind == "worksheet":
        if "fracoes" in filename.lower() or "frações" in h1_text.lower():
            return f"Lista Prática: {q_count} Exercícios (Frações, Decimais e Dízimas)"
        clean_h1 = re.sub(r'^#+\s*', '', h1_text).strip()
        return f"{clean_h1} ({q_count} Exercícios)"
    else:
        if q_count > 0:
            return f"Aula Completa + {q_count} Questões de Concurso"
        return "Aula Teórica Completa"


def scan_all_weeks():
    data = {}
    week_dirs = sorted(glob.glob(os.path.join(ROOT_DIR, "semana-*")))

    for wdir in week_dirs:
        if not os.path.isdir(wdir):
            continue
        folder_name = os.path.basename(wdir)
        m = re.match(r'semana-(\d+)', folder_name, re.I)
        if not m:
            continue
        week_num = int(m.group(1))

        md_files = sorted(glob.glob(os.path.join(wdir, "*.md")))
        for md_path in md_files:
            fname = os.path.basename(md_path)
            rel_path = f"{folder_name}/{fname}"
            with open(md_path, "r", encoding="utf-8") as f:
                content = f.read()

            h1_match = re.search(r'^#\s+(.+)$', content, flags=re.M)
            h1_text = h1_match.group(1).strip() if h1_match else fname.replace(".md", "")

            subj = classify_subject(fname, h1_text)
            kind, q_count = detect_kind_and_counts(fname, content)
            is_main = ("_semana_" in fname.lower()) and (kind == "lesson")
            short_title = build_short_title(fname, h1_text, kind, q_count)

            block_key = f"w{week_num}_{subj}"
            if block_key not in data:
                data[block_key] = []

            data[block_key].append({
                "file": rel_path,
                "filename": fname,
                "title": h1_text,
                "shortTitle": short_title,
                "kind": kind,
                "questionCount": q_count,
                "isMain": is_main,
                "content": content
            })

        # Sort each subject's files so main lesson is always first, then worksheets/extras
        for block_key in list(data.keys()):
            data[block_key].sort(key=lambda item: (0 if item["isMain"] else 1, item["filename"]))
            for idx, item in enumerate(data[block_key]):
                item["id"] = f"{block_key}_doc{idx}"

    return data


def main():
    data = scan_all_weeks()
    js_payload = (
        "// ARQUIVO GERADO AUTOMATICAMENTE POR .agents/sync_lessons.py\n"
        "// Contém todas as aulas e listas de exercícios (.md) vinculadas à Trilha do site.\n"
        "window.WEEK_LESSONS_DATA = "
        + json.dumps(data, ensure_ascii=False, indent=2)
        + ";\n"
    )
    with open(OUTPUT_JS, "w", encoding="utf-8") as f:
        f.write(js_payload)

    total_docs = sum(len(v) for v in data.values())
    print(f"[OK] aulas-data.js gerado com sucesso! ({total_docs} documentos vinculados em {len(data)} blocos da trilha)")
    for k, docs in sorted(data.items()):
        for d in docs:
            print(f"  - {k} -> [{d['kind']}] {d['shortTitle']} ({d['file']})")


if __name__ == "__main__":
    main()
