import type { ReactNode } from "react";

interface ProseSectionProps {
  number?: string;
  title?: string;
  children: ReactNode;
}

/**
 * Bloco editorial para parágrafos introdutórios, contexto narrativo e
 * explicações completas preservadas integralmente do .md original.
 */
export function ProseSection({ number, title, children }: ProseSectionProps) {
  return (
    <section className="surface rounded-2xl p-5 sm:p-7 border border-tech space-y-5">
      {title && (
        <div className="flex items-center gap-3 pb-3.5 border-b border-tech">
          {number && (
            <span className="px-2.5 py-1 rounded-lg bg-indigo-500/12 text-indigo-600 dark:text-indigo-400 font-mono text-xs sm:text-sm font-extrabold shrink-0">
              {number}
            </span>
          )}
          <h3 className="text-base sm:text-xl font-extrabold text-pri tracking-tight leading-snug">
            {title}
          </h3>
        </div>
      )}
      <div className="text-[15px] sm:text-base leading-relaxed text-pri/90 space-y-5">{children}</div>
    </section>
  );
}
