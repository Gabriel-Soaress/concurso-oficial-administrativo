import { STORAGE_KEYS } from "@/config/constants";
import type { ChecklistState, ExamsDoneState, SimuladoState, UserAccount } from "@/types";

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    const parsed = JSON.parse(raw);
    return (parsed ?? fallback) as T;
  } catch {
    return fallback;
  }
}

function safeSet(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
  } catch {
    // Ignora quota exceeded ou modo privado restrito
  }
}

export const storage = {
  getChecklist(): ChecklistState {
    return safeParse<ChecklistState>(localStorage.getItem(STORAGE_KEYS.CHECKLIST), {});
  },
  setChecklist(state: ChecklistState): void {
    safeSet(STORAGE_KEYS.CHECKLIST, state);
  },

  getExamsDone(): ExamsDoneState {
    return safeParse<ExamsDoneState>(localStorage.getItem(STORAGE_KEYS.EXAMS_DONE), {});
  },
  setExamsDone(state: ExamsDoneState): void {
    safeSet(STORAGE_KEYS.EXAMS_DONE, state);
  },

  getUser(): UserAccount | null {
    return safeParse<UserAccount | null>(localStorage.getItem(STORAGE_KEYS.USER), null);
  },
  setUser(user: UserAccount | null): void {
    if (!user) {
      try {
        localStorage.removeItem(STORAGE_KEYS.USER);
      } catch {
        // noop
      }
      return;
    }
    safeSet(STORAGE_KEYS.USER, user);
  },

  getCollapsedWeeks(): Record<number, boolean> {
    return safeParse<Record<number, boolean>>(localStorage.getItem(STORAGE_KEYS.COLLAPSED_WEEKS), {});
  },
  setCollapsedWeeks(state: Record<number, boolean>): void {
    safeSet(STORAGE_KEYS.COLLAPSED_WEEKS, state);
  },

  getTheme(): "light" | "dark" {
    try {
      return localStorage.getItem(STORAGE_KEYS.THEME) === "light" ? "light" : "dark";
    } catch {
      return "dark";
    }
  },
  setTheme(theme: "light" | "dark"): void {
    safeSet(STORAGE_KEYS.THEME, theme);
  },

  getSidebarCollapsed(): boolean | null {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.SIDEBAR_COLLAPSED);
      if (raw === "true") return true;
      if (raw === "false") return false;
      return null;
    } catch {
      return null;
    }
  },
  setSidebarCollapsed(collapsed: boolean): void {
    safeSet(STORAGE_KEYS.SIDEBAR_COLLAPSED, collapsed ? "true" : "false");
  },

  getSimuladoState(simId: string): SimuladoState {
    const empty: SimuladoState = {
      answers: {},
      eliminated: {},
      corrected: false,
      correctedMaterias: {},
      elapsedSeconds: 0,
    };

    const primary = safeParse<Partial<SimuladoState> | null>(
      localStorage.getItem(STORAGE_KEYS.SIMULADO_PREFIX + simId),
      null
    );

    if (primary && typeof primary === "object") {
      return {
        answers: primary.answers || {},
        eliminated: primary.eliminated || {},
        corrected: Boolean(primary.corrected),
        correctedMaterias: primary.correctedMaterias || {},
        elapsedSeconds: typeof primary.elapsedSeconds === "number" ? primary.elapsedSeconds : 0,
      };
    }

    if (simId === "simulado-sem-01-02") {
      const legacy = safeParse<Partial<SimuladoState> | null>(
        localStorage.getItem(STORAGE_KEYS.LEGACY_SIM_01),
        null
      );
      if (legacy && typeof legacy === "object") {
        return {
          answers: legacy.answers || {},
          eliminated: legacy.eliminated || {},
          corrected: Boolean(legacy.corrected),
          correctedMaterias: legacy.correctedMaterias || {},
          elapsedSeconds: typeof legacy.elapsedSeconds === "number" ? legacy.elapsedSeconds : 0,
        };
      }
    }

    return empty;
  },

  setSimuladoState(simId: string, state: SimuladoState): void {
    safeSet(STORAGE_KEYS.SIMULADO_PREFIX + simId, state);
    if (simId === "simulado-sem-01-02") {
      safeSet(STORAGE_KEYS.LEGACY_SIM_01, state);
    }
  },

  getAllSimuladoStates(): Record<string, SimuladoState> {
    const result: Record<string, SimuladoState> = {};
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key || !key.startsWith(STORAGE_KEYS.SIMULADO_PREFIX)) continue;
        const simId = key.slice(STORAGE_KEYS.SIMULADO_PREFIX.length);
        if (!simId) continue;
        const parsed = safeParse<Partial<SimuladoState> | null>(localStorage.getItem(key), null);
        if (!parsed || typeof parsed !== "object") continue;
        const hasData =
          Object.keys(parsed.answers || {}).length > 0 ||
          Object.keys(parsed.eliminated || {}).length > 0 ||
          Object.keys(parsed.correctedMaterias || {}).length > 0 ||
          Boolean(parsed.corrected) ||
          (typeof parsed.elapsedSeconds === "number" && parsed.elapsedSeconds > 0);
        if (!hasData) continue;
        result[simId] = {
          answers: parsed.answers || {},
          eliminated: parsed.eliminated || {},
          corrected: Boolean(parsed.corrected),
          correctedMaterias: parsed.correctedMaterias || {},
          elapsedSeconds: typeof parsed.elapsedSeconds === "number" ? parsed.elapsedSeconds : 0,
        };
      }
    } catch {
      // Ignora erro de acesso ao localStorage
    }
    return result;
  },
};
