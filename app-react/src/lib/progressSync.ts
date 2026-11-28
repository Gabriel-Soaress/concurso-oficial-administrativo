import type { ChecklistState, ExamsDoneState } from "@/types";

export const UPSERT_PROGRESS_SQL = `INSERT INTO concurso_progresso (usuario_id, checklist, provas_feitas, notas_dificuldade, semana_atual, updated_at)
         VALUES ($1, $2::jsonb, $3::jsonb, $4, $5, NOW())
         ON CONFLICT (usuario_id) DO UPDATE SET
           checklist = EXCLUDED.checklist,
           provas_feitas = EXCLUDED.provas_feitas,
           notas_dificuldade = EXCLUDED.notas_dificuldade,
           semana_atual = EXCLUDED.semana_atual,
           updated_at = NOW();`;

/**
 * Atualização parcial segura para o envio com `keepalive: true` ao fechar a aba:
 * mescla no topo da coluna JSONB (`||`) apenas chaves leves/críticas sem tocar
 * nem sobrescrever `_quizStore` / `_quizzes` no banco caso o payload completo
 * ultrapasse o teto de 64 KiB do navegador.
 */
export const PATCH_PROGRESS_SQL = `INSERT INTO concurso_progresso (usuario_id, checklist, provas_feitas, notas_dificuldade, semana_atual, updated_at)
         VALUES ($1, $2::jsonb, $3::jsonb, $4, $5, NOW())
         ON CONFLICT (usuario_id) DO UPDATE SET
           checklist = COALESCE(concurso_progresso.checklist, '{}'::jsonb) || EXCLUDED.checklist,
           provas_feitas = EXCLUDED.provas_feitas,
           notas_dificuldade = EXCLUDED.notas_dificuldade,
           semana_atual = EXCLUDED.semana_atual,
           updated_at = NOW();`;

/**
 * Limite seguro abaixo dos 65.536 bytes impostos pelo Chromium/Fetch API
 * para requisições com `keepalive: true`.
 */
export const MAX_KEEPALIVE_BODY_BYTES = 56_000;

export interface ProgressSnapshot {
  checklist: ChecklistState;
  examsDone: ExamsDoneState;
  difficultyNotes: string;
  currentWeek: number;
}

export interface KeepaliveExitPayload {
  body: string;
  isCompactPatch: boolean;
}

/**
 * Extrai uma cópia rasa de `checklist` omitindo `_quizStore` e `_quizzes`
 * (mantendo `_axesProgress`, `_studyTime`, `_simulados`, `_theme`, `_collapsedWeeks`
 * e todos os blocos da trilha). Não muta o objeto original.
 */
export function extractCompactPatchChecklist(checklist: ChecklistState): ChecklistState {
  const compact: ChecklistState = {};
  for (const [key, value] of Object.entries(checklist || {})) {
    if (key === "_quizStore" || key === "_quizzes") continue;
    compact[key] = value;
  }
  return compact;
}

export function buildFullProgressRequestBody(userId: number, snap: ProgressSnapshot): string {
  return JSON.stringify({
    query: UPSERT_PROGRESS_SQL,
    params: [
      userId,
      JSON.stringify(snap.checklist),
      JSON.stringify(snap.examsDone),
      snap.difficultyNotes.trim(),
      snap.currentWeek,
    ],
  });
}

function utf8ByteLength(text: string): number {
  if (typeof TextEncoder !== "undefined") {
    return new TextEncoder().encode(text).length;
  }
  return text.length;
}

/**
 * Monta o corpo POST para flush de saída com `keepalive: true`.
 * Se o payload completo passar de `MAX_KEEPALIVE_BODY_BYTES`, usa `PATCH_PROGRESS_SQL`
 * com `extractCompactPatchChecklist` para garantir persistência imediata de eixos,
 * tempo de estudo, simulados e blocos sem estourar o limite de 64 KiB.
 */
export function buildKeepaliveExitRequestBody(
  userId: number,
  snap: ProgressSnapshot
): KeepaliveExitPayload {
  const fullBody = buildFullProgressRequestBody(userId, snap);
  if (utf8ByteLength(fullBody) <= MAX_KEEPALIVE_BODY_BYTES) {
    return { body: fullBody, isCompactPatch: false };
  }

  const compactChecklist = extractCompactPatchChecklist(snap.checklist);
  const compactBody = JSON.stringify({
    query: PATCH_PROGRESS_SQL,
    params: [
      userId,
      JSON.stringify(compactChecklist),
      JSON.stringify(snap.examsDone),
      snap.difficultyNotes.trim(),
      snap.currentWeek,
    ],
  });

  return { body: compactBody, isCompactPatch: true };
}

export function isPlainRecordEqual(a: unknown, b: unknown): boolean {
  if (Object.is(a, b)) return true;
  if (typeof a !== typeof b || a === null || b === null || typeof a !== "object") return false;
  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
    return a.every((item, idx) => isPlainRecordEqual(item, b[idx]));
  }
  const objA = a as Record<string, unknown>;
  const objB = b as Record<string, unknown>;
  const keysA = Object.keys(objA).filter((k) => objA[k] !== undefined);
  const keysB = Object.keys(objB).filter((k) => objB[k] !== undefined);
  if (keysA.length !== keysB.length) return false;
  return keysA.every((k) => Object.prototype.hasOwnProperty.call(objB, k) && isPlainRecordEqual(objA[k], objB[k]));
}
