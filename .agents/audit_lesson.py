# -*- coding: utf-8 -*-
"""
Auditor Automático de Qualidade Pedagógica e Padrão ACCESS para Aulas (.md).
Verifica 6 portões obrigatórios do Protocolo D-E-A-M-P-C antes da publicação:
  1. Profundidade de subtópicos (###) dentro de cada ## EIXO (linhas substantivas e >= 2-3 exemplos)
  2. Completude estrutural por Eixo (Síntese Feynman + >= 3 questões de checkpoint por Eixo)
  3. Auditoria das questões de múltipla escolha (4 alternativas A-D, Gabarito Oficial,
     simetria de tamanho em adaptadas/checkpoints, ausência de spoiler parentético exclusivo,
     distribuição equilibrada de gabaritos e comentário detalhado)
  4. Cobertura das promessas do ## Sumário da Aula no corpo do texto
  5. Detector de "diagrama prometido sem visual" (fluxograma/organograma sem <svg>)
  6. Proibição absoluta de citar ou extrair questões de prova-auto/1.pdf a 12.pdf

Uso:
  python .agents/audit_lesson.py semana-04/portugues_semana_04.md
  python .agents/audit_lesson.py semana-04/*.md
"""
from __future__ import annotations

import argparse
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
    r"^##\s+(?:[^\w\s]*\s*)?(?:BATERIA\b|SE[ÇC][ÃA]O DE FIXA[ÇC][ÃA]O\b|CADERNO DE \d+ QUEST[ÕO]ES\b|QUEST[ÕO]ES REAIS\b)",
    re.I,
)
SUMMARY_HEADING_RE = re.compile(r"^##\s+(?:[^\w\s]*\s*)?Sum[aá]rio\b", re.I)
CHECKLIST_HEADING_RE = re.compile(r"^##\s+(?:[^\w\s]*\s*)?Checklist\b", re.I)
IGNORE_SUBTOPIC_RE = re.compile(
    r"^(?:\d+[\.\)]\s*)?(?:Quest[ãa]o|S[íi]ntese|Checkpoint|Flashcards?|Checklist)\b",
    re.I,
)

STOPWORDS_PT = {
    "a", "o", "as", "os", "e", "ou", "de", "do", "da", "dos", "das", "em", "no", "na",
    "nos", "nas", "para", "por", "com", "sem", "sob", "sobre", "entre", "que", "se",
    "ao", "aos", "às", "à", "um", "uma", "uns", "umas", "como", "mais", "menos",
    "muito", "pouco", "seu", "sua", "seus", "suas", "vs", "eixo", "aula", "parte",
    "lógica", "logica", "prática", "pratica", "feynman", "síntese", "sintese",
    "exemplos", "regras", "tipos", "casos", "uso", "papel", "geral", "simples",
    "completo", "completa", "concursos", "concurso", "prova", "provas", "semana",
    "oficial", "administrativo", "administrativa", "prefeitura", "municipal",
    "reais", "adaptadas", "comentadas", "alternativa", "bateria", "checklist",
    "fixação", "fixacao", "ativa", "caderno", "questões", "questoes", "principais",
    "críticos", "criticos", "contexto", "dicionário", "dicionario", "palco",
    "o que", "por que", "quando", "onde", "qual", "quais", "diferença", "diferenca",
}


@dataclass
class Issue:
    level: str  # "ERRO" | "AVISO" | "INFO"
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


def normalize_token(token: str) -> str:
    t = token.lower().strip(".,:;!?()[]{}\"'`*_—–-/")
    # Basic accent folding for matching robustness
    repl = (
        ("á", "a"), ("à", "a"), ("ã", "a"), ("â", "a"),
        ("é", "e"), ("ê", "e"),
        ("í", "i"),
        ("ó", "o"), ("ô", "o"), ("õ", "o"),
        ("ú", "u"), ("ü", "u"),
        ("ç", "c"),
    )
    for src, dst in repl:
        t = t.replace(src, dst)
    return t


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
            report.add("ERRO", "Questões", f"{label}: falta linha identificadora '**Banca:** ...'.")

        opts = q["options"]
        expected_keys = ["A", "B", "C", "D"]
        if len(opts) != 4 or any(k not in opts for k in expected_keys):
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

        # Comentário detalhado
        if q["has_details"]:
            comm_text = strip_html_tags(q["commentary"]).strip()
            if len(comm_text) < 90:
                report.add(
                    "AVISO",
                    "Questões",
                    f"{label}: comentário muito curto ({len(comm_text)} chars). Comente por que a certa procede e o erro das demais.",
                )

        # Simetria e pistas (rigoroso para Adaptadas / Checkpoints / Inéditas)
        ans = q["answer"]
        if ans in opts and len(opts) == 4:
            wrong_lens = [len(opts[k]) for k in expected_keys if k != ans]
            avg_wrong = sum(wrong_lens) / len(wrong_lens) if wrong_lens else 1.0
            ans_len = len(opts[ans])
            ratio = ans_len / max(avg_wrong, 1.0)
            adapted = is_checkpoint or is_adapted_or_internal_question(q["banca"])

            if adapted:
                if ratio < 0.60 or ratio > 1.45:
                    report.add(
                        "ERRO",
                        "Simetria",
                        f"{label}: alternativa correta '{ans}' muito desproporcional às erradas (razão={ratio:.2f}, correta={ans_len}c vs média erradas={avg_wrong:.0f}c). Ajuste para [0.65..1.35].",
                    )
                elif ratio < 0.65 or ratio > 1.35:
                    report.add(
                        "AVISO",
                        "Simetria",
                        f"{label}: alternativa correta '{ans}' no limite de tamanho (razão={ratio:.2f}; ideal [0.65..1.35]).",
                    )

                # Detector de parênteses explicativos exclusivos na alternativa correta
                paren_re = re.compile(r"\([^)]{12,}\)")
                ans_has_paren = bool(paren_re.search(opts[ans]))
                wrong_have_paren = any(paren_re.search(opts[k]) for k in expected_keys if k != ans)
                if ans_has_paren and not wrong_have_paren:
                    report.add(
                        "AVISO",
                        "Simetria",
                        f"{label}: apenas a alternativa correta '{ans}' traz parênteses explicativo longo — possível pista óbvia.",
                    )

                # Checagem de comandos em CAIXA ALTA nas adaptadas/inéditas
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

    # Distribuição de gabaritos
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
        if pct > 0.50:
            report.add(
                "ERRO",
                "Distribuição",
                f"{scope_name}: letra '{max_letter}' aparece em {max_cnt}/{len(answers)} questões ({pct:.0%}). Máximo tolerado é 40%.",
            )
        elif pct > 0.40:
            report.add(
                "AVISO",
                "Distribuição",
                f"{scope_name}: letra '{max_letter}' aparece em {max_cnt}/{len(answers)} questões ({pct:.0%}). Recomenda-se <= 40%.",
            )


def strip_feynman_tail(sub_body: str) -> str:
    """Remove o bloco de Síntese Feynman ao final de um subtópico para medir apenas sua densidade própria."""
    m = re.search(
        r"(?:^|\n)(?:>\s*\[!(?:NOTE|TIP|IMPORTANT)\][^\n]*\n\s*>[^\n]*Feynman|\*\*S[íi]ntese\s+Feynman\b)",
        sub_body,
        re.I,
    )
    if m:
        return sub_body[: m.start()].rstrip()
    return sub_body


def count_substantive_lines_and_examples(sub_body: str) -> tuple[int, int]:
    sub_body = strip_feynman_tail(sub_body)
    lines = sub_body.split("\n")
    substantive = 0
    examples = 0

    example_line_re = re.compile(
        r"(?:\bExemplo\s*\d*|\*Ex\.?:?\*|\bEx\.?:|\bCerta:|Errada:|❌|✔️|✅|->|→|“[^”]{6,}”|\"[^\"]{6,}\")",
        re.I,
    )

    for raw in lines:
        s = raw.strip()
        if not s or re.match(r"^[-*_]{3,}$", s):
            continue
        # Ignora linhas de tabela puramente estruturais (|---|---|)
        if re.match(r"^\|[\s:\-\|]+\|$", s):
            continue
        # Conta texto real removendo apenas tags HTML de formatação
        plain = strip_html_tags(s).strip()
        if plain:
            substantive += 1
            if example_line_re.search(plain) or s.startswith("|"):
                examples += 1
            elif re.match(r"^(?:[-*]|\d+\.)\s+\*\*[^*]{4,}:\*\*\s+.{15,}", s):
                # Itens exemplificados com negrito + descrição prática
                examples += 1

    return substantive, examples


def audit_file(path: str) -> AuditReport:
    report = AuditReport(path=path)
    with open(path, "r", encoding="utf-8") as f:
        text = f.read().replace("\r\n", "\n")

    lines = text.split("\n")

    # Dividir por headings de nível ##
    sections: list[tuple[str, list[str]]] = []
    preamble: list[str] = []
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
        else:
            preamble.append(line)
    if cur_h is not None:
        sections.append((cur_h, cur_body))

    summary_lines: list[str] = []
    axis_count = 0
    subtopic_count = 0
    checkpoint_total = 0
    final_battery_body_parts: list[str] = []
    in_battery = False
    body_text_for_toc: list[str] = []

    for h, body in sections:
        body_str = "\n".join(body).strip()
        if SUMMARY_HEADING_RE.test(h) if hasattr(SUMMARY_HEADING_RE, "test") else SUMMARY_HEADING_RE.match(h):
            summary_lines.extend(body)
            continue

        body_text_for_toc.append(h + "\n" + body_str)

        axis_m = AXIS_HEADING_RE.match(h)
        if axis_m:
            axis_count += 1
            axis_label = f"Eixo {axis_m.group(2)}"

            # Separar teoria do eixo vs checkpoints do eixo
            q_split = re.search(r"^###\s+Quest[ãa]o\s+\d+", body_str, flags=re.M | re.I)
            theory_part = body_str[: q_split.start()].strip() if q_split else body_str
            qs_part = body_str[q_split.start() :].strip() if q_split else ""

            # Gate 2: Síntese Feynman presente no eixo?
            if not re.search(r"(?:S[íi]ntese\s+Feynman|Feynman)", theory_part, re.I):
                report.add(
                    "ERRO",
                    "Completude Eixo",
                    f"{axis_label}: falta 'Síntese Feynman de 3 Linhas' ao final da parte teórica.",
                )

            # Gate 2: Checkpoints (3 questões diretas por Eixo)
            cp_questions = parse_mc_questions(qs_part) if qs_part else []
            checkpoint_total += len(cp_questions)
            if len(cp_questions) < 3:
                report.add(
                    "ERRO",
                    "Checkpoints",
                    f"{axis_label}: exige 3 questões diretas de checkpoint ao final do eixo (encontradas: {len(cp_questions)}).",
                )
            if cp_questions:
                check_question_list(cp_questions, axis_label, report, is_checkpoint=True)

            # Gate 1: Profundidade dos subtópicos ### dentro do Eixo
            sub_chunks = re.split(r"(?=^###\s+)", theory_part, flags=re.M)
            for sc in sub_chunks:
                sc_strip = sc.strip()
                if not sc_strip.startswith("### "):
                    continue
                first_line, _, sub_body = sc_strip.partition("\n")
                sub_title = first_line.lstrip("#").strip()
                if IGNORE_SUBTOPIC_RE.match(sub_title):
                    continue
                subtopic_count += 1
                sub_lines_cnt, ex_cnt = count_substantive_lines_and_examples(sub_body)
                if sub_lines_cnt < 8:
                    report.add(
                        "ERRO",
                        "Profundidade",
                        f"{axis_label} -> '{sub_title}': muito raso ({sub_lines_cnt} linhas substantivas; mínimo 8–12 com D-E-A-M-P-C).",
                    )
                elif sub_lines_cnt < 12:
                    report.add(
                        "AVISO",
                        "Profundidade",
                        f"{axis_label} -> '{sub_title}': extensão enxuta ({sub_lines_cnt} linhas). Confira se todos os pilares D-E-A-M-P-C foram cobertos.",
                    )

                if ex_cnt < 2:
                    report.add(
                        "ERRO",
                        "Exemplos",
                        f"{axis_label} -> '{sub_title}': poucos exemplos concretos detectados ({ex_cnt}; protocolo exige >= 3 exemplos progressivos).",
                    )
                elif ex_cnt < 3:
                    report.add(
                        "AVISO",
                        "Exemplos",
                        f"{axis_label} -> '{sub_title}': apenas {ex_cnt} marcadores de exemplo detectados (recomendado >= 3 progressivos).",
                    )
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

    if axis_count < 2:
        report.add(
            "ERRO",
            "Estrutura",
            f"Aula deve ser dividida em Eixos (## EIXO 1..N); encontrados apenas {axis_count}.",
        )

    # Gate 3: Bateria Final
    final_qs = parse_mc_questions("\n\n".join(final_battery_body_parts))
    if not final_qs:
        report.add("ERRO", "Bateria Final", "Nenhuma questão encontrada na Bateria Final.")
    else:
        check_question_list(final_qs, "Bateria Final", report, is_checkpoint=False)

    # Gate 4: Cobertura das promessas do Sumário
    if summary_lines:
        body_folded = normalize_token("\n".join(body_text_for_toc))
        for raw_s in summary_lines:
            s = raw_s.strip()
            if not s or not (s.startswith(("-", "*")) or re.match(r"^\d+\.", s)):
                continue
            # Remove links markdown mantendo apenas texto visível
            clean_s = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", s)
            clean_s = re.sub(r"^[-*\d\.\s]+", "", clean_s)
            # Extrai palavras significativas (>= 5 letras) ou siglas maiúsculas (VTD, VTI, SVO)
            tokens = re.findall(r"[A-Za-zÀ-ÿ]{3,}", clean_s)
            missing = []
            for tok in tokens:
                norm_tok = normalize_token(tok)
                if norm_tok in STOPWORDS_PT:
                    continue
                if len(norm_tok) < 5 and not tok.isupper():
                    continue
                # Busca por prefixo (stem simples para plural/gênero)
                stem = norm_tok[: max(5, len(norm_tok) - 2)]
                if stem not in body_folded:
                    missing.append(tok)
            if len(missing) >= 2 or (len(missing) == 1 and len(missing[0]) >= 7):
                report.add(
                    "AVISO",
                    "Contrato Sumário",
                    f"Item do Sumário possivelmente sem desenvolvimento no corpo ({missing}): '{clean_s[:70]}'",
                )

    # Gate 5: Diagrama prometido sem visual SVG
    all_prose = "\n".join(body_text_for_toc)
    if re.search(r"\b(?:fluxograma|organograma)\b", all_prose, re.I):
        if "<svg" not in text.lower():
            report.add(
                "ERRO",
                "Diagrama Visual",
                "O texto cita 'fluxograma' ou 'organograma', mas não contém nenhum elemento visual <svg> no documento.",
            )

    # Gate 6: Proibição das provas 1.pdf a 12.pdf
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
    parser = argparse.ArgumentParser(description="Audita aulas .md pelo Protocolo D-E-A-M-P-C.")
    parser.add_argument("files", nargs="+", help="Arquivos .md a auditar")
    args = parser.parse_args(argv)

    has_errors = False
    for path in args.files:
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
