import { useState, type ReactNode } from "react";
import { RotateCw } from "lucide-react";

export interface FlipCardItem {
  front: string;
  hint?: string;
  back: ReactNode;
}

interface FlipCardsGridProps {
  title?: string;
  cards: FlipCardItem[];
}

export function FlipCardsGrid({
  title = "Flashcards Rápidos (Clique para virar)",
  cards,
}: FlipCardsGridProps) {
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});

  const toggle = (idx: number) => {
    setFlipped((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-extrabold text-mut px-1">
        <RotateCw className="w-3.5 h-3.5 text-indigo-500" />
        <span>{title}</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {cards.map((card, idx) => {
          const isBack = !!flipped[idx];
          return (
            <button
              key={idx}
              type="button"
              onClick={() => toggle(idx)}
              className={`group text-left rounded-2xl p-4 border transition-all cursor-pointer min-h-[120px] flex flex-col justify-between gap-2 hover:-translate-y-0.5 hover:shadow-md ${
                isBack
                  ? "border-indigo-500/50 bg-indigo-500/[0.08] shadow-sm hover:border-emerald-500/60"
                  : "surface border-tech hover:border-indigo-500"
              }`}
            >
              {!isBack ? (
                <>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold">
                    {card.hint || "Toque para revelar"}
                  </div>
                  <div className="text-base font-extrabold text-pri leading-snug">{card.front}</div>
                  <span className="mt-1 inline-flex items-center justify-center gap-1.5 self-start px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-600/12 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300 border border-indigo-500/35 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all shadow-2xs">
                    <RotateCw className="w-3.5 h-3.5" /> Virar card
                  </span>
                </>
              ) : (
                <>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold">
                    {card.front}
                  </div>
                  <div className="text-xs sm:text-sm text-pri leading-relaxed">{card.back}</div>
                  <span className="mt-1 inline-flex items-center justify-center gap-1.5 self-start px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-600/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300 border border-emerald-500/35 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all shadow-2xs">
                    <RotateCw className="w-3.5 h-3.5" /> Voltar card
                  </span>
                </>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
