import type { ChecklistState, DocAxisProgress, LegacyQuizEntry, QuizDocState, SimuladoState } from "@/types";
import { mergeStudyTimeStats } from "./studyTime";

/**
 * Converte uma entrada legada de `_quizzes[docId]` (usada pelo index.html)
 * para o formato `QuizDocState` usado pelo app React (`_quizStore[docId]`),
 * populando os escopos `final_q*` (LessonPage) e `rich_final_q*` (RichLessonView)
 * sem jamais sobrescrever respostas mais recentes já registradas no React.
 */
export function convertLegacyQuizToDocState(
  legacy: LegacyQuizEntry | undefined,
  existing?: QuizDocState
): QuizDocState {
  const base: QuizDocState = existing ? { ...existing } : {};
  const mcAnswers: Record<string, string> = { ...(base.mcAnswers || {}) };
  const mcChecked: Record<string, boolean> = { ...(base.mcChecked || {}) };
  const mcEliminated: Record<string, boolean> = { ...(base.mcEliminated || {}) };
  const mcOpenCommentary: Record<string, boolean> = { ...(base.mcOpenCommentary || {}) };

  if (legacy) {
    if (legacy.answers) {
      for (const [qNum, ans] of Object.entries(legacy.answers)) {
        if (!ans) continue;
        const cleanNum = String(qNum).trim();
        for (const scope of ["final", "rich_final"] as const) {
          const k = `${scope}_q${cleanNum}`;
          if (!(k in mcAnswers)) {
            mcAnswers[k] = String(ans);
          }
        }
      }
    }

    if (legacy.checkedMap) {
      for (const [qNum, checked] of Object.entries(legacy.checkedMap)) {
        if (!checked) continue;
        const cleanNum = String(qNum).trim();
        for (const scope of ["final", "rich_final"] as const) {
          const k = `${scope}_q${cleanNum}`;
          if (!(k in mcChecked)) {
            mcChecked[k] = true;
          }
          if (!(k in mcOpenCommentary) && legacy.hideCommMap?.[cleanNum] === false) {
            mcOpenCommentary[k] = true;
          }
        }
      }
    }

    if (legacy.eliminated) {
      for (const [rawKey, isElim] of Object.entries(legacy.eliminated)) {
        if (!isElim) continue;
        const m = String(rawKey).trim().match(/^(\d+)_([A-Ea-e])$/);
        if (!m) continue;
        const qNum = m[1];
        const letter = m[2].toUpperCase();
        for (const scope of ["final", "rich_final"] as const) {
          const k = `${scope}_q${qNum}_${letter}`;
          if (!(k in mcEliminated)) {
            mcEliminated[k] = true;
          }
        }
      }
    }
  }

  return {
    ...base,
    mcAnswers,
    mcChecked,
    mcEliminated,
    ...(Object.keys(mcOpenCommentary).length > 0 ? { mcOpenCommentary } : {}),
    mcSubmittedAll: base.mcSubmittedAll ?? Boolean(legacy?.submitted),
  };
}

/**
 * Hidrata `checklist._quizStore` a partir de `checklist._quizzes`, preservando
 * integralmente `checklist._quizzes` para retrocompatibilidade com o site legado.
 */
export function hydrateChecklistWithLegacyQuizzes(checklist: ChecklistState): ChecklistState {
  const legacyQuizzes = checklist._quizzes;
  if (!legacyQuizzes || typeof legacyQuizzes !== "object") {
    return checklist;
  }

  const nextQuizStore: Record<string, QuizDocState> = { ...(checklist._quizStore || {}) };
  let changed = false;

  for (const [docId, legacyEntry] of Object.entries(legacyQuizzes)) {
    if (!legacyEntry || typeof legacyEntry !== "object") continue;
    const prevDoc = nextQuizStore[docId];
    const converted = convertLegacyQuizToDocState(legacyEntry, prevDoc);
    nextQuizStore[docId] = converted;
    changed = true;
  }

  if (!changed) return checklist;

  return {
    ...checklist,
    _quizStore: nextQuizStore,
  };
}

function mergeQuizDocState(localDoc: QuizDocState = {}, cloudDoc: QuizDocState = {}): QuizDocState {
  return {
    ...localDoc,
    ...cloudDoc,
    mcAnswers: { ...(localDoc.mcAnswers || {}), ...(cloudDoc.mcAnswers || {}) },
    mcChecked: { ...(localDoc.mcChecked || {}), ...(cloudDoc.mcChecked || {}) },
    mcEliminated: { ...(localDoc.mcEliminated || {}), ...(cloudDoc.mcEliminated || {}) },
    mcOpenCommentary: { ...(localDoc.mcOpenCommentary || {}), ...(cloudDoc.mcOpenCommentary || {}) },
    wsInputs: { ...(localDoc.wsInputs || {}), ...(cloudDoc.wsInputs || {}) },
    wsChecked: { ...(localDoc.wsChecked || {}), ...(cloudDoc.wsChecked || {}) },
    innerChecks: { ...(localDoc.innerChecks || {}), ...(cloudDoc.innerChecks || {}) },
  };
}

function mergeAxesProgress(
  localAxes: Record<string, DocAxisProgress> = {},
  cloudAxes: Record<string, DocAxisProgress> = {}
): Record<string, DocAxisProgress> {
  const allDocIds = new Set([...Object.keys(localAxes), ...Object.keys(cloudAxes)]);
  const merged: Record<string, DocAxisProgress> = {};
  for (const docId of allDocIds) {
    const l = localAxes[docId];
    const c = cloudAxes[docId];
    const completed = Array.from(new Set([...(l?.completedAxes || []), ...(c?.completedAxes || [])]));
    merged[docId] = {
      ...(l || {}),
      ...(c || {}),
      completedAxes: completed,
    };
  }
  return merged;
}

function countAnswered(sim?: SimuladoState): number {
  if (!sim?.answers) return 0;
  let n = 0;
  for (const val of Object.values(sim.answers)) {
    if (val) n++;
  }
  return n;
}

function mergeSimuladoState(localSim?: SimuladoState, cloudSim?: SimuladoState): SimuladoState | undefined {
  if (!localSim) return cloudSim;
  if (!cloudSim) return localSim;

  const localHasMore = countAnswered(localSim) > countAnswered(cloudSim);
  const answers = localHasMore
    ? { ...(cloudSim.answers || {}), ...(localSim.answers || {}) }
    : { ...(localSim.answers || {}), ...(cloudSim.answers || {}) };
  const eliminated = localHasMore
    ? { ...(cloudSim.eliminated || {}), ...(localSim.eliminated || {}) }
    : { ...(localSim.eliminated || {}), ...(cloudSim.eliminated || {}) };
  const correctedMaterias = {
    ...(localSim.correctedMaterias || {}),
    ...(cloudSim.correctedMaterias || {}),
  };

  return {
    ...(localHasMore ? cloudSim : localSim),
    ...(localHasMore ? localSim : cloudSim),
    answers,
    eliminated,
    correctedMaterias,
    corrected: Boolean(localSim.corrected || cloudSim.corrected),
    elapsedSeconds: Math.max(localSim.elapsedSeconds || 0, cloudSim.elapsedSeconds || 0),
  };
}

function mergeSimuladosMap(
  localSims?: Record<string, SimuladoState>,
  cloudSims?: Record<string, SimuladoState>
): Record<string, SimuladoState> | undefined {
  if (!localSims && !cloudSims) return undefined;
  const allIds = new Set([...Object.keys(localSims || {}), ...Object.keys(cloudSims || {})]);
  const merged: Record<string, SimuladoState> = {};
  for (const simId of allIds) {
    const m = mergeSimuladoState(localSims?.[simId], cloudSims?.[simId]);
    if (m) merged[simId] = m;
  }
  return merged;
}

/**
 * Mescla o checklist local com o da nuvem dando precedência à nuvem, mantendo
 * intactos `_quizzes`, `_simulados`, `_quizStore`, `_axesProgress` e hidratando
 * entradas legadas de `_quizzes` dentro de `_quizStore`.
 */
export function mergeCloudAndLocalChecklist(
  local: ChecklistState,
  cloud: ChecklistState
): ChecklistState {
  const mergedQuizzes =
    local._quizzes || cloud._quizzes
      ? { ...(local._quizzes || {}), ...(cloud._quizzes || {}) }
      : undefined;

  const allDocIds = new Set([
    ...Object.keys(local._quizStore || {}),
    ...Object.keys(cloud._quizStore || {}),
  ]);
  const mergedQuizStore: Record<string, QuizDocState> = {};
  for (const docId of allDocIds) {
    mergedQuizStore[docId] = mergeQuizDocState(local._quizStore?.[docId], cloud._quizStore?.[docId]);
  }

  const mergedAxes =
    local._axesProgress || cloud._axesProgress
      ? mergeAxesProgress(local._axesProgress, cloud._axesProgress)
      : undefined;

  const mergedStudyTime = mergeStudyTimeStats(local._studyTime, cloud._studyTime);
  const mergedSimulados = mergeSimuladosMap(local._simulados, cloud._simulados);

  const combined: ChecklistState = {
    ...local,
    ...cloud,
    ...(mergedQuizzes ? { _quizzes: mergedQuizzes } : {}),
    ...(Object.keys(mergedQuizStore).length > 0 ? { _quizStore: mergedQuizStore } : {}),
    ...(mergedAxes ? { _axesProgress: mergedAxes } : {}),
    ...(mergedStudyTime ? { _studyTime: mergedStudyTime } : {}),
    ...(mergedSimulados ? { _simulados: mergedSimulados } : {}),
  };

  return hydrateChecklistWithLegacyQuizzes(combined);
}
