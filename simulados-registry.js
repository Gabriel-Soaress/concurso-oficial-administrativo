/* ==========================================================================
   REGISTRO CENTRAL DE SIMULADOS (Extensível para novos simulados)
   - Adicione novos simulados aqui para que apareçam automaticamente no Hub
   ========================================================================== */
(function (root) {
  "use strict";

  root.SIMULADOS_REGISTRY = [
    {
      id: "simulado-sem-01-02",
      titulo: "Simulado Adaptado · Semanas 01 e 02",
      subtitulo: "Caderno de Prova Padrão Instituto ACCESS — Nível Médio",
      descricao: "Simulado completo e prático cobrindo toda a base inicial do edital de Oficial Administrativo: Morfologia e Fonologia, Raciocínio Lógico e Matemática, Conhecimentos Gerais (História, Atualidades e Poderes) e Conhecimentos Específicos (Direito Administrativo).",
      semanas: "Semanas 01 e 02",
      badge: "Padrão Instituto ACCESS",
      icone: "🎯",
      totalQuestoes: 74,
      tempoSugeridoMinutos: 210, // 3h30
      materias: [
        { key: "portugues", titulo: "Língua Portuguesa", icone: "📚", count: 18 },
        { key: "matematica", titulo: "Raciocínio Lógico e Mat.", icone: "🧮", count: 18 },
        { key: "gerais", titulo: "Conhecimentos Gerais", icone: "🌍", count: 18 },
        { key: "especificos", titulo: "Conhecimentos Específicos", icone: "⚖️", count: 20 }
      ],
      getData: function () {
        return root.SIMULADO_DATA || null;
      },
      getResumos: function () {
        return root.REVISAO_DATA || null;
      }
    },
    {
      id: "simulado-sem-01-03",
      titulo: "Simulado Adaptado · Semanas 01 a 03",
      subtitulo: "Caderno de Prova Padrão Instituto ACCESS — Nível Médio",
      descricao: "Simulado acumulativo das Semanas 01, 02 e 03 (60 questões iniciais: Conhecimentos Gerais, Matemática/RLM e Conhecimentos Específicos — Língua Portuguesa será adicionada após a Semana 03).",
      semanas: "Semanas 01 a 03",
      badge: "Padrão Instituto ACCESS",
      icone: "📝",
      totalQuestoes: 60,
      tempoSugeridoMinutos: 180, // 3h00
      materias: [
        { key: "gerais", titulo: "Conhecimentos Gerais", icone: "🌍", count: 20 },
        { key: "matematica", titulo: "Raciocínio Lógico e Mat.", icone: "🧮", count: 20 },
        { key: "especificos", titulo: "Conhecimentos Específicos", icone: "⚖️", count: 20 }
      ],
      getData: function () {
        return root.SIMULADO_02_DATA || null;
      },
      getResumos: function () {
        return root.REVISAO_02_DATA || null;
      }
    }
  ];
})(typeof window !== "undefined" ? window : globalThis);
