import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { MobileHeader } from "./MobileHeader";
import { MobileBottomNav } from "./MobileBottomNav";
import { SyncErrorBanner } from "./SyncErrorBanner";
import { LoginModal } from "@/components/auth/LoginModal";
import { storage } from "@/services/storage";
import { useStudyTimeTracker } from "@/hooks/useStudyTimeTracker";

function getInitialSidebarCollapsed(): boolean {
  const saved = storage.getSidebarCollapsed();
  if (saved !== null) return saved;
  if (typeof window !== "undefined") {
    // Em telas médias (md..lg), inicia recolhida automaticamente para dar mais área útil
    return window.innerWidth >= 768 && window.innerWidth < 1180;
  }
  return false;
}

export function AppShell() {
  const { pathname } = useLocation();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(getInitialSidebarCollapsed);

  useStudyTimeTracker();

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => {
      const next = !prev;
      storage.setSidebarCollapsed(next);
      return next;
    });
  };

  // Ao trocar de rota principal ou de eixo, sobe suavemente para o topo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row pb-24 md:pb-0">
      <Sidebar collapsed={isSidebarCollapsed} onToggleCollapse={toggleSidebar} />
      <MobileHeader />

      <div
        className={`flex-1 min-w-0 flex flex-col transition-[margin] duration-200 ${
          isSidebarCollapsed ? "md:ml-[76px]" : "md:ml-72"
        }`}
      >
        <main className="flex-1 min-w-0 py-6 sm:py-10 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto w-full">
          <Outlet />
        </main>
      </div>

      <MobileBottomNav />
      <SyncErrorBanner />
      <LoginModal />
    </div>
  );
}
