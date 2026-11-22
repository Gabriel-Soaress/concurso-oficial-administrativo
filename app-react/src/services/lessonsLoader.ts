import type { LessonDocument, WeekLessonsMap } from "@/types";

declare global {
  interface Window {
    WEEK_LESSONS_DATA?: WeekLessonsMap;
  }
}

let loadPromise: Promise<WeekLessonsMap> | null = null;

function injectScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[data-dynamic-src="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded === "true") {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error(`Falha ao carregar ${src}`)), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.dataset.dynamicSrc = src;
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error(`Falha ao carregar ${src}`));
    document.head.appendChild(script);
  });
}

export async function loadWeekLessons(): Promise<WeekLessonsMap> {
  if (window.WEEK_LESSONS_DATA) {
    return window.WEEK_LESSONS_DATA;
  }
  if (!loadPromise) {
    loadPromise = injectScript("/aulas-data.js").then(() => window.WEEK_LESSONS_DATA || {});
  }
  return loadPromise;
}

export function findDocById(lessons: WeekLessonsMap, docId: string): LessonDocument | null {
  for (const docs of Object.values(lessons)) {
    const found = docs.find((d) => d.id === docId);
    if (found) return found;
  }
  return null;
}
