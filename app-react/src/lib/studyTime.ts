import type { StudyActivityKind, StudyTimeStats } from "@/types";

export interface StudyRouteMatch {
  kind: StudyActivityKind;
  target: string;
}

export interface StudyAverages {
  totalSeconds: number;
  activeDays: number;
  avgPerDaySeconds: number;
  avgPerSessionSeconds: number;
  todaySeconds: number;
}

const MAX_DELTA_PER_FLUSH_SEC = 7200;

/**
 * Classifica uma rota do AppRouter para saber se representa estudo ativo
 * (matéria, eixo, bateria de questões ou simulado) e qual é o alvo.
 */
export function classifyStudyRoute(pathname: string): StudyRouteMatch | null {
  const clean = String(pathname || "").replace(/\/+$/, "");

  const axisMatch = clean.match(/^\/aulas\/([^/]+)\/\d+\/eixo\/\d+$/);
  if (axisMatch) {
    return { kind: "eixo", target: decodeURIComponent(axisMatch[1]) };
  }

  const questoesMatch = clean.match(/^\/aulas\/([^/]+)\/\d+\/questoes$/);
  if (questoesMatch) {
    return { kind: "questoes", target: decodeURIComponent(questoesMatch[1]) };
  }

  const lessonMatch = clean.match(/^\/aulas\/([^/]+)(?:\/\d+)?$/);
  if (lessonMatch) {
    return { kind: "aula", target: decodeURIComponent(lessonMatch[1]) };
  }

  const simMatch = clean.match(/^\/simulados\/([^/]+)$/);
  if (simMatch && simMatch[1]) {
    return { kind: "simulado", target: decodeURIComponent(simMatch[1]) };
  }

  return null;
}

/**
 * Retorna a data local formatada como YYYY-MM-DD (nunca UTC).
 */
export function getLocalDateKey(date: Date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function createEmptyStats(): StudyTimeStats {
  return {
    totalSeconds: 0,
    sessionCount: 0,
    byDay: {},
    byCategory: {},
    byTarget: {},
  };
}

/**
 * Acumula um incremento de tempo de estudo (com proteção contra saltos irreais).
 */
export function addStudyDelta(
  prev: StudyTimeStats | undefined,
  deltaSeconds: number,
  kind: StudyActivityKind,
  target: string,
  countSession: boolean,
  now: Date = new Date()
): StudyTimeStats {
  const base = prev
    ? {
        totalSeconds: Math.max(0, Math.round(prev.totalSeconds || 0)),
        sessionCount: Math.max(0, Math.round(prev.sessionCount || 0)),
        byDay: { ...(prev.byDay || {}) },
        byCategory: { ...(prev.byCategory || {}) },
        byTarget: { ...(prev.byTarget || {}) },
        lastUpdatedAt: prev.lastUpdatedAt,
      }
    : createEmptyStats();

  const rawRounded = Math.round(deltaSeconds);
  if (!Number.isFinite(rawRounded) || rawRounded <= 0) {
    if (!countSession) return base;
    return {
      ...base,
      sessionCount: base.sessionCount + 1,
      lastUpdatedAt: now.toISOString(),
    };
  }

  const safeDelta = Math.min(rawRounded, MAX_DELTA_PER_FLUSH_SEC);
  const dayKey = getLocalDateKey(now);

  base.totalSeconds += safeDelta;
  base.byDay[dayKey] = (base.byDay[dayKey] || 0) + safeDelta;
  base.byCategory[kind] = (base.byCategory[kind] || 0) + safeDelta;
  if (target) {
    base.byTarget[target] = (base.byTarget[target] || 0) + safeDelta;
  }
  if (countSession) {
    base.sessionCount += 1;
  }
  base.lastUpdatedAt = now.toISOString();

  return base;
}

function mergeNumericMaps<K extends string>(
  a?: Partial<Record<K, number>>,
  b?: Partial<Record<K, number>>
): Record<K, number> {
  const out = {} as Record<K, number>;
  const keys = new Set([
    ...Object.keys(a || {}),
    ...Object.keys(b || {}),
  ]) as Set<K>;
  for (const k of keys) {
    out[k] = Math.max(a?.[k] || 0, b?.[k] || 0);
  }
  return out;
}

/**
 * Mescla estatísticas locais e da nuvem sem perder dias nem subestimar o total.
 */
export function mergeStudyTimeStats(
  local?: StudyTimeStats,
  cloud?: StudyTimeStats
): StudyTimeStats | undefined {
  if (!local && !cloud) return undefined;
  if (!local) return cloud;
  if (!cloud) return local;

  const byDay = mergeNumericMaps<string>(local.byDay, cloud.byDay);
  const byCategory = mergeNumericMaps<StudyActivityKind>(local.byCategory, cloud.byCategory);
  const byTarget = mergeNumericMaps<string>(local.byTarget, cloud.byTarget);

  const sumByDay = Object.values(byDay).reduce((acc, v) => acc + v, 0);
  const totalSeconds = Math.max(local.totalSeconds || 0, cloud.totalSeconds || 0, sumByDay);
  const sessionCount = Math.max(local.sessionCount || 0, cloud.sessionCount || 0);

  const lastUpdatedAt =
    local.lastUpdatedAt && cloud.lastUpdatedAt
      ? local.lastUpdatedAt > cloud.lastUpdatedAt
        ? local.lastUpdatedAt
        : cloud.lastUpdatedAt
      : cloud.lastUpdatedAt || local.lastUpdatedAt;

  return {
    totalSeconds,
    sessionCount,
    byDay,
    byCategory,
    byTarget,
    ...(lastUpdatedAt ? { lastUpdatedAt } : {}),
  };
}

export function computeStudyAverages(
  stats: StudyTimeStats | undefined,
  now: Date = new Date()
): StudyAverages {
  if (!stats) {
    return {
      totalSeconds: 0,
      activeDays: 0,
      avgPerDaySeconds: 0,
      avgPerSessionSeconds: 0,
      todaySeconds: 0,
    };
  }

  const totalSeconds = Math.max(0, Math.round(stats.totalSeconds || 0));
  const dayValues = Object.values(stats.byDay || {});
  const activeDays = dayValues.filter((s) => s > 0).length;
  const sessionCount = Math.max(0, Math.round(stats.sessionCount || 0));
  const todaySeconds = stats.byDay?.[getLocalDateKey(now)] || 0;

  return {
    totalSeconds,
    activeDays,
    avgPerDaySeconds: activeDays > 0 ? Math.round(totalSeconds / activeDays) : 0,
    avgPerSessionSeconds: sessionCount > 0 ? Math.round(totalSeconds / sessionCount) : 0,
    todaySeconds,
  };
}

export function formatStudyDuration(seconds: number): string {
  const s = Math.max(0, Math.round(seconds || 0));
  if (s <= 0) return "0 min";
  if (s < 60) return "< 1 min";

  const totalMinutes = Math.round(s / 60);
  if (totalMinutes < 60) {
    return `${totalMinutes} min`;
  }

  const hours = Math.floor(totalMinutes / 60);
  const remMin = totalMinutes % 60;
  return remMin === 0 ? `${hours}h` : `${hours}h ${remMin}m`;
}
