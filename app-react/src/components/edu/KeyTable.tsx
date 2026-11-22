import type { ReactNode } from "react";

interface KeyTableProps {
  title?: string;
  headers: string[];
  rows: ReactNode[][];
}

export function KeyTable({ title, headers, rows }: KeyTableProps) {
  return (
    <div className="surface rounded-2xl border border-tech overflow-hidden max-w-full">
      {title && (
        <div className="px-4 sm:px-5 py-3 surface-muted border-b border-tech text-xs font-mono uppercase tracking-wider font-extrabold text-sec break-words">
          {title}
        </div>
      )}

      {/* Desktop: tabela estruturada com bordas, padding generoso e zebra (sem scroll horizontal) */}
      <div className="hidden sm:block">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-tech surface-muted text-xs font-bold text-pri">
              {headers.map((h, idx) => (
                <th
                  key={idx}
                  className="py-3 px-4 border-r border-tech last:border-r-0 align-middle leading-snug"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-tech">
            {rows.map((row, rIdx) => (
              <tr
                key={rIdx}
                className="even:bg-slate-500/[0.03] hover:bg-indigo-500/[0.04] transition-colors"
              >
                {row.map((cell, cIdx) => (
                  <td
                    key={cIdx}
                    className="py-3.5 px-4 border-r border-tech last:border-r-0 text-pri/90 leading-relaxed align-top break-words"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: cards empilhados com rótulo de coluna por célula (zero scroll lateral) */}
      <div className="sm:hidden p-3 space-y-3">
        {rows.map((row, rIdx) => (
          <div
            key={rIdx}
            className="rounded-xl surface-muted border border-tech divide-y divide-tech overflow-hidden"
          >
            {row.map((cell, cIdx) => (
              <div key={cIdx} className="px-3.5 py-2.5 space-y-1">
                {headers[cIdx] && (
                  <div className="text-[10px] font-mono uppercase tracking-wider font-extrabold text-indigo-600 dark:text-indigo-400">
                    {headers[cIdx]}
                  </div>
                )}
                <div className="text-sm text-pri leading-relaxed break-words">{cell}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
