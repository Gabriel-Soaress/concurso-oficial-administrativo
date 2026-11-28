import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useProgress } from "@/contexts/ProgressContext";
import { classifyStudyRoute } from "@/lib/studyTime";
import type { StudyActivityKind } from "@/types";

interface ActiveStudySession {
  kind: StudyActivityKind;
  target: string;
  startedAtMs: number; // 0 enquanto pausado (ex: aba oculta)
  sessionElapsedSec: number;
  sessionCounted: boolean;
}

const FLUSH_INTERVAL_MS = 30_000;
const MIN_SESSION_THRESHOLD_SEC = 10;

/**
 * Rastreador silencioso de tempo e média de estudo.
 * Inicia ao abrir matéria, eixo, questões ou simulado; pausa quando a aba
 * perde foco/visibilidade e grava automaticamente ao fechar o sistema.
 */
export function useStudyTimeTracker(): void {
  const { pathname } = useLocation();
  const { recordStudyTime } = useProgress();

  const recordRef = useRef(recordStudyTime);
  recordRef.current = recordStudyTime;

  const activeRef = useRef<ActiveStudySession | null>(null);

  const flush = (endSession: boolean, useKeepalive = false) => {
    const cur = activeRef.current;
    if (!cur) return;

    const nowMs = Date.now();
    const deltaSec = cur.startedAtMs > 0 ? Math.floor((nowMs - cur.startedAtMs) / 1000) : 0;

    if (deltaSec >= 1) {
      cur.sessionElapsedSec += deltaSec;
      const shouldCountSession = !cur.sessionCounted && cur.sessionElapsedSec >= MIN_SESSION_THRESHOLD_SEC;
      if (shouldCountSession) {
        cur.sessionCounted = true;
      }
      recordRef.current(deltaSec, cur.kind, cur.target, shouldCountSession, {
        flushKeepalive: useKeepalive,
      });
      if (cur.startedAtMs > 0) {
        cur.startedAtMs = nowMs;
      }
    }

    if (endSession) {
      activeRef.current = null;
    }
  };

  // Controla transições entre rotas (matéria/eixo/questões/simulado vs navegação geral)
  useEffect(() => {
    const nextRoute = classifyStudyRoute(pathname);
    const prev = activeRef.current;

    if (!nextRoute) {
      if (prev) flush(true);
      return;
    }

    const isHidden = typeof document !== "undefined" && document.hidden;

    if (prev) {
      const sameTarget = prev.target === nextRoute.target;
      // Descarrega delta da etapa anterior antes de atualizar o tipo/alvo
      flush(!sameTarget);

      if (sameTarget && activeRef.current) {
        activeRef.current.kind = nextRoute.kind;
        activeRef.current.startedAtMs = isHidden ? 0 : Date.now();
        return;
      }
    }

    activeRef.current = {
      kind: nextRoute.kind,
      target: nextRoute.target,
      startedAtMs: isHidden ? 0 : Date.now(),
      sessionElapsedSec: 0,
      sessionCounted: false,
    };
  }, [pathname]);

  // Listeners globais: flush periódico, pausa em aba oculta e gravação ao fechar
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      if (!document.hidden && activeRef.current) {
        flush(false);
      }
    }, FLUSH_INTERVAL_MS);

    const handleVisibility = () => {
      const cur = activeRef.current;
      if (!cur) return;
      if (document.hidden) {
        flush(false);
        if (activeRef.current) {
          activeRef.current.startedAtMs = 0;
        }
      } else if (cur.startedAtMs === 0) {
        cur.startedAtMs = Date.now();
      }
    };

    const handleExit = () => {
      flush(true, true);
    };

    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("pagehide", handleExit);

    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("pagehide", handleExit);
      flush(true, false);
    };
  }, []);
}
