import type { RichLessonModule } from "@/types";
import {
  AnalogyBox,
  CompareGrid,
  ConceptCard,
  DefinitionBlocks,
  FeynmanCard,
  FlipCardsGrid,
  KeyTable,
  ProgressiveExamples,
  ProseSection,
  StepByStep,
  TrapAlert,
} from "@/components/edu";

export const portuguesSemana04: RichLessonModule = {
  id: "w4_port_doc0",
  blockId: "w4_port",
  docIndex: 0,
  title:
    "Semana 04: Língua Portuguesa — Sintaxe da Oração Simples (Frase, Oração e Período; Sujeito, Predicado, Transitividade Verbal, Objetos, Predicativos, Complemento Nominal, Adjuntos, Aposto e Vocativo)",
  shortTitle: "Aula Interativa · 5 Eixos + 15 Checkpoints + 10 Questões ACCESS",
  subtitle:
    "Escada didática linear sem pulos nem siglas adiantadas: Foco Especial de Destravamento (micro-revisão + 4 comparativos), Protocolo D-E-A-M-P-C, ≥3 exemplos progressivos por subconceito, 4 fluxogramas visuais em SVG, flashcards em todos os eixos e 25 questões no padrão Instituto ACCESS.",

  introRender: () => (
    <div className="space-y-6">
      <ConceptCard
        title="Por que Sintaxe destrava Concordância, Regência, Crase e Pontuação — em Ordem Linear?"
        badge="Escada de 5 Degraus · Zero Pulos"
        accent="indigo"
      >
        <p>
          Você pediu que nada seja pulado nem explicado com siglas jogadas antes da hora. Por isso, esta
          aula segue uma <strong>escada linear de 5 degraus</strong>: nenhum conceito ou sigla aparece antes de
          ter sido definido do zero no degrau anterior.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
          <div className="rounded-xl p-3.5 surface-muted border border-tech">
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              O QUE ENTRA COM PROFUNDIDADE MÁXIMA
            </div>
            <p className="text-xs sm:text-sm text-pri/90 mt-1.5 leading-relaxed">
              <strong>Degrau 0:</strong> pré-requisitos das Semanas 02–03.{" "}
              <strong>Eixo 1:</strong> Morfologia × Sintaxe, Frase/Oração/Período, Sujeito × Predicado e Ordem Direta.{" "}
              <strong>Eixo 2:</strong> Transitividade Verbal (VI, VTD, VTI, VTDI, VL) e Objetos.{" "}
              <strong>Eixo 3:</strong> 5 tipos de Sujeito, Voz Passiva e Trio do “SE”.{" "}
              <strong>Eixo 4:</strong> 3 Predicados e Predicativos.{" "}
              <strong>Eixo 5:</strong> Adjuntos, Complemento Nominal, Aposto e Vocativo.
            </p>
          </div>
          <div className="rounded-xl p-3.5 surface-muted border border-tech">
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              FILTRO ANTI-ENROLAÇÃO (O QUE FICA DE FORA)
            </div>
            <p className="text-xs sm:text-sm text-pri/90 mt-1.5 leading-relaxed">
              Cortamos querelas filológicas obscuras sem reflexo em prova de Nível Médio municipal (árvores
              gerativas, objeto direto cognato literário ou subtipos estilísticos raros), preservando{" "}
              <strong>100% do que o Instituto ACCESS realmente cobra</strong>.
            </p>
          </div>
        </div>
      </ConceptCard>

      <ProseSection
        number="0.1"
        title="Micro-Revisão Expressa dos 5 Pré-Requisitos (Semanas 02 e 03 — Zero Lacunas)"
      >
        <p>
          Antes de montar e desmontar frases, confira em blocos separados os <strong>5 tijolos de classes de palavras</strong> que sustentam toda a aula:
        </p>
        <DefinitionBlocks
          columns={2}
          items={[
            {
              term: "1. Substantivo (Concreto vs. Abstrato)",
              badge: "BASE DO NOME",
              accent: "indigo",
              summary: (
                <>
                  <strong>Concreto</strong> nomeia seres ou coisas independentes (<em>prefeito, edital, prédio, cidadão</em>).{" "}
                  <strong>Abstrato</strong> nomeia ação transformada em nome, qualidade ou sentimento (<em>aprovação, limpeza, poluição, preocupação</em>).
                </>
              ),
              example: "Muitos substantivos abstratos nascem de verbos: aprovar → aprovação; poluir → poluição.",
            },
            {
              term: "2. Adjetivo",
              badge: "QUALIDADE",
              accent: "emerald",
              summary: (
                <>
                  Qualidade ou estado ligado a um substantivo, concordando com ele em gênero e número.
                </>
              ),
              example: "ofício urgente · contas públicas · parecer técnico.",
            },
            {
              term: "3. Artigo, Numeral e Pronome",
              badge: "SATÉLITES / SUBSTITUTOS",
              accent: "sky",
              summary: (
                <>
                  <strong>Artigos</strong> (<em>o, a, um, uma</em>) acompanham substantivos.{" "}
                  <strong>Pronomes oblíquos</strong> (<em>o, a, lhe, me, te, se, nos, vos</em>) evitam repetir nomes junto ao verbo.
                </>
              ),
              example: "Assinou o edital → Assinou-o.",
            },
            {
              term: "4. Verbo e Locução Verbal",
              badge: "1 AÇÃO = 1 BLOCO",
              accent: "amber",
              summary: (
                <>
                  <strong>Verbo simples:</strong> uma palavra conjugada (<em>protocolou</em>).{" "}
                  <strong>Locução verbal:</strong> verbo auxiliar + principal no infinitivo, gerúndio ou particípio (<em>vai protocolar</em>, <em>foi assinado</em>).
                </>
              ),
              note: "Na contagem de orações, toda locução verbal vale sempre por 1 único verbo!",
            },
            {
              term: "5. Advérbio vs. Preposição",
              badge: "INVARIÁVEIS",
              accent: "purple",
              summary: (
                <>
                  <strong>Advérbio</strong> modifica verbo, adjetivo ou advérbio sem variar no plural (<em>ontem, longe, muito, quão, não</em>).{" "}
                  <strong>Preposição</strong> é a cola que liga palavras (<em>de, em, a, para, por, com</em>).
                </>
              ),
              note: "Atenção às contrações obrigatórias: de+o = do · em+o = no · por+o = pelo · a+a = à.",
            },
          ]}
        />
      </ProseSection>

      <ProseSection
        number="0.2"
        title="4 Exemplos Comparativos de Destravamento (Frase Errada vs. Certa + Caso Real ACCESS)"
      >
        <p>
          Antes de ganhar qualquer sigla técnica, treine o olho com <strong>4 casos reais do dia a dia e de prova</strong> — sem jargões adiantados:
        </p>

        <div className="space-y-4">
          <CompareGrid
            title="Comparativo 1 · Quem manda no verbo não é o lugar que vem primeiro"
            mode="right-wrong"
            left={{
              title: "✅ Frase Certa pela Lógica",
              badge: "CONCORDÂNCIA REAL",
              items: [
                <span key="c1a">
                  <em>“Em Birigui, <strong>protocolaram-se três requerimentos</strong> hoje.”</em> — Quem sofre a ação são <strong>três requerimentos</strong> (plural), puxando o verbo para o plural.
                </span>,
                <span key="c1b">
                  <strong>Caso ACCESS (Contagem/MG 2026 Q02):</strong> <em>“Próximo à Grande Pirâmide de Quéops, <strong>o Egito</strong> inaugura o Grande Museu Egípcio.”</em> — Quem pratica a ação é <em>o Egito</em> (veremos os detalhes nos Eixos 1 e 3!).
                </span>,
              ],
            }}
            right={{
              title: "❌ Erro Comum na Prova",
              badge: "DISTRAÇÃO PELA POSIÇÃO",
              items: [
                <span key="e1a">
                  <em>“Em Birigui, protocolou-se três requerimentos hoje.”</em> — Erro grave causado por olhar o trecho de lugar na frente e esquecer quem concorda com o verbo.
                </span>,
                <span key="e1b">
                  Achar que a expressão inicial <em>“Próximo à Grande Pirâmide...”</em> manda no verbo só por estar antes da vírgula.
                </span>,
              ],
            }}
          />

          <CompareGrid
            title="Comparativo 2 · A preposição pertence ao verbo ou a outra palavra lá dentro?"
            mode="right-wrong"
            left={{
              title: "✅ Análise Certa (Olho no Alvo)",
              badge: "CONTAGEM/MG 2026 Q01",
              items: [
                <span key="c2a">
                  Em <em>“O edifício... <strong>exibe</strong> fachada revestida <strong>por</strong> hieróglifos”</em>, quem exige <em>por</em> é a palavra <em>revestida</em> — quem exibe, exibe <strong>algo</strong> sem preposição!
                </span>,
                <span key="c2b">
                  Já em <strong>CRBio-05 2025 Q10</strong> (<em>“O professor <strong>assistiu aos</strong> alunos”</em>), o verbo <em>assistir</em> (= presenciar/ajudar) pede diretamente a preposição <em>a</em> (veremos no Eixo 2!).
                </span>,
              ],
            }}
            right={{
              title: "❌ Raciocínio Errado",
              badge: "PREPOSIÇÃO FALSA",
              items: [
                <span key="e2a">
                  “Vi a preposição <em>por</em> na frase depois de <em>exibe</em>, então o verbo <em>exibir</em> precisa de preposição!”
                </span>,
                <span key="e2b">
                  Ignorar a relação exata entre o verbo e seu complemento inteiro e chutar pela presença de preposição no meio da frase.
                </span>,
              ],
            }}
          />

          <CompareGrid
            title="Comparativo 3 · Verbo impessoal (sem dono) vs. Verbo com dono"
            mode="right-wrong"
            left={{
              title: "✅ Frase Certa na Norma Culta",
              badge: "SINGULAR OBRIGATÓRIO",
              items: [
                <span key="c3a">
                  <em>“<strong>Havia</strong> muitos processos na gaveta.”</em> / <em>“<strong>Deve fazer</strong> cinco meses do edital.”</em>
                </span>,
                <span key="c3b">
                  <em>“<strong>Existiam</strong> muitos processos na gaveta.”</em> — O verbo <em>existir</em> tem dono escrito e vai ao plural; <em>haver</em> (= existir) e <em>fazer</em> (tempo) ficam no singular (regra completa no Eixo 3!).
                </span>,
              ],
            }}
            right={{
              title: "❌ Frase Errada na Prova",
              badge: "ERRO CAMPEÃO",
              items: [
                <span key="e3a">
                  <em>“Haviam muitos processos pendentes na repartição.”</em>
                </span>,
                <span key="e3b">
                  <em>“Devem fazer cinco meses que o sistema eletrônico entrou em vigor.”</em>
                </span>,
              ],
            }}
          />

          <CompareGrid
            title="Comparativo 4 · Quem pratica a ação do nome × Quem sofre a ação do nome"
            mode="right-wrong"
            left={{
              title: "✅ Separação Lógica (CRBio-08 2023 Q10)",
              badge: "AGENTE vs. PACIENTE",
              items: [
                <span key="c4a">
                  Em <em>“A fiscalização <strong>do auditor</strong> foi elogiada”</em>, o auditor <strong>fez</strong> a fiscalização (papel ativo).
                </span>,
                <span key="c4b">
                  Em <em>“A poluição <strong>da água</strong> ocorre devido à eliminação <strong>do esgoto</strong>”</em> (CRBio-08 2023 Q10), a água é poluída e o esgoto é eliminado — ambos <strong>sofrem</strong> a ação (dominaremos no Eixo 5!).
                </span>,
              ],
            }}
            right={{
              title: "❌ Chute Comum",
              badge: "TUDO IGUAL",
              items: [
                <span key="e4a">
                  “Todo trecho com <em>de / do / da</em> depois de um substantivo desempenha exatamente a mesma função sintática.”
                </span>,
                <span key="e4b">
                  Não testar se o termo após a preposição pratica ou recebe a ideia contida no substantivo.
                </span>,
              ],
            }}
          />
        </div>
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
        "A mesma palavra em cargos diferentes, frases completas vs. nominais, contagem de orações com locução verbal, divisão Sujeito × Predicado e Ordem Direta vs. Inversa.",
      estimatedMinutes: 25,
      render: () => (
        <div className="space-y-6">
          {/* 1.1 Morfologia vs Sintaxe */}
          <ProseSection number="1.1" title="Morfologia vs. Sintaxe: A Mesma Palavra em Papéis Diferentes">
            <DefinitionBlocks
              columns={2}
              items={[
                {
                  term: "Morfologia",
                  badge: "IDENTIDADE NO DICIONÁRIO",
                  accent: "indigo",
                  summary:
                    "Estuda a palavra isolada, como uma profissão fixa na carteira de trabalho (Substantivo, Adjetivo, Verbo, Advérbio, Preposição...).",
                },
                {
                  term: "Sintaxe",
                  badge: "CARGO NA FRASE",
                  accent: "emerald",
                  summary:
                    "Estuda a função exata que a palavra exerce quando está trabalhando junto com outras palavras em uma oração específica (Sujeito, Predicado, Complemento...).",
                },
              ]}
            />

            <AnalogyBox title="Analogia da Copa do Mundo" tag="Identidade × Função Tática">
              A posição de origem do jogador no clube (goleiro, lateral, atacante) é a <strong>Morfologia</strong>;
              já o papel tático que o técnico deu a ele naquele jogo específico (capitão, batedor de falta,
              marcador) é a <strong>Sintaxe</strong>.
            </AnalogyBox>

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (O mesmo substantivo em dois papéis)",
                  accent: "indigo",
                  content: (
                    <>
                      <p>
                        Em <em>“O <strong>cidadão</strong> solicitou a guia”</em>, o substantivo <em>cidadão</em> é quem
                        comanda o verbo (papel de <strong>Sujeito</strong>).
                      </p>
                      <p>
                        Já em <em>“O atendente orientou o <strong>cidadão</strong>”</em>, o mesmo substantivo recebe a ação
                        do verbo (papel de <strong>Complemento do Verbo</strong> — função que receberá nome próprio no Eixo 2).
                      </p>
                      <p>
                        A classe morfológica continuou substantivo, mas o cargo sintático mudou!
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (Substantivo 'protocolo' em 3 setores)",
                  accent: "emerald",
                  content: (
                    <>
                      <p>
                        <strong>(a)</strong> <em>“O <strong>protocolo</strong> funciona das 8h às 17h.”</em> →{" "}
                        <strong>Sujeito</strong> (é dele que o verbo declara algo).
                      </p>
                      <p>
                        <strong>(b)</strong> <em>“O estagiário fechou o <strong>protocolo</strong> às 17h.”</em> →{" "}
                        <strong>Complemento do Verbo</strong> (completa o sentido de <em>fechou</em>).
                      </p>
                      <p>
                        <strong>(c)</strong> <em>“A sala <strong>do protocolo</strong> passou por reforma.”</em> →{" "}
                        <strong>Especificador do nome <em>sala</em></strong> (tema aprofundado no Eixo 5).
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite (Mudança simultânea de Classe + Função)",
                  accent: "amber",
                  content: (
                    <>
                      <p>
                        Em <em>“O servidor <strong>alto</strong> entrou na sala”</em>, <em>alto</em> concorda com{" "}
                        <em>servidor</em> (<em>a servidora alta</em>) — é <strong>Adjetivo</strong> qualificando o nome.
                      </p>
                      <p>
                        Mas em <em>“O servidor falou <strong>alto</strong> na audiência”</em>, <em>alto</em> não muda no
                        plural (<em>elas falaram alto</em>) e modifica o modo da ação de falar — é{" "}
                        <strong>Advérbio</strong>!
                      </p>
                    </>
                  ),
                },
              ]}
            />

            <CompareGrid
              title="Mapa de Gêmeos Confundíveis · O que a Banca Está Perguntando?"
              mode="contrast"
              left={{
                title: "Pergunta de MORFOLOGIA",
                badge: "CLASSE FIXA",
                items: [
                  <span key="m1">
                    Usa expressões como <em>“classe gramatical”</em>, <em>“classe morfológica”</em>,{" "}
                    <em>“classifica-se como substantivo / advérbio / adjetivo”</em>.
                  </span>,
                ],
              }}
              right={{
                title: "Pergunta de SINTAXE",
                badge: "FUNÇÃO RELACIONAL",
                items: [
                  <span key="s1">
                    Usa expressões como <em>“função sintática”</em>, <em>“papel desempenhado no período”</em> (Sujeito,
                    Predicado, Complemento...).
                  </span>,
                ],
              }}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5s"
              trap="O enunciado pede a 'função sintática' da palavra 'muito', e o candidato apressado marca a alternativa 'advérbio'!"
              escape="'Advérbio' é nome de classe morfológica! Se o comando pedir função sintática, elimine de imediato alternativas que listem apenas substantivo, adjetivo, advérbio ou preposição."
            />
          </ProseSection>

          {/* 1.2 Frase, Oracao e Periodo */}
          <ProseSection number="1.2" title="Frase, Oração e Período (Simples vs. Composto e Locução Verbal)">
            <DefinitionBlocks
              columns={1}
              items={[
                {
                  term: "Frase (Nominal vs. Verbal)",
                  badge: "SENTIDO COMPLETO",
                  accent: "indigo",
                  summary:
                    "Todo enunciado capaz de comunicar uma ideia completa ao ouvinte. Sem verbo = Frase Nominal; com verbo = Frase Verbal.",
                  example: "Frase Nominal: “Atendimento suspenso para manutenção.” | Frase Verbal: “O servidor protocolou o ofício.”",
                },
                {
                  term: "Oração (Exige Verbo ou Locução Verbal)",
                  badge: "NÚCLEO VERBAL",
                  accent: "emerald",
                  summary:
                    "Todo enunciado estruturado obrigatoriamente em torno de um verbo conjugado ou de uma locução verbal. O verbo é o coração que comanda as peças ao redor.",
                  example: "Exemplos completos de Orações: (1) “A Prefeitura abriu as inscrições.” (2) “O fiscal vai protocolar o documento hoje.” (3) “Choveu forte em Birigui.”",
                },
                {
                  term: "Período Simples vs. Período Composto",
                  badge: "CONTAGEM DE ORAÇÕES",
                  accent: "sky",
                  summary:
                    "É a frase verbal encerrada por pontuação forte (. ! ? ...). Com 1 verbo/locução = Período Simples (oração absoluta); com 2 ou mais verbos/locuções = Período Composto.",
                  note: "Regra de Ouro da Contagem: Locução verbal (auxiliar + infinitivo/gerúndio/particípio, como 'vai assinar' ou 'foi publicado') expressa 1 única ação e conta sempre como 1 SÓ ORAÇÃO!",
                },
              ]}
            />

            <AnalogyBox title="Analogia do Motor Elétrico" tag="Veículo × Motor">
              A <strong>Frase</strong> é qualquer meio de transporte funcionando; o <strong>Verbo</strong> é o motor: um
              carrinho de mão leva tijolo sem motor (<strong>Frase Nominal = 0 orações</strong>); um carro com 1 motor é{" "}
              <strong>Período Simples</strong>; uma carreta com 2 motores acoplados é <strong>Período Composto</strong>.
            </AnalogyBox>

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (Frase Nominal sem oração vs. Frase Verbal)",
                  accent: "indigo",
                  content: (
                    <>
                      <p>
                        <em>“Atenção ao horário de atendimento!”</em> → Comunica ideia completa, mas não tem verbo →{" "}
                        <strong>Frase Nominal</strong> (0 orações; não forma período).
                      </p>
                      <p>
                        <em>“O guichê principal <strong>abriu</strong> às oito horas.”</em> → 1 verbo conjugado →{" "}
                        <strong>1 Oração = Período Simples</strong>.
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (Locução Verbal conta 1 Oração)",
                  accent: "emerald",
                  content: (
                    <>
                      <p>
                        <em>“O Oficial Administrativo <strong>deve conferir</strong> todos os comprovantes.”</em> → Duas
                        palavras juntas (<em>deve</em> + <em>conferir</em>), mas formam uma única ação →{" "}
                        <strong>1 Locução Verbal = 1 Oração (Período Simples)</strong>.
                      </p>
                      <p>
                        <em>“A equipe <strong>recebeu</strong> o pedido e <strong>emitiu</strong> a guia.”</em> → Dois verbos
                        em ações separadas → <strong>2 Orações = Período Composto</strong>.
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite (Particípios Soltos vs. Locução Real)",
                  accent: "amber",
                  content: (
                    <>
                      <p>
                        <strong>(a)</strong> <em>“Material conferido e protocolado na recepção.”</em> → Os particípios{" "}
                        <em>conferido</em> e <em>protocolado</em> não têm verbo auxiliar antes deles: funcionam como estados
                        descritivos → <strong>0 orações (Frase Nominal)</strong>!
                      </p>
                      <p>
                        <strong>(b)</strong> <em>“O edital <strong>será publicado</strong> amanhã, porque a comissão{" "}
                        <strong>aprovou</strong> a minuta.”</em> → 1 locução (<em>será publicado</em> = 1) + 1 verbo simples (
                        <em>aprovou</em> = 1) → <strong>2 Orações = Período Composto</strong>.
                      </p>
                    </>
                  ),
                },
              ]}
            />

            <KeyTable
              title="Mapa de Gêmeos Confundíveis · Frase × Oração × Período"
              headers={["Conceito", "Tem Verbo?", "Exemplo Completo na Frase", "Contagem"]}
              rows={[
                ["Frase Nominal", "Não", "“Documentação incompleta no envelope.”", "0 orações"],
                ["Período Simples (1 verbo)", "Sim (1)", "“A Prefeitura publicou a lista hoje.”", "1 oração"],
                ["Período Simples (locução)", "Sim (1 bloco)", "“O edital vai ser corrigido pela equipe.”", "1 oração"],
                ["Período Composto", "Sim (2+)", "“O cidadão preencheu e entregou o protocolo.”", "2 orações"],
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5s"
              trap="Afirmar que 'O parecer jurídico deverá estar concluído até sexta' tem três orações só porque aparecem três palavras verbais!"
              escape="Pergunte quantos acontecimentos reais existem na cena: apenas UM (concluir o parecer). Todos os auxiliares servem a um único verbo principal = 1 locução = 1 Oração."
            />
          </ProseSection>

          {/* 1.3 Sujeito e Predicado do Zero */}
          <ProseSection number="1.3" title="Sujeito e Predicado do Zero: Os Dois Blocos que Partem Qualquer Oração">
            <DefinitionBlocks
              columns={2}
              items={[
                {
                  term: "Sujeito (e Núcleo do Sujeito)",
                  badge: "QUEM COMANDA O VERBO",
                  accent: "indigo",
                  summary:
                    "É o ser (pessoa, órgão, objeto ou ideia) sobre o qual a oração declara algo — e que normalmente puxa o verbo para o singular ou plural.",
                  note: "Núcleo do Sujeito é a palavra central sem artigos ou acompanhantes: em 'Os novos servidores chegaram', o núcleo é só 'servidores'.",
                },
                {
                  term: "Predicado",
                  badge: "TUDO O QUE SE DECLARA",
                  accent: "emerald",
                  summary:
                    "É todo o restante da oração que declara uma ação ou estado sobre o sujeito. O verbo mora OBRIGATORIAMENTE dentro do predicado!",
                  note: "Regra de Ouro: achou o Sujeito? 100% do que sobrou na oração — inclusive tempo ou lugar no começo! — pertence ao Predicado.",
                },
              ]}
            />

            <AnalogyBox title="Analogia da Manchete de Jornal" tag="Protagonista × Fato Noticiado">
              O <strong>Sujeito</strong> é o protagonista da capa do jornal (de quem falamos); o <strong>Predicado</strong>{" "}
              é a notícia completa declarada sobre ele (o verbo + o que aconteceu + onde e quando). Aviso: no{" "}
              <strong>Eixo 3</strong> veremos casos em que o sujeito está escondido ou simplesmente não existe (como em{" "}
              <em>choveu</em> ou <em>há vagas</em>), tornando a oração inteira Predicado!
            </AnalogyBox>

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (Divisão limpa em dois blocos)",
                  accent: "indigo",
                  content: (
                    <>
                      <p>
                        Frase: <em>“O ônibus municipal saiu no horário.”</em>
                      </p>
                      <p>
                        <strong>[Sujeito]:</strong> <em>O ônibus municipal</em> (Núcleo: <em>ônibus</em> — se fossem dois,
                        o verbo viraria <em>saíram</em>).
                      </p>
                      <p>
                        <strong>[Predicado]:</strong> <em>saiu no horário</em> (o próprio verbo <em>saiu</em> + o horário).
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (Sujeito longo com 1 núcleo)",
                  accent: "emerald",
                  content: (
                    <>
                      <p>
                        Frase: <em>“A nova Secretaria de Finanças aprovou o balanço anual ontem.”</em>
                      </p>
                      <p>
                        <strong>[Sujeito]:</strong> <em>A nova Secretaria de Finanças</em> (Núcleo no singular:{" "}
                        <em>Secretaria</em> → puxa <em>aprovou</em> no singular!).
                      </p>
                      <p>
                        <strong>[Predicado]:</strong> <em>aprovou o balanço anual ontem</em>.
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite (Sujeito fora de lugar no fim da frase)",
                  accent: "amber",
                  content: (
                    <>
                      <p>
                        Frase: <em>“Na sexta-feira, compareceram ao auditório três novos candidatos.”</em>
                      </p>
                      <p>
                        <strong>Cuidado!</strong> <em>Na sexta-feira</em> é tempo e <em>ao auditório</em> tem preposição —
                        nenhum dos dois manda no plural de <em>compareceram</em>.
                      </p>
                      <p>
                        <strong>[Sujeito]:</strong> <em>três novos candidatos</em> (mesmo no final!).{" "}
                        <strong>[Predicado]:</strong> <em>Na sexta-feira, compareceram ao auditório</em>.
                      </p>
                    </>
                  ),
                },
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5s"
              trap="Dizer que o Predicado é 'apenas o que vem depois do verbo' ou achar que a primeira expressão antes da vírgula é sempre o Sujeito."
              escape="Um lugar ou data nunca assina portarias! Descubra primeiro quem concorda com o plural/singular do verbo (= Sujeito). Tudo o mais — incluindo o verbo e o tempo inicial — integra o Predicado."
            />
          </ProseSection>

          {/* 1.4 Ordem Direta vs Ordem Inversa + SVG 1 + Receita 4 Passos */}
          <ProseSection number="1.4" title="Ordem Direta vs. Ordem Inversa (+ Fluxograma em SVG e Receita em 4 Passos)">
            <DefinitionBlocks
              columns={2}
              items={[
                {
                  term: "Ordem Direta (Canônica)",
                  badge: "SUJEITO → VERBO → RESTO",
                  accent: "indigo",
                  summary:
                    "Sequência natural da oração em português: Sujeito → Verbo → Complemento do Verbo → Circunstância de Lugar/Tempo.",
                },
                {
                  term: "Ordem Inversa",
                  badge: "CAMUFLAGEM DE PROVA",
                  accent: "amber",
                  summary:
                    "Qualquer frase em que o autor desloca um bloco para dar ênfase ou confundir a leitura — jogando o lugar/tempo para o começo ou empurrando o Sujeito para depois do verbo.",
                },
              ]}
            />

            {/* SVG 1 */}
            <div className="rounded-2xl border border-tech bg-slate-950/90 p-3 sm:p-5 overflow-hidden">
              <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
                <span className="text-xs sm:text-sm font-extrabold text-indigo-300">
                  Anatomia da Oração: Sujeito e Predicado na Ordem Direta vs. Ordem Inversa
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                  MAPA VISUAL
                </span>
              </div>
              <svg
                viewBox="0 0 740 260"
                className="w-full h-auto"
                role="img"
                aria-label="Anatomia da Oração Simples: Sujeito e Predicado na Ordem Direta versus Ordem Inversa"
              >
                <rect x="8" y="8" width="724" height="244" rx="14" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                <text x="28" y="34" fill="#a5b4fc" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                  1. ORDEM DIRETA (SUJEITO → VERBO → COMPLEMENTO → LUGAR/TEMPO)
                </text>
                <rect x="28" y="48" width="165" height="58" rx="10" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />
                <text x="110" y="70" textAnchor="middle" fill="#c7d2fe" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  SUJEITO (Quem)
                </text>
                <text x="110" y="90" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                  A Prefeitura
                </text>

                <line x1="196" y1="77" x2="216" y2="77" stroke="#818cf8" strokeWidth="2" />
                <polygon points="216,72 226,77 216,82" fill="#818cf8" />

                <rect x="228" y="48" width="125" height="58" rx="10" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
                <text x="290" y="70" textAnchor="middle" fill="#a7f3d0" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  VERBO (Ação)
                </text>
                <text x="290" y="90" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                  publicou
                </text>

                <line x1="356" y1="77" x2="376" y2="77" stroke="#34d399" strokeWidth="2" />
                <polygon points="376,72 386,77 376,82" fill="#34d399" />

                <rect x="388" y="48" width="145" height="58" rx="10" fill="#0c4a6e" stroke="#0ea5e9" strokeWidth="1.5" />
                <text x="460" y="70" textAnchor="middle" fill="#bae6fd" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  COMPLEMENTO
                </text>
                <text x="460" y="90" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                  o novo edital
                </text>

                <line x1="536" y1="77" x2="556" y2="77" stroke="#38bdf8" strokeWidth="2" />
                <polygon points="556,72 566,77 556,82" fill="#38bdf8" />

                <rect x="568" y="48" width="144" height="58" rx="10" fill="#451a03" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="640" y="70" textAnchor="middle" fill="#fde68a" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  LUGAR / TEMPO
                </text>
                <text x="640" y="90" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                  em Birigui.
                </text>

                <rect x="228" y="112" width="484" height="22" rx="6" fill="#064e3b" stroke="#10b981" strokeWidth="1" />
                <text x="470" y="127" textAnchor="middle" fill="#a7f3d0" fontSize="10.5" fontWeight="bold" fontFamily="sans-serif">
                  BLOCO DO PREDICADO (tudo o que se declara sobre o Sujeito — inclui Verbo + resto)
                </text>

                <line x1="28" y1="146" x2="712" y2="146" stroke="#334155" strokeDasharray="5 5" />
                <text x="28" y="168" fill="#fbbf24" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                  2. ORDEM INVERSA NA PROVA ACCESS (LUGAR NO INÍCIO + SUJEITO DEPOIS DO VERBO)
                </text>

                <rect x="28" y="182" width="160" height="54" rx="10" fill="#451a03" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="108" y="203" textAnchor="middle" fill="#fde68a" fontSize="10.5" fontWeight="bold" fontFamily="sans-serif">
                  LUGAR ANTECIPADO
                </text>
                <text x="108" y="222" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                  Em Birigui,
                </text>

                <rect x="200" y="182" width="135" height="54" rx="10" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
                <text x="267" y="203" textAnchor="middle" fill="#a7f3d0" fontSize="10.5" fontWeight="bold" fontFamily="sans-serif">
                  VERBO
                </text>
                <text x="267" y="222" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                  publicou
                </text>

                <rect x="347" y="182" width="175" height="54" rx="10" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />
                <text x="434" y="203" textAnchor="middle" fill="#c7d2fe" fontSize="10.5" fontWeight="bold" fontFamily="sans-serif">
                  SUJEITO POSPOSTO
                </text>
                <text x="434" y="222" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                  a Prefeitura
                </text>

                <rect x="534" y="182" width="178" height="54" rx="10" fill="#0c4a6e" stroke="#0ea5e9" strokeWidth="1.5" />
                <text x="623" y="203" textAnchor="middle" fill="#bae6fd" fontSize="10.5" fontWeight="bold" fontFamily="sans-serif">
                  COMPLEMENTO
                </text>
                <text x="623" y="222" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                  o novo edital.
                </text>
              </svg>
            </div>

            <StepByStep
              title="Receita Fixa em 4 Passos para Dissecação de Qualquer Oração Simples"
              problem="Como desmontar frases longas ou invertidas sem confundir nenhum papel?"
              steps={[
                {
                  title: "Circule os verbos (ou locuções verbais)",
                  badge: "PASSO 1",
                  content: (
                    <p>
                      Conte quantas ações/estados existem para definir se é Frase Nominal (0), Período Simples (1) ou
                      Composto (2+).
                    </p>
                  ),
                },
                {
                  title: "Coloque mentalmente na Ordem Direta",
                  badge: "PASSO 2",
                  content: (
                    <p>
                      Mova expressões de lugar/tempo do início para o fim e traga quem pratica/recebe a concordância para
                      a frente do verbo.
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
                      Verifique se o verbo exige complemento ou liga uma qualidade — tema que abriremos passo a passo no{" "}
                      <strong>Eixo 2</strong>!
                    </p>
                  ),
                },
              ]}
            />

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (Desfazendo a inversão simples)",
                  accent: "indigo",
                  content: (
                    <>
                      <p>
                        <strong>Invertida:</strong> <em>“Ontem à noite, entregou a encomenda o motorista.”</em>
                      </p>
                      <p>
                        <strong>Ordem Direta:</strong> <em>“O motorista (Sujeito) entregou (Verbo) a encomenda (Complemento) ontem à noite (Tempo).”</em>
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (Tempo longo antes da vírgula)",
                  accent: "emerald",
                  content: (
                    <>
                      <p>
                        <strong>Invertida:</strong> <em>“Após ampla revisão da minuta, assinaram o termo os novos oficiais.”</em>
                      </p>
                      <p>
                        <strong>Ordem Direta:</strong> <em>“Os novos oficiais (Sujeito) assinaram o termo após ampla revisão da minuta.”</em>
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Real (Pref. Contagem/MG 2026 Q02)",
                  accent: "amber",
                  content: (
                    <>
                      <p>
                        <strong>Frase da prova:</strong> <em>“Próximo à Grande Pirâmide de Quéops, o Egito inaugura o Grande Museu Egípcio.”</em>
                      </p>
                      <p>
                        <strong>Ordem Direta:</strong> <em>“O Egito (Sujeito) inaugura o Grande Museu Egípcio próximo à Grande Pirâmide de Quéops (Lugar dentro do Predicado).”</em>
                      </p>
                    </>
                  ),
                },
              ]}
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
            "**Gabarito Oficial: B**\n- **(B) CORRETA:** A classe morfológica fixa da palavra *servidor* é Substantivo, enquanto seu cargo relacional nessa oração é Sujeito.\n- **(A) ERRADA:** *Advérbio* é classe morfológica, jamais função sintática.\n- **(C) e (D) ERRADAS:** Nenhuma palavra perde sua classe morfológica ao assumir papel sintático.",
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
      title: "Eixo 2 · O Motor da Frase: Transitividade Verbal (VI, VTD, VTI, VTDI, VL) e Objetos",
      subtitle:
        "Significado e analogia própria de cada um dos 5 tipos de verbo (VI, VTD, VTI, VTDI e VL com 5 famílias), falsa preposição, regências campeãs, pronome o/a vs. lhe, camaleões e objetos pleonásticos.",
      estimatedMinutes: 40,
      render: () => (
        <div className="space-y-6">
          {/* 2.1 O Que Significa Transitividade Verbal */}
          <ProseSection
            number="2.1"
            title='O Que Significa "Transitividade Verbal"? (Atravessar ou Fechar o Sentido + Panorama)'
          >
            <DefinitionBlocks
              columns={2}
              items={[
                {
                  term: "Raiz da Palavra: Transitar = Atravessar",
                  badge: "IDEIA CENTRAL",
                  accent: "indigo",
                  summary:
                    "Pense no trânsito da cidade: quando algo transita, atravessa de um ponto ao outro. Na oração, a Transitividade Verbal mede se o verbo fecha o sentido sozinho ou se a ação precisa atravessar até um complemento chamado Objeto.",
                },
                {
                  term: "As 2 Divisões do Comportamento Verbal",
                  badge: "AÇÃO vs. ESTADO",
                  accent: "emerald",
                  summary: (
                    <>
                      <strong>Verbos Significativos (Ação/Evento):</strong> indicam algo acontecendo no mundo e se dividem em{" "}
                      <strong>VI, VTD, VTI e VTDI</strong>.{" "}
                      <strong>Verbo de Ligação (VL):</strong> zero ação física — só liga o Sujeito a uma qualidade ou estado.
                    </>
                  ),
                  note: "Regra de Ouro Contextual: nenhum verbo nasce carimbado no dicionário; o papel dele muda conforme o sentido exato da frase!",
                },
              ]}
            />

            <KeyTable
              title="Panorama Visual dos 5 Tipos de Verbo"
              headers={["Tipo", "Significado do Nome", "Pergunta-Chave", "Analogia-Âncora", "Exemplo"]}
              rows={[
                [
                  "VI (Intransitivo)",
                  "In- (não) + transitivo: não atravessa para objeto",
                  "Nenhuma obrigatória (só cenário: onde? quando?)",
                  "Lanterna a pilha (autossuficiente)",
                  "“O processo chegou hoje.”",
                ],
                [
                  "VTD (Transitivo Direto)",
                  "Atravessa em linha reta, sem preposição",
                  "O quê? / Quem? (direto!)",
                  "Tomada direta / Aperto de mão direto",
                  "“O setor protocolou o pedido.”",
                ],
                [
                  "VTI (Transitivo Indireto)",
                  "Atravessa por uma ponte obrigatória (preposição)",
                  "De quê? / A quê? / Em quê? / Com quê?",
                  "Tomada com adaptador / Ponte com pedágio",
                  "“A equipe precisou de ajuda.”",
                ],
                [
                  "VTDI (Bitransitivo)",
                  "Atravessa por 2 mãos ao mesmo tempo (reta + ponte)",
                  "O quê? + A quem / De quem?",
                  "Carteiro de duas mãos (pacote + destinatário)",
                  "“Entregou o recibo ao cidadão.”",
                ],
                [
                  "VL (De Ligação)",
                  "Zero ação: cola o Sujeito ao estado",
                  "Como o sujeito é / está / ficou / parece?",
                  "Sinal de Igual (=) com filtro de tempo",
                  "“O arquivo permaneceu intacto.”",
                ],
              ]}
            />

            <AnalogyBox title="Analogia da Viagem do Servidor" tag="Comportamento na Frase">
              O verbo é o motor da frase: no <strong>VI</strong>, já chegou ao destino sem precisar de estrada até objeto;
              no <strong>VTD</strong>, vai em linha reta sem pedágio; no <strong>VTI</strong>, precisa obrigatoriamente de
              ponte com pedágio (a <strong>preposição</strong>); no <strong>VTDI</strong>, faz duas entregas ao mesmo
              tempo; e no <strong>VL</strong>, o carro está desligado na garagem só retratando como o sujeito está!
            </AnalogyBox>

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (Verbo 'andar' mudando de VI para VL)",
                  accent: "indigo",
                  content: (
                    <>
                      <p>
                        <em>“O atendente <strong>andou</strong> depressa até o guichê.”</em> → Caminhou de fato (ação
                        completa = <strong>VI</strong>).
                      </p>
                      <p>
                        <em>“O atendente <strong>anda</strong> preocupado com o prazo.”</em> → Não está caminhando; equivale a{" "}
                        <em>está</em> (estado = <strong>VL</strong>).
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (Verbo 'pagar' em VTD, VTI e VTDI)",
                  accent: "emerald",
                  content: (
                    <>
                      <p>
                        <em>“A tesouraria <strong>pagou</strong> a fatura.”</em> → Só coisa sem preposição (<strong>VTD</strong>).
                      </p>
                      <p>
                        <em>“A tesouraria <strong>pagou</strong> ao fornecedor.”</em> → Só pessoa com preposição{" "}
                        <em>a</em> (<strong>VTI</strong>).
                      </p>
                      <p>
                        <em>“A tesouraria <strong>pagou</strong> a fatura <strong>ao</strong> fornecedor.”</em> → Coisa + pessoa
                        juntos (<strong>VTDI</strong>).
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite (Verbo 'virar' como ação vs. estado)",
                  accent: "amber",
                  content: (
                    <>
                      <p>
                        <em>“O estagiário <strong>virou</strong> a folha do livro de atas.”</em> → Ação física sobre objeto
                        (<strong>VTD</strong>).
                      </p>
                      <p>
                        <em>“O novo portal eletrônico <strong>virou</strong> modelo regional.”</em> → Transformação de estado
                        (= <em>tornou-se</em> → <strong>VL</strong>).
                      </p>
                    </>
                  ),
                },
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5s"
              trap="Decorar lista fechada de verbos sem ler a frase inteira — e errar quando ficar, andar, virar, começar ou pagar mudam de sentido."
              escape="Nunca rotule o verbo isolado! Pergunte na frase real: (1) indica ação ou estado? Se ação: (2) fecha sozinho ou pede objeto? Se pede objeto: (3) vem sem preposição, com preposição ou ambos?"
            />
          </ProseSection>

          {/* 2.2 Verbo Intransitivo (VI) */}
          <ProseSection number="2.2" title="Verbo Intransitivo (VI): A Ação Completa Sem Objeto e a Regra do Lugar">
            <DefinitionBlocks
              columns={2}
              items={[
                {
                  term: "Significado do Nome: In- + Transitivo",
                  badge: "SENTIDO FECHADO",
                  accent: "emerald",
                  summary:
                    "O prefixo 'in-' indica negação ('não'). Logo, o Verbo Intransitivo (VI) NÃO atravessa até um objeto: sua ação ou acontecimento se completa integralmente no próprio sujeito.",
                },
                {
                  term: "A Regra de Ouro do Lugar (Cenário ≠ Objeto)",
                  badge: "ONDE NÃO É OBJETO!",
                  accent: "sky",
                  summary:
                    "Verbos de movimento ou permanência física (ir, vir, chegar, sair, voltar, morar, comparecer) ligam-se a preposições indicando LUGAR (ao guichê, em Birigui). Como lugar é cenário, continuam 100% VI!",
                  note: "Teste de 5s: coloque um ponto final após o verbo ou veja se o restante só responde ONDE / QUANDO / COMO.",
                },
              ]}
            />

            <AnalogyBox title="Analogia da Lanterna a Pilha" tag="Autossuficiente">
              A lanterna a pilha já guarda energia própria lá dentro: basta apertar o botão que ela acende sozinha (
              <strong>VI</strong>). Você pode até dizer <em>onde</em> acendeu (<em>no corredor</em>) ou <em>quando</em>{" "}
              (<em>ontem à noite</em>), mas ela não precisa ser plugada em nenhuma tomada externa para fazer sentido!
            </AnalogyBox>

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (Sentido fechado com cenário de modo e tempo)",
                  accent: "indigo",
                  content: (
                    <p>
                      <em>“O bebê <strong>dormiu</strong> tranquilamente durante a madrugada.”</em> → Quem dorme não “dorme
                      algo”; <em>tranquilamente</em> é modo e <em>durante a madrugada</em> é tempo (cenário!) →{" "}
                      <strong>VI</strong>.
                    </p>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (Chegar + Lugar + Tempo)",
                  accent: "emerald",
                  content: (
                    <p>
                      <em>“Os requerimentos urgentes <strong>chegaram</strong> ao setor de compras pela manhã.”</em> →{" "}
                      <em>Ao setor de compras</em> responde <strong>ONDE</strong> (lugar!) e <em>pela manhã</em> responde{" "}
                      <strong>QUANDO</strong> → <strong>VI</strong>!
                    </p>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite (Crase com lugar continua sendo VI!)",
                  accent: "amber",
                  content: (
                    <p>
                      <em>“Todos os fiscais <strong>compareceram</strong> à audiência pública no auditório central.”</em> →
                      Mesmo havendo crase em <em>à audiência pública</em>, responde <strong>AONDE / ONDE</strong>{" "}
                      compareceram (lugar físico do evento). Verbo de movimento + destino físico = <strong>VI</strong>!
                    </p>
                  ),
                },
              ]}
            />

            <KeyTable
              title="Mapa de Gêmeos Confundíveis · Cenário (VI) vs. Alvo (VTD)"
              headers={["Frase Comparada", "Pergunta Respondida Após o Verbo", "Classificação"]}
              rows={[
                ["“O prefeito saiu da reunião.”", "DE ONDE? (lugar físico de origem)", "VI (sem objeto)"],
                ["“A reunião começou pontualmente às 9h.”", "QUANDO / COMO? (cenário completo)", "VI (sentido fechado)"],
                ["“A equipe começou a conferência dos lotes.”", "COMEÇOU O QUÊ? (alvo direto: a conferência)", "VTD (aqui pede objeto!)"],
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5s"
              trap="Ver preposição depois de ir, chegar, morar, voltar ou comparecer ('O munícipe chegou ao guichê') e marcar VTI no susto!"
              escape="Pergunte se a expressão preposicionada responde ONDE/AONDE/DE ONDE (lugar físico) ou O QUÊ/DE QUÊ. Respondeu lugar físico? É VI sem objeto!"
            />
          </ProseSection>

          {/* 2.3 Verbo Transitivo Direto (VTD) */}
          <ProseSection number="2.3" title="Verbo Transitivo Direto (VTD): A Ação em Linha Reta Sem Preposição">
            <DefinitionBlocks
              columns={2}
              items={[
                {
                  term: "Significado do Nome: Atravessa em Linha Reta",
                  badge: "SEM PREPOSIÇÃO OBRIGATÓRIA",
                  accent: "indigo",
                  summary:
                    "Transitivo = precisa ir além do verbo até um alvo; Direto = faz essa travessia em linha reta, SEM exigir preposição obrigatória no meio do caminho. Seu alvo é o Objeto Direto (OD).",
                },
                {
                  term: "Teste Prático em 5 Segundos",
                  badge: "PERGUNTE 'O QUÊ / QUEM?'",
                  accent: "emerald",
                  summary:
                    "Após o verbo, pergunte 'Verbo + O QUÊ?' (coisas) ou 'QUEM?' (pessoas). Troque o complemento todo por ISSO (ou o, a, os, as): se encaixar liso sem preposição antes de ISSO, é VTD 100%!",
                },
              ]}
            />

            <AnalogyBox title="Analogia da Tomada Direta / Aperto de Mão Sem Intermediário" tag="Ligação Direta">
              O <strong>VTD</strong> é um plugue de 2 pinos que encaixa na parede diretamente sem adaptador — ou um aperto
              de mão entre duas pessoas sem nenhum intermediário. Se você disser só <em>“O servidor protocolou”</em>, a
              tomada fica solta no ar esperando <strong>o quê?</strong>
            </AnalogyBox>

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (Verbo preso pela metade sem seu alvo direto)",
                  accent: "indigo",
                  content: (
                    <p>
                      <em>“O cidadão <strong>preencheu</strong> o formulário.”</em> → Responde <em>preencheu O QUÊ?</em> →{" "}
                      <em>o formulário</em> (ligado por artigo <em>o</em>, sem preposição!) → <strong>VTD</strong>.
                    </p>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (Alvo longo resumido em 'ISSO')",
                  accent: "emerald",
                  content: (
                    <p>
                      <em>“A comissão permanente <strong>homologou</strong> o resultado final do concurso.”</em> → Teste:{" "}
                      <em>“A comissão homologou <strong>ISSO</strong>.”</em> Encaixou direto sem preposição →{" "}
                      <strong>VTD</strong>!
                    </p>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite (Artigo 'a' no VTD vs. Preposição 'à' no VTI)",
                  accent: "amber",
                  content: (
                    <>
                      <p>
                        <em>“O coordenador <strong>revisou a</strong> portaria.”</em> → Aqui <strong>a</strong> é só artigo
                        feminino (= <em>revisou o decreto</em> → <strong>VTD</strong>).
                      </p>
                      <p>
                        Compare com <em>“O coordenador <strong>obedeceu à</strong> portaria”</em> → Aqui há crase (
                        <em>obedeceu ao decreto</em> → exige preposição <em>a</em> = <strong>VTI</strong>).
                      </p>
                    </>
                  ),
                },
              ]}
            />

            <CompareGrid
              title="Mapa de Gêmeos Confundíveis · 'a' Artigo (VTD) vs. 'à' Preposição + Artigo (VTI)"
              mode="contrast"
              left={{
                title: "Só Artigo 'a' → VTD",
                badge: "TROQUE POR 'O DECRETO'",
                items: [
                  <span key="vtd1">
                    <em>“Publicou <strong>a</strong> norma.”</em> → Trocando por masculino: <em>“Publicou{" "}
                    <strong>o</strong> decreto.”</em> (nenhuma preposição!).
                  </span>,
                ],
              }}
              right={{
                title: "Crase 'à' (a+a) → VTI",
                badge: "TROQUE POR 'AO DECRETO'",
                items: [
                  <span key="vti1">
                    <em>“Assistiu <strong>à</strong> sessão.”</em> → Trocando por masculino: <em>“Assistiu{" "}
                    <strong>ao</strong> debate.”</em> (apareceu preposição obrigatória <em>a</em>!).
                  </span>,
                ],
              }}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5s"
              trap="Confundir o artigo feminino 'a' com preposição ou enxergar uma preposição lá dentro do complemento ('exibe fachada revestida por...') e achar que o verbo não é VTD."
              escape="Troque o termo feminino por masculino (se virar 'o', não tem preposição!) e faça o Teste de ISSO: cabe 'exibe ISSO'? Então é VTD puro!"
            />
          </ProseSection>

          {/* 2.4 Verbo Transitivo Indireto (VTI) */}
          <ProseSection number="2.4" title="Verbo Transitivo Indireto (VTI): A Ação que Exige Preposição Obrigatória">
            <DefinitionBlocks
              columns={2}
              items={[
                {
                  term: "Significado do Nome: Ponte Obrigatória",
                  badge: "EXIGE PREPOSIÇÃO",
                  accent: "sky",
                  summary:
                    "Indireto porque a ação NÃO alcança o alvo sozinha: exige obrigatoriamente uma ponte chamada preposição (de, a, em, com, por, para). Quem completa esse caminho é o Objeto Indireto (OI).",
                },
                {
                  term: "Cuidado com Contrações Camufladas!",
                  badge: "REVISÃO SEMANA 03",
                  accent: "purple",
                  summary:
                    "Muitas vezes a preposição exigida pelo VTI se esconde misturada ao artigo: de+o = do ('precisa da certidão'), em+o = no ('confia nos relatórios'), a+o = ao / a+a = à ('obedece às normas').",
                  note: "Teste de 5s: troque por DISSO / A ISSO / NISSO / COM ISSO. Se apagar a preposição, a norma culta quebra!",
                },
              ]}
            />

            <AnalogyBox title="Analogia da Tomada com Adaptador Obrigatório" tag="Pedágio na Ponte">
              O <strong>VTI</strong> é um aparelho de 3 pinos que só funciona na tomada antiga se você encaixar antes o{" "}
              <strong>adaptador obrigatório (a preposição)</strong> — ou um motorista que só atravessa o rio pagando o
              pedágio da ponte. Sem a preposição certa, não passa energia nenhuma até o alvo!
            </AnalogyBox>

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (Preposição clara mantendo o sentido)",
                  accent: "indigo",
                  content: (
                    <p>
                      <em>“O estagiário <strong>gosta de</strong> organização.”</em> → Pergunta:{" "}
                      <em>gosta <strong>DE</strong> quê?</em> Teste: <em>gosta <strong>DISSO</strong>.</em> Apagar o{" "}
                      <em>de</em> destrói a norma culta → <strong>VTI</strong>.
                    </p>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (Crase denunciando preposição 'a')",
                  accent: "emerald",
                  content: (
                    <p>
                      <em>“Todos os fiscais <strong>obedeceram às</strong> determinações do decreto.”</em> → Quem obedece,
                      obedece <strong>A</strong> algo (<em>às = preposição a + artigo as</em> → <em>obedeceram A ISSO</em>
                      ) → <strong>VTI</strong>.
                    </p>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite (Contração 'nos' escondendo preposição 'em')",
                  accent: "amber",
                  content: (
                    <p>
                      <em>“A diretoria <strong>confiou nos</strong> relatórios do departamento.”</em> → Desmonte{" "}
                      <strong>nos = em + os</strong>: quem confia, confia <strong>EM</strong> alguém ou algo (
                      <em>confiou NISSO</em>) → <strong>VTI</strong>!
                    </p>
                  ),
                },
              ]}
            />

            <KeyTable
              title="Mapa de Gêmeos Confundíveis · Alvo Indireto (VTI) vs. Lugar Físico (VI)"
              headers={["Frase Analisada", "O Que Vem Depois da Preposição?", "Classificação"]}
              rows={[
                ["“O setor precisou de técnicos.”", "Alvo exigido pelo verbo (DE QUÊ?)", "VTI (Objeto Indireto!)"],
                ["“O servidor morou em Birigui.”", "Localização geográfica (ONDE?)", "VI (lugar não é objeto!)"],
                ["“O cidadão assistiu ao debate.”", "Alvo do sentido 'ver/presenciar' (A QUÊ?)", "VTI (com preposição 'a')"],
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5s"
              trap="Esconder a preposição dentro de contrações ('confiou no plano', 'lembrou-se do prazo', 'assistiu à sessão') para você não enxergar o VTI — ou omitir a preposição em frases com obedecer/visar/assistir."
              escape="Desmonte sempre do = de+o, no = em+o, ao = a+o, à = a+a e faça a pergunta com a preposição: responde A QUÊ / DE QUÊ / EM QUÊ (e não onde)? VTI confirmado!"
            />
          </ProseSection>

          {/* 2.5 Verbo Transitivo Direto e Indireto (VTDI) */}
          <ProseSection number="2.5" title="Verbo Transitivo Direto e Indireto (VTDI): O Verbo de Duas Mãos">
            <DefinitionBlocks
              columns={2}
              items={[
                {
                  term: "Significado do Nome: Bitransitivo (Bi = Dois)",
                  badge: "DUAS VIAS AO MESMO TEMPO",
                  accent: "purple",
                  summary:
                    "O verbo abre duas exigências simultâneas na mesma frase: pede um alvo direto SEM preposição (Objeto Direto) E um alvo indireto COM preposição (Objeto Indireto).",
                },
                {
                  term: "Verbos Típicos de Transferência e Comunicação",
                  badge: "FÓRMULA DE 5 SEGUNDOS",
                  accent: "indigo",
                  summary:
                    "Verbos como entregar, enviar, devolver, informar, comunicar, oferecer e pagar (algo a alguém) encaixam na fórmula: 'Verbo + ISSO (OD) + A ALGUÉM (OI)'.",
                },
              ]}
            />

            <AnalogyBox title="Analogia do Carteiro de Duas Mãos" tag="Pacote + Destinatário">
              O <strong>VTDI</strong> entra na repartição carregando a entrega com as duas mãos ocupadas: na{" "}
              <strong>mão direita</strong> leva o pacote sem adaptador (<em>Objeto Direto: o documento</em>), e na{" "}
              <strong>mão esquerda</strong> segura o endereço com preposição obrigatória (
              <em>Objeto Indireto: ao protocolo</em>). Naquela frase completa, faltando uma das mãos, a mensagem fica pela
              metade!
            </AnalogyBox>

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (Ação completa de entrega)",
                  accent: "indigo",
                  content: (
                    <p>
                      <em>“O porteiro <strong>entregou a correspondência ao</strong> morador.”</em> → Mão direita (
                      <em>o quê?</em>): <em>a correspondência</em> (OD). Mão esquerda (<em>a quem?</em>):{" "}
                      <em>ao morador</em> (OI) → <strong>VTDI</strong>.
                    </p>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (Transferência oficial dupla)",
                  accent: "emerald",
                  content: (
                    <p>
                      <em>“A secretaria <strong>enviou o edital retificado aos</strong> candidatos inscritos.”</em> → Enviou{" "}
                      <strong>ISSO</strong> (<em>o edital retificado</em> = OD) + <strong>A QUEM</strong> (
                      <em>aos candidatos inscritos</em> = OI) → <strong>VTDI</strong>.
                    </p>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite (Pronome 'lhe' ocupando uma das mãos no meio)",
                  accent: "amber",
                  content: (
                    <p>
                      <em>“O diretor <strong>comunicou-lhe o resultado oficial</strong> antes do encerramento.”</em> → Mesmo
                      invertido, os dois alvos estão presentes: <strong>lhe</strong> (= <em>a ele/ela</em>) funciona como OI,
                      e <strong>o resultado oficial</strong> funciona como OD → <strong>VTDI</strong>!
                    </p>
                  ),
                },
              ]}
            />

            <KeyTable
              title="Mapa de Gêmeos Confundíveis · O Mesmo Verbo 'Pagar' em 3 Papéis"
              headers={["Frase Real", "Objetos Presentes", "Transitividade na Frase"]}
              rows={[
                ["“A prefeitura pagou a guia.”", "Apenas a coisa sem preposição (OD)", "VTD"],
                ["“A prefeitura pagou ao servidor.”", "Apenas a pessoa com prep. 'a' (OI)", "VTI"],
                ["“A prefeitura pagou o salário ao servidor.”", "Coisa (OD) + Pessoa com prep. 'a' (OI)", "VTDI"],
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5s"
              trap="Ver 'O diretor assinou o decreto no gabinete' ou 'Arquivou a pasta na gaveta' e chamar de VTDI só porque há dois blocos depois do verbo!"
              escape="Confira a segunda expressão ('no gabinete', 'na gaveta'): ela responde A QUEM / DE QUÊ ou responde ONDE? Se responder ONDE (lugar), NÃO é Objeto Indireto! Há apenas 1 objeto (o decreto) → é só VTD!"
            />
          </ProseSection>

          {/* 2.6 Verbo de Ligacao (VL) */}
          <ProseSection number="2.6" title="Verbo de Ligação (VL): A Ponte de Estado, 5 Famílias e Verbo Mudando de Roupa">
            <DefinitionBlocks
              columns={2}
              items={[
                {
                  term: "Significado do Nome: Ponte Sem Ação",
                  badge: "FOTOGRAFIA DO ESTADO",
                  accent: "amber",
                  summary:
                    "Ao contrário de VI, VTD, VTI e VTDI, o Verbo de Ligação (VL) NÃO expressa ação nem evento físico! Atua apenas como ponte conectando o Sujeito a uma qualidade, condição ou estado.",
                },
                {
                  term: "Teste de 5s: 'Verbo Mudando de Roupa'",
                  badge: "TROQUE POR SER / ESTAR",
                  accent: "rose",
                  summary:
                    "O verbo admite troca por ser/estar ligando o sujeito a uma qualidade ('anda cansado' = 'está cansado' → VL)? Se indicar movimento real ('anda depressa') ou lugar físico ('está na sala'), vira VI!",
                },
              ]}
            />

            <KeyTable
              title="As 5 Famílias Semânticas dos Verbos de Ligação (VL)"
              headers={["Tipo de Estado", "Verbos Principais", "Exemplo em Rotina Municipal"]}
              rows={[
                ["1. Estado Permanente", "ser, viver", "“O prazo legal é improrrogável.” / “O guichê vive lotado.”"],
                ["2. Estado Transitório", "estar, andar, achar-se", "“A servidora anda sobrecarregada neste mês.”"],
                ["3. Mudança de Estado", "ficar, tornar-se, virar", "“O sistema tornou-se totalmente digital.”"],
                ["4. Continuidade de Estado", "permanecer, continuar", "“Os documentos fiscais permaneceram intactos.”"],
                ["5. Aparência de Estado", "parecer", "“O recurso protocolado parece procedente.”"],
              ]}
            />

            <AnalogyBox title="Analogia do Sinal de Igual (=) com Filtro de Tempo" tag="Qualidade do Sujeito">
              O <strong>VL</strong> funciona igual ao sinal <strong>=</strong> da matemática conectando o sujeito à sua
              característica (<em>servidor = tranquilo</em>), mas trazendo um filtro de tempo ou aparência (<em>é</em> =
              sempre; <em>está</em> = agora; <em>ficou</em> = mudou para; <em>permaneceu</em> = continuou; <em>parece</em>{" "}
              = aparenta).
            </AnalogyBox>

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (Mudança de estado emocional = VL)",
                  accent: "indigo",
                  content: (
                    <p>
                      <em>“O cidadão <strong>ficou aliviado</strong> com a resposta.”</em> → Ninguém executa “ficar” sobre um
                      objeto; o verbo só liga <em>cidadão</em> ao estado <em>aliviado</em> → <strong>VL</strong>.
                    </p>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (Continuidade e Aparência)",
                  accent: "emerald",
                  content: (
                    <p>
                      <em>“Todos os balancetes <strong>permaneceram corretos</strong> e a planilha{" "}
                      <strong>parecia atualizada</strong>.”</em> → <em>Permaneceram</em> (continuidade) e{" "}
                      <em>parecia</em> (aparência) conectam estados aos sujeitos → ambos <strong>VL</strong>.
                    </p>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite (Mesmos verbos virando VI ou VTD)",
                  accent: "amber",
                  content: (
                    <>
                      <p>
                        <em>“Os documentos <strong>ficaram</strong> na gaveta.”</em> → Indica lugar onde estão (<strong>VI</strong>).
                      </p>
                      <p>
                        <em>“Os funcionários <strong>ficaram</strong> atentos.”</em> → Indica estado de atenção (<strong>VL</strong>).
                      </p>
                      <p>
                        <em>“O técnico <strong>virou</strong> o monitor”</em> (<strong>VTD</strong> — ação!) vs.{" "}
                        <em>“O edital <strong>virou</strong> referência”</em> (<strong>VL</strong> — transformação!).
                      </p>
                    </>
                  ),
                },
              ]}
            />

            <KeyTable
              title="Mapa de Gêmeos Confundíveis · Ação / Lugar vs. Estado (VL)"
              headers={["Verbo na Frase", "Quando é Ação / Lugar (VI / VTD)", "Quando é Estado (VL)"]}
              rows={[
                ["Andar", "“O oficial andou até o anexo.” (VI — caminhar)", "“O oficial anda preocupado.” (VL — = está)"],
                ["Ficar / Estar", "“Os processos ficaram / estão no balcão.” (VI — lugar!)", "“Os servidores ficaram / estão tranquilos.” (VL — estado!)"],
                ["Virar", "“O diretor virou o monitor.” (VTD — girar algo)", "“O sistema virou referência nacional.” (VL — = tornou-se)"],
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5s"
              trap="Ver ser, estar, ficar, andar, parecer ou permanecer e marcar VL automaticamente mesmo em frases com lugar físico ('Os processos estão no arquivo')."
              escape="Confira o que vem depois do verbo: liga o sujeito a uma qualidade/estado ('estão arquivados', 'ficou atento') = VL! Indica apenas ONDE está no espaço ('no arquivo', 'em casa') = VI!"
            />
          </ProseSection>

          {/* 2.7 Falsa Preposicao e Regencias Campeas */}
          <ProseSection number="2.7" title="A Armadilha da 'Falsa Preposição' e Regências Campeãs">
            <DefinitionBlocks
              columns={1}
              items={[
                {
                  term: "Armadilha da 'Falsa Preposição'",
                  badge: "CONTAGEM/MG 2026 Q01",
                  accent: "rose",
                  summary:
                    "Ocorre quando existe uma preposição visível logo dentro do complemento depois de um verbo, mas NÃO foi o verbo quem exigiu aquela preposição — quem pediu foi outra palavra lá dentro!",
                  example: "Teste infalível de 5s: troque o bloco inteiro após o verbo por ISSO. Coube 'exibe ISSO' (sem preposição antes de ISSO)? É VTD!",
                },
              ]}
            />

            <KeyTable
              title="As 5 Regências Campeãs em Concursos Municipais (ACCESS)"
              headers={["Verbo", "Sem Preposição (VTD)", "Com Preposição Obrigatória (VTI)"]}
              rows={[
                ["Assistir", "= Ajudar / socorrer (“assistiu o doente”)", "= Ver / presenciar (“assistiu ao debate” → prep. A)"],
                ["Visar", "= Assinar / mirar (“visou o cheque”)", "= Almejar / ter meta (“visa ao atendimento” → prep. A)"],
                ["Obedecer / Desobedecer", "(Na norma culta, nunca é VTD!)", "Sempre VTI com prep. A (“obedece às leis / lhe obedece”)"],
                ["Pagar / Perdoar", "COISA = VTD (“pagou a guia / a dívida”)", "PESSOA = VTI com prep. A (“pagou ao servidor”)"],
                ["Aspirar", "= Inalar / cheirar (“aspirou o ar puro”)", "= Desejar cargo (“aspira ao cargo público” → prep. A)"],
              ]}
            />

            <AnalogyBox title="Analogia da Caixa com Etiqueta Dentro" tag="VTD vs. Conteúdo Interno">
              O verbo <strong>VTD</strong> entrega uma <strong>caixa fechada</strong> (<em>“ISSO”</em>). Se dentro da
              caixa há uma etiqueta escrita <em>“por hieróglifos”</em>, essa preposição está presa ao item de dentro, não
              ao carteiro (o verbo)!
            </AnalogyBox>

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (Teste do 'ISSO' desarmando falsa preposição)",
                  accent: "indigo",
                  content: (
                    <>
                      <p>
                        <em>“A técnica <strong>consertou</strong> a impressora <strong>de</strong> jato contínuo.”</em>
                      </p>
                      <p>
                        Troque tudo depois do verbo por <em>ISSO</em>: <em>“consertou <strong>ISSO</strong>”</em>! Quem
                        pediu <em>de</em> foi <em>impressora</em>, nunca <em>consertar</em> → <strong>VTD</strong>.
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (Regências com mudança de sentido)",
                  accent: "emerald",
                  content: (
                    <>
                      <p>
                        <em>“Os vereadores <strong>assistiram à</strong> sessão solene.”</em> (= presenciaram →{" "}
                        <strong>VTI</strong> + preposição <em>a</em>).
                      </p>
                      <p>
                        <em>“O tesoureiro <strong>pagou o salário aos</strong> servidores.”</em> (= coisa sem preposição +
                        pessoa com preposição <em>a</em> → <strong>VTDI</strong>).
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Real ACCESS (Pref. Contagem/MG 2026 Q01)",
                  accent: "amber",
                  content: (
                    <>
                      <p>
                        <em>“O edifício monumental... <strong>exibe</strong> fachada revestida <strong>por</strong> hieróglifos...”</em>
                      </p>
                      <p>
                        Teste do ISSO: <em>“exibe <strong>ISSO</strong>”</em>! Quem pediu <em>por</em> foi{" "}
                        <em>revestida</em>, não <em>exibe</em> → <em>exibe</em> é <strong>VTD puro</strong>!
                      </p>
                    </>
                  ),
                },
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5s"
              trap="Colocar 'Obedeceu o chefe', 'Assistimos o filme' ou ver 'fachada revestida POR hieróglifos' e classificar o verbo como VTI ou VTDI."
              escape="Aplique o Teste de 'ISSO': encaixou 'verbo + ISSO' sem preposição? É VTD. Só é VTI se a preposição ficar colada antes do 'ISSO' (obedece A ISSO, assiste A ISSO, precisa DISSO)."
            />
          </ProseSection>

          {/* 2.8 Objetos OD OI Pronomes Camaleoes */}
          <ProseSection
            number="2.8"
            title="Objetos (OD e OI), Pronomes o/a vs. lhe, Camaleões (me/te/se/nos/vos), OD Preposicionado e Pleonásticos"
          >
            <DefinitionBlocks
              columns={2}
              items={[
                {
                  term: "Objeto Direto (OD)",
                  badge: "COMPLEMENTO DO VTD",
                  accent: "indigo",
                  summary:
                    "Completa o verbo sem preposição obrigatória. Substituível exclusivamente pelos pronomes o, a, os, as (e variantes lo/la, no/na).",
                },
                {
                  term: "Objeto Indireto (OI)",
                  badge: "COMPLEMENTO DO VTI",
                  accent: "sky",
                  summary:
                    "Completa o verbo obrigatoriamente através de preposição (a, de, em, com, por). Quando tem preposição 'a' para pessoa, usa lhe / lhes.",
                },
                {
                  term: "Pronomes Camaleões (me, te, se, nos, vos)",
                  badge: "DEPENDEM DO VERBO",
                  accent: "purple",
                  summary:
                    "Não têm função fixa sozinhos: mudam conforme a transitividade! Com VTD = OD ('Elogiou-me'); com VTI = OI ('Obedeceu-me' = a mim).",
                },
                {
                  term: "OD Preposicionado & Objeto Pleonástico",
                  badge: "CASOS ESPECIAIS",
                  accent: "amber",
                  summary:
                    "OD Preposicionado: verbo VTD com preposição estilística removível ('Cumpriu com o dever' = 'Cumpriu o dever'). Pleonástico: antecipa o objeto e o repete com pronome ('O processo, eu já o arquivei').",
                },
              ]}
            />

            <AnalogyBox title="Analogia das Chaves de Boca" tag="Endereço Exato dos Pronomes">
              O pronome <strong>o/a/lo/no</strong> é a chave fixa do <strong>OD (VTD)</strong>; o pronome{" "}
              <strong>lhe</strong> é a chave do <strong>OI (VTI com prep. a)</strong>; e os camaleões{" "}
              <strong>me/te/se/nos/vos</strong> são chaves ajustáveis que se adaptam ao parafuso (o verbo da oração!).
            </AnalogyBox>

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (o/a vs. lhe na norma culta)",
                  accent: "indigo",
                  content: (
                    <>
                      <p>
                        <em>“Conheço o coordenador.”</em> (VTD) → ✅ <em>“Conheço-<strong>o</strong>.”</em> | ❌{" "}
                        <em>“Conheço-lhe.”</em>
                      </p>
                      <p>
                        <em>“Agradeço ao cidadão.”</em> (VTI) → ✅ <em>“Agradeço-<strong>lhe</strong>.”</em> | ❌{" "}
                        <em>“Agradeço-o.”</em>
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (Camaleões e Pleonasmo)",
                  accent: "emerald",
                  content: (
                    <>
                      <p>
                        <em>“O chefe convocou-<strong>nos</strong>.”</em> (VTD = convocou alguém →{" "}
                        <strong>nos = Objeto Direto</strong>).
                      </p>
                      <p>
                        <em>“O chefe respondeu-<strong>nos</strong>.”</em> (VTI = respondeu a alguém →{" "}
                        <strong>nos = Objeto Indireto</strong>).
                      </p>
                      <p>
                        <em>“<strong>Ao contribuinte</strong>, não <strong>lhe</strong> negamos atendimento.”</em> →{" "}
                        <strong>Objeto Indireto Pleonástico</strong> (repetição enfática!).
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite (OD Preposicionado vs. OI Real)",
                  accent: "amber",
                  content: (
                    <>
                      <p>
                        <em>“A secretária <strong>cumpriu com o dever</strong>.”</em> → Teste da remoção: tirando <em>com</em>,
                        fica perfeito (<em>“cumpriu o dever”</em>) → <strong>Objeto Direto Preposicionado</strong>!
                      </p>
                      <p>
                        Já em <em>“O servidor <strong>precisa de autorização</strong>”</em>, tirar <em>de</em> destrói a norma →{" "}
                        <strong>Objeto Indireto</strong>!
                      </p>
                    </>
                  ),
                },
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5s"
              trap="Usar 'o / no / as' junto de verbo VTI famoso: 'Os servidores obedecem-no rigorosamente' ou 'As normas, o fiscal as obedece'."
              escape="Pergunte: quem obedece, obedece O QUÊ ou A QUÊ? Se exige preposição 'a', proíba o/no/a e substitua por 'lhe' (pessoa) ou 'a ela' (coisa)!"
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
                front: "VTD (Tomada direta) vs. VTI (Adaptador)",
                hint: "Teste de 'ISSO' vs. 'A/DE/EM ISSO'",
                back: "VTD atravessa em linha reta sem preposição ('protocolou ISSO'); VTI exige ponte/preposição obrigatória ('precisou DISSO', 'obedece A ISSO', 'confia NISSO').",
              },
              {
                front: "VTDI (Carteiro de duas mãos)",
                hint: "Bitransitivo = OD + OI juntos",
                back: "Abre duas necessidades simultâneas: algo sem preposição (OD) + a alguém/algo com preposição (OI). Ex: 'Entregou o recibo ao munícipe' / 'comunicou-lhe o resultado'.",
              },
              {
                front: "VL (Sinal de Igual = com filtro de tempo)",
                hint: "5 Famílias de Estado",
                back: "Zero ação: liga o sujeito a um estado (permanente, transitório, mudança, continuidade, aparência). Atenção: 'estar/ficar no arquivo' (lugar!) = VI, não VL!",
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
              "1. O verbo é o motor da oração: ou liga estado (VL), ou indica ação — fechando-se sozinho (VI, mesmo com lugar!), pedindo peça sem preposição (VTD), com preposição (VTI) ou ambas (VTDI).",
              "2. Antes de chamar um verbo de VTI, aplique o Teste de 'ISSO': se couber 'verbo + ISSO', a preposição visível está presa dentro do complemento e o verbo é VTD.",
              "3. o/a/lo/no substitui apenas Objeto Direto; lhe substitui apenas Objeto Indireto (a alguém); e os camaleões me/te/se/nos/vos assumem o cargo que o verbo exigir.",
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
        "Teste da Concordância + Fluxograma em SVG, Sujeito Determinado + Agente da Passiva, Trio do 'SE' (PA × IIS × Reflexivo) e Oração Sem Sujeito (haver × existir, fazer, ser horas).",
      estimatedMinutes: 30,
      render: () => (
        <div className="space-y-6">
          {/* 3.1 Teste da Concordancia + SVG 2 */}
          <ProseSection number="3.1" title="Como Encontrar o Sujeito Sem Nunca Errar (Teste da Concordância)">
            <DefinitionBlocks
              columns={1}
              items={[
                {
                  term: "Teste Definitivo da Concordância",
                  badge: "PROVA DOS 9 INFALÍVEL",
                  accent: "indigo",
                  summary:
                    "Mude a expressão suspeita do singular para o plural (ou vice-versa). Se o verbo for OBRIGADO a mudar junto, você encontrou o Sujeito exato!",
                  note: "Regra de Ouro: o núcleo do sujeito NUNCA vem regido por preposição ('para eu conferir', jamais 'para mim conferir' nem 'apesar dos esforços fracassarem').",
                },
              ]}
            />

            {/* SVG 2 */}
            <div className="rounded-2xl border border-tech bg-slate-950/90 p-3 sm:p-5 overflow-hidden">
              <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
                <span className="text-xs sm:text-sm font-extrabold text-indigo-300">
                  Fluxograma em 4 Decisões para Classificar Qualquer Sujeito
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                  MAPA DE DECISÃO
                </span>
              </div>
              <svg
                viewBox="0 0 740 300"
                className="w-full h-auto"
                role="img"
                aria-label="Fluxograma em 4 decisões para classificar qualquer tipo de sujeito"
              >
                <rect x="8" y="8" width="724" height="284" rx="14" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                <rect x="24" y="22" width="320" height="54" rx="10" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />
                <text x="184" y="43" textAnchor="middle" fill="#a5b4fc" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  DECISÃO 1: O verbo é IMPESSOAL?
                </text>
                <text x="184" y="61" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                  (Haver=existir, Fazer tempo/clima, Chover, Ser horas)
                </text>

                <line x1="344" y1="49" x2="420" y2="49" stroke="#f59e0b" strokeWidth="2" />
                <polygon points="420,44 430,49 420,54" fill="#f59e0b" />
                <text x="382" y="40" textAnchor="middle" fill="#fcd34d" fontSize="10.5" fontWeight="bold" fontFamily="sans-serif">
                  SIM
                </text>

                <rect x="432" y="22" width="284" height="54" rx="10" fill="#451a03" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="574" y="44" textAnchor="middle" fill="#fde68a" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                  ORAÇÃO SEM SUJEITO (Inexistente)
                </text>
                <text x="574" y="62" textAnchor="middle" fill="#e2e8f0" fontSize="10.5" fontFamily="sans-serif">
                  Verbo preso no singular (exceto SER horas/datas)
                </text>

                <line x1="184" y1="76" x2="184" y2="96" stroke="#94a3b8" strokeWidth="2" />
                <polygon points="179,96 184,104 189,96" fill="#94a3b8" />
                <text x="200" y="93" fill="#cbd5e1" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                  NÃO
                </text>

                <rect x="24" y="106" width="320" height="54" rx="10" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />
                <text x="184" y="127" textAnchor="middle" fill="#a5b4fc" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  DECISÃO 2: O sujeito está ESCRITO na oração?
                </text>
                <text x="184" y="145" textAnchor="middle" fill="#ffffff" fontSize="11.5" fontWeight="bold" fontFamily="sans-serif">
                  (Antes ou depois do verbo, sem preposição no núcleo!)
                </text>

                <line x1="344" y1="133" x2="420" y2="133" stroke="#10b981" strokeWidth="2" />
                <polygon points="420,128 430,133 420,138" fill="#10b981" />
                <text x="382" y="124" textAnchor="middle" fill="#34d399" fontSize="10.5" fontWeight="bold" fontFamily="sans-serif">
                  SIM
                </text>

                <rect x="432" y="106" width="284" height="54" rx="10" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
                <text x="574" y="128" textAnchor="middle" fill="#a7f3d0" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                  1 núcleo → SIMPLES | 2+ núcleos → COMPOSTO
                </text>
                <text x="574" y="146" textAnchor="middle" fill="#e2e8f0" fontSize="10.5" fontFamily="sans-serif">
                  Inclui Sujeito Paciente com SE (VTD + se = passiva)
                </text>

                <line x1="184" y1="160" x2="184" y2="180" stroke="#94a3b8" strokeWidth="2" />
                <polygon points="179,180 184,188 189,180" fill="#94a3b8" />
                <text x="200" y="177" fill="#cbd5e1" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                  NÃO está escrito
                </text>

                <rect x="24" y="190" width="320" height="54" rx="10" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />
                <text x="184" y="211" textAnchor="middle" fill="#a5b4fc" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  DECISÃO 3: Dá para saber QUEM É pela
                </text>
                <text x="184" y="229" textAnchor="middle" fill="#ffffff" fontSize="11.5" fontWeight="bold" fontFamily="sans-serif">
                  terminação verbal (eu/nós) ou frase anterior?
                </text>

                <line x1="344" y1="217" x2="420" y2="217" stroke="#38bdf8" strokeWidth="2" />
                <polygon points="420,212 430,217 420,222" fill="#38bdf8" />
                <text x="382" y="208" textAnchor="middle" fill="#38bdf8" fontSize="10.5" fontWeight="bold" fontFamily="sans-serif">
                  SIM
                </text>

                <rect x="432" y="190" width="284" height="54" rx="10" fill="#0c4a6e" stroke="#0ea5e9" strokeWidth="1.5" />
                <text x="574" y="212" textAnchor="middle" fill="#bae6fd" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                  SUJEITO OCULTO (Elíptico / Desinencial)
                </text>
                <text x="574" y="230" textAnchor="middle" fill="#e2e8f0" fontSize="10.5" fontFamily="sans-serif">
                  Ex: “Protocolamos o ofício” (nós)
                </text>

                <rect x="24" y="254" width="692" height="28" rx="8" fill="#3b0764" stroke="#a855f7" strokeWidth="1.2" />
                <text x="370" y="272" textAnchor="middle" fill="#f3e8ff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  SE NÃO SOUBER QUEM É (3ª plural sem referente | VTI/VI/VL + SE [IIS] | Infinitivo Impessoal) → SUJEITO INDETERMINADO
                </text>
              </svg>
            </div>

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (Teste da Concordância)",
                  accent: "indigo",
                  content: (
                    <>
                      <p>
                        <em>“O processo <strong>chegou</strong> hoje.”</em> → Troque para o plural:{" "}
                        <em>“Os processos <strong>chegaram</strong> hoje.”</em> O verbo mudou junto → Sujeito confirmado!
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (Plural enganador com partitivo)",
                  accent: "emerald",
                  content: (
                    <>
                      <p>
                        <em>“A maioria <strong>dos servidores</strong> aprovou (ou aprovaram) a escala.”</em> → O núcleo
                        gramatical exato é <em>maioria</em> (sem preposição!).
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite (Para eu vs. Para mim)",
                  accent: "amber",
                  content: (
                    <>
                      <p>
                        <em>“Trouxeram a ata <strong>para eu</strong> revisar.”</em> → Quem vai revisar?{" "}
                        <strong>Eu</strong> (Sujeito!). Nunca use <em>para mim revisar</em>!
                      </p>
                    </>
                  ),
                },
              ]}
            />
          </ProseSection>

          {/* 3.2 Sujeito Determinado + Voz Passiva Analitica */}
          <ProseSection number="3.2" title="Sujeito Determinado (Simples, Composto e Oculto) + Agente da Passiva">
            <DefinitionBlocks
              columns={2}
              items={[
                {
                  term: "Sujeito Simples vs. Composto",
                  badge: "CONTA NÚCLEOS",
                  accent: "indigo",
                  summary:
                    "Simples = 1 único núcleo (mesmo no plural: 'Os trinta ofícios' = 1 núcleo 'ofícios'). Composto = 2 ou mais núcleos somados ('O prefeito e o diretor').",
                },
                {
                  term: "Sujeito Oculto (Elíptico / Desinencial)",
                  badge: "DESINÊNCIA VERBAL",
                  accent: "sky",
                  summary:
                    "Não está escrito ali, mas é identificado com 100% de certeza pela terminação do verbo ('protocolamos' = nós) ou pela frase anterior.",
                },
                {
                  term: "Voz Passiva Analítica + Agente da Passiva",
                  badge: "SER + PARTICÍPIO",
                  accent: "amber",
                  summary:
                    "Na voz passiva analítica ('A obra foi fiscalizada pelo engenheiro'), o antigo objeto vira Sujeito Simples Paciente ('A obra'), e quem age na ativa vira Agente da Passiva (sempre com preposição por/pelo ou de).",
                },
              ]}
            />

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (Plural com 1 núcleo ainda é Simples!)",
                  accent: "indigo",
                  content: (
                    <>
                      <p>
                        <em>“As três janelas da sala quebraram.”</em> → 1 núcleo (<em>janelas</em>) →{" "}
                        <strong>Sujeito Simples</strong>.
                      </p>
                      <p>
                        <em>“A porta e a janela quebraram.”</em> → 2 núcleos → <strong>Sujeito Composto</strong>.
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (Sujeito Oculto)",
                  accent: "emerald",
                  content: (
                    <p>
                      <em>“Protocolamos o edital no sistema hoje pela manhã.”</em> → Terminação <em>-mos</em> revela{" "}
                      <strong>Nós</strong> → <strong>Sujeito Oculto</strong>.
                    </p>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite (Transformando Voz Ativa → Passiva Analítica)",
                  accent: "amber",
                  content: (
                    <>
                      <p>
                        <strong>Ativa:</strong> <em>“O engenheiro responsável fiscalizou a obra.”</em>
                      </p>
                      <p>
                        <strong>Passiva Analítica:</strong> <em>“<strong>A obra</strong> foi fiscalizada{" "}
                        <strong>pelo engenheiro responsável</strong>.”</em> → <em>A obra</em> = Sujeito Paciente;{" "}
                        <em>pelo engenheiro responsável</em> = <strong>Agente da Passiva</strong>.
                      </p>
                    </>
                  ),
                },
              ]}
            />
          </ProseSection>

          {/* 3.3 Trio do SE e Indeterminado */}
          <ProseSection number="3.3" title="Sujeito Indeterminado (As 3 Formas) vs. Voz Passiva com 'SE' vs. Reflexivo">
            <DefinitionBlocks
              columns={1}
              items={[
                {
                  term: "As 3 Formas Oficiais de Sujeito Indeterminado",
                  badge: "HÁ AGENTE, MAS NÃO SE SABE QUEM",
                  accent: "purple",
                  summary:
                    "(1) Verbo na 3ª pessoa do plural sem sujeito anterior ('Protocolaram uma denúncia'). (2) VTI, VI ou VL na 3ª pessoa do singular + SE (Índice de Indeterminação — IIS). (3) Verbo no Infinitivo Impessoal ('É preciso revisar o contrato').",
                },
                {
                  term: "Partícula Apassivadora (PA): VTD / VTDI + SE",
                  badge: "TEM SUJEITO PACIENTE!",
                  accent: "emerald",
                  summary:
                    "Aqui EXISTE Sujeito Paciente escrito depois do verbo! Como você já aprendeu VTD no Eixo 2, lembre: 'Alugam-se salas' = 'Salas são alugadas' → verbo varia no plural!",
                },
                {
                  term: "Pronome Reflexivo (SE)",
                  badge: "A SI MESMO",
                  accent: "sky",
                  summary:
                    "Há um sujeito claro (expresso ou retomado por 'que') que pratica e recebe a ação em si mesmo. Caso Real ACCESS (Domingos Martins/ES 2023 Q05): 'um assento que se esterilizava'.",
                },
              ]}
            />

            <KeyTable
              title="Mapa Campeão · O Trio do 'SE'"
              headers={["Papel do SE", "Estrutura Verbal", "Concordância", "Teste Prático"]}
              rows={[
                ["Partícula Apassivadora (PA)", "VTD (ou VTDI) + SE", "Concorda com o Sujeito Paciente (plural!)", "“Salas são alugadas” ✅ (“Alugam-se salas”)"],
                ["Índice de Indeterminação (IIS)", "VTI, VI ou VL + SE", "TRAVADO NO SINGULAR!", "❌ “De oficiais é precisado” (Sujeito Indeterminado)"],
                ["Pronome Reflexivo", "Sujeito claro age sobre si", "Concorda com esse sujeito", "Troque por “a si mesmo” (“que se esterilizava”)"],
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5s"
              trap="Escrever 'Necessitam-se de digitadores' ou 'Tratam-se de casos graves' no plural!"
              escape="Viu Verbo + SE seguido de preposição (de, em, a, com)? É VTI + SE = IIS (Sujeito Indeterminado): trave o verbo 100% no singular ('Necessita-se de...', 'Trata-se de...')!"
            />
          </ProseSection>

          {/* 3.4 Oracao Sem Sujeito */}
          <ProseSection number="3.4" title="Oração Sem Sujeito (Sujeito Inexistente) e Todos os Verbos Impessoais">
            <DefinitionBlocks
              columns={2}
              items={[
                {
                  term: "1. Haver (= existir / tempo)",
                  badge: "TRAVA NO SINGULAR",
                  accent: "rose",
                  summary:
                    "No sentido de 'existir', 'ocorrer' ou tempo decorrido, NÃO tem sujeito — e trava até o verbo auxiliar no singular ('Deve haver vagas').",
                },
                {
                  term: "2. Fazer (tempo / clima)",
                  badge: "TRAVA NO SINGULAR",
                  accent: "amber",
                  summary:
                    "Indicando tempo decorrido ou temperatura ('Faz cinco meses', 'Deve fazer dias frios'). Jamais vai para o plural!",
                },
                {
                  term: "3. Fenômenos da Natureza",
                  badge: "REAL vs. FIGURADO",
                  accent: "sky",
                  summary:
                    "Sentido real = Sem Sujeito ('Choveu em Birigui'). Sentido figurado ganha sujeito e vai ao plural ('Choveram elogios ao edital').",
                },
                {
                  term: "4. Estar/Ficar (clima) · Chega/Basta · Ser (horas/datas)",
                  badge: "EXCEÇÃO DO SER",
                  accent: "indigo",
                  summary:
                    "'Está quente', 'Basta de atrasos' ficam no singular. Já o verbo SER (horas, datas, distâncias) é Oração Sem Sujeito, mas concorda com o numeral ('São dez horas', 'São 10 km').",
                },
              ]}
            />

            <KeyTable
              title="Verbos Impessoais vs. Seus Gêmeos Pessoais (Existir / Ocorrer)"
              headers={["Verbo / Expressão", "Tipo de Sujeito", "Concordância", "Exemplo Correto na Norma Culta"]}
              rows={[
                ["Haver (= existir ou tempo)", "Oração Sem Sujeito", "Sempre singular (inclusive auxiliar)", "“Deve haver dez arquivos na mesa.”"],
                ["Existir / Ocorrer / Acontecer", "Sujeito Determinado", "Vai ao plural normalmente", "“Devem existir dez arquivos na mesa.”"],
                ["Fazer (tempo ou clima)", "Oração Sem Sujeito", "Sempre singular (inclusive auxiliar)", "“Deve fazer cinco meses do edital.”"],
                ["Ser (horas, datas, distâncias)", "Oração Sem Sujeito", "Concorda com o numeral", "“São exatamente quatorze horas.”"],
              ]}
            />

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (Haver vs. Existir)",
                  accent: "indigo",
                  content: (
                    <>
                      <p>
                        <em>“<strong>Havia</strong> três candidatos na recepção.”</em> (Oração Sem Sujeito → singular!).
                      </p>
                      <p>
                        <em>“<strong>Existiam</strong> três candidatos na recepção.”</em> (Sujeito Simples → plural!).
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (Locução Verbal Impessoal)",
                  accent: "emerald",
                  content: (
                    <>
                      <p>
                        <em>“<strong>Vai fazer</strong> quatro meses que a comissão começou.”</em> (Auxiliar{" "}
                        <em>Vai</em> preso no singular!).
                      </p>
                      <p>
                        <em>“<strong>Pode haver</strong> novas convocações neste semestre.”</em> (Auxiliar <em>Pode</em>{" "}
                        preso no singular!).
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite (Haver auxiliar = Ter)",
                  accent: "amber",
                  content: (
                    <p>
                      <em>“Os servidores <strong>haviam</strong> protocolado os autos.”</em> → Aqui <em>haviam</em>{" "}
                      significa <strong>tinham</strong> (auxiliar de particípio): tem Sujeito Simples (<em>Os servidores</em>) e
                      vai ao plural normalmente!
                    </p>
                  ),
                },
              ]}
            />
          </ProseSection>

          <FlipCardsGrid
            title="Flashcards de Memorização Ativa · Eixo 3"
            cards={[
              {
                front: "Teste da Concordância",
                hint: "Como achar o Sujeito?",
                back: "Mude o termo para singular/plural. Quem obrigar o verbo a mudar junto — e tiver núcleo sem preposição — é o Sujeito!",
              },
              {
                front: "Sujeito Simples × Composto",
                hint: "'Os 30 processos chegaram'",
                back: "Conta-se o número de NÚCLEOS! Um grupo no plural (processos) tem apenas 1 núcleo = Sujeito Simples.",
              },
              {
                front: "Voz Passiva Analítica + Agente",
                hint: "'A obra foi fiscalizada pelo diretor'",
                back: "'A obra' = Sujeito Paciente; 'pelo diretor' = Agente da Passiva (quem faz a ação na ativa, sempre com prep. por/de).",
              },
              {
                front: "VTD + se (PA) × VTI/VI/VL + se (IIS)",
                hint: "Diferença chave do Eixo 3",
                back: "VTD + se tem Sujeito Paciente (verbo vai ao plural). VTI/VI/VL + se tem Sujeito Indeterminado (verbo travado no singular!).",
              },
              {
                front: "Pronome Reflexivo (SE)",
                hint: "Domingos Martins/ES 2023 Q05",
                back: "Sujeito claro fazendo e sofrendo a ação em si mesmo ('um assento que se esterilizava'). Aceita 'a si mesmo'.",
              },
              {
                front: "Haver / Fazer vs. Existir / Ser",
                hint: "Oração Sem Sujeito",
                back: "Haver (= existir/tempo) e Fazer (= tempo/clima) travam inclusive o auxiliar no singular. Existir concorda no plural; Ser (horas/datas) concorda com o numeral!",
              },
            ]}
          />

          <FeynmanCard
            title="Síntese Feynman de 3 Linhas · Eixo 3"
            lines={[
              "1. O Sujeito é o termo de núcleo sem preposição que comanda o verbo: pode ser Determinado (Simples, Composto, Oculto — inclusive paciente na Voz Passiva com Agente da Passiva), Indeterminado ou Inexistente.",
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
        "Predicado Verbal, Nominal e Verbo-Nominal (+ Fluxograma em SVG), Predicativo do Sujeito × Predicativo do Objeto e os 2 Testes matadores (pronome o/a e feminino plural).",
      estimatedMinutes: 25,
      render: () => (
        <div className="space-y-6">
          {/* 4.1 3 Tipos de Predicado + SVG 3 */}
          <ProseSection number="4.1" title="Os 3 Tipos de Predicado (PV, PN e PVN) + Fluxograma em SVG">
            <DefinitionBlocks
              columns={2}
              items={[
                {
                  term: "Predicado Verbal (PV)",
                  badge: "1 NÚCLEO = VERBO",
                  accent: "sky",
                  summary:
                    "O núcleo é apenas um verbo significativo (VI, VTD, VTI ou VTDI). Transmite apenas ação/evento, sem predicativo.",
                  example: "“Os auditores examinaram os contratos.”",
                },
                {
                  term: "Predicado Nominal (PN)",
                  badge: "1 NÚCLEO = NOME",
                  accent: "emerald",
                  summary:
                    "Tem Verbo de Ligação (VL) + qualidade/estado do sujeito (Predicativo do Sujeito). O núcleo é o nome, não o verbo!",
                  example: "“Os documentos permaneceram intactos.”",
                },
                {
                  term: "Predicado Verbo-Nominal (PVN)",
                  badge: "2 NÚCLEOS JUNTOS",
                  accent: "amber",
                  summary:
                    "Soma 1 verbo significativo (ação) + 1 predicativo (estado/qualidade momentânea do Sujeito ou do Objeto) ao mesmo tempo!",
                  example: "“O fiscal chegou exausto.” / “Julgou válido o edital.”",
                },
              ]}
            />

            {/* SVG 3 */}
            <div className="rounded-2xl border border-tech bg-slate-950/90 p-3 sm:p-5 overflow-hidden">
              <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
                <span className="text-xs sm:text-sm font-extrabold text-indigo-300">
                  Fluxograma da Classificação dos 3 Tipos de Predicado
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                  MAPA DE DECISÃO
                </span>
              </div>
              <svg
                viewBox="0 0 740 295"
                className="w-full h-auto"
                role="img"
                aria-label="Fluxograma dos 3 tipos de predicado e seus núcleos"
              >
                <rect x="8" y="8" width="724" height="279" rx="14" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                <rect x="24" y="24" width="320" height="58" rx="10" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />
                <text x="184" y="47" textAnchor="middle" fill="#a5b4fc" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  PASSO 1: O verbo indica AÇÃO/ACONTECIMENTO
                </text>
                <text x="184" y="66" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                  ou é apenas PONTE DE ESTADO (ser, estar, parecer)?
                </text>

                <line x1="344" y1="53" x2="418" y2="53" stroke="#10b981" strokeWidth="2" />
                <polygon points="418,48 428,53 418,58" fill="#10b981" />
                <text x="381" y="44" textAnchor="middle" fill="#34d399" fontSize="10.5" fontWeight="bold" fontFamily="sans-serif">
                  ESTADO
                </text>

                <rect x="430" y="24" width="286" height="58" rx="10" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
                <text x="573" y="46" textAnchor="middle" fill="#a7f3d0" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                  VERBO DE LIGAÇÃO (VL) + PRED. SUJEITO
                </text>
                <text x="573" y="66" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontFamily="sans-serif">
                  → PREDICADO NOMINAL (Ex: “O servidor está calmo.”)
                </text>

                <line x1="184" y1="82" x2="184" y2="108" stroke="#38bdf8" strokeWidth="2" />
                <polygon points="179,108 184,116 189,108" fill="#38bdf8" />
                <text x="200" y="102" fill="#7dd3fc" fontSize="10.5" fontWeight="bold" fontFamily="sans-serif">
                  INDICA AÇÃO (Verbo Significativo)
                </text>

                <rect x="24" y="118" width="692" height="72" rx="10" fill="#0c4a6e" stroke="#0ea5e9" strokeWidth="1.5" />
                <text x="370" y="140" textAnchor="middle" fill="#bae6fd" fontSize="11.5" fontWeight="bold" fontFamily="sans-serif">
                  PASSO 2: Identifique a transitividade já aprendida no Eixo 2
                </text>
                <text x="140" y="164" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  • VI (sem objeto)
                </text>
                <text x="140" y="180" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontFamily="sans-serif">
                  (“O prazo expirou hoje.”)
                </text>
                <text x="365" y="164" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  • VTD (+ OD sem prep.)
                </text>
                <text x="365" y="180" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontFamily="sans-serif">
                  (“Vetou o artigo.”)
                </text>
                <text x="595" y="164" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  • VTI (+ OI) | VTDI (Ambos)
                </text>
                <text x="595" y="180" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontFamily="sans-serif">
                  (“Obedeceu à norma.” / “Deu a guia ao munícipe.”)
                </text>

                <line x1="370" y1="190" x2="370" y2="212" stroke="#f59e0b" strokeWidth="2" />
                <polygon points="365,212 370,220 375,212" fill="#f59e0b" />
                <text x="386" y="207" fill="#fcd34d" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                  PASSO 3: Há também uma QUALIDADE de Sujeito ou Objeto fora do nome?
                </text>

                <rect x="24" y="222" width="334" height="50" rx="10" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
                <text x="191" y="244" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                  NÃO há predicativo → PREDICADO VERBAL
                </text>
                <text x="191" y="261" textAnchor="middle" fill="#94a3b8" fontSize="10.5" fontFamily="sans-serif">
                  1 único núcleo: o verbo (“O fiscal chegou hoje.”)
                </text>

                <rect x="378" y="222" width="338" height="50" rx="10" fill="#451a03" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="547" y="244" textAnchor="middle" fill="#fde68a" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                  SIM (ação + qualidade) → VERBO-NOMINAL
                </text>
                <text x="547" y="261" textAnchor="middle" fill="#fef3c7" fontSize="10.5" fontFamily="sans-serif">
                  2 núcleos (“O fiscal saiu satisfeito.” / “Julgou o ato válido.”)
                </text>
              </svg>
            </div>

            <AnalogyBox title="Analogia da Câmera Fotográfica" tag="Vídeo × Foto × Os Dois">
              O <strong>Predicado Verbal (PV)</strong> é uma câmera gravando apenas movimento (<em>“correu”</em>); o{" "}
              <strong>Predicado Nominal (PN)</strong> é uma foto parada retratando um estado (<em>“está calmo”</em>); e o{" "}
              <strong>Predicado Verbo-Nominal (PVN)</strong> grava o movimento e tira a foto ao mesmo tempo (
              <em>“chegou cansado”</em> = chegou + estava cansado!).
            </AnalogyBox>

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (Os 3 Predicados na sequência)",
                  accent: "indigo",
                  content: (
                    <>
                      <p>
                        <em>“A técnica consertou o computador.”</em> → Só ação (<strong>PV</strong>).
                      </p>
                      <p>
                        <em>“A técnica ficou satisfeita.”</em> → Só estado com VL (<strong>PN</strong>).
                      </p>
                      <p>
                        <em>“A técnica saiu satisfeita da sala.”</em> → Ação + qualidade do sujeito (<strong>PVN</strong>).
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura ('Estar' de lugar vs. 'Estar' de estado)",
                  accent: "emerald",
                  content: (
                    <>
                      <p>
                        <em>“Os documentos <strong>estão</strong> no arquivo.”</em> → Localização física (VI) →{" "}
                        <strong>Predicado Verbal (PV)</strong>!
                      </p>
                      <p>
                        <em>“Os documentos <strong>estão</strong> arquivados.”</em> → Estado ligado ao sujeito (VL) →{" "}
                        <strong>Predicado Nominal (PN)</strong>!
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite (PVN com qualidade do Objeto)",
                  accent: "amber",
                  content: (
                    <p>
                      <em>“A comissão jurídica <strong>julgou improcedente</strong> a impugnação.”</em> → Ação (
                      <em>julgou</em>) + julgamento atribuído ao objeto <em>impugnação</em> →{" "}
                      <strong>Predicado Verbo-Nominal (PVN)</strong>!
                    </p>
                  ),
                },
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5s"
              trap="Ver o verbo 'estar' ou 'andar' e marcar automaticamente 'Predicado Nominal' sem olhar o que vem depois!"
              escape="Confira se há qualidade/estado ou apenas lugar físico: 'Os fiscais estão no pátio' não tem qualidade nenhuma — é VI e Predicado Verbal!"
            />
          </ProseSection>

          {/* 4.2 Predicativo do Sujeito vs Predicativo do Objeto */}
          <ProseSection number="4.2" title="Predicativo do Sujeito (PS) vs. Predicativo do Objeto (PO) + 2 Testes">
            <DefinitionBlocks
              columns={2}
              items={[
                {
                  term: "Predicativo do Sujeito (PS)",
                  badge: "QUALIDADE DO SUJEITO",
                  accent: "emerald",
                  summary:
                    "Qualidade ou estado ligado ao Sujeito (seja em PN com verbo de ligação ou em PVN junto de verbo de ação).",
                  example: "“Os servidores retornaram motivados.”",
                },
                {
                  term: "Predicativo do Objeto (PO)",
                  badge: "JULGAMENTO / ESTADO DO OBJETO",
                  accent: "amber",
                  summary:
                    "Qualidade momentânea ou julgamento atribuído ao Objeto por meio do verbo (comum com julgar, considerar, nomear, eleger, encontrar, tornar).",
                  example: "“A comissão julgou válido o edital.”",
                },
              ]}
            />

            <StepByStep
              title="Os 2 Testes de 5 Segundos para Isolar o Predicativo Sem Erros"
              problem="Como saber se o adjetivo é PO/PS ou se é característica fixa interna / advérbio?"
              steps={[
                {
                  title: "Teste 1 · Substitua o Objeto pelo Pronome o / a / os / as",
                  badge: "SEPARA PO",
                  content: (
                    <p>
                      A qualidade <strong>SOBROU DO LADO DE FORA</strong> do pronome (<em>“julgou-o válido”</em>)? É{" "}
                      <strong>Predicativo do Objeto (PO)</strong>! Sumiu para dentro do pronome (<em>“aprovou-o”</em>)? Era
                      apenas característica fixa interna do substantivo (estudada no Eixo 5!).
                    </p>
                  ),
                },
                {
                  title: "Teste 2 · Passe o Sujeito para o Feminino Plural",
                  badge: "SEPARA PS DE ADVÉRBIO",
                  content: (
                    <p>
                      A palavra flexionou para concordar (<em>“As servidoras saíram <strong>alegres</strong>”</em>)? É{" "}
                      <strong>Predicativo</strong>! Travou invariável no singular (<em>“falaram <strong>alto / rápido</strong>”</em>)?
                      É <strong>Advérbio</strong>!
                    </p>
                  ),
                },
              ]}
            />

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (Teste do Pronome o/a)",
                  accent: "indigo",
                  content: (
                    <>
                      <p>
                        <em>“A família comprou o carro usado.”</em> → <em>“A família comprou-<strong>o</strong>.”</em> (
                        <em>usado</em> sumiu dentro de <em>o</em> → qualidade fixa interna do nome).
                      </p>
                      <p>
                        <em>“A família encontrou o carro destruído.”</em> →{" "}
                        <em>“A família encontrou-<strong>o destruído</strong>.”</em> (ficou de fora!) →{" "}
                        <strong>Predicativo do Objeto (PO)</strong>.
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (Teste do Feminino Plural)",
                  accent: "emerald",
                  content: (
                    <>
                      <p>
                        <em>“As atendentes retornaram <strong>motivadas</strong>.”</em> (variou → <strong>PS</strong> em PVN).
                      </p>
                      <p>
                        <em>“As atendentes digitaram <strong>rápido</strong>.”</em> (não varia → Advérbio em PV!).
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite (PO deslocado antes do substantivo)",
                  accent: "amber",
                  content: (
                    <p>
                      <em>“O conselho considerou <strong>válidos</strong> os argumentos.”</em> → Substitua <em>os argumentos</em>{" "}
                      por <em>os</em>: <em>“O conselho <strong>os</strong> considerou <strong>válidos</strong>.”</em> → Ficou
                      de fora = <strong>Predicativo do Objeto (PO)</strong>!
                    </p>
                  ),
                },
              ]}
            />

            <KeyTable
              title="Mapa de Gêmeos Confundíveis · Testes Rápidos"
              headers={["Frase Comparada", "Resultado do Teste", "Classificação"]}
              rows={[
                ["“Encontrei a porta aberta.”", "“Encontrei-a aberta.” (fora do pronome)", "PO (Predicativo do Objeto → PVN)"],
                ["“Limpei a porta vermelha.”", "“Limpei-a.” (sumiu dentro do pronome)", "Qualidade fixa interna (veremos no Eixo 5)"],
                ["“As fiscais saíram calmas.”", "Flexionou para o feminino plural", "PS (Predicativo do Sujeito → PVN)"],
                ["“As fiscais falaram calmo.”", "Invariável (não vira calmas)", "Advérbio de modo (→ PV)"],
              ]}
            />
          </ProseSection>

          <FlipCardsGrid
            title="Flashcards de Memorização Ativa · Eixo 4"
            cards={[
              {
                front: "PV × PN × PVN",
                hint: "Quantos núcleos tem cada um?",
                back: "PV = 1 núcleo verbal (só ação). PN = 1 núcleo nominal (VL + PS). PVN = 2 núcleos ao mesmo tempo (ação significativa + PS ou PO)!",
              },
              {
                front: "'Estar' de lugar vs. estado",
                hint: "Cuidado na armadilha!",
                back: "'O processo está na mesa' indica lugar físico (VI → Predicado Verbal). Só é Nominal quando liga a uma característica ('está completo').",
              },
              {
                front: "Teste do Pronome (o/a)",
                hint: "Como achar o PO?",
                back: "Troque o Objeto Direto por o/a/os/as. Se o adjetivo SOBRAR fora do pronome ('julgou-a improcedente'), é Predicativo do Objeto (PO)!",
              },
              {
                front: "Teste do Feminino Plural",
                hint: "Predicativo × Advérbio",
                back: "Mude o sujeito para 'Elas'. Mudou junto ('saíram animadas') = Predicativo! Ficou travado ('falaram alto/claro/rápido') = Advérbio!",
              },
            ]}
          />

          <FeynmanCard
            title="Síntese Feynman de 3 Linhas · Eixo 4"
            lines={[
              "1. O Predicado é Verbal (só ação), Nominal (só estado com Verbo de Ligação + Predicativo do Sujeito) ou Verbo-Nominal (ação significativa + qualidade momentânea ao mesmo tempo = 2 núcleos).",
              "2. Para não confundir Predicativo do Objeto com característica fixa interna do substantivo, troque o objeto por o/a: se a qualidade sobrar fora do pronome ('julgou-o válido'), é PO.",
              "3. Se você passar o sujeito para o feminino plural e o termo flexionar junto ('saíram satisfeitas'), é Predicativo; se ficar invariável ('falaram claro'), é Advérbio.",
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
            "**Gabarito Oficial: C**\n- **(C) CORRETA:** Em I há verbo de ação (`chegaram`, `VI`) + estado do sujeito (`cansados`) → **Predicado Verbo-Nominal**; em II há `VL` (`permaneceu`) + estado (`arquivada`) → **Predicado Nominal**; em III há apenas ação significativa (`notificaram`) → **Predicado Verbal**.\n- **(A), (B) e (D) ERRADAS:** Invertem `PVN`, `PN` e `PV`.",
        },
        {
          num: "2",
          header: "Questão 11",
          banca: "**Banca:** Adaptada para o Padrão Instituto ACCESS | Cargo: Oficial Administrativo",
          statement:
            "Assinale a alternativa em que o termo destacado desempenha a função sintática de **Predicativo do Objeto (`PO`)**:",
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
            "**Gabarito Oficial: D**\n- **(D) CORRETA:** *“entregou-a reformada”* (*reformada* fica fora do pronome = **PO**); *“as engenheiras saíram satisfeitas”* (flexiona = **PS**); *“as engenheiras falaram claro”* (invariável = **Advérbio de Modo**).\n- **(A), (B) e (C) ERRADAS:** Misturam advérbio invariável com adjetivos predicativos.",
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
        "Adjunto Adnominal (5 classes + separação de PO), Complemento Nominal vs. Adjunto Adnominal (Fluxograma em SVG), Adjunto Adverbial (10 valores + vírgula + quão), Aposto (4 tipos) e Vocativo.",
      estimatedMinutes: 30,
      render: () => (
        <div className="space-y-6">
          {/* 5.1 Adjunto Adnominal */}
          <ProseSection number="5.1" title="Adjunto Adnominal (AA): As 5 Classes Satélites do Substantivo">
            <DefinitionBlocks
              columns={1}
              items={[
                {
                  term: "Adjunto Adnominal (AA) — O Satélite Interno do Substantivo",
                  badge: "5 CLASSES POSSÍVEIS",
                  accent: "indigo",
                  summary:
                    "É todo termo que mora grudado ao redor de um substantivo para determiná-lo ou caracterizá-lo por dentro: (1) Artigo (o, um); (2) Adjetivo interno; (3) Pronome adjetivo (meu, este); (4) Numeral adjetivo (dois); (5) Locução adjetiva (de ferro, de Birigui).",
                  note: "Conexão direta com o Eixo 4: ao trocar o substantivo por o/a/os/as, tudo o que sumir engolido dentro do pronome é Adjunto Adnominal! O que ficar do lado de fora é Predicativo do Objeto!",
                },
              ]}
            />

            <AnalogyBox title="Analogia da Capa e Adesivo do Caderno" tag="Mora Dentro do Substantivo">
              Os <strong>Adjuntos Adnominais</strong> são os adesivos colados na capa do caderno: quando você substitui o
              bloco por <em>“Entreguei-o”</em>, todos os adesivos vão juntos dentro do pronome <em>o</em>!
            </AnalogyBox>

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (Múltiplos satélites no mesmo substantivo)",
                  accent: "indigo",
                  content: (
                    <p>
                      <em>“<strong>Aqueles dois novos</strong> relatórios <strong>de despesas</strong> chegaram.”</em> →
                      Os termos ligados ao núcleo <em>relatórios</em> são todos <strong>Adjuntos Adnominais</strong>.
                    </p>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (Engolidos no teste do pronome)",
                  accent: "emerald",
                  content: (
                    <p>
                      <em>“O técnico arquivou <strong>os três formulários antigos da recepção</strong>.”</em> → Troca:{" "}
                      <em>“O técnico arquivou-<strong>os</strong>.”</em> Tudo sumiu dentro de <em>os</em> ={" "}
                      <strong>Adjuntos Adnominais</strong>!
                    </p>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite (AA × Predicativo do Objeto)",
                  accent: "amber",
                  content: (
                    <>
                      <p>
                        <em>“A diretoria aprovou a nova proposta urgente.”</em> → <em>“aprovou-<strong>a</strong>”</em> (
                        <em>urgente</em> sumiu dentro = <strong>AA</strong>).
                      </p>
                      <p>
                        <em>“A diretoria julgou <strong>urgente</strong> a nova proposta.”</em> → <em>“julgou-<strong>a urgente</strong>”</em>{" "}
                        (ficou fora = <strong>PO</strong>).
                      </p>
                    </>
                  ),
                },
              ]}
            />
          </ProseSection>

          {/* 5.2 Complemento Nominal x Adjunto Adnominal + SVG 4 */}
          <ProseSection number="5.2" title="Complemento Nominal (CN) e o Duelo Campeão CN × AA (+ Fluxograma SVG)">
            <DefinitionBlocks
              columns={1}
              items={[
                {
                  term: "Complemento Nominal (CN)",
                  badge: "OBRIGATORIAMENTE PREPOSICIONADO",
                  accent: "emerald",
                  summary:
                    "Completa obrigatoriamente o sentido de um NOME (Adjetivo, Advérbio ou Substantivo Abstrato no sentido paciente) — nunca de um verbo!",
                },
              ]}
            />

            {/* SVG 4 */}
            <div className="rounded-2xl border border-tech bg-slate-950/90 p-3 sm:p-5 overflow-hidden">
              <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
                <span className="text-xs sm:text-sm font-extrabold text-indigo-300">
                  Fluxograma em 3 Passos: Complemento Nominal × Adjunto Adnominal
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                  CAMPEÃO ACCESS
                </span>
              </div>
              <svg
                viewBox="0 0 740 310"
                className="w-full h-auto"
                role="img"
                aria-label="Fluxograma em 3 passos para distinguir Complemento Nominal de Adjunto Adnominal"
              >
                <rect x="8" y="8" width="724" height="294" rx="14" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                <rect x="24" y="26" width="330" height="62" rx="10" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />
                <text x="189" y="49" textAnchor="middle" fill="#a5b4fc" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  PASSO 1: A palavra principal é
                </text>
                <text x="189" y="69" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                  ADJETIVO ou ADVÉRBIO?
                </text>

                <line x1="354" y1="57" x2="430" y2="57" stroke="#10b981" strokeWidth="2" />
                <polygon points="430,52 440,57 430,62" fill="#10b981" />
                <text x="392" y="48" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  SIM
                </text>

                <rect x="442" y="26" width="270" height="62" rx="10" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
                <text x="577" y="50" textAnchor="middle" fill="#a7f3d0" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                  100% COMPLEMENTO NOMINAL
                </text>
                <text x="577" y="70" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontFamily="sans-serif">
                  Ex: “nocivo para crianças” | “longe da sede”
                </text>

                <line x1="189" y1="88" x2="189" y2="118" stroke="#94a3b8" strokeWidth="2" />
                <polygon points="184,118 189,126 194,118" fill="#94a3b8" />
                <text x="238" y="110" fill="#cbd5e1" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                  NÃO (é Substantivo)
                </text>

                <rect x="24" y="128" width="330" height="62" rx="10" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />
                <text x="189" y="151" textAnchor="middle" fill="#a5b4fc" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  PASSO 2: O substantivo é CONCRETO
                </text>
                <text x="189" y="171" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                  ou a preposição NÃO for “DE”?
                </text>

                <line x1="354" y1="159" x2="430" y2="159" stroke="#38bdf8" strokeWidth="2" />
                <polygon points="430,154 440,159 430,164" fill="#38bdf8" />
                <text x="392" y="150" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                  REGRA
                </text>

                <rect x="442" y="128" width="270" height="62" rx="10" fill="#0c4a6e" stroke="#0ea5e9" strokeWidth="1.5" />
                <text x="577" y="149" textAnchor="middle" fill="#bae6fd" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  Concreto → SEMPRE Adjunto Adnominal
                </text>
                <text x="577" y="170" textAnchor="middle" fill="#e2e8f0" fontSize="10.5" fontFamily="sans-serif">
                  Abstrato + prep. A/COM/EM/POR/CONTRA → CN
                </text>

                <line x1="189" y1="190" x2="189" y2="220" stroke="#f59e0b" strokeWidth="2" />
                <polygon points="184,220 189,228 194,220" fill="#f59e0b" />
                <text x="260" y="212" fill="#fcd34d" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                  Substantivo Abstrato + prep. DE
                </text>

                <rect x="24" y="230" width="330" height="58" rx="10" fill="#451a03" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="189" y="253" textAnchor="middle" fill="#fde68a" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  PASSO 3: O termo com “DE”
                </text>
                <text x="189" y="273" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                  PRATICA ou SOFRE a ação?
                </text>

                <line x1="354" y1="259" x2="430" y2="259" stroke="#f59e0b" strokeWidth="2" />
                <polygon points="430,254 440,259 430,264" fill="#f59e0b" />
                <text x="392" y="250" textAnchor="middle" fill="#fcd34d" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                  DECIDE
                </text>

                <rect x="442" y="230" width="270" height="58" rx="10" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="577" y="251" textAnchor="middle" fill="#93c5fd" fontSize="11.5" fontWeight="bold" fontFamily="sans-serif">
                  PRATICA / POSSUI (Agente) → ADJUNTO ADNOMINAL
                </text>
                <text x="577" y="272" textAnchor="middle" fill="#6ee7b7" fontSize="11.5" fontWeight="bold" fontFamily="sans-serif">
                  SOFRE / RECEBE (Paciente) → COMPLEMENTO NOMINAL
                </text>
              </svg>
            </div>

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (Passo 1 e Passo 2)",
                  accent: "indigo",
                  content: (
                    <>
                      <p>
                        <em>“O regulamento é útil <strong>aos estagiários</strong>.”</em> → Adjetivo (<em>útil</em>) ={" "}
                        <strong>Complemento Nominal</strong>.
                      </p>
                      <p>
                        <em>“A mesa <strong>de madeira</strong> chegou hoje.”</em> → Substantivo Concreto (<em>mesa</em>) ={" "}
                        <strong>Adjunto Adnominal</strong>.
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 2 · Caso Real ACCESS (Domingos Martins/ES 2023 Q10 — Prep. ≠ DE)",
                  accent: "emerald",
                  content: (
                    <p>
                      <em>“A preocupação <strong>com uma votação mais prática</strong>...”</em> → Substantivo abstrato com
                      preposição <em>com</em> (não é <em>de</em>!) → <strong>Complemento Nominal</strong> direto!
                    </p>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Real ACCESS (CRBio-08 2023 Q10 — Abstrato + DE Paciente)",
                  accent: "amber",
                  content: (
                    <p>
                      <em>“A poluição <strong>da água</strong> ocorre devido à eliminação <strong>do esgoto</strong>...”</em>{" "}
                      → A água é poluída (sofre!) e o esgoto é eliminado (sofre!) → ambos são{" "}
                      <strong>Complementos Nominais</strong>!
                    </p>
                  ),
                },
                {
                  label: "Exemplo 4 · Comparação Espelhada (Agente vs. Paciente)",
                  accent: "purple",
                  content: (
                    <>
                      <p>
                        <em>“A crítica <strong>do vereador</strong> repercutiu.”</em> → O vereador fez a crítica (agente) ={" "}
                        <strong>AA</strong>.
                      </p>
                      <p>
                        <em>“A crítica <strong>ao vereador</strong> repercutiu.”</em> → O vereador recebeu a crítica (paciente)
                        = <strong>CN</strong>.
                      </p>
                    </>
                  ),
                },
              ]}
            />
          </ProseSection>

          {/* 5.3 Adjunto Adverbial */}
          <ProseSection number="5.3" title="Adjunto Adverbial (10 Valores Semânticos, Intensidade com 'quão' e Vírgula)">
            <DefinitionBlocks
              columns={1}
              items={[
                {
                  term: "Adjunto Adverbial & Regra da Vírgula no Deslocamento",
                  badge: "MODIFICA VERBO / ADJ / ADV",
                  accent: "sky",
                  summary:
                    "Termo invariável (advérbio ou locução adverbial) que acrescenta circunstância a verbos, adjetivos ou advérbios. Na Ordem Direta (fim da frase), não usa vírgula.",
                  note: "Deslocado para o início ou meio da frase: com 3 ou mais palavras (longo) = vírgula OBRIGATÓRIA ('Na manhã de segunda-feira, ...'); com 1–2 palavras = vírgula facultativa!",
                },
              ]}
            />

            <KeyTable
              title="Os 10 Valores Semânticos do Adjunto Adverbial na ACCESS"
              headers={["Valor", "Pergunta", "Exemplos em Provas e Repartição"]}
              rows={[
                ["1. Tempo · 2. Lugar", "Quando? / Onde?", "“Na terça-feira” / “Próximo à Grande Pirâmide”"],
                ["3. Modo · 4. Intensidade", "Como? / Quanto?", "“com cautela” / “quão nocivo” (Pref. Passos/MG 2023 Q12!)"],
                ["5. Causa · 6. Finalidade", "Por quê? / Para quê?", "“por falta de energia” / “para assinatura”"],
                ["7. Meio · 8. Instrumento", "Por qual meio? / Com que objeto?", "“pelo correio eletrônico” / “com a caneta oficial”"],
                ["9. Companhia · 10. Neg./Dúvida", "Com quem? / Certeza", "“com o secretário” / “não”, “talvez”, “certamente”"],
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5s (Passos/MG 2023 Q12)"
              trap="Ver ponto de interrogação em 'Mas quão nocivo é realmente o uso do computador?' e marcar que 'quão' é adjunto adverbial de DÚVIDA ou Adjunto Adnominal!"
              escape="Veja a qual palavra a setinha aponta: 'quão' modifica o adjetivo 'nocivo' medindo seu grau (= tão/muito nocivo) → Adjunto Adverbial de INTENSIDADE!"
            />
          </ProseSection>

          {/* 5.4 Aposto e Vocativo */}
          <ProseSection number="5.4" title="Aposto (4 Tipos + Especificativo vs. AA) e Vocativo nas 3 Posições">
            <DefinitionBlocks
              columns={2}
              items={[
                {
                  term: "Os 4 Tipos de Aposto (Equivalência)",
                  badge: "BASE SUBSTANTIVA",
                  accent: "indigo",
                  summary:
                    "Explicativo (entre vírgulas/travessões); Enumerativo (lista após dois-pontos); Resumitivo ('Editais, atas, tudo foi salvo'); Especificativo (SEM vírgula: 'o município de Birigui').",
                },
                {
                  term: "Vocativo (Chamamento nas 3 Posições)",
                  badge: "TERMO INDEPENDENTE",
                  accent: "amber",
                  summary:
                    "Serve só para chamar/interpelar quem ouve. Não pertence ao Sujeito nem ao Predicado e vem SEMPRE isolado por vírgula no início, no meio ou no fim.",
                  example: "“Senhores vereadores, apresentamos o plano.” / “Apresentamos, senhores vereadores, o plano.”",
                },
              ]}
            />

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (Aposto Explicativo vs. Vocativo)",
                  accent: "indigo",
                  content: (
                    <>
                      <p>
                        <em>“Carlos, o novo estagiário, protocolou o guia.”</em> → <em>o novo estagiário</em> é{" "}
                        <strong>Aposto Explicativo</strong> (entre duas vírgulas!).
                      </p>
                      <p>
                        <em>“Carlos, protocole o guia hoje!”</em> → <em>Carlos</em> é <strong>Vocativo</strong> (chamamento
                        + 1 vírgula separando do verbo!).
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (Aposto Especificativo × AA: Teste do '=')",
                  accent: "emerald",
                  content: (
                    <>
                      <p>
                        <em>“O município <strong>de Birigui</strong>”</em> → município <strong>=</strong> Birigui (identidade
                        direta, sem vírgula!) → <strong>Aposto Especificativo</strong>.
                      </p>
                      <p>
                        <em>“O decreto <strong>de Birigui</strong>”</em> → decreto <strong>≠</strong> Birigui (origem/posse)
                        → <strong>Adjunto Adnominal</strong>!
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite (4 papéis na mesma ata)",
                  accent: "amber",
                  content: (
                    <p>
                      <em>
                        “<strong>Senhores conselheiros</strong> [Vocativo], o município <strong>de Birigui</strong> [Aposto
                        Especificativo], <strong>referência administrativa</strong> [Aposto Explicativo], definiu três
                        metas: <strong>agilidade, transparência e economia</strong> [Aposto Enumerativo].”
                      </em>
                    </p>
                  ),
                },
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5s"
              trap="Chamar 'de Birigui' em 'município de Birigui' de Adjunto Adnominal só por ter preposição 'de', ou chamar Vocativo inicial com vírgula de Sujeito."
              escape="Teste do Igual (=): município = Birigui → Aposto Especificativo! E se um nome inicial tiver vírgula separando do verbo no chamamento ('Senhores, aprovem...'), jamais é sujeito — é Vocativo!"
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
    "Consigo distinguir uma pergunta de Morfologia (classe isolada) de uma pergunta de Sintaxe (função na frase) em menos de 5 segundos?",
    "Sei contar o número exato de orações de um período sabendo distinguir Frase Nominal, Período Simples (inclusive com locução verbal = 1 só oração!) e Período Composto?",
    "Consigo partir qualquer oração em Sujeito (quem comanda o verbo) e Predicado (tudo o que se declara, com o verbo dentro) usando a Ordem Direta e a Receita em 4 Passos?",
    "Sei identificar a transitividade contextual (VI, VTD, VTI, VTDI, VL), as 5 famílias de ligação, desarmar a falsa preposição com o teste de 'ISSO' e aplicar o/a, lhe, me/te/se/nos/vos e Objetos Pleonásticos?",
    "Dominei o Teste da Concordância, o Agente da Passiva, o trio do 'SE' (VTD + se [PA] × VTI/VI/VL + se [IIS] × Pronome Reflexivo) e as Orações Sem Sujeito (haver, fazer, ser horas, clima vs. existir/ocorrer)?",
    "Separo os 3 Tipos de Predicado (PV, PN, PVN) e aplico os testes do o/a e do feminino plural para diferenciar Predicativo do Objeto/Sujeito de Adjunto Adnominal e de Advérbio?",
    "Domino os 3 Passos do Fluxograma (Adjetivo/Advérbio; Concreto vs. Abstrato; Agente vs. Paciente) para acertar Complemento Nominal vs. Adjunto Adnominal?",
    "Sei identificar Adjunto Adverbial (10 valores, intensificador quão e vírgula obrigatória ao deslocar), Aposto (Explicativo, Enumerativo, Resumitivo, Especificativo vs. Adjunto Adnominal) e Vocativo nas 3 posições?",
  ],
};

export default portuguesSemana04;
