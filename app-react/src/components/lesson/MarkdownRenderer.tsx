import { useMemo, useState, type ChangeEvent, type KeyboardEvent, type MouseEvent } from "react";
import { renderRichMarkdown } from "@/lib/markdown";
import { extractZoomPayload } from "@/lib/diagramZoom";
import { useProgress } from "@/contexts/ProgressContext";
import { DiagramZoomModal, type ZoomDiagramPayload } from "./DiagramZoomModal";

interface MarkdownRendererProps {
  content: string;
  contextId: string;
  docId?: string;
  className?: string;
  onAnchorClick?: (slug: string) => void;
}

export function MarkdownRenderer({ content, contextId, docId, className = "", onAnchorClick }: MarkdownRendererProps) {
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
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (onAnchorClick) {
          onAnchorClick(slug);
        }
      }
      return;
    }

    // 3. Zoom de Diagrama SVG ou Imagem
    const zoomWrap = target.closest<HTMLElement>("[data-zoom-diagram]");
    if (zoomWrap) {
      const payload = extractZoomPayload(zoomWrap);
      if (payload) setZoomDiagram(payload);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const target = e.target as HTMLElement;
    const zoomWrap = target.closest<HTMLElement>("[data-zoom-diagram]");
    if (!zoomWrap) return;
    const payload = extractZoomPayload(zoomWrap);
    if (payload) {
      e.preventDefault();
      setZoomDiagram(payload);
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
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <DiagramZoomModal diagram={zoomDiagram} onClose={() => setZoomDiagram(null)} />
    </>
  );
}
