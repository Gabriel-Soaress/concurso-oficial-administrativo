import { useMemo } from "react";
import { renderAtomicMathRow, renderInlineMathResponsive } from "@/lib/katex";

interface MathTexProps {
  tex: string;
  display?: boolean;
  displayStyle?: boolean;
  bare?: boolean;
  className?: string;
}

export function MathTex({
  tex,
  display = false,
  displayStyle = false,
  bare = false,
  className = "",
}: MathTexProps) {
  const html = useMemo(() => {
    if (display || displayStyle) {
      return renderAtomicMathRow(tex, true);
    }
    return renderInlineMathResponsive(tex);
  }, [tex, display, displayStyle]);

  if (display) {
    return (
      <div
        className={`max-w-full overflow-x-clip flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 text-lg sm:text-xl leading-relaxed ${
          bare
            ? "py-1.5"
            : "my-2 rounded-xl surface-muted border border-tech border-l-[3px] border-l-indigo-500 px-3.5 py-3.5"
        } ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  if (displayStyle) {
    return (
      <span
        className={`inline-flex flex-wrap items-center gap-x-2 gap-y-1.5 max-w-full align-baseline leading-relaxed ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      className={`inline align-baseline max-w-full ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
