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
      descricao: "Simulado acumulativo completo das Semanas 01, 02 e 03 (80 questões: 20 de Língua Portuguesa, 20 de Conhecimentos Gerais, 20 de Matemática/RLM e 20 de Conhecimentos Específicos) no padrão Instituto ACCESS.",
      semanas: "Semanas 01 a 03",
      badge: "Padrão Instituto ACCESS",
      icone: "📝",
      totalQuestoes: 80,
      tempoSugeridoMinutos: 240, // 4h00
      materias: [
        { key: "portugues", titulo: "Língua Portuguesa", icone: "📚", count: 20 },
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
    },
    {
      id: "simulado-sem-01-04",
      titulo: "Simulado Adaptado · Mês 1 (Semanas 01 a 04)",
      subtitulo: "Caderno de Prova Padrão Instituto ACCESS — Nível Médio",
      descricao: "Simulado acumulativo completo do Mês 1 (Semanas 01 a 04) com 80 questões misturando provas oficiais do Instituto ACCESS e questões adaptadas ao padrão da banca: 20 de Língua Portuguesa (até Sintaxe da Oração Simples), 20 de Conhecimentos Específicos, 20 de Conhecimentos Gerais (incluindo Birigui/SP) e 20 de Matemática/RLM.",
      semanas: "Mês 1 (Sem. 01 a 04)",
      badge: "Padrão Instituto ACCESS",
      icone: "🏆",
      totalQuestoes: 80,
      tempoSugeridoMinutos: 240, // 4h00
      materias: [
        { key: "portugues", titulo: "Língua Portuguesa", icone: "📚", count: 20 },
        { key: "especificos", titulo: "Conhecimentos Específicos", icone: "⚖️", count: 20 },
        { key: "gerais", titulo: "Conhecimentos Gerais", icone: "🌍", count: 20 },
        { key: "matematica", titulo: "Raciocínio Lógico e Mat.", icone: "🧮", count: 20 }
      ],
      getData: function () {
        return root.SIMULADO_03_DATA || null;
      },
      getResumos: function () {
        return root.REVISAO_03_DATA || null;
      }
    }
  ];
})(typeof window !== "undefined" ? window : globalThis);
