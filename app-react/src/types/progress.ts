import type { SimuladoState } from "./simulado";

export interface UserAccount {
  id: number;
  nome: string;
  email: string;
}

export interface DocAxisProgress {
  completedAxes: string[]; // ex: ["eixo-1", "eixo-2"]
  lastStep?: string; // ex: "summary" | "eixo-1" | "questoes"
  completedAt?: string;
}

export interface LegacyQuizEntry {
  answers?: Record<string, string>;
  checkedMap?: Record<string, boolean>;
  eliminated?: Record<string, boolean>;
  hideCommMap?: Record<string, boolean>;
  submitted?: boolean;
  total?: number;
  correct?: number;
}

export interface QuizDocState {
  mcAnswers?: Record<string, string>;
  mcChecked?: Record<string, boolean>;
  mcEliminated?: Record<string, boolean>;
  mcOpenCommentary?: Record<string, boolean>;
  mcSubmittedAll?: boolean;
  wsInputs?: Record<string, string>;
  wsChecked?: Record<string, boolean>;
  wsSubmittedAll?: boolean;
  wsRevealedAll?: boolean;
  innerChecks?: Record<string, boolean>;
}

export type StudyActivityKind = "aula" | "eixo" | "questoes" | "simulado";

export interface StudyTimeStats {
  totalSeconds: number;
  sessionCount: number;
  byDay: Record<string, number>; // "YYYY-MM-DD" (fuso local) -> segundos
  byCategory: Partial<Record<StudyActivityKind, number>>;
  byTarget: Record<string, number>; // ex: "w4_port", "simulado-sem-01-03" -> segundos
  lastUpdatedAt?: string;
}

export interface ChecklistState {
  [key: string]: unknown;
  _collapsedWeeks?: Record<number, boolean>;
  _theme?: "light" | "dark";
  _simulados?: Record<string, SimuladoState>;
  _quizzes?: Record<string, LegacyQuizEntry>;
  _quizStore?: Record<string, QuizDocState>;
  _axesProgress?: Record<string, DocAxisProgress>;
  _studyTime?: StudyTimeStats;
}

export type ExamsDoneState = Record<string, boolean>;
