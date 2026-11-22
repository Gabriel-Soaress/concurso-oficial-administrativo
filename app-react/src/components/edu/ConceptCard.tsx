import type { ReactNode } from "react";
import { BookMarked, Lightbulb, Scale, Sparkles } from "lucide-react";

type Accent = "indigo" | "emerald" | "amber" | "sky" | "purple";

interface ConceptCardProps {
  title: string;
  badge?: string;
  accent?: Accent;
  icon?: "book" | "bulb" | "scale" | "sparkle";
  children: ReactNode;
}

const ACCENT_MAP: Record<Accent, { border: string; badge: string; iconBg: string }> = {
  indigo: {
    border: "border-l-indigo-500",
    badge: "bg-indigo-500/12 text-indigo-600 dark:text-indigo-400",
    iconBg: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400",
  },
  emerald: {
    border: "border-l-emerald-500",
    badge: "bg-emerald-500/12 text-emerald-700 dark:text-emerald-400",
    iconBg: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  },
  amber: {
    border: "border-l-amber-500",
    badge: "bg-amber-500/12 text-amber-700 dark:text-amber-400",
    iconBg: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  },
  sky: {
    border: "border-l-sky-500",
    badge: "bg-sky-500/12 text-sky-700 dark:text-sky-400",
    iconBg: "bg-sky-500/15 text-sky-600 dark:text-sky-400",
  },
  purple: {
    border: "border-l-purple-500",
    badge: "bg-purple-500/12 text-purple-700 dark:text-purple-400",
    iconBg: "bg-purple-500/15 text-purple-600 dark:text-purple-400",
  },
};

export function ConceptCard({
  title,
  badge,
  accent = "indigo",
  icon = "book",
  children,
}: ConceptCardProps) {
  const style = ACCENT_MAP[accent];
  const Icon =
    icon === "bulb" ? Lightbulb : icon === "scale" ? Scale : icon === "sparkle" ? Sparkles : BookMarked;

  return (
    <div
      className={`surface rounded-2xl p-5 sm:p-6 border border-tech border-l-4 ${style.border} space-y-3`}
    >
      <div className="flex items-start gap-3">
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${style.iconBg}`}>
          <Icon className="w-4 h-4" />
        </div>
        <div className="min-w-0 flex-1">
          {badge && (
            <span
              className={`inline-block px-2 py-0.5 rounded-md font-mono text-[10px] font-bold uppercase tracking-wider mb-1 ${style.badge}`}
            >
              {badge}
            </span>
          )}
          <h3 className="text-base sm:text-lg font-extrabold text-pri leading-snug">{title}</h3>
        </div>
      </div>
      <div className="text-sm sm:text-[15px] leading-relaxed text-sec space-y-2.5">{children}</div>
    </div>
  );
}
