import { NavLink, useLocation } from "react-router-dom";
import { CalendarDays, CheckSquare, Compass, FileText, Terminal } from "lucide-react";

const MOBILE_ITEMS = [
  { to: "/metodo", label: "Método", icon: Compass },
  { to: "/cronograma", label: "Trilha", icon: CalendarDays, matchPrefix: "/aulas" },
  { to: "/gerador", label: "Prompt", icon: Terminal },
  { to: "/provas", label: "Provas", icon: FileText },
  { to: "/simulados", label: "Simulados", icon: CheckSquare },
];

export function MobileBottomNav() {
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 w-full surface border-t border-tech grid grid-cols-5 z-40 shadow-lg pb-safe">
      {MOBILE_ITEMS.map(({ to, label, icon: Icon, matchPrefix }) => {
        const isExtraActive = matchPrefix ? location.pathname.startsWith(matchPrefix) : false;
        return (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => {
              const active = isActive || isExtraActive;
              return [
                "flex flex-col items-center justify-center gap-1 py-2.5 px-1 text-[10px] font-semibold transition-colors",
                active
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-mut hover:text-pri",
              ].join(" ");
            }}
          >
            <Icon className="w-5 h-5 shrink-0" />
            <span className="truncate max-w-full">{label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}
