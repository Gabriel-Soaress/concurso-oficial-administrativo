import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { renderAtomicMathRow, renderDisplayMathResponsive, renderInlineMathResponsive } from "../katex";
import { renderRichMarkdown } from "../markdown";

describe("renderDisplayMathResponsive & renderAtomicMathRow (papel e caneta + unidades atômicas)", () => {
  it("renderAtomicMathRow mantém unidades de setas (4 -> 10) indivisíveis em .math-atom e só separa no conector 'e'", () => {
    const html = renderAtomicMathRow(
      "\\uparrow \\text{Minutos } (4 \\to 10) \\quad \\text{e} \\quad \\uparrow \\text{Páginas } (120 \\to x)"
    );
    const atoms = html.match(/class="math-atom"/g) || [];
    expect(atoms.length).toBe(2);
    expect(html).toContain(">e<");
    expect(html).not.toContain("Minutos</span></span>"); // Garante unidade atômica intacta
  });

  it("renderInlineMathResponsive separa \\xrightarrow em múltiplos spans quebráveis para não vazar cards", () => {
    const html = renderInlineMathResponsive("\\frac{x}{2} + \\frac{x}{3} = 10 \\xrightarrow{\\text{MMC}=6} 3x + 2x = 60");
    const spans = html.match(/class="lesson-math-inline\b[^"]*"/g) || [];
    expect(spans.length).toBe(3);
  });

  it("quebra equações com \\implies em linhas verticais separadas por seta ↓", () => {
    const html = renderDisplayMathResponsive("7x + 180 = 10x \\implies 3x = 180 \\implies x = \\mathbf{60}");
    expect(html).toContain('class="lesson-math-block"');
    const rows = html.match(/class="lesson-math-row"/g) || [];
    const arrows = html.match(/class="lesson-math-step-arrow"/g) || [];
    expect(rows.length).toBe(3);
    expect(arrows.length).toBe(2);
    expect(html).toContain("↓");
  });

  it("quebra cadeias longas com múltiplos '=' em linhas verticais sem colar '=' no termo anterior", () => {
    const tex =
      "\\frac{3}{4} + \\frac{5}{6} = \\frac{9}{12} + \\frac{10}{12} = \\frac{9 + 10}{12} = \\mathbf{\\frac{19}{12}}";
    const html = renderDisplayMathResponsive(tex);
    const rows = html.match(/class="lesson-math-row"/g) || [];
    expect(rows.length).toBe(3);
  });

  it("não cola '=' na expressão quando separa igualdades de cálculo", () => {
    const tex = "3 \\times 20 + 15 = 60 + 15 = \\text{R\\$ } 75{,}00";
    const html = renderDisplayMathResponsive(tex);
    expect(html).toContain('class="lesson-math-row"');
    // O segundo '=' recebe atomo vazio {} à esquerda, virando relation binária (mrel) no KaTeX
    expect(html).toContain("mrel");
  });
});

describe("renderRichMarkdown (tabelas, tabelas indentadas e blocos ASCII)", () => {
  it("renderiza tabela indentada dentro de lista como <table class='lesson-table'>", () => {
    const md = `* **Método 1 — Setas:**
  | Impressoras | Folhetos/Carnês | Horas ($x$) |
  | :---: | :---: | :---: |
  | $4$ | $2.400$ | $6$ |
  | $6$ | $5.400$ | $x$ |

  - Comparando **Impressoras vs. Horas**`;
    const html = renderRichMarkdown(md, "t_ind_table");
    expect(html).toContain('<table class="lesson-table">');
    expect(html).toContain('data-label="Impressoras"');
    expect(html).not.toContain("| :--- |");
  });

  it("converte bloco ASCII de 2 colunas separadas por '|' em grid de 2 cards sem estourar", () => {
    const md = [
      "```text",
      "================================================================================",
      "   CAMINHO A: MÉTODO DA SUBSTITUIÇÃO     |    CAMINHO B: MÉTODO DA ADIÇÃO",
      "================================================================================",
      " 1. Na 1ª linha (x + y = 20), isole o x: | 1. Queremos achar o y:",
      "       x = 20 - y                        |    -2x - 2y = -40",
      " 2. Substitua na 2ª linha:               |     2x + 5y =  64",
      "       2(20 - y) + 5y = 64               |          3y =  24  --> y = 8!",
      "```",
    ].join("\n");
    const html = renderRichMarkdown(md, "t_ascii_2col");
    expect(html).toContain('class="edu-cards-grid grid-2 grid-2-ascii"');
    expect(html).toContain("CAMINHO A: MÉTODO DA SUBSTITUIÇÃO");
    expect(html).toContain("CAMINHO B: MÉTODO DA ADIÇÃO");
  });

  it("NÃO transforma grade de fatoração (12 , 18 | 2) em comparação de 2 colunas", () => {
    const md = [
      "```text",
      "  12 , 18 | 2  (ambos dividem por 2)",
      "   6 ,  9 | 2  (6 divide; 9 repete)",
      "   3 ,  9 | 3  (ambos dividem por 3)",
      "   1 ,  3 | 3  (3 divide por 3)",
      "   1 ,  1 |",
      "```",
    ].join("\n");
    const html = renderRichMarkdown(md, "t_factor");
    expect(html).toContain('class="ascii-diagram-wrap"');
    expect(html).not.toContain('class="edu-cards-grid grid-2"');
  });

  it("renderiza tabela Dicionário da Semana 04 real com lesson-table-wrap e sem pipes crus", () => {
    const filePath = path.resolve(__dirname, "../../../../semana-04/matematica_semana_04.md");
    const md = fs.readFileSync(filePath, "utf8");
    const html = renderRichMarkdown(md, "t_sem4");
    expect(html).toContain("lesson-table-wrap");
    expect(html).toContain("Comparação Lado a Lado");
    expect(html).toContain("A FÍSICA DOS BASTIDORES vs. O ATALHO DE PROVA");
  });

  it("envolve SVG avulso em container clicável com botão de expandir em tela cheia", () => {
    const md = [
      "Texto introdutório.",
      "",
      '<svg viewBox="0 0 740 260" role="img" aria-label="Diagrama Teste"><rect x="0" y="0" width="740" height="260" /></svg>',
    ].join("\n");
    const html = renderRichMarkdown(md, "t_svg_standalone");
    expect(html).toContain("<svg");
    expect(html).toContain('data-zoom-diagram="true"');
    expect(html).toContain("Expandir em tela cheia");
    expect(html).not.toContain("&lt;svg");
  });

  it("renderiza imagem Markdown com zoom e botão de expandir em tela cheia", () => {
    const md = "Veja o organograma abaixo:\n\n![Organograma](/revisao/teste.png)";
    const html = renderRichMarkdown(md, "t_md_img");
    expect(html).toContain('<img src="/revisao/teste.png" alt="Organograma"');
    expect(html).toContain('data-zoom-diagram="true"');
    expect(html).toContain('data-zoom-title="Organograma"');
    expect(html).toContain("Expandir em tela cheia");
  });

  it("converte <u>termo</u> em sublinhado destacado com segurança mantendo outras tags HTML escapadas", () => {
    const md = "Identifique o termo <u>urgente</u> sem executar <script>alert(1)</script>.";
    const html = renderRichMarkdown(md, "t_u_hl");
    expect(html).toContain('<u class="edu-term-highlight">urgente</u>');
    expect(html).toContain("&lt;script&gt;");
    expect(html).not.toContain("<script>");
  });

  it("converte <mark class='hl-*'> colorido com allowlist segura mantendo classes inválidas escapadas", () => {
    const md =
      '<mark class="hl-indigo">A Prefeitura</mark> <mark class="hl-emerald">publicou</mark> <mark class="evil">nada</mark>.';
    const html = renderRichMarkdown(md, "t_hl_mark");
    expect(html).toContain('<mark class="hl-indigo">A Prefeitura</mark>');
    expect(html).toContain('<mark class="hl-emerald">publicou</mark>');
    expect(html).toContain("&lt;mark class=&quot;evil&quot;&gt;".replace(/&quot;/g, '"'));
    expect(html).not.toContain('<mark class="evil">');
  });
});
