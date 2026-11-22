import type { LessonAxis, ParsedLessonStepper } from "@/types";
import { parseLessonWithMCQuestions } from "./mcParser";

const AXIS_HEADING_RE = /^##\s+(?:[^\w\s]*\s*)?(EIXO|BLOCO)\s+(\d+)\s*[:—–-]\s*(.+)$/i;
const SUMMARY_HEADING_RE = /^##\s+(?:[^\w\s]*\s*)?Sum[aá]rio\b/i;
const BATTERY_HEADING_RE =
  /^##\s+(?:[^\w\s]*\s*)?(?:BATERIA\b|SE[ÇC][ÃA]O DE FIXA[ÇC][ÃA]O\b|CADERNO DE \d+ QUEST[ÕO]ES\b|QUEST[ÕO]ES REAIS\b)/i;
const CHECKLIST_HEADING_RE = /^##\s+(?:[^\w\s]*\s*)?Checklist\b/i;

function stripMarkdownFormatting(text: string): string {
  return text
    .replace(/\*\*/g, "")
    .replace(/\*/g, "")
    .replace(/`/g, "")
    .replace(/^\s*[^\w\sÀ-ÿ]+\s*/, "")
    .trim();
}

/**
 * Divide qualquer aula Markdown em etapas navegáveis:
 * - Step 0: Sumário & Introdução
 * - Steps 1..N: Eixo 1..N (com até 3 questões diretas de checkpoint embutidas se presentes)
 * - Step Final: Bateria de Questões Reais + Adaptadas + Checklist de Fixação
 */
export function parseLessonIntoAxes(mdText: string): ParsedLessonStepper {
  const norm = String(mdText || "").replace(/\r\n/g, "\n");
  const lines = norm.split("\n");

  interface Section {
    headingLine: string;
    startLine: number;
    bodyLines: string[];
  }

  const preambleLines: string[] = [];
  const sections: Section[] = [];
  let current: Section | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^##\s+/.test(line.trim())) {
      if (current) sections.push(current);
      current = { headingLine: line.trim(), startLine: i, bodyLines: [] };
    } else if (current) {
      current.bodyLines.push(line);
    } else {
      preambleLines.push(line);
    }
  }
  if (current) sections.push(current);

  const axisSections = sections.filter((s) => AXIS_HEADING_RE.test(s.headingLine));

  // Se o documento não tiver EIXOs nem BLOCOs (ex: Banco ACCESS puro ou Caderno único de 30 questões)
  if (axisSections.length < 2) {
    const parsed = parseLessonWithMCQuestions(norm);
    return {
      hasAxes: false,
      introMd: parsed.preMd,
      summaryMd: "",
      axes: [],
      extraLabMd: "",
      finalQuestionsTitle: "Questões Comentadas",
      finalQuestions: parsed.questions,
      checklistMd: parsed.postMd,
    };
  }

  let summaryMd = "";
  const introExtraParts: string[] = [];
  const axes: LessonAxis[] = [];
  const extraLabParts: string[] = [];
  let finalQuestionsTitle = "Bateria Final: Questões Reais + Adaptadas";
  const finalBatteryParts: string[] = [];
  const checklistParts: string[] = [];

  let seenFirstAxis = false;
  let seenBattery = false;

  for (const sec of sections) {
    const h = sec.headingLine;
    const fullBlock = `${h}\n${sec.bodyLines.join("\n")}`.trim();

    if (SUMMARY_HEADING_RE.test(h)) {
      summaryMd = sec.bodyLines.join("\n").trim();
      continue;
    }

    if (CHECKLIST_HEADING_RE.test(h)) {
      checklistParts.push(fullBlock);
      continue;
    }

    const axisMatch = h.match(AXIS_HEADING_RE);
    if (axisMatch) {
      seenFirstAxis = true;
      const axisNum = axes.length + 1;
      const rawTitle = h.replace(/^##\s+/, "").trim();
      const cleanTitle = stripMarkdownFormatting(axisMatch[3] || rawTitle);
      const axisBody = sec.bodyLines.join("\n").trim();

      // Se o próprio Eixo já contiver questões diretas (### Questão ...) ou seção Checkpoint, separa teoria + checkpoint
      const parsedAxis = parseLessonWithMCQuestions(axisBody);

      axes.push({
        index: axisNum,
        id: `eixo-${axisNum}`,
        title: rawTitle,
        cleanTitle,
        theoryMd: parsedAxis.preMd + (parsedAxis.postMd ? `\n\n${parsedAxis.postMd}` : ""),
        checkpointQuestions: parsedAxis.questions,
      });
      continue;
    }

    if (BATTERY_HEADING_RE.test(h)) {
      seenBattery = true;
      finalQuestionsTitle = stripMarkdownFormatting(h.replace(/^##\s+/, ""));
      finalBatteryParts.push(sec.bodyLines.join("\n").trim());
      continue;
    }

    if (!seenFirstAxis) {
      introExtraParts.push(fullBlock);
    } else if (seenBattery) {
      finalBatteryParts.push(fullBlock);
    } else {
      // Seção entre o último eixo e a bateria (ex: Laboratório, Raio-X das Armadilhas, Cola de Bolso)
      // Se contiver ### Questão, vai para a bateria; senão, agrega ao extraLabMd
      if (/^###\s+Questão\s+\d+/m.test(fullBlock)) {
        finalBatteryParts.push(fullBlock);
      } else {
        extraLabParts.push(fullBlock);
      }
    }
  }

  const introMd = [preambleLines.join("\n").trim(), ...introExtraParts].filter(Boolean).join("\n\n");
  const finalBatteryParsed = parseLessonWithMCQuestions(finalBatteryParts.join("\n\n"));

  const finalChecklist = [
    finalBatteryParsed.postMd,
    ...checklistParts,
  ]
    .filter(Boolean)
    .join("\n\n");

  return {
    hasAxes: true,
    introMd,
    summaryMd,
    axes,
    extraLabMd: extraLabParts.join("\n\n"),
    finalQuestionsTitle,
    finalQuestions: finalBatteryParsed.questions,
    checklistMd: finalChecklist,
  };
}
