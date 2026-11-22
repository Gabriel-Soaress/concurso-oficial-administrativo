import { NavLink, useLocation } from "react-router-dom";
import {
  BookOpen,
  CalendarDays,
  CheckSquare,
  ChevronRight,
  Cloud,
  Compass,
  ExternalLink,
  FileText,
  LogIn,
  LogOut,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
  Sun,
  Terminal,
  User,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress } from "@/contexts/ProgressContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useToast } from "@/contexts/ToastContext";

const NAV_ITEMS = [
  { to: "/metodo", label: "O Método & Base", icon: Compass },
  { to: "/cronograma", label: "Cronograma (12 Sem)", icon: CalendarDays, matchPrefix: "/aulas" },
  { to: "/gerador", label: "Gerador de Prompt", icon: Terminal },
  { to: "/provas", label: "Acervo & Provas ACCESS", icon: FileText },
  { to: "/simulados", label: "Simulados", icon: CheckSquare },
];

interface SidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export function Sidebar({ collapsed, onToggleCollapse }: SidebarProps) {
  const { user, openLogin, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { completedBlocksCount, totalBlocksCount, completedExamsCount, isSyncing } = useProgress();
  const { showToast } = useToast();
  const location = useLocation();

  const pct = totalBlocksCount > 0 ? Math.round((completedBlocksCount / totalBlocksCount) * 100) : 0;

  const handleAuthAction = () => {
    if (user) {
      logout();
      showToast("Sessão encerrada. Modo local ativado.", "info");
    } else {
      openLogin();
    }
  };

  return (
    <aside
      className={`hidden md:flex md:fixed md:inset-y-0 md:left-0 md:z-30 surface border-r border-tech shrink-0 flex-col justify-between overflow-y-auto overflow-x-hidden transition-[width] duration-200 ${
        collapsed ? "md:w-[76px]" : "md:w-72"
      }`}
    >
      <div className={collapsed ? "p-3 space-y-4" : "p-5 space-y-5"}>
        {/* Brand Header */}
        {collapsed ? (
          <div className="flex justify-center pt-0.5">
            <button
              type="button"
              onClick={onToggleCollapse}
              title="Expandir barra lateral"
              aria-label="Expandir barra lateral"
              aria-expanded={false}
              className="group relative w-10 h-10 rounded-xl hero-banner flex items-center justify-center shrink-0 cursor-pointer shadow-sm hover:scale-105 transition-all"
            >
              <BookOpen className="w-5 h-5 text-white transition-opacity duration-150 group-hover:opacity-0" />
              <PanelLeftOpen className="w-5 h-5 text-white absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full surface border border-tech shadow-xs flex items-center justify-center text-pri">
                <ChevronRight className="w-2.5 h-2.5" />
              </span>
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl hero-banner flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold leading-none">
                  Plano 90 Dias
                </div>
                <h1 className="text-base font-extrabold tracking-tight mt-1 truncate text-pri">
                  Oficial Adm.
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={toggleTheme}
                title={theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"}
                aria-label={theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"}
                className="p-2 rounded-xl hover:bg-slate-200/60 dark:hover:bg-slate-800 text-sec cursor-pointer border border-tech transition-colors"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                type="button"
                onClick={onToggleCollapse}
                title="Recolher barra lateral"
                aria-label="Recolher barra lateral"
                aria-expanded={true}
                className="p-2 rounded-xl hover:bg-slate-200/60 dark:hover:bg-slate-800 text-sec cursor-pointer border border-tech transition-colors"
              >
                <PanelLeftClose className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* User Account Card */}
        {collapsed ? (
          <div className="flex flex-col items-center gap-2">
            <button
              type="button"
              onClick={handleAuthAction}
              title={
                user
                  ? `${user.nome} (${isSyncing ? "Sincronizando..." : "Nuvem ativa"}) — Clique para sair`
                  : "Modo Local — Clique para entrar"
              }
              aria-label={user ? `Conta ${user.nome} — sair` : "Entrar na conta"}
              className="relative w-10 h-10 rounded-xl surface-muted border border-tech flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:border-indigo-500/40 cursor-pointer transition-colors"
            >
              <User className="w-4 h-4" />
              <span
                className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-slate-900 ${
                  user ? "bg-emerald-500" : "bg-slate-400"
                }`}
              />
            </button>

            <div
              title={`Progresso Geral: ${pct}% (${completedBlocksCount}/${totalBlocksCount} blocos · ${completedExamsCount}/93 provas)`}
              className="w-full py-1.5 rounded-xl surface-muted border border-tech text-center font-mono text-[11px] font-bold text-indigo-600 dark:text-indigo-400"
            >
              {pct}%
            </div>
          </div>
        ) : (
          <>
            <div className="surface-muted rounded-xl px-3.5 py-2.5 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-full bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold truncate text-pri">{user ? user.nome : "Modo Local"}</div>
                  <div className="text-[10px] text-mut flex items-center gap-1">
                    <Cloud className="w-3 h-3" />
                    <span>{user ? (isSyncing ? "Sincronizando..." : "Nuvem ativa") : "Salvo no navegador"}</span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={handleAuthAction}
                className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer shrink-0"
                title={user ? "Sair da conta" : "Entrar na conta"}
              >
                {user ? <LogOut className="w-3.5 h-3.5" /> : <LogIn className="w-3.5 h-3.5" />}
                <span>{user ? "Sair" : "Entrar"}</span>
              </button>
            </div>

            {/* Progress Widget */}
            <div className="surface-muted rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-sec">Progresso Geral</span>
                <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">{pct}%</span>
              </div>
              <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-600 via-blue-500 to-sky-400 transition-all duration-500 rounded-full"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[11px] text-mut font-mono pt-0.5">
                <span>
                  {completedBlocksCount}/{totalBlocksCount} blocos
                </span>
                <span>{completedExamsCount}/93 provas</span>
              </div>
            </div>
          </>
        )}

        {/* Navigation Links */}
        <nav className="space-y-1">
          {!collapsed && (
            <div className="px-3 pb-1.5 text-[10px] font-mono uppercase tracking-widest text-mut font-semibold">
              Navegação
            </div>
          )}
          {NAV_ITEMS.map(({ to, label, icon: Icon, matchPrefix }) => {
            const isExtraActive = matchPrefix ? location.pathname.startsWith(matchPrefix) : false;
            return (
              <NavLink
                key={to}
                to={to}
                title={collapsed ? label : undefined}
                aria-label={label}
                className={({ isActive }) => {
                  const active = isActive || isExtraActive;
                  return [
                    "w-full flex items-center rounded-xl text-sm font-semibold transition-all",
                    collapsed ? "justify-center px-0 py-2.5" : "gap-3 px-3.5 py-2.5",
                    active
                      ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/25"
                      : "text-sec hover:text-pri hover:bg-slate-200/60 dark:hover:bg-slate-800/70",
                  ].join(" ");
                }}
              >
                <Icon className={collapsed ? "w-5 h-5 shrink-0" : "w-4 h-4 shrink-0"} />
                {!collapsed && <span className="truncate">{label}</span>}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className={`${collapsed ? "p-3" : "p-5"} border-t border-tech text-xs text-mut space-y-2.5`}>
        {collapsed && (
          <button
            type="button"
            onClick={toggleTheme}
            title={theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"}
            aria-label={theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"}
            className="btn-secondary w-full !px-0 !py-2.5 justify-center"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        )}
        <a
          href="/edital_220_2026_birigui.pdf"
          target="_blank"
          rel="noopener noreferrer"
          title="Edital 220/2026 (PDF)"
          aria-label="Edital 220/2026 (PDF)"
          className={`btn-secondary w-full !text-xs ${collapsed ? "!px-0 !py-2.5 justify-center" : "!py-2.5"}`}
        >
          <ExternalLink className="w-3.5 h-3.5 shrink-0" />
          {!collapsed && <span>Edital 220/2026 (PDF)</span>}
        </a>
        {!collapsed && (
          <div className="font-mono text-[11px] flex items-center justify-between text-mut px-1">
            <span>Meta: 1h30/dia</span>
            <span>Sábado: Simulado</span>
          </div>
        )}
      </div>
    </aside>
  );
}
