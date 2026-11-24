import type { RichLessonModule } from "@/types";
import {
  AnalogyBox,
  AxisContextCard,
  CompareGrid,
  ConceptCard,
  DefinitionBlocks,
  ExampleShowcase,
  FeynmanCard,
  FlipCardsGrid,
  InlinePractice,
  KeyTable,
  ProseSection,
  StepByStep,
  TrapAlert,
  ZoomableDiagram,
} from "@/components/edu";

export const portuguesSemana04: RichLessonModule = {
  id: "w4_port_doc0",
  blockId: "w4_port",
  docIndex: 0,
  title:
    "Semana 04: Língua Portuguesa — Sintaxe da Oração Simples (Frase, Oração e Período; Sujeito, Predicado, Transitividade Verbal, Objetos, Predicativos, Complemento Nominal, Adjuntos, Aposto e Vocativo)",
  shortTitle: "Aula Interativa · 5 Eixos + 8 Paradas Rápidas + 25 Questões ACCESS",
  subtitle:
    "Fluxo 100% vertical em voz calma de professor: contexto inicial em cada Eixo, explicação do porquê antes da regra, vitrine destacada com ≥3 exemplos progressivos por subtópico, 8 paradas rápidas interativas no meio dos eixos, 4 SVGs, flashcards e 25 questões no padrão Instituto ACCESS.",

  introRender: () => (
    <div className="space-y-6">
      <ConceptCard
        title="Como Estudar Esta Aula Sem Travar (Ritmo Calmo, Uma Peça por Vez)"
        badge="Escada Linear de 5 Degraus · Zero Pulos"
        accent="indigo"
        icon="sparkle"
      >
        <p>
          Muitas pessoas travam em Sintaxe por um único motivo: na escola, joga-se um caminhão de nomes técnicos todos
          ao mesmo tempo, antes mesmo de o aluno entender{" "}
          <strong>para que serve a regra e como a frase funciona por dentro</strong>.
        </p>
        <p>
          Aqui nós faremos o caminho inverso. Esta aula foi desenhada como uma{" "}
          <strong>escada linear de 5 degraus em leitura vertical</strong>, sempre explicando o <em>porquê</em> em
          português simples antes do nome técnico, destacando cada frase-exemplo e fazendo{" "}
          <strong>Paradas Rápidas no meio do conteúdo</strong> para você fixar cada parte antes de avançar:
        </p>

        <ol className="space-y-2.5 pt-1">
          <li className="flex items-start gap-2.5">
            <span className="w-6 h-6 rounded-full bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5">
              1
            </span>
            <span>
              <strong>Degrau 1 (Eixo 1 — A Estrutura Geral):</strong> entendemos a diferença entre a palavra isolada e o
              papel dela na frase, contamos orações em locuções verbais e partimos a oração em{" "}
              <strong>Sujeito</strong> e <strong>Predicado</strong>.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-6 h-6 rounded-full bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5">
              2
            </span>
            <span>
              <strong>Degrau 2 (Eixo 2 — O Motor Verbal):</strong> abrimos um comportamento do verbo de cada vez, sem
              pressa (sentido fechado, linha reta sem preposição, ponte preposicional obrigatória, duas mãos e ponte de
              estado), além dos pronomes substitutos e armadilhas reais.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-6 h-6 rounded-full bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5">
              3
            </span>
            <span>
              <strong>Degrau 3 (Eixo 3 — Os Tipos de Sujeito e o “SE”):</strong> apoiados no que você dominou sobre
              verbos no Eixo 2, classificamos facilmente os <strong>5 tipos de Sujeito</strong>, a{" "}
              <strong>Voz Passiva</strong> e o famoso <strong>Trio do “SE”</strong>.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-6 h-6 rounded-full bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5">
              4
            </span>
            <span>
              <strong>Degrau 4 (Eixo 4 — Os Tipos de Predicado e as Qualidades):</strong> juntando Sujeito e Verbo,
              separamos os <strong>3 tipos de Predicado</strong> e testamos qualidades atribuídas ao sujeito ou ao
              objeto.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-6 h-6 rounded-full bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5">
              5
            </span>
            <span>
              <strong>Degrau 5 (Eixo 5 — Satélites do Nome, Circunstâncias e Chamamento):</strong> fechamos a frase com
              os termos ao redor de nomes, as circunstâncias de cenário, as explicações e o chamamento isolado por
              vírgula.
            </span>
          </li>
        </ol>

        <div className="rounded-xl p-3.5 surface-muted border border-tech space-y-1.5 mt-2">
          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            Filtro Anti-Enrolação (Edital Nível Médio · Instituto ACCESS)
          </div>
          <p className="text-xs sm:text-sm text-sec leading-relaxed">
            Cortamos querelas filológicas acadêmicas sem reflexo em prova municipal (árvores gerativas, objeto direto
            cognato literário ou subtipos estilísticos raros), concentrando 100% da profundidade no que realmente cai.
          </p>
        </div>
      </ConceptCard>

      <ProseSection
        number="0.1"
        title="Micro-Revisão Linear dos 5 Tijolos das Semanas 02 e 03 (Zero Lacunas)"
      >
        <p>
          Antes de começar o Eixo 1, relembre com calma as <strong>5 ferramentas básicas das semanas anteriores</strong>{" "}
          que vão sustentar todo o resto da aula:
        </p>
        <DefinitionBlocks
          items={[
            {
              term: "1. Substantivo Concreto vs. Substantivo Abstrato (Semana 02)",
              badge: "BASE DO NOME",
              accent: "indigo",
              summary: (
                <>
                  <strong>Concreto</strong> nomeia seres, objetos ou lugares com existência independente (
                  <em>prefeito, edital, computador, mesa, prédio</em>).{" "}
                  <strong>Abstrato</strong> nomeia uma <strong>ação transformada em nome</strong>, uma qualidade ou um
                  sentimento (<em>aprovação, poluição, eliminação, limpeza, preocupação, uso</em>).
                </>
              ),
              example: "Quase todo substantivo abstrato de ação nasce de um verbo: aprovar → aprovação; poluir → poluição.",
            },
            {
              term: "2. Adjetivo (Semana 02)",
              badge: "CARACTERÍSTICA",
              accent: "emerald",
              summary:
                "Palavra que dá característica, qualidade ou estado a um substantivo, variando junto com ele no feminino e no plural.",
              example: "ofício urgente → ofícios urgentes · conta pública → contas públicas.",
            },
            {
              term: "3. Artigo e Pronome Oblíquo (Semana 02)",
              badge: "DETERMINANTE E SUBSTITUTO",
              accent: "sky",
              summary: (
                <>
                  <strong>Artigos</strong> (<em>o, a, os, as, um, uma</em>) vêm antes do substantivo para determiná-lo.{" "}
                  <strong>Pronomes Oblíquos</strong> (<em>o, a, os, as, lhe, lhes, me, te, se, nos, vos</em>) são
                  substitutos curtos presos ao verbo para evitar repetição.
                </>
              ),
              example: "“O diretor revisou o edital e assinou-o.”",
            },
            {
              term: "4. Verbo Simples vs. Locução Verbal (Semana 03)",
              badge: "1 AÇÃO = 1 BLOCO",
              accent: "amber",
              summary: (
                <>
                  <strong>Verbo simples:</strong> uma única palavra conjugada (<em>protocolou, abriu, permaneceu</em>).{" "}
                  <strong>Locução verbal:</strong> verbo auxiliar conjugado + verbo principal no infinitivo (-r),
                  gerúndio (-ndo) ou particípio (-do) expressando uma única ação (<em>vai protocolar, deve conferir, foi assinado</em>).
                </>
              ),
              note: "Na contagem de orações, toda locução verbal vale sempre por 1 único verbo!",
            },
            {
              term: "5. Advérbio vs. Preposição (Semana 03)",
              badge: "MODIFICADOR vs. COLA",
              accent: "purple",
              summary: (
                <>
                  <strong>Advérbio:</strong> palavra invariável (nunca tem plural!) que indica tempo (<em>ontem</em>),
                  lugar (<em>longe</em>), modo (<em>rapidamente</em>), intensidade (<em>muito, quão</em>) ou negação (<em>não</em>).{" "}
                  <strong>Preposição:</strong> cola invariável que liga dois termos (<em>de, em, a, para, por, com</em>).
                </>
              ),
              note: "Atenção às contrações obrigatórias: de+o = do · de+a = da · em+o = no · por+o = pelo · a+o = ao · a+a = à.",
            },
          ]}
        />
      </ProseSection>
    </div>
  ),

  axes: [
    // =========================================================================
    // EIXO 1
    // =========================================================================
    {
      id: "eixo-1",
      index: 1,
      title: "Eixo 1 · O Alicerce da Oração: Morfologia vs. Sintaxe, Frase, Oração, Período, Sujeito e Predicado",
      subtitle:
        "Explicação do porquê antes de cada regra: palavra no dicionário vs. cargo na frase, frases completas vs. nominais, parada rápida de fixação, Sujeito × Predicado do zero e Ordem Direta.",
      estimatedMinutes: 28,
      render: () => (
        <div className="space-y-6">
          <AxisContextCard
            title="Construindo a base da frase antes de decorar qualquer nome técnico"
            bridge="Nas Semanas 02 e 03, você aprendeu o RG isolado das palavras (Substantivo, Adjetivo, Verbo, Advérbio, Preposição)."
            problemSolved="Na prova, a banca não avalia palavras soltas: ela cobra como essas palavras trabalham em equipe, como contar orações sem errar em locuções verbais e como não confundir um lugar no início da frase com o Sujeito."
            roadmap={[
              "Separar identidade no dicionário (Morfologia) de cargo na frase (Sintaxe)",
              "Diferenciar Frase Nominal, Oração com exemplos completos e Período (+ Parada Rápida 1.A)",
              "Partir qualquer oração do zero nos dois blocos centrais: Sujeito × Predicado",
              "Desmontar frases invertidas usando Ordem Direta, Fluxograma visual e Receita em 4 Passos",
            ]}
          />

          {/* 1.1 Morfologia vs Sintaxe */}
          <ProseSection number="1.1" title="Morfologia vs. Sintaxe: A Identidade no Dicionário vs. O Cargo na Frase">
            <p>
              Nas Semanas 02 e 03, nós olhamos para cada palavra como se ela estivesse{" "}
              <strong>sozinha na página do dicionário</strong>. Quando você diz que a palavra <em>servidor</em> é um{" "}
              <strong>Substantivo</strong>, que <em>urgente</em> é um <strong>Adjetivo</strong> ou que <em>ontem</em>{" "}
              é um <strong>Advérbio</strong>, você está fazendo <strong>Morfologia</strong> — isto é, identificando a
              classe gramatical de origem da palavra.
            </p>
            <p>
              Na <strong>Sintaxe</strong>, a pergunta muda completamente. Agora não queremos mais saber o que a palavra é
              quando está isolada, mas sim <strong>qual é o serviço que ela está prestando dentro da frase</strong>, ou
              seja, como ela se conecta com o verbo e com as vizinhas para comunicar um sentido completo.
            </p>
            <p>
              Entender essa separação logo no começo evita um dos erros mais comuns em concursos: misturar o{" "}
              <strong>nome da classe</strong> (que acompanha a palavra no dicionário) com o{" "}
              <strong>nome do cargo</strong> (que muda toda vez que você coloca a mesma palavra em outro lugar da frase).
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "Morfologia (RG Fixo no Dicionário)",
                  badge: "O QUE A PALAVRA É SOZINHA",
                  accent: "indigo",
                  summary:
                    "Analisa a palavra isolada dentro da sua família gramatical: Substantivo, Adjetivo, Artigo, Numeral, Pronome, Verbo, Advérbio, Preposição ou Conjunção.",
                  examplesTitle: "Exemplos de Morfologia (Identidade da Palavra)",
                  examples: [
                    {
                      label: "Cotidiano · Substantivo",
                      sentence: (
                        <>
                          “O <span className="underline decoration-indigo-500 decoration-2 font-bold">cidadão</span>{" "}
                          solicitou a guia.”
                        </>
                      ),
                      tags: [{ label: "MORFOLOGIA", value: "Substantivo", color: "sky" }],
                      explanation:
                        "Isolada no dicionário, a palavra 'cidadão' pertence à classe dos Substantivos (nomeia o ser).",
                    },
                    {
                      label: "Caso Limite (Parte 1) · Adjetivo",
                      sentence: (
                        <>
                          “O servidor <strong>alto</strong> entrou na sala.”
                        </>
                      ),
                      tags: [{ label: "MORFOLOGIA", value: "Adjetivo (varia: servidora alta)", color: "emerald" }],
                      explanation:
                        "Aqui 'alto' caracteriza o nome servidor e concorda com ele no gênero e no plural.",
                    },
                    {
                      label: "Caso Limite (Parte 2) · Advérbio",
                      sentence: (
                        <>
                          “O servidor falou <strong>alto</strong> na audiência.”
                        </>
                      ),
                      tags: [{ label: "MORFOLOGIA", value: "Advérbio (invariável: falaram alto)", color: "amber" }],
                      explanation:
                        "Agora 'alto' modifica o modo da ação de falar — não muda para o plural mesmo com 'elas falaram alto'!",
                    },
                  ],
                },
                {
                  term: "Sintaxe (Cargo de Trabalho na Frase)",
                  badge: "O QUE ELA FAZ NA ORAÇÃO",
                  accent: "emerald",
                  summary:
                    "Analisa a função relacional que a palavra exerce naquele enunciado específico: Sujeito, Predicado, Complemento do Verbo, entre outros papéis que estudaremos passo a passo.",
                  examplesTitle: "Exemplos de Sintaxe (A Mesma Palavra em Cargos Diferentes)",
                  examples: [
                    {
                      label: "Cotidiano (A) · 'cidadão' como Sujeito",
                      sentence: (
                        <>
                          “O <span className="underline decoration-indigo-500 decoration-2 font-bold">cidadão</span>{" "}
                          solicitou a guia.”
                        </>
                      ),
                      tags: [
                        { label: "MORFOLOGIA", value: "Substantivo", color: "sky" },
                        { label: "SINTAXE", value: "Sujeito (comanda o verbo)", color: "indigo" },
                      ],
                      explanation:
                        "Aqui o substantivo 'cidadão' é quem pratica a ação de solicitar e manda no verbo 'solicitou'.",
                    },
                    {
                      label: "Cotidiano (B) · 'cidadão' como Complemento",
                      sentence: (
                        <>
                          “O atendente orientou o{" "}
                          <span className="underline decoration-emerald-500 decoration-2 font-bold">cidadão</span>.”
                        </>
                      ),
                      tags: [
                        { label: "MORFOLOGIA", value: "Substantivo (igual!)", color: "sky" },
                        { label: "SINTAXE", value: "Complemento do Verbo (Eixo 2)", color: "emerald" },
                      ],
                      explanation:
                        "A classe morfológica continuou Substantivo, mas agora 'cidadão' recebe a ação de orientar — mudou de cargo sintático!",
                    },
                    {
                      label: "Rotina de Prefeitura (a) · 'protocolo' como Sujeito",
                      sentence: (
                        <>
                          “O <strong>protocolo</strong> funciona das 8h às 17h.”
                        </>
                      ),
                      tags: [{ label: "CARGO", value: "Sujeito (tema da oração)", color: "emerald" }],
                      explanation: "É sobre o protocolo que o verbo 'funciona' declara alguma coisa.",
                    },
                    {
                      label: "Rotina de Prefeitura (b) · 'protocolo' como Complemento",
                      sentence: (
                        <>
                          “O estagiário fechou o <strong>protocolo</strong> às 17h.”
                        </>
                      ),
                      tags: [{ label: "CARGO", value: "Complemento do Verbo (Eixo 2)", color: "indigo" }],
                      explanation: "Agora o protocolo não age mais: ele completa o sentido do verbo 'fechou'.",
                    },
                    {
                      label: "Rotina de Prefeitura (c) · 'do protocolo' como Especificador",
                      sentence: (
                        <>
                          “A sala <strong>do protocolo</strong> passou por reforma.”
                        </>
                      ),
                      tags: [{ label: "CARGO", value: "Especificador do nome 'sala' (Eixo 5)", color: "amber" }],
                      explanation: "Aqui ele especifica qual sala passou por reforma, preso ao substantivo 'sala'.",
                    },
                  ],
                },
              ]}
            />

            <AnalogyBox title="Analogia do Engenheiro Carlos em Birigui" tag="Identidade Fixa × Função no Contexto">
              No registro profissional, Carlos é <strong>engenheiro civil</strong> — essa é a{" "}
              <strong>Morfologia</strong> dele (identidade que não muda). Porém, na segunda-feira ele atua como{" "}
              <em>palestrante</em> no auditório; na terça atua como <em>síndico</em> do prédio. O cargo que ele ocupa em
              cada cena é a <strong>Sintaxe</strong>!
            </AnalogyBox>

            <CompareGrid
              title="Mapa de Gêmeos Confundíveis · O Que a Banca Realmente Perguntou?"
              mode="contrast"
              left={{
                title: "Pergunta de MORFOLOGIA",
                badge: "IDENTIDADE DE ORIGEM",
                items: [
                  <span key="m1">
                    Enunciado usa termos como <em>“classe gramatical”</em>, <em>“classe morfológica”</em> ou{" "}
                    <em>“classifica-se como substantivo / adjetivo / advérbio”</em>.
                  </span>,
                ],
              }}
              right={{
                title: "Pergunta de SINTAXE",
                badge: "CARGO NA ORAÇÃO",
                items: [
                  <span key="s1">
                    Enunciado usa termos como <em>“função sintática”</em> ou <em>“papel desempenhado na frase”</em>{" "}
                    (Sujeito, Predicado, Complemento...).
                  </span>,
                ],
              }}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="O enunciado pede a 'função sintática' da palavra pacientemente, e o candidato apressado marca a alternativa 'advérbio'!"
              escape="'Advérbio' é nome de classe morfológica, jamais função sintática! Se a pergunta pedir função sintática, elimine de cara alternativas que tragam só nomes de classe de palavras."
            />
          </ProseSection>

          {/* 1.2 Frase, Oracao e Periodo */}
          <ProseSection number="1.2" title="Frase, Oração e Período (Simples vs. Composto e Locução Verbal)">
            <p>
              No dia a dia falamos “frase”, “oração” e “período” como se fossem a mesma coisa. Na gramática, cada um
              desses nomes mede <strong>uma camada diferente</strong> da comunicação escrita — e essa diferença aparece
              direto em questões sobre contagem de orações e pontuação.
            </p>
            <p>
              Pense comigo: se alguém cola uma placa na porta da repartição dizendo{" "}
              <em>“Silêncio!”</em> ou <em>“Atendimento suspenso para manutenção”</em>, todo mundo entendeu a mensagem,
              certo? Só que ali <strong>não existe nenhum verbo</strong>! Por isso a gramática separa enunciados que
              comunicam sem verbo (<strong>Frase Nominal</strong>) de enunciados construídos em torno de um verbo (
              <strong>Oração</strong>).
            </p>
            <p>
              Quando a mensagem tem verbo e termina com pontuação forte (<code>.</code>, <code>!</code>,{" "}
              <code>?</code>, <code>...</code>), fechamos um <strong>Período</strong>. E lembre: na contagem de orações,
              uma <strong>locução verbal</strong> (verbo auxiliar + principal) representa uma única ação e vale por{" "}
              <strong>1 só oração</strong>!
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Frase (Nominal vs. Verbal)",
                  badge: "SENTIDO COMPLETO",
                  accent: "indigo",
                  summary:
                    "Todo enunciado capaz de transmitir um sentido completo. Sem verbo = Frase Nominal (“Atendimento suspenso.”). Com verbo = Frase Verbal (“O servidor protocolou o ofício.”).",
                  examplesTitle: "Exemplos de Frase (Nominal vs. Verbal)",
                  examples: [
                    {
                      label: "Cotidiano · Frase Nominal (Sem verbo)",
                      sentence: "“Atenção ao horário de atendimento!”",
                      tags: [{ label: "VERBOS", value: "Nenhum (0 orações)", color: "amber" }],
                      explanation:
                        "Comunica perfeitamente sem ter nenhum verbo → Frase Nominal (0 orações; não forma período).",
                    },
                    {
                      label: "Caso Limite · Particípios soltos continuam Frase Nominal!",
                      sentence: "“Material conferido e protocolado na recepção.”",
                      tags: [{ label: "VERBOS CONJUGADOS", value: "Zero (só particípios soltos)", color: "rose" }],
                      explanation:
                        "Os particípios conferido e protocolado não têm verbo auxiliar conjugado antes deles (foi/está) → Frase Nominal (0 orações)!",
                    },
                    {
                      label: "Cotidiano · Frase Verbal (Com verbo)",
                      sentence: "“O guichê principal abriu pontualmente às oito horas.”",
                      tags: [{ label: "VERBO", value: "abriu (tem ação verbal)", color: "emerald" }],
                      explanation: "Como possui verbo comandando o sentido completo, é uma Frase Verbal.",
                    },
                  ],
                },
                {
                  term: "2. Oração (Organizada em Torno de Um Verbo ou Locução)",
                  badge: "TEM QUE TER VERBO",
                  accent: "emerald",
                  summary:
                    "Todo enunciado completo que possui um verbo conjugado ou uma locução verbal comandando os demais termos da cena.",
                  note: "Regra de Ouro: Locução verbal (vai protocolar, foi assinado, deve conferir) expressa 1 única ação e conta sempre como 1 SÓ ORAÇÃO!",
                  examplesTitle: "Exemplos de Orações (Verbo Simples e Locução Verbal)",
                  examples: [
                    {
                      label: "Verbo Simples · Ação direta",
                      sentence: "“A Prefeitura abriu as inscrições.”",
                      tags: [{ label: "VERBO", value: "abriu = 1 Oração", color: "emerald" }],
                      explanation: "Há 1 verbo simples comandando todos os termos da cena.",
                    },
                    {
                      label: "Rotina de Prefeitura · Locução Verbal = 1 Oração",
                      sentence: "“O Oficial Administrativo deve conferir todos os comprovantes.”",
                      tags: [{ label: "LOCUÇÃO VERBAL", value: "deve conferir = 1 só ação", color: "emerald" }],
                      explanation:
                        "Apesar de haver duas palavras verbais juntas (deve + conferir), formam 1 única locução → 1 Oração!",
                    },
                    {
                      label: "Fenômeno Natural · Oração sem sujeito",
                      sentence: "“Choveu forte em Birigui.”",
                      tags: [{ label: "VERBO", value: "Choveu = 1 Oração", color: "sky" }],
                      explanation: "Mesmo sem alguém praticando a chuva, há verbo conjugado → é uma Oração completa.",
                    },
                  ],
                },
                {
                  term: "3. Período Simples vs. Período Composto",
                  badge: "CONTAGEM DE AÇÕES",
                  accent: "sky",
                  summary:
                    "É a frase verbal terminada por ponto forte (., !, ?, ...). Com 1 verbo simples ou 1 locução verbal = Período Simples (oração absoluta). Com 2 ou mais verbos/locuções = Período Composto.",
                  examplesTitle: "Exemplos de Período Simples vs. Período Composto",
                  examples: [
                    {
                      label: "Período Simples · 1 só oração",
                      sentence: "“O guichê principal abriu pontualmente às oito horas.”",
                      tags: [{ label: "CONTAGEM", value: "1 verbo (abriu) = Período Simples", color: "emerald" }],
                      explanation: "Possui apenas uma oração absoluta encerrada pelo ponto final.",
                    },
                    {
                      label: "Rotina de Prefeitura · Período Composto (2 verbos)",
                      sentence: "“A equipe recebeu o pedido e emitiu a certidão negativa.”",
                      tags: [{ label: "VERBOS SEPARADOS", value: "recebeu + emitiu (2 ações)", color: "indigo" }],
                      explanation: "Existem dois verbos em eventos distintos → 2 Orações = Período Composto.",
                    },
                    {
                      label: "Caso Limite · 1 Locução + 1 Verbo Simples",
                      sentence: "“O edital será publicado amanhã, porque a comissão aprovou a minuta.”",
                      tags: [{ label: "CONTAGEM", value: "será publicado (1) + aprovou (1) = 2", color: "amber" }],
                      explanation: "1 locução verbal (conta 1!) + 1 verbo simples (conta 1!) → 2 Orações = Período Composto.",
                    },
                  ],
                },
              ]}
            />

            <AnalogyBox title="Analogia do Veículo e do Motor" tag="Frase × Verbo">
              A <strong>Frase</strong> é qualquer meio de transporte funcionando; o <strong>Verbo</strong> é o motor. Um
              carrinho de mão leva tijolo sem motor (<strong>Frase Nominal = 0 orações</strong>); um carro com 1 motor é{" "}
              <strong>Período Simples</strong>; uma carreta com 2 motores acoplados é <strong>Período Composto</strong>!
            </AnalogyBox>

            <KeyTable
              title="Mapa de Gêmeos Confundíveis · Frase × Oração × Período"
              headers={["Conceito", "Tem Verbo?", "Contagem"]}
              rows={[
                ["Frase Nominal — “Documentação incompleta no balcão.”", "Não", "0 orações"],
                ["Período Simples (1 verbo) — “A Prefeitura publicou a lista hoje.”", "Sim (1)", "1 oração"],
                ["Período Simples (locução) — “O edital vai ser corrigido pela equipe.”", "Sim (1 bloco)", "1 oração"],
                ["Período Composto — “O cidadão preencheu e entregou o guia.”", "Sim (2+)", "2 orações"],
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Colocar uma locução verbal comprida ('O parecer jurídico deverá estar concluído até sexta') e afirmar que há 'três orações por existirem três verbos'!"
              escape="Pergunte quantos acontecimentos reais existem na cena: apenas UM (concluir o parecer!). Vários auxiliares antes de 1 verbo principal formam 1 única locução = 1 Oração."
            />

            {/* PARADA RAPIDA 1.A */}
            <InlinePractice
              title="Parada Rápida 1.A · Fixe Morfologia × Sintaxe e Contagem de Orações"
              subtitle="Resolva estas 2 questões curtas antes de partir para Sujeito e Predicado."
              questions={[
                {
                  prompt: "Em qual papel se encaixa a palavra destacada no enunciado abaixo?",
                  sentence: (
                    <>
                      “O ofício <u>urgente</u> chegou ao setor.”
                    </>
                  ),
                  options: [
                    { key: "A", label: "Morfologicamente é Sujeito; sintaticamente é Adjetivo." },
                    {
                      key: "B",
                      label: "Morfologicamente é Adjetivo; sintaticamente qualifica o substantivo ofício dentro da frase.",
                    },
                    { key: "C", label: "Morfologicamente é Advérbio por acompanhar um verbo de movimento." },
                  ],
                  correctKey: "B",
                  feedbackCorrect:
                    "Exato! Adjetivo é a classe morfológica (RG da palavra que varia: ofícios urgentes), e qualificar o nome ofício dentro da frase é o papel sintático.",
                  feedbackWrong:
                    "Cuidado: 'Advérbio' e 'Adjetivo' são classes morfológicas, nunca funções sintáticas. Aqui 'urgente' é Adjetivo na morfologia.",
                },
                {
                  prompt: "Quantas orações existem no período abaixo?",
                  sentence: (
                    <>
                      “O novo sistema eletrônico <u>deverá ser implantado</u> na Prefeitura ainda neste mês.”
                    </>
                  ),
                  options: [
                    { key: "A", label: "3 orações, pois existem três palavras verbais (deverá, ser, implantado)." },
                    { key: "B", label: "0 orações, pois é uma frase nominal sem sujeito explícito." },
                    {
                      key: "C",
                      label: "1 oração apenas, pois 'deverá ser implantado' forma uma locução verbal única (Período Simples).",
                    },
                  ],
                  correctKey: "C",
                  feedbackCorrect:
                    "Isso! Há apenas UM acontecimento sendo comunicado (implantar o sistema). Auxiliares + principal juntos valem 1 só oração.",
                  feedbackWrong:
                    "Não conte palavras verbais separadas! 'Deverá ser implantado' representa uma única ação (1 locução verbal = 1 Oração).",
                },
              ]}
            />
          </ProseSection>

          {/* 1.3 Sujeito e Predicado do Zero */}
          <ProseSection number="1.3" title="Sujeito e Predicado do Zero: Os Dois Blocos que Partem Qualquer Oração ao Meio">
            <p>
              Agora que você já sabe o que é uma <strong>Oração</strong>, vamos abrir uma oração por dentro. Toda vez que
              montamos uma frase com verbo, o cérebro realiza naturalmente <strong>duas operações básicas</strong>:
              primeiro ele escolhe um protagonista ou tema (<em>de quem/do que estamos falando?</em>), e segundo ele
              declara algo sobre esse protagonista (<em>o que ele fez, sofreu ou como ele está?</em>).
            </p>
            <p>
              A primeira parte é o <strong>Sujeito</strong>; todo o restante que declara a ação ou estado —{" "}
              <strong>incluindo obrigatoriamente o próprio verbo</strong> — é o <strong>Predicado</strong>. É esse
              casamento entre Sujeito e Verbo que governa toda a concordância da língua portuguesa!
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Sujeito (e Núcleo do Sujeito)",
                  badge: "QUEM COMANDA O VERBO",
                  accent: "indigo",
                  summary:
                    "É o ser (pessoa, órgão, documento, objeto ou ideia) sobre o qual a oração declara algo e que, na maioria das frases, puxa o verbo para o singular ou plural.",
                  note: "Núcleo do Sujeito é a palavra principal dentro desse bloco, sem artigos ou acompanhantes: em “Os novos servidores chegaram”, o núcleo é só “servidores”.",
                  examplesTitle: "Exemplos · Localizando o Sujeito e Seu Núcleo",
                  examples: [
                    {
                      label: "Cotidiano · Ordem direta limpa",
                      sentence: "“O ônibus municipal saiu no horário.”",
                      tags: [{ label: "SUJEITO", value: "O ônibus municipal (núcleo: ônibus)", color: "indigo" }],
                      explanation:
                        "Se mudássemos para dois ônibus, o verbo iria para o plural ('saíram'). Quem comanda o verbo é 'O ônibus municipal'.",
                    },
                    {
                      label: "Rotina de Prefeitura · Sujeito longo com 1 núcleo no singular",
                      sentence: "“A nova Secretaria de Finanças aprovou o balanço anual ontem.”",
                      tags: [
                        { label: "SUJEITO", value: "A nova Secretaria de Finanças (núcleo: Secretaria)", color: "indigo" },
                      ],
                      explanation:
                        "Note que 'Finanças' está no plural, mas tem preposição 'de'. O núcleo sem preposição é 'Secretaria' (singular) → por isso o verbo fica 'aprovou'!",
                    },
                  ],
                },
                {
                  term: "2. Predicado",
                  badge: "TUDO O QUE SE DECLARA (COM O VERBO DENTRO)",
                  accent: "emerald",
                  summary:
                    "É 100% do que sobra na oração declarando algo sobre o Sujeito. O verbo mora sempre dentro do Predicado — inclusive expressões de lugar ou tempo antecipadas no começo!",
                  note: "Aviso linear: no Eixo 3 veremos casos em que o sujeito está oculto na terminação do verbo ou simplesmente não existe (como em 'choveu' ou 'há vagas'), tornando a frase inteira Predicado.",
                  examplesTitle: "Exemplos · Separando o Bloco do Predicado",
                  examples: [
                    {
                      label: "Cotidiano · O verbo mora dentro do Predicado",
                      sentence: "“O ônibus municipal saiu no horário.”",
                      tags: [{ label: "PREDICADO", value: "saiu no horário", color: "emerald" }],
                      explanation:
                        "Tudo o que declara a ação ('saiu no horário') forma o Predicado — começando obrigatoriamente pelo verbo.",
                    },
                    {
                      label: "Caso Limite · Sujeito fora de lugar no final da frase",
                      sentence: "“Na sexta-feira, compareceram ao auditório três novos candidatos.”",
                      tags: [
                        { label: "SUJEITO (NO FIM)", value: "três novos candidatos", color: "indigo" },
                        { label: "PREDICADO (PARTIDO)", value: "Na sexta-feira, compareceram ao auditório", color: "amber" },
                      ],
                      explanation:
                        "'Na sexta-feira' é tempo e 'ao auditório' traz preposição: nenhum dos dois manda no plural de 'compareceram'! Quem manda no verbo são 'três novos candidatos'. Todo o resto forma o Predicado!",
                    },
                  ],
                },
              ]}
            />

            <AnalogyBox title="Analogia da Manchete de Jornal" tag="Protagonista × Notícia Completa">
              O <strong>Sujeito</strong> é o protagonista da capa da matéria (sobre quem a notícia fala); o{" "}
              <strong>Predicado</strong> é o fato noticiado completo sobre ele (o verbo + o complemento + quando e onde
              ocorreu).
            </AnalogyBox>

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Achar que 'o Predicado é só o que vem depois do verbo' ou achar que a primeira expressão antes da vírgula ('No segundo andar, assinou a portaria a diretora') é o Sujeito."
              escape="Um andar de prédio não assina portarias! Descubra primeiro quem concorda no plural/singular com o verbo (= Sujeito). Todo o mais — incluindo o verbo e o tempo/lugar inicial — integra o Predicado."
            />
          </ProseSection>

          {/* 1.4 Ordem Direta vs Ordem Inversa + SVG 1 + Receita 4 Passos */}
          <ProseSection number="1.4" title="Ordem Direta vs. Ordem Inversa (+ Fluxograma em SVG e Receita em 4 Passos)">
            <p>
              Por que tantas questões fáceis de sujeito e concordância derrubam candidatos na prova? Quase sempre pelo
              mesmo motivo de redação: o examinador <strong>embaralha a ordem natural da frase</strong> — empurra uma
              expressão de tempo ou lugar para o começo com vírgula e coloca o Sujeito só depois do verbo!
            </p>
            <p>
              Quando o nosso olho lê da esquerda para a direita sem reorganizar a frase, caímos direto no erro de achar
              que a primeira expressão é o Sujeito. Desmontar a frase e colocá-la mentalmente na{" "}
              <strong>Ordem Direta</strong> antes de responder leva 3 segundos e resolve esse problema pela raiz!
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Ordem Direta (Canônica)",
                  badge: "SUJEITO → VERBO → RESTO",
                  accent: "indigo",
                  summary:
                    "Sequência padrão e natural do português: Sujeito → Verbo → Complemento do Verbo → Circunstância de Lugar / Tempo.",
                  examplesTitle: "Exemplo · Ordem Direta",
                  examples: [
                    {
                      label: "Rotina de Prefeitura · Os 4 blocos na sequência natural",
                      sentence: "“A Prefeitura publicou o novo edital em Birigui.”",
                      tags: [
                        { label: "SUJEITO", value: "A Prefeitura", color: "indigo" },
                        { label: "VERBO", value: "publicou", color: "emerald" },
                        { label: "COMPLEMENTO", value: "o novo edital", color: "sky" },
                        { label: "LUGAR", value: "em Birigui", color: "amber" },
                      ],
                      explanation:
                        "Na sequência padrão, o sujeito aparece no início e tudo o que vem do verbo em diante forma o Predicado.",
                    },
                  ],
                },
                {
                  term: "2. Ordem Inversa (Camuflador de Prova)",
                  badge: "BLOCOS DESLOCADOS",
                  accent: "amber",
                  summary:
                    "Qualquer frase em que um bloco sai do lugar padrão — por exemplo, quando o lugar vem no início com vírgula ou o Sujeito aparece posposto depois do verbo.",
                  examplesTitle: "Exemplos Progressivos · Desarmando a Ordem Inversa",
                  examples: [
                    {
                      label: "Cotidiano · Sujeito no fim após tempo antecipado",
                      sentence: "“Ontem à noite, entregou a encomenda o motorista.”",
                      tags: [
                        {
                          label: "ORDEM DIRETA",
                          value: "O motorista entregou a encomenda ontem à noite.",
                          color: "emerald",
                        },
                      ],
                      explanation:
                        "Na ordem direta fica imediato: Sujeito = 'O motorista'; Predicado = 'entregou a encomenda ontem à noite'.",
                    },
                    {
                      label: "Rotina de Prefeitura · Tempo longo antes da vírgula",
                      sentence: "“Após ampla revisão da minuta, assinaram o termo os novos oficiais.”",
                      tags: [{ label: "SUJEITO (NO FIM)", value: "os novos oficiais", color: "indigo" }],
                      explanation:
                        "Na Ordem Direta: 'Os novos oficiais assinaram o termo após ampla revisão da minuta.' Por isso 'assinaram' vai para o plural!",
                    },
                    {
                      label: "Caso Real ACCESS · Pref. Contagem/MG 2026 Q02",
                      sentence: "“Próximo à Grande Pirâmide de Quéops, o Egito inaugura o Grande Museu Egípcio.”",
                      tags: [
                        { label: "SUJEITO", value: "o Egito", color: "indigo" },
                        { label: "LUGAR NO PREDICADO", value: "Próximo à Grande Pirâmide de Quéops", color: "amber" },
                      ],
                      explanation:
                        "Ordem Direta: 'O Egito inaugura o Grande Museu Egípcio próximo à Grande Pirâmide de Quéops.' A expressão inicial indica lugar e faz parte do Predicado!",
                    },
                  ],
                },
              ]}
            />

            {/* SVG 1 */}
            <ZoomableDiagram
              title="Anatomia da Oração: Ordem Direta vs. Ordem Inversa"
              badge="MAPA VISUAL"
            >
              <svg
                viewBox="0 0 760 320"
                className="w-full h-auto"
                role="img"
                aria-label="Anatomia da Oração Simples: Sujeito e Predicado na Ordem Direta versus Ordem Inversa"
              >
                <rect x="8" y="8" width="744" height="304" rx="14" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />

                {/* Faixa 1: Ordem Direta */}
                <text x="28" y="36" fill="#a5b4fc" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                  1. ORDEM DIRETA — O Sujeito vem primeiro; tudo o resto é Predicado
                </text>

                <rect x="28" y="50" width="160" height="60" rx="10" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />
                <text x="108" y="73" textAnchor="middle" fill="#c7d2fe" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  SUJEITO (Quem age)
                </text>
                <text x="108" y="95" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
                  A Prefeitura
                </text>

                <line x1="192" y1="80" x2="214" y2="80" stroke="#94a3b8" strokeWidth="2" />
                <polygon points="214,75 224,80 214,85" fill="#94a3b8" />

                <rect x="228" y="50" width="130" height="60" rx="10" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
                <text x="293" y="73" textAnchor="middle" fill="#a7f3d0" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  VERBO (Ação)
                </text>
                <text x="293" y="95" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
                  publicou
                </text>

                <line x1="362" y1="80" x2="384" y2="80" stroke="#94a3b8" strokeWidth="2" />
                <polygon points="384,75 394,80 384,85" fill="#94a3b8" />

                <rect x="398" y="50" width="156" height="60" rx="10" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="2" />
                <text x="476" y="73" textAnchor="middle" fill="#bae6fd" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  COMPLEMENTO
                </text>
                <text x="476" y="95" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
                  o novo edital
                </text>

                <line x1="558" y1="80" x2="580" y2="80" stroke="#94a3b8" strokeWidth="2" />
                <polygon points="580,75 590,80 580,85" fill="#94a3b8" />

                <rect x="594" y="50" width="138" height="60" rx="10" fill="#451a03" stroke="#f59e0b" strokeWidth="2" />
                <text x="663" y="73" textAnchor="middle" fill="#fde68a" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  LUGAR
                </text>
                <text x="663" y="95" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
                  em Birigui.
                </text>

                {/* Barra de Predicado na Ordem Direta */}
                <rect x="228" y="118" width="504" height="28" rx="7" fill="#064e3b" stroke="#10b981" strokeWidth="1.2" />
                <text x="480" y="136" textAnchor="middle" fill="#a7f3d0" fontSize="11.5" fontWeight="bold" fontFamily="sans-serif">
                  PREDICADO = Verbo + Complemento + Lugar (tudo o que sobra fora do Sujeito)
                </text>

                <line x1="28" y1="164" x2="732" y2="164" stroke="#334155" strokeDasharray="6 5" strokeWidth="1.5" />

                {/* Faixa 2: Ordem Inversa */}
                <text x="28" y="190" fill="#fbbf24" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                  2. ORDEM INVERSA — As peças mudam de lugar, mas o Sujeito continua o mesmo!
                </text>

                <rect x="28" y="204" width="146" height="60" rx="10" fill="#451a03" stroke="#f59e0b" strokeWidth="2" />
                <text x="101" y="227" textAnchor="middle" fill="#fde68a" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  LUGAR NO INÍCIO
                </text>
                <text x="101" y="249" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
                  Em Birigui,
                </text>

                <line x1="178" y1="234" x2="198" y2="234" stroke="#94a3b8" strokeWidth="2" />
                <polygon points="198,229 208,234 198,239" fill="#94a3b8" />

                <rect x="212" y="204" width="130" height="60" rx="10" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
                <text x="277" y="227" textAnchor="middle" fill="#a7f3d0" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  VERBO
                </text>
                <text x="277" y="249" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
                  publicou
                </text>

                <line x1="346" y1="234" x2="366" y2="234" stroke="#94a3b8" strokeWidth="2" />
                <polygon points="366,229 376,234 366,239" fill="#94a3b8" />

                <rect x="380" y="204" width="166" height="60" rx="10" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />
                <text x="463" y="227" textAnchor="middle" fill="#c7d2fe" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  SUJEITO (Continua aqui!)
                </text>
                <text x="463" y="249" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
                  a Prefeitura
                </text>

                <line x1="550" y1="234" x2="570" y2="234" stroke="#94a3b8" strokeWidth="2" />
                <polygon points="570,229 580,234 570,239" fill="#94a3b8" />

                <rect x="584" y="204" width="148" height="60" rx="10" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="2" />
                <text x="658" y="227" textAnchor="middle" fill="#bae6fd" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  COMPLEMENTO
                </text>
                <text x="658" y="249" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
                  o novo edital.
                </text>

                <rect x="28" y="274" width="704" height="26" rx="7" fill="#1e293b" stroke="#475569" strokeWidth="1" />
                <text x="380" y="291" textAnchor="middle" fill="#fde68a" fontSize="11.5" fontWeight="bold" fontFamily="sans-serif">
                  Atenção: “Em Birigui,” é só o LUGAR antecipado — nunca o Sujeito! Quem manda no verbo continua sendo “a Prefeitura”.
                </text>
              </svg>
            </ZoomableDiagram>

            <StepByStep
              title="Receita Fixa em 4 Passos para Dissecação de Qualquer Oração de Prova"
              problem="Siga sempre esta sequência antes de marcar sua alternativa:"
              steps={[
                {
                  title: "Circule o verbo (ou locução verbal)",
                  badge: "PASSO 1",
                  content: (
                    <p>
                      Ele é o centro magnético da oração. Conte quantos verbos/locuções existem para saber se é Frase
                      Nominal (0), Período Simples (1) ou Composto (2+).
                    </p>
                  ),
                },
                {
                  title: "Coloque mentalmente na Ordem Direta",
                  badge: "PASSO 2",
                  content: (
                    <p>
                      Empurre expressões de tempo ou lugar do começo para o fim e traga quem comanda o verbo para a
                      frente (Sujeito → Verbo → Complemento → Lugar/Tempo).
                    </p>
                  ),
                },
                {
                  title: "Parta a oração em Sujeito × Predicado",
                  badge: "PASSO 3",
                  content: (
                    <p>
                      Quem comanda o singular/plural do verbo é o <strong>Sujeito</strong>; tudo o que sobrou na oração
                      forma o <strong>Predicado</strong>.
                    </p>
                  ),
                },
                {
                  title: "Analise o motor do Predicado",
                  badge: "PASSO 4",
                  content: (
                    <p>
                      Observe o que o verbo pede logo à frente — assunto que destrincharemos passo a passo no{" "}
                      <strong>Eixo 2</strong>!
                    </p>
                  ),
                },
              ]}
            />

            <AnalogyBox title="Analogia da Bagagem Desarrumada" tag="Ordem Direta × Inversa">
              Uma oração na ordem inversa é como uma mala onde alguém jogou os sapatos por cima da camisa; antes de
              achar o crachá, você esvazia e coloca cada peça na prateleira padrão (Sujeito → Verbo → Resto).
            </AnalogyBox>

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Deixar o verbo no singular antes de um sujeito plural lá no final ('Falta aos setores municipais duas impressoras novas') esperando que você não note!"
              escape="Desmanche a inversão antes de ler as opções: 'Duas impressoras novas FALTAM aos setores municipais'. O erro de concordância salta na cara em 5 segundos!"
            />
          </ProseSection>

          <FlipCardsGrid
            title="Flashcards de Memorização Ativa · Eixo 1"
            cards={[
              {
                front: "Morfologia × Sintaxe",
                hint: "Identidade fixa vs. Cargo na frase",
                back: "Morfologia analisa a classe isolada no dicionário (Substantivo, Verbo, Advérbio); Sintaxe analisa a função relacional na frase (Sujeito, Predicado, Complemento).",
              },
              {
                front: "Frase Nominal × Oração",
                hint: "Quando existe oração?",
                back: "Frase Nominal comunica sentido completo sem verbo (0 orações). Oração exige obrigatoriamente um verbo ou locução verbal comandando a frase.",
              },
              {
                front: "Locução Verbal na Contagem",
                hint: "Quantas orações tem 'vai analisar'?",
                back: "Apenas 1 Oração! Verbo auxiliar + principal no infinitivo/gerúndio/particípio (vai assinar, foi protocolado) formam 1 único bloco verbal = Período Simples.",
              },
              {
                front: "Sujeito × Predicado",
                hint: "Onde fica o verbo?",
                back: "Sujeito é quem comanda a concordância do verbo; Predicado é TUDO o que se declara sobre o sujeito — incluindo o próprio verbo e o lugar/tempo antecipado.",
              },
              {
                front: "Ordem Direta Canônica",
                hint: "Como desmanchar inversões?",
                back: "Sujeito → Verbo → Complemento do Verbo → Lugar/Tempo. Reorganize mentalmente antes de responder qualquer pergunta de concordância ou função!",
              },
            ]}
          />

          <FeynmanCard
            title="Síntese Feynman de 3 Linhas · Eixo 1"
            lines={[
              "1. Morfologia diz o que a palavra é sozinha no dicionário; Sintaxe mostra o cargo que ela exerce trabalhando ao lado das vizinhas na frase.",
              "2. Toda Oração gira em torno de um verbo ou de uma locução verbal (que vale como 1 só bloco!), separando frases nominais sem verbo (0 orações), períodos simples (1) e compostos (2+).",
              "3. Para não cair em inversões da banca, coloque mentalmente na Ordem Direta (Sujeito → Verbo → resto): quem manda no verbo é o Sujeito, e todo o restante forma o Predicado.",
            ]}
          />
        </div>
      ),
      checkpointQuestions: [
        {
          num: "1",
          header: "Questão 01",
          banca: "**Banca:** Adaptada para o Padrão Instituto ACCESS | Cargo: Oficial Administrativo",
          statement:
            "Durante a análise de um memorando municipal que traz o enunciado *“O servidor público atendeu pacientemente o munícipe no balcão”*, o candidato foi questionado sobre a distinção entre análise morfológica e análise sintática. Assinale a alternativa **CORRETA**:",
          options: {
            A: "O termo *pacientemente* recebe a classificação sintática de advérbio porque é invariável e indica o modo como o atendimento ocorreu.",
            B: "O termo *servidor* continua sendo substantivo na morfologia, porém desempenha na frase o papel sintático de sujeito do verbo *atendeu*.",
            C: "O termo *público* muda sua classe morfológica para sujeito composto quando acompanha um substantivo dentro do enunciado analisado.",
            D: "O verbo *atendeu* perde a sua classe morfológica verbal no instante em que passa a integrar o bloco principal do predicado.",
          },
          answer: "B",
          commentary:
            "**Gabarito Oficial: B**\n- **(B) CORRETA:** A classe morfológica fixa da palavra *servidor* é Substantivo, enquanto seu cargo relacional nessa oração específica é Sujeito.\n- **(A) ERRADA:** *Advérbio* é nome de classe morfológica, jamais função sintática.\n- **(C) e (D) ERRADAS:** Nenhuma palavra perde sua classe morfológica ao assumir papel sintático.",
        },
        {
          num: "2",
          header: "Questão 02",
          banca: "**Banca:** Adaptada para o Padrão Instituto ACCESS | Cargo: Oficial Administrativo",
          statement:
            "Leia os três avisos afixados no mural de atendimento de uma repartição pública:\nI. *“Atendimento preferencial garantido por lei municipal.”*\nII. *“A equipe de protocolo vai digitalizar os documentos ainda hoje.”*\nIII. *“Os fiscais vistoriaram o prédio e encaminharam o relatório à diretoria.”*\n\nQuanto à classificação em frase, oração e período, assinale a alternativa **CORRETA**:",
          options: {
            A: "O aviso I contém duas orações porque os particípios *garantido* e *municipal* atuam juntos como núcleo verbal autônomo.",
            B: "O aviso II forma um período composto porque reúne dois verbos sequenciados na locução verbal *vai digitalizar*.",
            C: "O aviso I forma uma frase nominal sem oração, o aviso II constitui período simples e o aviso III apresenta período composto.",
            D: "Todos os três avisos constituem períodos compostos porque apresentam mais de cinco termos ligados por preposições.",
          },
          answer: "C",
          commentary:
            "**Gabarito Oficial: C**\n- **(C) CORRETA:** Em I não há verbo conjugado (Frase Nominal, 0 orações); em II *vai digitalizar* é 1 locução verbal (1 Oração = Período Simples); em III há duas ações verbais (*vistoriaram* e *encaminharam* = Período Composto).\n- **(A), (B) e (D) ERRADAS:** Locução verbal conta 1 só oração e particípio sem auxiliar não forma oração.",
        },
        {
          num: "3",
          header: "Questão 03",
          banca: "**Banca:** Adaptada para o Padrão Instituto ACCESS | Cargo: Oficial Administrativo",
          statement:
            "Analise a frase extraída de uma comunicação interna da Prefeitura: *“Na manhã de segunda-feira, chegaram ao setor competente os novos computadores licitados.”* Colocando o período na ordem direta e separando os dois blocos fundamentais da oração, assinale a afirmativa **CORRETA**:",
          options: {
            A: "O sujeito é *“os novos computadores licitados”* e todo o trecho *“Na manhã de segunda-feira, chegaram ao setor competente”* integra o predicado.",
            B: "O sujeito é *“Na manhã de segunda-feira”* porque ocupa a posição inicial antes da vírgula e contextualiza o início da declaração.",
            C: "O sujeito é *“ao setor competente”* porque está ligado imediatamente à direita do verbo *chegaram* formando um bloco inseparável.",
            D: "O predicado restringe-se exclusivamente à expressão *“os novos computadores licitados”*, ficando o verbo *chegaram* isolado como ligação temporal.",
          },
          answer: "A",
          commentary:
            "**Gabarito Oficial: A**\n- **(A) CORRETA:** Na Ordem Direta: *“Os novos computadores licitados (Sujeito) chegaram ao setor competente na manhã de segunda-feira (Predicado).”*\n- **(B), (C) e (D) ERRADAS:** Expressão de tempo e lugar com preposição integram o Predicado; o verbo sempre pertence ao Predicado.",
        },
      ],
    },

    // =========================================================================
    // EIXO 2
    // =========================================================================
    {
      id: "eixo-2",
      index: 2,
      title: "Eixo 2 · O Motor da Frase: Transitividade Verbal (VI, VTD, VTI, VTDI, VL) e os Objetos",
      subtitle:
        "Leitura calma e vertical: o significado real de 'transitar', cada um dos 5 tipos de verbo um por vez com analogia e exemplos destacados, 2 paradas rápidas no meio do Eixo, falsa preposição e pronomes.",
      estimatedMinutes: 42,
      render: () => (
        <div className="space-y-6">
          <AxisContextCard
            title="Descobrindo o que cada verbo exige para a frase não ficar pela metade"
            bridge="No Eixo 1, você aprendeu a separar o Sujeito do Predicado e viu que o verbo mora sempre dentro do Predicado."
            problemSolved="Quando você diz 'O servidor protocolou...', a mensagem trava no ar (protocolou o quê?). Já em 'O servidor chegou.', ela fecha sozinha. Dominar essa exigência do verbo (Transitividade) impede errar preposições, pronomes (o vs. lhe) e o Trio do 'SE' no Eixo 3."
            roadmap={[
              "2.1 Entender o que significa 'transitar' (fechar sentido ou atravessar até um alvo)",
              "2.2 Verbo Intransitivo (VI) e a Regra do Lugar",
              "2.3 Verbo Transitivo Direto (VTD) + Objeto Direto (OD)",
              "2.4 Verbo Transitivo Indireto (VTI) + Objeto Indireto (OI) + Parada Rápida 2.A",
              "2.5 Verbo Transitivo Direto e Indireto (VTDI · duas mãos)",
              "2.6 Verbo de Ligação (VL · 5 famílias) + Quadro-Resumo dos 5 tipos + Parada Rápida 2.B",
              "2.7 e 2.8 Falsa Preposição, 5 Regências Campeãs, o/a vs. lhe, Camaleões e Pleonasmo",
            ]}
          />

          {/* 2.1 O Que Significa Transitividade Verbal */}
          <ProseSection number="2.1" title='O Que Significa "Transitividade Verbal"? (Fechar o Sentido ou Atravessar até um Alvo)'>
            <p>
              Antes de olhar para siglas (<code>VI</code>, <code>VTD</code>, <code>VTI</code>, <code>VTDI</code>,{" "}
              <code>VL</code>), pare por dez segundos e pense no significado comum da palavra{" "}
              <strong>transitar</strong>. Transitar quer dizer <strong>atravessar, ir de um ponto a outro</strong> —
              como os carros que atravessam a cidade até chegar a um destino.
            </p>
            <p>
              Na língua portuguesa, alguns verbos funcionam como uma viagem já concluída: você fala o verbo e a ideia
              fecha ali mesmo (<em>“O servidor chegou.”</em>). Outros verbos ficam pela metade se pararem sozinhos (
              <em>“O oficial protocolou...”</em> → protocolou o quê?): a ação{" "}
              <strong>precisa atravessar do verbo até outra palavra</strong> chamada <strong>Objeto</strong>. E há ainda
              um grupo que nem ação física mostra — só liga o Sujeito a um estado (<em>“O servidor está atento.”</em>).
            </p>
            <p>
              Nas próximas seções veremos cada um desses 5 comportamentos <strong>um por vez, com calma</strong>. Antes
              disso, grave apenas uma ideia central: <strong>o verbo muda conforme o uso real na frase</strong>!
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Verbos Significativos (Indicam Ação ou Acontecimento → Intransitivo, Transitivo Direto, Transitivo Indireto ou Bitransitivo)",
                  badge: "AÇÃO NO MUNDO",
                  accent: "indigo",
                  summary:
                    "Mostram algo acontecendo (chegar, protocolar, precisar, entregar). Conforme a ação feche nela mesma ou precise de complemento (sem preposição, com preposição, ou ambos), formam os 4 grupos de ação.",
                  examplesTitle: "Exemplos de Verbos Significativos (Ação Real)",
                  examples: [
                    {
                      label: "Cotidiano · 'andar' como caminhada física",
                      sentence: "“O atendente andou depressa pelo corredor.”",
                      tags: [{ label: "SENTIDO", value: "Caminhou (ação física = Verbo Intransitivo)", color: "emerald" }],
                      explanation: "O atendente realmente moveu as pernas: é ação física que fecha nela mesma.",
                    },
                    {
                      label: "Caso Limite · 'virar' como movimento físico sobre algo",
                      sentence: "“O estagiário virou a folha.”",
                      tags: [{ label: "SENTIDO", value: "Moveu a folha (Verbo Transitivo Direto)", color: "indigo" }],
                      explanation: "Há um ato físico executado diretamente sobre o objeto 'a folha'.",
                    },
                  ],
                },
                {
                  term: "2. Verbo de Ligação (Indica Apenas Estado)",
                  badge: "PONTE DE ESTADO",
                  accent: "emerald",
                  summary:
                    "Aqui não há ação física nenhuma: o verbo apenas conecta o Sujeito a uma qualidade, condição ou estado passageiro/permanente (ser, estar, parecer, permanecer, ficar).",
                  examplesTitle: "Exemplos de Verbo de Ligação (Ponte de Estado)",
                  examples: [
                    {
                      label: "Cotidiano · 'andar' como estado emocional",
                      sentence: "“O atendente anda preocupado com o prazo.”",
                      tags: [{ label: "SENTIDO", value: "Está preocupado (estado = Verbo de Ligação)", color: "amber" }],
                      explanation: "Ele não está caminhando! 'Anda' aqui significa apenas 'está', ligando o estado ao sujeito.",
                    },
                    {
                      label: "Caso Limite · 'virar' como mudança de estado",
                      sentence: "“O novo portal virou modelo regional.”",
                      tags: [{ label: "SENTIDO", value: "Tornou-se modelo (Verbo de Ligação)", color: "emerald" }],
                      explanation: "Não houve movimento físico de girar nada: o verbo exprime apenas mudança de estado (= tornou-se).",
                    },
                  ],
                },
                {
                  term: "3. Regra de Ouro do Contexto (O Verbo Muda de Roupa na Frase)",
                  badge: "LEIA ATÉ O PONTO FINAL",
                  accent: "amber",
                  summary:
                    "Nenhum verbo nasce carimbado para sempre no dicionário! O mesmo verbo (andar, pagar, virar, ficar) muda de tipo dependendo da função exata que cumpre naquela frase da prova.",
                  examplesTitle: "Exemplo Progressivo · O Verbo 'pagar' Mudando Conforme a Frase",
                  examples: [
                    {
                      label: "Uso 1 · Só a coisa paga (sem preposição)",
                      sentence: "“A tesouraria pagou a fatura.”",
                      tags: [{ label: "CLASSIFICAÇÃO", value: "Verbo Transitivo Direto (VTD)", color: "indigo" }],
                      explanation: "Completa direto a pergunta 'pagou o quê?' com o alvo 'a fatura' sem preposição.",
                    },
                    {
                      label: "Uso 2 · Só a pessoa/empresa paga (com preposição 'a')",
                      sentence: "“A tesouraria pagou ao fornecedor.”",
                      tags: [{ label: "CLASSIFICAÇÃO", value: "Verbo Transitivo Indireto (VTI)", color: "sky" }],
                      explanation: "Quando o alvo é pessoa, a norma culta exige a preposição 'a' (ao fornecedor).",
                    },
                    {
                      label: "Uso 3 · Coisa + Pessoa juntas na mesma frase",
                      sentence: "“A tesouraria pagou a fatura ao fornecedor.”",
                      tags: [{ label: "CLASSIFICAÇÃO", value: "Verbo Transitivo Direto e Indireto (VTDI)", color: "purple" }],
                      explanation:
                        "O verbo é exatamente o mesmo ('pagou'), mas agora traz os dois objetos ao mesmo tempo!",
                    },
                  ],
                },
              ]}
            />

            <AnalogyBox title="Analogia da Viagem do Servidor" tag="Atravessar × Fechar">
              O verbo é o motor: às vezes o carro já chegou ao destino sem precisar ir até outro termo (<strong>VI</strong>);
              às vezes segue em linha reta sem pedágio (<strong>VTD</strong>); às vezes exige ponte com pedágio obrigatório =
              a preposição (<strong>VTI</strong>); às vezes faz duas entregas ao mesmo tempo (<strong>VTDI</strong>); e às
              vezes está desligado na garagem só retratando como o sujeito está (<strong>VL</strong>).
            </AnalogyBox>

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Decorar que tal verbo 'é sempre VTD' sem ler o resto da oração — e cair quando andar, ficar, virar, começar ou pagar mudam de sentido."
              escape="Leia sempre até o ponto final e faça em ordem: (1) indica ação ou só estado? Se ação: (2) fecha sozinho ou pede peça faltante?"
            />
          </ProseSection>

          {/* 2.2 Verbo Intransitivo (VI) */}
          <ProseSection number="2.2" title="Verbo Intransitivo (VI): A Ação Completa Sem Objeto e a Regra do Lugar">
            <p>
              Vamos ao 1º tipo de verbo de ação: o <strong>Verbo Intransitivo (VI)</strong>. O próprio nome já entrega o
              conceito: o prefixo <strong>in-</strong> indica negação (<em>“não”</em>) + <strong>transitivo</strong> (
              <em>“que atravessa para um objeto”</em>). Portanto, <strong>Verbo Intransitivo</strong> é aquele cujo
              sentido <strong>fecha totalmente nele mesmo</strong>, sem precisar de nenhum objeto!
            </p>
            <p>
              Mas preste atenção em uma dúvida que derruba muita gente: dizer que o verbo "não precisa de objeto"{" "}
              <strong>não obriga a frase a acabar no verbo</strong>! Você pode acrescentar detalhes de{" "}
              <strong>lugar, tempo, modo ou causa</strong> funcionando como cenário da cena (ex.:{" "}
              <em>“chegou ao setor ontem com pressa”</em>). Como lugar e tempo são apenas cenário — e não alvo exigido
              pelo sentido do verbo —, verbos de movimento (<em>ir, vir, chegar, sair, voltar, morar, comparecer</em>)
              acompanhados de lugar continuam sendo <strong>100% Intransitivos (VI)</strong>!
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Verbo Intransitivo (Sentido Fechado)",
                  badge: "PREFIXO IN- = NÃO ATRAVESSA",
                  accent: "emerald",
                  summary:
                    "Verbo de ação ou acontecimento que já comunica um evento inteiro sozinho (nascer, morrer, expirar, dormir, chegar). Não exige objeto para fechar o sentido.",
                  examplesTitle: "Exemplo · Verbo Intransitivo com Modo e Tempo",
                  examples: [
                    {
                      label: "Cotidiano · Sentido fechado sem alvo",
                      sentence: "“O bebê dormiu tranquilamente durante a madrugada.”",
                      tags: [
                        { label: "VERBO", value: "dormiu (Verbo Intransitivo)", color: "emerald" },
                        { label: "CENÁRIO", value: "tranquilamente (modo) · durante a madrugada (tempo)", color: "sky" },
                      ],
                      explanation:
                        "Quem dorme não 'dorme algo'. Os termos seguintes apenas explicam como e quando o sono aconteceu.",
                    },
                  ],
                },
                {
                  term: "2. A Regra de Ouro do Lugar (Cenário ≠ Objeto)",
                  badge: "ONDE NÃO É OBJETO!",
                  accent: "sky",
                  summary:
                    "Verbos de movimento ou permanência física (ir, chegar, voltar, morar, comparecer) seguidos de preposição indicando LUGAR (ao guichê, em Birigui, à sala) respondem ONDE/AONDE — portanto NÃO têm objeto e continuam Intransitivos!",
                  note: "Teste de 5s: coloque um ponto final imaginário depois do verbo ou veja se tudo que vem após só responde ONDE / QUANDO / COMO.",
                  examplesTitle: "Exemplos · Verbo de Movimento + Lugar Não Vira Objeto",
                  examples: [
                    {
                      label: "Rotina de Prefeitura · Chegar + Lugar + Tempo",
                      sentence: "“Os requerimentos urgentes chegaram ao setor de compras ainda pela manhã.”",
                      tags: [
                        { label: "VERBO", value: "chegaram (Verbo Intransitivo)", color: "emerald" },
                        { label: "ONDE?", value: "ao setor de compras (LUGAR, não objeto!)", color: "amber" },
                      ],
                      explanation:
                        "Se parássemos em 'chegaram', a ação faria sentido completo. 'Ao setor de compras' indica lugar físico — nunca vira objeto indireto!",
                    },
                    {
                      label: "Caso Limite · Crase em lugar continua Intransitivo!",
                      sentence: "“Todos os fiscais compareceram à audiência pública no auditório central.”",
                      tags: [
                        { label: "VERBO", value: "compareceram (Verbo Intransitivo)", color: "emerald" },
                        { label: "ARMADILHA DA CRASE", value: "à audiência = AONDE/ONDE (lugar do evento)", color: "rose" },
                      ],
                      explanation:
                        "Não se assuste com a crase em 'à audiência pública': na análise tradicional de concursos, verbo de movimento + destino físico classifica-se como Intransitivo!",
                    },
                  ],
                },
              ]}
            />

            <AnalogyBox title="Analogia da Lanterna a Pilha" tag="Energia Própria">
              A lanterna a pilha já guarda energia própria lá dentro: basta apertar o botão que ela acende sozinha em
              qualquer sala (<strong>VI</strong>). Você pode até dizer <em>onde</em> acendeu (<em>no corredor</em>) ou{" "}
              <em>quando</em> (<em>ontem à noite</em>), mas ela nunca precisa ser ligada a uma tomada externa!
            </AnalogyBox>

            <KeyTable
              title="Mapa de Gêmeos Confundíveis · Cenário (VI) vs. Alvo Direto (VTD)"
              headers={["Frase Comparada", "Pergunta Após o Verbo", "Classificação"]}
              rows={[
                ["“O prefeito saiu da reunião.”", "DE ONDE? (lugar de origem)", "VI (sem objeto)"],
                ["“A reunião começou pontualmente às 9h.”", "QUANDO / COMO? (cenário completo)", "VI (sentido fechado)"],
                ["“A equipe começou a conferência dos lotes.”", "COMEÇOU O QUÊ? (alvo: a conferência)", "VTD (aqui pede objeto!)"],
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Ver preposição logo após ir, chegar, voltar, morar ou comparecer ('O munícipe chegou ao protocolo') e marcar VTI por impulso!"
              escape="Pergunte: o termo preposicionado responde ONDE / AONDE / DE ONDE (lugar físico)? Se responder lugar físico, NÃO existe objeto — o verbo é Intransitivo (VI)!"
            />
          </ProseSection>

          {/* 2.3 Verbo Transitivo Direto (VTD) e Objeto Direto (OD) */}
          <ProseSection number="2.3" title="Verbo Transitivo Direto (VTD) e Objeto Direto (OD): A Ação em Linha Reta Sem Preposição">
            <p>
              Pense agora em verbos como <em>assinar, protocolar, exibir, abrir, publicar, revisar</em>. Se você chegar
              na sala da equipe e disser apenas <em>“Eu assinei.”</em>, todo mundo vai olhar para você perguntando:{" "}
              <em>“Assinou O QUÊ?”</em>. Diferente do <code>VI</code>, esses verbos <strong>não fecham sozinhos</strong>{" "}
              — a ação precisa atravessar e bater em uma palavra-alvo fora do verbo.
            </p>
            <p>
              Chamamos esse verbo de <strong>Transitivo DIRETO (VTD)</strong> porque entre o verbo e o seu complemento{" "}
              <strong>não existe nenhuma ponte preposicional obrigatória</strong> (nada de <em>de, em, por</em> pedido
              pelo verbo): o verbo encosta direto no alvo. E o alvo que preenche essa lacuna recebe aqui seu nome
              oficial: <strong>Objeto Direto (OD)</strong>!
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "Verbo Transitivo Direto (VTD)",
                  badge: "ATRAVESSA EM LINHA RETA",
                  accent: "indigo",
                  summary:
                    "Verbo de ação que exige complemento obrigatório SEM preposição pedida pelo verbo. Responde direto às perguntas 'Verbo + O QUÊ?' ou 'QUEM?'.",
                },
                {
                  term: "Objeto Direto (OD)",
                  badge: "O ALVO DO VTD",
                  accent: "emerald",
                  summary:
                    "É o termo (ou bloco inteiro) que completa o sentido do VTD sem preposição obrigatória. Pode ser substituído direto por 'ISSO' ou pelos pronomes o, a, os, as.",
                },
              ]}
            />

            <AnalogyBox title="Analogia da Tomada Direta de 2 Pinos" tag="Ligação Sem Intermediário">
              O <strong>VTD</strong> é um plugue de 2 pinos que encaixa direto na tomada da parede sem nenhum adaptador
              — ou um aperto de mão direto entre o verbo e seu Objeto Direto (<strong>OD</strong>), sem ponte no meio do
              caminho!
            </AnalogyBox>

            <ExampleShowcase
              title="Exemplos Progressivos · VTD + Objeto Direto (OD)"
              items={[
                {
                  level: "Exemplo 1 · Cotidiano (Ação incompleta sem o alvo direto)",
                  accent: "indigo",
                  cases: [
                    {
                      sentence: "“O cidadão preencheu o formulário.”",
                      tags: [
                        { label: "VTD", value: "preencheu", color: "indigo" },
                        { label: "OD", value: "o formulário (sem preposição)", color: "emerald" },
                      ],
                      explanation:
                        "Responde direto 'preencheu O QUÊ?'. Note que 'o' antes de formulário é apenas Artigo Definido, não preposição!",
                    },
                  ],
                },
                {
                  level: "Exemplo 2 · Rotina de Prefeitura (Alvo longo resumido em 'ISSO')",
                  accent: "emerald",
                  cases: [
                    {
                      sentence: "“A comissão permanente homologou o resultado final do concurso.”",
                      tags: [
                        { label: "TESTE DE 5S", value: "homologou ISSO → sem prep. antes de ISSO = VTD", color: "emerald" },
                      ],
                      explanation:
                        "Troque todo o bloco após o verbo pela palavra ISSO: 'homologou ISSO'. Encaixou liso → VTD + OD!",
                    },
                  ],
                },
                {
                  level: "Exemplo 3 · Caso Limite (Artigo 'a' sem preposição vs. Crase 'à' com preposição)",
                  accent: "amber",
                  cases: [
                    {
                      label: "Frase A · Artigo 'a' (sem preposição)",
                      sentence: "“O coordenador revisou a portaria.”",
                      tags: [{ label: "TROCA MASCULINA", value: "revisou O decreto → Verbo Transitivo Direto", color: "emerald" }],
                      explanation:
                        "Aqui 'a' é apenas artigo feminino: ao trocar para o masculino vira 'o decreto' (sem preposição) → Verbo Transitivo Direto + Objeto Direto.",
                    },
                    {
                      label: "Frase B · Crase 'à' (esconde preposição 'a')",
                      sentence: "“O coordenador obedeceu à portaria.”",
                      tags: [{ label: "TROCA MASCULINA", value: "obedeceu AO decreto → Verbo Transitivo Indireto", color: "rose" }],
                      explanation:
                        "Aqui há crase 'à': ao trocar para o masculino aparece o 'ao' ('ao decreto'), revelando a preposição obrigatória → Verbo Transitivo Indireto!",
                    },
                  ],
                },
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Confundir o artigo feminino 'a' ('revisou a planilha') com preposição, ou ver 'exibe fachada revestida por...' e achar que o verbo não é direto."
              escape="Na dúvida entre artigo e preposição, troque o feminino por um masculino ('o decreto' vs. 'ao decreto'). E sempre aplique o Teste de ISSO: coube 'verbo + ISSO' sem preposição? É VTD!"
            />
          </ProseSection>

          {/* 2.4 Verbo Transitivo Indireto (VTI) e Objeto Indireto (OI) */}
          <ProseSection number="2.4" title="Verbo Transitivo Indireto (VTI) e Objeto Indireto (OI): A Ação que Exige Ponte Obrigatória">
            <p>
              Se no <code>VTD</code> o verbo encostava direto no complemento, no{" "}
              <strong>Verbo Transitivo Indireto (VTI)</strong> a mecânica é outra: o verbo{" "}
              <strong>exige obrigatoriamente uma ponte chamada preposição</strong> (<em>de, em, a, para, com, por</em>)
              para conseguir atravessar até o complemento!
            </p>
            <p>
              Por que essa ponte existe? Porque certos verbos carregam essa exigência na sua regência natural: quem
              precisa, precisa <strong>DE</strong> algo; quem obedece, obedece <strong>A</strong> algo; quem confia,
              confia <strong>EM</strong> alguém. Se você apagar a preposição na escrita formal (*"Obedece o edital"*),
              a norma culta quebra na mesma hora. E atenção ao truque das provas: muitas vezes a preposição se disfarça
              fundida ao artigo dentro das <strong>contrações</strong> (<code>do, da, no, na, nos, ao, à</code>)!
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "Verbo Transitivo Indireto (VTI)",
                  badge: "EXIGE PREPOSIÇÃO OBRIGATÓRIA",
                  accent: "sky",
                  summary:
                    "Verbo de ação que só se completa através de uma preposição obrigatória (de, a, em, com, por). Responde às perguntas com a preposição na frente: DE QUÊ? / A QUÊ? / EM QUÊ? / COM QUÊ?.",
                },
                {
                  term: "Objeto Indireto (OI)",
                  badge: "O ALVO COM PREPOSIÇÃO",
                  accent: "purple",
                  summary:
                    "É o complemento ligado ao VTI por meio dessa preposição obrigatória (às vezes disfarçada em contrações como do, da, no, nas, ao, à).",
                },
              ]}
            />

            <AnalogyBox title="Analogia da Tomada com Adaptador Obrigatório (Ponte com Pedágio)" tag="Preposição Obrigatória">
              O <strong>VTI</strong> é um aparelho de 3 pinos que só funciona se você colocar o{" "}
              <strong>adaptador obrigatório (a preposição)</strong> antes de ligar — ou um carro que só cruza o rio
              pagando o pedágio da ponte. Sem a preposição exigida, não há ligação válida!
            </AnalogyBox>

            <ExampleShowcase
              title="Exemplos Progressivos · VTI + Objeto Indireto (OI)"
              items={[
                {
                  level: "Exemplo 1 · Cotidiano (Preposição clara mantendo a frase correta)",
                  accent: "indigo",
                  cases: [
                    {
                      sentence: "“O estagiário gosta de organização.”",
                      tags: [
                        { label: "VTI", value: "gosta", color: "sky" },
                        { label: "OI", value: "de organização (gosta DISSO)", color: "purple" },
                      ],
                      explanation:
                        "Não se diz 'gosta organização'. A preposição DE é obrigatória para ligar o verbo ao complemento.",
                    },
                  ],
                },
                {
                  level: "Exemplo 2 · Rotina de Prefeitura (Crase denunciando preposição 'a')",
                  accent: "emerald",
                  cases: [
                    {
                      sentence: "“Todos os fiscais obedeceram às determinações do decreto.”",
                      tags: [
                        { label: "VTI", value: "obedeceram (A QUÊ?)", color: "sky" },
                        { label: "CONTRACÃO ÀS", value: "preposição A + artigo AS = OI", color: "purple" },
                      ],
                      explanation:
                        "Teste de 5s: 'obedeceram A ISSO'. A preposição 'a' apareceu fundida no 'às' com acento grave!",
                    },
                  ],
                },
                {
                  level: "Exemplo 3 · Caso Limite (Contração camuflada 'nos' escondendo 'em')",
                  accent: "amber",
                  cases: [
                    {
                      sentence: "“A diretoria confiou nos relatórios do departamento.”",
                      tags: [
                        { label: "DESMONTE 'NOS'", value: "em (prep.) + os (artigo)", color: "amber" },
                        { label: "TESTE", value: "confiou NISSO → VTI + OI", color: "purple" },
                      ],
                      explanation:
                        "Muita gente bate o olho em 'nos' e não percebe a preposição! Desmontando 'nos = em + os', vê-se que confiar exige preposição EM → VTI!",
                    },
                  ],
                },
              ]}
            />

            <KeyTable
              title="Mapa de Gêmeos Confundíveis · Alvo Indireto (VTI) vs. Lugar Físico (VI)"
              headers={["Frase Analisada", "O Que Vem Depois da Preposição?", "Classificação"]}
              rows={[
                ["“O setor precisou de técnicos.”", "Alvo exigido pelo verbo (DE QUÊ?)", "VTI + OI"],
                ["“O servidor morou em Birigui.”", "Localização geográfica (ONDE?)", "VI (lugar não é objeto!)"],
                ["“O cidadão assistiu ao debate.”", "Alvo do sentido 'ver/presenciar' (A QUÊ?)", "VTI + OI (prep. a)"],
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Esconder a preposição dentro de contrações ('confiou no plano', 'lembrou-se do prazo', 'assistiu à sessão') para que você ache que não tem preposição."
              escape="Desmonte sempre do = de+o, no = em+o, ao = a+o, à = a+a e faça a pergunta com a preposição na frente: responde DE QUÊ / A QUÊ / EM QUÊ (e não ONDE)? VTI + OI!"
            />

            {/* PARADA RAPIDA 2.A */}
            <InlinePractice
              title="Parada Rápida 2.A · Fixe VI, VTD/OD e VTI/OI Antes de Avançar"
              subtitle="Teste agora se os 3 primeiros comportamentos do verbo já ficaram cristalinos."
              questions={[
                {
                  prompt: "Qual é a classificação correta do verbo destacado nesta frase de rotina municipal?",
                  sentence: (
                    <>
                      “Os novos fiscais <u>chegaram</u> ao prédio anexo muito cedo.”
                    </>
                  ),
                  options: [
                    { key: "A", label: "VTI, pois exige a preposição 'a' dentro da contração 'ao'." },
                    { key: "B", label: "VI, pois 'ao prédio anexo' indica lugar (onde?), funcionando como cenário." },
                    { key: "C", label: "VTD, pois 'prédio anexo' é um substantivo concreto depois do verbo." },
                  ],
                  correctKey: "B",
                  feedbackCorrect:
                    "Perfeito! Verbos de movimento (ir, chegar, voltar, comparecer) acompanhados de LUGAR (onde?) são sempre Intransitivos (VI).",
                  feedbackWrong:
                    "Cuidado com a Regra do Lugar! 'Ao prédio anexo' responde ONDE chegaram, nunca 'chegaram a quê'. Lugar é cenário, então o verbo é VI.",
                },
                {
                  prompt: "Como classificamos o verbo 'confiou' e o termo em destaque na frase abaixo?",
                  sentence: (
                    <>
                      “A comissão confiou <u>nas informações</u> apresentadas pelo protocolo.”
                    </>
                  ),
                  options: [
                    { key: "A", label: "VTD + Objeto Direto, pois não há preposição 'de' nem 'para' visível." },
                    { key: "B", label: "VI + expressão de lugar, pois 'nas' indica posição física." },
                    {
                      key: "C",
                      label: "VTI + Objeto Indireto, pois 'nas' esconde a preposição obrigatória 'em' (em + as).",
                    },
                  ],
                  correctKey: "C",
                  feedbackCorrect:
                    "Isso! Quem confia, confia EM algo ('confiou NISSO'). Ao desmontar 'nas = em + as', a preposição obrigatória aparece → VTI + OI!",
                  feedbackWrong:
                    "Lembre das contrações: 'nas' = preposição EM + artigo AS! Como o verbo confiar exige EM algo, trata-se de VTI + OI.",
                },
              ]}
            />
          </ProseSection>

          {/* 2.5 Verbo Transitivo Direto e Indireto (VTDI) */}
          <ProseSection number="2.5" title="Verbo Transitivo Direto e Indireto (VTDI): O Verbo de Duas Mãos">
            <p>
              No trabalho administrativo, há ações que sempre conectam <strong>uma coisa a uma pessoa</strong> ao mesmo
              tempo: pense nos verbos <em>entregar, enviar, devolver, informar, comunicar, oferecer, pagar</em>. Se o
              atendente enviar só *"a guia"* sem dizer para quem, ou enviar *"ao munícipe"* sem dizer o quê, falta metade
              da informação!
            </p>
            <p>
              Por isso esses verbos recebem o nome de <strong>Transitivo Direto e Indireto (VTDI)</strong> — ou{" "}
              <em>Bitransitivo</em> (<code>bi = dois</code>): dentro da mesma frase eles pedem{" "}
              <strong>os dois tipos de objeto juntos</strong>: um sem preposição (<code>OD</code>) e outro com
              preposição (<code>OI</code>).
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "Verbo Transitivo Direto e Indireto (VTDI / Bitransitivo)",
                  badge: "EXIGE OD + OI JUNTOS",
                  accent: "purple",
                  summary:
                    "Verbo de ação (geralmente de transferência ou comunicação) que pede simultaneamente um Objeto Direto sem preposição (O QUÊ?) e um Objeto Indireto com preposição (A QUEM / PARA QUEM / DE QUEM?).",
                  note: "Fórmula de 5 segundos: encaixa em “Verbo + ISSO (OD) + A ALGUÉM (OI)”!",
                },
              ]}
            />

            <AnalogyBox title="Analogia do Carteiro de Duas Mãos" tag="Pacote + Destinatário">
              O <strong>VTDI</strong> entra na sala com as duas mãos ocupadas: na <strong>mão direita</strong> leva o
              pacote sem preposição (<em>OD: o ofício</em>), e na <strong>mão esquerda</strong> segura o endereço com
              preposição obrigatória (<em>OI: ao setor jurídico</em>)!
            </AnalogyBox>

            <ExampleShowcase
              title="Exemplos Progressivos · VTDI em Ação"
              items={[
                {
                  level: "Exemplo 1 · Cotidiano (Ação dupla completa)",
                  accent: "indigo",
                  cases: [
                    {
                      sentence: "“O porteiro entregou a correspondência ao morador.”",
                      tags: [
                        { label: "MÃO DIREITA (OD)", value: "a correspondência (o quê?)", color: "indigo" },
                        { label: "MÃO ESQUERDA (OI)", value: "ao morador (a quem?)", color: "purple" },
                      ],
                      explanation: "Os dois complementos exigidos por 'entregar' estão presentes ao mesmo tempo → VTDI.",
                    },
                  ],
                },
                {
                  level: "Exemplo 2 · Rotina de Prefeitura (Transferência oficial)",
                  accent: "emerald",
                  cases: [
                    {
                      sentence: "“A secretaria enviou o edital retificado aos candidatos inscritos.”",
                      tags: [
                        { label: "OD", value: "o edital retificado", color: "indigo" },
                        { label: "OI", value: "aos candidatos inscritos", color: "purple" },
                      ],
                      explanation: "Enviou ISSO (OD) + A QUEM (OI) = VTDI perfeito.",
                    },
                  ],
                },
                {
                  level: "Exemplo 3 · Caso Limite (Pronome 'lhe' no meio da frase)",
                  accent: "amber",
                  cases: [
                    {
                      sentence: "“O diretor comunicou-lhe o resultado oficial antes do encerramento.”",
                      tags: [
                        { label: "OI (PRONOME)", value: "lhe (= a ele/ela)", color: "purple" },
                        { label: "OD", value: "o resultado oficial", color: "indigo" },
                      ],
                      explanation:
                        "Não se engane pelo tamanho curto de 'lhe': ele vale por 'a ele(a)' (OI!), e 'o resultado oficial' completa sem preposição (OD!) → VTDI!",
                    },
                  ],
                },
              ]}
            />

            <KeyTable
              title="Mapa de Gêmeos Confundíveis · O Mesmo Verbo 'Pagar' Mudando na Frase"
              headers={["Frase Real", "Peças Presentes", "Transitividade"]}
              rows={[
                ["“A prefeitura pagou a guia.”", "Apenas a coisa sem preposição (OD)", "VTD"],
                ["“A prefeitura pagou ao servidor.”", "Apenas a pessoa com prep. 'a' (OI)", "VTI"],
                ["“A prefeitura pagou o salário ao servidor.”", "Coisa (OD) + Pessoa com 'a' (OI)", "VTDI"],
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Ver dois blocos depois do verbo ('O diretor assinou o decreto no gabinete') e marcar VTDI!"
              escape="Confira o segundo bloco ('no gabinete'): ele responde A QUEM / DE QUÊ ou responde ONDE? Se responder ONDE (lugar físico), não é Objeto Indireto — só há 1 objeto ('o decreto') = VTD!"
            />
          </ProseSection>

          {/* 2.6 Verbo de Ligacao (VL) */}
          <ProseSection number="2.6" title="Verbo de Ligação (VL): A Ponte de Estado, as 5 Famílias e o Verbo Mudando de Roupa">
            <p>
              Nos quatro tipos que acabamos de ver (<code>VI</code>, <code>VTD</code>, <code>VTI</code>,{" "}
              <code>VTDI</code>), sempre havia alguém executando uma ação ou evento acontecendo. Agora vamos conhecer o{" "}
              <strong>5º comportamento verbal</strong>, que faz o oposto: aqui <strong>não existe ação nenhuma</strong>!
            </p>
            <p>
              Repare em frases como <em>“O edital é claro”</em> ou <em>“Os arquivos permaneceram intactos”</em>.
              Ninguém agiu em cima de ninguém! O verbo funciona apenas como uma <strong>cola gramatical</strong> para
              atribuir um estado ou característica ao Sujeito — mudando apenas a noção de tempo (se aquele estado é
              permanente, passageiro, novo, contínuo ou aparente).
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Verbo de Ligação (Ponte de Estado)",
                  badge: "ZERO AÇÃO · SÓ PONTE DE ESTADO",
                  accent: "amber",
                  summary:
                    "Verbo que não indica ação nem movimento: atua apenas como ponte conectando o Sujeito a uma qualidade, condição ou estado (ser, estar, parecer, permanecer, continuar, ficar, andar, tornar-se, virar, viver).",
                  examplesTitle: "Exemplos · Verbo de Ligação Conectando Estado",
                  examples: [
                    {
                      label: "Cotidiano · Mudança de estado emocional",
                      sentence: "“O cidadão ficou aliviado com a resposta.”",
                      tags: [{ label: "FUNÇÃO", value: "Verbo de Ligação (cidadão = aliviado)", color: "amber" }],
                      explanation:
                        "Ninguém executa uma ação física chamada 'ficar': é apenas mudança de estado do cidadão.",
                    },
                    {
                      label: "Rotina de Prefeitura · Continuidade e Aparência",
                      sentence: "“Todos os balancetes permaneceram corretos e a planilha parecia atualizada.”",
                      tags: [
                        { label: "permaneceram", value: "Verbo de Ligação (continuidade)", color: "amber" },
                        { label: "parecia", value: "Verbo de Ligação (aparência)", color: "sky" },
                      ],
                      explanation: "Ambos os verbos apenas ligam os sujeitos às suas qualidades/estados.",
                    },
                  ],
                },
              ]}
            />

            <KeyTable
              title="As 5 Famílias Semânticas dos Verbos de Ligação (VL)"
              headers={["Família de Estado", "Verbos Principais", "Exemplo em Rotina Municipal"]}
              rows={[
                ["1. Estado Permanente", "ser, viver", "“O prazo legal é improrrogável.” / “O guichê vive lotado.”"],
                ["2. Estado Transitório", "estar, andar, achar-se", "“A servidora anda sobrecarregada neste mês.”"],
                ["3. Mudança de Estado", "ficar, tornar-se, virar", "“O atendimento tornou-se totalmente digital.”"],
                ["4. Continuidade de Estado", "permanecer, continuar", "“Os documentos fiscais permaneceram intactos.”"],
                ["5. Aparência de Estado", "parecer", "“O recurso protocolado parece procedente.”"],
              ]}
            />

            <AnalogyBox title="Analogia do Sinal de Igual (=) com Filtro de Tempo" tag="Sujeito = Qualidade">
              O <strong>Verbo de Ligação</strong> funciona igual ao sinal <strong>=</strong> da matemática ligando o sujeito ao seu
              estado (<em>servidor = tranquilo</em>), acrescentando apenas o filtro de duração ou aparência (<em>é</em> =
              sempre; <em>está</em> = hoje; <em>ficou</em> = passou a ser; <em>permaneceu</em> = continuou;{" "}
              <em>parece</em> = aparenta).
            </AnalogyBox>

            <DefinitionBlocks
              items={[
                {
                  term: "2. Teste de 5 Segundos (“Verbo Mudando de Roupa”: Lugar vs. Estado)",
                  badge: "TROQUE POR SER / ESTAR",
                  accent: "rose",
                  summary:
                    "Veja se você consegue trocar o verbo por ser ou estar mantendo uma qualidade do sujeito ('anda cansado' = 'está cansado' → Verbo de Ligação!). Se indicar movimento físico ('anda depressa') ou lugar no espaço ('ficaram na gaveta', 'está no arquivo'), NÃO é Verbo de Ligação — vira Verbo Intransitivo!",
                  examplesTitle: "Caso Limite · Lugar Físico vs. Estado do Sujeito",
                  examples: [
                    {
                      label: "Armadilha · Com LUGAR físico NÃO é Verbo de Ligação!",
                      sentence: "“Os documentos ficaram na gaveta.”",
                      tags: [{ label: "TERMO SEGUINTE", value: "na gaveta = LUGAR → Verbo Intransitivo!", color: "rose" }],
                      explanation:
                        "Olhe para o que vem depois do verbo: lugar no espaço (na gaveta, no arquivo) não expressa qualidade do sujeito — logo, 'ficaram' funciona aqui como Verbo Intransitivo!",
                    },
                    {
                      label: "Uso Real · Com QUALIDADE/ESTADO é Verbo de Ligação!",
                      sentence: "“Os funcionários ficaram atentos.”",
                      tags: [{ label: "TERMO SEGUINTE", value: "atentos = ESTADO → Verbo de Ligação!", color: "emerald" }],
                      explanation:
                        "Aqui 'atentos' expressa o estado dos funcionários (equivalente a 'estavam atentos') — confirmando o Verbo de Ligação.",
                    },
                  ],
                },
              ]}
            />

            <KeyTable
              title="Quadro-Resumo de Fechamento dos 5 Tipos de Verbo (Agora Tudo Fechado!)"
              headers={["Tipo de Verbo", "O Que Faz na Frase", "Analogia-Âncora"]}
              rows={[
                ["VI (Intransitivo)", "Ação completa sem objeto (mesmo com lugar/tempo)", "Lanterna a pilha (autossuficiente)"],
                ["VTD (Transitivo Direto)", "Pede OD em linha reta, sem preposição obrigatória", "Tomada direta de 2 pinos"],
                ["VTI (Transitivo Indireto)", "Pede OI com preposição obrigatória (de, a, em, com)", "Tomada com adaptador / Pedágio"],
                ["VTDI (Bitransitivo)", "Pede OD + OI juntos na mesma frase", "Carteiro de duas mãos"],
                ["VL (De Ligação)", "Zero ação: liga o Sujeito a um estado (5 famílias)", "Sinal de Igual (=) com filtro de tempo"],
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Ver ser, estar, ficar, andar, parecer ou permanecer e marcar VL no automático até quando a frase traz localização física ('Os processos estão no arquivo')."
              escape="Confira o que vem depois do verbo: liga a uma qualidade/estado ('estão arquivados', 'ficou atento') = VL! Indica apenas ONDE está no espaço ('no arquivo', 'em casa') = VI!"
            />

            {/* PARADA RAPIDA 2.B */}
            <InlinePractice
              title="Parada Rápida 2.B · Fixe VTDI, VL e Verbo Mudando de Roupa"
              subtitle="Garanta que você já sabe diferenciar todos os 5 tipos de verbo antes de passar às armadilhas."
              questions={[
                {
                  prompt: "Qual é a classificação do verbo destacado nesta frase?",
                  sentence: (
                    <>
                      “O secretário <u>enviou</u> o decreto ao setor jurídico ontem.”
                    </>
                  ),
                  options: [
                    { key: "A", label: "VTD, porque 'ao setor jurídico' indica apenas o lugar onde assinou." },
                    {
                      key: "B",
                      label: "VTDI, pois pediu o objeto sem preposição (o decreto) e o destinatário com preposição (ao setor jurídico).",
                    },
                    { key: "C", label: "VTI, pois a preposição 'ao' transforma toda a frase em objeto indireto." },
                  ],
                  correctKey: "B",
                  feedbackCorrect:
                    "Isso! Quem envia, envia ALGO (OD: o decreto) A ALGUÉM/DESTINATÁRIO (OI: ao setor jurídico). As duas mãos do carteiro estão aqui → VTDI!",
                  feedbackWrong:
                    "Note que há duas perguntas respondidas pelo ato de enviar: O QUÊ (o decreto = OD) + A QUEM / PARA ONDE FOI ENVIADO (ao setor jurídico = OI) → VTDI.",
                },
                {
                  prompt: "Em qual alternativa o verbo destacado funciona realmente como Verbo de Ligação (VL)?",
                  options: [
                    {
                      key: "A",
                      label: (
                        <>
                          “Os novos formulários <u>estão</u> no armário da recepção.”
                        </>
                      ),
                    },
                    {
                      key: "B",
                      label: (
                        <>
                          “O atendente <u>andou</u> depressa até o terceiro andar.”
                        </>
                      ),
                    },
                    {
                      key: "C",
                      label: (
                        <>
                          “Durante a auditoria, as contas municipais <u>permaneceram</u> equilibradas.”
                        </>
                      ),
                    },
                  ],
                  correctKey: "C",
                  feedbackCorrect:
                    "Muito bem! Em (A), 'no armário' é lugar físico (VI); em (B), 'andou depressa' é caminhada física (VI); só em (C) 'permaneceram' liga as contas ao estado 'equilibradas' (VL).",
                  feedbackWrong:
                    "Cuidado: 'estar no armário' indica lugar físico (= VI) e 'andar depressa' indica movimento (= VI). VL liga o Sujeito a um estado/qualidade ('permaneceram equilibradas').",
                },
              ]}
            />
          </ProseSection>

          {/* 2.7 Falsa Preposicao e 5 Regencias Campeas */}
          <ProseSection
            number="2.7"
            title='A Armadilha da "Falsa Preposição" e as 5 Regências Campeãs (assistir, visar, obedecer, pagar/perdoar, aspirar)'
          >
            <p>
              Agora que você domina os 5 tipos de verbo, vamos desarmar <strong>duas armadilhas clássicas do Instituto ACCESS</strong>.
              A primeira chama-se <strong>Falsa Preposição</strong>: a banca coloca um verbo <code>VTD</code> bem simples,
              mas escreve dentro do complemento dele uma preposição vistosa (<em>de, por, com</em>) presa a outra palavra
              lá no meio — só para fazer o candidato pensar que o verbo é <code>VTI</code>!
            </p>
            <p>
              A segunda armadilha envolve <strong>5 verbos campeões cuja regência muda junto com o sentido</strong>: na
              conversa informal falamos <em>“assistir o filme”</em> ou <em>“obedecer o chefe”</em>, mas na prova
              escrita a norma culta cobra o uso exato da preposição obrigatória.
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Armadilha da 'Falsa Preposição' (Pref. Contagem/MG 2026 Q01)",
                  badge: "TESTE DO 'ISSO'",
                  accent: "rose",
                  summary:
                    "Existe uma preposição dentro do bloco após o verbo, mas NÃO foi o verbo quem pediu aquela preposição — quem pediu foi um nome ou adjetivo lá dentro do complemento!",
                  note: "Teste infalível de 5s: troque TODO o complemento por ISSO. Se encaixar liso 'exibe ISSO' (sem preposição antes de ISSO), o verbo é Transitivo Direto 100%!",
                  examplesTitle: "Exemplos · Desarmando a Falsa Preposição com o Teste de 'ISSO'",
                  examples: [
                    {
                      label: "Cotidiano · Preposição interna pertence ao nome",
                      sentence: "“A técnica consertou a impressora de jato contínuo.”",
                      tags: [{ label: "TESTE", value: "consertou ISSO → Verbo Transitivo Direto!", color: "emerald" }],
                      explanation:
                        "Quem pediu a preposição 'de' foi o nome 'impressora' (tipo de impressora), jamais o verbo 'consertou'!",
                    },
                    {
                      label: "Caso Real ACCESS · Pref. Contagem/MG 2026 Q01",
                      sentence: "“O edifício monumental... exibe fachada revestida por hieróglifos e alabastro translúcido...”",
                      tags: [
                        {
                          label: "TESTE DO ISSO",
                          value: "“O edifício exibe ISSO” → Verbo Transitivo Direto puro!",
                          color: "emerald",
                        },
                      ],
                      explanation:
                        "Ninguém diz 'exibe POR ISSO'! Quem exigiu a preposição 'por' foi a palavra 'revestida' (revestida por hieróglifos). Logo, 'exibe' é Verbo Transitivo Direto puro!",
                    },
                  ],
                },
              ]}
            />

            <AnalogyBox title="Analogia da Caixa com Etiqueta Dentro" tag="VTD × Preposição Interna">
              O verbo <strong>Transitivo Direto</strong> entrega uma <strong>caixa fechada</strong> (<em>“ISSO”</em>). Se lá dentro da
              caixa há um rótulo escrito <em>“por hieróglifos”</em>, essa preposição pertence ao conteúdo lá dentro —
              não foi o verbo quem precisou de ponte!
            </AnalogyBox>

            <DefinitionBlocks
              items={[
                {
                  term: "2. As 5 Regências Campeãs em Concursos Municipais (Fala Informal vs. Norma Culta)",
                  badge: "TROCA DE SENTIDO",
                  accent: "sky",
                  summary:
                    "Na fala informal costumamos omitir a preposição obrigatória ('assistir o filme', 'obedecer o chefe'). Na prova escrita, cada sentido desses 5 verbos exige ou dispensa preposição com rigor.",
                  examplesTitle: "Exemplos na Rotina de Prefeitura · Regências em Ação",
                  examples: [
                    {
                      label: "Regência 1 · 'Assistir' no sentido de presenciar",
                      sentence: "“Os vereadores assistiram à sessão.”",
                      tags: [
                        {
                          label: "assistiram à",
                          value: "= presenciaram → Verbo Transitivo Indireto (prep. 'a')",
                          color: "sky",
                        },
                      ],
                      explanation:
                        "Assistir (= ver/presenciar) exige preposição A obrigatória (fundida com o artigo 'a' formando crase 'à').",
                    },
                    {
                      label: "Regência 2 · 'Pagar' com coisa + pessoa juntos",
                      sentence: "“O tesoureiro pagou o salário aos servidores.”",
                      tags: [
                        {
                          label: "pagou X aos",
                          value: "coisa (Objeto Direto) + pessoa (Objeto Indireto) → Bitransitivo",
                          color: "purple",
                        },
                      ],
                      explanation:
                        "Pagar coisa não leva preposição (Objeto Direto); pagar pessoa exige preposição A (Objeto Indireto). Juntos formam Verbo Transitivo Direto e Indireto!",
                    },
                  ],
                },
              ]}
            />

            <KeyTable
              title="As 5 Regências Campeãs em Concursos Municipais (ACCESS)"
              headers={["Verbo", "Sem Preposição (VTD)", "Com Preposição Obrigatória (VTI)"]}
              rows={[
                ["Assistir", "= Ajudar / socorrer (“assistiu o paciente”)", "= Ver / presenciar (“assistiu ao debate” → prep. A)"],
                ["Visar", "= Assinar / mirar (“visou o cheque”)", "= Almejar / ter meta (“visa ao atendimento” → prep. A)"],
                ["Obedecer / Desobedecer", "(Na norma culta, nunca é VTD!)", "Sempre VTI com prep. A (“obedece às leis / lhe obedece”)"],
                ["Pagar / Perdoar", "COISA = VTD (“pagou a guia / a dívida”)", "PESSOA = VTI com prep. A (“pagou ao servidor”)"],
                ["Aspirar", "= Inalar / cheirar (“aspirou o ar puro”)", "= Desejar cargo (“aspira ao cargo público” → prep. A)"],
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Usar 'Assistimos o jogo' / 'Obedeceu o chefe' sem preposição, ou ver 'fachada revestida POR hieróglifos' e marcar VTI."
              escape="Aplique o Teste de ISSO trocando o bloco inteiro após o verbo: encaixou 'verbo + ISSO' sem preposição antes? É VTD. Só é VTI se a preposição ficar presa antes de ISSO (obedece A ISSO)."
            />
          </ProseSection>

          {/* 2.8 Pronomes Substitutos Camaleoes OD Prep Pleonasmo */}
          <ProseSection
            number="2.8"
            title="Pronomes Substitutos (o/a vs. lhe), Camaleões (me/te/se/nos/vos), OD Preposicionado e Objetos Pleonásticos"
          >
            <p>
              Para não repetir o mesmo substantivo o tempo todo no texto (<em>“O diretor leu o edital, assinou o edital e
              arquivou o edital”</em>), usamos pronomes curtinhos presos ao verbo (<em>“assinou-o”</em>). Porém, na
              norma culta de prova, <strong>cada pronome tem um endereço fixo</strong>: errar a troca entre{" "}
              <code>o/a</code> e <code>lhe</code> aparece direto em questões de concurso!
            </p>
            <p>
              Fechamos este eixo vendo também três detalhes específicos cobrados pela ACCESS: os{" "}
              <strong>pronomes camaleões</strong> (<code>me, te, se, nos, vos</code>), que mudam de papel conforme o
              verbo; o <strong>Objeto Direto Preposicionado</strong> (quando um <code>VTD</code> recebe uma preposição
              opcional por estilo); e o <strong>Objeto Pleonástico</strong> (quando repetimos o objeto para dar ênfase).
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Endereços Fixos: o/a/lo/no (Objeto Direto) vs. lhe/lhes (Objeto Indireto)",
                  badge: "PROIBIDO TROCAR!",
                  accent: "indigo",
                  summary:
                    "o, a, os, as (e variantes lo/la após r/s/z; no/na após som nasal) substituem EXCLUSIVAMENTE Objeto Direto (Verbo Transitivo Direto). Já lhe / lhes substituem EXCLUSIVAMENTE Objeto Indireto com preposição 'a' para pessoa (Verbo Transitivo Indireto).",
                  examplesTitle: "Exemplos · Certo vs. Errado na Escolha entre 'o' e 'lhe'",
                  examples: [
                    {
                      label: "Certo · Verbo Transitivo Direto pede 'o'",
                      sentence: "“Conheço-o.” (de 'Conheço o diretor')",
                      verdict: "right",
                      explanation: "Conhecer = Verbo Transitivo Direto (quem conhece, conhece alguém sem preposição) → pede O.",
                    },
                    {
                      label: "Certo · Verbo Transitivo Indireto com 'a' pede 'lhe'",
                      sentence: "“Agradeço-lhe.” (de 'Agradeço ao cidadão')",
                      verdict: "right",
                      explanation: "Agradecer a alguém = Verbo Transitivo Indireto com preposição 'a' → pede LHE.",
                    },
                    {
                      label: "Armadilha · Proibido usar 'lhe' em Verbo Transitivo Direto",
                      sentence: "“Conheço-lhe.”",
                      verdict: "wrong",
                      explanation: "Inversão proibida! Conhecer não pede preposição 'a', portanto não aceita 'lhe'.",
                    },
                    {
                      label: "Armadilha · Proibido usar 'o/no' em Verbo Transitivo Indireto",
                      sentence: "“Os servidores obedecem-no rigorosamente.”",
                      verdict: "wrong",
                      explanation: "Obedecer exige preposição 'a' (obedece A alguém) — logo não aceita 'no'; o certo é obedecem-lhe!",
                    },
                  ],
                },
                {
                  term: "2. Pronomes Camaleões (me, te, se, nos, vos)",
                  badge: "DEPENDEM DO VERBO",
                  accent: "purple",
                  summary:
                    "Não têm cargo fixo sozinhos: com Verbo Transitivo Direto exercem papel de Objeto Direto ('Elogiou-me' = elogiou eu); com Verbo Transitivo Indireto exercem papel de Objeto Indireto ('Obedeceu-me' = obedeceu a mim).",
                  examplesTitle: "Exemplos · O Mesmo Pronome 'nos' Mudando de Função",
                  examples: [
                    {
                      label: "Com Verbo Transitivo Direto → Objeto Direto",
                      sentence: "“O chefe convocou-nos.”",
                      tags: [{ label: "convocou-NOS", value: "Verbo Transitivo Direto → nos = Objeto Direto", color: "indigo" }],
                      explanation: "Quem convoca, convoca alguém (sem preposição), então 'nos' vale como Objeto Direto.",
                    },
                    {
                      label: "Com Verbo Transitivo Indireto → Objeto Indireto",
                      sentence: "“O chefe respondeu-nos.”",
                      tags: [{ label: "respondeu-NOS", value: "Verbo Transitivo Indireto → nos = Objeto Indireto", color: "purple" }],
                      explanation: "Quem responde a alguém responde COM preposição 'a', então o mesmo 'nos' vira Objeto Indireto!",
                    },
                  ],
                },
                {
                  term: "3. Objeto Direto Preposicionado (Preposição Opcional vs. Objeto Indireto Real)",
                  badge: "TESTE DA REMOÇÃO",
                  accent: "amber",
                  summary:
                    "Ocorre quando um Verbo Transitivo Direto recebe uma preposição opcional estilística que pode ser removida sem estragar a frase ('Cumpriu com o dever' = 'Cumpriu o dever'). Se tirar a preposição destruir a frase, é Objeto Indireto real!",
                  examplesTitle: "Exemplos · Como Testar Removendo a Preposição",
                  examples: [
                    {
                      label: "Objeto Direto Preposicionado · Preposição removível",
                      sentence: "“A secretária cumpriu com o dever.”",
                      tags: [{ label: "TESTE REMOÇÃO", value: "“cumpriu o dever” ✅ → Objeto Direto Preposicionado", color: "emerald" }],
                      explanation:
                        "Tirando a preposição 'com', 'cumpriu o dever' continua perfeito na norma culta (Verbo Transitivo Direto com preposição estilística).",
                    },
                    {
                      label: "Objeto Indireto Obrigatório · Preposição insubstituível",
                      sentence: "“O servidor precisa de autorização.”",
                      tags: [{ label: "TESTE REMOÇÃO", value: "“precisa autorização” ❌ → Objeto Indireto obrigatório", color: "rose" }],
                      explanation:
                        "Em 'precisa de', apagar a preposição 'de' quebra a norma culta — logo o verbo é Transitivo Indireto com Objeto Indireto real!",
                    },
                  ],
                },
                {
                  term: "4. Objeto Pleonástico (Ênfase por Repetição)",
                  badge: "RETOMADA ENFÁTICA",
                  accent: "sky",
                  summary:
                    "O autor antecipa o objeto no início da frase para dar destaque e logo depois o repete com um pronome oblíquo grudado no verbo ('O ofício, já o protocolei').",
                  examplesTitle: "Exemplos · Objeto Direto e Indireto Pleonásticos",
                  examples: [
                    {
                      label: "Objeto Direto Pleonástico",
                      sentence: "“O ofício, já o protocolei.”",
                      tags: [{ label: "O (PLEONÁSTICO)", value: "retoma 'O ofício' sem preposição", color: "indigo" }],
                      explanation: "O pronome 'o' repete enfaticamente o Objeto Direto antecipado no começo da frase.",
                    },
                    {
                      label: "Objeto Indireto Pleonástico",
                      sentence: "“Ao contribuinte, não lhe negamos ajuda.”",
                      tags: [{ label: "LHE (PLEONÁSTICO)", value: "retoma 'Ao contribuinte'", color: "amber" }],
                      explanation: "O pronome 'lhe' retoma enfaticamente o Objeto Indireto antecipado 'Ao contribuinte'.",
                    },
                  ],
                },
              ]}
            />

            <AnalogyBox title="Analogia das Chaves de Boca" tag="Cada Chave no Seu Parafuso">
              O pronome <strong>o/a/lo/no</strong> é a chave fixa exclusiva do <strong>Objeto Direto (VTD)</strong>;{" "}
              <strong>lhe</strong> é a chave do <strong>Objeto Indireto com preposição a (VTI)</strong>; e os camaleões{" "}
              <strong>me/te/se/nos/vos</strong> são chaves ajustáveis que mudam conforme o verbo da oração!
            </AnalogyBox>

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Usar o pronome 'o / no / as' junto de verbo VTI famoso ('Os servidores obedecem-no', 'As leis, ele as obedece')."
              escape="Pergunte: quem obedece, obedece O QUÊ ou A QUÊ? Se exige preposição 'a', proíba o/no/as e substitua por 'lhe' (pessoa) ou 'a ela' (coisa)!"
            />
          </ProseSection>

          <FlipCardsGrid
            title="Flashcards de Memorização Ativa · Eixo 2"
            cards={[
              {
                front: "VI (Lanterna a pilha)",
                hint: "In- = não atravessa para objeto",
                back: "Ação fecha o sentido em si mesma. Verbos de movimento com lugar (ir ao guichê, chegar à sede, comparecer à sessão) continuam 100% VI!",
              },
              {
                front: "VTD + OD (Tomada direta) vs. VTI + OI (Adaptador)",
                hint: "Teste de 'ISSO' vs. 'A/DE/EM ISSO'",
                back: "VTD pede OD em linha reta sem preposição ('protocolou ISSO'); VTI exige OI por ponte preposicional ('precisou DISSO', 'obedece A ISSO', 'confiou NISSO').",
              },
              {
                front: "VTDI (Carteiro de duas mãos)",
                hint: "Bitransitivo = OD + OI juntos",
                back: "Pede ao mesmo tempo algo sem preposição (OD) + a alguém/algo com preposição (OI). Ex: 'Entregou o recibo ao munícipe' / 'comunicou-lhe o resultado'.",
              },
              {
                front: "VL (Sinal de Igual = com tempo)",
                hint: "5 Famílias de Estado",
                back: "Zero ação: liga o sujeito a um estado (permanente, transitório, mudança, continuidade, aparência). Mas 'estar/ficar no arquivo' (lugar!) = VI!",
              },
              {
                front: "Falsa Preposição",
                hint: "Pref. Contagem/MG 2026 Q01",
                back: "Preposição dentro do complemento ('fachada revestida POR hieróglifos') pertence ao nome lá dentro, não ao verbo 'exibe' (= VTD).",
              },
              {
                front: "o/a vs. lhe vs. Camaleões & Pleonasmo",
                hint: "Endereços pronominais",
                back: "o/a/lo/no = OD (VTD). lhe = OI com prep. a para pessoa (VTI). me/te/se/nos/vos = dependem do verbo. 'Cumpriu com o dever' = OD preposicionado.",
              },
            ]}
          />

          <FeynmanCard
            title="Síntese Feynman de 3 Linhas · Eixo 2"
            lines={[
              "1. Transitar é atravessar: o verbo fecha sozinho (VI, mesmo com lugar!), atravessa direto até o OD (VTD), exige ponte preposicional até o OI (VTI), usa duas mãos (VTDI) ou apenas liga um estado sem ação (VL).",
              "2. Antes de chamar um verbo de VTI, desmonte contrações (no = em+o) e aplique o Teste de 'ISSO': se couber verbo + ISSO sem preposição antes, o verbo é VTD (caso da Falsa Preposição).",
              "3. Cada pronome tem endereço certo: o/a/lo/no só substitui Objeto Direto, lhe só substitui Objeto Indireto (a alguém), e me/te/se/nos/vos acompanham a transitividade do verbo.",
            ]}
          />
        </div>
      ),
      checkpointQuestions: [
        {
          num: "1",
          header: "Questão 04",
          banca: "**Banca:** Adaptada para o Padrão Instituto ACCESS | Cargo: Oficial Administrativo",
          statement:
            "Considere os seguintes períodos redigidos em um boletim diário de ocorrências da Prefeitura:\nI. *“Os agentes de trânsito **compareceram** ao cruzamento principal às sete horas.”*\nII. *“O coordenador administrativo **virou** o arquivo morto de cabeça para baixo.”*\nIII. *“Depois da informatização do protocolo, o sistema **virou** modelo estadual.”*\n\nA respeito da transitividade dos verbos em destaque no contexto exato de cada frase, assinale a afirmativa **CORRETA**:",
          options: {
            A: "Em I, *compareceram* é transitivo indireto porque vem seguido obrigatoriamente de preposição em *ao cruzamento*.",
            B: "Em II, *virou* é de ligação porque indica transformação súbita de estado na organização do arquivo morto.",
            C: "Em I, II e III, os três verbos são transitivos diretos porque trazem substantivos concretos logo após a ação.",
            D: "Em I, *compareceram* é intransitivo; em II, *virou* é transitivo direto; em III, *virou* é verbo de ligação.",
          },
          answer: "D",
          commentary:
            "**Gabarito Oficial: D**\n- **(D) CORRETA:** Em I, *ao cruzamento* indica lugar (`VI`); em II, *virou* expressa ação física sobre o arquivo (`VTD`); em III, *virou* equivale a “tornou-se” ligando estado ao sujeito (`VL`).\n- **(A), (B) e (C) ERRADAS:** Lugar não torna `VI` em `VTI`, e *virar* muda de transitividade conforme o contexto.",
        },
        {
          num: "2",
          header: "Questão 05",
          banca: "**Banca:** Adaptada para o Padrão Instituto ACCESS | Cargo: Oficial Administrativo",
          statement:
            "Assinale a alternativa que apresenta um emprego verbal e pronominal **CORRETO** de acordo com as regras de transitividade e regência na norma culta:",
          options: {
            A: "O chefe de gabinete assistiu o debate na Câmara Municipal e afirmou que obedeceria-no integralmente.",
            B: "O novo projeto municipal visa ao fortalecimento das feiras locais, razão pela qual os servidores lhe obedecem.",
            C: "O atendente pagou o cidadão na tesouraria logo depois de visar ao documento com o carimbo oficial.",
            D: "O candidato sempre aspirou o cargo de oficial administrativo e perdoou os concorrentes pelo atraso inicial.",
          },
          answer: "B",
          commentary:
            "**Gabarito Oficial: B**\n- **(B) CORRETA:** *Visar* (= almejar) pede preposição *a* (`visa ao fortalecimento`) e *obedecer* é `VTI` com preposição *a*, admitindo o pronome *lhe*.\n- **(A) ERRADA:** *Assistir* (= ver) pede *a* (`assistiu ao`) e *obedecer* não aceita *no*.\n- **(C) e (D) ERRADAS:** Pagar/perdoar pessoa exige *a*; aspirar cargo exige *a*; visar (= assinar) é `VTD`.",
        },
        {
          num: "3",
          header: "Questão 06",
          banca: "**Banca:** Adaptada para o Padrão Instituto ACCESS | Cargo: Oficial Administrativo",
          statement:
            "Analise a função sintática dos termos destacados nos trechos abaixo:\nI. *“O diretor **convocou-me** para revisar o edital de compras.”*\nII. *“O ofício final, a secretária já **o** protocolou antes do almoço.”*\nIII. *“A prefeitura **entregou** as cestas básicas **às famílias** cadastradas.”*\n\nAssinale a alternativa que classifica **CORRETAMENTE**, na ordem respectiva, os termos **`me`** (em I), **`o`** (em II) e **`às famílias`** (em III):",
          options: {
            A: "objeto indireto — objeto indireto pleonástico — objeto direto preposicionado",
            B: "objeto indireto — objeto direto simples — objeto direto preposicionado",
            C: "objeto direto — objeto direto pleonástico — objeto indireto",
            D: "objeto direto — objeto indireto simples — objeto indireto",
          },
          answer: "C",
          commentary:
            "**Gabarito Oficial: C**\n- **(C) CORRETA:** Em I, *convocar* é `VTD` (`me` = Objeto Direto); em II, *o* repete enfaticamente *O ofício final* (Objeto Direto Pleonástico); em III, *às famílias* recebe a ação indireta com preposição de *entregar* (Objeto Indireto).\n- **(A), (B) e (D) ERRADAS:** Invertem a função de *me* com `VTD` ou ignoram o pleonasmo enfático.",
        },
      ],
    },

    // =========================================================================
    // EIXO 3
    // =========================================================================
    {
      id: "eixo-3",
      index: 3,
      title: "Eixo 3 · Quem Manda no Verbo: O Sujeito, Seus 5 Tipos, Voz Passiva e o Trio do 'SE'",
      subtitle:
        "Apoio direto no Eixo 2: Teste da Concordância + SVG, Sujeito Determinado + Agente da Passiva, Paradas Rápidas 3.A e 3.B, o Trio do 'SE' e Oração Sem Sujeito.",
      estimatedMinutes: 35,
      render: () => (
        <div className="space-y-6">
          <AxisContextCard
            title="Classificando quem manda no verbo — inclusive quando há 'SE' ou nenhum sujeito"
            bridge="No Eixo 1 você aprendeu a separar Sujeito de Predicado; no Eixo 2 você dominou os 5 tipos de verbo (VI, VTD, VTI, VTDI, VL)."
            problemSolved="Nem sempre o sujeito aparece escrito ali na frente: às vezes está oculto na desinência verbal ('protocolamos'), às vezes aparece após um 'SE' (e saber se é VTD ou VTI resolve se o verbo vai ao plural!) e às vezes sequer existe sujeito ('Havia vagas')."
            roadmap={[
              "3.1 Achar qualquer sujeito pelo Teste da Concordância (+ Fluxograma em SVG + para eu × para mim)",
              "3.2 Sujeito Determinado: Simples, Composto e Oculto",
              "3.3 Voz Ativa vs. Voz Passiva Analítica: Sujeito Paciente e Agente da Passiva (+ Parada Rápida 3.A)",
              "3.4 Sujeito Indeterminado (3 Formas) e o Trio do 'SE' (+ Parada Rápida 3.B)",
              "3.5 Oração Sem Sujeito e os 6 Verbos Impessoais (haver × existir, fazer, ser horas)",
            ]}
          />

          {/* 3.1 Teste da Concordancia + SVG 2 */}
          <ProseSection number="3.1" title="Como Encontrar o Sujeito Sem Nunca Errar: O Teste da Concordância (+ SVG)">
            <p>
              Antes de sair decorando os nomes dos 5 tipos de sujeito, precisamos de um método mecânico que encontre o
              Sujeito mesmo quando ele estiver escondido lá no final de uma frase gigante. A técnica nasce de uma regra
              simples: <strong>o Sujeito e o Verbo formam um casamento obrigatório de número</strong>.
            </p>
            <p>
              Sempre que o verdadeiro Sujeito muda do singular para o plural, o verbo é obrigado a mudar junto! Além disso,
              há uma barreira inviolável: <strong>o núcleo do Sujeito jamais começa com preposição</strong> (<em>de, em,
              para, por</em>). É exatamente por isso que nunca podemos escrever <em>“para mim revisar”</em>!
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Teste Definitivo da Concordância (Prova dos 9)",
                  badge: "INFALÍVEL",
                  accent: "indigo",
                  summary:
                    "Mude a expressão suspeita entre singular e plural. Se o verbo for OBRIGADO a mudar junto, você encontrou o Sujeito exato!",
                  examplesTitle: "Exemplos · Testando no Singular ↔ Plural",
                  examples: [
                    {
                      label: "Cotidiano · Mudança obrigatória do verbo",
                      sentence: "“O processo chegou hoje.” → “Os processos chegaram hoje.”",
                      tags: [{ label: "SUJEITO", value: "O processo / Os processos (mudou o verbo!)", color: "indigo" }],
                      explanation: "O verbo foi obrigado a variar para 'chegaram' → Sujeito confirmado!",
                    },
                    {
                      label: "Rotina de Prefeitura · Núcleo partitivo",
                      sentence: "“A maioria dos servidores aprovou (ou aprovaram) a escala.”",
                      tags: [{ label: "NÚCLEO", value: "maioria (sem preposição)", color: "emerald" }],
                      explanation:
                        "O núcleo exato é 'maioria' (singular), aceitando atração opcional pelo plural 'dos servidores' em expressões partitivas.",
                    },
                  ],
                },
                {
                  term: "2. Regra de Ouro: Núcleo Sem Preposição (para eu vs. para mim)",
                  badge: "PARA EU vs. PARA MIM",
                  accent: "rose",
                  summary:
                    "O núcleo do sujeito nunca vem regido por preposição. Diante de verbo no infinitivo, o sujeito usa sempre pronome reto (eu/tu/nós): “para eu conferir”, jamais “para mim conferir” — nem junte 'de + eu' em 'deu'!",
                  examplesTitle: "Exemplos · Com Verbo Depois ('eu') vs. Sem Verbo ('mim')",
                  examples: [
                    {
                      label: "Caso Limite (A) · Há verbo no infinitivo depois → pede 'eu'",
                      sentence: "“Trouxeram a ata para eu revisar.”",
                      tags: [{ label: "COM VERBO", value: "eu (Sujeito de revisar!)", color: "emerald" }],
                      explanation:
                        "Quem conjuga o verbo 'revisar' é o Sujeito. Como 'mim' jamais pode ser sujeito, exige-se o pronome reto 'eu'!",
                    },
                    {
                      label: "Caso Limite (B) · Não há verbo depois → usa 'mim'",
                      sentence: "“Entregaram o documento para mim.”",
                      tags: [{ label: "SEM VERBO", value: "mim (complemento final)", color: "sky" }],
                      explanation:
                        "Aqui não existe nenhum verbo após o pronome: 'mim' funciona corretamente como complemento preposicionado no fim da frase.",
                    },
                  ],
                },
              ]}
            />

            {/* SVG 2 */}
            <ZoomableDiagram
              title="Fluxograma em 3 Perguntas para Classificar Qualquer Sujeito"
              badge="MAPA DE DECISÃO"
            >
              <svg
                viewBox="0 0 760 400"
                className="w-full h-auto"
                role="img"
                aria-label="Fluxograma em 3 perguntas para classificar qualquer tipo de sujeito"
              >
                <rect x="8" y="8" width="744" height="384" rx="14" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />

                {/* Pergunta 1 */}
                <rect x="28" y="26" width="320" height="68" rx="12" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />
                <text x="188" y="51" textAnchor="middle" fill="#a5b4fc" fontSize="11.5" fontWeight="bold" fontFamily="sans-serif">
                  PERGUNTA 1
                </text>
                <text x="188" y="70" textAnchor="middle" fill="#ffffff" fontSize="13.5" fontWeight="bold" fontFamily="sans-serif">
                  O verbo é IMPESSOAL?
                </text>
                <text x="188" y="86" textAnchor="middle" fill="#cbd5e1" fontSize="10.5" fontFamily="sans-serif">
                  (Haver = existir, Fazer tempo/clima, Chover, Ser horas)
                </text>

                {/* Seta SIM 1 */}
                <line x1="348" y1="60" x2="424" y2="60" stroke="#f59e0b" strokeWidth="2.2" />
                <polygon points="424,54 436,60 424,66" fill="#f59e0b" />
                <text x="388" y="51" textAnchor="middle" fill="#fcd34d" fontSize="11.5" fontWeight="bold" fontFamily="sans-serif">
                  SIM
                </text>

                {/* Resultado 1 */}
                <rect x="440" y="26" width="292" height="68" rx="12" fill="#451a03" stroke="#f59e0b" strokeWidth="2" />
                <text x="586" y="53" textAnchor="middle" fill="#fde68a" fontSize="13.5" fontWeight="bold" fontFamily="sans-serif">
                  ORAÇÃO SEM SUJEITO
                </text>
                <text x="586" y="74" textAnchor="middle" fill="#fef3c7" fontSize="11" fontFamily="sans-serif">
                  Ex.: “Havia filas.” / “Faz dois dias.”
                </text>

                {/* Seta NÃO 1 */}
                <line x1="188" y1="94" x2="188" y2="122" stroke="#94a3b8" strokeWidth="2.2" />
                <polygon points="182,122 188,132 194,122" fill="#94a3b8" />
                <text x="204" y="116" fill="#cbd5e1" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  NÃO
                </text>

                {/* Pergunta 2 */}
                <rect x="28" y="134" width="320" height="68" rx="12" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />
                <text x="188" y="159" textAnchor="middle" fill="#a5b4fc" fontSize="11.5" fontWeight="bold" fontFamily="sans-serif">
                  PERGUNTA 2
                </text>
                <text x="188" y="178" textAnchor="middle" fill="#ffffff" fontSize="13.5" fontWeight="bold" fontFamily="sans-serif">
                  O sujeito está ESCRITO na frase?
                </text>
                <text x="188" y="194" textAnchor="middle" fill="#cbd5e1" fontSize="10.5" fontFamily="sans-serif">
                  (Antes ou depois do verbo, sem preposição no núcleo)
                </text>

                {/* Seta SIM 2 */}
                <line x1="348" y1="168" x2="424" y2="168" stroke="#10b981" strokeWidth="2.2" />
                <polygon points="424,162 436,168 424,174" fill="#10b981" />
                <text x="388" y="159" textAnchor="middle" fill="#34d399" fontSize="11.5" fontWeight="bold" fontFamily="sans-serif">
                  SIM
                </text>

                {/* Resultado 2 */}
                <rect x="440" y="134" width="292" height="68" rx="12" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
                <text x="586" y="158" textAnchor="middle" fill="#a7f3d0" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                  SUJEITO DETERMINADO
                </text>
                <text x="586" y="177" textAnchor="middle" fill="#ffffff" fontSize="11.5" fontWeight="bold" fontFamily="sans-serif">
                  1 núcleo = SIMPLES · 2+ núcleos = COMPOSTO
                </text>
                <text x="586" y="193" textAnchor="middle" fill="#d1fae5" fontSize="10.5" fontFamily="sans-serif">
                  (Inclui passiva com “se”: “Alugam-se salas.”)
                </text>

                {/* Seta NÃO 2 */}
                <line x1="188" y1="202" x2="188" y2="230" stroke="#94a3b8" strokeWidth="2.2" />
                <polygon points="182,230 188,240 194,230" fill="#94a3b8" />
                <text x="204" y="224" fill="#cbd5e1" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  NÃO está escrito
                </text>

                {/* Pergunta 3 */}
                <rect x="28" y="242" width="320" height="68" rx="12" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />
                <text x="188" y="266" textAnchor="middle" fill="#a5b4fc" fontSize="11.5" fontWeight="bold" fontFamily="sans-serif">
                  PERGUNTA 3
                </text>
                <text x="188" y="285" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                  Dá para saber QUEM É pelo verbo?
                </text>
                <text x="188" y="301" textAnchor="middle" fill="#cbd5e1" fontSize="10.5" fontFamily="sans-serif">
                  (Terminação eu / tu / nós ou frase anterior)
                </text>

                {/* Seta SIM 3 */}
                <line x1="348" y1="276" x2="424" y2="276" stroke="#38bdf8" strokeWidth="2.2" />
                <polygon points="424,270 436,276 424,282" fill="#38bdf8" />
                <text x="388" y="267" textAnchor="middle" fill="#38bdf8" fontSize="11.5" fontWeight="bold" fontFamily="sans-serif">
                  SIM
                </text>

                {/* Resultado 3 */}
                <rect x="440" y="242" width="292" height="68" rx="12" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="2" />
                <text x="586" y="269" textAnchor="middle" fill="#bae6fd" fontSize="13.5" fontWeight="bold" fontFamily="sans-serif">
                  SUJEITO OCULTO (Elíptico)
                </text>
                <text x="586" y="290" textAnchor="middle" fill="#e0f2fe" fontSize="11" fontFamily="sans-serif">
                  Ex.: “Protocolamos o ofício.” (= Nós)
                </text>

                {/* Seta NÃO 3 (conectando explicitamente à caixa de baixo!) */}
                <line x1="188" y1="310" x2="188" y2="332" stroke="#c084fc" strokeWidth="2.2" />
                <polygon points="182,332 188,342 194,332" fill="#c084fc" />
                <text x="204" y="328" fill="#e9d5ff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  NÃO dá para saber quem é
                </text>

                {/* Resultado 4 */}
                <rect x="28" y="344" width="704" height="36" rx="10" fill="#3b0764" stroke="#a855f7" strokeWidth="2" />
                <text x="380" y="367" textAnchor="middle" fill="#f3e8ff" fontSize="12.5" fontWeight="bold" fontFamily="sans-serif">
                  SUJEITO INDETERMINADO — Ex.: “Bateram à porta.” | “Precisa-se de técnicos.”
                </text>
              </svg>
            </ZoomableDiagram>

            <AnalogyBox title="Analogia do Volante e das Rodas" tag="Prova dos 9">
              Quando você gira o volante (<strong>Sujeito</strong>) entre singular e plural, as rodas (<strong>Verbo</strong>)
              viram junto obrigatoriamente; se mexer uma expressão e o verbo não mudar, você pegou só um acessório do painel,
              não o Sujeito!
            </AnalogyBox>

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Juntar preposição com sujeito formando contração proibida: 'Apesar dos esforços fracassarem...' (contraiu de + os antes do sujeito 'os esforços')."
              escape="Se um substantivo depois de 'de / em / para' faz a ação de um infinitivo ('fracassarem', 'revisar'), separe a preposição: 'Apesar de os esforços fracassarem' e 'para eu revisar'!"
            />
          </ProseSection>

          {/* 3.2 Sujeito Determinado */}
          <ProseSection number="3.2" title="Sujeito Determinado: Simples, Composto e Oculto (Elíptico / Desinencial)">
            <p>
              Sempre que conseguimos identificar com exatidão <strong>quem está comandando o verbo</strong>, temos um{" "}
              <strong>Sujeito Determinado</strong>. Para separá-lo em seus três tipos, faça apenas duas perguntas rápidas:
              <em>(1) o sujeito está escrito na frase?</em> e <em>(2) quantos núcleos principais há ali dentro?</em>
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Sujeito Determinado Simples",
                  badge: "1 ÚNICO NÚCLEO",
                  accent: "indigo",
                  summary:
                    "Está escrito na oração e possui apenas 1 substantivo/pronome central no núcleo — mesmo que esse núcleo esteja no plural ou cercado de várias palavras.",
                  examplesTitle: "Exemplos · 1 Único Núcleo (Mesmo no Plural!)",
                  examples: [
                    {
                      label: "Cotidiano · Plural com 1 único núcleo continua Simples",
                      sentence: "“As três janelas da sala quebraram.”",
                      tags: [{ label: "NÚCLEO", value: "1 núcleo (janelas) = Sujeito Simples", color: "indigo" }],
                      explanation: "Mesmo com várias palavras e no plural, só há um nome central comandando o verbo.",
                    },
                    {
                      label: "Rotina de Prefeitura · Bloco longo com 1 núcleo",
                      sentence: "“Os trinta processos urgentes chegaram ao protocolo.”",
                      tags: [{ label: "NÚCLEO", value: "1 núcleo (processos) = Sujeito Simples", color: "indigo" }],
                      explanation: "Plural com 1 só núcleo não vira Sujeito Composto!",
                    },
                  ],
                },
                {
                  term: "2. Sujeito Determinado Composto",
                  badge: "2 OU MAIS NÚCLEOS",
                  accent: "emerald",
                  summary:
                    "Está escrito na oração e reúne 2 ou mais núcleos somados comandando o mesmo verbo (“O prefeito e o secretário assinaram”).",
                  examplesTitle: "Exemplos · 2 ou Mais Núcleos Somados",
                  examples: [
                    {
                      label: "Cotidiano · Dois seres diferentes somados",
                      sentence: "“A porta e a janela quebraram.”",
                      tags: [{ label: "NÚCLEOS", value: "2 núcleos (porta + janela) = Sujeito Composto", color: "emerald" }],
                      explanation: "Agora há duas coisas distintas ligadas somando forças no mesmo verbo.",
                    },
                    {
                      label: "Rotina de Prefeitura · Dois cargos comandando o verbo",
                      sentence: "“O prefeito e o secretário assinaram a portaria.”",
                      tags: [{ label: "NÚCLEOS", value: "2 núcleos (prefeito + secretário) = Sujeito Composto", color: "emerald" }],
                      explanation: "Dois substantivos centrais somados determinam o plural do verbo 'assinaram'.",
                    },
                  ],
                },
                {
                  term: "3. Sujeito Determinado Oculto (Elíptico / Desinencial)",
                  badge: "REVELADO PELA TERMINAÇÃO OU TEXTO",
                  accent: "sky",
                  summary:
                    "Não aparece escrito naquela oração, mas nós sabemos exatamente quem é pela desinência verbal ('protocolamos' = nós) ou pela frase imediatamente anterior.",
                  examplesTitle: "Exemplos · Oculto na Desinência ou na Oração Anterior",
                  examples: [
                    {
                      label: "Rotina de Prefeitura · Oculto pela desinência verbal",
                      sentence: "“Protocolamos o edital no sistema hoje pela manhã.”",
                      tags: [{ label: "DESINÊNCIA -MOS", value: "Nós → Sujeito Oculto", color: "sky" }],
                      explanation: "Não está escrito 'Nós', mas a terminação '-mos' identifica o sujeito com 100% de certeza.",
                    },
                    {
                      label: "Caso Limite · Elíptico retomado da oração anterior",
                      sentence: "“O oficial conferiu as guias; em seguida, arquivou todos os comprovantes.”",
                      tags: [{ label: "2ª ORAÇÃO", value: "Ele (o oficial) → Sujeito Oculto / Elíptico", color: "amber" }],
                      explanation: "Sabemos pelo contexto imediatamente anterior que quem arquivou foi o oficial.",
                    },
                  ],
                },
              ]}
            />

            <AnalogyBox title="Analogia da Assinatura na Portaria" tag="Contando Núcleos">
              Uma assinatura coletiva de um grupo inteiro (<em>“Os cinquenta candidatos”</em>) continua tendo{" "}
              <strong>1 só núcleo = Simples</strong>; duas assinaturas separadas (<em>“O prefeito e o secretário”</em>) ={" "}
              <strong>Composto</strong>; e um despacho onde só aparece a terminação <em>-mos</em> (
              <em>“Protocolamos ontem”</em>) = <strong>Oculto</strong>!
            </AnalogyBox>

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Marcar que 'Os trinta processos urgentes' é Sujeito Composto só por ter várias palavras ou estar no plural."
              escape="Não conte o plural nem o tamanho da frase: pergunte quantas coisas diferentes somadas formam o bloco. Só existe 1 grupo (processos) = 1 núcleo = Sujeito Simples!"
            />
          </ProseSection>

          {/* 3.3 Voz Ativa vs Voz Passiva Analitica e Agente da Passiva */}
          <ProseSection number="3.3" title="Voz Ativa vs. Voz Passiva Analítica: Sujeito Paciente e Agente da Passiva">
            <p>
              Nem sempre quem manda no verbo é quem executa a ação na realidade! Às vezes quem escreve quer dar destaque ao{" "}
              <strong>resultado que sofreu a ação</strong> em vez de focar em quem fez. Compare:{" "}
              <em>“A banca anulou duas questões”</em> (foco na banca = <strong>Voz Ativa</strong>) vs.{" "}
              <em>“Duas questões foram anuladas pela banca”</em> (foco nas questões = <strong>Voz Passiva Analítica</strong>).
            </p>
            <p>
              Quando fazemos essa virada, quem sofria a ação passa a comandar o verbo no plural como{" "}
              <strong>Sujeito Paciente</strong>, e quem praticava a ação na ativa vai para os bastidores precedido de
              preposição (<code>por / pelo / pela / de</code>), ganhando o nome de <strong>Agente da Passiva</strong>!
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Sujeito Paciente (na Voz Passiva Analítica)",
                  badge: "SOFRE A AÇÃO",
                  accent: "emerald",
                  summary:
                    "Ocorre na estrutura 'verbo auxiliar ser/estar + particípio': quem recebe a ação torna-se o Sujeito Paciente e obriga o auxiliar a concordar com ele no singular ou plural.",
                  examplesTitle: "Exemplo · Concordância do Sujeito Paciente",
                  examples: [
                    {
                      label: "Caso Limite · Sujeito Paciente plural exige auxiliar no plural",
                      sentence: "“Novos processos eletrônicos foram implantados pela diretoria.”",
                      tags: [
                        { label: "SUJEITO PACIENTE", value: "Novos processos eletrônicos", color: "emerald" },
                        { label: "CONCORDÂNCIA", value: "processos (plural) → foram implantados", color: "indigo" },
                      ],
                      explanation:
                        "Nunca deixe 'Foi implantado novos processos' no singular: 'novos processos eletrônicos' é o Sujeito Paciente e comanda o plural do auxiliar!",
                    },
                  ],
                },
                {
                  term: "2. Agente da Passiva",
                  badge: "QUEM AGE COM POR / PELO / DE",
                  accent: "amber",
                  summary:
                    "É o termo preposicionado (por, pelo, pela, de) que representa o verdadeiro praticante da ação na Voz Passiva Analítica. Voltando para a voz ativa, ele vira o Sujeito!",
                  examplesTitle: "Exemplos · Identificando o Agente da Passiva na Prática",
                  examples: [
                    {
                      label: "Cotidiano · Voltando da Passiva para a Ativa",
                      sentence: "“As salas foram limpas pela equipe.”",
                      tags: [
                        { label: "SUJEITO PACIENTE", value: "As salas (sofreu a limpeza)", color: "indigo" },
                        { label: "AGENTE DA PASSIVA", value: "pela equipe", color: "amber" },
                      ],
                      explanation: "Na Voz Ativa ficaria: 'A equipe limpou as salas.' Quem virou Sujeito na ativa era o Agente da Passiva.",
                    },
                    {
                      label: "Rotina de Prefeitura · Contrato fiscalizado",
                      sentence: "“A obra foi fiscalizada pelo engenheiro responsável.”",
                      tags: [
                        { label: "SUJEITO PACIENTE", value: "A obra", color: "indigo" },
                        { label: "AGENTE DA PASSIVA", value: "pelo engenheiro responsável", color: "amber" },
                      ],
                      explanation:
                        "Na Voz Ativa: 'O engenheiro responsável fiscalizou a obra.' Logo, 'pelo engenheiro responsável' exerce a função de Agente da Passiva!",
                    },
                  ],
                },
              ]}
            />

            <AnalogyBox title="Analogia da Cadeira de Protagonista no Cartório" tag="Voz Ativa × Passiva">
              Na <strong>Voz Ativa</strong>, o oficial dirige a cena (<em>“O oficial carimbou a guia”</em>). Na{" "}
              <strong>Voz Passiva Analítica</strong>, trocam-se as cadeiras: a guia passa para o banco da frente como{" "}
              <strong>Sujeito Paciente</strong> (<em>“A guia foi carimbada...”</em>), e o oficial vai para os bastidores
              com <em>pelo</em> como <strong>Agente da Passiva</strong> (<em>“...pelo oficial”</em>)!
            </AnalogyBox>

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Chamar 'pelo engenheiro responsável' de Sujeito Simples só porque foi ele quem agiu na vida real — ou confundir 'enviado pelo correio' (meio!) com Agente da Passiva."
              escape="Passe a frase para a Voz Ativa! 'O engenheiro fiscalizou a obra' (faz sentido = Agente da Passiva). Já 'O correio enviou' (não: alguém enviou usando o correio como meio) = NÃO é Agente da Passiva!"
            />

            {/* PARADA RAPIDA 3.A */}
            <InlinePractice
              title="Parada Rápida 3.A · Fixe Concordância, Determinado e Agente da Passiva"
              subtitle="Resolva antes de entrar no Trio do 'SE' e Oração Sem Sujeito."
              questions={[
                {
                  prompt: "Assinale a frase em que há erro grave por usar 'mim' como se pudesse ser Sujeito:",
                  options: [
                    {
                      key: "A",
                      label: (
                        <>
                          “O diretor trouxe as pastas <u>para eu</u> conferir ainda hoje.”
                        </>
                      ),
                    },
                    {
                      key: "B",
                      label: (
                        <>
                          “A secretária entregou o processo revisado <u>para mim</u>.”
                        </>
                      ),
                    },
                    {
                      key: "C",
                      label: (
                        <>
                          “Os documentos chegaram cedo <u>para mim</u> protocolar no sistema.”
                        </>
                      ),
                    },
                  ],
                  correctKey: "C",
                  feedbackCorrect:
                    "Exato! Antes do verbo 'protocolar' exige-se o Sujeito 'eu' ('para eu protocolar'). Em (B) 'para mim' está certo porque não há verbo depois!",
                  feedbackWrong:
                    "Lembre: quem conjuga verbo é Sujeito ('eu'), nunca 'mim'! Olhe a opção (C): 'para mim protocolar' está errada.",
                },
                {
                  prompt: "Qual é a análise correta dos dois trechos destacados nesta frase em Voz Passiva Analítica?",
                  sentence: (
                    <>
                      “<u>As novas guias de pagamento</u> foram liberadas <u>pela tesouraria municipal</u>.”
                    </>
                  ),
                  options: [
                    { key: "A", label: "Sujeito Composto — Objeto Indireto." },
                    { key: "B", label: "Sujeito Simples Paciente — Agente da Passiva." },
                    { key: "C", label: "Objeto Direto — Sujeito Simples Agente." },
                  ],
                  correctKey: "B",
                  feedbackCorrect:
                    "Correto! 'As novas guias de pagamento' (1 núcleo: guias) sofre a liberação e puxa o plural 'foram liberadas' (Sujeito Simples Paciente), e 'pela tesouraria municipal' age na ativa (Agente da Passiva).",
                  feedbackWrong:
                    "Volte para a Voz Ativa: 'A tesouraria municipal liberou as novas guias'. Logo 'As novas guias' = Sujeito Paciente; 'pela tesouraria' = Agente da Passiva.",
                },
              ]}
            />
          </ProseSection>

          {/* 3.4 Sujeito Indeterminado e Trio do SE */}
          <ProseSection number="3.4" title='Sujeito Indeterminado (As 3 Formas) e o Trio do "SE" (PA × IIS × Pronome Reflexivo)'>
            <p>
              Agora você vai ver por que estudar o Eixo 2 antes do Eixo 3 torna o tópico mais difícil de Sintaxe
              completamente lógico! Quando alguém diz <em>“Bateram na porta”</em>, <strong>existe uma pessoa</strong>{" "}
              batendo — só não podemos ou não queremos dizer quem foi. Isso é <strong>Sujeito Indeterminado</strong>.
            </p>
            <p>
              E por que em certas frases com <strong>SE</strong> o verbo vai para o plural (
              <em>“Alugam-se salas”</em>), noutras o verbo fica obrigatoriamente travado no singular (
              <em>“Precisa-se de técnicos”</em>), e noutras concorda normalmente com um ser antes do verbo (
              <em>“O sistema se atualizava”</em>)? Tudo depende de{" "}
              <strong>qual tipo de verbo (<code>VTD</code> vs. <code>VTI/VI/VL</code>) está colado no “SE”</strong>!
            </p>

            <DefinitionBlocks
              title="As 3 Formas Oficiais de Sujeito Indeterminado (Uma por Vez)"
              items={[
                {
                  term: "Forma 1 · Verbo na 3ª Pessoa do Plural Sem Sujeito Anterior",
                  badge: "ELES (SEM REFERENTE)",
                  accent: "purple",
                  summary:
                    "O verbo aparece conjugado na 3ª pessoa do plural sem que nenhum sujeito tenha sido citado antes na frase ou no parágrafo imediatamente anterior.",
                  examplesTitle: "Exemplos · 3ª Pessoa do Plural Sem Sujeito Expresso",
                  examples: [
                    {
                      label: "Cotidiano · Não se sabe quem fez",
                      sentence: "“Protocolaram uma denúncia anônima no balcão.”",
                      tags: [{ label: "SUJEITO", value: "Indeterminado (alguém protocolou, sem identificar)", color: "purple" }],
                      explanation: "O verbo está em 'eles', mas o texto não informa quem são esses responsáveis.",
                    },
                    {
                      label: "Rotina de Prefeitura · Ação sem dono identificado",
                      sentence: "“Extraviam formulários quando falta controle.”",
                      tags: [{ label: "SUJEITO", value: "Indeterminado (3ª pessoa do plural)", color: "purple" }],
                      explanation: "Não existe referente anterior para 'extraviam' → Sujeito Indeterminado.",
                    },
                  ],
                },
                {
                  term: "Forma 2 · Verbo Transitivo Indireto, Intransitivo ou de Ligação (3ª pess. sing.) + “SE”",
                  badge: "TRAVADO NO SINGULAR",
                  accent: "amber",
                  summary:
                    "Aqui o pronome “SE” funciona como Índice de Indeterminação do Sujeito (IIS). Como esses verbos não têm Objeto Direto para virar sujeito, o verbo fica obrigatoriamente travado no singular.",
                  examplesTitle: "Exemplo · Verbo Intransitivo + “SE”",
                  examples: [
                    {
                      label: "Rotina de Prefeitura · Verbo Intransitivo + SE",
                      sentence: "“No setor jurídico, trabalha-se sob forte sigilo.”",
                      tags: [
                        { label: "VERBO", value: "trabalha (Intransitivo)", color: "sky" },
                        { label: "PAPEL DO 'SE'", value: "Índice de Indeterminação (IIS)", color: "amber" },
                      ],
                      explanation:
                        "Quem trabalha não trabalha algo direto. Logo, não há sujeito paciente e o verbo trava no singular → Sujeito Indeterminado.",
                    },
                  ],
                },
                {
                  term: "Forma 3 · Verbo no Infinitivo Impessoal (Sem Dono)",
                  badge: "AÇÃO GENÉRICA",
                  accent: "indigo",
                  summary:
                    "Um verbo no infinitivo aparece sem sujeito ligado a ele, expressando uma orientação ou regra geral válida para qualquer pessoa.",
                  examplesTitle: "Exemplo · Infinitivo Impessoal",
                  examples: [
                    {
                      label: "Rotina de Prefeitura · Regra geral sem agente",
                      sentence: "“É prudente exigir comprovante em todo protocolo.”",
                      tags: [{ label: "INFINITIVO", value: "exigir (sem sujeito ligado) = Indeterminado", color: "indigo" }],
                      explanation: "Não se diz exatamente quem deve exigir: vale para qualquer atendente no setor.",
                    },
                  ],
                },
              ]}
            />

            <DefinitionBlocks
              title='O Trio do "SE" (Um Papel por Vez)'
              items={[
                {
                  term: "1. Partícula Apassivadora (Verbo Transitivo Direto ou Bitransitivo + “SE”)",
                  badge: "TEM SUJEITO PACIENTE · VARIA NO PLURAL!",
                  accent: "emerald",
                  summary:
                    "Como o Verbo Transitivo Direto pede alvo sem preposição, o 'SE' transforma esse alvo no Sujeito Paciente — por isso o verbo concorda no singular ou no plural! Teste: 'Alugam-se salas' = 'Salas são alugadas' ✅.",
                  examplesTitle: "Exemplo · Partícula Apassivadora (Concorda no Plural!)",
                  examples: [
                    {
                      label: "Cotidiano · Verbo Transitivo Direto + SE",
                      sentence: "“Consertam-se impressoras rapidamente.”",
                      tags: [
                        { label: "TESTE PASSIVO", value: "Impressoras são consertadas ✅", color: "emerald" },
                        { label: "SUJEITO PACIENTE", value: "impressoras (puxa o plural!)", color: "indigo" },
                      ],
                      explanation:
                        "Como 'consertar' é Transitivo Direto, 'impressoras' torna-se Sujeito Simples Paciente e obriga o verbo a ir para o plural!",
                    },
                  ],
                },
                {
                  term: "2. Índice de Indeterminação do Sujeito (Verbo Transitivo Indireto, Intransitivo ou de Ligação + “SE”)",
                  badge: "TRAVADO NO SINGULAR!",
                  accent: "amber",
                  summary:
                    "Como Verbos Transitivos Indiretos, Intransitivos e de Ligação não têm Objeto Direto para virar sujeito, não aparece sujeito nenhum! Logo o verbo fica PROIBIDO de ir ao plural ('Precisa-se de técnicos').",
                  examplesTitle: "Exemplo · Índice de Indeterminação do Sujeito (Sempre Singular!)",
                  examples: [
                    {
                      label: "Cotidiano · Verbo Transitivo Indireto + preposição 'em' + SE",
                      sentence: "“Confia-se em servidores preparados.”",
                      tags: [
                        { label: "VERBO", value: "Confiar EM (Transitivo Indireto) + SE", color: "amber" },
                        { label: "SUJEITO", value: "Indeterminado (trava no singular!)", color: "rose" },
                      ],
                      explanation:
                        "Com preposição ('em servidores'), não dá para dizer 'Em servidores é confiado' — por isso o verbo fica travado no singular!",
                    },
                  ],
                },
                {
                  term: "3. Pronome Reflexivo (“SE” = A Si Mesmo)",
                  badge: "SUJEITO AGE EM SI PRÓPRIO",
                  accent: "sky",
                  summary:
                    "Há um sujeito claro (ou pronome 'que' retomando-o) praticando e sofrendo a ação em si mesmo ('um assento que se esterilizava'). Aceita trocar por 'a si mesmo'!",
                  examplesTitle: "Exemplo Real ACCESS · Pronome Reflexivo",
                  examples: [
                    {
                      label: "Caso Real ACCESS · Pref. Domingos Martins/ES 2023 Q05",
                      sentence: "“...um assento de vaso sanitário que se esterilizava chegando a 250 °C.”",
                      tags: [{ label: "GABARITO OFICIAL RECURSOS", value: "Pronome Reflexivo (a si mesmo)", color: "sky" }],
                      explanation:
                        "Não é Partícula Apassivadora nem Indeterminação porque o pronome relativo 'que' retoma o sujeito expresso ('um assento'): o próprio assento esterilizava A SI MESMO!",
                    },
                  ],
                },
              ]}
            />

            <AnalogyBox title="Analogia do Espelho × Telefone Anônimo × Placa de Imóvel" tag="Trio do SE">
              No <strong>Pronome Reflexivo</strong>, o sujeito olha no espelho e age em <strong>si mesmo</strong>; no{" "}
              <strong>Índice de Indeterminação</strong>, você ouve um telefonema anônimo sem descobrir quem ligou (verbo no
              singular); e na <strong>Partícula Apassivadora</strong>, a placa diz <em>“Vendem-se casas”</em> (= casas são vendidas →
              plural!).
            </AnalogyBox>

            <KeyTable
              title='Mapa de Gêmeos Confundíveis · O Trio Campeão do "SE"'
              headers={["Papel do “SE”", "Verbo Exigido", "Concordância", "Teste Prático de 5s"]}
              rows={[
                [
                  "Partícula Apassivadora (PA)",
                  "Verbo Transitivo Direto ou Bitransitivo + SE",
                  "Concorda com o Sujeito Paciente (vai ao plural!)",
                  "“Salas são alugadas” ✅",
                ],
                [
                  "Índice de Indeterminação (IIS)",
                  "Transitivo Indireto, Intransitivo ou Ligação + SE",
                  "Travado no singular!",
                  "❌ “De técnicos é precisado”",
                ],
                [
                  "Pronome Reflexivo",
                  "Sujeito claro age sobre si próprio",
                  "Concorda com esse sujeito",
                  "Troca por “a si mesmo”",
                ],
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Escrever 'Necessitam-se de digitadores' ou 'Tratam-se de casos urgentes' no plural!"
              escape="Viu Verbo + SE seguido de preposição (de, em, a, com)? Trave o verbo 100% no singular imediatamente ('Necessita-se de...', 'Trata-se de...') — é IIS com Sujeito Indeterminado!"
            />

            {/* PARADA RAPIDA 3.B */}
            <InlinePractice
              title='Parada Rápida 3.B · Fixe Agora o Trio do "SE"'
              subtitle="Confira se você já distingue PA, IIS e Reflexivo sem vacilar."
              questions={[
                {
                  prompt: "Qual frase respeita corretamente a concordância verbal com o pronome 'se'?",
                  options: [
                    {
                      key: "A",
                      label: (
                        <>
                          “<u>Tratam-se de</u> documentos sigilosos guardados no gabinete.”
                        </>
                      ),
                    },
                    {
                      key: "B",
                      label: (
                        <>
                          “<u>Necessita-se de</u> três novos analistas para o arquivo municipal.”
                        </>
                      ),
                    },
                    {
                      key: "C",
                      label: (
                        <>
                          “<u>Precisam-se de</u> técnicos experientes em rede na Secretaria.”
                        </>
                      ),
                    },
                  ],
                  correctKey: "B",
                  feedbackCorrect:
                    "Perfeito! Tratar DE, necessitar DE e precisar DE são VTI com preposição DE → logo 'se' é IIS e proíbe o verbo no plural!",
                  feedbackWrong:
                    "Sempre que o verbo após 'se' exigir preposição (tratar DE, necessitar DE, precisar DE), o verbo é obrigado a ficar no singular ('Necessita-se de...').",
                },
                {
                  prompt: "Na frase abaixo, qual é o papel do termo destacado ('se')?",
                  sentence: (
                    <>
                      “O equipamento eletrônico que <u>se</u> desligava sozinho às dezoito horas.”
                    </>
                  ),
                  options: [
                    {
                      key: "A",
                      label: "Pronome Reflexivo, pois o sujeito claro (que = equipamento) executa a ação em si mesmo.",
                    },
                    { key: "B", label: "Índice de Indeterminação (IIS), pois não sabemos quem criou o equipamento." },
                    { key: "C", label: "Partícula Apassivadora (PA), pois aparelhos não praticam ações." },
                  ],
                  correctKey: "A",
                  feedbackCorrect:
                    "Exato! O equipamento desligava A SI MESMO (mesma lógica da questão oficial da Pref. Domingos Martins/ES 2023 Q05).",
                  feedbackWrong:
                    "Existe sujeito expresso ('que = o equipamento') fazendo a ação em si próprio ('a si mesmo') → Pronome Reflexivo!",
                },
              ]}
            />
          </ProseSection>

          {/* 3.5 Oracao Sem Sujeito */}
          <ProseSection
            number="3.5"
            title="Oração Sem Sujeito (Sujeito Inexistente) e os Verbos Impessoais (Haver, Fazer, Ser, Clima vs. Existir)"
          >
            <p>
              Para fechar o estudo do Sujeito, cuidado para nunca confundir <strong>Sujeito Indeterminado</strong> com{" "}
              <strong>Oração Sem Sujeito</strong>! No Indeterminado (<em>“Bateram à porta”</em>), alguém bateu — só não
              sabemos quem. Já na <strong>Oração Sem Sujeito</strong>, a língua entende que{" "}
              <strong>não existe ser nenhum por trás do evento</strong> (como chover, haver vagas ou passar o tempo).
            </p>
            <p>
              Como não há sujeito algum para mandar no verbo, esses <strong>Verbos Impessoais</strong> ficam congelados
              na <strong>3ª pessoa do singular</strong> — e passam esse congelamento até para o{" "}
              <strong>verbo auxiliar</strong> numa locução verbal (<em>“Deve haver vagas”</em>)! A única exceção que
              concorda no plural é o verbo <strong>SER</strong> em horas, datas e distâncias.
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Verbo Haver (= existir, ocorrer) ou Tempo Decorrido vs. Existir e Haver Auxiliar",
                  badge: "TRAVA NO SINGULAR + AUXILIAR",
                  accent: "rose",
                  summary:
                    "Quando 'haver' equivale a existir ou indica tempo passado ('Há três vagas', 'Deve haver soluções'), forma Oração Sem Sujeito e trava no singular — ao contrário de existir/ocorrer, que têm sujeito e vão ao plural!",
                  examplesTitle: "Exemplos · Haver Impessoal vs. Existir Pessoal vs. Haver Auxiliar",
                  examples: [
                    {
                      label: "Cotidiano (A) · 'Haver' = existir → Oração Sem Sujeito",
                      sentence: "“Havia três candidatos.”",
                      tags: [{ label: "Haver = existir", value: "Oração Sem Sujeito (singular obrigatório!)", color: "rose" }],
                      explanation: "Nunca escreva 'Haviam três candidatos': sem sujeito, o verbo fica na 3ª pessoa do singular.",
                    },
                    {
                      label: "Cotidiano (B) · 'Existir' → Tem Sujeito!",
                      sentence: "“Existiam três candidatos.”",
                      tags: [{ label: "Existir", value: "Tem Sujeito Simples (vai ao plural!)", color: "emerald" }],
                      explanation: "Com 'existir', 'três candidatos' é Sujeito Simples e obriga o verbo a ir para o plural!",
                    },
                    {
                      label: "Rotina de Prefeitura · Verbo auxiliar herda o singular",
                      sentence: "“Pode haver novas convocações neste semestre.”",
                      tags: [{ label: "LOCUÇÃO IMPESSOAL", value: "Auxiliar herda a trava no singular!", color: "amber" }],
                      explanation: "O auxiliar antes de 'haver' (= existir) fica proibido de ir ao plural (nunca 'Podem haver').",
                    },
                    {
                      label: "Caso Limite · 'Haver' auxiliar significando 'ter' vai ao plural!",
                      sentence: "“Os servidores haviam protocolado os documentos.”",
                      tags: [{ label: "haviam = tinham", value: "Sujeito Simples = Os servidores (plural certo!)", color: "emerald" }],
                      explanation:
                        "Aqui 'haviam' não significa 'existiam': funciona como auxiliar equivalente a 'tinham', concordando normalmente com 'Os servidores'!",
                    },
                  ],
                },
                {
                  term: "2. Verbo Fazer (Tempo Decorrido ou Clima)",
                  badge: "TRAVA NO SINGULAR + AUXILIAR",
                  accent: "amber",
                  summary:
                    "Indicando tempo passado ou temperatura/clima ('Faz cinco meses', 'Vai fazer duas semanas', 'Faz dias quentes'), fica 100% travado no singular — inclusive o verbo auxiliar!",
                  examplesTitle: "Exemplos · Fazer Impessoal e Seu Auxiliar",
                  examples: [
                    {
                      label: "Cotidiano · Tempo decorrido no singular",
                      sentence: "“Faz cinco meses que o edital foi publicado.”",
                      tags: [{ label: "Fazer (tempo)", value: "Oração Sem Sujeito (nunca 'Fazem'!)", color: "amber" }],
                      explanation: "Mesmo com 'cinco meses' no plural, o verbo fazer permanece congelado no singular.",
                    },
                    {
                      label: "Rotina de Prefeitura · Locução com 'fazer'",
                      sentence: "“Vai fazer quatro meses.”",
                      tags: [{ label: "LOCUÇÃO IMPESSOAL", value: "Auxiliar 'Vai' também trava no singular!", color: "amber" }],
                      explanation: "Nunca escreva 'Vão fazer quatro meses': o auxiliar herda a impessoalidade de 'fazer'.",
                    },
                  ],
                },
                {
                  term: "3. Fenômenos Naturais, Estar/Ficar (Clima) e Chega/Basta de",
                  badge: "REAL = SEM SUJEITO | FIGURADO = COM SUJEITO",
                  accent: "sky",
                  summary:
                    "'Choveu forte', 'Está frio', 'Basta de atrasos' = Oração Sem Sujeito. Mas se o fenômeno for figurado ('Choveram elogios ao edital'), ganha Sujeito Simples e varia no plural!",
                  examplesTitle: "Exemplos · Sentido Real vs. Sentido Figurado",
                  examples: [
                    {
                      label: "Sentido Real · Evento natural sem dono",
                      sentence: "“Choveu forte em Birigui e está muito abafado hoje.”",
                      tags: [{ label: "SENTIDO REAL", value: "Oração Sem Sujeito (singular)", color: "sky" }],
                      explanation: "Fenômeno climático real não tem sujeito gramatical.",
                    },
                    {
                      label: "Sentido Figurado · Ganha Sujeito e vai ao plural",
                      sentence: "“Choveram elogios ao novo edital.”",
                      tags: [{ label: "SENTIDO FIGURADO", value: "Sujeito Simples = elogios (plural!)", color: "emerald" }],
                      explanation: "Aqui 'elogios' funciona como sujeito figurado e puxa o verbo para o plural.",
                    },
                  ],
                },
                {
                  term: "4. Verbo SER (Horas, Datas e Distâncias)",
                  badge: "ÚNICA EXCEÇÃO NO PLURAL",
                  accent: "indigo",
                  summary:
                    "Embora seja Oração Sem Sujeito, o verbo SER concorda obrigatoriamente com o numeral: “São dez horas”, “É uma hora”, “Hoje são vinte de abril”, “Daqui até lá são dez quilômetros”.",
                  examplesTitle: "Exemplos · Concordância do Verbo 'Ser' com o Numeral",
                  examples: [
                    {
                      label: "Numeral 1 · Fica no singular",
                      sentence: "“É uma hora da tarde.”",
                      tags: [{ label: "CONCORDÂNCIA", value: "Numeral 1 → 'É'", color: "indigo" }],
                      explanation: "Continua Oração Sem Sujeito, concordando no singular com 'uma hora'.",
                    },
                    {
                      label: "Numeral 2+ · Vai ao plural",
                      sentence: "“São dez horas e daqui até lá são dez quilômetros.”",
                      tags: [{ label: "EXCEÇÃO NO PLURAL", value: "SER concorda com 'dez'", color: "emerald" }],
                      explanation: "É o único verbo impessoal que flexiona no plural acompanhando horas, datas ou distâncias.",
                    },
                  ],
                },
              ]}
            />

            <AnalogyBox title="Analogia da Chuva no Vidro" tag="Evento Sem Dono">
              Quando você olha pela janela e diz <em>“Choveu ontem”</em>, ninguém praticou a chuva gramaticalmente — o
              fato apenas ocorreu sem dono (<strong>Oração Sem Sujeito</strong>). Mas se você diz{" "}
              <em>“Choveram críticas no balcão”</em>, as <em>críticas</em> viraram donas figuradas e mandam no plural!
            </AnalogyBox>

            <KeyTable
              title="Mapa de Gêmeos Confundíveis · Impessoais vs. Pessoais"
              headers={["Construção na Prova", "Tipo de Sujeito", "Concordância"]}
              rows={[
                ["“Deve haver dez arquivos.”", "Oração Sem Sujeito", "Travado no singular"],
                ["“Devem existir dez arquivos.”", "Sujeito Simples (dez arquivos)", "Vai ao plural normalmente"],
                ["“Deve fazer cinco meses.”", "Oração Sem Sujeito", "Travado no singular (nunca Fazem!)"],
                ["“São quatorze horas / 10 km.”", "Oração Sem Sujeito", "SER concorda com o numeral"],
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Pôr verbo auxiliar no plural antes de haver/fazer ('Podem haver mudanças', 'Devem fazer dez dias') ou achar que 'haviam protocolado' está errado."
              escape="Troque 'haver' por 'existir' ou 'ter': deu 'existir/tempo'? Trave verbo e auxiliar no singular ('Pode haver'). Deu 'tinham' antes de particípio ('tinham protocolado')? Concorde no plural!"
            />
          </ProseSection>

          <FlipCardsGrid
            title="Flashcards de Memorização Ativa · Eixo 3"
            cards={[
              {
                front: "Teste da Concordância",
                hint: "Como achar o Sujeito?",
                back: "Mude o suspeito entre singular e plural; o termo de núcleo sem preposição que obriga o verbo a mudar junto é o Sujeito! ('para eu revisar', nunca 'para mim revisar').",
              },
              {
                front: "Simples × Composto × Oculto",
                hint: "Quantos núcleos mandam?",
                back: "Simples = 1 núcleo (mesmo no plural!). Composto = 2+ núcleos somados. Oculto = revelado pela terminação do verbo ou frase anterior.",
              },
              {
                front: "Voz Passiva Analítica + Agente",
                hint: "'A obra foi fiscalizada pelo diretor'",
                back: "'A obra' = Sujeito Paciente; 'pelo diretor' = Agente da Passiva (vira sujeito quando passamos a frase para a voz ativa).",
              },
              {
                front: "Trio do 'SE' (PA × IIS × Reflexivo)",
                hint: "Usa a transitividade do Eixo 2!",
                back: "VTD + se = PA (varia no plural). VTI/VI/VL + se = IIS (Sujeito Indeterminado, sempre singular!). Sujeito claro + 'a si mesmo' = Reflexivo.",
              },
              {
                front: "Haver / Fazer vs. Existir",
                hint: "Oração Sem Sujeito",
                back: "Haver (= existir/tempo) e Fazer (tempo/clima) travam até o auxiliar no singular ('Pode haver'). Existir/Ocorrer variam no plural!",
              },
              {
                front: "Ser (Horas, Datas, Distâncias)",
                hint: "Única exceção impessoal no plural",
                back: "É Oração Sem Sujeito, mas o verbo SER concorda com o numeral ('São dez horas', 'É uma hora', 'São 10 km').",
              },
            ]}
          />

          <FeynmanCard
            title="Síntese Feynman de 3 Linhas · Eixo 3"
            lines={[
              "1. O Sujeito é o termo de núcleo sem preposição que comanda o verbo: pode ser Determinado (Simples, Composto ou Oculto — inclusive paciente na Voz Passiva com Agente da Passiva), Indeterminado ou Inexistente.",
              "2. O trio do SE se resolve com a transitividade do Eixo 2: VTD + se = Partícula Apassivadora (varia no plural); VTI/VI/VL + se = Indeterminação (sempre singular); ação sobre si mesmo = Pronome Reflexivo.",
              "3. Haver (= existir/tempo) e Fazer (= tempo/clima) não têm sujeito e prendem o auxiliar no singular, diferente de Existir/Ocorrer (que concordam no plural) e Ser em horas/datas (que concorda com o numeral).",
            ]}
          />
        </div>
      ),
      checkpointQuestions: [
        {
          num: "1",
          header: "Questão 07",
          banca: "**Banca:** Adaptada para o Padrão Instituto ACCESS | Cargo: Oficial Administrativo",
          statement:
            "Leia o trecho abaixo e analise o papel sintático da palavra **`se`** e a classificação do sujeito nas três frases retiradas de documentos municipais:\nI. *“No setor de licitações, **precisa-se** de analistas experientes.”*\nII. *“Na nova sala de informática, **instalaram-se** vinte impressoras térmicas.”*\nIII. *“O protocolo automático era tão avançado que o próprio sistema **se** atualizava de madrugada.”*\n\nAssinale a alternativa que classifica **CORRETAMENTE**, respectivamente, a partícula **`se`** em I, II e III:",
          options: {
            A: "índice de indeterminação do sujeito (IIS) — partícula apassivadora (PA) — pronome reflexivo",
            B: "partícula apassivadora (PA) — índice de indeterminação do sujeito (IIS) — pronome reflexivo",
            C: "índice de indeterminação do sujeito (IIS) — pronome reflexivo — partícula apassivadora (PA)",
            D: "pronome reflexivo — partícula apassivadora (PA) — índice de indeterminação do sujeito (IIS)",
          },
          answer: "A",
          commentary:
            "**Gabarito Oficial: A**\n- **(A) CORRETA:** Em I, *precisar de* é `VTI` (`se` = **IIS**, sempre singular); em II, *instalar* é `VTD` (*vinte impressoras foram instaladas* → `se` = **PA**); em III, o sistema atualiza **a si mesmo** (**Pronome Reflexivo**).\n- **(B), (C) e (D) ERRADAS:** Invertem `IIS`, `PA` e reflexivo.",
        },
        {
          num: "2",
          header: "Questão 08",
          banca: "**Banca:** Adaptada para o Padrão Instituto ACCESS | Cargo: Oficial Administrativo",
          statement:
            "Considerando as vozes verbais e a classificação do sujeito nas rotinas administrativas da Prefeitura, analise a frase: *“O contrato emergencial de limpeza urbana foi prorrogado imediatamente pela diretoria de compras.”* Assinale a afirmativa **CORRETA**:",
          options: {
            A: "O termo *“pela diretoria de compras”* exerce função de sujeito simples porque pratica a ação de prorrogar na realidade administrativa.",
            B: "O sujeito da oração é indeterminado porque a voz passiva oculta o agente responsável pelo ato antes do verbo principal.",
            C: "A frase apresenta sujeito composto porque reúne os dois substantivos principais *“contrato”* e *“diretoria”* no mesmo período simples.",
            D: "O sujeito é simples paciente em *“O contrato emergencial de limpeza urbana”* e *“pela diretoria de compras”* atua como agente da passiva.",
          },
          answer: "D",
          commentary:
            "**Gabarito Oficial: D**\n- **(D) CORRETA:** Na Voz Passiva Analítica (*foi prorrogado*), *O contrato emergencial de limpeza urbana* recebe a ação como **Sujeito Simples Paciente**, enquanto *pela diretoria de compras* atua como **Agente da Passiva**.\n- **(A), (B) e (C) ERRADAS:** Quem traz preposição *pela* na voz passiva analítica é Agente da Passiva, nunca sujeito.",
        },
        {
          num: "3",
          header: "Questão 09",
          banca: "**Banca:** Adaptada para o Padrão Instituto ACCESS | Cargo: Oficial Administrativo",
          statement:
            "Durante a revisão ortográfica e sintática de quatro atas oficiais, apenas **UMA** frase empregou **Oração Sem Sujeito** em total conformidade com as regras de concordância da norma culta. Assinale-a:",
          options: {
            A: "Haviam diversos requerimentos protocolados sem assinatura na gaveta do atendimento ao público.",
            B: "Pode haver atrasos pontuais na entrega dos carnês, pois faz exatamente dois dias que chove forte.",
            C: "Existia várias pendências fiscais no relatório antigo antes da última atualização cadastral.",
            D: "Fazem exatamente quatro semanas que a nova equipe assumiu a coordenação dos processos.",
          },
          answer: "B",
          commentary:
            "**Gabarito Oficial: B**\n- **(B) CORRETA:** *Pode haver* (= existir), *faz* (tempo) e *chove* (fenômeno natural) são impessoais em **Oração Sem Sujeito**, permanecendo corretamente no singular (inclusive o auxiliar *Pode*).\n- **(A), (C) e (D) ERRADAS:** *Haviam* e *Fazem* deveriam ficar no singular; *Existia* deveria ir ao plural (*Existiam várias pendências*).",
        },
      ],
    },

    // =========================================================================
    // EIXO 4
    // =========================================================================
    {
      id: "eixo-4",
      index: 4,
      title: "Eixo 4 · Os 3 Tipos de Predicado e os Predicativos (Ações e Qualidades no Alvo Certo)",
      subtitle:
        "Quem manda dentro do Predicado (Verbal, Nominal e Verbo-Nominal + Fluxograma), Parada Rápida 4.A, Predicativo do Sujeito × Predicativo do Objeto e os 2 Testes matadores de prova.",
      estimatedMinutes: 28,
      render: () => (
        <div className="space-y-6">
          <AxisContextCard
            title="Descobrindo o núcleo do Predicado e separando qualidades passageiras"
            bridge="Você já sabe localizar o Sujeito (Eixos 1 e 3) e distinguir verbos de ação (intransitivos e transitivos) de verbos de ligação de estado (Eixo 2)."
            problemSolved="Tudo o que sobra fora do Sujeito é o Predicado. Agora vamos ver quem é o 'chefe' lá dentro (a ação, o estado, ou ambos!) e como não confundir uma qualidade solta dada pelo verbo com um adjetivo colado no substantivo ou com um advérbio."
            roadmap={[
              "4.1 Os 3 Tipos de Predicado (Verbal, Nominal e Verbo-Nominal + Fluxograma) + Parada Rápida 4.A",
              "4.2 Predicativo do Sujeito vs. Predicativo do Objeto",
              "4.3 Os 2 Testes Práticos de Prova: Teste do Pronome (o/a) e Teste do Feminino Plural",
            ]}
          />

          {/* 4.1 3 Tipos de Predicado + SVG 3 */}
          <ProseSection number="4.1" title="Os 3 Tipos de Predicado (Verbal, Nominal e Verbo-Nominal)">
            <p>
              Olhando para dentro do Predicado, a pergunta agora é simples: <strong>qual é a palavra mais importante ali?</strong>{" "}
              Quando dizemos <em>“Os fiscais analisaram o contrato”</em>, a informação principal está na ação de{" "}
              <em>analisar</em>. Já em <em>“Os documentos permaneceram intactos”</em>, o verbo é só ponte — a informação
              que você quer saber é o estado <strong>intactos</strong>!
            </p>
            <p>
              E existe uma terceira jogada inteligente da língua para economizar espaço: juntar{" "}
              <strong>uma ação + um estado momentâneo</strong> na mesma oração (<em>“Os fiscais saíram satisfeitos”</em>{" "}
              = saíram [ação] + estavam satisfeitos [estado]). Por isso existem exatamente{" "}
              <strong>3 Tipos de Predicado</strong>!
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Predicado Verbal",
                  badge: "1 NÚCLEO = O VERBO",
                  accent: "sky",
                  summary:
                    "Tem apenas 1 núcleo = um verbo significativo (de ação ou acontecimento). Transmite apenas o fato ou a ação, sem nenhuma qualidade atribuída por predicativo.",
                  examplesTitle: "Exemplos · Só Ação (Sem Qualidade de Predicativo)",
                  examples: [
                    {
                      label: "Cotidiano · Ação pura com objeto",
                      sentence: "“A técnica consertou o computador.”",
                      tags: [{ label: "PREDICADO VERBAL", value: "Só ação (consertou + o computador)", color: "sky" }],
                      explanation:
                        "Não existe nenhuma qualidade sendo ligada pelo verbo: o único núcleo do predicado é o verbo significativo 'consertou'.",
                    },
                    {
                      label: "Armadilha da Prefeitura · 'Estar' de lugar NÃO é Predicado Nominal!",
                      sentence: "“Os documentos estão no arquivo.”",
                      tags: [
                        { label: "TERMO SEGUINTE", value: "no arquivo = lugar físico", color: "rose" },
                        { label: "CLASSIFICAÇÃO", value: "Verbo Intransitivo → Predicado Verbal!", color: "sky" },
                      ],
                      explanation:
                        "'No arquivo' responde ONDE está, nunca uma qualidade ou estado — portanto 'estão' indica localização e forma Predicado Verbal!",
                    },
                  ],
                },
                {
                  term: "2. Predicado Nominal",
                  badge: "1 NÚCLEO = O NOME",
                  accent: "emerald",
                  summary:
                    "Formado por Verbo de Ligação + qualidade ou estado do sujeito. Como o verbo de ligação é apenas uma ponte, o núcleo do predicado é o nome (o Predicativo do Sujeito).",
                  examplesTitle: "Exemplos · Verbo de Ligação + Estado do Sujeito",
                  examples: [
                    {
                      label: "Cotidiano · Mudança de estado sem ação",
                      sentence: "“A técnica ficou satisfeita.”",
                      tags: [
                        {
                          label: "PREDICADO NOMINAL",
                          value: "Verbo de ligação (ficou) + estado (satisfeita)",
                          color: "emerald",
                        },
                      ],
                      explanation:
                        "O verbo 'ficou' apenas liga a técnica ao estado 'satisfeita'. Quem carrega a informação principal é o nome 'satisfeita'.",
                    },
                    {
                      label: "Contraste na Prefeitura · Agora sim 'estar' + qualidade!",
                      sentence: "“Os documentos estão arquivados e completos.”",
                      tags: [
                        {
                          label: "PREDICADO NOMINAL",
                          value: "Verbo de ligação (estão) + qualidades",
                          color: "emerald",
                        },
                      ],
                      explanation:
                        "Diferente de 'estão no arquivo' (lugar = Predicado Verbal), aqui 'arquivados e completos' são qualidades do sujeito → Predicado Nominal!",
                    },
                  ],
                },
                {
                  term: "3. Predicado Verbo-Nominal",
                  badge: "2 NÚCLEOS JUNTOS",
                  accent: "amber",
                  summary:
                    "Reúne 2 núcleos na mesma frase = 1 verbo de ação + 1 qualidade/estado momentâneo atribuído ao Sujeito ou ao Objeto.",
                  note: "Teste de 5 segundos: dá para quebrar a oração em duas frases independentes (1 ação + 1 estado simultâneo)!",
                  examplesTitle: "Exemplos · Ação + Qualidade ao Mesmo Tempo",
                  examples: [
                    {
                      label: "Cotidiano · Ação + qualidade do Sujeito",
                      sentence: "“A técnica saiu satisfeita da sala.”",
                      tags: [
                        { label: "NÚCLEO 1 (AÇÃO)", value: "saiu", color: "sky" },
                        { label: "NÚCLEO 2 (QUALIDADE)", value: "satisfeita (estado da técnica)", color: "amber" },
                      ],
                      explanation:
                        "Podemos quebrar em duas ideias: 'A técnica saiu da sala' (ação) + 'e ela estava satisfeita' (estado) → 2 núcleos = Predicado Verbo-Nominal!",
                    },
                    {
                      label: "Caso Limite · Ação + julgamento sobre o Objeto",
                      sentence: "“A comissão jurídica julgou improcedente a impugnação do edital.”",
                      tags: [
                        { label: "NÚCLEO 1 (AÇÃO)", value: "julgou (ação sobre o objeto)", color: "sky" },
                        { label: "NÚCLEO 2 (QUALIDADE)", value: "improcedente (qualidade da impugnação)", color: "amber" },
                      ],
                      explanation:
                        "Reúne a ação real de julgar + uma qualidade atribuída na hora ao Objeto Direto → 2 núcleos = Predicado Verbo-Nominal!",
                    },
                  ],
                },
              ]}
            />

            {/* SVG 3 */}
            <ZoomableDiagram
              title="Fluxograma em 2 Perguntas: Como Classificar os 3 Tipos de Predicado"
              badge="MAPA DE DECISÃO"
            >
              <svg
                viewBox="0 0 760 325"
                className="w-full h-auto"
                role="img"
                aria-label="Fluxograma em 2 perguntas para classificar Predicado Nominal, Predicado Verbal e Predicado Verbo-Nominal"
              >
                <rect x="8" y="8" width="744" height="309" rx="14" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />

                {/* Pergunta 1 */}
                <rect x="28" y="28" width="330" height="74" rx="12" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />
                <text x="193" y="51" textAnchor="middle" fill="#a5b4fc" fontSize="11.5" fontWeight="bold" fontFamily="sans-serif">
                  PERGUNTA 1
                </text>
                <text x="193" y="71" textAnchor="middle" fill="#ffffff" fontSize="13.5" fontWeight="bold" fontFamily="sans-serif">
                  O verbo é apenas PONTE DE ESTADO?
                </text>
                <text x="193" y="90" textAnchor="middle" fill="#cbd5e1" fontSize="11" fontFamily="sans-serif">
                  (ser, estar, parecer, ficar, permanecer, continuar)
                </text>

                {/* Seta SIM 1 */}
                <line x1="358" y1="65" x2="430" y2="65" stroke="#10b981" strokeWidth="2.2" />
                <polygon points="430,59 442,65 430,71" fill="#10b981" />
                <text x="396" y="56" textAnchor="middle" fill="#34d399" fontSize="11.5" fontWeight="bold" fontFamily="sans-serif">
                  SIM
                </text>

                {/* Resultado 1: Predicado Nominal */}
                <rect x="446" y="28" width="286" height="74" rx="12" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
                <text x="589" y="53" textAnchor="middle" fill="#a7f3d0" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
                  PREDICADO NOMINAL
                </text>
                <text x="589" y="72" textAnchor="middle" fill="#ffffff" fontSize="11.5" fontWeight="bold" fontFamily="sans-serif">
                  1 núcleo = a qualidade (Predicativo do Sujeito)
                </text>
                <text x="589" y="90" textAnchor="middle" fill="#d1fae5" fontSize="11" fontFamily="sans-serif">
                  Ex.: “O servidor está calmo.”
                </text>

                {/* Seta NÃO 1 */}
                <line x1="193" y1="102" x2="193" y2="134" stroke="#38bdf8" strokeWidth="2.2" />
                <polygon points="187,134 193,144 199,134" fill="#38bdf8" />
                <text x="208" y="128" fill="#7dd3fc" fontSize="11.5" fontWeight="bold" fontFamily="sans-serif">
                  NÃO — o verbo indica uma AÇÃO
                </text>

                {/* Pergunta 2 */}
                <rect x="115" y="146" width="530" height="60" rx="12" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="2" />
                <text x="380" y="169" textAnchor="middle" fill="#bae6fd" fontSize="11.5" fontWeight="bold" fontFamily="sans-serif">
                  PERGUNTA 2
                </text>
                <text x="380" y="191" textAnchor="middle" fill="#ffffff" fontSize="13.5" fontWeight="bold" fontFamily="sans-serif">
                  Além da ação, há uma QUALIDADE atribuída ao Sujeito ou ao Objeto?
                </text>

                {/* Seta NÃO 2 (Esquerda) */}
                <line x1="260" y1="206" x2="205" y2="232" stroke="#94a3b8" strokeWidth="2.2" />
                <polygon points="199,227 198,238 210,234" fill="#94a3b8" />
                <text x="195" y="220" textAnchor="middle" fill="#cbd5e1" fontSize="11.5" fontWeight="bold" fontFamily="sans-serif">
                  NÃO
                </text>

                {/* Resultado 2: Predicado Verbal */}
                <rect x="28" y="238" width="332" height="62" rx="12" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
                <text x="194" y="261" textAnchor="middle" fill="#f1f5f9" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
                  PREDICADO VERBAL
                </text>
                <text x="194" y="279" textAnchor="middle" fill="#cbd5e1" fontSize="11.5" fontFamily="sans-serif">
                  1 núcleo = só a ação · Ex.: “O fiscal chegou hoje.”
                </text>

                {/* Seta SIM 2 (Direita) */}
                <line x1="500" y1="206" x2="555" y2="232" stroke="#f59e0b" strokeWidth="2.2" />
                <polygon points="550,234 562,238 561,227" fill="#f59e0b" />
                <text x="565" y="220" textAnchor="middle" fill="#fcd34d" fontSize="11.5" fontWeight="bold" fontFamily="sans-serif">
                  SIM
                </text>

                {/* Resultado 3: Predicado Verbo-Nominal */}
                <rect x="396" y="238" width="336" height="62" rx="12" fill="#451a03" stroke="#f59e0b" strokeWidth="2" />
                <text x="564" y="261" textAnchor="middle" fill="#fde68a" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
                  PREDICADO VERBO-NOMINAL
                </text>
                <text x="564" y="279" textAnchor="middle" fill="#fef3c7" fontSize="11.5" fontFamily="sans-serif">
                  2 núcleos = ação + qualidade · Ex.: “Saiu satisfeito.”
                </text>
              </svg>
            </ZoomableDiagram>

            <AnalogyBox title="Analogia da Câmera Fotográfica" tag="Vídeo × Foto × Os Dois">
              O <strong>Predicado Verbal</strong> é uma câmera gravando movimento; o <strong>Predicado Nominal</strong>{" "}
              é uma foto parada de um estado; e o <strong>Predicado Verbo-Nominal</strong> grava o movimento e tira a
              foto ao mesmo tempo (<em>“saiu satisfeito”</em> = saiu + estava satisfeito!).
            </AnalogyBox>

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Ver 'estar' ou 'andar' ('Os fiscais estão no pátio') e marcar Predicado Nominal no reflexo!"
              escape="Confira o termo seguinte: é lugar físico ('no pátio', 'na mesa')? Não há qualidade nenhuma — é Verbo Intransitivo e Predicado Verbal!"
            />

            {/* PARADA RAPIDA 4.A */}
            <InlinePractice
              title="Parada Rápida 4.A · Fixe os 3 Tipos de Predicado Antes dos Predicativos"
              subtitle="Resolva antes de aprender a separar Predicativo do Sujeito e do Objeto."
              questions={[
                {
                  prompt: "Qual frase traz um Predicado Verbal disfarçado com o verbo 'estar'?",
                  options: [
                    {
                      key: "A",
                      label: (
                        <>
                          “A servidora <u>está</u> muito preocupada com o prazo final.”
                        </>
                      ),
                    },
                    {
                      key: "B",
                      label: (
                        <>
                          “Os balancetes contábeis <u>estão</u> completos e conferidos.”
                        </>
                      ),
                    },
                    {
                      key: "C",
                      label: (
                        <>
                          “Todos os contratos originais <u>estão</u> no cofre da tesouraria.”
                        </>
                      ),
                    },
                  ],
                  correctKey: "C",
                  feedbackCorrect:
                    "Acertou! 'No cofre da tesouraria' indica lugar físico (onde estão), sem nenhuma qualidade — logo 'estão' é verbo intransitivo e o predicado é Verbal.",
                  feedbackWrong:
                    "Em (A) e (B), 'preocupada' e 'completos' são qualidades (Predicado Nominal). Só em (C) 'no cofre' é lugar físico → Predicado Verbal!",
                },
                {
                  prompt: "Como se classifica o predicado desta oração com foco nos termos destacados?",
                  sentence: (
                    <>
                      “Os auditores <u>deixaram</u> o gabinete <u>preocupados</u>.”
                    </>
                  ),
                  options: [
                    { key: "A", label: "Predicado Nominal, pois 'preocupados' é o único foco da frase." },
                    {
                      key: "B",
                      label: "Predicado Verbo-Nominal, pois reúne uma ação real (deixaram) + um estado momentâneo (preocupados).",
                    },
                    { key: "C", label: "Predicado Verbal, porque todo verbo de ação anula o adjetivo." },
                  ],
                  correctKey: "B",
                  feedbackCorrect:
                    "Isso! Podemos dividir em duas frases: 'Os auditores deixaram o gabinete' + 'eles estavam preocupados' → 2 núcleos = Predicado Verbo-Nominal!",
                  feedbackWrong:
                    "Verifique: 'deixaram o gabinete' é ação real, mas 'preocupados' mostra o estado dos auditores naquele momento → 2 núcleos = Predicado Verbo-Nominal!",
                },
              ]}
            />
          </ProseSection>

          {/* 4.2 Predicativo do Sujeito vs Objeto */}
          <ProseSection number="4.2" title="Predicativo do Sujeito vs. Predicativo do Objeto: Qualidades no Alvo Certo">
            <p>
              Quando há uma qualidade atribuída pelo verbo dentro do predicado (seja no{" "}
              <strong>Predicado Nominal</strong> ou no <strong>Predicado Verbo-Nominal</strong>), precisamos apenas
              saber <strong>para quem a seta aponta</strong>: ela está descrevendo quem comanda o verbo (
              <strong>Sujeito</strong>) ou quem recebe a ação (<strong>Objeto</strong>)?
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Predicativo do Sujeito",
                  badge: "SETA APONTA PARA O SUJEITO",
                  accent: "emerald",
                  summary:
                    "Qualidade ou estado ligado ao Sujeito (seja via Verbo de Ligação no Predicado Nominal, como 'O edital é claro', seja junto de uma ação no Predicado Verbo-Nominal, como 'Os fiscais voltaram cansados').",
                  examplesTitle: "Exemplos · A Qualidade Descreve Quem Comanda o Verbo",
                  examples: [
                    {
                      label: "Cotidiano · Qualidade ligada ao Sujeito",
                      sentence: "“Os alunos entraram animados na sala.”",
                      tags: [{ label: "SETA DE 'ANIMADOS'", value: "Os alunos → Predicativo do Sujeito", color: "emerald" }],
                      explanation: "Quem estava animado ao entrar eram 'os alunos' (o próprio Sujeito).",
                    },
                    {
                      label: "Caso Limite · A concordância no feminino entrega o alvo!",
                      sentence: "“A fiscal encontrou o contribuinte nervosa.”",
                      tags: [{ label: "nervosa (fem.)", value: "concorda com a fiscal = Predicativo do Sujeito", color: "emerald" }],
                      explanation: "Como está no feminino, 'nervosa' refere-se obrigatoriamente a 'a fiscal' (Sujeito)!",
                    },
                  ],
                },
                {
                  term: "2. Predicativo do Objeto",
                  badge: "SETA APONTA PARA O OBJETO",
                  accent: "amber",
                  summary:
                    "Qualidade momentânea ou julgamento atribuído ao Objeto através de um verbo de ação (muito comum com julgar, considerar, declarar, nomear, eleger, encontrar, tornar).",
                  examplesTitle: "Exemplos · A Qualidade Descreve Quem Recebe a Ação",
                  examples: [
                    {
                      label: "Cotidiano · Estado atribuído ao Objeto Direto",
                      sentence: "“O professor encontrou a turma animada.”",
                      tags: [{ label: "SETA DE 'ANIMADA'", value: "a turma (Objeto Direto) → Predicativo do Objeto", color: "amber" }],
                      explanation: "Aqui quem estava animada era 'a turma' (Objeto Direto), não o professor!",
                    },
                    {
                      label: "Rotina de Prefeitura · Julgamento sobre ato administrativo",
                      sentence: "“O prefeito declarou nulo o pregão.”",
                      tags: [{ label: "ALVO DE 'NULO'", value: "o pregão (Objeto Direto) → Predicativo do Objeto", color: "amber" }],
                      explanation: "Quem ficou nulo foi o pregão (Objeto Direto), jamais o prefeito!",
                    },
                    {
                      label: "Caso Limite · Concordância masculina aponta para o Objeto",
                      sentence: "“A fiscal encontrou o contribuinte nervoso.”",
                      tags: [{ label: "nervoso (masc.)", value: "concorda com contribuinte = Predicativo do Objeto", color: "amber" }],
                      explanation: "Basta olhar o gênero masculino de 'nervoso' para confirmar que ele descreve 'o contribuinte' (Objeto Direto).",
                    },
                  ],
                },
              ]}
            />

            <AnalogyBox title="Analogia da Seta do Julgamento" tag="Sujeito × Objeto">
              Puxe uma seta da qualidade até o alvo que ela descreve: voltou para quem comanda o verbo ={" "}
              <strong>Predicativo do Sujeito</strong>; apontou para quem recebe a ação (o Objeto) ={" "}
              <strong>Predicativo do Objeto</strong>!
            </AnalogyBox>

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Empurrar o Predicativo do Objeto para antes do substantivo ('considerou válidos os argumentos') para parecer que faz parte do substantivo!"
              escape="Aplique o Teste do Pronome (o/a) que você aprenderá logo a seguir: 'considerou-os válidos'. Como 'válidos' sobrou do lado de fora, é Predicativo do Objeto!"
            />
          </ProseSection>

          {/* 4.3 Os 2 Testes Praticos */}
          <ProseSection number="4.3" title="Os 2 Testes Práticos de Prova: Teste do Pronome (o/a) e Teste do Feminino Plural">
            <p>
              Para fechar o Eixo 4 sem deixar nenhuma dúvida no ar, aqui estão <strong>dois testes mecânicos de 5 segundos</strong>{" "}
              para nunca mais confundir um <strong>Predicativo</strong> com uma qualidade fixa que mora dentro do
              substantivo (que batizaremos no Eixo 5) nem com um <strong>Advérbio</strong> invariável!
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "Teste 1 · Substitua o Objeto Direto pelo Pronome o / a / os / as",
                  badge: "ACHA PREDICATIVO DO OBJETO",
                  accent: "amber",
                  summary: (
                    <>
                      A qualidade <strong>SOBROU DO LADO DE FORA</strong> do pronome (<em>“julgou-o válido”</em>)? É{" "}
                      <strong>Predicativo do Objeto</strong>! Sumiu para dentro do pronome (<em>“aprovou-o”</em>)?
                      Era apenas qualidade fixa interna do nome (estudaremos o nome oficial no Eixo 5!).
                    </>
                  ),
                  examplesTitle: "Exemplos · Aplicando o Teste do Pronome (o/a)",
                  examples: [
                    {
                      label: "Sumiu dentro do pronome → Qualidade fixa interna (Eixo 5)",
                      sentence: "“Comprou o carro usado.” → “Comprou-o.”",
                      tags: [{ label: "SUMIU DENTRO", value: "usado (qualidade fixa interna · Eixo 5)", color: "sky" }],
                      explanation: "Como 'usado' desapareceu engolido pelo pronome 'o', não é Predicativo do Objeto.",
                    },
                    {
                      label: "Sobreviveu fora do pronome → Predicativo do Objeto!",
                      sentence: "“Encontrou o carro destruído.” → “Encontrou-o destruído.”",
                      tags: [{ label: "SOBROU FORA", value: "destruído = Predicativo do Objeto!", color: "amber" }],
                      explanation: "Se sobreviveu do lado de fora do pronome 'o/a', é Predicativo do Objeto!",
                    },
                  ],
                },
              ]}
            />

            <AnalogyBox title="Analogia da Pasta 'o' no Arquivo" tag="Dentro × Fora do Pronome">
              Qualidades fixas moram impressas dentro do documento: quando você guarda o documento na pasta{" "}
              <strong>“o”</strong> (<em>“aprovou-o”</em>), elas entram junto. Já o{" "}
              <strong>Predicativo do Objeto</strong> é um carimbo dado na hora pelo verbo — mesmo guardando na pasta{" "}
              <strong>“o”</strong>, o carimbo aparece fora (<em>“julgou-o válido”</em>)!
            </AnalogyBox>

            <DefinitionBlocks
              items={[
                {
                  term: "Teste 2 · Passe o Sujeito para o Feminino Plural (As servidoras...)",
                  badge: "SEPARA PREDICATIVO DE ADVÉRBIO",
                  accent: "emerald",
                  summary: (
                    <>
                      A palavra <strong>flexionou junto</strong> (<em>“As fiscais saíram satisfeitas”</em>)? É{" "}
                      <strong>Predicativo do Sujeito</strong>! Ficou travada invariável (
                      <em>“falaram alto / claro / rápido”</em>)? É <strong>Advérbio</strong>!
                    </>
                  ),
                  examplesTitle: "Exemplos · Aplicando o Teste do Feminino Plural",
                  examples: [
                    {
                      label: "Flexionou no feminino plural → Predicativo do Sujeito",
                      sentence: "“As atendentes retornaram motivadas.”",
                      tags: [{ label: "FLEXIONOU", value: "motivadas = Predicativo do Sujeito", color: "emerald" }],
                      explanation:
                        "Mudou para o feminino plural concordando com 'as atendentes' — logo é um adjetivo predicativo.",
                    },
                    {
                      label: "Travou invariável → Advérbio de Modo",
                      sentence: "“As atendentes digitaram rápido.”",
                      tags: [{ label: "INVARIÁVEL", value: "rápido = Advérbio (sem plural)", color: "rose" }],
                      explanation: "Advérbio jamais concorda no feminino ou plural (não se diz 'digitaram rápidas')!",
                    },
                  ],
                },
              ]}
            />

            <ExampleShowcase
              title="Aplicando os 2 Testes Juntos (Caso Limite de Prova)"
              items={[
                {
                  level: "Caso Limite · Os Dois Testes na Mesma Oração",
                  accent: "indigo",
                  cases: [
                    {
                      sentence: "“A comissão entregou a obra reformada e os técnicos saíram satisfeitos, falando claro.”",
                      tags: [
                        { label: "entregou-a reformada", value: "reformada = Predicativo do Objeto", color: "amber" },
                        { label: "técnicas satisfeitas", value: "satisfeitos = Predicativo do Sujeito", color: "emerald" },
                        { label: "falaram claro", value: "claro = Advérbio de Modo", color: "sky" },
                      ],
                      explanation: "Os dois testes resolvem três termos diferentes em menos de dez segundos.",
                    },
                  ],
                },
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Chamar 'claro' em 'Os engenheiros falaram claro' de Predicativo do Sujeito só porque coincide com masculino singular."
              escape="Troque 'Os engenheiros' por 'As engenheiras': se continuou 'falaram claro' sem virar 'claras', é Advérbio!"
            />
          </ProseSection>

          <FlipCardsGrid
            title="Flashcards de Memorização Ativa · Eixo 4"
            cards={[
              {
                front: "Verbal × Nominal × Verbo-Nominal",
                hint: "Quantos núcleos tem cada predicado?",
                back: "Verbal = 1 núcleo (só a ação). Nominal = 1 núcleo (a qualidade/estado com verbo de ligação). Verbo-Nominal = 2 núcleos juntos (ação + qualidade momentânea)!",
              },
              {
                front: "'Estar' de lugar vs. estado",
                hint: "Cuidado na armadilha!",
                back: "'O processo está na mesa' indica lugar físico (verbo intransitivo → Predicado Verbal). Só é Nominal quando liga a uma característica ('está completo').",
              },
              {
                front: "Teste do Pronome (o/a)",
                hint: "Como achar o Predicativo do Objeto?",
                back: "Troque o Objeto Direto por o/a/os/as. Se o adjetivo SOBRAR fora do pronome ('julgou-a improcedente'), é Predicativo do Objeto!",
              },
              {
                front: "Teste do Feminino Plural",
                hint: "Predicativo × Advérbio",
                back: "Mude o sujeito para 'Elas'. Mudou junto ('saíram animadas') = Predicativo do Sujeito! Ficou travado ('falaram alto/claro/rápido') = Advérbio!",
              },
              {
                front: "Sujeito × Objeto pela Concordância",
                hint: "Quem está recebendo o estado?",
                back: "'A fiscal encontrou o rapaz nervoso' (nervoso concorda com rapaz = Predicativo do Objeto). 'A fiscal encontrou o rapaz nervosa' (concorda com a fiscal = Predicativo do Sujeito).",
              },
            ]}
          />

          <FeynmanCard
            title="Síntese Feynman de 3 Linhas · Eixo 4"
            lines={[
              "1. O Predicado é Verbal (só ação), Nominal (só estado com Verbo de Ligação + Predicativo do Sujeito) ou Verbo-Nominal (ação significativa + qualidade momentânea ao mesmo tempo = 2 núcleos).",
              "2. Para não confundir Predicativo do Objeto com característica fixa interna do substantivo, troque o objeto por o/a: se a qualidade sobrar fora do pronome ('julgou-o válido'), é Predicativo do Objeto.",
              "3. Se você passar o sujeito para o feminino plural e o termo flexionar junto ('saíram satisfeitas'), é Predicativo do Sujeito; se ficar invariável ('falaram claro'), é Advérbio.",
            ]}
          />
        </div>
      ),
      checkpointQuestions: [
        {
          num: "1",
          header: "Questão 10",
          banca: "**Banca:** Adaptada para o Padrão Instituto ACCESS | Cargo: Oficial Administrativo",
          statement:
            "Leia as três frases retiradas de relatórios de atendimento da administração municipal e classifique o tipo de predicado presente em cada uma, na ordem apresentada:\nI. *“Os servidores da limpeza chegaram **cansados** ao turno da tarde.”*\nII. *“A ata da sessão extraordinária **permaneceu arquivada** no setor jurídico.”*\nIII. *“Os fiscais de posturas **notificaram** o estabelecimento ainda pela manhã.”*\n\nA classificação **CORRETA** dos predicados em I, II e III, respectivamente, é:",
          options: {
            A: "predicado verbal — predicado nominal — predicado verbo-nominal",
            B: "predicado nominal — predicado verbo-nominal — predicado verbal",
            C: "predicado verbo-nominal — predicado nominal — predicado verbal",
            D: "predicado verbo-nominal — predicado verbal — predicado nominal",
          },
          answer: "C",
          commentary:
            "**Gabarito Oficial: C**\n- **(C) CORRETA:** Em I há verbo de ação (`chegaram`) + estado do sujeito (`cansados`) → **Predicado Verbo-Nominal**; em II há Verbo de Ligação (`permaneceu`) + estado (`arquivada`) → **Predicado Nominal**; em III há apenas ação significativa (`notificaram`) → **Predicado Verbal**.\n- **(A), (B) e (D) ERRADAS:** Invertem a ordem entre Predicado Verbo-Nominal, Nominal e Verbal.",
        },
        {
          num: "2",
          header: "Questão 11",
          banca: "**Banca:** Adaptada para o Padrão Instituto ACCESS | Cargo: Oficial Administrativo",
          statement:
            "Assinale a alternativa em que o termo destacado desempenha a função sintática de **Predicativo do Objeto**:",
          options: {
            A: "A junta de licitações considerou **inexequível** a proposta apresentada pela última empresa.",
            B: "Todos os novos concursados entraram **confiantes** no auditório central da Prefeitura.",
            C: "O coordenador geral esteve **atarefado** durante todo o fechamento da folha mensal.",
            D: "Os arquivos antigos permanecem **organizados** nas estantes metálicas do subsolo.",
          },
          answer: "A",
          commentary:
            "**Gabarito Oficial: A**\n- **(A) CORRETA:** Pelo Teste do Pronome: *“A junta considerou-**a inexequível**.”* A qualidade *inexequível* atribui um julgamento ao Objeto Direto (*a proposta*), ficando fora do pronome *a*.\n- **(B), (C) e (D) ERRADAS:** *Confiantes*, *atarefado* e *organizados* qualificam o Sujeito (**Predicativo do Sujeito**).",
        },
        {
          num: "3",
          header: "Questão 12",
          banca: "**Banca:** Adaptada para o Padrão Instituto ACCESS | Cargo: Oficial Administrativo",
          statement:
            "No período *“A equipe de obras **entregou a creche reformada** e, logo depois, os engenheiros **saíram satisfeitos** e **falaram claro** aos jornalistas”*, avalie a classificação sintática correta dos termos **`reformada`**, **`satisfeitos`** e **`claro`**:",
          options: {
            A: "Todos os três termos funcionam como predicativos do sujeito porque concordam com ações verbais na mesma frase.",
            B: "*Reformada* atua como qualidade fixa interna inseparável do objeto; *satisfeitos* e *claro* atuam como qualidades dos engenheiros.",
            C: "*Reformada* e *claro* exercem papel de circunstância de modo invariável, enquanto *satisfeitos* é o único predicativo presente.",
            D: "*Reformada* é predicativo do objeto, *satisfeitos* é predicativo do sujeito e *claro* é advérbio de modo invariável.",
          },
          answer: "D",
          commentary:
            "**Gabarito Oficial: D**\n- **(D) CORRETA:** *“entregou-a reformada”* (*reformada* fica fora do pronome = **Predicativo do Objeto**); *“as engenheiras saíram satisfeitas”* (flexiona = **Predicativo do Sujeito**); *“as engenheiras falaram claro”* (invariável = **Advérbio de Modo**).\n- **(A), (B) e (C) ERRADAS:** Misturam advérbio invariável com adjetivos predicativos.",
        },
      ],
    },

    // =========================================================================
    // EIXO 5
    // =========================================================================
    {
      id: "eixo-5",
      index: 5,
      title: "Eixo 5 · Satélites do Nome, Circunstâncias e Chamamento: Adjuntos, CN, Aposto e Vocativo",
      subtitle:
        "Adjunto Adnominal (AA), o duelo campeão CN × AA (+ Fluxograma SVG + Parada Rápida 5.A), Adjunto Adverbial (10 valores, quão e vírgula), Aposto (Teste do '='), Vocativo e Parada Rápida 5.B.",
      estimatedMinutes: 35,
      render: () => (
        <div className="space-y-6">
          <AxisContextCard
            title="Fechando a oração com os satélites do nome, cenários e chamamentos"
            bridge="Nos Eixos 1 a 4 dominamos o esqueleto central (Sujeito, Verbo, Objetos e Predicativos). No Eixo 4.3 você já viu que certas qualidades somem dentro do pronome o/a quando substituímos um substantivo!"
            problemSolved="Faltam agora as peças que moram ao redor de nomes (Adjunto Adnominal × Complemento Nominal — campeão absoluto de cobrança na ACCESS!), os cenários que regulam a vírgula (Adjunto Adverbial), as explicações de nomes (Aposto) e o chamamento isolado (Vocativo)."
            roadmap={[
              "5.1 Adjunto Adnominal (AA): as 5 classes satélites dentro do substantivo",
              "5.2 Complemento Nominal (CN) e o Duelo CN × AA (+ Fluxograma SVG) + Parada Rápida 5.A",
              "5.3 Adjunto Adverbial: 10 valores semânticos, intensidade com 'quão' e vírgula no deslocamento",
              "5.4 Aposto (4 tipos + Teste do '=') e 5.5 Vocativo nas 3 posições + Parada Rápida 5.B",
            ]}
          />

          {/* 5.1 Adjunto Adnominal */}
          <ProseSection number="5.1" title="Adjunto Adnominal (AA): As 5 Classes Satélites que Moram Dentro do Substantivo">
            <p>
              Lembra daquela qualidade fixa que <strong>sumia engolida dentro do pronome <code>o/a</code></strong> quando
              fizemos o Teste 1 no Eixo 4 (<em>“Limpei a porta vermelha”</em> → <em>“Limpei-a”</em>)? Agora ela ganha
              seu nome oficial: <strong>Adjunto Adnominal (AA)</strong>!
            </p>
            <p>
              O prefixo <strong>ad-</strong> quer dizer <em>“junto de, ao lado de”</em>, e <strong>nominal</strong> vem de
              “nome” (substantivo). Então o <strong>Adjunto Adnominal</strong> é todo termo satélite que mora{" "}
              <strong>colado por dentro de um substantivo</strong> — acompanhando-o para onde quer que esse substantivo
              vá na frase!
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "Adjunto Adnominal = As 5 Classes Satélites do Substantivo",
                  badge: "MORA DENTRO DO SUBSTANTIVO",
                  accent: "indigo",
                  summary: (
                    <div className="space-y-2">
                      <p>
                        Todo termo acessório preso a um substantivo para determiná-lo ou caracterizá-lo por dentro,
                        pertencendo sempre a uma destas <strong>5 classes morfológicas</strong>:
                      </p>
                      <ol className="list-decimal pl-5 space-y-1 text-sm">
                        <li>
                          <strong>Artigo:</strong> <em>o, a, um, umas</em>
                        </li>
                        <li>
                          <strong>Adjetivo interno:</strong> <em>municipal, público, antigo</em>
                        </li>
                        <li>
                          <strong>Pronome adjetivo:</strong> <em>meu, sua, este, aqueles</em>
                        </li>
                        <li>
                          <strong>Numeral adjetivo:</strong> <em>dois, terceiro, cem</em>
                        </li>
                        <li>
                          <strong>Locução adjetiva:</strong> <em>de ferro, de Birigui, da prefeitura</em>
                        </li>
                      </ol>
                    </div>
                  ),
                  note: "Conexão direta com o Eixo 4: ao substituir o substantivo por o/a/os/as, tudo o que sumir dentro do pronome é Adjunto Adnominal!",
                },
              ]}
            />

            <AnalogyBox title="Analogia da Capa e Adesivos do Caderno" tag="Mora Dentro do Substantivo">
              Os <strong>Adjuntos Adnominais</strong> são os adesivos colados na capa do caderno: quando você entrega o
              caderno no balcão dizendo <em>“Entreguei-o”</em>, todos os adesivos entram juntos dentro do pronome <em>o</em>!
            </AnalogyBox>

            <ExampleShowcase
              title="Exemplos Progressivos · Adjunto Adnominal"
              items={[
                {
                  level: "Exemplo 1 · Cotidiano (Múltiplos satélites no mesmo substantivo)",
                  accent: "indigo",
                  cases: [
                    {
                      sentence: "“Aqueles dois novos relatórios de despesas chegaram.”",
                      tags: [
                        { label: "NÚCLEO", value: "relatórios", color: "indigo" },
                        { label: "4 ADJUNTOS ADNOMINAIS", value: "Aqueles + dois + novos + de despesas", color: "sky" },
                      ],
                      explanation: "Pronome, numeral, adjetivo e locução adjetiva todos orbitando o núcleo 'relatórios'.",
                    },
                  ],
                },
                {
                  level: "Exemplo 2 · Rotina de Prefeitura (Engolidos pelo pronome 'os')",
                  accent: "emerald",
                  cases: [
                    {
                      sentence: "“O técnico arquivou os três formulários antigos da recepção.” → “O técnico arquivou-os.”",
                      tags: [
                        {
                          label: "ENGOLIDOS POR 'OS'",
                          value: "os, três, antigos, da recepção = todos Adjuntos Adnominais!",
                          color: "emerald",
                        },
                      ],
                      explanation: "Como todos fazem parte do bloco interno de 'formulários', o pronome 'os' substitui o conjunto inteiro.",
                    },
                  ],
                },
                {
                  level: "Exemplo 3 · Caso Limite (Adjunto Adnominal interno vs. Predicativo do Objeto externo)",
                  accent: "amber",
                  cases: [
                    {
                      label: "Frase A · Sumiu dentro do pronome → Adjunto Adnominal",
                      sentence: "“A diretoria aprovou a nova proposta urgente.”",
                      tags: [{ label: "TESTE DO PRONOME", value: "aprovou-A (urgente sumiu = Adjunto Adnominal)", color: "emerald" }],
                      explanation:
                        "'Urgente' faz parte do próprio nome 'proposta' — ao trocar por 'a', ele é engolido pelo pronome.",
                    },
                    {
                      label: "Frase B · Ficou fora do pronome → Predicativo do Objeto",
                      sentence: "“A diretoria julgou urgente a nova proposta.”",
                      tags: [{ label: "TESTE DO PRONOME", value: "julgou-A urgente (ficou fora = Predicativo do Objeto)", color: "amber" }],
                      explanation:
                        "Aqui 'urgente' é um julgamento momentâneo dado pelo verbo 'julgou' e sobrevive fora do pronome 'a'.",
                    },
                  ],
                },
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Chamar qualquer adjetivo perto de um Objeto Direto de 'Predicativo do Objeto', ou esquecer que artigos e numerais são AA."
              escape="Substitua o bloco do substantivo por o/a/os/as: entrou dentro do pronome = AA; ficou fora = PO!"
            />
          </ProseSection>

          {/* 5.2 Complemento Nominal vs AA + SVG 4 */}
          <ProseSection number="5.2" title="Complemento Nominal (CN) e o Duelo Campeão CN × AA (+ Fluxograma em 3 Passos em SVG)">
            <p>
              Agora chegamos à questão número 1 do Instituto ACCESS em Sintaxe:{" "}
              <strong>Complemento Nominal (CN) × Adjunto Adnominal (AA)</strong>! Por que esses dois se parecem tanto?
              Porque os dois podem aparecer exatamente com a mesma cara: <code>preposição + substantivo</code> logo depois
              de outra palavra (ex.: <em>“a fiscalização <strong>do diretor</strong>”</em> vs.{" "}
              <em>“a fiscalização <strong>do prédio</strong>”</em>).
            </p>
            <p>
              Mas pense na lógica real da cena! Em <em>“a fiscalização <strong>do diretor</strong>”</em>, quem fez a
              fiscalização? O diretor (<strong>Agente</strong>)! Já em <em>“a fiscalização <strong>do prédio</strong>”</em>,
              um prédio não fiscaliza nada — ele <strong>recebeu/sofreu</strong> a fiscalização (<strong>Paciente</strong>)!
              Um completa o sentido passivo da ação (<strong>CN</strong>); o outro mostra quem agiu ou possui (
              <strong>AA</strong>). E depois de <strong>Adjetivo</strong> ou <strong>Advérbio</strong> não há duelo: é{" "}
              <strong>100% Complemento Nominal</strong>!
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "Complemento Nominal",
                  badge: "OBRIGATORIAMENTE PREPOSICIONADO",
                  accent: "emerald",
                  summary:
                    "Termo obrigatoriamente com preposição que completa o sentido de um Adjetivo, um Advérbio ou um Substantivo Abstrato (no sentido paciente = quem sofre/recebe a ação!).",
                },
              ]}
            />

            <DefinitionBlocks
              title="Os 3 Passos do Duelo (Um Passo por Vez)"
              items={[
                {
                  term: "Passo 1 · Liga-se a Adjetivo ou Advérbio? → 100% Complemento Nominal",
                  badge: "SEM DÚVIDA!",
                  accent: "emerald",
                  summary:
                    "Adjunto Adnominal só acompanha substantivo! Se a palavra principal anterior for um Adjetivo ('útil', 'favorável', 'nocivo') ou Advérbio ('longe', 'perto'), é automaticamente Complemento Nominal.",
                  examplesTitle: "Exemplo do Passo 1",
                  examples: [
                    {
                      label: "Cotidiano · Ligado a Adjetivo",
                      sentence: "“O regulamento é útil aos estagiários.”",
                      tags: [{ label: "útil (ADJETIVO)", value: "aos estagiários = 100% Complemento Nominal", color: "emerald" }],
                      explanation: "Como 'útil' é um adjetivo (e não substantivo), o termo preposicionado é obrigatoriamente Complemento Nominal.",
                    },
                  ],
                },
                {
                  term: "Passo 2 · Substantivo Concreto (Adjunto Adnominal) vs. Abstrato com Preposição ≠ “DE” (Complemento Nominal)",
                  badge: "CONCRETO × ABSTRATO",
                  accent: "sky",
                  summary:
                    "Se o termo anterior for Substantivo Concreto (mesa, prédio, porta), será sempre Adjunto Adnominal! Se for Substantivo Abstrato ligado por qualquer preposição diferente de 'DE' (a, com, em, por, contra), será sempre Complemento Nominal!",
                  examplesTitle: "Exemplos do Passo 2",
                  examples: [
                    {
                      label: "Cotidiano · Substantivo Concreto → Adjunto Adnominal",
                      sentence: "“A mesa de madeira chegou hoje.”",
                      tags: [{ label: "mesa (CONCRETO)", value: "de madeira = 100% Adjunto Adnominal", color: "sky" }],
                      explanation: "Substantivo concreto nunca recebe Complemento Nominal: indica matéria/tipo → Adjunto Adnominal.",
                    },
                    {
                      label: "Caso Real ACCESS · Pref. Domingos Martins/ES 2023 Q10 (Prep. ≠ DE)",
                      sentence: "“A preocupação com uma votação mais prática...”",
                      tags: [
                        {
                          label: "ABSTRATO + PREP. 'COM'",
                          value: "Não é 'de' → 100% Complemento Nominal!",
                          color: "emerald",
                        },
                      ],
                      explanation:
                        "Passo 2 resolve na hora: substantivo abstrato ('preocupação') com preposição diferente de DE (com, em, por, a, contra) é sempre Complemento Nominal!",
                    },
                  ],
                },
                {
                  term: "Passo 3 · Substantivo Abstrato + Preposição “DE”: Quem Pratica (Adjunto Adnominal) vs. Quem Sofre (Complemento Nominal)",
                  badge: "AGENTE × PACIENTE",
                  accent: "amber",
                  summary:
                    "Só existe duelo real quando há Substantivo Abstrato + preposição 'DE'! Pergunte: o termo com 'de' PRATICA/POSSUI a ação (Agente = Adjunto Adnominal) ou SOFRE/RECEBE a ação (Paciente = Complemento Nominal)?",
                  examplesTitle: "Exemplos do Passo 3 (Com Caso Real ACCESS)",
                  examples: [
                    {
                      label: "Sentido Agente · Quem fez a crítica → Adjunto Adnominal",
                      sentence: "“A crítica do vereador repercutiu.”",
                      tags: [{ label: "do vereador", value: "fez a crítica (agente) = Adjunto Adnominal", color: "sky" }],
                      explanation: "O vereador praticou o ato de criticar — sentido ativo (agente) = Adjunto Adnominal.",
                    },
                    {
                      label: "Sentido Paciente · Quem sofreu a crítica → Complemento Nominal",
                      sentence: "“A crítica ao vereador repercutiu.”",
                      tags: [{ label: "ao vereador", value: "sofreu a crítica (paciente) = Complemento Nominal", color: "emerald" }],
                      explanation: "Agora o vereador recebeu/sofreu a crítica feita por outro — sentido passivo = Complemento Nominal.",
                    },
                    {
                      label: "Caso Real ACCESS · CRBio-08 2023 Q10 (Duplo Paciente)",
                      sentence: "“A poluição da água ocorre devido à eliminação do esgoto...”",
                      tags: [
                        { label: "da água", value: "água é poluída (sofre!) = Complemento Nominal", color: "emerald" },
                        { label: "do esgoto", value: "esgoto é eliminado (sofre!) = Complemento Nominal", color: "emerald" },
                      ],
                      explanation:
                        "Ambos são pacientes das ações expressas pelos substantivos abstratos 'poluição' e 'eliminação' → dois Complementos Nominais!",
                    },
                  ],
                },
              ]}
            />

            <AnalogyBox title="Analogia da Tesoura no Papel" tag="Agente × Paciente">
              Em <em>“A tesoura de ferro”</em> (concreto), é <strong>Adjunto Adnominal</strong>. Em{" "}
              <em>“O corte do papel”</em>, o papel <strong>sofre</strong> o corte (paciente) →{" "}
              <strong>Complemento Nominal</strong>! Já em <em>“O corte da tesoura”</em>, a tesoura{" "}
              <strong>faz</strong> o corte (agente) → <strong>Adjunto Adnominal</strong>!
            </AnalogyBox>

            {/* SVG 4 */}
            <ZoomableDiagram
              title="Fluxograma em 3 Passos: Complemento Nominal × Adjunto Adnominal"
              badge="CAMPEÃO ACCESS"
              badgeTone="amber"
            >
              <svg
                viewBox="0 0 760 415"
                className="w-full h-auto"
                role="img"
                aria-label="Fluxograma em 3 passos para distinguir Complemento Nominal de Adjunto Adnominal"
              >
                <rect x="8" y="8" width="744" height="399" rx="14" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />

                {/* Passo 1 */}
                <rect x="28" y="24" width="320" height="64" rx="12" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />
                <text x="188" y="48" textAnchor="middle" fill="#a5b4fc" fontSize="11.5" fontWeight="bold" fontFamily="sans-serif">
                  PASSO 1
                </text>
                <text x="188" y="70" textAnchor="middle" fill="#ffffff" fontSize="13.5" fontWeight="bold" fontFamily="sans-serif">
                  Liga-se a ADJETIVO ou ADVÉRBIO?
                </text>

                <line x1="348" y1="56" x2="424" y2="56" stroke="#10b981" strokeWidth="2.2" />
                <polygon points="424,50 436,56 424,62" fill="#10b981" />
                <text x="388" y="47" textAnchor="middle" fill="#34d399" fontSize="11.5" fontWeight="bold" fontFamily="sans-serif">
                  SIM
                </text>

                <rect x="440" y="24" width="292" height="64" rx="12" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
                <text x="586" y="49" textAnchor="middle" fill="#a7f3d0" fontSize="13.5" fontWeight="bold" fontFamily="sans-serif">
                  COMPLEMENTO NOMINAL
                </text>
                <text x="586" y="71" textAnchor="middle" fill="#d1fae5" fontSize="11.5" fontFamily="sans-serif">
                  Ex.: “útil à cidade” | “longe da sede”
                </text>

                {/* Seta NÃO 1 */}
                <line x1="188" y1="88" x2="188" y2="116" stroke="#94a3b8" strokeWidth="2.2" />
                <polygon points="182,116 188,126 194,116" fill="#94a3b8" />
                <text x="204" y="110" fill="#cbd5e1" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  NÃO (liga-se a Substantivo)
                </text>

                {/* Passo 2 */}
                <rect x="28" y="128" width="320" height="64" rx="12" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />
                <text x="188" y="152" textAnchor="middle" fill="#a5b4fc" fontSize="11.5" fontWeight="bold" fontFamily="sans-serif">
                  PASSO 2
                </text>
                <text x="188" y="174" textAnchor="middle" fill="#ffffff" fontSize="13.5" fontWeight="bold" fontFamily="sans-serif">
                  Esse substantivo é CONCRETO?
                </text>

                <line x1="348" y1="160" x2="424" y2="160" stroke="#38bdf8" strokeWidth="2.2" />
                <polygon points="424,154 436,160 424,166" fill="#38bdf8" />
                <text x="388" y="151" textAnchor="middle" fill="#38bdf8" fontSize="11.5" fontWeight="bold" fontFamily="sans-serif">
                  SIM
                </text>

                <rect x="440" y="128" width="292" height="64" rx="12" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="2" />
                <text x="586" y="153" textAnchor="middle" fill="#bae6fd" fontSize="13.5" fontWeight="bold" fontFamily="sans-serif">
                  ADJUNTO ADNOMINAL
                </text>
                <text x="586" y="175" textAnchor="middle" fill="#e0f2fe" fontSize="11.5" fontFamily="sans-serif">
                  Ex.: “mesa de madeira” | “prédio da prefeitura”
                </text>

                {/* Seta NÃO 2 */}
                <line x1="188" y1="192" x2="188" y2="220" stroke="#f59e0b" strokeWidth="2.2" />
                <polygon points="182,220 188,230 194,220" fill="#f59e0b" />
                <text x="204" y="214" fill="#fcd34d" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  NÃO (é Substantivo Abstrato)
                </text>

                {/* Passo 3 (centralizado, bifurcando claramente para 2 caixas) */}
                <rect x="130" y="232" width="500" height="54" rx="12" fill="#451a03" stroke="#f59e0b" strokeWidth="2" />
                <text x="380" y="254" textAnchor="middle" fill="#fde68a" fontSize="11.5" fontWeight="bold" fontFamily="sans-serif">
                  PASSO 3 · DECISÃO FINAL
                </text>
                <text x="380" y="274" textAnchor="middle" fill="#ffffff" fontSize="13.5" fontWeight="bold" fontFamily="sans-serif">
                  O termo PRATICA / POSSUI a ação ou SOFRE / RECEBE a ação?
                </text>

                {/* Bifurcação Esquerda (Agente) */}
                <line x1="250" y1="286" x2="195" y2="306" stroke="#38bdf8" strokeWidth="2.2" />
                <polygon points="190,300 188,312 200,308" fill="#38bdf8" />
                <rect x="28" y="312" width="336" height="58" rx="12" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="2" />
                <text x="196" y="336" textAnchor="middle" fill="#bae6fd" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                  PRATICA / POSSUI → ADJUNTO ADNOMINAL
                </text>
                <text x="196" y="357" textAnchor="middle" fill="#e0f2fe" fontSize="11.5" fontFamily="sans-serif">
                  Ex.: “aprovação do prefeito” (ele aprovou)
                </text>

                {/* Bifurcação Direita (Paciente) */}
                <line x1="510" y1="286" x2="565" y2="306" stroke="#10b981" strokeWidth="2.2" />
                <polygon points="560,308 572,312 570,300" fill="#10b981" />
                <rect x="396" y="312" width="336" height="58" rx="12" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
                <text x="564" y="336" textAnchor="middle" fill="#a7f3d0" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                  SOFRE / RECEBE → COMPLEMENTO NOMINAL
                </text>
                <text x="564" y="357" textAnchor="middle" fill="#d1fae5" fontSize="11.5" fontFamily="sans-serif">
                  Ex.: “aprovação do edital” (foi aprovado)
                </text>

                {/* Dica de rodapé */}
                <text x="380" y="393" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  Atalho extra: com substantivo abstrato + preposição diferente de “de” (a, em, por, com, contra), é Complemento Nominal!
                </text>
              </svg>
            </ZoomableDiagram>

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Chamar 'o uso do computador' (Passos/MG 2023 Q12) ou 'a aprovação do projeto' de Adjunto Adnominal achando que indica posse!"
              escape="Passe para o particípio passivo: 'O computador foi USADO?' ✅ 'O projeto foi APROVADO?' ✅ Se SOFRE a ação do substantivo abstrato → é Complemento Nominal!"
            />

            {/* PARADA RAPIDA 5.A */}
            <InlinePractice
              title="Parada Rápida 5.A · Fixe Agora o Duelo CN × AA"
              subtitle="Resolva estas 2 questões usando os 3 passos do fluxograma antes de seguir."
              questions={[
                {
                  prompt: "Em sequência, qual é a função dos dois termos destacados?",
                  sentence: (
                    <>
                      “A fiscalização <u>do contrato</u> foi concluída após o parecer favorável{" "}
                      <u>ao recurso</u>.”
                    </>
                  ),
                  options: [
                    { key: "A", label: "Adjunto Adnominal e Adjunto Adnominal." },
                    { key: "B", label: "Complemento Nominal e Complemento Nominal." },
                    { key: "C", label: "Adjunto Adnominal e Complemento Nominal." },
                  ],
                  correctKey: "B",
                  feedbackCorrect:
                    "Perfeito! Em 'fiscalização do contrato', o contrato SOFREU a fiscalização (paciente = CN); em 'favorável ao recurso', 'favorável' é adjetivo (Passo 1 = 100% CN)!",
                  feedbackWrong:
                    "O contrato sofreu a fiscalização (não fiscalizou nada → CN), e 'favorável' é um adjetivo (Passo 1 = sempre CN).",
                },
                {
                  prompt: "Em qual alternativa o termo destacado atua como Adjunto Adnominal (AA)?",
                  options: [
                    {
                      key: "A",
                      label: (
                        <>
                          “A construção <u>do viaduto</u> começou ontem.”
                        </>
                      ),
                    },
                    {
                      key: "B",
                      label: (
                        <>
                          “A resposta <u>do secretário</u> tranquilizou a equipe.”
                        </>
                      ),
                    },
                    {
                      key: "C",
                      label: (
                        <>
                          “A eliminação <u>do esgoto</u> é prioridade ambiental.”
                        </>
                      ),
                    },
                  ],
                  correctKey: "B",
                  feedbackCorrect:
                    "Isso! O secretário DEU/FEZ a resposta (papel ativo/agente → AA). Em (A) o viaduto foi construído (CN) e em (C) o esgoto foi eliminado (CN).",
                  feedbackWrong:
                    "Teste quem faz vs. quem sofre: o viaduto foi construído (paciente = CN) e o esgoto foi eliminado (paciente = CN). Só o secretário praticou a ação (AA)!",
                },
              ]}
            />
          </ProseSection>

          {/* 5.3 Adjunto Adverbial */}
          <ProseSection number="5.3" title="Adjunto Adverbial: Os 10 Valores Semânticos, Intensidade com 'quão' e Vírgula no Deslocamento">
            <p>
              Enquanto o <strong>Adjunto Adnominal (AA)</strong> mora grudado ao substantivo, o{" "}
              <strong>Adjunto Adverbial</strong> escolta o <strong>Verbo</strong> (trazendo o cenário de tempo, lugar,
              modo, causa) ou escolta um <strong>Adjetivo / Advérbio</strong> (medindo grau ou intensidade, como{" "}
              <em>“muito cansado”</em> ou <em>“quão nocivo”</em>).
            </p>
            <p>
              E ele tem impacto direto nas provas de pontuação: na ordem direta (final da frase) não leva vírgula;
              deslocado para o início ou meio, <strong>quando for longo (3 ou mais palavras), exige vírgula obrigatória</strong>!
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "Adjunto Adverbial & Regra da Vírgula no Deslocamento",
                  badge: "INVARIÁVEL · MODIFICA VERBO / ADJ / ADV",
                  accent: "sky",
                  summary:
                    "Termo invariável (advérbio ou locução adverbial com preposição) que traz circunstância para verbos, adjetivos ou advérbios.",
                  note: "Pontuação na prova: no fim = sem vírgula. Deslocado com 3+ palavras = vírgula OBRIGATÓRIA ('Na manhã de segunda-feira, ...'). Curto (1–2 palavras) = facultativa.",
                },
              ]}
            />

            <KeyTable
              title="Os 10 Valores Semânticos do Adjunto Adverbial na ACCESS"
              headers={["Valor Semântico", "Pergunta", "Exemplos em Prova"]}
              rows={[
                ["1. Tempo", "Quando?", "“Na terça-feira” / “ontem à noite”"],
                ["2. Lugar", "Onde / Aonde?", "“Próximo à Grande Pirâmide” / “em Birigui”"],
                ["3. Modo", "Como?", "“com atenção” / “apressadamente”"],
                ["4. Intensidade", "Quanto?", "“quão nocivo” (Passos/MG 2023 Q12!) / “muito cansada”"],
                ["5. Causa", "Por quê?", "“por falta de energia”"],
                ["6. Finalidade", "Para quê?", "“para assinatura”"],
                ["7. Meio", "Por que meio?", "“pelo correio eletrônico” / “por meio digital”"],
                ["8. Instrumento", "Com que objeto?", "“com a caneta oficial”"],
                ["9. Companhia", "Com quem?", "“com o secretário”"],
                ["10. Negação / Dúvida / Afirmação", "Nega, duvida ou confirma?", "“não”, “talvez”, “certamente”"],
              ]}
            />

            <AnalogyBox title="Analogia do Cenário de Teatro" tag="Cenário Móvel com Vírgula">
              O Verbo é o ator agindo no palco; o <strong>Adjunto Adverbial</strong> é o cenário (quando, onde, como).
              Você pode empurrar a árvore do cenário para a frente do palco (vírgula obrigatória se longa!), mas ela nunca
              vira o ator (sujeito)!
            </AnalogyBox>

            <ExampleShowcase
              title="Exemplos Progressivos · Adjunto Adverbial & Intensidade"
              items={[
                {
                  level: "Exemplo 1 · Cotidiano (Adjetivo variável vs. Advérbio invariável)",
                  accent: "indigo",
                  cases: [
                    {
                      label: "Frase A · Varia com o sujeito → Predicativo do Sujeito",
                      sentence: "“A atendente saiu apressada.”",
                      tags: [{ label: "apressada", value: "varia (elas apressadas) = Predicativo do Sujeito", color: "emerald" }],
                      explanation: "Como muda para o plural/masculino ('as atendentes apressadas'), é qualidade adjetiva.",
                    },
                    {
                      label: "Frase B · Não varia nunca → Adjunto Adverbial de Modo",
                      sentence: "“A atendente saiu apressadamente.”",
                      tags: [{ label: "apressadamente", value: "invariável = Adjunto Adverbial de Modo", color: "sky" }],
                      explanation: "Circunstância adverbial jamais vai ao plural — mesmo com 'as atendentes saíram apressadamente'!",
                    },
                  ],
                },
                {
                  level: "Exemplo 2 · Rotina de Prefeitura (Meio + Vírgula obrigatória)",
                  accent: "emerald",
                  cases: [
                    {
                      sentence: "“Durante a audiência de sexta-feira, o parecer foi entregue por meio digital.”",
                      tags: [
                        { label: "5 PALAVRAS INICIAIS", value: "Vírgula obrigatória (Tempo)", color: "amber" },
                        { label: "por meio digital", value: "Adjunto Adverbial de Meio", color: "sky" },
                      ],
                      explanation: "Por ter mais de 2 palavras e estar antecipado antes do sujeito, a vírgula torna-se obrigatória.",
                    },
                  ],
                },
                {
                  level: "Exemplo 3 · Caso Real ACCESS (Pref. Passos/MG 2023 Q12 · 'quão')",
                  accent: "amber",
                  cases: [
                    {
                      sentence: "“Mas quão nocivo é realmente o uso do computador para crianças?”",
                      tags: [{ label: "quão", value: "Intensifica o adjetivo 'nocivo' = Intensidade!", color: "emerald" }],
                      explanation:
                        "Não caia na armadilha do ponto de interrogação: 'quão' (= tão/muito) mede o grau do adjetivo 'nocivo' → Adjunto Adverbial de Intensidade!",
                    },
                  ],
                },
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Ver ponto de interrogação com 'quão' e marcar 'adjunto adverbial de dúvida', ou omitir vírgula de adjunto longo antecipado."
              escape="Aponte a setinha: 'quão' modifica o adjetivo 'nocivo' (grau = Intensidade!). E conte as palavras deslocadas no início/meio: 3+ palavras = vírgula obrigatória!"
            />
          </ProseSection>

          {/* 5.4 Aposto */}
          <ProseSection number="5.4" title="O Aposto e Seus 4 Tipos (+ O Teste do Sinal de Igual '=' contra o Adjunto Adnominal)">
            <p>
              Às vezes escrevemos um nome na frase e colocamos ao lado dele <strong>outro termo equivalente</strong> —
              para explicar quem é (<em>“Birigui, capital do calçado”</em>), enumerar partes, resumir ou especificar um
              nome comum (<em>“o município de Birigui”</em>). Esse termo de equivalência chama-se <strong>Aposto</strong>!
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Aposto Explicativo",
                  badge: "SEMPRE ISOLADO POR PONTUAÇÃO",
                  accent: "indigo",
                  summary:
                    "Explica ou identifica um termo anterior, sempre isolado por vírgulas, travessões ou parênteses (“Birigui, capital nacional do calçado infantil, abrirá edital.”).",
                  examplesTitle: "Exemplo · Aposto Explicativo",
                  examples: [
                    {
                      label: "Cotidiano · Entre duas vírgulas",
                      sentence: "“Carlos, o novo estagiário, protocolou o guia.”",
                      tags: [{ label: "EQUIVALÊNCIA", value: "Carlos = o novo estagiário (Aposto Explicativo)", color: "indigo" }],
                      explanation: "Vem isolado por duas vírgulas explicando quem é o sujeito Carlos.",
                    },
                  ],
                },
                {
                  term: "2. Aposto Enumerativo",
                  badge: "LISTA APÓS DOIS-PONTOS",
                  accent: "amber",
                  summary:
                    "Desdobra ou lista os itens que compõem um termo anterior logo após dois-pontos (:) ou travessão.",
                  examplesTitle: "Exemplo · Aposto Enumerativo",
                  examples: [
                    {
                      label: "Rotina de Prefeitura · Desdobrando itens",
                      sentence: "“A Prefeitura definiu três metas: agilidade, transparência e economia.”",
                      tags: [
                        {
                          label: "ENUMERAÇÃO",
                          value: "agilidade, transparência e economia = Aposto Enumerativo",
                          color: "amber",
                        },
                      ],
                      explanation: "Os dois-pontos abrem a enumeração que desdobra exatamente quais são as 'três metas'.",
                    },
                  ],
                },
                {
                  term: "3. Aposto Resumitivo (Recapitulativo)",
                  badge: "CONDENSA TUDO EM 1 PALAVRA",
                  accent: "sky",
                  summary:
                    "Resume vários termos enumerados antes em uma única palavra totalizadora (tudo, nada, todos, ninguém, isso).",
                  examplesTitle: "Exemplo · Aposto Resumitivo",
                  examples: [
                    {
                      label: "Rotina de Prefeitura · Condensando uma lista inteira",
                      sentence: "“Editais, atas, ofícios, tudo foi salvo no sistema.”",
                      tags: [{ label: "RESUMO", value: "tudo = Aposto Resumitivo", color: "sky" }],
                      explanation: "A palavra 'tudo' retoma e condensa todos os documentos citados anteriormente para ligá-los ao verbo no singular.",
                    },
                  ],
                },
                {
                  term: "4. Aposto Especificativo (SEM Vírgula) + Duelo com Adjunto Adnominal (Teste do '=')",
                  badge: "TESTE DO SINAL DE IGUAL (=)",
                  accent: "emerald",
                  summary:
                    "Individualiza um substantivo comum ligando diretamente o nome próprio SEM vírgula (“o município de Birigui”, “a Avenida Brasil”, “o prefeito João”).",
                  note: "Duelo com Adjunto Adnominal (Teste do Sinal de Igual '='): município = Birigui → Aposto Especificativo! Decreto ≠ Birigui → Adjunto Adnominal!",
                  examplesTitle: "Exemplos · Aposto Especificativo vs. Adjunto Adnominal",
                  examples: [
                    {
                      label: "Identidade direta (=) → Aposto Especificativo",
                      sentence: "“O município de Birigui modernizou o portal.”",
                      tags: [{ label: "município = Birigui", value: "Aposto Especificativo (sem vírgula!)", color: "emerald" }],
                      explanation:
                        "Teste do Sinal de Igual: o município É Birigui! Há equivalência direta entre os dois nomes sem vírgula.",
                    },
                    {
                      label: "Posse ou origem (≠) → Adjunto Adnominal",
                      sentence: "“O decreto de Birigui entrou em vigor.”",
                      tags: [{ label: "decreto ≠ Birigui", value: "Adjunto Adnominal (posse/origem)", color: "sky" }],
                      explanation:
                        "Um decreto não É a cidade de Birigui — ele pertence ou veio de Birigui! Portanto é Adjunto Adnominal.",
                    },
                  ],
                },
              ]}
            />

            <AnalogyBox title="Analogia do Crachá de Equivalência (=)" tag="Mesma Entidade">
              O <strong>Aposto</strong> funciona como um crachá dizendo que A <strong>é exatamente igual (=)</strong> a
              B (<em>Carlos = o diretor</em>; <em>município = Birigui</em>).
            </AnalogyBox>

            <ExampleShowcase
              title="Caso Limite · 3 Tipos de Aposto na Mesma Ata"
              items={[
                {
                  level: "Caso Limite · Combinando Especificativo, Explicativo e Enumerativo",
                  accent: "amber",
                  cases: [
                    {
                      sentence: "“O município de Birigui, referência administrativa, definiu três metas: agilidade, transparência e economia.”",
                      tags: [
                        { label: "de Birigui", value: "Aposto Especificativo", color: "emerald" },
                        { label: "referência administrativa", value: "Aposto Explicativo", color: "indigo" },
                        { label: "agilidade, transparência e economia", value: "Aposto Enumerativo", color: "amber" },
                      ],
                      explanation: "Na mesma ata municipal aparecem três apostos diferentes: o especificativo sem vírgula, o explicativo entre vírgulas e o enumerativo após dois-pontos.",
                    },
                  ],
                },
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Classificar 'de Birigui' em 'o município de Birigui' como Adjunto Adnominal só por começar com a preposição 'de'!"
              escape="Aplique o Teste do Igual (=): município = Birigui? Sim! Então é Aposto Especificativo!"
            />
          </ProseSection>

          {/* 5.5 Vocativo */}
          <ProseSection number="5.5" title="O Vocativo: O Chamamento Independente e a Vírgula Obrigatória nas 3 Posições">
            <p>
              Para concluir toda a Sintaxe da Oração Simples, conheça o único termo que{" "}
              <strong>não pertence ao Sujeito nem ao Predicado</strong>: o <strong>Vocativo</strong>! Quando abrimos uma
              sessão dizendo <em>“Senhores vereadores, aprovem o projeto”</em>, estamos falando <strong>COM</strong>{" "}
              quem ouve (chamamento), e não falando sobre eles. Por isso a norma culta exige{" "}
              <strong>vírgula obrigatória</strong> isolando o Vocativo no início, no meio ou no fim da frase!
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Vocativo no Início da Frase (Vírgula Obrigatória Depois)",
                  badge: "CHAMAMENTO INICIAL",
                  accent: "amber",
                  summary:
                    "Aparece na abertura da fala chamando o ouvinte, separado por uma vírgula antes da oração principal (que pode ter verbo no imperativo com sujeito oculto).",
                  examplesTitle: "Exemplo · Vocativo no Início",
                  examples: [
                    {
                      label: "Cotidiano · Vocativo ≠ Sujeito",
                      sentence: "“Carlos, protocole o guia ainda hoje!”",
                      tags: [
                        {
                          label: "1 VÍRGULA ANTES DO VERBO",
                          value: "Carlos = Vocativo (Sujeito oculto: você)",
                          color: "amber",
                        },
                      ],
                      explanation: "Sujeito jamais fica separado do verbo por uma única vírgula! Aqui falamos COM o Carlos.",
                    },
                  ],
                },
                {
                  term: "2. Vocativo no Meio da Frase (Isolado Entre Duas Vírgulas)",
                  badge: "CHAMAMENTO INTERCALADO",
                  accent: "emerald",
                  summary:
                    "Quando o chamamento entra no meio da oração, fica obrigatoriamente cercado por duas vírgulas — e continua sem fazer parte do Sujeito nem do Predicado.",
                  examplesTitle: "Exemplo · Vocativo no Meio",
                  examples: [
                    {
                      label: "Rotina de Prefeitura · Entre duas vírgulas",
                      sentence: "“Requeremos, Excelentíssimo Prefeito, a análise urgente deste parecer.”",
                      tags: [{ label: "NO MEIO", value: "Isolado por duas vírgulas obrigatórias", color: "emerald" }],
                      explanation: "Mesmo intercalado no meio da oração, o chamamento não pertence ao sujeito nem ao predicado.",
                    },
                  ],
                },
                {
                  term: "3. Vocativo no Fim da Frase (Vírgula Obrigatória Antes)",
                  badge: "CHAMAMENTO FINAL",
                  accent: "indigo",
                  summary:
                    "Quando o chamamento fecha a frase, exige uma vírgula logo antes dele para não se misturar com o último termo da oração.",
                  examplesTitle: "Exemplo · Vocativo no Fim",
                  examples: [
                    {
                      label: "Rotina de Prefeitura · Fechando o pedido",
                      sentence: "“Encaminhe o processo com urgência, senhores vereadores.”",
                      tags: [{ label: "NO FIM", value: "Vírgula obrigatória antes do chamamento", color: "indigo" }],
                      explanation: "Sem essa vírgula, pareceria que o processo pertence aos vereadores; com a vírgula, estamos chamando os vereadores.",
                    },
                  ],
                },
              ]}
            />

            <AnalogyBox title="Analogia do Megafone vs. Crachá" tag="Vocativo × Aposto">
              O <strong>Aposto</strong> é um crachá descrevendo alguém da cena (<em>“O diretor, dr. Marcos, assinou”</em>);
              o <strong>Vocativo</strong> é o megafone chamando alguém pelo nome de fora da frase (<em>“Dr. Marcos, assine!”</em>).
            </AnalogyBox>

            <ExampleShowcase
              title="Caso Limite · Vocativo e Aposto Explicativo Juntos na Mesma Frase"
              items={[
                {
                  level: "Caso Limite · Quem Ouve o Chamado vs. Quem é Explicado",
                  accent: "amber",
                  cases: [
                    {
                      sentence: "“Cidadãos presentes, Birigui, capital do calçado infantil, crescerá mais.”",
                      tags: [
                        { label: "Cidadãos presentes", value: "fala COM eles = Vocativo", color: "amber" },
                        { label: "capital do calçado infantil", value: "fala SOBRE Birigui = Aposto Explicativo", color: "indigo" },
                      ],
                      explanation: "Distinção clássica: quem ouve o chamado = Vocativo; quem é explicado entre vírgulas = Aposto Explicativo.",
                    },
                  ],
                },
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Ver 'Senhores vereadores, aprovem o orçamento' e achar que 'Senhores vereadores' é Sujeito Simples!"
              escape="Regra sagrada: o Sujeito NUNCA se separa do verbo por uma vírgula! Viu chamamento isolado por vírgula antes de pedido/ordem? É 100% Vocativo!"
            />

            {/* PARADA RAPIDA 5.B */}
            <InlinePractice
              title="Parada Rápida 5.B · Fixe Aposto Especificativo × AA e Vocativo"
              subtitle="Último treino rápido antes da Bateria Final ACCESS."
              questions={[
                {
                  prompt: "Em qual frase o termo destacado é Aposto Especificativo (e NÃO Adjunto Adnominal)?",
                  options: [
                    {
                      key: "A",
                      label: (
                        <>
                          “A Secretaria <u>de Obras</u> publicou o cronograma hoje.”
                        </>
                      ),
                    },
                    {
                      key: "B",
                      label: (
                        <>
                          “A cidade <u>de Birigui</u> modernizou todo o atendimento.”
                        </>
                      ),
                    },
                    {
                      key: "C",
                      label: (
                        <>
                          “O relatório <u>de auditoria</u> foi protocolado cedo.”
                        </>
                      ),
                    },
                  ],
                  correctKey: "B",
                  feedbackCorrect:
                    "Correto! Teste do Sinal de Igual: cidade = Birigui! Individualiza diretamente sem vírgula (Aposto Especificativo). Em (A) e (C), são apenas especificadores (AA).",
                  feedbackWrong:
                    "Use o Sinal de Igual (=): 'Secretaria ≠ Obras' e 'relatório ≠ auditoria' (AA). Só em 'cidade de Birigui' há identidade direta (cidade = Birigui) → Aposto Especificativo!",
                },
                {
                  prompt: "Qual é a função sintática do trecho inicial destacado na fala abaixo?",
                  sentence: (
                    <>
                      “<u>Servidores municipais</u>, confiram os contracheques no portal ainda hoje.”
                    </>
                  ),
                  options: [
                    { key: "A", label: "Sujeito Simples, pois são eles quem deverão conferir o portal." },
                    { key: "B", label: "Aposto Explicativo, pois explica quem entra no portal." },
                    { key: "C", label: "Vocativo, termo independente isolado por vírgula que interpela diretamente os ouvintes." },
                  ],
                  correctKey: "C",
                  feedbackCorrect:
                    "Isso! O sujeito jamais é separado do verbo por uma vírgula. Trata-se de Vocativo chamando os servidores (sujeito oculto de 'confiram' = vocês).",
                  feedbackWrong:
                    "Nunca confunda com Sujeito: há vírgula separando o chamamento do verbo no imperativo → 100% Vocativo!",
                },
              ]}
            />
          </ProseSection>

          <FlipCardsGrid
            title="Flashcards de Memorização Ativa · Eixo 5"
            cards={[
              {
                front: "Adjunto Adnominal (AA)",
                hint: "5 classes satélites",
                back: "Artigo, Adjetivo interno, Pronome, Numeral e Locução Adjetiva grudados ao substantivo. Somem todos dentro do pronome 'o/a'!",
              },
              {
                front: "Fluxograma CN × AA (Passos 1 e 2)",
                hint: "Adjetivo/Advérbio vs. Concreto",
                back: "Ligado a Adjetivo/Advérbio = 100% CN. Ligado a Substantivo Concreto = 100% AA. Abstrato com preposição diferente de DE = 100% CN.",
              },
              {
                front: "Fluxograma CN × AA (Passo 3)",
                hint: "Abstrato + DE",
                back: "Pratica/Possui a ação (Agente) = Adjunto Adnominal! Sofre/Recebe a ação (Paciente: 'poluição DA ÁGUA') = Complemento Nominal!",
              },
              {
                front: "Adjunto Adverbial & Vírgula",
                hint: "Passos/MG 2023 Q12 + deslocamento",
                back: "Modifica verbo, adjetivo ('quão nocivo' = Intensidade) ou advérbio. Deslocado com 3+ palavras exige vírgula OBRIGATÓRIA.",
              },
              {
                front: "Aposto Especificativo × AA",
                hint: "Teste do Sinal de Igual (=)",
                back: "Município de Birigui (município = Birigui, sem vírgula) → Aposto Especificativo. Edital de Birigui (edital ≠ cidade) → Adjunto Adnominal.",
              },
              {
                front: "Vocativo",
                hint: "Nas 3 posições",
                back: "Termo independente de chamamento (não é sujeito nem predicado), sempre isolado por vírgula no início, meio ou fim.",
              },
            ]}
          />

          <FeynmanCard
            title="Síntese Feynman de 3 Linhas · Eixo 5"
            lines={[
              "1. O Adjunto Adnominal mora dentro do substantivo (sumindo no pronome o/a), enquanto o Complemento Nominal completa obrigatoriamente adjetivos, advérbios ou substantivos abstratos no sentido paciente.",
              "2. O Adjunto Adverbial traz circunstâncias para verbos, adjetivos ou advérbios (como 'quão' na intensidade) e pede vírgula obrigatória quando longo (3+ palavras) e deslocado para o começo ou meio.",
              "3. O Aposto equivale a um nome (explicando, enumerando, resumindo ou especificando sem vírgula), enquanto o Vocativo fica totalmente fora da estrutura da oração apenas para chamar quem ouve com vírgula.",
            ]}
          />
        </div>
      ),
      checkpointQuestions: [
        {
          num: "1",
          header: "Questão 13",
          banca: "**Banca:** Adaptada para o Padrão Instituto ACCESS | Cargo: Oficial Administrativo",
          statement:
            "Compare o papel sintático dos termos em destaque nos dois trechos extraídos de processos internos da Prefeitura:\nI. *“O município concluiu ontem a construção **do novo arquivo** municipal.”*\nII. *“A reclamação **do contribuinte** foi registrada na ouvidoria antes das dezessete horas.”*\n\nConsiderando o fluxograma de distinção entre complemento nominal e adjunto adnominal, é **CORRETO** afirmar que os termos em destaque atuam, respectivamente, como:",
          options: {
            A: "adjunto adnominal e adjunto adnominal",
            B: "complemento nominal e adjunto adnominal",
            C: "complemento nominal e complemento nominal",
            D: "adjunto adnominal e complemento nominal",
          },
          answer: "B",
          commentary:
            "**Gabarito Oficial: B**\n- **(B) CORRETA:** Em I, *do novo arquivo* **SOFRE** a construção (o arquivo foi construído = paciente → **Complemento Nominal**); em II, *do contribuinte* **PRATICA** a reclamação (o contribuinte reclamou = agente → **Adjunto Adnominal**).\n- **(A), (C) e (D) ERRADAS:** Confundem os papéis agente e paciente ligados a substantivos abstratos.",
        },
        {
          num: "2",
          header: "Questão 14",
          banca: "**Banca:** Adaptada para o Padrão Instituto ACCESS | Cargo: Oficial Administrativo",
          statement:
            "Assinale a alternativa em que a classificação do **Adjunto Adverbial** e a pontuação pelo deslocamento estão **CORRETAMENTE** aplicadas segundo a norma culta:",
          options: {
            A: "Na frase *“A equipe chegou à sede muito cansada”*, o termo *muito* funciona como adjunto adverbial de lugar ligado ao verbo.",
            B: "Na frase *“Durante o expediente da última terça-feira o diretor assinou o decreto”*, a vírgula inicial é estritamente proibida.",
            C: "Na frase *“Na manhã desta quinta-feira, os servidores aprovaram a minuta com extrema atenção”*, há adjuntos de tempo e modo com pontuação regular.",
            D: "Na frase *“Enviaremos a notificação pelos correios municipais hoje”*, o trecho *pelos correios municipais* classifica-se como adjunto adverbial de dúvida.",
          },
          answer: "C",
          commentary:
            "**Gabarito Oficial: C**\n- **(C) CORRETA:** *Na manhã desta quinta-feira* (5 palavras antecipadas) recebe vírgula obrigatória indicando **Tempo**, e *com extrema atenção* indica **Modo**.\n- **(A) ERRADA:** *Muito* modifica o adjetivo *cansada* expressando **Intensidade**.\n- **(B) ERRADA:** Adjunto adverbial deslocado longo exige vírgula.\n- **(D) ERRADA:** *Pelos correios municipais* indica **Meio**.",
        },
        {
          num: "3",
          header: "Questão 15",
          banca: "**Banca:** Adaptada para o Padrão Instituto ACCESS | Cargo: Oficial Administrativo",
          statement:
            "Leia o discurso de abertura de uma audiência pública: *“Cidadãos presentes, a Secretaria de Planejamento, órgão estratégico da administração, apresentou o orçamento da cidade de Birigui para o próximo ano.”* Analise as classificações:\nI. *“Cidadãos presentes”* desempenha a função de vocativo, termo independente isolado por vírgula.\nII. *“órgão estratégico da administração”* funciona como aposto explicativo entre vírgulas.\nIII. *“de Birigui”* atua como aposto especificativo ao individualizar diretamente o substantivo comum *cidade*.\n\nEstá(ão) **CORRETA(S)**:",
          options: {
            A: "todas as afirmações I, II e III.",
            B: "apenas as afirmações I e II.",
            C: "apenas as afirmações II e III.",
            D: "apenas as afirmações I e III.",
          },
          answer: "A",
          commentary:
            "**Gabarito Oficial: A**\n- **(A) CORRETA:** I — *Cidadãos presentes* interpela os ouvintes isolado por vírgula (**Vocativo**); II — *órgão estratégico da administração* explica o sujeito entre vírgulas (**Aposto Explicativo**); III — *de Birigui* individualiza *cidade* sem vírgula (`cidade = Birigui` → **Aposto Especificativo**).\n- **(B), (C) e (D) ERRADAS:** Excluem indevidamente classificações corretas.",
        },
      ],
    },
  ],

  finalQuestionsTitle: "Bateria Final · 10 Questões no Padrão Instituto ACCESS (Reais + Adaptadas)",
  finalQuestions: [
    {
      num: "1",
      header: "Questão 01",
      banca: "**Banca:** Instituto ACCESS (2026 — Prefeitura Municipal de Contagem/MG — Assistente Administrativo 40h · Prova 1, Q02)",
      statement:
        "*“Próximo à Grande Pirâmide de Quéops, o Egito inaugura o Grande Museu Egípcio.”*\n\nDe acordo com a estrutura sintática da oração apresentada, é correto afirmar que",
      options: {
        A: 'o sujeito é "o Grande Museu Egípcio", e o predicado "o Egito inaugura", visto que a ênfase recai sobre a ação de inauguração do museu.',
        B: 'o sujeito é "o Egito" e o predicado é "inaugura o Grande Museu Egípcio", sendo "Próximo à Grande Pirâmide de Quéops" um adjunto adverbial de lugar que também integra o predicado.',
        C: 'o sujeito é próprio, formado por "o Egito" e "o Grande Museu Egípcio", já que ambos são substantivos próprios que se associam na ação de inaugurar.',
        D: 'trata-se de uma oração com sujeito paciente, pois a ação de inaugurar recai sobre "o Grande Museu Egípcio", que sofre o efeito verbal.',
      },
      answer: "B",
      commentary:
        "**Gabarito Definitivo Oficial (Contagem/MG 2026): B**\n- **(B) CORRETA:** Na ordem direta: *“O Egito inaugura o Grande Museu Egípcio próximo à Grande Pirâmide de Quéops.”* Quem pratica *inaugura* é **o Egito** (Sujeito Simples); todo o restante forma o **Predicado Verbal**, inclusive o Adjunto Adverbial de Lugar antecipado.\n- **(A), (C) e (D) ERRADAS:** *“O Grande Museu Egípcio”* é Objeto Direto na voz ativa, não sujeito nem sujeito composto.",
    },
    {
      num: "2",
      header: "Questão 02",
      banca: "**Banca:** Instituto ACCESS (2026 — Prefeitura Municipal de Contagem/MG — Assistente Administrativo 40h · Prova 1, Q01)",
      statement:
        '*“O edifício monumental, de quinhentos mil metros quadrados, "exibe" fachada revestida por hieróglifos e alabastro translúcido, com entrada em forma de pirâmide.”*\n\nCom base nas regras de regência verbal, é correto afirmar que o verbo destacado é',
      options: {
        A: 'transitivo indireto, pois o complemento "fachada revestida por hieróglifos" depende da preposição "por" para completar o sentido do verbo.',
        B: 'intransitivo, já que expressa ação completa e dispensa complemento, sendo "fachada revestida por hieróglifos" um aposto explicativo.',
        C: 'transitivo direto e exige um complemento sem preposição, que, no caso, é o termo "fachada revestida por hieróglifos e alabastro translúcido".',
        D: 'transitivo direto e indireto, pois exige ao mesmo tempo um objeto direto ("fachada") e um objeto indireto introduzido por preposição ("por hieróglifos").',
      },
      answer: "C",
      commentary:
        "**Gabarito Definitivo Oficial (Contagem/MG 2026): C**\n- **(C) CORRETA:** Quem exibe, exibe **algo** (`VTD`). Armadilha da falsa preposição: *“por hieróglifos e alabastro translúcido”* completa o nome *revestida*, não o verbo *exibe*.\n- **(A), (B) e (D) ERRADAS:** O verbo *exibe* não pediu a preposição *por*, nem tem sentido completo sem complemento.",
    },
    {
      num: "3",
      header: "Questão 03",
      banca: "**Banca:** Instituto ACCESS (2023 — CRBio-08 — Assistente Administrativo · Q10)",
      statement:
        "*“A poluição **da água** (1) ocorre devido à eliminação **do esgoto** (2) não tratado, de produtos químicos e resíduos industriais e domésticos, uso de fertilizantes na agricultura e uso de mercúrio no garimpo.”* *(Termos sublinhados na prova original destacados em negrito com índices 1 e 2)*\n\nOs termos sublinhados no período acima desempenham função sintática, respectivamente, de",
      options: {
        A: "adjunto adnominal e adjunto adnominal.",
        B: "adjunto adnominal e complemento nominal.",
        C: "complemento nominal e complemento nominal.",
        D: "complemento nominal e adjunto adnominal.",
      },
      answer: "C",
      commentary:
        "**Gabarito Definitivo Oficial (CRBio-08 2023): C**\n- **(C) CORRETA:** Pelo Passo 3 do Fluxograma (`Substantivo Abstrato + DE`): **(1) da água** sofre a poluição (paciente → **Complemento Nominal**) e **(2) do esgoto** sofre a eliminação (paciente → **Complemento Nominal**).\n- **(A), (B) e (D) ERRADAS:** Nenhum dos dois termos pratica a ação.",
    },
    {
      num: "4",
      header: "Questão 04",
      banca: "**Banca:** Instituto ACCESS (2023 — Prefeitura Municipal de Passos/MG — Oficial de Administração · Q12)",
      statement:
        "*“Mas **quão** (1) nocivo é realmente o uso **do computador** (2) para crianças?”* *(Termos sublinhados na prova original destacados em negrito com índices 1 e 2)*\n\nAssinale a função sintática que exercem os termos indicados em (1) e (2), respectivamente.",
      options: {
        A: "adjunto adnominal – adjunto adnominal",
        B: "adjunto adverbial de modo – complemento nominal",
        C: "adjunto adverbial de intensidade – complemento nominal",
        D: "adjunto adverbial de dúvida – adjunto adnominal",
      },
      answer: "C",
      commentary:
        "**Gabarito Definitivo Oficial (Pref. Passos/MG 2023): C**\n- **(C) CORRETA:** **(1) quão** intensifica o adjetivo *nocivo* → **Adjunto Adverbial de Intensidade**; **(2) do computador** completa o substantivo abstrato *uso* no sentido paciente (o computador é usado) → **Complemento Nominal**.\n- **(A), (B) e (D) ERRADAS:** *Quão* não acompanha substantivo nem indica modo/dúvida.",
    },
    {
      num: "5",
      header: "Questão 05",
      banca: "**Banca:** Adaptada para o Padrão Instituto ACCESS | Cargo: Oficial Administrativo",
      statement:
        "No setor de compras de uma prefeitura, o servidor redigiu três períodos para um relatório gerencial:\nI. *“Material conferido e protocolado na recepção.”*\nII. *“A equipe de compras vai analisar os orçamentos ainda nesta semana.”*\nIII. *“Em frente ao guichê principal, aguardavam dois fornecedores interessados.”*\n\nA respeito da classificação sintática dos períodos acima, analise as afirmativas:\nI. O enunciado I constitui uma frase nominal, pois comunica sentido completo sem empregar verbo conjugado.\nII. O enunciado II forma um período simples, já que a locução *vai analisar* atua como um único núcleo verbal.\nIII. O enunciado III apresenta um período composto com sujeito indeterminado pelo deslocamento do verbo.\n\nEstá(ão) CORRETA(S):",
      options: {
        A: "apenas as afirmativas I e II.",
        B: "apenas as afirmativas I e III.",
        C: "apenas as afirmativas II e III.",
        D: "todas as afirmativas I, II e III.",
      },
      answer: "A",
      commentary:
        "**(A) CORRETA:** I é **Frase Nominal** (sem verbo conjugado); II tem a locução *vai analisar* formando **Período Simples** (1 oração). III é FALSO porque há apenas 1 verbo (*aguardavam* = Período Simples) e seu sujeito está expresso posposto: *dois fornecedores interessados* (Sujeito Simples).",
    },
    {
      num: "6",
      header: "Questão 06",
      banca: "**Banca:** Adaptada para o Padrão Instituto ACCESS | Cargo: Oficial Administrativo",
      statement:
        "Durante a revisão da minuta de um decreto municipal, o Oficial Administrativo encontrou quatro construções sobre prazos e atribuições de pessoal. Assinale a frase em que há uma **Oração Sem Sujeito** (sujeito inexistente) empregada de acordo com a norma culta:",
      options: {
        A: "Discutem-se regularmente novas metas operacionais nas reuniões semanais da equipe administrativa.",
        B: "Precisa-se de oficiais administrativos experientes para coordenar o setor de arquivo intermediário.",
        C: "Existem vários processos antigos aguardando digitalização urgente no prédio anexo da prefeitura.",
        D: "Deve fazer exatamente cinco meses que o sistema eletrônico de protocolo entrou em pleno vigor.",
      },
      answer: "D",
      commentary:
        "**(D) CORRETA:** *Fazer* indicando tempo decorrido é impessoal, formando **Oração Sem Sujeito** e mantendo o auxiliar *deve* no singular.\n- **(A) ERRADA:** Sujeito Simples Paciente (*novas metas operacionais* = são discutidas).\n- **(B) ERRADA:** Sujeito Indeterminado (`VTI + se` = IIS).\n- **(C) ERRADA:** *Existir* tem sujeito determinado no plural (*vários processos antigos*).",
    },
    {
      num: "7",
      header: "Questão 07",
      banca: "**Banca:** Adaptada para o Padrão Instituto ACCESS | Cargo: Oficial Administrativo",
      statement:
        "Relacione os termos da Coluna I com a classificação sintática exata na Coluna II, considerando as frases extraídas de rotinas de repartição:\n\nColuna I:\n1. *“Os documentos fiscais **permaneceram intactos** no cofre.”*\n2. *“Os auditores **examinaram todos os contratos** da gestão.”*\n3. *“A comissão **julgou improcedente** a impugnação do edital.”*\n4. *“Os atendentes **iniciaram o expediente animados** com o sistema.”*\n\nColuna II:\n( ) Predicado Verbal com verbo transitivo direto e sem nenhum predicativo.\n( ) Predicado Nominal construído com verbo de ligação e predicativo do sujeito.\n( ) Predicado Verbo-Nominal reunindo verbo de ação e predicativo do sujeito.\n( ) Predicado Verbo-Nominal reunindo verbo significativo e predicativo do objeto.\n\nA sequência CORRETA da Coluna II, de cima para baixo, é:",
      options: {
        A: "2 – 1 – 4 – 3.",
        B: "2 – 3 – 1 – 4.",
        C: "4 – 1 – 2 – 3.",
        D: "3 – 4 – 1 – 2.",
      },
      answer: "A",
      commentary:
        "**(A) CORRETA:** 1ª linha = (2) *examinaram todos os contratos* (PV); 2ª linha = (1) *permaneceram intactos* (PN); 3ª linha = (4) *iniciaram o expediente animados* (PVN + Predicativo do Sujeito); 4ª linha = (3) *julgou improcedente a impugnação* (PVN + Predicativo do Objeto). Sequência: **2 – 1 – 4 – 3**.",
    },
    {
      num: "8",
      header: "Questão 08",
      banca: "**Banca:** Adaptada para o Padrão Instituto ACCESS | Cargo: Oficial Administrativo",
      statement:
        "Avalie os quatro enunciados a seguir quanto à transitividade verbal e ao emprego sintático dos objetos, atribuindo **V** (verdadeiro) ou **F** (falso):\n\n(__) Em *“O diretor **assistiu ao** pronunciamento oficial na câmara”*, o verbo destacado é transitivo indireto com objeto indireto.\n(__) Em *“Os servidores **obedecem-no** rigorosamente desde a posse”*, o pronome empregado substitui corretamente o objeto indireto.\n(__) Em *“A secretária **cumpriu com o** dever ético previsto no estatuto”*, o termo destacado exemplifica um objeto direto preposicionado.\n(__) Em *“A junta **entregou os certificados aos** aprovados”*, o verbo atua como transitivo direto e indireto com dois objetos.\n\nA sequência CORRETA, de cima para baixo, é:",
      options: {
        A: "V – V – F – F.",
        B: "F – V – V – F.",
        C: "F – F – V – V.",
        D: "V – F – V – V.",
      },
      answer: "D",
      commentary:
        "**(D) CORRETA:** 1º (V) *assistir* = ver é `VTI` com preposição *a*; 2º (F) *obedecer* é `VTI`, exigindo *lhe* (*obedecem-lhe*), nunca *no*; 3º (V) *cumpriu com o dever* é Objeto Direto Preposicionado; 4º (V) *entregar algo a alguém* é `VTDI`. Sequência: **V – F – V – V**.",
    },
    {
      num: "9",
      header: "Questão 09",
      banca: "**Banca:** Adaptada para o Padrão Instituto ACCESS | Cargo: Oficial Administrativo",
      statement:
        "Em um parecer técnico da Secretaria de Obras de um município, analise a função sintática dos termos destacados nos trechos:\nI. *“O projeto **de iluminação** foi concluído ontem.”*\nII. *“A aprovação **do projeto** dependeu de audiência pública.”*\nIII. *“As reclamações **dos moradores** chegaram rapidamente ao gabinete.”*\nIV. *“A obra foi fiscalizada **pelo engenheiro responsável** durante a semana.”*\n\nAssinale a alternativa que apresenta uma análise sintática **INCORRETA** sobre os trechos acima:",
      options: {
        A: 'Em I, "de iluminação" atua como adjunto adnominal, pois caracteriza um substantivo em sentido especificador de tipo.',
        B: 'Em II, "do projeto" atua como adjunto adnominal, pois o substantivo abstrato pratica a ação de aprovar as contas.',
        C: 'Em III, "dos moradores" atua como adjunto adnominal, já que os moradores funcionam como agentes da reclamação feita.',
        D: 'Em IV, "pelo engenheiro responsável" atua como agente da passiva, visto que executa a ação na frase em voz ativa.',
      },
      answer: "B",
      commentary:
        "**(B) INCORRETA (Gabarito!):** Em *“A aprovação **do projeto**”*, o projeto **SOFREU** a aprovação (sentido paciente!). Logo, trata-se de **Complemento Nominal**, jamais Adjunto Adnominal.\n- **(A), (C) e (D) CORRETAS:** *de iluminação* especifica tipo de projeto (AA); *dos moradores* praticam a reclamação (AA); *pelo engenheiro responsável* executa a ação na ativa (Agente da Passiva).",
    },
    {
      num: "10",
      header: "Questão 10",
      banca: "**Banca:** Adaptada para o Padrão Instituto ACCESS | Cargo: Oficial Administrativo",
      statement:
        "Leia o trecho abaixo, retirado de uma ata oficial de reunião extraordinária:\n*“Senhores vereadores, o município de Birigui, referência regional no setor calçadista, apresentará três prioridades hoje: creches, pavimentação e saúde.”*\n\nSobre os termos sintáticos presentes no período, avalie as afirmações:\nI. “Senhores vereadores” funciona como vocativo, termo independente isolado por vírgula usado para interpelar os ouvintes.\nII. “de Birigui” exerce papel de aposto especificativo ao individualizar o substantivo comum *município* sem o emprego de vírgula.\nIII. “referência regional no setor calçadista” constitui aposto explicativo e “creches, pavimentação e saúde” forma aposto enumerativo.\n\nEstá(ão) CORRETA(S):",
      options: {
        A: "apenas a afirmativa I.",
        B: "apenas as afirmativas I e II.",
        C: "apenas as afirmativas II e III.",
        D: "todas as afirmativas I, II e III.",
      },
      answer: "D",
      commentary:
        "**(D) CORRETA:** Todas as três afirmações estão certas: I = Vocativo interpela os ouvintes isolado por vírgula; II = *de Birigui* individualiza *município* sem vírgula (Aposto Especificativo); III = *referência regional no setor calçadista* (Aposto Explicativo) e a lista após os dois-pontos (Aposto Enumerativo).",
    },
  ],

  checklistItems: [
    "Consigo distinguir uma pergunta de Morfologia (classe isolada) de uma pergunta de Sintaxe (cargo na frase) em menos de 5 segundos?",
    "Sei contar o número exato de orações de um período sabendo distinguir Frase Nominal, Período Simples (inclusive com locução verbal = 1 só oração!) e Período Composto?",
    "Consigo partir qualquer oração em Sujeito (quem comanda o verbo) e Predicado (tudo o que se declara, com o verbo dentro) usando a Ordem Direta e a Receita em 4 Passos?",
    "Entendi a lógica e a analogia de cada um dos 5 tipos de verbo (VI, VTD + OD, VTI + OI, VTDI, VL + 5 famílias), desarmando a falsa preposição com 'ISSO' e usando o/a, lhe, me/te/se/nos/vos e Objetos Pleonásticos?",
    "Dominei o Teste da Concordância, o Agente da Passiva, o trio do 'SE' (VTD + se [PA] × VTI/VI/VL + se [IIS] × Pronome Reflexivo) e as Orações Sem Sujeito (haver, fazer, ser horas, clima vs. existir/ocorrer)?",
    "Separo os 3 Tipos de Predicado (PV, PN, PVN) e aplico os testes do o/a e do feminino plural para diferenciar Predicativo do Objeto/Sujeito de Adjunto Adnominal e de Advérbio?",
    "Domino os 3 Passos do Fluxograma (Adjetivo/Advérbio; Concreto vs. Abstrato; Agente vs. Paciente) para acertar Complemento Nominal vs. Adjunto Adnominal?",
    "Sei identificar Adjunto Adverbial (10 valores, intensificador quão e vírgula obrigatória ao deslocar), Aposto (Explicativo, Enumerativo, Resumitivo, Especificativo vs. Adjunto Adnominal) e Vocativo nas 3 posições?",
  ],
};

export default portuguesSemana04;
