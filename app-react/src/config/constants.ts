import type { SubjectKey } from "@/types";

export const STORAGE_KEYS = {
  CHECKLIST: "concurso_oficial_adm_checklist_v1",
  EXAMS_DONE: "concurso_oficial_adm_exams_done_v1",
  USER: "concurso_oficial_adm_user_v1",
  COLLAPSED_WEEKS: "concurso_oficial_adm_collapsed_weeks_v1",
  THEME: "app_theme",
  SIDEBAR_COLLAPSED: "concurso_sidebar_collapsed_v1",
  SIMULADO_PREFIX: "concurso_simulado_state_",
  LEGACY_SIM_01: "revisao_simulado_v1",
} as const;

export const API_ENDPOINT = "/api/db";

export const SUBJECT_META: Record<
  SubjectKey,
  {
    name: string;
    shortName: string;
    badgeClass: string;
    accentColor: string;
    dayHint: string;
  }
> = {
  port: {
    name: "Língua Portuguesa",
    shortName: "Português",
    badgeClass: "badge-port",
    accentColor: "indigo",
    dayHint: "Segunda",
  },
  rlm: {
    name: "Matemática & RLM",
    shortName: "Mat. e RLM",
    badgeClass: "badge-rlm",
    accentColor: "amber",
    dayHint: "Terça",
  },
  esp: {
    name: "Conhecimentos Específicos",
    shortName: "Específicos",
    badgeClass: "badge-esp",
    accentColor: "emerald",
    dayHint: "Quarta/Quinta",
  },
  ger: {
    name: "Conhecimentos Gerais",
    shortName: "Gerais",
    badgeClass: "badge-ger",
    accentColor: "sky",
    dayHint: "Sexta",
  },
};

export const MONTH_META: Record<1 | 2 | 3, { title: string; subtitle: string; weeks: string }> = {
  1: {
    title: "Mês 1 · Base Sólida",
    subtitle: "Fundamentos do edital, gramática nuclear, aritmética e Administração Pública",
    weeks: "Semanas 01 a 04",
  },
  2: {
    title: "Mês 2 · Aprofundamento",
    subtitle: "Sintaxe, raciocínio lógico, legislação administrativa e informática aplicada",
    weeks: "Semanas 05 a 08",
  },
  3: {
    title: "Mês 3 · Reta Final & Alta Performance",
    subtitle: "Revisão estratégica, redação oficial, simulações integrais e lapidação de erros",
    weeks: "Semanas 09 a 12",
  },
};
