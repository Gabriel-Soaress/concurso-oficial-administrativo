interface AsciiKeyBlockProps {
  title?: string;
  code: string;
}

export function AsciiKeyBlock({ title, code }: AsciiKeyBlockProps) {
  return (
    <div className="surface rounded-2xl border border-tech overflow-hidden max-w-full">
      {title && (
        <div className="px-4 py-2.5 surface-muted border-b border-tech text-[11px] font-mono uppercase font-bold text-sec break-words">
          {title}
        </div>
      )}
      <pre className="p-4 sm:p-5 text-[11px] sm:text-xs md:text-sm font-mono leading-relaxed text-pri whitespace-pre-wrap break-words bg-slate-950/[0.03] dark:bg-slate-950/60 max-w-full">
        <code>{code}</code>
      </pre>
    </div>
  );
}
