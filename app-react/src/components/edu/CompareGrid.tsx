import type { ReactNode } from "react";
import { CheckCircle2, XCircle, ArrowLeftRight } from "lucide-react";

export interface CompareSide {
  title: string;
  badge?: string;
  items: ReactNode[];
}

interface CompareGridProps {
  title?: string;
  mode?: "right-wrong" | "contrast";
  left: CompareSide;
  right: CompareSide;
}

export function CompareGrid({ title, mode = "right-wrong", left, right }: CompareGridProps) {
  const isRW = mode === "right-wrong";

  return (
    <div className="space-y-3">
      {title && (
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-extrabold text-mut px-1">
          <ArrowLeftRight className="w-3.5 h-3.5 text-indigo-500" />
          <span>{title}</span>
        </div>
      )}

      <div className="space-y-3.5">
        {/* Bloco 1 (Topo) */}
        <div
          className={`rounded-2xl p-5 border space-y-3 min-w-0 max-w-full ${
            isRW
              ? "border-emerald-500/35 bg-emerald-500/[0.05]"
              : "border-indigo-500/35 bg-indigo-500/[0.05]"
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-tech/70">
            <div className="flex items-center gap-2 min-w-0">
              {isRW && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />}
              <h4
                className={`text-sm sm:text-base font-extrabold break-words ${
                  isRW ? "text-emerald-700 dark:text-emerald-400" : "text-indigo-700 dark:text-indigo-400"
                }`}
              >
                {left.title}
              </h4>
            </div>
            {left.badge && (
              <span className="px-2 py-0.5 rounded-full surface-muted font-mono text-[10px] font-bold text-sec shrink-0">
                {left.badge}
              </span>
            )}
          </div>
          <ul className="space-y-2.5 text-sm text-pri leading-relaxed">
            {left.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 min-w-0">
                <span
                  className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                    isRW ? "bg-emerald-500" : "bg-indigo-500"
                  }`}
                />
                <span className="flex-1 min-w-0 break-words">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna Direita */}
        <div
          className={`rounded-2xl p-5 border space-y-3 min-w-0 max-w-full ${
            isRW
              ? "border-rose-500/35 bg-rose-500/[0.05]"
              : "border-amber-500/35 bg-amber-500/[0.05]"
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-tech/70">
            <div className="flex items-center gap-2 min-w-0">
              {isRW && <XCircle className="w-4 h-4 text-rose-500 shrink-0" />}
              <h4
                className={`text-sm sm:text-base font-extrabold break-words ${
                  isRW ? "text-rose-700 dark:text-rose-400" : "text-amber-700 dark:text-amber-400"
                }`}
              >
                {right.title}
              </h4>
            </div>
            {right.badge && (
              <span className="px-2 py-0.5 rounded-full surface-muted font-mono text-[10px] font-bold text-sec shrink-0">
                {right.badge}
              </span>
            )}
          </div>
          <ul className="space-y-2.5 text-sm text-pri leading-relaxed">
            {right.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 min-w-0">
                <span
                  className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                    isRW ? "bg-rose-500" : "bg-amber-500"
                  }`}
                />
                <span className="flex-1 min-w-0 break-words">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
