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
    <section className="space-y-4">
      {title && (
        <div className="flex items-center gap-2.5 pt-1">
          {number && (
            <span className="px-2 py-0.5 rounded-lg bg-indigo-500/12 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-extrabold shrink-0">
              {number}
            </span>
          )}
          <h3 className="text-base sm:text-lg font-extrabold text-pri tracking-tight leading-snug">
            {title}
          </h3>
        </div>
      )}
      <div className="text-[15px] sm:text-base leading-relaxed text-pri/90 space-y-4">{children}</div>
    </section>
  );
}
