import type { RichLessonModule } from "@/types";

export interface RichLessonRegistryEntry {
  blockId: string;
  docIndex: number;
  load: () => Promise<{ default: RichLessonModule }>;
}

const REGISTRY_ENTRIES: RichLessonRegistryEntry[] = [
  {
    blockId: "w3_rlm",
    docIndex: 0,
    load: () => import("./semana-03/matematica"),
  },
  {
    blockId: "w3_port",
    docIndex: 0,
    load: () => import("./semana-03/portugues"),
  },
  {
    blockId: "w4_port",
    docIndex: 0,
    load: () => import("./semana-04/portugues"),
  },
];

const ENTRY_MAP = new Map<string, RichLessonRegistryEntry>(
  REGISTRY_ENTRIES.map((e) => [`${e.blockId}:${e.docIndex}`, e])
);

export function hasRichLesson(blockId: string, docIndex = 0): boolean {
  return ENTRY_MAP.has(`${blockId}:${docIndex}`);
}

export async function loadRichLesson(
  blockId: string,
  docIndex = 0
): Promise<RichLessonModule | null> {
  const entry = ENTRY_MAP.get(`${blockId}:${docIndex}`);
  if (!entry) return null;
  const mod = await entry.load();
  return mod.default;
}
