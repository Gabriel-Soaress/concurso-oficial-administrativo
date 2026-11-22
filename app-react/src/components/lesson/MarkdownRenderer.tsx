import { useMemo, useState, type MouseEvent, type ChangeEvent } from "react";
import { renderRichMarkdown } from "@/lib/markdown";
import { useProgress } from "@/contexts/ProgressContext";
import { DiagramZoomModal, type ZoomDiagramPayload } from "./DiagramZoomModal";

interface MarkdownRendererProps {
  content: string;
  contextId: string;
  docId?: string;
  className?: string;
}

export function MarkdownRenderer({ content, contextId, docId, className = "" }: MarkdownRendererProps) {
  const { getQuizDoc, updateQuizDoc } = useProgress();
  const [zoomDiagram, setZoomDiagram] = useState<ZoomDiagramPayload | null>(null);

  const innerChecks = docId ? getQuizDoc(docId).innerChecks || {} : {};

  const html = useMemo(
    () => renderRichMarkdown(content, contextId, innerChecks),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [content, contextId, JSON.stringify(innerChecks)]
  );

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    // 1. Toggle de <details>
    const detBtn = target.closest<HTMLButtonElement>("[data-toggle-details]");
    if (detBtn) {
      const dId = detBtn.dataset.toggleDetails;
      const body = dId ? document.getElementById(`body_${dId}`) : null;
      if (body) {
        const isHidden = body.classList.toggle("hidden");
        const origLabel = detBtn.dataset.label || "Ver Resolução";
        detBtn.innerHTML = isHidden ? `<span>👁️ ${origLabel}</span>` : `<span>🙈 Ocultar Resolução</span>`;
      }
      return;
    }

    // 2. Âncora interna
    const anchor = target.closest<HTMLAnchorElement>("[data-anchor-slug]");
    if (anchor) {
      e.preventDefault();
      const slug = anchor.dataset.anchorSlug;
      if (slug) {
        const el = document.getElementById(slug);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    // 3. Zoom de Diagrama SVG
    const zoomWrap = target.closest<HTMLElement>("[data-zoom-diagram]");
    if (zoomWrap) {
      const svgEl = zoomWrap.querySelector("svg");
      if (!svgEl) return;
      const parentCard = zoomWrap.closest(".edu-card, .edu-component");
      const titleEl = parentCard?.querySelector(".card-title, .edu-comp-title");
      const title = titleEl?.textContent?.trim() || "📊 Fluxograma / Diagrama";

      const clone = svgEl.cloneNode(true) as SVGSVGElement;
      if (!clone.getAttribute("xmlns")) {
        clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      }
      const vb = (clone.getAttribute("viewBox") || "0 0 760 470").trim().split(/\s+/);
      if (vb.length === 4) {
        clone.setAttribute("width", vb[2]);
        clone.setAttribute("height", vb[3]);
      }
      clone.removeAttribute("style");
      const svgXml = new XMLSerializer().serializeToString(clone);
      const dataUrl = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgXml);
      setZoomDiagram({ title, dataUrl });
    }
  };

  const handleChange = (e: ChangeEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.type === "checkbox" && target.dataset.lessonCheck && docId) {
      const key = target.dataset.lessonCheck;
      const checked = target.checked;
      updateQuizDoc(docId, (prev) => ({
        ...prev,
        innerChecks: { ...(prev.innerChecks || {}), [key]: checked },
      }));
    }
  };

  return (
    <>
      <div
        className={`md-content max-w-none ${className}`}
        onClick={handleClick}
        onChange={handleChange}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <DiagramZoomModal diagram={zoomDiagram} onClose={() => setZoomDiagram(null)} />
    </>
  );
}
