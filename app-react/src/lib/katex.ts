import katex from "katex";

export function escapeHtml(str: string): string {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function slugifyHeading(text: string): string {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function fallbackMathFormat(tex: string): string {
  let s = escapeHtml(String(tex || "").replace(/\\\$/g, "$"));
  s = s.replace(/\\text\{([^{}]*)\}/g, "$1");
  s = s.replace(/\\mathbf\{([^{}]*)\}/g, "<strong>$1</strong>");
  s = s
    .replace(/\\mathbb\{U\}/g, "𝕌")
    .replace(/\\mathbb\{N\}/g, "ℕ")
    .replace(/\\mathbb\{Z\}/g, "ℤ")
    .replace(/\\mathbb\{Q\}/g, "ℚ")
    .replace(/\\mathbb\{I\}/g, "𝕀")
    .replace(/\\mathbb\{R\}/g, "ℝ");
  s = s.replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, "($1)/($2)");
  s = s
    .replace(/\\times/g, "×")
    .replace(/\\cdot/g, "·")
    .replace(/\\div/g, "÷")
    .replace(/\\implies/g, "⇒")
    .replace(/\\iff/g, "⇔")
    .replace(/\\to/g, "→")
    .replace(/\\leftrightarrow/g, "↔")
    .replace(/\\dots/g, "...");
  s = s
    .replace(/\\cup/g, "∪")
    .replace(/\\cap/g, "∩")
    .replace(/\\in/g, "∈")
    .replace(/\\notin/g, "∉")
    .replace(/\\subset/g, "⊂")
    .replace(/\\subseteq/g, "⊆")
    .replace(/\\not\\subset/g, "⊄")
    .replace(/\\emptyset/g, "∅")
    .replace(/\\neq/g, "≠")
    .replace(/\\le/g, "≤")
    .replace(/\\ge/g, "≥");
  s = s.replace(/\\\{/g, "{").replace(/\\\}/g, "}").replace(/\{,\}/g, ",");
  return `<code class="font-mono font-bold text-indigo-600 dark:text-indigo-400">${s}</code>`;
}

export function renderKaTeXSafe(tex: string, displayMode = false): string {
  const cleanTex = String(tex || "")
    .replace(/\x09ext\{/g, "\\text{")
    .replace(/\x0crac\{/g, "\\frac{")
    .replace(/(^|[^\\])mathbf\{/g, "$1\\mathbf{")
    .replace(/(^|[^\\])implies/g, "$1\\implies")
    .replace(/@@ESC_DOLLAR@@/g, "\\$")
    .replace(/@@CURR_BRL@@/g, "R\\$")
    .replace(/@@CURR_USD@@/g, "US\\$")
    .replace(/(^|[^\\])\$/g, "$1\\$")
    .trim();

  try {
    return katex.renderToString(cleanTex, {
      displayMode: !!displayMode,
      throwOnError: false,
      output: "html",
      strict: false,
    });
  } catch {
    return fallbackMathFormat(cleanTex);
  }
}

function splitTopLevelEquals(texStr: string, minLen = 38): string[] {
  const s = String(texStr || "").trim();
  if (s.length <= minLen || s.includes("\\begin{")) return [s];
  const parts: string[] = [];
  let braceDepth = 0;
  let parenDepth = 0;
  let cur = "";
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === "\\" && i + 1 < s.length && "{}()[]$%&#_".includes(s[i + 1])) {
      cur += ch + s[i + 1];
      i++;
      continue;
    }
    if (ch === "{") braceDepth++;
    else if (ch === "}" && braceDepth > 0) braceDepth--;
    else if (ch === "(" || ch === "[") parenDepth++;
    else if ((ch === ")" || ch === "]") && parenDepth > 0) parenDepth--;

    if (
      ch === "=" &&
      braceDepth === 0 &&
      parenDepth === 0 &&
      s[i - 1] !== "!" &&
      s[i - 1] !== "<" &&
      s[i - 1] !== ">" &&
      s[i + 1] !== "="
    ) {
      if (cur.trim()) parts.push(cur.trim());
      cur = "{}= ";
    } else {
      cur += ch;
    }
  }
  if (cur.trim()) parts.push(cur.trim());
  return parts.length > 1 ? parts : [s];
}

type AtomicSegment =
  | { type: "math"; tex: string }
  | { type: "conn"; kind: "e" | "space" | "imp" | "iff" | "longarrow" }
  | { type: "xarrow"; tex: string };

function tokenizeTopLevelConnectors(texStr: string): AtomicSegment[] {
  const s = String(texStr || "").trim();
  if (!s) return [];
  if (s.includes("\\begin{")) return [{ type: "math", tex: s }];

  const segments: AtomicSegment[] = [];
  let braceDepth = 0;
  let parenDepth = 0;
  let buf = "";

  const flushBuf = () => {
    const t = buf.trim();
    if (t) segments.push({ type: "math", tex: t });
    buf = "";
  };

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === "\\" && i + 1 < s.length && "{}()[]$%&#_".includes(s[i + 1])) {
      buf += ch + s[i + 1];
      i++;
      continue;
    }

    if (braceDepth === 0 && parenDepth === 0 && ch === "\\") {
      const rest = s.slice(i);
      const mE = rest.match(/^\\quad\s*\\text\{\s*e\s*\}\s*\\quad/);
      if (mE) {
        flushBuf();
        segments.push({ type: "conn", kind: "e" });
        i += mE[0].length - 1;
        continue;
      }
      const mSpace = rest.match(/^\\qquad+|^\\quad+/);
      if (mSpace) {
        flushBuf();
        segments.push({ type: "conn", kind: "space" });
        i += mSpace[0].length - 1;
        continue;
      }
      const mIff = rest.match(/^\\Longleftrightarrow|^\\iff(?![a-zA-Z])/);
      if (mIff) {
        flushBuf();
        segments.push({ type: "conn", kind: "iff" });
        i += mIff[0].length - 1;
        continue;
      }
      const mImp = rest.match(/^\\Longrightarrow|^\\implies(?![a-zA-Z])/);
      if (mImp) {
        flushBuf();
        segments.push({ type: "conn", kind: "imp" });
        i += mImp[0].length - 1;
        continue;
      }
      const mLong = rest.match(/^\\longrightarrow(?![a-zA-Z])/);
      if (mLong) {
        flushBuf();
        segments.push({ type: "conn", kind: "longarrow" });
        i += mLong[0].length - 1;
        continue;
      }
      const mXa = rest.match(/^\\xrightarrow\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/);
      if (mXa) {
        flushBuf();
        segments.push({ type: "xarrow", tex: mXa[0] });
        i += mXa[0].length - 1;
        continue;
      }
    }

    if (ch === "{") braceDepth++;
    else if (ch === "}" && braceDepth > 0) braceDepth--;
    else if (ch === "(" || ch === "[") parenDepth++;
    else if ((ch === ")" || ch === "]") && parenDepth > 0) parenDepth--;

    buf += ch;
  }
  flushBuf();
  return segments;
}

function renderAtomChunks(atomTex: string, useDisplayStyle: boolean): string {
  const s = atomTex.trim();
  if (!s) return "";
  if (s.includes("\\begin{")) {
    return `<span class="math-atom">${renderKaTeXSafe(s, useDisplayStyle)}</span>`;
  }
  const stylePrefix =
    useDisplayStyle && !s.startsWith("\\displaystyle") ? "\\displaystyle " : "";

  const eqParts = splitTopLevelEquals(s, 38);
  let normalizedChunks = eqParts;
  if (eqParts.length >= 2 && eqParts[0].length <= 12) {
    const firstCombined = `${eqParts[0]} ${eqParts[1].replace(/^\{=\}|^\{\}=/, "=")}`.trim();
    normalizedChunks = [firstCombined, ...eqParts.slice(2)];
  }

  return normalizedChunks
    .map((chunk) => `<span class="math-atom">${renderKaTeXSafe(stylePrefix + chunk, false)}</span>`)
    .join(" ");
}

/**
 * Renderiza uma linha matemática dividindo apenas em conectores semânticos (e, ⇒, ⟶)
 * e mantendo cada unidade atômica (ex: ↑ Minutos (4 → 10)) indivisível em sequência direta.
 */
export function renderAtomicMathRow(rawTex: string, useDisplayStyle = true): string {
  const segments = tokenizeTopLevelConnectors(rawTex);
  if (segments.length === 0) return "";

  return segments
    .map((seg) => {
      if (seg.type === "conn") {
        switch (seg.kind) {
          case "e":
            return `<span class="px-1.5 text-xs sm:text-sm font-sans font-bold text-sec">e</span>`;
          case "space":
            return `<span class="w-2 inline-block"></span>`;
          case "imp":
            return `<span class="px-1 font-mono font-extrabold text-indigo-600 dark:text-indigo-400">⇒</span>`;
          case "iff":
            return `<span class="px-1 font-mono font-extrabold text-indigo-600 dark:text-indigo-400">⇔</span>`;
          case "longarrow":
            return `<span class="px-1 font-mono font-extrabold text-indigo-600 dark:text-indigo-400">⟶</span>`;
        }
      }
      if (seg.type === "xarrow") {
        const prefix = useDisplayStyle ? "\\displaystyle " : "";
        return `<span class="math-atom">${renderKaTeXSafe(prefix + seg.tex, false)}</span>`;
      }
      return renderAtomChunks(seg.tex, useDisplayStyle);
    })
    .join(" ");
}

function renderStepRows(stepTex: string): string {
  const trimmed = stepTex.trim();
  if (!trimmed) return "";

  const eqParts = splitTopLevelEquals(trimmed, 44);
  if (eqParts.length >= 3) {
    // Estilo Papel & Caneta: 1ª linha traz LHS = RHS₁; linhas seguintes vão abaixo começando com =
    const firstLine = `${eqParts[0]} ${eqParts[1].replace(/^\{=\}|^\{\}=/, "=")}`.trim();
    const restLines = eqParts.slice(2);
    return [firstLine, ...restLines]
      .map((line) => `<div class="lesson-math-row">${renderAtomicMathRow(line, true)}</div>`)
      .join("");
  }

  return `<div class="lesson-math-row">${renderAtomicMathRow(trimmed, true)}</div>`;
}

export function renderDisplayMathResponsive(rawTex: string): string {
  let s = String(rawTex || "").trim();
  if (s.includes("\\begin{")) {
    return `<div class="lesson-math-block"><div class="lesson-math-row"><span class="math-atom">${renderKaTeXSafe(s, true)}</span></div></div>`;
  }

  let noteHtml = "";
  const noteMatch = s.match(/\\quad\s*(?:\\left)?\(\s*\\text\{([^{}]+)\}(?:\\right)?\)\s*$/);
  if (noteMatch) {
    noteHtml = `<div class="w-full text-xs sm:text-sm font-sans font-semibold text-sec mt-1">${escapeHtml(noteMatch[1])}</div>`;
    s = s.slice(0, noteMatch.index).trim();
  }

  const norm = s
    .replace(/\\qquad+/g, " @@ROW_SEP@@ ")
    .replace(/\\quad\s*\\text\{e\}\s*\\quad/g, " @@TEXT_E_SEP@@ ")
    .replace(/\\implies|\\Longrightarrow/g, " @@ARROW_IMP@@ ")
    .replace(/\\Longleftrightarrow/g, " @@ARROW_IFF@@ ");

  const rawTokens = norm.split(/\s*(@@(?:ARROW_IMP|ARROW_IFF|ROW_SEP|TEXT_E_SEP)@@)\s*/);
  const hasVerticalFlow =
    rawTokens.includes("@@ARROW_IMP@@") ||
    rawTokens.includes("@@ARROW_IFF@@") ||
    rawTokens.includes("@@ROW_SEP@@") ||
    (rawTokens.includes("@@TEXT_E_SEP@@") && s.length > 44);

  if (hasVerticalFlow) {
    const rowsHtml: string[] = [];
    for (const tok of rawTokens) {
      const t = tok.trim();
      if (!t) continue;
      if (t === "@@ARROW_IMP@@") {
        rowsHtml.push(`<div class="lesson-math-step-arrow" aria-hidden="true">↓</div>`);
      } else if (t === "@@ARROW_IFF@@") {
        rowsHtml.push(`<div class="lesson-math-step-arrow" aria-hidden="true">⇅ ⇔</div>`);
      } else if (t === "@@ROW_SEP@@") {
        // Apenas separa em linhas distintas sem seta de implicação
      } else if (t === "@@TEXT_E_SEP@@") {
        rowsHtml.push(`<div class="text-xs font-sans font-bold uppercase tracking-wider text-mut">e</div>`);
      } else {
        rowsHtml.push(renderStepRows(t));
      }
    }
    return `<div class="lesson-math-block">${rowsHtml.join("")}${noteHtml}</div>`;
  }

  // Sem setas de implicação ou separadores longos: ainda quebra cadeias com múltiplos "=" no estilo papel e caneta
  return `<div class="lesson-math-block">${renderStepRows(s)}${noteHtml}</div>`;
}

export function renderInlineMathResponsive(rawTex: string): string {
  const s = String(rawTex || "").trim();
  if (s.includes("\\begin{")) {
    return `<span class="lesson-math-inline math-atom">${renderKaTeXSafe(s, false)}</span>`;
  }
  const hasConnectors = s.includes("\\quad") || s.includes("\\implies") || s.includes("\\xrightarrow");
  if (!hasConnectors) {
    if (s.length <= 42) {
      return `<span class="lesson-math-inline math-atom">${renderKaTeXSafe(s, false)}</span>`;
    }
    const eqChunks = splitTopLevelEquals(s, 42);
    if (eqChunks.length > 1) {
      return eqChunks
        .map((c) => `<span class="lesson-math-inline math-atom">${renderKaTeXSafe(c, false)}</span>`)
        .join(" ");
    }
    return `<span class="lesson-math-inline">${renderKaTeXSafe(s, false)}</span>`;
  }
  const xArrows: string[] = [];
  const norm = s
    .replace(/\\xrightarrow\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g, (full) => {
      const idx = xArrows.length;
      xArrows.push(full);
      return ` @@INL_XARROW_${idx}@@ `;
    })
    .replace(/\\quad\s*\\text\{e\}\s*\\quad/g, " @@INL_E@@ ")
    .replace(/\\quad+/g, " @@INL_SPACE@@ ")
    .replace(/\\implies|\\Longrightarrow/g, " @@INL_IMP@@ ");
  const parts = norm.split(/\s*(@@(?:INL_E|INL_SPACE|INL_IMP|INL_XARROW_\d+)@@)\s*/);
  return parts
    .map((p) => {
      const pt = p.trim();
      if (!pt) return "";
      if (pt === "@@INL_E@@") return " e ";
      if (pt === "@@INL_SPACE@@") return " ";
      if (pt === "@@INL_IMP@@") return ` <strong class="text-indigo-600 dark:text-indigo-400 px-0.5">⇒</strong> `;
      const xaMatch = pt.match(/^@@INL_XARROW_(\d+)@@$/);
      if (xaMatch) {
        return ` <span class="lesson-math-inline math-atom">${renderKaTeXSafe(xArrows[Number(xaMatch[1])], false)}</span> `;
      }
      return `<span class="lesson-math-inline math-atom">${renderKaTeXSafe(pt, false)}</span>`;
    })
    .join("");
}
