import { useState, type ReactNode } from "react";
import { ChevronRight, Eye, EyeOff, ListOrdered } from "lucide-react";
import { MathStack, type MathStackLine } from "./MathStack";

export interface StepItem {
  title: ReactNode;
  badge?: string;
  content?: ReactNode;
  mathLines?: (string | MathStackLine)[];
  showFlowArrows?: boolean;
}

interface StepByStepProps {
  title: string;
  problem?: ReactNode;
  steps: StepItem[];
  defaultRevealAll?: boolean;
}

export function StepByStep({
  title,
  problem,
  steps,
  defaultRevealAll = true,
}: StepByStepProps) {
  const [visibleCount, setVisibleCount] = useState(defaultRevealAll ? steps.length : 1);

  const allShown = visibleCount >= steps.length;

  return (
    <div className="surface rounded-2xl border border-tech overflow-hidden max-w-full">
      <div className="px-4 sm:px-5 py-3.5 surface-muted border-b border-tech flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2 min-w-0">
          <ListOrdered className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
          <span className="text-xs sm:text-sm font-extrabold text-pri break-words">{title}</span>
        </div>
        <button
          type="button"
          onClick={() => setVisibleCount(allShown ? 1 : steps.length)}
          className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1 cursor-pointer shrink-0"
        >
          {allShown ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
          <span>{allShown ? "Recolher passos" : "Mostrar todos os passos"}</span>
        </button>
      </div>

      <div className="p-4 sm:p-5 space-y-4">
        {problem && (
          <div className="rounded-xl p-4 bg-indigo-500/[0.06] border border-indigo-500/25 text-sm text-pri leading-relaxed">
            {problem}
          </div>
        )}

        <ol className="space-y-3">
          {steps.slice(0, visibleCount).map((step, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 p-3.5 rounded-xl surface-muted border border-tech"
            >
              <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <div className="min-w-0 flex-1 space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="text-sm font-bold text-pri">{step.title}</div>
                  {step.badge && (
                    <span className="px-2 py-0.5 rounded-md bg-indigo-500/12 text-indigo-600 dark:text-indigo-400 font-mono text-[10px] font-bold uppercase">
                      {step.badge}
                    </span>
                  )}
                </div>
                {step.content && (
                  <div className="text-sm text-sec leading-relaxed">{step.content}</div>
                )}
                {step.mathLines && step.mathLines.length > 0 && (
                  <MathStack
                    lines={step.mathLines}
                    showFlowArrows={step.showFlowArrows ?? false}
                    compact
                  />
                )}
              </div>
            </li>
          ))}
        </ol>

        {!allShown && (
          <button
            type="button"
            onClick={() => setVisibleCount((c) => Math.min(steps.length, c + 1))}
            className="btn-secondary !py-2 !px-4 !text-xs w-full sm:w-auto"
          >
            <span>Revelar Passo {visibleCount + 1} de {steps.length}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
