export interface GeneralExam {
  i: number;
  y: number;
  o: string; // Órgão
  b: string; // Banca
  g: boolean; // Possui gabarito
}

export interface AccessExam {
  i: number;
  y: number;
  o: string; // Órgão
  c: string; // Cargo
  f: string; // Arquivo PDF da prova
  g: string; // Arquivo PDF do gabarito
}
