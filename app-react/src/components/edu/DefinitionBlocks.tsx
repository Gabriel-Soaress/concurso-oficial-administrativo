import type { ReactNode } from "react";
import { Layers } from "lucide-react";

export type DefinitionAccent = "indigo" | "emerald" | "amber" | "sky" | "purple" | "rose";

export interface DefinitionBlockItem {
  term: string;
  badge?: string;
  accent?: DefinitionAccent;
  summary: ReactNode;
  note?: ReactNode;
  example?: ReactNode;
}

interface DefinitionBlocksProps {
  title?: string;
  columns?: 1 | 2;
  items: DefinitionBlockItem[];
}

const ACCENT_STYLES: Record<DefinitionAccent, { border: string; badge: string; title: string }> = {
  indigo: {
    border: "border-l-indigo-500",
    badge: "bg-indigo-500/12 text-indigo-700 dark:text-indigo-300",
    title: "text-indigo-700 dark:text-indigo-300",
  },
  emerald: {
    border: "border-l-emerald-500",
    badge: "bg-emerald-500/12 text-emerald-700 dark:text-emerald-300",
    title: "text-emerald-700 dark:text-emerald-300",
  },
  amber: {
    border: "border-l-amber-500",
    badge: "bg-amber-500/15 text-amber-800 dark:text-amber-300",
    title: "text-amber-700 dark:text-amber-300",
  },
  sky: {
    border: "border-l-sky-500",
    badge: "bg-sky-500/12 text-sky-700 dark:text-sky-300",
    title: "text-sky-700 dark:text-sky-300",
  },
  purple: {
    border: "border-l-purple-500",
    badge: "bg-purple-500/12 text-purple-700 dark:text-purple-300",
    title: "text-purple-700 dark:text-purple-300",
  },
  rose: {
    border: "border-l-rose-500",
    badge: "bg-rose-500/12 text-rose-700 dark:text-rose-300",
    title: "text-rose-700 dark:text-rose-300",
  },
};

export function DefinitionBlocks({ title, columns = 1, items }: DefinitionBlocksProps) {
  return (
    <div className="space-y-3 max-w-full">
      {title && (
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-extrabold text-mut px-1">
          <Layers className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
          <span className="break-words">{title}</span>
        </div>
      )}

      <div
        className={
          columns === 2
            ? "grid grid-cols-1 md:grid-cols-2 gap-3.5 [&>*]:min-w-0"
            : "space-y-3"
        }
      >
        {items.map((item, idx) => {
          const style = ACCENT_STYLES[item.accent ?? "indigo"];
          return (
            <div
              key={idx}
              className={`rounded-xl p-4 sm:p-5 surface-muted border border-tech border-l-4 ${style.border} space-y-2.5 min-w-0 max-w-full`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className={`text-sm sm:text-base font-extrabold leading-snug break-words ${style.title}`}>
                  {item.term}
                </h4>
                {item.badge && (
                  <span
                    className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider shrink-0 ${style.badge}`}
                  >
                    {item.badge}
                  </span>
                )}
              </div>

              <div className="text-sm sm:text-[15px] leading-relaxed text-pri/90 space-y-1.5 break-words">
                {item.summary}
              </div>

              {item.note && (
                <div className="rounded-lg px-3 py-2 surface border border-tech/80 text-xs sm:text-sm text-sec leading-relaxed break-words">
                  {item.note}
                </div>
              )}

              {item.example && (
                <div className="flex items-start gap-2 pt-0.5 text-xs sm:text-sm text-pri/90 leading-relaxed min-w-0">
                  <span className="px-1.5 py-0.5 rounded bg-indigo-500/12 text-indigo-700 dark:text-indigo-300 font-mono text-[10px] font-extrabold uppercase shrink-0 mt-0.5">
                    EX.
                  </span>
                  <div className="min-w-0 flex-1 break-words">{item.example}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
