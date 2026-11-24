import {
  escapeHtml,
  renderDisplayMathResponsive,
  renderInlineMathResponsive,
  slugifyHeading,
} from "./katex";

interface CfcPart {
  label: string;
  text: string;
}

function parseCfcFromText(rawText: string) {
  const lines = String(rawText || "").split("\n");
  const cleaned: string[] = [];
  let customTitle = "";
  for (const l of lines) {
    const c = l.replace(/^\s*[│>•*-]\s*|\s*│\s*$/g, "").trim();
    if (/^M[ÉE]TODO DID[ÁA]TICO/i.test(c)) {
      customTitle = c;
      continue;
    }
    if (/^[┌┐└┘├┤┬┴┼─═]+$/.test(c)) continue;
    if (c) cleaned.push(c);
  }
  const full = cleaned.join(" ");
  const parts = full.split(/(?=•|\bCAUSA\b|\bFATO\b|\bCONSEQU[ÊE]NCIA\b)/i);

  const res: { title: string; causa: CfcPart; fato: CfcPart; conseq: CfcPart } = {
    title: customTitle || "Método Didático: Causa ➔ Fato ➔ Consequência (3 Escalas)",
    causa: { label: "1. Causa Macro", text: "" },
    fato: { label: "2. Fato Político", text: "" },
    conseq: { label: "3. Consequência Regional (SP & Birigui)", text: "" },
  };

  for (const p of parts) {
    const trimmed = p.replace(/^•\s*/, "").trim();
    if (/^CAUSA/i.test(trimmed)) {
      const colonIdx = trimmed.indexOf(":");
      if (colonIdx !== -1) {
        res.causa.label = trimmed.slice(0, colonIdx).trim();
        res.causa.text = trimmed.slice(colonIdx + 1).trim();
      } else {
        res.causa.text = trimmed.replace(/^CAUSA\s*/i, "");
      }
    } else if (/^FATO/i.test(trimmed)) {
      const colonIdx = trimmed.indexOf(":");
      if (colonIdx !== -1) {
        res.fato.label = trimmed.slice(0, colonIdx).trim();
        res.fato.text = trimmed.slice(colonIdx + 1).trim();
      } else {
        res.fato.text = trimmed.replace(/^FATO\s*/i, "");
      }
    } else if (/^CONSEQU/i.test(trimmed)) {
      const colonIdx = trimmed.indexOf(":");
      if (colonIdx !== -1) {
        res.conseq.label = trimmed.slice(0, colonIdx).trim();
        res.conseq.text = trimmed.slice(colonIdx + 1).trim();
      } else {
        res.conseq.text = trimmed.replace(/^CONSEQU[ÊE]NCIA\s*/i, "");
      }
    }
  }
  return res;
}

function buildCfcPipelineHtml(title: string, causa: CfcPart, fato: CfcPart, conseq: CfcPart): string {
  const cleanTitle = escapeHtml(title || "Método Didático: Causa ➔ Fato ➔ Consequência (3 Escalas)");

  const formatCardText = (txt: string) => {
    if (!txt) return "";
    let s = String(txt).trim();
    const cfcMath: string[] = [];
    s = s
      .replace(/(?<![a-zA-Z0-9_\\])R\$/g, "@@CFC_BRL@@")
      .replace(/(?<![a-zA-Z0-9_\\])US\$/g, "@@CFC_USD@@");
    s = s.replace(/\$([^\$\n]+?)\$/g, (_, tex) => {
      const idx = cfcMath.length;
      cfcMath.push(renderInlineMathResponsive(tex));
      return `@@CFC_MATH_${idx}@@`;
    });
    s = escapeHtml(s);
    s = s.replace(/@@CFC_BRL@@/g, "R$").replace(/@@CFC_USD@@/g, "US$");
    s = s.replace(/&quot;([^&]+?)&quot;/g, "“$1”").replace(/"([^"]+?)"/g, "“$1”");
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-extrabold text-pri">$1</strong>');
    s = s.replace(/\*([^*\n]+)\*/g, '<em class="italic text-pri">$1</em>');
    s = s.replace(
      /`([^`]+)`/g,
      '<code class="font-mono text-xs px-1.5 py-0.5 rounded surface-muted text-indigo-600 dark:text-indigo-400">$1</code>'
    );
    cfcMath.forEach((tok, idx) => {
      s = s.replace(`@@CFC_MATH_${idx}@@`, () => tok);
    });
    return s;
  };

  return `
    <div class="cfc-pipeline my-5">
      <div class="cfc-header">
        <div class="cfc-header-title">
          <span class="text-base sm:text-lg">🧭</span>
          <span>${cleanTitle}</span>
        </div>
        <span class="cfc-header-badge">Conexão 3 Escalas</span>
      </div>
      <div class="cfc-grid">
        <div class="cfc-card causa">
          <div class="cfc-card-top">
            <span class="cfc-card-label">${escapeHtml(causa.label || "1. Causa Macro")}</span>
            <span class="cfc-card-pill">Origem</span>
          </div>
          <div class="cfc-card-text">${formatCardText(causa.text)}</div>
        </div>
        <div class="cfc-arrow-divider" aria-hidden="true"><span class="cfc-arrow-badge">➔</span></div>
        <div class="cfc-card fato">
          <div class="cfc-card-top">
            <span class="cfc-card-label">${escapeHtml(fato.label || "2. Fato Político")}</span>
            <span class="cfc-card-pill">O Marco</span>
          </div>
          <div class="cfc-card-text">${formatCardText(fato.text)}</div>
        </div>
        <div class="cfc-arrow-divider" aria-hidden="true"><span class="cfc-arrow-badge">➔</span></div>
        <div class="cfc-card consequencia">
          <div class="cfc-card-top">
            <span class="cfc-card-label">${escapeHtml(conseq.label || "3. Consequência")}</span>
            <span class="cfc-card-pill">SP & Birigui</span>
          </div>
          <div class="cfc-card-text">${formatCardText(conseq.text)}</div>
        </div>
      </div>
    </div>
  `;
}

function dedentLines(arr: string[]): string[] {
  const nonEmpty = arr.filter((l) => l.trim().length > 0);
  if (nonEmpty.length === 0) return arr.map((l) => l.trim());
  const minIndent = Math.min(...nonEmpty.map((l) => (l.match(/^\s*/) || [""])[0].length));
  return arr.map((l) => l.slice(minIndent).replace(/\s+$/, ""));
}

function trimBlankEdges(arr: string[]): string[] {
  let start = 0;
  let end = arr.length;
  while (start < end && !arr[start].trim()) start++;
  while (end > start && !arr[end - 1].trim()) end--;
  return arr.slice(start, end);
}

function renderAsciiCodeBlockHtml(rawCode: string): string {
  if (rawCode.includes("MÉTODO DIDÁTICO") && rawCode.includes("CAUSA") && rawCode.includes("CONSEQU")) {
    const parsed = parseCfcFromText(rawCode);
    return buildCfcPipelineHtml(parsed.title, parsed.causa, parsed.fato, parsed.conseq);
  }

  const lines = trimBlankEdges(rawCode.split("\n"));
  const isBorderLine = (l: string) => /^\s*[=─━-]{6,}\s*$/.test(l);

  // Detectar comparação ASCII em 2 colunas separadas por '|' alinhado (ex: Substituição | Adição)
  const contentLines = lines.filter((l) => l.trim().length > 0 && !isBorderLine(l));
  const pipedLines = contentLines.filter((l) => l.includes("|"));
  if (
    pipedLines.length >= 4 &&
    pipedLines.every((l) => l.split("|").length === 2)
  ) {
    const pipeCols = pipedLines.map((l) => l.indexOf("|")).sort((a, b) => a - b);
    const medianCol = pipeCols[Math.floor(pipeCols.length / 2)];
    const allAligned = medianCol >= 18 && pipeCols.every((c) => Math.abs(c - medianCol) <= 3);
    const firstParts = pipedLines[0].split("|");
    const leftHead = firstParts[0].trim();
    const rightHead = firstParts[1].trim();
    const isFactorization = /^\d+\*?(\s|$)/.test(rightHead);

    if (allAligned && leftHead.length >= 6 && rightHead.length >= 6 && !isFactorization) {
      const headerRawIdx = lines.indexOf(pipedLines[0]);
      const hasHeaderSep = headerRawIdx + 1 < lines.length && isBorderLine(lines[headerRawIdx + 1]);
      const bodyRaw = lines.slice(hasHeaderSep ? headerRawIdx + 2 : headerRawIdx + 1);
      const leftLines: string[] = [];
      const rightLines: string[] = [];
      for (const l of bodyRaw) {
        if (isBorderLine(l)) continue;
        if (!l.trim()) {
          leftLines.push("");
          rightLines.push("");
          continue;
        }
        const pIdx = l.indexOf("|");
        if (pIdx !== -1) {
          leftLines.push(l.slice(0, pIdx));
          rightLines.push(l.slice(pIdx + 1));
        } else {
          leftLines.push(l);
        }
      }
      const leftClean = dedentLines(trimBlankEdges(leftLines)).join("\n");
      const rightClean = dedentLines(trimBlankEdges(rightLines)).join("\n");
      return `
        <div class="edu-component my-5">
          <div class="edu-comp-header">
            <div class="edu-comp-title">
              <span class="edu-comp-icon">⚖️</span>
              <span>Comparação Lado a Lado</span>
            </div>
            <span class="edu-comp-badge">2 Métodos</span>
          </div>
          <div class="edu-cards-grid grid-2 grid-2-ascii">
            <div class="edu-card card-indigo">
              <h4 class="card-title text-sm sm:text-base">${escapeHtml(leftHead)}</h4>
              <div class="ascii-diagram-body !p-0"><pre class="ascii-diagram"><code>${escapeHtml(leftClean)}</code></pre></div>
            </div>
            <div class="edu-card card-emerald">
              <h4 class="card-title text-sm sm:text-base">${escapeHtml(rightHead)}</h4>
              <div class="ascii-diagram-body !p-0"><pre class="ascii-diagram"><code>${escapeHtml(rightClean)}</code></pre></div>
            </div>
          </div>
        </div>
      `;
    }
  }

  // Blocos ASCII com cabeçalho moldurado por ========
  let title = "";
  let workLines = [...lines];
  if (workLines.length > 0 && isBorderLine(workLines[workLines.length - 1])) {
    workLines.pop();
  }
  if (workLines.length >= 3 && isBorderLine(workLines[0]) && isBorderLine(workLines[2]) && workLines[1].trim()) {
    title = workLines[1].trim();
    workLines = workLines.slice(3);
  } else if (workLines.length > 0 && isBorderLine(workLines[0])) {
    workLines.shift();
  }

  workLines = trimBlankEdges(
    workLines.filter((l) => !/^\s*[=]{12,}\s*$/.test(l))
  );
  const cleanText = dedentLines(workLines).join("\n");
  const hasBoxChars = /[┌┐└┘├┤┬┴┼│]/.test(cleanText);
  const boxCls = hasBoxChars ? "ascii-diagram ascii-box" : "ascii-diagram";

  return `
    <div class="ascii-diagram-wrap">
      ${title ? `<div class="ascii-diagram-head">📌 ${escapeHtml(title)}</div>` : ""}
      <div class="ascii-diagram-body">
        <pre class="${boxCls}"><code>${escapeHtml(cleanText)}</code></pre>
      </div>
    </div>
  `;
}

function parseAsciiBoxHtml(rawBox: string): string {
  const lines = rawBox
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
  let title = "";
  const items: string[] = [];
  for (let l of lines) {
    if (/^[┌└├]/.test(l)) continue;
    l = l.replace(/^│\s*/, "").replace(/\s*│$/, "").trim();
    if (!l) continue;
    if (!title) title = l;
    else items.push(l);
  }
  return `
    <div class="lesson-callout callout-important my-4 p-4 rounded-xl border border-tech surface space-y-2.5 shadow-sm">
      ${title ? `<div class="text-xs sm:text-sm font-mono font-extrabold uppercase text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5"><span>📌</span> <span>${escapeHtml(title)}</span></div>` : ""}
      <div class="space-y-1.5 text-xs sm:text-sm leading-relaxed text-pri">
        ${items.map((it) => `<div>${escapeHtml(it)}</div>`).join("")}
      </div>
    </div>
  `;
}

function formatRawHtmlComponent(rawHtml: string): string {
  if (!rawHtml) return "";
  let s = String(rawHtml);
  s = s
    .replace(/(?<![a-zA-Z0-9_\\])R\$/g, "@@CURR_BRL@@")
    .replace(/(?<![a-zA-Z0-9_\\])US\$/g, "@@CURR_USD@@")
    .replace(/\\\$/g, "@@ESC_DOLLAR@@");
  s = s.replace(/\$\$([\s\S]*?)\$\$/g, (_, tex) => renderDisplayMathResponsive(tex));
  s = s.replace(/\$([^\$\n]+?)\$/g, (_, tex) => renderInlineMathResponsive(tex));
  s = s
    .replace(/@@CURR_BRL@@/g, "R$")
    .replace(/@@CURR_USD@@/g, "US$")
    .replace(/@@ESC_DOLLAR@@/g, "$");

  s = s.replace(/(>|^)([^<]+)(<|$)/g, (_, prefix, content, suffix) => {
    let fmt = content;
    fmt = fmt.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-pri">$1</strong>');
    fmt = fmt.replace(/(^|[^*])\*([^*\n]+)\*([^*]|$)/g, "$1<em>$2</em>$3");
    fmt = fmt.replace(
      /`([^`]+)`/g,
      '<code class="font-mono text-xs px-1.5 py-0.5 rounded surface-muted text-indigo-600 dark:text-indigo-400">$1</code>'
    );
    return prefix + fmt + suffix;
  });

  // Diagramas SVG clicáveis via delegação de evento data-zoom-diagram
  s = s.replace(/<svg\b([^>]*?)>([\s\S]*?)<\/svg>/gi, (fullSvg, attrs) => {
    const vbMatch = attrs.match(/viewBox=["']\s*[\d.-]+\s+[\d.-]+\s+([\d.]+)\s+([\d.]+)\s*["']/i);
    const vbWidth = vbMatch ? parseFloat(vbMatch[1]) : 0;
    const vbHeight = vbMatch ? parseFloat(vbMatch[2]) : 0;
    if (vbWidth >= 180 && vbHeight >= 100) {
      return `<div class="edu-zoomable-diagram" data-zoom-diagram="true" role="button" tabindex="0" aria-label="Ampliar diagrama em tela cheia">${fullSvg}<div class="text-center"><button type="button" class="edu-zoom-hint">🔍 Expandir em tela cheia</button></div></div>`;
    }
    return fullSvg;
  });

  // Imagens HTML dentro de componentes também ganham botão de expansão em tela cheia
  s = s.replace(/(<div[^>]*data-zoom-diagram[\s\S]*?<\/div>)|(<img\b[^>]*>)/gi, (match, existingWrap, imgTag) => {
    if (existingWrap) return existingWrap;
    if (imgTag) {
      return `<div class="edu-zoomable-diagram my-3" data-zoom-diagram="true" role="button" tabindex="0" aria-label="Ampliar imagem em tela cheia">${imgTag}<div class="text-center"><button type="button" class="edu-zoom-hint">🔍 Expandir em tela cheia</button></div></div>`;
    }
    return match;
  });
  return s;
}

function formatInlineMd(line: string): string {
  let s = String(line || "");
  s = s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  s = s.replace(
    /`([^`]+)`/g,
    '<code class="font-mono text-xs px-1.5 py-0.5 rounded surface-muted text-indigo-600 dark:text-indigo-400">$1</code>'
  );
  s = s.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (full, alt, rawSrc) => {
    const src = String(rawSrc || "").trim();
    if (!/^(https?:\/\/|\/|\.\/)/i.test(src)) return full;
    const altAttr = String(alt || "").replace(/"/g, "&quot;");
    const srcAttr = src.replace(/"/g, "&quot;");
    return `<span class="edu-zoomable-diagram block my-3" data-zoom-diagram="true" data-zoom-title="${altAttr}" role="button" tabindex="0" aria-label="Ampliar imagem em tela cheia"><img src="${srcAttr}" alt="${altAttr}" class="max-w-full h-auto rounded-xl mx-auto block" loading="lazy" /><span class="block text-center"><button type="button" class="edu-zoom-hint">🔍 Expandir em tela cheia</button></span></span>`;
  });
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    if (href.startsWith("#")) {
      return `<a href="${href}" data-anchor-slug="${escapeHtml(href.slice(1))}" class="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">${label}</a>`;
    }
    return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">${label}</a>`;
  });
  s = s.replace(/\*\*\*([^*]+)\*\*\*/g, "<strong><em>$1</em></strong>");
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-extrabold text-pri">$1</strong>');
  s = s.replace(/\*([^*\n]+)\*/g, "<em>$1</em>");
  s = s.replace(/&lt;u&gt;([\s\S]*?)&lt;\/u&gt;/gi, '<u class="edu-term-highlight">$1</u>');
  return s;
}

function renderNestedListLines(
  lines: string[],
  listCtxId: string,
  checkedMap: Record<string, boolean>
): string {
  if (!lines || lines.length === 0) return "";
  const getIndent = (s: string) => (s.match(/^(\s*)/)?.[1] || "").replace(/\t/g, "  ").length;
  const markerIndents = lines.filter((l) => /^(\s*)(\*|-|\d+\.)\s+/.test(l)).map(getIndent);
  const baseIndent = markerIndents.length > 0 ? Math.min(...markerIndents) : 0;
  const isOrdered = /^\d+\.\s+/.test(lines[0].trim());

  const items: { head: string; subLines: string[] }[] = [];
  let cur: { head: string; subLines: string[] } | null = null;

  for (const raw of lines) {
    const ind = getIndent(raw);
    const trimmed = raw.trim();
    const isMarker = /^(\*|-|\d+\.)\s+/.test(trimmed);

    if (isMarker && ind <= baseIndent + 1) {
      if (cur) items.push(cur);
      cur = {
        head: trimmed.replace(/^(\*|-|\d+\.)\s+/, ""),
        subLines: [],
      };
    } else if (cur) {
      if (isMarker || cur.subLines.length > 0) {
        cur.subLines.push(raw);
      } else {
        cur.head += " " + trimmed;
      }
    }
  }
  if (cur) items.push(cur);

  const renderedItems = items
    .map((it, idx) => {
      const chkMatch = it.head.match(/^\[([ xX])\]\s+(.+)$/);
      if (chkMatch) {
        const chkKey = `chk_${listCtxId}_${idx}`;
        const isChecked = !!checkedMap[chkKey];
        return `
          <li class="list-none -ml-4 my-1.5">
            <label class="flex items-start gap-3 p-3 rounded-xl border border-tech surface cursor-pointer hover:border-indigo-500/40 transition">
              <input type="checkbox" ${isChecked ? "checked" : ""} data-lesson-check="${escapeHtml(chkKey)}" class="check-custom mt-0.5" />
              <span class="text-sm sm:text-base leading-relaxed text-pri ${isChecked ? "line-through opacity-60" : ""}">${formatInlineMd(chkMatch[2])}</span>
            </label>
          </li>
        `;
      }
      const subHtml =
        it.subLines.length > 0 ? renderNestedListLines(it.subLines, `${listCtxId}_${idx}`, checkedMap) : "";
      return `<li class="leading-relaxed text-pri">${formatInlineMd(it.head)}${subHtml}</li>`;
    })
    .join("");

  const tag = isOrdered ? "ol" : "ul";
  const cls = isOrdered
    ? "list-decimal pl-5 sm:pl-6 space-y-2 text-[15px] sm:text-base my-2.5"
    : "list-disc pl-4 sm:pl-6 space-y-1.5 text-[14px] sm:text-[15px] my-1.5";
  return `<${tag} class="${cls}">${renderedItems}</${tag}>`;
}

function renderRichMarkdownStructure(
  text: string,
  contextId: string,
  checkedMap: Record<string, boolean>
): string {
  const lines = String(text || "").split("\n");
  const out: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    if (/^@@(CALLOUT_BLOCK|CODE_BLOCK|DETAILS_BLOCK|RAW_HTML_TOKEN)_\d+@@$/.test(trimmed)) {
      out.push(trimmed);
      i++;
      continue;
    }
    if (/^@@MATH_TOKEN_\d+@@$/.test(trimmed)) {
      out.push(`<div class="my-2">${trimmed}</div>`);
      i++;
      continue;
    }

    if (/^---+$/.test(trimmed)) {
      out.push('<hr class="my-6 border-t border-tech" />');
      i++;
      continue;
    }

    const hMatch = trimmed.match(/^(#{1,4})\s+(.+)$/);
    if (hMatch) {
      const level = hMatch[1].length;
      const titleRaw = hMatch[2];
      const slug = slugifyHeading(titleRaw.replace(/@@MATH_TOKEN_\d+@@/g, ""));
      const formattedTitle = formatInlineMd(titleRaw);
      if (level === 1) {
        out.push(
          `<h1 id="${slug}" class="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight pt-2 pb-1 text-indigo-600 dark:text-indigo-400">${formattedTitle}</h1>`
        );
      } else if (level === 2) {
        out.push(
          `<h2 id="${slug}" class="text-lg sm:text-xl font-extrabold tracking-tight pt-4 pb-1.5 border-b border-tech">${formattedTitle}</h2>`
        );
      } else if (level === 3) {
        out.push(`<h3 id="${slug}" class="text-base sm:text-lg font-bold pt-3 pb-1">${formattedTitle}</h3>`);
      } else {
        out.push(
          `<h4 id="${slug}" class="text-sm sm:text-base font-bold pt-2 text-indigo-600 dark:text-indigo-400">${formattedTitle}</h4>`
        );
      }
      i++;
      continue;
    }

    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|") && lines[i].trim().endsWith("|")) {
        tableLines.push(lines[i].trim());
        i++;
      }
      if (tableLines.length >= 2) {
        const parseCells = (row: string) =>
          row
            .slice(1, -1)
            .split("|")
            .map((c) => formatInlineMd(c.trim()));
        const headers = parseCells(tableLines[0]);
        const isSep = /^[\s|:-]+$/.test(tableLines[1]);
        const bodyRows = tableLines.slice(isSep ? 2 : 1).map(parseCells);
        const plainHeaders = tableLines[0]
          .slice(1, -1)
          .split("|")
          .map((c) => c.replace(/\*+/g, "").replace(/@@MATH_TOKEN_\d+@@/g, "").trim());

        out.push(`
          <div class="lesson-table-wrap">
            <table class="lesson-table">
              <thead><tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
              <tbody>
                ${bodyRows
                  .map(
                    (r) =>
                      `<tr>${r
                        .map((c, cIdx) => `<td data-label="${escapeHtml(plainHeaders[cIdx] || "")}">${c}</td>`)
                        .join("")}</tr>`
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
        `);
        continue;
      }
    }

    if (/^(\*|-|\d+\.)\s+/.test(trimmed)) {
      const blockLines: string[] = [];
      while (i < lines.length) {
        const ln = lines[i];
        const lnTrim = ln.trim();
        if (lnTrim.startsWith("|") && lnTrim.endsWith("|")) {
          break;
        }
        if (/^@@(CALLOUT_BLOCK|CODE_BLOCK|DETAILS_BLOCK|RAW_HTML_TOKEN)_\d+@@$/.test(lnTrim)) {
          break;
        }
        if (!lnTrim) {
          let nextNonEmpty = i + 1;
          while (nextNonEmpty < lines.length && !lines[nextNonEmpty].trim()) nextNonEmpty++;
          const nextTrim = nextNonEmpty < lines.length ? lines[nextNonEmpty].trim() : "";
          if (
            nextNonEmpty < lines.length &&
            !(nextTrim.startsWith("|") && nextTrim.endsWith("|")) &&
            !/^@@(CALLOUT_BLOCK|CODE_BLOCK|DETAILS_BLOCK|RAW_HTML_TOKEN)_\d+@@$/.test(nextTrim) &&
            (/^(\s*)(\*|-|\d+\.)\s+/.test(lines[nextNonEmpty]) || lines[nextNonEmpty].startsWith("  "))
          ) {
            i = nextNonEmpty;
            continue;
          }
          break;
        }
        if (/^(\s*)(\*|-|\d+\.)\s+/.test(ln) || ln.startsWith("  ")) {
          blockLines.push(ln);
          i++;
        } else {
          break;
        }
      }
      out.push(renderNestedListLines(blockLines, `${contextId}_L${i}`, checkedMap));
      continue;
    }

    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].trim().startsWith("#") &&
      !lines[i].trim().startsWith("|") &&
      !/^---+$/.test(lines[i].trim()) &&
      !/^(\*|-|\d+\.)\s+/.test(lines[i].trim()) &&
      !/^@@(CALLOUT_BLOCK|CODE_BLOCK|DETAILS_BLOCK|RAW_HTML_TOKEN)_\d+@@$/.test(lines[i].trim())
    ) {
      paraLines.push(formatInlineMd(lines[i].trim()));
      i++;
    }
    if (paraLines.length > 0) {
      out.push(
        `<p class="text-[15px] sm:text-base leading-relaxed text-pri font-normal my-3">${paraLines.join("<br/>")}</p>`
      );
    }
  }

  return out.join("\n");
}

function restoreTokens(
  htmlStr: string,
  calloutTokens: string[],
  codeTokens: string[],
  mathTokens: string[],
  detailsTokens: string[],
  rawHtmlTokens: string[]
): string {
  let res = String(htmlStr || "");
  rawHtmlTokens.forEach((tok, idx) => {
    res = res.replace(new RegExp(`@@RAW_HTML_TOKEN_${idx}@@`, "g"), () => tok);
  });
  detailsTokens.forEach((tok, idx) => {
    res = res.replace(new RegExp(`@@DETAILS_BLOCK_${idx}@@`, "g"), () => tok);
  });
  mathTokens.forEach((tok, idx) => {
    res = res.replace(new RegExp(`@@MATH_TOKEN_${idx}@@`, "g"), () => tok);
  });
  codeTokens.forEach((tok, idx) => {
    res = res.replace(new RegExp(`@@CODE_BLOCK_${idx}@@`, "g"), () => tok);
  });
  calloutTokens.forEach((tok, idx) => {
    res = res.replace(new RegExp(`@@CALLOUT_BLOCK_${idx}@@`, "g"), () => tok);
  });
  return res.replace(/@@ESC_DOLLAR@@/g, "$").replace(/@@CURR_BRL@@/g, "R$").replace(/@@CURR_USD@@/g, "US$");
}

export function renderRichMarkdown(
  mdText: string,
  contextId = "doc",
  checkedMap: Record<string, boolean> = {}
): string {
  if (!mdText) return "";
  let text = String(mdText).replace(/\r\n/g, "\n");

  const calloutTokens: string[] = [];
  const rawHtmlTokens: string[] = [];

  // Extrair <div class="edu-component"... balanceando divs aninhadas
  let searchIdx = 0;
  while (true) {
    const start = text.indexOf('<div class="edu-component', searchIdx);
    if (start === -1) break;
    let depth = 0;
    let pos = start;
    let end = -1;
    while (pos < text.length) {
      if (text.startsWith("<div", pos)) {
        depth++;
        pos += 4;
      } else if (text.startsWith("</div>", pos)) {
        depth--;
        pos += 6;
        if (depth === 0) {
          end = pos;
          break;
        }
      } else {
        pos++;
      }
    }
    if (end !== -1) {
      const rawBlock = text.slice(start, end);
      const hIdx = rawHtmlTokens.length;
      rawHtmlTokens.push(formatRawHtmlComponent(rawBlock));
      text = text.slice(0, start) + `\n@@RAW_HTML_TOKEN_${hIdx}@@\n` + text.slice(end);
      searchIdx = start + `\n@@RAW_HTML_TOKEN_${hIdx}@@\n`.length;
    } else {
      break;
    }
  }

  // Extrair <svg> avulsos (fora de <div class="edu-component">) para renderizar e ganhar zoom
  text = text.replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, (rawSvg) => {
    const hIdx = rawHtmlTokens.length;
    rawHtmlTokens.push(formatRawHtmlComponent(rawSvg));
    return `\n@@RAW_HTML_TOKEN_${hIdx}@@\n`;
  });

  const codeTokens: string[] = [];
  const mathTokens: string[] = [];
  const detailsTokens: string[] = [];

  // Blocos de citação e GitHub Alerts (> [!NOTE], > [!TIP], > [!CFC], etc.)
  const rawLines = text.split("\n");
  const normLines: string[] = [];
  let li = 0;
  while (li < rawLines.length) {
    if (rawLines[li].trim().startsWith(">")) {
      const qBlock: string[] = [];
      while (li < rawLines.length && rawLines[li].trim().startsWith(">")) {
        qBlock.push(rawLines[li].trim().replace(/^>\s?/, ""));
        li++;
      }
      const cIdx = calloutTokens.length;
      const firstLine = (qBlock[0] || "").trim();
      const alertM = firstLine.match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION|ESCALAS|CFC|PIPELINE)\]\s*(.*)$/i);
      if (alertM) {
        const kind = alertM[1].toUpperCase();
        const restFirst = alertM[2];
        if (kind === "ESCALAS" || kind === "CFC" || kind === "PIPELINE") {
          const parsed = parseCfcFromText([restFirst, ...qBlock.slice(1)].join("\n"));
          calloutTokens.push(buildCfcPipelineHtml(parsed.title || restFirst, parsed.causa, parsed.fato, parsed.conseq));
          normLines.push(`@@CALLOUT_BLOCK_${cIdx}@@`);
          continue;
        }
        const innerLines = restFirst ? [restFirst, ...qBlock.slice(1)] : qBlock.slice(1);
        const badges: Record<string, { cls: string; label: string; color: string }> = {
          NOTE: { cls: "callout-note", label: "📌 Nota & Fixação Prática", color: "text-indigo-600 dark:text-indigo-400" },
          TIP: { cls: "callout-tip", label: "💡 Síntese & Dica Prática", color: "text-emerald-600 dark:text-emerald-400" },
          IMPORTANT: { cls: "callout-important", label: "⚡ Ponto-Chave de Prova", color: "text-purple-600 dark:text-purple-400" },
          WARNING: { cls: "callout-warning", label: "⚠️ Atenção às Pegadinhas", color: "text-amber-600 dark:text-amber-400" },
          CAUTION: { cls: "callout-caution", label: "🚨 Cuidado Crítico", color: "text-rose-600 dark:text-rose-400" },
        };
        const cfg = badges[kind] || badges.NOTE;
        const innerRendered = renderRichMarkdown(innerLines.join("\n"), `${contextId}_cal${cIdx}`, checkedMap);
        calloutTokens.push(`
          <div class="lesson-callout ${cfg.cls} space-y-2">
            <div class="text-xs font-mono uppercase font-extrabold ${cfg.color}">${cfg.label}</div>
            <div class="space-y-2 text-sm leading-relaxed">${innerRendered}</div>
          </div>
        `);
      } else {
        const innerRendered = renderRichMarkdown(qBlock.join("\n"), `${contextId}_bq${cIdx}`, checkedMap);
        calloutTokens.push(`
          <blockquote class="lesson-callout callout-note italic text-pri text-sm leading-relaxed space-y-2">
            ${innerRendered}
          </blockquote>
        `);
      }
      normLines.push(`@@CALLOUT_BLOCK_${cIdx}@@`);
    } else {
      normLines.push(rawLines[li]);
      li++;
    }
  }
  text = normLines.join("\n");

  // Caixas ASCII soltas
  text = text.replace(/(?:^|\n)(┌[^\n]*\n(?:[│├\s][^\n]*\n)*└[^\n]*)/g, (_, boxBody) => {
    const cIdx = calloutTokens.length;
    if (boxBody.includes("MÉTODO DIDÁTICO") && boxBody.includes("CAUSA") && boxBody.includes("CONSEQU")) {
      const parsed = parseCfcFromText(boxBody);
      calloutTokens.push(buildCfcPipelineHtml(parsed.title, parsed.causa, parsed.fato, parsed.conseq));
    } else {
      calloutTokens.push(parseAsciiBoxHtml(boxBody));
    }
    return `\n@@CALLOUT_BLOCK_${cIdx}@@\n`;
  });

  // Blocos de código ```...```
  text = text.replace(/```([^\n]*)\n([\s\S]*?)```/g, (_, _lang, codeBody) => {
    const idx = codeTokens.length;
    const rawCode = codeBody.replace(/\n$/, "");
    codeTokens.push(renderAsciiCodeBlockHtml(rawCode));
    return `\n@@CODE_BLOCK_${idx}@@\n`;
  });

  // Proteger R$ / US$ e processar matemática Display & Inline
  text = text
    .replace(/(?<![a-zA-Z0-9_\\])R\$/g, "@@CURR_BRL@@")
    .replace(/(?<![a-zA-Z0-9_\\])US\$/g, "@@CURR_USD@@")
    .replace(/\\\$/g, "@@ESC_DOLLAR@@");

  text = text.replace(/\$\$([\s\S]*?)\$\$/g, (_, tex) => {
    const idx = mathTokens.length;
    mathTokens.push(renderDisplayMathResponsive(tex));
    return `@@MATH_TOKEN_${idx}@@`;
  });

  text = text.replace(/\$([^\$\n]+?)\$/g, (_, tex) => {
    const idx = mathTokens.length;
    mathTokens.push(renderInlineMathResponsive(tex));
    return `@@MATH_TOKEN_${idx}@@`;
  });

  text = text
    .replace(/@@CURR_BRL@@/g, "R$")
    .replace(/@@CURR_USD@@/g, "US$")
    .replace(/@@ESC_DOLLAR@@/g, "$");

  // <details> expansível via delegação data-toggle-details
  let detCounter = 0;
  text = text.replace(/<details>\s*<summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/gi, (_, sumHtml, bodyMd) => {
    detCounter++;
    const dId = `${contextId}_det_${detCounter}`;
    const cleanSummary = sumHtml.replace(/<\/?b>/gi, "").replace(/<\/?strong>/gi, "").trim();
    const renderedInner = restoreTokens(
      renderRichMarkdownStructure(bodyMd, `${dId}_in`, checkedMap),
      calloutTokens,
      codeTokens,
      mathTokens,
      [],
      rawHtmlTokens
    );
    const idx = detailsTokens.length;
    detailsTokens.push(`
      <div class="mt-3 pt-3 border-t border-tech space-y-2.5">
        <div>
          <button
            type="button"
            data-toggle-details="${escapeHtml(dId)}"
            data-label="${escapeHtml(cleanSummary)}"
            class="btn-secondary !py-2 !px-4 !text-xs"
          >
            <span>👁️ ${cleanSummary}</span>
          </button>
        </div>
        <div id="body_${escapeHtml(dId)}" class="hidden surface rounded-xl p-4 border border-emerald-500/40 bg-emerald-500/5 space-y-2 text-xs sm:text-sm">
          <div class="font-mono text-[11px] uppercase font-bold text-emerald-600 dark:text-emerald-400">✅ Resolução & Passo a Passo:</div>
          <div class="space-y-2 leading-relaxed text-pri">${renderedInner}</div>
        </div>
      </div>
    `);
    return `\n@@DETAILS_BLOCK_${idx}@@\n`;
  });

  const structuredHtml = renderRichMarkdownStructure(text, contextId, checkedMap);
  return restoreTokens(structuredHtml, calloutTokens, codeTokens, mathTokens, detailsTokens, rawHtmlTokens);
}

export function renderInlineMarkdown(mdText: string, contextId = "inl"): string {
  const html = renderRichMarkdown(mdText, contextId).trim();
  const m = html.match(/^<p[^>]*>([\s\S]*)<\/p>$/);
  if (m && !m[1].includes("<p")) return m[1];
  return html;
}
