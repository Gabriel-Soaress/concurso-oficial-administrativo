import type { MCQuestion } from "@/types";

export interface ParsedMCResult {
  preMd: string;
  questions: ParsedMCItem[];
  postMd: string;
}

export interface ParsedMCItem extends MCQuestion {
  sectionIntroMd: string;
  answerExtra: string;
}

export function parseLessonWithMCQuestions(mdText: string): ParsedMCResult {
  const norm = String(mdText || "").replace(/\r\n/g, "\n");
  const firstQMatch = norm.search(/^###\s+Questão\s+\d+/m);
  if (firstQMatch === -1) {
    return { preMd: norm, questions: [], postMd: "" };
  }

  let preMd = norm.slice(0, firstQMatch).trim();
  const restMd = norm.slice(firstQMatch);

  let firstBlockIntroMd = "";
  const block1Match = preMd.search(/^##\s+(?:🎯\s*)?BLOCO\s+1\b/im);
  if (block1Match !== -1) {
    firstBlockIntroMd = preMd.slice(block1Match).trim();
    preMd = preMd.slice(0, block1Match).replace(/(?:\n---\s*)+$/, "").trim();
  }

  let postMd = "";
  const rawBlocks = restMd
    .split(/(?=^###\s+Questão\s+\d+)/m)
    .filter((b) => /^###\s+Questão\s+\d+/.test(b.trim()));
  let pendingSectionIntroMd = firstBlockIntroMd;

  const questions: ParsedMCItem[] = rawBlocks.map((block, idx) => {
    const qNum = String(idx + 1);
    const sectionIntroMd = pendingSectionIntroMd;
    pendingSectionIntroMd = "";

    let beforeDet = block;
    let detContent = "";
    let afterDet = "";
    if (block.includes("<details>")) {
      const parts = block.split(/<details>/i);
      beforeDet = parts[0];
      const detSplit = (parts[1] || "").split(/<\/details>/i);
      detContent = detSplit[0] || "";
      afterDet = detSplit.slice(1).join("</details>").trim();
    }

    const cleanAfterDet = afterDet
      .replace(/^(?:---+\s*\n?)+/, "")
      .replace(/(?:\n?\s*---+)+$/, "")
      .trim();

    if (cleanAfterDet) {
      if (idx < rawBlocks.length - 1) {
        pendingSectionIntroMd = cleanAfterDet;
      } else {
        postMd = cleanAfterDet;
      }
    }

    const lines = beforeDet.trim().split("\n");
    const headerLine = lines[0].replace(/^###\s+/, "").trim();
    let metaLine = "";
    let startStemIdx = 1;
    if (
      lines[1] &&
      (lines[1].includes("**Banca:**") || lines[1].includes("**Foco:**") || lines[1].includes("**Bloco:**"))
    ) {
      metaLine = lines[1].trim();
      startStemIdx = 2;
    }

    const stemLines: string[] = [];
    const options: Record<string, string> = {};
    let hasOption = false;

    for (let l = startStemIdx; l < lines.length; l++) {
      const lineStr = lines[l].trim();
      const optMatch = lineStr.match(/^(?:\(([A-E])\)|[-*]\s+\*\*([A-E])\)\*\*)\s+(.+)$/);
      if (optMatch) {
        hasOption = true;
        const letter = (optMatch[1] || optMatch[2]).toUpperCase();
        options[letter] = optMatch[3].trim();
      } else if (!hasOption) {
        stemLines.push(lines[l]);
      }
    }

    const gabMatch = detContent.match(/\*\*Gabarito Oficial:\s*(?:Letra\s+)?\(?([A-E])\)?([^*]*)\*\*/i);
    const answerLetter = gabMatch ? gabMatch[1].toUpperCase() : "A";
    const answerExtra = gabMatch && gabMatch[2] ? gabMatch[2].trim() : "";

    const commentaryMd = detContent
      .replace(/<summary>[\s\S]*?<\/summary>/gi, "")
      .replace(/\*\*Gabarito Oficial:[^*]+\*\*/gi, "")
      .trim();

    return {
      num: qNum,
      header: headerLine,
      banca: metaLine,
      statement: stemLines.join("\n").trim(),
      options,
      answer: answerLetter,
      commentary: commentaryMd,
      sectionIntroMd,
      answerExtra,
    };
  });

  return { preMd, questions, postMd };
}
