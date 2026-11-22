export interface WorksheetParsedItem {
  num: number;
  promptMd: string;
  primaryAns: string;
  primaryNorm: string;
  acceptedNorms: string[];
  explanationMd: string;
  requireExactForm: boolean;
}

export interface WorksheetCategory {
  title: string;
  items: WorksheetParsedItem[];
}

export interface ParsedWorksheetData {
  introMd: string;
  categories: WorksheetCategory[];
  allItems: WorksheetParsedItem[];
  outroMd: string;
}

export function normalizeMathAnswerString(raw: string): string {
  let s = String(raw || "")
    .trim()
    .replace(/\$/g, "")
    .replace(/\\left\(/g, "(")
    .replace(/\\right\)/g, ")")
    .replace(/\\sqrt\[(\d+)\]\{([^{}]+)\}/g, "r$1($2)")
    .replace(/\\sqrt\{([^{}]+)\}/g, "r($1)")
    .replace(/\\frac\{(\d+)\}\{(\d+)\}/g, "$1/$2")
    .replace(/\{,\}/g, ",")
    .replace(/(\d)\.(\d{3})(?!\d)/g, "$1$2")
    .replace(/\./g, ",")
    .replace(/\s+/g, " ")
    .replace(/\s*\/\s*/g, "/")
    .toLowerCase();

  s = s
    .replace(/(?:cbrt|raiz3)\s*(?:\(\s*(\d+)\s*\)|(\d+))/g, (_, a, b) => `r3(${a || b})`)
    .replace(/(?:√|raiz(?:\s+de)?)\s*(?:\(\s*(\d+)\s*\)|(\d+))/g, (_, a, b) => `r(${a || b})`)
    .replace(/(\d)\s*\*?\s*r/g, "$1r")
    .replace(/\s*([+\-])\s*/g, "$1");

  return s;
}

export function evalMathStringToFloat(str: string): number {
  const s = normalizeMathAnswerString(str);
  if (!s) return NaN;

  const mixedMatch = s.match(/^(-?\d+)\s+(\d+)\/(\d+)$/);
  if (mixedMatch) {
    const whole = parseFloat(mixedMatch[1]);
    const num = parseFloat(mixedMatch[2]);
    const den = parseFloat(mixedMatch[3]);
    if (den === 0) return NaN;
    return whole >= 0 ? whole + num / den : whole - num / den;
  }

  const fracMatch = s.match(/^(-?\d+)\/(-?\d+)$/);
  if (fracMatch) {
    const num = parseFloat(fracMatch[1]);
    const den = parseFloat(fracMatch[2]);
    return den !== 0 ? num / den : NaN;
  }

  const pctMatch = s.match(/^(-?\d+(?:,\d+)?)%$/);
  if (pctMatch) {
    return parseFloat(pctMatch[1].replace(",", ".")) / 100;
  }

  const dec = s.replace(",", ".");
  if (/^-?\d+(\.\d+)?$/.test(dec)) {
    return parseFloat(dec);
  }
  return NaN;
}

export function isWorksheetAnswerCorrect(userRaw: string, item: WorksheetParsedItem): boolean {
  const uNorm = normalizeMathAnswerString(userRaw);
  if (!uNorm) return false;

  for (const acc of item.acceptedNorms) {
    if (uNorm === acc) return true;
  }

  if (item.requireExactForm) {
    return false;
  }

  const uVal = evalMathStringToFloat(uNorm);
  const targetVal = evalMathStringToFloat(item.primaryNorm);
  if (!Number.isNaN(uVal) && !Number.isNaN(targetVal) && Math.abs(uVal - targetVal) < 1e-6) {
    return true;
  }
  return false;
}

export function parseWorksheetMarkdown(mdText: string): ParsedWorksheetData | null {
  const norm = String(mdText || "").replace(/\r\n/g, "\n");
  const qMarker = "## 📝 Caderno de Questões";
  const gMarker = norm.includes("## 🔑 Gabarito Comentado")
    ? "## 🔑 Gabarito Comentado"
    : norm.includes("## 💡 Respostas e Resoluções Passo a Passo")
      ? "## 💡 Respostas e Resoluções Passo a Passo"
      : null;
  const tMarker = "## 📊 Tabela de Lembretes";

  if (!norm.includes(qMarker) || !gMarker) {
    return null;
  }

  const introMd = norm.split(qMarker)[0].trim();
  const qSection = norm.split(qMarker)[1].split(gMarker)[0].trim();
  const afterG = norm.split(gMarker)[1];
  const gSection = afterG.includes(tMarker) ? afterG.split(tMarker)[0].trim() : afterG.trim();
  const outroMd = afterG.includes(tMarker) ? (tMarker + afterG.split(tMarker)[1]).trim() : "";

  const gabMap: Record<
    number,
    { primaryAns: string; primaryNorm: string; acceptedNorms: string[]; explanationMd: string }
  > = {};

  const gabRegex = /^(\d+)\.\s+\*\*(.+?)\*\*(.*)$/gm;
  let gm: RegExpExecArray | null;
  while ((gm = gabRegex.exec(gSection)) !== null) {
    const num = parseInt(gm[1], 10);
    const primaryAns = gm[2].trim();
    const restLine = gm[3].trim();
    const primaryNorm = normalizeMathAnswerString(primaryAns);
    const acceptedNorms = [primaryNorm];

    const altMatch = restLine.match(/\(ou\s+\$?([^$)]+)\$?\)/i);
    if (altMatch) {
      acceptedNorms.push(normalizeMathAnswerString(altMatch[1]));
    }

    gabMap[num] = {
      primaryAns,
      primaryNorm,
      acceptedNorms,
      explanationMd: `**${primaryAns}** ${restLine}`,
    };
  }

  const catBlocks = qSection
    .split(/(?=^###\s+\d+\.)/m)
    .filter((c) => c.trim().startsWith("###"));
  const categories: WorksheetCategory[] = [];
  const allItems: WorksheetParsedItem[] = [];

  for (const cb of catBlocks) {
    const lines = cb.trim().split("\n");
    const catTitle = lines[0].replace(/^###\s+/, "").trim();
    const items: WorksheetParsedItem[] = [];
    for (let i = 1; i < lines.length; i++) {
      const m = lines[i].trim().match(/^(\d+)\.\s+(.+?)\s+(?:\\_|_){2,}.*$/);
      if (m) {
        const num = parseInt(m[1], 10);
        const promptMd = m[2].trim();
        const gabInfo = gabMap[num] || {
          primaryAns: "",
          primaryNorm: "",
          acceptedNorms: [],
          explanationMd: "",
        };
        const requireExactForm = (num >= 1 && num <= 4) || (num >= 34 && num <= 39);
        const itemObj: WorksheetParsedItem = {
          num,
          promptMd,
          primaryAns: gabInfo.primaryAns,
          primaryNorm: gabInfo.primaryNorm,
          acceptedNorms: gabInfo.acceptedNorms,
          explanationMd: gabInfo.explanationMd,
          requireExactForm,
        };
        items.push(itemObj);
        allItems.push(itemObj);
      }
    }
    if (items.length > 0) {
      categories.push({ title: catTitle, items });
    }
  }

  return { introMd, categories, allItems, outroMd };
}
