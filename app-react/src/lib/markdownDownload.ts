import type { LessonAxis, LessonDocument, ParsedLessonStepper } from "@/types";

/**
 * Normaliza o radical de um nome de arquivo removendo extensão `.md`, acentos
 * e caracteres inválidos para gerar nomes seguros de download.
 */
export function sanitizeFileStem(input: string): string {
  const withoutExt = String(input || "").replace(/\.md$/i, "");
  const ascii = withoutExt.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const stem = ascii
    .replace(/[^a-zA-Z0-9_-]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .toLowerCase();
  return stem || "aula";
}

export function buildLessonMdFilename(
  doc: Pick<LessonDocument, "filename" | "title">
): string {
  return `${sanitizeFileStem(doc.filename || doc.title)}.md`;
}

export function buildAxisMdFilename(
  doc: Pick<LessonDocument, "filename" | "title">,
  axisIndex: number
): string {
  const paddedAxis = String(axisIndex).padStart(2, "0");
  return `${sanitizeFileStem(doc.filename || doc.title)}_eixo_${paddedAxis}.md`;
}

export function buildFullLessonMarkdown(
  doc: Pick<LessonDocument, "content">
): string {
  const normalized = String(doc.content || "").replace(/\r\n/g, "\n");
  return `${normalized.trimEnd()}\n`;
}

/**
 * Monta um Markdown autônomo contendo apenas o eixo selecionado, ideal para
 * estudo focado ou importação como fonte no NotebookLM.
 */
export function buildAxisMarkdown(
  lessonTitle: string,
  axis: Pick<LessonAxis, "index" | "rawMd">,
  trailingRawBlocks: string[] = []
): string {
  const cleanTitle =
    String(lessonTitle || "").replace(/^#+\s*/, "").trim() || `Eixo ${axis.index}`;
  const blocks = [axis.rawMd, ...trailingRawBlocks]
    .map((block) => String(block || "").replace(/\r\n/g, "\n").trim())
    .filter(Boolean);

  const parts = [
    `# ${cleanTitle}`,
    `> Extrato do **Eixo ${axis.index}** — pronto para estudo focado ou importação no NotebookLM.`,
    ...blocks,
  ];

  return `${parts.join("\n\n").replace(/\r\n/g, "\n").trimEnd()}\n`;
}

/**
 * Resolve o conteúdo e o nome do arquivo de um eixo em módulos Rich TSX.
 * Quando um módulo React agrupa eixos finais do Markdown no último eixo
 * (ex.: Semana 03 Português com 6 eixos TSX vs. 7 no MD), incorpora os eixos
 * finais restantes para não perder conteúdo no download.
 */
export function resolveRichAxisMarkdown(
  doc: LessonDocument | null,
  parsed: ParsedLessonStepper | null,
  richAxisIndex: number,
  totalRichAxes: number
): { content: string; filename: string } | null {
  if (!doc || !parsed || !parsed.hasAxes) return null;
  const matched = parsed.axes.find((a) => a.index === richAxisIndex);
  if (!matched) return null;

  const trailingRawBlocks =
    richAxisIndex === totalRichAxes && parsed.axes.length > totalRichAxes
      ? parsed.axes.slice(richAxisIndex).map((a) => a.rawMd)
      : [];

  return {
    content: buildAxisMarkdown(doc.title, matched, trailingRawBlocks),
    filename: buildAxisMdFilename(doc, richAxisIndex),
  };
}

export function triggerMarkdownDownload(content: string, filename: string): void {
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
