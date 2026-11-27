import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { parseLessonIntoAxes } from "../lessonStepperParser";
import { renderRichMarkdown } from "../markdown";

describe("parseLessonIntoAxes", () => {
  it("divide uma aula com Eixos + 3 questões diretas por eixo + Bateria Final", () => {
    const sample = `# Aula de Teste

## Sumário da Aula
- Eixo 1
- Eixo 2

## EIXO 1: Fundamentos
Teoria do eixo 1.

### Questão 01
**Banca:** Checkpoint Direto
Qual é 2 + 2?
(A) 3
(B) 4
(C) 5
(D) 6
<details><summary><b>Ver Gabarito</b></summary>
**Gabarito Oficial: B**
Porque 2 + 2 = 4.
</details>

### Questão 02
**Banca:** Checkpoint Direto
Qual é 3 + 3?
(A) 6
(B) 7
(C) 8
(D) 9
<details><summary><b>Ver Gabarito</b></summary>
**Gabarito Oficial: A**
Porque 3 + 3 = 6.
</details>

### Questão 03
**Banca:** Checkpoint Direto
Qual é 5 + 5?
(A) 8
(B) 9
(C) 10
(D) 11
<details><summary><b>Ver Gabarito</b></summary>
**Gabarito Oficial: C**
Porque 5 + 5 = 10.
</details>

## EIXO 2: Aprofundamento
Teoria do eixo 2.

## Bateria de Questões Reais Comentadas

### Questão 01
**Banca:** Instituto ACCESS
Questão real final.
(A) Opção A
(B) Opção B
(C) Opção C
(D) Opção D
<details><summary><b>Ver Gabarito</b></summary>
**Gabarito Oficial: D**
Explicação final.
</details>

## Checklist de Fixação Ativa
- [ ] Item 1
`;

    const parsed = parseLessonIntoAxes(sample);
    expect(parsed.hasAxes).toBe(true);
    expect(parsed.axes).toHaveLength(2);
    expect(parsed.axes[0].cleanTitle).toBe("Fundamentos");
    expect(parsed.axes[0].rawMd).toContain("## EIXO 1: Fundamentos");
    expect(parsed.axes[0].rawMd).toContain("Teoria do eixo 1.");
    expect(parsed.axes[0].rawMd).toContain("### Questão 01");
    expect(parsed.axes[0].rawMd).not.toContain("## EIXO 2");
    expect(parsed.axes[0].checkpointQuestions).toHaveLength(3);
    expect(parsed.axes[0].checkpointQuestions[0].answer).toBe("B");
    expect(parsed.axes[1].checkpointQuestions).toHaveLength(0);
    expect(parsed.finalQuestions).toHaveLength(1);
    expect(parsed.finalQuestions[0].answer).toBe("D");
    expect(parsed.checklistMd).toContain("Checklist de Fixação Ativa");
  });

  it("divide corretamente uma aula real existente (semana-04/matematica_semana_04.md)", () => {
    const filePath = path.resolve(__dirname, "../../../../semana-04/matematica_semana_04.md");
    const md = fs.readFileSync(filePath, "utf8");
    const parsed = parseLessonIntoAxes(md);

    expect(parsed.hasAxes).toBe(true);
    expect(parsed.axes.length).toBe(3);
    expect(parsed.finalQuestions.length).toBeGreaterThanOrEqual(10);
    expect(parsed.checklistMd).toContain("Checklist");
  });

  it("divide corretamente a lista de fixação da Semana 05 em 4 blocos com 40 questões e gráficos SVG zoomáveis", () => {
    const filePath = path.resolve(
      __dirname,
      "../../../../semana-05/exercicios_fixacao_equacoes_inequacoes_semana_05.md"
    );
    const md = fs.readFileSync(filePath, "utf8");
    const parsed = parseLessonIntoAxes(md);

    expect(parsed.hasAxes).toBe(true);
    expect(parsed.axes).toHaveLength(4);
    expect(parsed.finalQuestions).toHaveLength(0);

    for (const axis of parsed.axes) {
      expect(axis.checkpointQuestions).toHaveLength(10);
      for (const q of axis.checkpointQuestions) {
        expect(Object.keys(q.options).sort()).toEqual(["A", "B", "C", "D"]);
      }
    }

    const svgCountBloco3 = parsed.axes[2].checkpointQuestions.filter((q) =>
      q.statement.includes("<svg")
    ).length;
    const svgCountBloco4 = parsed.axes[3].checkpointQuestions.filter((q) =>
      q.statement.includes("<svg")
    ).length;

    expect(svgCountBloco3).toBe(5);
    expect(svgCountBloco4).toBe(6);

    for (const axis of [parsed.axes[2], parsed.axes[3]]) {
      for (const q of axis.checkpointQuestions) {
        if (q.statement.includes("<svg")) {
          const html = renderRichMarkdown(q.statement, `test_q${q.num}`);
          expect(html).toContain("<svg");
          expect(html).toContain('data-zoom-diagram="true"');
        }
      }
    }
  });
});
