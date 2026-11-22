import type { ReactNode } from "react";
import { Compass } from "lucide-react";

interface AnalogyBoxProps {
  title: string;
  tag?: string;
  children: ReactNode;
}

export function AnalogyBox({ title, tag = "Analogia Prática", children }: AnalogyBoxProps) {
  return (
    <div className="rounded-2xl p-5 sm:p-6 border border-sky-500/30 bg-gradient-to-br from-sky-500/[0.07] to-indigo-500/[0.04] space-y-2.5">
      <div className="flex items-center gap-2">
        <Compass className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
        <span className="text-[11px] font-mono uppercase tracking-wider font-extrabold text-sky-700 dark:text-sky-300">
          {tag}
        </span>
      </div>
      <h4 className="text-base font-extrabold text-pri">{title}</h4>
      <div className="text-sm sm:text-[15px] text-sec leading-relaxed space-y-2">{children}</div>
    </div>
  );
}
