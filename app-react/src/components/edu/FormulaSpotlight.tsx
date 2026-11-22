import type { ReactNode } from "react";
import { Calculator } from "lucide-react";
import { MathTex } from "./MathTex";
import { MathStack, type MathStackLine } from "./MathStack";

export interface FormulaLegendItem {
  symbol: string; // pode ser LaTeX
  meaning: string;
}

export interface FormulaSpotlightItem {
  label?: string;
  tex?: string;
  steps?: (string | MathStackLine)[];
  showFlowArrows?: boolean;
  note?: ReactNode;
}

interface FormulaSpotlightProps {
  title: string;
  formulaTex?: string;
  formulas?: FormulaSpotlightItem[];
  note?: ReactNode;
  legend?: FormulaLegendItem[];
}

export function FormulaSpotlight({
  title,
  formulaTex,
  formulas,
  note,
  legend,
}: FormulaSpotlightProps) {
  return (
    <div className="rounded-2xl overflow-hidden border border-indigo-500/30 bg-gradient-to-br from-indigo-500/[0.08] via-transparent to-sky-500/[0.06] shadow-sm max-w-full">
      <div className="px-4 sm:px-5 py-3 border-b border-indigo-500/20 flex items-center gap-2 bg-indigo-500/[0.06]">
        <Calculator className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
        <span className="text-xs font-mono uppercase tracking-wider font-extrabold text-indigo-700 dark:text-indigo-300 break-words">
          {title}
        </span>
      </div>

      <div className="p-4 sm:p-6 space-y-4">
        {formulaTex && (
          <div className="rounded-xl bg-[var(--bg-surface)] border border-tech py-3.5 px-3.5 sm:px-4 text-pri text-lg sm:text-xl max-w-full overflow-x-clip">
            <MathTex tex={formulaTex} display bare />
          </div>
        )}

        {formulas && formulas.length > 0 && (
          <div className="space-y-3">
            {formulas.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-[var(--bg-surface)] border border-tech p-3.5 sm:p-4 space-y-2.5 max-w-full overflow-x-clip"
              >
                {item.label && (
                  <div className="text-[11px] font-mono uppercase tracking-wider font-extrabold text-indigo-600 dark:text-indigo-400">
                    {item.label}
                  </div>
                )}
                {item.tex && (
                  <div className="text-pri text-lg sm:text-xl">
                    <MathTex tex={item.tex} display bare />
                  </div>
                )}
                {item.steps && item.steps.length > 0 && (
                  <MathStack
                    lines={item.steps}
                    showFlowArrows={item.showFlowArrows ?? true}
                    align="left"
                  />
                )}
                {item.note && (
                  <div className="text-xs sm:text-sm text-sec leading-relaxed">{item.note}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {note && (
          <div className="text-xs sm:text-sm text-sec leading-relaxed text-center">{note}</div>
        )}

        {legend && legend.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1">
            {legend.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl surface border border-tech text-xs min-w-0"
              >
                <span className="px-2 py-0.5 rounded-lg bg-indigo-500/12 text-indigo-600 dark:text-indigo-400 font-bold shrink-0">
                  <MathTex tex={item.symbol} />
                </span>
                <span className="text-sec leading-snug break-words">{item.meaning}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
