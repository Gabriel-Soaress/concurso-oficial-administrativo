/* ==========================================================================
   RESUMOS ESTRATÉGICOS — SIMULADO 02 (SEMANAS 01 A 03)
   Oficial Administrativo · Instituto ACCESS
   ========================================================================== */
(function (root) {
  "use strict";

  root.REVISAO_02_DATA = {
    gerais: {
      title: "Conhecimentos Gerais",
      badge: "Semanas 01 a 03",
      icon: "🌍",
      content: `## 1. Brasil República, Poderes e Cidadania (Semanas 01 e 02)
- **Separação dos Poderes (Art. 2º CF/88):** Legislativo (faz leis e fiscaliza — Congresso Nacional, Assembleias, Câmaras Municipais), Executivo (administra e executa políticas públicas — Presidente, Governadores, Prefeitos) e Judiciário (julga conflitos aplicando a lei — STF, STJ, TJs). São **independentes e harmônicos** entre si.
- **Município na Federação (Art. 18 e 29 CF/88):** O Município é ente federativo autônomo, regido por **Lei Orgânica Municipal** (votada em 2 turnos, interstício mínimo de 10 dias, aprovada por 2/3 da Câmara). Não possui Poder Judiciário próprio.
- **Direitos e Garantias Fundamentais (Art. 5º CF/88):**
  - *Remédios constitucionais:* Habeas Corpus (liberdade de locomoção), Habeas Data (acesso/retificação de dados pessoais), Mandado de Segurança (direito líquido e certo), Ação Popular (anular ato lesivo ao patrimônio público — exclusiva do cidadão eleitor).

## 2. Formação Histórica e Econômica de São Paulo (Semana 03)
- **Período Colonial e Bandeirismo:** Vila de São Vicente (1532, primeira vila oficial do Brasil, Martim Afonso de Sousa) e Piratininga/São Paulo (1554, colégio jesuíta). As **Bandeiras** partiram de SP para o interior buscando indígenas (apresamento), metais preciosos (ouro em MG, GO, MT) e expandindo as fronteiras além de Tordesilhas.
- **Ciclo do Café e Ferrovias (Séc. XIX–XX):**
  - A marcha do café seguiu do Vale do Paraíba para o **Oeste Paulista** (Campinas, Ribeirão Preto, terra roxa), impulsionando mão de obra imigrante (italianos, espanhóis, japoneses) após o fim do tráfico e a abolição (1888).
  - **Ferrovias** (Santos–Jundiaí / São Paulo Railway, Companhia Paulista, Mogiana, Sorocabana) integraram o interior ao Porto de Santos e geraram o surgimento de cidades ao longo dos trilhos.
- **Industrialização e Interiorização:**
  - Capital acumulado pelo café financiou indústrias têxteis, alimentícias e metalúrgicas na capital e ABC.
  - A partir dos anos 1970, ocorreu a **desconcentração industrial**, levando polos tecnológicos, agroindustriais (cana-de-açúcar/etanol, citricultura, papel e celulose) e de serviços para o interior paulista (Campinas, São José dos Campos, Ribeirão Preto, Bauru, Sorocaba).

## 3. Atualidades, Sustentabilidade e Tecnologia
- **Desenvolvimento Sustentável e ESG:** Equilíbrio entre crescimento econômico, inclusão social e preservação ambiental. No setor público: compras sustentáveis, gestão de resíduos sólidos (PNRS), saneamento básico e transição energética (etanol, biometano, solar).
- **Transformação Digital no Serviço Público:** Governo Digital (Lei nº 14.129/2021), assinatura eletrônica (Gov.br), desburocratização e proteção de dados pessoais (**LGPD** — Lei nº 13.709/2018).`
    },

    matematica: {
      title: "Matemática e RLM",
      badge: "Semanas 01 a 03",
      icon: "🧮",
      content: `## 1. Conjuntos, Diagramas de Venn e Operações Numéricas (Semana 01)
- **União e Interseção (2 conjuntos):** $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$. Sempre comece preenchendo o diagrama pela **interseção central** ($A \\cap B$ ou $A \\cap B \\cap C$) e subtraia antes de preencher os exclusivos.
- **Frações e Decimais:**
  - Soma/subtração: igualar denominadores (MMC).
  - Multiplicação: numerador $\\times$ numerador; denominador $\\times$ denominador.
  - Divisão: mantém a primeira e multiplica pelo inverso da segunda.
- **Potenciação:** $a^m \\cdot a^n = a^{m+n}$; $\\frac{a^m}{a^n} = a^{m-n}$; $(a^m)^n = a^{m\\cdot n}$; $a^0 = 1$ ($a \\neq 0$); $a^{-n} = \\frac{1}{a^n}$.

## 2. Razão, Proporção, Porcentagem e Radiciação (Semanas 02 e 03)
- **Razão e Proporção:** $\\frac{a}{b} = \\frac{c}{d} \\iff a \\cdot d = b \\cdot c$. Em divisão diretamente proporcional, some as partes ($k$) e ache o valor unitário.
- **Porcentagem:**
  - Aumento de $i\\%$: multiplique por $(1 + i/100)$.
  - Desconto de $i\\%$: multiplique por $(1 - i/100)$.
  - **Pegadinha clássica:** Aumentos/descontos sucessivos **não se somam**! Multiplique os fatores. Ex.: $+10\\%$ e depois $-10\\% \\Rightarrow 1{,}10 \\times 0{,}90 = 0{,}99$ ($-1\\%$).
- **Radiciação e Regra dos Sinais:**
  - $\\sqrt[n]{a} = b \\iff b^n = a$.
  - Índice **par** ($\\sqrt{\\phantom{x}}, \\sqrt[4]{\\phantom{x}}$): radicando negativo **não** tem solução real; resultado principal é não negativo.
  - Índice **ímpar** ($\\sqrt[3]{\\phantom{x}}$): mantém o sinal do radicando (ex.: $\\sqrt[3]{-27} = -3$).
  - Fatoração em primos simplifica radicais: $\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}$.

## 3. Regra de Três Simples e Composta (Semana 03)
- **Regra de Três Simples:**
  - **Diretamente proporcional (GDP):** aumenta uma, aumenta a outra $\\rightarrow$ multiplica cruzado.
  - **Inversamente proporcional (GIP):** aumenta uma, diminui a outra (ex.: velocidade vs. tempo; nº de servidores vs. dias para concluir o mesmo lote) $\\rightarrow$ multiplica em linha.
- **Regra de Três Composta (Método da Causa e Efeito / Setas):**
  1. Coloque a grandeza com o $x$ isolada em um lado da igualdade.
  2. Compare **cada outra grandeza individualmente** com a grandeza do $x$: se for direta, mantém a fração; se for inversa, **inverte a fração**.
  3. Multiplique as frações do outro lado e resolva.`
    },

    especificos: {
      title: "Conhecimentos Específicos",
      badge: "Semanas 01 a 03",
      icon: "⚖️",
      content: `## 1. Estado, Governo, Administração e Princípios (Semanas 01 e 02)
- **Estado vs. Governo vs. Administração:**
  - **Estado:** ente permanente (Povo + Território + Soberania).
  - **Governo:** cúpula política transitória que define diretrizes.
  - **Administração Pública:** máquina técnica permanente que executa os serviços públicos.
- **Princípios Expressos (Art. 37 CF/88 — LIMPE):**
  - **L**egalidade: o agente público só faz o que a lei autoriza ou determina (diferente do particular).
  - **I**mpessoalidade: finalidade pública, vedada promoção pessoal (Art. 37, §1º) e isonomia.
  - **M**oralidade: ética, boa-fé, probidade administrativa.
  - **P**ublicidade: transparência oficial dos atos (regra geral; sigilo é exceção constitucional).
  - **E**ficiência: produtividade, qualidade, economicidade e celeridade.
- **Organização Administrativa (Desconcentração vs. Descentralização):**
  - **Administração Direta:** União, Estados, DF, Municípios e seus órgãos internos (Secretarias, Ministérios) — **desconcentração** (mesma pessoa jurídica, há hierarquia).
  - **Administração Indireta:** Autarquias, Fundações Públicas, Empresas Públicas e Sociedades de Economia Mista — **descentralização** (nova pessoa jurídica, vinculação/tutela, **não** há subordinação hierárquica).

## 2. Funções da Administração — PODC (Semana 03)
- **Planejar (P):** definir objetivos, metas e planos de ação futuros (níveis: Estratégico/cúpula, Tático/gerência, Operacional/execução).
- **Organizar (O):** alocar recursos, definir cargos, departamentalização e relações de autoridade.
- **Dirigir (D):** liderar, motivar, comunicar e orientar pessoas na execução das tarefas.
- **Controlar (C):** medir resultados, comparar com padrões planejados e corrigir desvios (preventivo, simultâneo ou posterior).

## 3. Estruturas Organizacionais e Ciclo PDCA (Semana 03)
- **Estruturas Organizacionais:**
  - **Linear:** unidade de comando rígida (cada subordinado responde a um único chefe); rápida na decisão, mas sobrecarrega a chefia.
  - **Funcional:** autoridade especializada/dividida por função; subordinação múltipla (pode gerar conflito de ordens).
  - **Linha–Staff:** une comando único da linha com órgãos de **assessoria (staff)** consultiva, sem poder de mando direto sobre a linha.
  - **Matricial:** combina estrutura funcional + projetos; dupla subordinação temporária, ideal para projetos multidisciplinares.
- **Ciclo PDCA (Melhoria Contínua):**
  - **Plan (Planejar):** diagnosticar problema, definir metas e plano de ação.
  - **Do (Executar):** treinar equipe e colocar o plano em prática.
  - **Check (Verificar):** monitorar indicadores e comparar resultados com a meta.
  - **Act (Agir):** padronizar se deu certo ou corrigir desvios se falhou, reiniciando o ciclo.`
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
