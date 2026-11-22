import { AlertCircle, X } from "lucide-react";
import { useProgress } from "@/contexts/ProgressContext";

export function SyncErrorBanner() {
  const { syncError, clearSyncError } = useProgress();
  if (!syncError) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 left-4 right-4 sm:left-auto sm:right-6 z-50 sm:max-w-sm surface rounded-xl p-4 border-l-4 border-l-rose-500 shadow-xl flex items-start gap-3">
      <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
      <div className="flex-1 text-xs">
        <div className="font-bold text-rose-600 dark:text-rose-400">Falha ao sincronizar progresso</div>
        <div className="text-sec mt-0.5 leading-relaxed">{syncError}</div>
      </div>
      <button
        type="button"
        onClick={clearSyncError}
        className="text-mut hover:text-pri p-1 cursor-pointer"
        aria-label="Fechar aviso"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
