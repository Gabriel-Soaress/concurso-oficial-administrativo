import type { ReactNode } from "react";
import { MathStack, type MathStackLine } from "./MathStack";

type CardAccent = "indigo" | "emerald" | "amber" | "rose" | "sky";
type BadgeVariant = "default" | "success" | "danger" | "amber" | "sky";

export interface GuidedCalcRow {
  badge: string;
  badgeVariant?: BadgeVariant;
  description?: ReactNode;
  mathLines?: (string | MathStackLine)[];
  showFlowArrows?: boolean;
  note?: ReactNode;
}

interface GuidedCalcCardProps {
  title: ReactNode;
  badge?: string;
  accent?: CardAccent;
  icon?: ReactNode;
  banner?: ReactNode;
  rows: GuidedCalcRow[];
}

const HEAD_STYLES: Record<CardAccent, string> = {
  indigo:
    "bg-indigo-500/[0.11] text-indigo-800 dark:text-indigo-300 border-l-indigo-500",
  emerald:
    "bg-emerald-500/[0.11] text-emerald-800 dark:text-emerald-300 border-l-emerald-500",
  amber:
    "bg-amber-500/[0.11] text-amber-800 dark:text-amber-300 border-l-amber-500",
  rose:
    "bg-rose-500/[0.11] text-rose-800 dark:text-rose-300 border-l-rose-500",
  sky:
    "bg-sky-500/[0.11] text-sky-800 dark:text-sky-300 border-l-sky-500",
};

const BADGE_STYLES: Record<BadgeVariant, string> = {
  default: "bg-indigo-500/12 text-indigo-700 dark:text-indigo-300 border-indigo-500/25",
  success: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/35",
  danger: "bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/35",
  amber: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/35",
  sky: "bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-500/35",
};

export function GuidedCalcCard({
  title,
  badge,
  accent = "indigo",
  icon,
  banner,
  rows,
}: GuidedCalcCardProps) {
  return (
    <div className="bg-[var(--bg-elevated)] border border-tech rounded-2xl overflow-hidden shadow-sm flex flex-col min-w-0 max-w-full">
      <div
        className={`px-4 sm:px-5 py-3 border-b border-tech border-l-4 flex items-center justify-between gap-2.5 flex-wrap ${HEAD_STYLES[accent]}`}
      >
        <div className="flex items-center gap-2 min-w-0 font-extrabold text-sm sm:text-[15px] leading-snug">
          {icon && <span className="shrink-0">{icon}</span>}
          <span className="min-w-0 break-words">{title}</span>
        </div>
        {badge && (
          <span className="px-2.5 py-0.5 rounded-full surface text-[11px] font-mono font-bold text-sec shrink-0 border border-tech">
            {badge}
          </span>
        )}
      </div>

      {banner && (
        <div className="px-4 sm:px-5 py-3 text-xs sm:text-sm text-pri leading-relaxed bg-[var(--bg-surface)] border-b border-dashed border-tech">
          {banner}
        </div>
      )}

      <div className="p-3 sm:p-4 space-y-3">
        {rows.map((row, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-[var(--bg-surface)] border border-tech p-3.5 sm:p-4 space-y-2.5 min-w-0"
          >
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 min-w-0">
              <span
                className={`inline-flex items-center justify-center px-2.5 py-1 rounded-lg border text-[11px] font-mono font-extrabold uppercase tracking-wide whitespace-nowrap shrink-0 ${
                  BADGE_STYLES[row.badgeVariant || "default"]
                }`}
              >
                {row.badge}
              </span>

              {row.description && (
                <div className="flex-1 min-w-[200px] text-xs sm:text-sm text-sec leading-relaxed">
                  {row.description}
                </div>
              )}
            </div>

            {row.mathLines && row.mathLines.length > 0 && (
              <MathStack
                lines={row.mathLines}
                showFlowArrows={row.showFlowArrows}
                compact
              />
            )}

            {row.note && (
              <div className="text-xs text-mut leading-relaxed">{row.note}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function GuidedCalcGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start [&>*]:min-w-0">
      {children}
    </div>
  );
}
