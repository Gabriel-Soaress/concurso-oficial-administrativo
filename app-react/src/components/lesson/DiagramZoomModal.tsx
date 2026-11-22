import { useState } from "react";
import { RotateCcw, X, ZoomIn, ZoomOut } from "lucide-react";

export interface ZoomDiagramPayload {
  title: string;
  dataUrl: string;
}

interface DiagramZoomModalProps {
  diagram: ZoomDiagramPayload | null;
  onClose: () => void;
}

export function DiagramZoomModal({ diagram, onClose }: DiagramZoomModalProps) {
  const [zoom, setZoom] = useState<number>(() => (window.innerWidth < 768 ? 135 : 100));

  if (!diagram) return null;

  const isMobile = window.innerWidth < 768;
  const baseVw = isMobile ? 94 : 82;
  const widthVw = Math.round((baseVw * zoom) / 100);

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label={diagram.title}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/10 bg-slate-900/90 text-white shrink-0">
        <span className="text-xs sm:text-sm font-bold truncate">{diagram.title}</span>
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={() => setZoom((z) => Math.max(70, z - 25))}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 cursor-pointer"
            title="Diminuir zoom"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setZoom(100)}
            className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 font-mono text-xs font-bold cursor-pointer inline-flex items-center gap-1"
            title="Resetar zoom"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{zoom}%</span>
          </button>
          <button
            type="button"
            onClick={() => setZoom((z) => Math.min(320, z + 25))}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 cursor-pointer"
            title="Aumentar zoom"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-rose-500/20 hover:bg-rose-500/35 text-rose-300 cursor-pointer ml-1"
            title="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div
        className="flex-1 overflow-auto p-4 sm:p-8 flex items-start justify-center"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div
          style={{ width: `${widthVw}vw`, maxWidth: "none" }}
          className="bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-2xl border border-white/10"
        >
          <img src={diagram.dataUrl} alt={diagram.title} className="w-full h-auto block" />
        </div>
      </div>
    </div>
  );
}
