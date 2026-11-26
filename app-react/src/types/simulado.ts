export interface SimuladoSubjectMeta {
  key: string;
  titulo: string;
  icone: string;
  count: number;
}

export interface SimuladoTextoBase {
  id: string;
  titulo?: string;
  conteudo: string;
  fonte?: string;
}

export interface SimuladoQuestion {
  id?: string;
  qid?: string;
  num?: number;
  numero?: number;
  banca?: string;
  ref_interna?: string;
  origem?: string;
  texto_id?: string;
  textoApoio?: string;
  enunciado: string;
  alternativas: Record<string, string>;
  gabarito: string;
  comentario?: string;
  assunto?: string;
}

export interface SimuladoMateriaData {
  key: string;
  titulo: string;
  icone?: string;
  subtitulo?: string;
  textos?: SimuladoTextoBase[];
  questoes: SimuladoQuestion[];
}

export interface SimuladoPayload {
  titulo?: string;
  subtitulo?: string;
  materias: SimuladoMateriaData[];
}

export interface SimuladoResumeSection {
  titulo: string;
  conteudo: string;
}

export interface SimuladoResumeData {
  [materiaKey: string]: {
    titulo?: string;
    title?: string;
    icone?: string;
    icon?: string;
    subtitulo?: string;
    badge?: string;
    conteudo?: string;
    content?: string;
    secoes?: SimuladoResumeSection[];
  };
}

export interface SimuladoRegistryEntry {
  id: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  semanas: string;
  badge: string;
  icone: string;
  totalQuestoes: number;
  tempoSugeridoMinutos: number;
  materias: SimuladoSubjectMeta[];
  getData: () => SimuladoPayload | null;
  getResumos: () => SimuladoResumeData | null;
}

export interface SimuladoState {
  answers: Record<string, string | undefined>;
  eliminated: Record<string, boolean>;
  corrected: boolean;
  correctedMaterias: Record<string, boolean>;
  elapsedSeconds: number;
}
