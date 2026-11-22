import { useState, type FormEvent } from "react";
import { BookOpen, Eye, EyeOff, Lock, LogIn, User, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/contexts/ToastContext";

export function LoginModal() {
  const { isLoginOpen, closeLogin, login } = useAuth();
  const { showToast } = useToast();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isLoginOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const result = await login(identifier, password);
    setLoading(false);
    if (result.ok) {
      showToast("Login realizado! Sincronizando seu progresso...", "success");
      setIdentifier("");
      setPassword("");
    } else {
      setError(result.error || "Falha ao autenticar.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Entrar na Plataforma"
    >
      <div className="w-full max-w-md surface rounded-2xl p-6 sm:p-8 space-y-6 border border-tech shadow-2xl relative my-auto">
        <button
          type="button"
          onClick={closeLogin}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-mut hover:text-pri hover:bg-slate-200/50 dark:hover:bg-slate-800 cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl hero-banner flex items-center justify-center mx-auto">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div className="inline-flex items-center text-[11px] font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold px-3 py-0.5 rounded-full bg-indigo-500/10">
            Sincronização em Nuvem
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-pri">
            Entrar na Plataforma
          </h2>
          <p className="text-xs sm:text-sm text-sec leading-relaxed">
            Carregue seu progresso da trilha, checkpoints por eixo e simulados em qualquer dispositivo.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="loginIdentifier" className="block text-xs font-semibold uppercase tracking-wider text-sec">
              Usuário ou E-mail
            </label>
            <div className="relative">
              <input
                id="loginIdentifier"
                type="text"
                required
                autoComplete="username"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="Digite seu usuário ou e-mail"
                className="input-tech !pl-10"
              />
              <User className="w-4 h-4 text-mut absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="loginPassword" className="block text-xs font-semibold uppercase tracking-wider text-sec">
              Senha
            </label>
            <div className="relative">
              <input
                id="loginPassword"
                type={showPass ? "text" : "password"}
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="input-tech !pl-10 !pr-10"
              />
              <Lock className="w-4 h-4 text-mut absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <button
                type="button"
                onClick={() => setShowPass((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-mut hover:text-pri cursor-pointer"
                title="Mostrar/ocultar senha"
              >
                {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {error && (
            <div className="rounded-xl p-3 bg-rose-500/10 border border-rose-500/30 text-xs text-rose-600 dark:text-rose-400 font-medium">
              {error}
            </div>
          )}

          <button type="submit" disabled={loading} className="btn-primary w-full !py-3">
            <LogIn className="w-4 h-4" />
            <span>{loading ? "Autenticando..." : "Entrar na Plataforma"}</span>
          </button>
        </form>

        <div className="pt-3 border-t border-tech text-center">
          <button
            type="button"
            onClick={closeLogin}
            className="text-xs font-medium text-sec hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer"
          >
            Continuar sem conta (salvar apenas neste navegador)
          </button>
        </div>
      </div>
    </div>
  );
}
