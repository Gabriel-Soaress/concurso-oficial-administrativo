import { ArrowDown } from "lucide-react";
import { MathTex } from "./MathTex";

export interface MathStackLine {
  tex: string;
  label?: string;
  note?: string;
  highlight?: boolean;
}

interface MathStackProps {
  lines: (string | MathStackLine)[];
  showFlowArrows?: boolean;
  align?: "left" | "center";
  compact?: boolean;
  className?: string;
}

export function MathStack({
  lines,
  showFlowArrows = false,
  align = "left",
  compact = false,
  className = "",
}: MathStackProps) {
  const normalized: MathStackLine[] = lines.map((item) =>
    typeof item === "string" ? { tex: item } : item
  );

  return (
    <div
      className={`rounded-xl bg-[var(--bg-muted)] border border-tech border-l-[3px] border-l-indigo-500 ${
        compact ? "px-3.5 py-3 space-y-2" : "px-4 py-3.5 space-y-2.5"
      } max-w-full overflow-x-clip ${className}`}
    >
      {normalized.map((line, idx) => {
        const isLast = idx === normalized.length - 1;
        return (
          <div key={idx} className="space-y-1.5 min-w-0 max-w-full">
            <div
              className={`flex flex-wrap items-center gap-x-2.5 gap-y-1.5 py-0.5 min-w-0 max-w-full ${
                align === "center" ? "justify-center text-center" : "justify-start text-left"
              } ${
                line.highlight
                  ? "rounded-lg bg-emerald-500/12 border border-emerald-500/35 px-3 py-2"
                  : ""
              }`}
            >
              {line.label && (
                <span className="font-mono text-[11px] font-extrabold uppercase tracking-wide text-indigo-600 dark:text-indigo-400 shrink-0">
                  {line.label}
                </span>
              )}
              <span
                className={`font-semibold max-w-full ${
                  compact ? "text-base sm:text-[17px]" : "text-[17px] sm:text-[19px]"
                } ${
                  line.highlight
                    ? "text-emerald-700 dark:text-emerald-300"
                    : "text-pri"
                }`}
              >
                <MathTex tex={line.tex} displayStyle />
              </span>
              {line.note && (
                <span className="text-xs sm:text-[13px] text-sec leading-snug">{line.note}</span>
              )}
            </div>

            {showFlowArrows && !isLast && (
              <div
                className={`flex ${align === "center" ? "justify-center" : "pl-4"} text-indigo-500/80 dark:text-indigo-400/80`}
                aria-hidden="true"
              >
                <ArrowDown className="w-3.5 h-3.5" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
