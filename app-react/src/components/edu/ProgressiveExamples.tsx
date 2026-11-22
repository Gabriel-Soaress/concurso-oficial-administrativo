import type { ReactNode } from "react";

export type ProgressiveExampleAccent = "indigo" | "emerald" | "amber" | "sky" | "purple";

export interface ProgressiveExampleItem {
  label: string;
  accent?: ProgressiveExampleAccent;
  content: ReactNode;
}

interface ProgressiveExamplesProps {
  items: ProgressiveExampleItem[];
}

const ACCENT_LABEL_MAP: Record<ProgressiveExampleAccent, string> = {
  indigo: "text-indigo-700 dark:text-indigo-300",
  emerald: "text-emerald-700 dark:text-emerald-300",
  amber: "text-amber-700 dark:text-amber-300",
  sky: "text-sky-700 dark:text-sky-300",
  purple: "text-purple-700 dark:text-purple-300",
};

export function ProgressiveExamples({ items }: ProgressiveExamplesProps) {
  return (
    <div className="space-y-3.5 max-w-full">
      {items.map((item, idx) => {
        const labelColor = ACCENT_LABEL_MAP[item.accent ?? "indigo"];
        return (
          <div
            key={idx}
            className="rounded-xl p-3.5 sm:p-4 surface-muted border border-tech/80 space-y-2 min-w-0 max-w-full"
          >
            <div className={`text-[11px] font-mono uppercase tracking-wider font-extrabold ${labelColor}`}>
              {item.label}
            </div>
            <div className="text-sm sm:text-[15px] text-pri/90 leading-relaxed space-y-2 break-words">
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
