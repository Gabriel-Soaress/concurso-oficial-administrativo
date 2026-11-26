# -*- coding: utf-8 -*-
"""
Auditor Técnico e Padrão ACCESS para Aulas (.md).
Verifica apenas integridade estrutural, HTML/CSS e qualidade das questões:
  1. Proibição absoluta de citar ou extrair questões de prova-auto/1.pdf a 12.pdf (ERRO)
  2. Integridade HTML (<div ...> / </div> balanceados em .edu-component e <svg> balanceados) (ERRO)
  3. Formato interativo e Padrão ACCESS das questões (### Questão XX, **Banca:**, 4 opções A-D,
     <details> com **Gabarito Oficial: X**, simetria em adaptadas/checkpoints, comandos em CAIXA ALTA,
     ausência de spoiler parentético exclusivo e distribuição equilibrada de gabaritos)
  4. Estatísticas informativas de estrutura (eixos, subtópicos, checkpoints, questões finais)

Uso:
  python .agents/audit_lesson.py semana-04/portugues_semana_04.md
  python .agents/audit_lesson.py semana-04/*.md
"""
from __future__ import annotations

import argparse
import glob
import re
import sys
from collections import Counter
from dataclasses import dataclass, field

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")


AXIS_HEADING_RE = re.compile(
    r"^##\s+(?:[^\w\s]*\s*)?(EIXO|BLOCO)\s+(\d+)\s*[:—–-]\s*(.+)$", re.I
)
BATTERY_HEADING_RE = re.compile(
    r"^##\s+(?:[^\w\s]*\s*)?(?:BATERIA\b|SE[ÇC][ÃA]O DE FIXA[ÇC][ÃA]O\b|CADERNO DE \d+ QUEST[ÕO]ES\b|QUEST[ÕO]ES REAIS\b|EXERC[ÍI]CIOS)",
    re.I,
)
CHECKLIST_HEADING_RE = re.compile(r"^##\s+(?:[^\w\s]*\s*)?Checklist\b", re.I)
IGNORE_SUBTOPIC_RE = re.compile(
    r"^(?:\d+[\.\)]\s*)?(?:Quest[ãa]o|S[íi]ntese|Checkpoint|Flashcards?|Checklist)\b",
    re.I,
)


@dataclass
class Issue:
    level: str  # "ERRO" | "AVISO"
    gate: str
    message: str


@dataclass
class AuditReport:
    path: str
    issues: list[Issue] = field(default_factory=list)
    stats: dict[str, int] = field(default_factory=dict)

    def add(self, level: str, gate: str, message: str) -> None:
        self.issues.append(Issue(level=level, gate=gate, message=message))

    @property
    def error_count(self) -> int:
        return sum(1 for i in self.issues if i.level == "ERRO")

    @property
    def warning_count(self) -> int:
        return sum(1 for i in self.issues if i.level == "AVISO")


def strip_html_tags(text: str) -> str:
    return re.sub(r"<[^>]+>", " ", text)


def is_adapted_or_internal_question(banca_line: str) -> bool:
    low = banca_line.lower()
    markers = ("adaptad", "checkpoint", "inédita", "inedita", "fixação", "fixacao", "**foco:**")
    return any(m in low for m in markers)


def parse_mc_questions(md_chunk: str) -> list[dict]:
    blocks = re.split(r"(?=^###\s+Quest[ãa]o\s+\d+)", md_chunk, flags=re.M)
    parsed = []
    for block in blocks:
        if not re.match(r"^###\s+Quest[ãa]o\s+\d+", block.strip(), re.I):
            continue
        before_det = block
        det_content = ""
        if "<details>" in block.lower():
            parts = re.split(r"<details>", block, maxsplit=1, flags=re.I)
            before_det = parts[0]
            det_split = re.split(r"</details>", parts[1], maxsplit=1, flags=re.I)
            det_content = det_split[0]

        lines = before_det.strip().split("\n")
        header = re.sub(r"^###\s+", "", lines[0]).strip()
        banca_line = ""
        start_idx = 1
        if len(lines) > 1 and any(
            tag in lines[1] for tag in ("**Banca:**", "**Foco:**", "**Bloco:**")
        ):
            banca_line = lines[1].strip()
            start_idx = 2
        elif "(" in header and ")" in header:
            banca_line = header

        stem_lines: list[str] = []
        options: dict[str, str] = {}
        seen_opt = False
        for line in lines[start_idx:]:
            s = line.strip()
            m = re.match(r"^(?:\(([A-E])\)|[-*]\s+\*\*([A-E])\)\*\*)\s+(.+)$", s)
            if m:
                seen_opt = True
                letter = (m.group(1) or m.group(2)).upper()
                options[letter] = m.group(3).strip()
            elif not seen_opt:
                stem_lines.append(line)

        gab_m = re.search(
            r"\*\*Gabarito Oficial:\s*(?:Letra\s+)?\(?([A-E])\)?([^*]*)\*\*",
            det_content,
            re.I,
        )
        answer = gab_m.group(1).upper() if gab_m else ""
        commentary_clean = re.sub(r"<summary>[\s\S]*?</summary>", "", det_content, flags=re.I)
        commentary_clean = re.sub(
            r"\*\*Gabarito Oficial:[^*]+\*\*", "", commentary_clean, flags=re.I
        ).strip()

        parsed.append(
            {
                "header": header,
                "banca": banca_line,
                "statement": "\n".join(stem_lines).strip(),
                "options": options,
                "answer": answer,
                "commentary": commentary_clean,
                "has_details": bool(det_content),
            }
        )
    return parsed


def check_question_list(
    questions: list[dict],
    scope_name: str,
    report: AuditReport,
    is_checkpoint: bool = False,
) -> None:
    answers: list[str] = []
    for q in questions:
        label = f"{scope_name} -> {q['header']}"
        if not q["banca"]:
            report.add("AVISO", "Questões", f"{label}: recomenda-se incluir linha identificadora '**Banca:** ...'.")

        opts = q["options"]
        low_banca = (q["banca"] + " " + q["header"]).lower()
        is_adapted = is_checkpoint or is_adapted_or_internal_question(low_banca)
        is_authentic_access = ("access" in low_banca) and not is_adapted

        expected_keys = ["A", "B", "C", "D"]
        if is_authentic_access and len(opts) == 5 and all(k in opts for k in ["A", "B", "C", "D", "E"]):
            expected_keys = ["A", "B", "C", "D", "E"]
        elif len(opts) != 4 or any(k not in opts for k in expected_keys):
            report.add(
                "ERRO",
                "Questões",
                f"{label}: padrão ACCESS municipal exige exatamente 4 alternativas (A, B, C, D); encontradas: {sorted(opts.keys())}.",
            )

        if not q["has_details"] or not q["answer"]:
            report.add(
                "ERRO",
                "Questões",
                f"{label}: bloco <details> com '**Gabarito Oficial: X**' ausente ou inválido.",
            )
        else:
            answers.append(q["answer"])

        if q["has_details"]:
            comm_text = strip_html_tags(q["commentary"]).strip()
            if len(comm_text) < 70:
                report.add(
                    "AVISO",
                    "Questões",
                    f"{label}: comentário muito curto ({len(comm_text)} chars). Comente por que a certa procede e o erro das demais.",
                )

        ans = q["answer"]
        if ans in opts and len(opts) == 4:
            wrong_lens = [len(opts[k]) for k in expected_keys if k != ans]
            avg_wrong = sum(wrong_lens) / len(wrong_lens) if wrong_lens else 1.0
            ans_len = len(opts[ans])
            ratio = ans_len / max(avg_wrong, 1.0)

            if is_adapted:
                if ratio < 0.45 or ratio > 1.80:
                    report.add(
                        "ERRO",
                        "Simetria",
                        f"{label}: alternativa correta '{ans}' extremamente desproporcional às erradas (razão={ratio:.2f}, correta={ans_len}c vs média erradas={avg_wrong:.0f}c). Ajuste para [0.65..1.35].",
                    )
                elif ratio < 0.65 or ratio > 1.35:
                    report.add(
                        "AVISO",
                        "Simetria",
                        f"{label}: alternativa correta '{ans}' fora da faixa simétrica ideal (razão={ratio:.2f}; ideal [0.65..1.35]).",
                    )

                paren_re = re.compile(r"\([^)]{12,}\)")
                ans_has_paren = bool(paren_re.search(opts[ans]))
                wrong_have_paren = any(paren_re.search(opts[k]) for k in expected_keys if k != ans)
                if ans_has_paren and not wrong_have_paren:
                    report.add(
                        "AVISO",
                        "Simetria",
                        f"{label}: apenas a alternativa correta '{ans}' traz parênteses explicativo longo — possível pista óbvia.",
                    )

                stmt_no_quotes = re.sub(r"[“\"*][^“\"*]+[”\"*]", " ", q["statement"])
                lower_cmd = re.search(
                    r"\b(?:alternativa|afirmativa|afirmação|opção)\s+(correta|incorreta|falsa)\b",
                    stmt_no_quotes,
                )
                if lower_cmd and lower_cmd.group(1).islower():
                    report.add(
                        "AVISO",
                        "Padrão ACCESS",
                        f"{label}: palavra de comando '{lower_cmd.group(1)}' deveria estar em CAIXA ALTA ('{lower_cmd.group(1).upper()}').",
                    )

    if is_checkpoint and len(answers) >= 3:
        if len(set(answers)) == 1:
            report.add(
                "ERRO",
                "Distribuição",
                f"{scope_name}: todas as {len(answers)} questões de checkpoint têm a mesma letra '{answers[0]}'. Varie os gabaritos!",
            )
    elif not is_checkpoint and len(answers) >= 8:
        counts = Counter(answers)
        max_letter, max_cnt = counts.most_common(1)[0]
        pct = max_cnt / len(answers)
        if pct >= 0.70:
            report.add(
                "ERRO",
                "Distribuição",
                f"{scope_name}: letra '{max_letter}' aparece em {max_cnt}/{len(answers)} questões ({pct:.0%}). Máximo recomendado é 40%.",
            )
        elif pct > 0.40:
            report.add(
                "AVISO",
                "Distribuição",
                f"{scope_name}: letra '{max_letter}' aparece em {max_cnt}/{len(answers)} questões ({pct:.0%}). Recomenda-se <= 40%.",
            )


def check_html_balance(text: str, report: AuditReport) -> None:
    # Remove fenced code blocks before checking raw HTML divs/svgs
    cleaned = re.sub(r"```[\s\S]*?```", "", text)

    open_divs = len(re.findall(r"<div\b[^>]*>", cleaned, re.I))
    close_divs = len(re.findall(r"</div>", cleaned, re.I))
    if open_divs != close_divs:
        report.add(
            "ERRO",
            "HTML/CSS",
            f"Tags <div> desbalanceadas no arquivo: {open_divs} aberturas vs {close_divs} fechamentos (</div>).",
        )

    open_svgs = len(re.findall(r"<svg\b[^>]*>", cleaned, re.I))
    close_svgs = len(re.findall(r"</svg>", cleaned, re.I))
    if open_svgs != close_svgs:
        report.add(
            "ERRO",
            "HTML/CSS",
            f"Tags <svg> desbalanceadas no arquivo: {open_svgs} aberturas vs {close_svgs} fechamentos (</svg>).",
        )


def audit_file(path: str) -> AuditReport:
    report = AuditReport(path=path)
    with open(path, "r", encoding="utf-8") as f:
        text = f.read().replace("\r\n", "\n")

    lines = text.split("\n")
    check_html_balance(text, report)

    sections: list[tuple[str, list[str]]] = []
    cur_h: str | None = None
    cur_body: list[str] = []

    for line in lines:
        if re.match(r"^##\s+", line.strip()):
            if cur_h is not None:
                sections.append((cur_h, cur_body))
            cur_h = line.strip()
            cur_body = []
        elif cur_h is not None:
            cur_body.append(line)
    if cur_h is not None:
        sections.append((cur_h, cur_body))

    axis_count = 0
    subtopic_count = 0
    checkpoint_total = 0
    final_battery_body_parts: list[str] = []
    in_battery = False

    for h, body in sections:
        body_str = "\n".join(body).strip()
        axis_m = AXIS_HEADING_RE.match(h)
        if axis_m:
            axis_count += 1
            axis_label = f"Eixo {axis_m.group(2)}"

            q_split = re.search(r"^###\s+Quest[ãa]o\s+\d+", body_str, flags=re.M | re.I)
            theory_part = body_str[: q_split.start()].strip() if q_split else body_str
            qs_part = body_str[q_split.start() :].strip() if q_split else ""

            cp_questions = parse_mc_questions(qs_part) if qs_part else []
            checkpoint_total += len(cp_questions)
            if cp_questions:
                check_question_list(cp_questions, axis_label, report, is_checkpoint=True)

            sub_chunks = re.split(r"(?=^###\s+)", theory_part, flags=re.M)
            for sc in sub_chunks:
                sc_strip = sc.strip()
                if not sc_strip.startswith("### "):
                    continue
                first_line = sc_strip.partition("\n")[0]
                sub_title = first_line.lstrip("#").strip()
                if not IGNORE_SUBTOPIC_RE.match(sub_title):
                    subtopic_count += 1
            continue

        if BATTERY_HEADING_RE.match(h):
            in_battery = True
            final_battery_body_parts.append(body_str)
            continue

        if CHECKLIST_HEADING_RE.match(h):
            in_battery = False
            continue

        if in_battery:
            final_battery_body_parts.append(body_str)

    # Audita questões finais (se presentes no arquivo ou no bloco de bateria)
    final_qs = parse_mc_questions("\n\n".join(final_battery_body_parts))
    if not final_qs and axis_count == 0:
        # Cadernos puros de questões (sem ## Bateria)
        final_qs = parse_mc_questions(text)

    if final_qs:
        check_question_list(final_qs, "Bateria Final", report, is_checkpoint=False)

    # Proibição das provas 1.pdf a 12.pdf
    for idx_l, raw_l in enumerate(lines, 1):
        if re.search(r"\b(?:nunca|jamais|proibido|reservad[oa]s?|simulado de s[áa]bado)\b", raw_l, re.I):
            continue
        if re.search(r"prova-auto/(?:0?[1-9]|1[0-2])\.pdf", raw_l, re.I):
            report.add(
                "ERRO",
                "Simulados Sagrados",
                f"Linha {idx_l}: referência proibida a prova de Simulado de Sábado (1.pdf a 12.pdf): {raw_l.strip()}",
            )

    report.stats = {
        "axes": axis_count,
        "subtopics": subtopic_count,
        "checkpoints": checkpoint_total,
        "final_questions": len(final_qs),
    }
    return report


def main(argv: list[str]) -> int:
    parser = argparse.ArgumentParser(description="Audita integridade técnica e padrão ACCESS de aulas .md.")
    parser.add_argument("files", nargs="+", help="Arquivos .md a auditar")
    args = parser.parse_args(argv)

    expanded_files: list[str] = []
    for raw_arg in args.files:
        matches = sorted(glob.glob(raw_arg))
        expanded_files.extend(matches if matches else [raw_arg])

    has_errors = False
    for path in expanded_files:
        rep = audit_file(path)
        st = rep.stats
        status = "OK" if rep.error_count == 0 else "FALHOU"
        print(
            f"[{status}] {path} | {st.get('axes', 0)} eixos, "
            f"{st.get('subtopics', 0)} subtópicos, "
            f"{st.get('checkpoints', 0)} checkpoints, "
            f"{st.get('final_questions', 0)} questões finais | "
            f"Erros: {rep.error_count}, Avisos: {rep.warning_count}"
        )
        for iss in rep.issues:
            print(f"  - [{iss.level}] ({iss.gate}) {iss.message}")
        if rep.error_count > 0:
            has_errors = True

    return 1 if has_errors else 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
