export type SubjectKey = "port" | "rlm" | "esp" | "ger";

export type BlockKey = `w${number}_${SubjectKey | "sim"}`;

export interface WeekCurriculum {
  num: number;
  monthNum: 1 | 2 | 3;
  monthTitle: string;
  title: string;
  folder: string;
  prereq: string;
  port: string;
  rlm: string;
  esp: string;
  ger: string;
  simulado: string;
  simBanca: string;
  simNum: number;
}

export type LessonDocKind = "lesson" | "worksheet";

export interface LessonDocument {
  id: string;
  file: string;
  filename: string;
  title: string;
  shortTitle: string;
  kind: LessonDocKind;
  questionCount: number;
  isMain: boolean;
  content: string;
}

export type WeekLessonsMap = Record<string, LessonDocument[]>;

export interface MCQuestion {
  num: string;
  header: string;
  banca: string;
  statement: string;
  options: Record<string, string>;
  answer: string;
  commentary: string;
}

export interface WorksheetItem {
  num: string;
  prompt: string;
  expectedRaw: string;
  expectedDisplay: string;
  explanation: string;
}

export interface WorksheetSection {
  title: string;
  items: WorksheetItem[];
}

export interface ParsedWorksheet {
  introMd: string;
  sections: WorksheetSection[];
  totalItems: number;
}

export interface LessonAxis {
  index: number; // 1-based
  id: string; // e.g. "eixo-1"
  title: string;
  cleanTitle: string;
  theoryMd: string;
  checkpointQuestions: MCQuestion[];
}

export interface ParsedLessonStepper {
  hasAxes: boolean;
  introMd: string;
  summaryMd: string;
  axes: LessonAxis[];
  extraLabMd: string;
  finalQuestionsTitle: string;
  finalQuestions: MCQuestion[];
  checklistMd: string;
}
