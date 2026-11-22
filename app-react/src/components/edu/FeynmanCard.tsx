import { useState, type ReactNode } from "react";
import { Check, Copy, Sparkles } from "lucide-react";
import { useToast } from "@/contexts/ToastContext";

export type FeynmanLine =
  | string
  | {
      render: ReactNode;
      copyText: string;
    };

interface FeynmanCardProps {
  title?: string;
  lines: FeynmanLine[];
}

export function FeynmanCard({
  title = "Síntese Feynman de 3 Linhas (Para o Caderno)",
  lines,
}: FeynmanCardProps) {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const handleCopy = async () => {
    const plainLines = lines.map((l) => (typeof l === "string" ? l : l.copyText));
    const text = `${title}\n${plainLines.map((l, i) => `${i + 1}. ${l}`).join("\n")}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      showToast("Síntese copiada para o caderno!", "success");
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // noop
    }
  };

  return (
    <div className="rounded-2xl p-5 sm:p-6 border border-emerald-500/40 bg-gradient-to-br from-emerald-500/[0.08] via-teal-500/[0.04] to-transparent space-y-4">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2 min-w-0">
          <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span className="text-xs font-mono uppercase tracking-wider font-extrabold text-emerald-700 dark:text-emerald-300 break-words">
            {title}
          </span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="btn-secondary !py-1 !px-2.5 !text-[11px] shrink-0"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? "Copiado" : "Copiar"}</span>
        </button>
      </div>

      <ol className="space-y-3">
        {lines.map((line, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm sm:text-[15px] text-pri leading-relaxed">
            <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
              {idx + 1}
            </span>
            <span className="flex-1 min-w-0 break-words">
              {typeof line === "string" ? line : line.render}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
