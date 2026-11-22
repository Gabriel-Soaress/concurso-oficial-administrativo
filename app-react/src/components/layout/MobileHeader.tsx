import { BookOpen, LogIn, LogOut, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useToast } from "@/contexts/ToastContext";

export function MobileHeader() {
  const { user, openLogin, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { showToast } = useToast();

  return (
    <header className="md:hidden surface border-b border-tech px-4 py-3 flex items-center justify-between sticky top-0 z-30 w-full backdrop-blur-md">
      <Link to="/metodo" className="flex items-center gap-2.5 min-w-0">
        <div className="w-8 h-8 rounded-xl hero-banner flex items-center justify-center shrink-0">
          <BookOpen className="w-4 h-4 text-white" />
        </div>
        <div className="truncate">
          <div className="text-[10px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold leading-none">
            Plano 90 Dias
          </div>
          <div className="text-sm font-bold leading-tight mt-0.5 truncate text-pri">
            Oficial Administrativo
          </div>
        </div>
      </Link>

      <div className="flex items-center gap-1.5 shrink-0">
        <button
          type="button"
          onClick={() => {
            if (user) {
              logout();
              showToast("Sessão encerrada.", "info");
            } else {
              openLogin();
            }
          }}
          className="btn-secondary !py-1.5 !px-2.5 !text-xs !rounded-lg"
        >
          {user ? <LogOut className="w-3.5 h-3.5" /> : <LogIn className="w-3.5 h-3.5" />}
          <span className="max-w-[72px] truncate">{user ? user.nome.split(" ")[0] : "Entrar"}</span>
        </button>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Alternar tema"
          className="p-2 rounded-lg border border-tech text-sec cursor-pointer"
        >
          {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
}
