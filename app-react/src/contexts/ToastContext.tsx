import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

export type ToastVariant = "success" | "error" | "info";

interface ToastItem {
  id: number;
  message: string;
  variant: ToastVariant;
}

interface ToastContextValue {
  showToast: (message: string, variant?: ToastVariant) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismiss = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    (message: string, variant: ToastVariant = "success") => {
      const id = Date.now() + Math.floor(Math.random() * 1000);
      setToasts((prev) => [...prev.slice(-2), { id, message, variant }]);
      window.setTimeout(() => dismiss(id), 3200);
    },
    [dismiss]
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-20 md:bottom-6 right-4 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-[calc(100vw-2rem)] sm:w-auto">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="pointer-events-auto surface rounded-xl px-4 py-3 shadow-lg flex items-center gap-3 border border-tech animate-in fade-in slide-in-from-bottom-2 duration-200"
          >
            {t.variant === "success" && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />}
            {t.variant === "error" && <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />}
            {t.variant === "info" && <Info className="w-4 h-4 text-indigo-500 shrink-0" />}
            <span className="text-xs sm:text-sm font-medium text-pri flex-1">{t.message}</span>
            <button
              type="button"
              onClick={() => dismiss(t.id)}
              className="text-mut hover:text-pri p-0.5 cursor-pointer"
              aria-label="Fechar notificação"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast deve ser usado dentro de ToastProvider");
  return ctx;
}
