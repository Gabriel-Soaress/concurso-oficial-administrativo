import type { ReactNode } from "react";
import type { MCQuestion } from "./curriculum";

export interface RichLessonAxis {
  id: string; // ex: "eixo-1"
  index: number; // 1-based
  title: string;
  subtitle?: string;
  estimatedMinutes?: number;
  render: () => ReactNode;
  checkpointQuestions: MCQuestion[];
}

export interface RichLessonModule {
  id: string; // ex: "w3_rlm_doc0"
  blockId: string; // ex: "w3_rlm"
  docIndex: number; // ex: 0
  title: string;
  shortTitle: string;
  subtitle?: string;
  introRender?: () => ReactNode;
  axes: RichLessonAxis[];
  finalQuestionsTitle: string;
  finalQuestions: MCQuestion[];
  checklistItems?: string[];
}
