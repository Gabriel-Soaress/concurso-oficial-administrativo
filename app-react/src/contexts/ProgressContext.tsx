import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type {
  ChecklistState,
  DocAxisProgress,
  ExamsDoneState,
  QuizDocState,
  SimuladoState,
  StudyActivityKind,
  StudyTimeStats,
} from "@/types";
import { storage } from "@/services/storage";
import { dbQuery } from "@/services/db";
import { API_ENDPOINT } from "@/config/constants";
import { hydrateChecklistWithLegacyQuizzes, mergeCloudAndLocalChecklist } from "@/lib/legacyQuizBridge";
import {
  UPSERT_PROGRESS_SQL,
  buildKeepaliveExitRequestBody,
  isPlainRecordEqual,
  type ProgressSnapshot,
} from "@/lib/progressSync";
import { addStudyDelta } from "@/lib/studyTime";
import { useAuth } from "./AuthContext";
import { useTheme } from "./ThemeContext";
import { WEEKS_DATA } from "@/data/weeks";

interface RecordStudyTimeOptions {
  flushKeepalive?: boolean;
}

interface ProgressContextValue {
  checklist: ChecklistState;
  examsDone: ExamsDoneState;
  collapsedWeeks: Record<number, boolean>;
  difficultyNotes: string;
  currentWeek: number;
  syncError: string | null;
  isSyncing: boolean;
  studyTime: StudyTimeStats | undefined;
  completedBlocksCount: number;
  totalBlocksCount: number;
  completedExamsCount: number;
  clearSyncError: () => void;
  retrySync: () => Promise<void>;
  toggleBlock: (blockId: string) => void;
  setBlockDone: (blockId: string, done: boolean) => void;
  toggleWeekCollapse: (weekNum: number) => void;
  setMonthWeeksCollapsed: (month: 1 | 2 | 3, collapsed: boolean) => void;
  toggleExamDone: (examKey: string) => void;
  setDifficultyNotes: (notes: string) => void;
  setCurrentWeek: (weekNum: number) => void;
  getQuizDoc: (docId: string) => QuizDocState;
  updateQuizDoc: (docId: string, updater: (prev: QuizDocState) => QuizDocState) => void;
  getDocAxesProgress: (docId: string) => DocAxisProgress;
  markAxisCompleted: (docId: string, axisId: string, nextStep?: string) => void;
  setLastAxisStep: (docId: string, step: string) => void;
  getSimuladoState: (simId: string) => SimuladoState;
  saveSimuladoState: (simId: string, next: SimuladoState) => void;
  recordStudyTime: (
    deltaSeconds: number,
    kind: StudyActivityKind,
    target: string,
    countSession: boolean,
    options?: RecordStudyTimeOptions
  ) => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

interface CloudProgressRow {
  checklist: string | ChecklistState | null;
  provas_feitas: string | ExamsDoneState | null;
  notas_dificuldade: string | null;
  semana_atual: number | null;
}

const VISIBILITY_PULL_STALE_MS = 30_000;

function hydrateInitialChecklist(): ChecklistState {
  const base = hydrateChecklistWithLegacyQuizzes(storage.getChecklist());
  const localSims = storage.getAllSimuladoStates();
  if (Object.keys(localSims).length === 0) return base;
  const mergedSims = mergeCloudAndLocalChecklist(
    { _simulados: localSims },
    { _simulados: base._simulados }
  )._simulados;
  return {
    ...base,
    ...(mergedSims ? { _simulados: mergedSims } : {}),
  };
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const { theme, setTheme } = useTheme();
  const setThemeRef = useRef(setTheme);
  setThemeRef.current = setTheme;

  const [checklist, setChecklist] = useState<ChecklistState>(() => hydrateInitialChecklist());
  const [examsDone, setExamsDone] = useState<ExamsDoneState>(() => storage.getExamsDone());
  const [collapsedWeeks, setCollapsedWeeks] = useState<Record<number, boolean>>(() =>
    storage.getCollapsedWeeks()
  );
  const [difficultyNotes, setDifficultyNotesState] = useState<string>("");
  const [currentWeek, setCurrentWeekState] = useState<number>(1);
  const [syncError, setSyncError] = useState<string | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);

  const syncErrorRef = useRef<string | null>(null);
  syncErrorRef.current = syncError;

  const hydratedUserIdRef = useRef<number | null>(null);
  const pullInFlightUserRef = useRef<number | null>(null);
  const lastPullAtRef = useRef<number>(0);
  const pushInFlightRef = useRef(false);
  const mutationVersionRef = useRef(0);
  const exitFlushedVersionRef = useRef(-1);

  const latestRef = useRef<ProgressSnapshot>({
    checklist,
    examsDone,
    difficultyNotes,
    currentWeek,
  });

  const pushTimerRef = useRef<number | null>(null);
  const hasPendingPushRef = useRef(false);
  const pullSeqRef = useRef(0);

  const pushProgressNow = useCallback(async () => {
    if (!user || hydratedUserIdRef.current !== user.id) return;
    if (pushTimerRef.current) {
      window.clearTimeout(pushTimerRef.current);
      pushTimerRef.current = null;
    }
    if (pushInFlightRef.current) {
      hasPendingPushRef.current = true;
      return;
    }

    pushInFlightRef.current = true;
    setIsSyncing(true);
    try {
      while (user && hydratedUserIdRef.current === user.id) {
        const targetVersion = mutationVersionRef.current;
        const snap = { ...latestRef.current };
        await dbQuery(UPSERT_PROGRESS_SQL, [
          user.id,
          JSON.stringify(snap.checklist),
          JSON.stringify(snap.examsDone),
          snap.difficultyNotes.trim(),
          snap.currentWeek,
        ]);
        setSyncError(null);
        if (mutationVersionRef.current === targetVersion) {
          hasPendingPushRef.current = false;
          break;
        }
      }
    } catch {
      hasPendingPushRef.current = true;
      setSyncError("Sem conexão com o servidor. Suas alterações foram salvas localmente.");
    } finally {
      pushInFlightRef.current = false;
      setIsSyncing(false);
    }
  }, [user]);

  const flushExitKeepalive = useCallback(() => {
    if (!user || hydratedUserIdRef.current !== user.id) return;
    if (!hasPendingPushRef.current && !pushTimerRef.current) return;
    if (exitFlushedVersionRef.current === mutationVersionRef.current) return;

    exitFlushedVersionRef.current = mutationVersionRef.current;
    if (pushTimerRef.current) {
      window.clearTimeout(pushTimerRef.current);
      pushTimerRef.current = null;
    }

    const { body } = buildKeepaliveExitRequestBody(user.id, latestRef.current);
    void fetch(API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body,
    }).catch(() => {
      // Já garantido no localStorage
    });
  }, [user]);

  const pullAndSync = useCallback(async () => {
    if (!user) return;
    if (pullInFlightUserRef.current === user.id) return;

    const reqId = ++pullSeqRef.current;
    pullInFlightUserRef.current = user.id;
    setIsSyncing(true);
    try {
      const res = await dbQuery<CloudProgressRow>(
        "SELECT checklist, provas_feitas, notas_dificuldade, semana_atual FROM concurso_progresso WHERE usuario_id = $1;",
        [user.id]
      );
      if (pullSeqRef.current !== reqId) return;
      setSyncError(null);

      // Garante que alterações locais recentes e chaves individuais de simulado entrem na mescla
      const localBase = latestRef.current.checklist;
      const localIndividualSims = storage.getAllSimuladoStates();
      const hydratedLocal =
        Object.keys(localIndividualSims).length > 0
          ? mergeCloudAndLocalChecklist({ _simulados: localIndividualSims }, localBase)
          : localBase;

      let hasLocalDiff = false;

      if (res.rows && res.rows.length > 0) {
        const row = res.rows[0];
        const dbChecklist: ChecklistState =
          typeof row.checklist === "string" ? JSON.parse(row.checklist) : row.checklist || {};
        const dbProvas: ExamsDoneState =
          typeof row.provas_feitas === "string"
            ? JSON.parse(row.provas_feitas)
            : row.provas_feitas || {};

        const mergedChecklist = mergeCloudAndLocalChecklist(hydratedLocal, dbChecklist);
        const mergedExams: ExamsDoneState = { ...latestRef.current.examsDone, ...dbProvas };

        hasLocalDiff =
          !isPlainRecordEqual(mergedChecklist, dbChecklist) ||
          !isPlainRecordEqual(mergedExams, dbProvas);

        latestRef.current.checklist = mergedChecklist;
        latestRef.current.examsDone = mergedExams;
        setChecklist(mergedChecklist);
        setExamsDone(mergedExams);
        storage.setChecklist(mergedChecklist);
        storage.setExamsDone(mergedExams);

        if (mergedChecklist._collapsedWeeks && typeof mergedChecklist._collapsedWeeks === "object") {
          setCollapsedWeeks(mergedChecklist._collapsedWeeks);
          storage.setCollapsedWeeks(mergedChecklist._collapsedWeeks);
        }

        if (mergedChecklist._theme === "dark" || mergedChecklist._theme === "light") {
          setThemeRef.current(mergedChecklist._theme);
        }

        if (mergedChecklist._simulados && typeof mergedChecklist._simulados === "object") {
          for (const [simKey, simState] of Object.entries(mergedChecklist._simulados)) {
            if (simState) storage.setSimuladoState(simKey, simState);
          }
        }

        if (row.notas_dificuldade) {
          const nextNotes = latestRef.current.difficultyNotes || row.notas_dificuldade || "";
          latestRef.current.difficultyNotes = nextNotes;
          setDifficultyNotesState(nextNotes);
        }
        if (typeof row.semana_atual === "number" && row.semana_atual >= 1 && row.semana_atual <= 12) {
          latestRef.current.currentWeek = row.semana_atual;
          setCurrentWeekState(row.semana_atual);
        }
      } else {
        latestRef.current.checklist = hydratedLocal;
        setChecklist(hydratedLocal);
        storage.setChecklist(hydratedLocal);
        hasLocalDiff = true;
      }

      hydratedUserIdRef.current = user.id;
      lastPullAtRef.current = Date.now();
      // Envia de volta se houve diferença na mescla OU mutação local durante o pull
      if (hasLocalDiff || hasPendingPushRef.current) {
        await pushProgressNow();
      }
    } catch {
      if (pullSeqRef.current === reqId) {
        setSyncError("Não foi possível carregar dados da nuvem. Usando progresso local.");
      }
    } finally {
      if (pullSeqRef.current === reqId) {
        pullInFlightUserRef.current = null;
        setIsSyncing(false);
      }
    }
  }, [user, pushProgressNow]);

  const retrySync = useCallback(async () => {
    if (!user) return;
    if (hydratedUserIdRef.current !== user.id) {
      await pullAndSync();
    } else {
      await pushProgressNow();
    }
  }, [user, pullAndSync, pushProgressNow]);

  const scheduleCloudPush = useCallback(
    (immediate = false) => {
      if (!user) return;
      hasPendingPushRef.current = true;
      if (hydratedUserIdRef.current !== user.id) {
        if (pullInFlightUserRef.current !== user.id) {
          void pullAndSync();
        }
        return;
      }
      if (pushTimerRef.current) {
        window.clearTimeout(pushTimerRef.current);
        pushTimerRef.current = null;
      }
      if (immediate) {
        void pushProgressNow();
        return;
      }
      pushTimerRef.current = window.setTimeout(() => {
        pushTimerRef.current = null;
        void pushProgressNow();
      }, 650);
    },
    [user, pushProgressNow, pullAndSync]
  );

  // Puxar progresso da nuvem ao logar (bloqueando pushes até concluir a hidratação)
  useEffect(() => {
    if (!user) {
      hydratedUserIdRef.current = null;
      pullInFlightUserRef.current = null;
      return;
    }
    hydratedUserIdRef.current = null;
    pullInFlightUserRef.current = null;
    void pullAndSync();
    return () => {
      pullSeqRef.current++;
      pullInFlightUserRef.current = null;
    };
  }, [user, pullAndSync]);

  // Descarrega alterações pendentes na nuvem ao fechar/recarregar, trocar aba ou voltar online
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!user) return;
      if (document.hidden) {
        if (hydratedUserIdRef.current === user.id && (hasPendingPushRef.current || pushTimerRef.current)) {
          void pushProgressNow();
        }
      } else {
        exitFlushedVersionRef.current = -1;
        if (
          hydratedUserIdRef.current === user.id &&
          !pushInFlightRef.current &&
          !hasPendingPushRef.current &&
          Date.now() - lastPullAtRef.current > VISIBILITY_PULL_STALE_MS
        ) {
          void pullAndSync();
        }
      }
    };

    const handlePageShow = () => {
      exitFlushedVersionRef.current = -1;
    };

    const handleOnline = () => {
      if (hasPendingPushRef.current || syncErrorRef.current) {
        void retrySync();
      }
    };

    window.addEventListener("pagehide", flushExitKeepalive);
    window.addEventListener("pageshow", handlePageShow);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("pagehide", flushExitKeepalive);
      window.removeEventListener("pageshow", handlePageShow);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("online", handleOnline);
    };
  }, [user, flushExitKeepalive, pushProgressNow, pullAndSync, retrySync]);

  const mutateChecklist = useCallback(
    (updater: (prev: ChecklistState) => ChecklistState, options?: { immediate?: boolean }) => {
      const prev = latestRef.current.checklist;
      const next = updater(prev);
      if (next === prev) return;
      mutationVersionRef.current++;
      latestRef.current.checklist = next;
      storage.setChecklist(next);
      setChecklist(next);
      scheduleCloudPush(Boolean(options?.immediate));
    },
    [scheduleCloudPush]
  );

  // Sincronizar tema quando o usuário trocar (somente após estado convergir)
  useEffect(() => {
    if (latestRef.current.checklist._theme === theme) return;
    mutateChecklist((prev) => (prev._theme === theme ? prev : { ...prev, _theme: theme }));
  }, [theme, mutateChecklist]);

  const toggleBlock = useCallback(
    (blockId: string) => {
      mutateChecklist((prev) => ({ ...prev, [blockId]: !prev[blockId] }), { immediate: true });
    },
    [mutateChecklist]
  );

  const setBlockDone = useCallback(
    (blockId: string, done: boolean) => {
      mutateChecklist((prev) => ({ ...prev, [blockId]: done }), { immediate: true });
    },
    [mutateChecklist]
  );

  const toggleWeekCollapse = useCallback(
    (weekNum: number) => {
      const base = latestRef.current.checklist._collapsedWeeks || storage.getCollapsedWeeks();
      const next = { ...base, [weekNum]: !base[weekNum] };
      storage.setCollapsedWeeks(next);
      setCollapsedWeeks(next);
      mutateChecklist((c) => ({ ...c, _collapsedWeeks: next }));
    },
    [mutateChecklist]
  );

  const setMonthWeeksCollapsed = useCallback(
    (month: 1 | 2 | 3, collapsed: boolean) => {
      const base = latestRef.current.checklist._collapsedWeeks || storage.getCollapsedWeeks();
      const next = { ...base };
      WEEKS_DATA.filter((w) => w.monthNum === month).forEach((w) => {
        next[w.num] = collapsed;
      });
      storage.setCollapsedWeeks(next);
      setCollapsedWeeks(next);
      mutateChecklist((c) => ({ ...c, _collapsedWeeks: next }));
    },
    [mutateChecklist]
  );

  const toggleExamDone = useCallback(
    (examKey: string) => {
      const prev = latestRef.current.examsDone;
      const next = { ...prev, [examKey]: !prev[examKey] };
      mutationVersionRef.current++;
      latestRef.current.examsDone = next;
      storage.setExamsDone(next);
      setExamsDone(next);
      scheduleCloudPush(true);
    },
    [scheduleCloudPush]
  );

  const setDifficultyNotes = useCallback(
    (notes: string) => {
      mutationVersionRef.current++;
      latestRef.current.difficultyNotes = notes;
      setDifficultyNotesState(notes);
      scheduleCloudPush();
    },
    [scheduleCloudPush]
  );

  const setCurrentWeek = useCallback(
    (weekNum: number) => {
      mutationVersionRef.current++;
      latestRef.current.currentWeek = weekNum;
      setCurrentWeekState(weekNum);
      scheduleCloudPush();
    },
    [scheduleCloudPush]
  );

  const getQuizDoc = useCallback(
    (docId: string): QuizDocState => {
      return checklist._quizStore?.[docId] || {};
    },
    [checklist._quizStore]
  );

  const updateQuizDoc = useCallback(
    (docId: string, updater: (prev: QuizDocState) => QuizDocState) => {
      mutateChecklist(
        (prev) => {
          const currentStore = prev._quizStore || {};
          const prevDoc = currentStore[docId] || {};
          return {
            ...prev,
            _quizStore: {
              ...currentStore,
              [docId]: updater(prevDoc),
            },
          };
        },
        { immediate: true }
      );
    },
    [mutateChecklist]
  );

  const getDocAxesProgress = useCallback(
    (docId: string): DocAxisProgress => {
      return checklist._axesProgress?.[docId] || { completedAxes: [] };
    },
    [checklist._axesProgress]
  );

  const markAxisCompleted = useCallback(
    (docId: string, axisId: string, nextStep?: string) => {
      mutateChecklist(
        (prev) => {
          const map = prev._axesProgress || {};
          const current = map[docId] || { completedAxes: [] };
          const set = new Set(current.completedAxes);
          set.add(axisId);
          return {
            ...prev,
            _axesProgress: {
              ...map,
              [docId]: {
                ...current,
                completedAxes: Array.from(set),
                lastStep: nextStep ?? current.lastStep,
                completedAt: new Date().toISOString(),
              },
            },
          };
        },
        { immediate: true }
      );
    },
    [mutateChecklist]
  );

  const setLastAxisStep = useCallback(
    (docId: string, step: string) => {
      mutateChecklist((prev) => {
        const map = prev._axesProgress || {};
        const current = map[docId] || { completedAxes: [] };
        if (current.lastStep === step) return prev;
        return {
          ...prev,
          _axesProgress: {
            ...map,
            [docId]: {
              ...current,
              lastStep: step,
            },
          },
        };
      });
    },
    [mutateChecklist]
  );

  const getSimuladoState = useCallback(
    (simId: string): SimuladoState => {
      const fromCloud = checklist._simulados?.[simId];
      const fromLocal = storage.getSimuladoState(simId);
      if (fromCloud && Object.keys(fromCloud.answers || {}).length >= Object.keys(fromLocal.answers || {}).length) {
        return {
          answers: fromCloud.answers || {},
          eliminated: fromCloud.eliminated || {},
          corrected: Boolean(fromCloud.corrected),
          correctedMaterias: fromCloud.correctedMaterias || {},
          elapsedSeconds: typeof fromCloud.elapsedSeconds === "number" ? fromCloud.elapsedSeconds : 0,
        };
      }
      return fromLocal;
    },
    [checklist._simulados]
  );

  const saveSimuladoState = useCallback(
    (simId: string, next: SimuladoState) => {
      storage.setSimuladoState(simId, next);
      mutateChecklist(
        (prev) => {
          const nextSimulados: Record<string, SimuladoState> = {
            ...(prev._simulados || {}),
            [simId]: next,
          };
          if (simId === "simulado-sem-01-02") {
            nextSimulados["revisao_simulado_v1"] = next;
          }
          return {
            ...prev,
            _simulados: nextSimulados,
          };
        },
        { immediate: true }
      );
    },
    [mutateChecklist]
  );

  const recordStudyTime = useCallback(
    (
      deltaSeconds: number,
      kind: StudyActivityKind,
      target: string,
      countSession: boolean,
      options?: RecordStudyTimeOptions
    ) => {
      if (deltaSeconds <= 0 && !countSession) return;

      const prevChecklist = latestRef.current.checklist;
      const nextStudyTime = addStudyDelta(
        prevChecklist._studyTime,
        deltaSeconds,
        kind,
        target,
        countSession
      );
      const nextChecklist: ChecklistState = {
        ...prevChecklist,
        _studyTime: nextStudyTime,
      };
      mutationVersionRef.current++;
      latestRef.current.checklist = nextChecklist;
      storage.setChecklist(nextChecklist);
      setChecklist(nextChecklist);
      hasPendingPushRef.current = true;

      if (options?.flushKeepalive) {
        flushExitKeepalive();
        return;
      }

      scheduleCloudPush();
    },
    [flushExitKeepalive, scheduleCloudPush]
  );

  const { completedBlocksCount, totalBlocksCount, completedExamsCount } = useMemo(() => {
    const totalBlocks = WEEKS_DATA.length * 5; // 60 blocos
    let doneBlocks = 0;
    for (const w of WEEKS_DATA) {
      (["port", "rlm", "esp", "ger", "sim"] as const).forEach((s) => {
        if (checklist[`w${w.num}_${s}`]) doneBlocks++;
      });
    }
    let doneExams = 0;
    for (let i = 1; i <= 93; i++) {
      if (examsDone[String(i)]) doneExams++;
    }
    return {
      completedBlocksCount: doneBlocks,
      totalBlocksCount: totalBlocks,
      completedExamsCount: doneExams,
    };
  }, [checklist, examsDone]);

  const clearSyncError = useCallback(() => setSyncError(null), []);

  return (
    <ProgressContext.Provider
      value={{
        checklist,
        examsDone,
        collapsedWeeks,
        difficultyNotes,
        currentWeek,
        syncError,
        isSyncing,
        studyTime: checklist._studyTime,
        completedBlocksCount,
        totalBlocksCount,
        completedExamsCount,
        clearSyncError,
        retrySync,
        toggleBlock,
        setBlockDone,
        toggleWeekCollapse,
        setMonthWeeksCollapsed,
        toggleExamDone,
        setDifficultyNotes,
        setCurrentWeek,
        getQuizDoc,
        updateQuizDoc,
        getDocAxesProgress,
        markAxisCompleted,
        setLastAxisStep,
        getSimuladoState,
        saveSimuladoState,
        recordStudyTime,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress deve ser usado dentro de ProgressProvider");
  return ctx;
}
