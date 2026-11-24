import { useRef, useState, type ReactNode } from "react";
import { Maximize2 } from "lucide-react";
import { extractZoomPayload } from "@/lib/diagramZoom";
import { DiagramZoomModal, type ZoomDiagramPayload } from "@/components/lesson/DiagramZoomModal";

export interface ZoomableDiagramProps {
  title: string;
  badge?: string;
  badgeTone?: "indigo" | "amber" | "emerald" | "sky";
  children: ReactNode;
  className?: string;
}

const BADGE_CLASSES: Record<NonNullable<ZoomableDiagramProps["badgeTone"]>, string> = {
  indigo: "bg-indigo-500/20 text-indigo-300",
  amber: "bg-amber-500/20 text-amber-300",
  emerald: "bg-emerald-500/20 text-emerald-300",
  sky: "bg-sky-500/20 text-sky-300",
};

export function ZoomableDiagram({
  title,
  badge,
  badgeTone = "indigo",
  children,
  className = "",
}: ZoomableDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [zoomPayload, setZoomPayload] = useState<ZoomDiagramPayload | null>(null);

  const handleOpen = () => {
    if (!containerRef.current) return;
    const payload = extractZoomPayload(containerRef.current, title);
    if (payload) setZoomPayload(payload);
  };

  return (
    <div
      data-self-zoom="true"
      className={`rounded-2xl border border-tech bg-slate-950/90 p-3 sm:p-5 overflow-hidden ${className}`}
    >
      <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap min-w-0">
          <span className="text-xs sm:text-sm font-extrabold text-indigo-300">{title}</span>
          {badge && (
            <span
              className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${BADGE_CLASSES[badgeTone]}`}
            >
              {badge}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={handleOpen}
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/35 border border-indigo-400/35 text-indigo-200 hover:text-white font-mono text-[11px] font-bold transition-colors cursor-pointer shrink-0"
          title="Expandir em tela cheia com zoom"
          aria-label={`Expandir em tela cheia: ${title}`}
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>Expandir</span>
        </button>
      </div>

      <div
        ref={containerRef}
        className="edu-zoomable-diagram"
        data-zoom-title={title}
        role="button"
        tabIndex={0}
        onClick={handleOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleOpen();
          }
        }}
        aria-label={`Ampliar ${title} em tela cheia`}
      >
        {children}
        <div className="text-center mt-2">
          <span className="edu-zoom-hint">🔍 Clique ou toque para expandir em tela cheia</span>
        </div>
      </div>

      <DiagramZoomModal diagram={zoomPayload} onClose={() => setZoomPayload(null)} />
    </div>
  );
}
