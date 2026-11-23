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
    "Ritmo 100% linear de cima para baixo, um conceito por vez: narrativa guiada como em livro didático, zero siglas adiantadas, 26 subtópicos passo a passo, 4 fluxogramas visuais em SVG, flashcards e 25 questões no padrão Instituto ACCESS.",

  introRender: () => (
    <div className="space-y-6">
      <ConceptCard
        title="Como Estudar Esta Aula Sem Travar (A Escada Linear dos 5 Degraus)"
        badge="Leitura Linear · De Cima para Baixo"
        accent="indigo"
      >
        <p>
          Muitas pessoas acham Sintaxe difícil por um único motivo: na escola, os professores jogam dezenas de
          nomes (<em>Objeto Direto, Sujeito Paciente, Predicado Verbo-Nominal, Complemento Nominal</em>) todos ao
          mesmo tempo, antes de mostrar como a frase é montada.
        </p>
        <p>
          Aqui nós fazemos o caminho inverso. Esta aula foi organizada em uma{" "}
          <strong>escada linear de 5 degraus</strong>, lida de cima para baixo, um único conceito de cada vez:
        </p>
        <DefinitionBlocks
          items={[
            {
              term: "Degrau 1 (Eixo 1) · A Estrutura Geral da Oração",
              badge: "ALICERCE",
              accent: "indigo",
              summary:
                "Entendemos a diferença entre a palavra sozinha (Morfologia) e o cargo dela na frase (Sintaxe), contamos quantas orações existem e partimos a oração em dois lados: Sujeito e Predicado.",
            },
            {
              term: "Degrau 2 (Eixo 2) · O Motor Verbal e os Objetos",
              badge: "MOTOR",
              accent: "emerald",
              summary:
                "Olhamos para o verbo dentro do predicado para ver se ele fecha o sentido sozinho (VI), se pede complemento direto (VTD), indireto com preposição (VTI), os dois (VTDI) ou se apenas liga um estado (VL).",
            },
            {
              term: "Degrau 3 (Eixo 3) · Os 5 Tipos de Sujeito, a Voz Passiva e o 'SE'",
              badge: "COMANDO DO VERBO",
              accent: "sky",
              summary:
                "Usando os tipos de verbo que você dominou no Eixo 2, classificamos facilmente os 5 tipos de Sujeito, a Voz Passiva e o famoso Trio do 'SE' (que depende diretamente de o verbo ser VTD ou VTI).",
            },
            {
              term: "Degrau 4 (Eixo 4) · Os 3 Tipos de Predicado e os Predicativos",
              badge: "AÇÃO vs. ESTADO",
              accent: "amber",
              summary:
                "Juntando Sujeito e Verbo, classificamos os 3 tipos de Predicado (Verbal, Nominal e Verbo-Nominal) e isolamos as qualidades atribuídas ao sujeito ou ao objeto.",
            },
            {
              term: "Degrau 5 (Eixo 5) · Satélites do Nome, Circunstâncias e Chamamento",
              badge: "ACABAMENTO",
              accent: "purple",
              summary:
                "Fechamos a frase estudando os termos ligados ao nome (Adjunto Adnominal vs. Complemento Nominal), os cenários de tempo/lugar/modo (Adjunto Adverbial), a explicação de nomes (Aposto) e o chamamento (Vocativo).",
            },
          ]}
        />
      </ConceptCard>

      <ProseSection
        number="0.1"
        title="Micro-Revisão Linear dos 5 Tijolos das Semanas 02 e 03"
      >
        <p>
          Para que nenhuma palavra pareça estranha durante a leitura, relembre em sequência linear os{" "}
          <strong>5 conceitos morfológicos</strong> das semanas anteriores que usaremos como ferramentas nesta aula:
        </p>
        <DefinitionBlocks
          items={[
            {
              term: "1. Substantivo Concreto vs. Substantivo Abstrato (Semana 02)",
              badge: "BASE DO NOME",
              accent: "indigo",
              summary: (
                <>
                  <strong>Concreto:</strong> dá nome a seres, objetos ou lugares que existem por conta própria (
                  <em>prefeito, edital, computador, mesa, prédio</em>).{" "}
                  <strong>Abstrato:</strong> dá nome a uma <strong>ação transformada em nome</strong>, a um estado
                  ou a um sentimento (<em>aprovação, poluição, eliminação, limpeza, preocupação, uso</em>).
                </>
              ),
              example: "Quase todo substantivo abstrato de ação nasce de um verbo: aprovar → a aprovação; poluir → a poluição.",
            },
            {
              term: "2. Adjetivo (Semana 02)",
              badge: "CARACTERÍSTICA",
              accent: "emerald",
              summary:
                "É a palavra que dá uma característica, qualidade ou estado a um substantivo, variando junto com ele no feminino e no plural.",
              example: "ofício urgente → ofícios urgentes · conta pública → contas públicas.",
            },
            {
              term: "3. Artigos e Pronomes Pessoais Oblíquos (Semana 02)",
              badge: "ACOMPANHANTES E SUBSTITUTOS",
              accent: "sky",
              summary: (
                <>
                  <strong>Artigos (o, a, os, as, um, uma):</strong> vêm antes do substantivo para determiná-lo.{" "}
                  <strong>Pronomes Oblíquos (o, a, os, as, lhe, lhes, me, te, se, nos, vos):</strong> funcionam
                  como substitutos curtos presos ao verbo para não precisarmos repetir um nome já dito.
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
                  <strong>Verbo simples:</strong> uma única palavra conjugada indicando ação, estado ou fenômeno (
                  <em>protocolou, abriu, permaneceu, choveu</em>).{" "}
                  <strong>Locução verbal:</strong> verbo auxiliar conjugado + verbo principal no infinitivo (<em>-r</em>),
                  gerúndio (<em>-ndo</em>) ou particípio (<em>-do</em>) expressando <strong>uma única ação</strong> (
                  <em>vai protocolar, deve conferir, foi assinado</em>).
                </>
              ),
            },
            {
              term: "5. Advérbio vs. Preposição (Semana 03)",
              badge: "INVARIÁVEIS",
              accent: "purple",
              summary: (
                <>
                  <strong>Advérbio:</strong> palavra <strong>invariável</strong> (nunca tem plural!) que indica
                  circunstância de tempo (<em>ontem</em>), lugar (<em>longe</em>), modo (<em>rapidamente</em>),
                  intensidade (<em>muito, quão</em>) ou negação (<em>não</em>).{" "}
                  <strong>Preposição:</strong> palavra invariável que funciona como <strong>ponte obrigatória</strong>{" "}
                  entre dois termos (<em>de, em, a, para, por, com, contra</em>).
                </>
              ),
              note: "Lembre-se das contrações em que a preposição se junta ao artigo: de+o = do · de+a = da · em+o = no · por+o = pelo · a+o = ao · a+a = à.",
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
        "Leitura linear em 4 passos: a diferença entre classe e função, como contar orações sem errar em locuções verbais, como dividir Sujeito e Predicado e como desfazer a Ordem Inversa.",
      estimatedMinutes: 25,
      render: () => (
        <div className="space-y-6">
          {/* 1.1 Morfologia vs Sintaxe */}
          <ProseSection
            number="1.1"
            title="Morfologia vs. Sintaxe: A Identidade no Dicionário vs. O Cargo na Frase"
          >
            <p>
              Nas Semanas 02 e 03, nós olhamos para cada palavra como se ela estivesse{" "}
              <strong>sozinha na página do dicionário</strong>. Quando você diz que a palavra <em>servidor</em> é um{" "}
              <strong>Substantivo</strong>, que <em>urgente</em> é um <strong>Adjetivo</strong> ou que <em>ontem</em>{" "}
              é um <strong>Advérbio</strong>, você está fazendo <strong>Morfologia</strong> — isto é, identificando a
              classe gramatical de origem da palavra.
            </p>
            <p>
              Na <strong>Sintaxe</strong> (tema desta Semana 04), a pergunta muda completamente. Agora nós não
              queremos mais saber o que a palavra é quando está sozinha, mas sim{" "}
              <strong>qual é o trabalho que ela está fazendo para a frase funcionar</strong>, ou seja, como ela se
              relaciona com o verbo e com as palavras vizinhas.
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Morfologia (A Identidade Fixa da Palavra Isolada)",
                  badge: "CARTEIRA DE IDENTIDADE",
                  accent: "indigo",
                  summary:
                    "Estuda a palavra sozinha, classificando-a em uma das 10 classes gramaticais das Semanas 02 e 03: Substantivo, Adjetivo, Artigo, Numeral, Pronome, Verbo, Advérbio, Preposição, Conjunção ou Interjeição.",
                },
                {
                  term: "2. Sintaxe (O Cargo que a Palavra Ocupa na Frase)",
                  badge: "FUNÇÃO NA ORAÇÃO",
                  accent: "emerald",
                  summary:
                    "Estuda o papel relacional que a palavra assume quando trabalha dentro de uma frase específica: Sujeito, Predicado, Complemento do Verbo, Adjunto, Aposto ou Vocativo.",
                },
              ]}
            />

            <AnalogyBox title="Analogia do Engenheiro Carlos em Birigui" tag="Identidade Fixa × Papel no Contexto">
              <p>
                No documento de identidade e no diploma, Carlos é <strong>engenheiro civil</strong>. Essa identidade
                fixa, que não muda mesmo se ele estiver sozinho em casa, é a <strong>Morfologia</strong>.
              </p>
              <p>
                Porém, na reunião do prédio na segunda-feira, Carlos atua como <strong>síndico</strong>; na terça, no
                balcão da Prefeitura, atua como <strong>contribuinte</strong>; e no sábado, no campo, atua como{" "}
                <strong>goleiro</strong>. Esses papéis que mudam conforme a frase são a <strong>Sintaxe</strong>!
              </p>
            </AnalogyBox>

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (O mesmo substantivo mudando de cargo sintático)",
                  accent: "indigo",
                  content: (
                    <>
                      <p>
                        <strong>Frase A:</strong> <em>“O <strong>cidadão</strong> solicitou a certidão no balcão.”</em>{" "}
                        → Na morfologia, <em>cidadão</em> é um substantivo. Mas na sintaxe desta frase, ele é quem
                        comanda o verbo <em>solicitou</em>: seu cargo aqui é <strong>Sujeito</strong>.
                      </p>
                      <p>
                        <strong>Frase B:</strong> <em>“O atendente orientou o <strong>cidadão</strong> no balcão.”</em>{" "}
                        → Na morfologia, <em>cidadão</em> continua sendo o mesmo substantivo. Porém, na sintaxe desta
                        segunda frase, quem pratica a ação é <em>o atendente</em>, e <em>o cidadão</em> passou a ser
                        o alvo que completa o verbo <em>orientou</em>: seu cargo agora é{" "}
                        <strong>Complemento do Verbo</strong> (que batizaremos no Eixo 2).
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (A palavra 'protocolo' em 3 funções diferentes)",
                  accent: "emerald",
                  content: (
                    <>
                      <p>
                        <strong>(a)</strong> <em>“O <strong>protocolo</strong> abre pontualmente às oito horas.”</em>{" "}
                        → Aqui, <em>protocolo</em> comanda o verbo <em>abre</em> → função de <strong>Sujeito</strong>.
                      </p>
                      <p>
                        <strong>(b)</strong> <em>“O estagiário conferiu o <strong>protocolo</strong> antes do almoço.”</em>{" "}
                        → Aqui, <em>protocolo</em> completa o sentido do verbo <em>conferiu</em> → função de{" "}
                        <strong>Complemento do Verbo</strong>.
                      </p>
                      <p>
                        <strong>(c)</strong> <em>“Os armários <strong>do protocolo</strong> foram trocados.”</em> →
                        Aqui, <em>do protocolo</em> apenas especifica a qual setor os armários pertencem → função de{" "}
                        <strong>Caracterizador de Nome</strong> (que estudaremos no Eixo 5).
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite (Quando mudam a Classe Morfológica e a Função Sintática juntas)",
                  accent: "amber",
                  content: (
                    <>
                      <p>
                        <strong>Cena 1:</strong> <em>“O servidor <strong>alto</strong> organizou a fila.”</em> → No
                        feminino plural, vira <em>“As servidoras <strong>altas</strong>”</em> (varia para qualificar o
                        substantivo). Logo, na morfologia é <strong>Adjetivo</strong> e na sintaxe caracteriza o nome{" "}
                        <em>servidor</em>.
                      </p>
                      <p>
                        <strong>Cena 2:</strong> <em>“O servidor falou <strong>alto</strong> durante a reunião.”</em>{" "}
                        → No feminino plural, continua <em>“As servidoras falaram <strong>alto</strong>”</em> (fica
                        invariável, indicando o modo como o verbo <em>falar</em> aconteceu). Logo, na morfologia virou{" "}
                        <strong>Advérbio</strong> e na sintaxe indica circunstância de modo ligada ao verbo!
                      </p>
                    </>
                  ),
                },
              ]}
            />

            <KeyTable
              title="Como Identificar em 5 Segundos o Que a Questão Está Pedindo"
              headers={[
                "O Que a Banca Pergunta no Enunciado",
                "Plano de Análise",
                "O Que Você Deve Responder",
              ]}
              rows={[
                [
                  "“Qual a classe gramatical / morfológica do termo?”",
                  "Morfologia (palavra isolada)",
                  "Substantivo, Adjetivo, Artigo, Numeral, Pronome, Verbo, Advérbio, Preposição, Conjunção",
                ],
                [
                  "“Qual a função sintática / papel no período?”",
                  "Sintaxe (cargo na frase)",
                  "Sujeito, Predicado, Objeto, Predicativo, Complemento Nominal, Adjunto, Aposto, Vocativo",
                ],
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="A questão sublinha a palavra 'rapidamente' ou 'muito', pergunta 'Qual é a FUNÇÃO SINTÁTICA do termo destacado?' e coloca na alternativa (A) Advérbio. O candidato apressado vê que a palavra é mesmo um advérbio e marca a letra A!"
              escape="'Advérbio', 'Substantivo' e 'Adjetivo' são nomes de classes morfológicas, e nunca de funções sintáticas! Se a pergunta pediu função sintática, risque imediatamente qualquer alternativa que responda apenas com o nome da classe morfológica."
            />
          </ProseSection>

          {/* 1.2 Frase, Oracao e Periodo */}
          <ProseSection
            number="1.2"
            title="Frase, Oração e Período (Simples vs. Composto e Locução Verbal)"
          >
            <p>
              Antes de desmontar uma oração por dentro, precisamos saber diferenciar três nomes que aparecem nos
              primeiros parágrafos de qualquer prova de sintaxe: <strong>Frase</strong>, <strong>Oração</strong> e{" "}
              <strong>Período</strong>.
            </p>
            <p>
              A lógica que separa os três é muito simples e gira em torno de uma única pergunta:{" "}
              <strong>existe ou não existe verbo ali dentro?</strong>
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Frase (O Conceito de Sentido Completo — Nominal vs. Verbal)",
                  badge: "COMUNICAÇÃO COMPLETA",
                  accent: "indigo",
                  summary: (
                    <>
                      Frase é qualquer enunciado capaz de transmitir uma <strong>mensagem com sentido completo</strong>{" "}
                      na comunicação, encerrado por pausa forte (<code>.</code> <code>!</code> <code>?</code>).{" "}
                      Divide-se em <strong>Frase Nominal</strong> (quando transmite sentido completo{" "}
                      <strong>sem usar nenhum verbo</strong>, como em placas e avisos) e <strong>Frase Verbal</strong>{" "}
                      (quando possui pelo menos um verbo conjugado).
                    </>
                  ),
                  example:
                    "Frase Nominal: “Atendimento suspenso para manutenção.” | Frase Verbal: “O servidor protocolou o ofício.”",
                },
                {
                  term: "2. Oração (O Conceito que Exige Verbo ou Locução Verbal)",
                  badge: "1 VERBO/LOCUÇÃO = 1 ORAÇÃO",
                  accent: "emerald",
                  summary:
                    "Oração é todo enunciado que se organiza obrigatoriamente ao redor de um verbo conjugado ou de uma locução verbal. Consequência direta: uma Frase Nominal ('Atenção ao prazo!') tem ZERO orações!",
                  example:
                    "Exemplos de Orações: (1) “A Prefeitura abriu as inscrições.” (2) “O fiscal vai conferir o contrato.” (3) “Choveu forte em Birigui.”",
                },
                {
                  term: "3. Período Simples vs. Período Composto (e a Regra da Locução Verbal)",
                  badge: "CONTAGEM DE ORAÇÕES",
                  accent: "sky",
                  summary: (
                    <>
                      Período é a frase verbal da letra maiúscula até o ponto final. Com{" "}
                      <strong>1 única oração</strong> (1 verbo ou 1 locução verbal) chama-se{" "}
                      <strong>Período Simples</strong> (ou <em>oração absoluta</em>). Com{" "}
                      <strong>2 ou mais orações</strong> chama-se <strong>Período Composto</strong>.
                    </>
                  ),
                  note: "Regra de Ouro da Locução Verbal: Verbo auxiliar + principal no infinitivo/gerúndio/particípio (como 'vai analisar', 'deve conferir', 'foi publicado') representa UMA ÚNICA AÇÃO e vale sempre por 1 SÓ ORAÇÃO!",
                },
              ]}
            />

            <AnalogyBox title="Analogia do Veículo e do Motor" tag="Frase × Verbo">
              <p>
                Imagine que a <strong>Frase</strong> é qualquer veículo rodando na rua, e o <strong>Verbo</strong> é
                o motor:
              </p>
              <p>
                • Um carrinho de mão leva carga sem ter motor nenhum → é a <strong>Frase Nominal (0 orações)</strong>.
                <br />• Um carro de passeio funciona com <strong>1 motor</strong> → é o{" "}
                <strong>Período Simples (1 oração)</strong>.
                <br />• Um trem com <strong>2 ou mais motores</strong> puxando vagões → é o{" "}
                <strong>Período Composto (2 ou mais orações)</strong>.
              </p>
            </AnalogyBox>

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (Frase Nominal sem oração vs. Período Simples)",
                  accent: "indigo",
                  content: (
                    <>
                      <p>
                        <strong>Enunciado A:</strong> <em>“Proibida a entrada de pessoas não autorizadas.”</em> →
                        Comunica um aviso completo, mas não há nenhum verbo conjugado →{" "}
                        <strong>Frase Nominal (0 orações; não é período)</strong>.
                      </p>
                      <p>
                        <strong>Enunciado B:</strong> <em>“O vigia <strong>fechou</strong> o portão principal às 18h.”</em>{" "}
                        → Há 1 verbo conjugado (<em>fechou</em>) →{" "}
                        <strong>Frase Verbal com 1 Oração = Período Simples</strong>.
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (Locução Verbal = 1 Oração vs. Período Composto)",
                  accent: "emerald",
                  content: (
                    <>
                      <p>
                        <strong>Enunciado A:</strong>{" "}
                        <em>“O Oficial Administrativo <strong>vai digitalizar</strong> todos os processos hoje.”</em>{" "}
                        → Aparecem duas palavras verbais coladas (<em>vai</em> + <em>digitalizar</em>), mas formam uma
                        única ação futura → <strong>1 Locução Verbal = 1 Oração (Período Simples)</strong>.
                      </p>
                      <p>
                        <strong>Enunciado B:</strong>{" "}
                        <em>
                          “O Oficial Administrativo <strong>digitalizou</strong> os processos e{" "}
                          <strong>enviou</strong> o protocolo ao diretor.”
                        </em>{" "}
                        → Duas ações distintas (<em>digitalizou</em> + <em>enviou</em>) →{" "}
                        <strong>2 Orações = Período Composto</strong>.
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite (Particípios Soltos sem Auxiliar vs. Locução Passiva Real)",
                  accent: "amber",
                  content: (
                    <>
                      <p>
                        <strong>Registro 1:</strong> <em>“Material conferido e protocolado na recepção.”</em> →
                        Cuidado! <em>Conferido</em> e <em>protocolado</em> não têm verbo auxiliar conjugado antes
                        deles (não está escrito <em>“foi conferido”</em>). Eles apenas descrevem o estado de{" "}
                        <em>Material</em> → <strong>0 verbos conjugados = Frase Nominal (0 orações)</strong>!
                      </p>
                      <p>
                        <strong>Registro 2:</strong>{" "}
                        <em>
                          “O edital <strong>será publicado</strong> amanhã, porque a comissão{" "}
                          <strong>aprovou</strong> a minuta.”
                        </em>{" "}
                        → 1 locução verbal (<em>será publicado</em> = conta 1) + 1 verbo simples (<em>aprovou</em> =
                        conta 1) → <strong>2 Orações = Período Composto</strong>.
                      </p>
                    </>
                  ),
                },
              ]}
            />

            <KeyTable
              title="Resumo Comparativo · Frase × Oração × Período"
              headers={["Tipo de Enunciado", "Possui Verbo Conjugado?", "Exemplo Prático", "Contagem"]}
              rows={[
                ["Frase Nominal", "Não (0 verbos)", "“Documentação incompleta no envelope.”", "0 orações"],
                ["Período Simples (Verbo Simples)", "Sim (1 verbo)", "“A Prefeitura publicou a lista hoje.”", "1 oração"],
                ["Período Simples (Locução Verbal)", "Sim (1 locução = 1 bloco)", "“O edital vai ser corrigido pela equipe.”", "1 oração"],
                ["Período Composto", "Sim (2 ou mais blocos)", "“O cidadão preencheu a guia e pagou a taxa.”", "2 orações"],
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Colocar uma frase com locução verbal de dois ou três verbos juntos — como 'O parecer jurídico deverá ser concluído até sexta-feira' — e afirmar que o período é composto por possuir três formas verbais."
              escape="Pergunte: 'Quantas ações diferentes acontecem nessa frase?' Apenas UMA (a conclusão do parecer)! Todos os verbos auxiliares trabalham para o verbo principal. Logo, é 1 única locução verbal = 1 Oração = Período Simples!"
            />
          </ProseSection>

          {/* 1.3 Sujeito e Predicado do Zero */}
          <ProseSection
            number="1.3"
            title="Sujeito e Predicado do Zero: Os Dois Blocos que Partem Qualquer Oração ao Meio"
          >
            <p>
              Agora que já sabemos identificar uma <strong>Oração</strong> (toda frase montada em torno de um verbo ou
              locução verbal), vamos dar o primeiro corte cirúrgico dentro dela.
            </p>
            <p>
              Na língua portuguesa, quase toda oração funciona como uma declaração que fazemos sobre alguém ou sobre
              alguma coisa. Por isso, a oração se divide em dois grandes blocos fundamentais: o{" "}
              <strong>Sujeito</strong> e o <strong>Predicado</strong>.
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Sujeito (e o Núcleo do Sujeito)",
                  badge: "QUEM COMANDA O VERBO",
                  accent: "indigo",
                  summary: (
                    <>
                      <strong>Sujeito</strong> é o ser (pessoa, órgão público, documento, objeto ou ideia) sobre o qual
                      a oração declara alguma coisa — e que <strong>comanda a concordância do verbo</strong>, obrigando
                      o verbo a ficar no singular ou no plural junto com ele.
                    </>
                  ),
                  note: "Núcleo do Sujeito é a palavra substantiva principal dentro do bloco, limpa de artigos ou adjetivos: em 'Os novos servidores municipais chegaram', o núcleo é apenas 'servidores'.",
                },
                {
                  term: "2. Predicado (Onde o Verbo Mora Obrigatoriamente)",
                  badge: "TUDO O QUE SE DECLARA",
                  accent: "emerald",
                  summary: (
                    <>
                      <strong>Predicado</strong> é tudo o que se declara sobre o sujeito na oração. Regra vital: o{" "}
                      <strong>verbo mora SEMPRE dentro do Predicado!</strong> Quando você separa o Sujeito de um lado,{" "}
                      <strong>100% do que sobrar na oração</strong> (o próprio verbo, seus complementos e todas as
                      informações de lugar ou tempo — mesmo que estejam lá no começo da frase!) pertence ao Predicado.
                    </>
                  ),
                  note: "Nota de escada linear: no Eixo 3 veremos casos em que o sujeito está escondido na terminação verbal e poucos verbos especiais (como chover ou haver = existir) em que não há sujeito e a oração inteira é Predicado.",
                },
              ]}
            />

            <AnalogyBox title="Analogia da Manchete de Jornal" tag="Protagonista × Notícia Completa">
              <p>
                Pense na capa de um jornal: o <strong>Sujeito</strong> é a foto do protagonista da notícia (
                <em>de quem estamos falando?</em>); já o <strong>Predicado</strong> é o texto completo da notícia
                dizendo o que esse protagonista fez, sofreu ou como estava, incluindo o local e a data do fato!
              </p>
            </AnalogyBox>

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (Divisão clássica lado a lado na frase)",
                  accent: "indigo",
                  content: (
                    <>
                      <p>
                        <strong>Frase:</strong> <em>“O ônibus municipal saiu no horário.”</em>
                      </p>
                      <p>
                        • <strong>Sujeito:</strong> <em>O ônibus municipal</em> (Núcleo: <em>ônibus</em> — se fossem
                        dois, o verbo seria obrigado a mudar para <em>saíram</em>).
                      </p>
                      <p>
                        • <strong>Predicado:</strong> <em>saiu no horário</em> (inclui o verbo <em>saiu</em> + a
                        informação <em>no horário</em>).
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (Sujeito longo com apenas 1 núcleo no singular)",
                  accent: "emerald",
                  content: (
                    <>
                      <p>
                        <strong>Frase:</strong>{" "}
                        <em>“A nova Secretaria Municipal de Finanças aprovou o balanço anual ontem.”</em>
                      </p>
                      <p>
                        • <strong>Por que o verbo está no singular se “Finanças” está no plural?</strong> Porque quem
                        aprovou não foram “as finanças”, e sim a <strong>Secretaria</strong>!
                      </p>
                      <p>
                        • <strong>Sujeito:</strong> <em>A nova Secretaria Municipal de Finanças</em> (Núcleo:{" "}
                        <em>Secretaria</em> — singular!).
                        <br />• <strong>Predicado:</strong> <em>aprovou o balanço anual ontem</em>.
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite de Prova (Sujeito jogado para o fim da frase)",
                  accent: "amber",
                  content: (
                    <>
                      <p>
                        <strong>Frase:</strong>{" "}
                        <em>“Na sexta-feira, compareceram ao auditório três novos candidatos.”</em>
                      </p>
                      <p>
                        • <strong>Cuidado redobrado:</strong> <em>“Na sexta-feira”</em> é apenas a data (singular), e{" "}
                        <em>“ao auditório”</em> é o lugar com preposição (singular). Quem obrigou o verbo{" "}
                        <em>compareceram</em> a ir para o plural foram <strong>três novos candidatos</strong>!
                      </p>
                      <p>
                        • <strong>Sujeito:</strong> <em>três novos candidatos</em> (Núcleo: <em>candidatos</em>).
                        <br />• <strong>Predicado:</strong> <em>Na sexta-feira, compareceram ao auditório</em> (tudo o
                        que não é o sujeito faz parte do predicado!).
                      </p>
                    </>
                  ),
                },
              ]}
            />

            <KeyTable
              title="Desfazendo os 2 Maiores Mitos Sobre Sujeito e Predicado"
              headers={[
                "Falsa Crença de Quem Vai no Automático",
                "Regra Real da Gramática na Prova",
                "Demonstração na Frase",
              ]}
              rows={[
                [
                  "“O sujeito é sempre a primeira coisa escrita no começo da frase.”",
                  "FALSO. O começo pode trazer tempo ou lugar (que pertencem ao Predicado!), e o Sujeito pode vir no fim.",
                  "Em “Hoje, chegaram os malotes”, o Sujeito é “os malotes” (no fim!), e “Hoje, chegaram” é o Predicado.",
                ],
                [
                  "“O predicado é só o que vem depois do verbo.”",
                  "FALSO. O próprio verbo é o coração do Predicado; sem o verbo não existe predicado.",
                  "Em “A comissão votou cedo”, o Predicado é “votou cedo” (e nunca apenas “cedo”).",
                ],
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Iniciar a frase com uma expressão grande de lugar seguida de vírgula — 'No segundo andar do prédio central da Prefeitura, assinou a portaria a nova diretora' — e afirmar que o sujeito é 'No segundo andar do prédio central da Prefeitura'."
              escape="Pergunte pela lógica e pela preposição: 'Um andar de prédio tem mão para assinar portaria? E sujeito pode começar com a preposição EM (No = em + o)?' Jamais! Quem assinou foi 'a nova diretora' (Sujeito), e todo o restante forma o Predicado."
            />
          </ProseSection>

          {/* 1.4 Ordem Direta vs Ordem Inversa + SVG 1 + Receita 4 Passos */}
          <ProseSection
            number="1.4"
            title="Ordem Direta vs. Ordem Inversa (+ Fluxograma em SVG e Receita em 4 Passos)"
          >
            <p>
              Por que o Exemplo 3 do tópico anterior (
              <em>“Na sexta-feira, compareceram ao auditório três novos candidatos”</em>) derruba tanta gente em
              concurso? Porque a frase foi escrita fora da sua ordem natural!
            </p>
            <p>
              Para dominar qualquer questão sintática do Instituto ACCESS, conheça em sequência as duas formas de
              arrumar os blocos de uma oração:
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Ordem Direta (ou Ordem Canônica)",
                  badge: "1º SUJEITO → 2º VERBO → 3º COMPLEMENTO → 4º LUGAR/TEMPO",
                  accent: "indigo",
                  summary:
                    "É a fila natural e previsível da língua portuguesa, onde cada peça vem no seu lugar padrão: primeiro quem comanda (Sujeito), depois a ação (Verbo), depois o alvo (Complemento) e por fim o cenário (Lugar/Tempo).",
                  example:
                    "“A Prefeitura (1º Sujeito) publicou (2º Verbo) o novo edital (3º Complemento) em Birigui (4º Lugar).”",
                },
                {
                  term: "2. Ordem Inversa (ou Ordem Indireta / Deslocada)",
                  badge: "CAMUFLAGEM FAVORITA DA BANCA",
                  accent: "amber",
                  summary:
                    "Ocorre sempre que o autor tira um bloco do seu lugar natural — puxando o lugar ou o tempo para a frente da frase, ou empurrando o Sujeito para depois do verbo.",
                  example:
                    "“Em Birigui (Lugar antecipado), publicou (Verbo) a Prefeitura (Sujeito posposto) o novo edital (Complemento).”",
                },
              ]}
            />

            <p>
              Observe no mapa visual abaixo como{" "}
              <strong>as funções sintáticas não mudam quando os blocos trocam de lugar</strong> — quem muda é apenas a
              posição visual na linha:
            </p>

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
              title="Receita Fixa em 4 Passos para Desmontar Qualquer Oração de Prova"
              problem="Siga sempre esta mesma ordem linear antes de marcar a alternativa:"
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
                      Pegue expressões de tempo ou lugar do início e empurre para o final; traga quem concorda com o
                      verbo para a frente (<code>Sujeito → Verbo → Complemento → Lugar/Tempo</code>).
                    </p>
                  ),
                },
                {
                  title: "Separe Sujeito de Predicado",
                  badge: "PASSO 3",
                  content: (
                    <p>
                      Quem comanda o singular/plural do verbo é o <strong>Sujeito</strong>; o verbo e todo o resto
                      formam o <strong>Predicado</strong>.
                    </p>
                  ),
                },
                {
                  title: "Analise o que o verbo pede lá dentro",
                  badge: "PASSO 4",
                  content: (
                    <p>
                      Verifique se o verbo fecha sozinho, pede objeto ou liga uma qualidade — exatamente o que
                      abriremos passo a passo no <strong>Eixo 2</strong>!
                    </p>
                  ),
                },
              ]}
            />

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (Desfazendo a inversão com sujeito no fim)",
                  accent: "indigo",
                  content: (
                    <>
                      <p>
                        <strong>Frase Invertida:</strong> <em>“Ontem à noite, entregou a encomenda o motorista.”</em>
                      </p>
                      <p>
                        <strong>Passando para a Ordem Direta:</strong>{" "}
                        <em>“O motorista (Sujeito) entregou (Verbo) a encomenda (Complemento) ontem à noite (Tempo).”</em>{" "}
                        → Fica cristalino que o Sujeito é <strong>o motorista</strong>!
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
                        <strong>Frase Invertida:</strong>{" "}
                        <em>“Após ampla revisão da minuta, assinaram o termo de posse os novos oficiais.”</em>
                      </p>
                      <p>
                        <strong>Passando para a Ordem Direta:</strong>{" "}
                        <em>
                          “Os novos oficiais (Sujeito) assinaram (Verbo) o termo de posse (Complemento) após ampla
                          revisão da minuta (Tempo).”
                        </em>
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 3 · Questão Real ACCESS (Pref. Contagem/MG 2026 Q02)",
                  accent: "amber",
                  content: (
                    <>
                      <p>
                        <strong>Frase da Prova:</strong>{" "}
                        <em>“Próximo à Grande Pirâmide de Quéops, o Egito inaugura o Grande Museu Egípcio.”</em>
                      </p>
                      <p>
                        <strong>Passando para a Ordem Direta:</strong>{" "}
                        <em>
                          “O Egito (Sujeito) inaugura (Verbo) o Grande Museu Egípcio (Complemento) próximo à Grande
                          Pirâmide de Quéops (Lugar dentro do Predicado).”
                        </em>
                      </p>
                    </>
                  ),
                },
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Colocar o verbo no singular antes de um sujeito no plural lá no fim da frase ('Falta aos setores municipais duas impressoras novas') para que o candidato não perceba o erro de concordância."
              escape="Sempre que o verbo vier no começo ou depois de lugar/tempo, coloque na Ordem Direta: 'Duas impressoras novas FALTAM aos setores municipais'. O erro de concordância salta aos olhos na hora!"
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
        "Leitura linear em 9 passos: o conceito de transitividade, cada um dos 5 tipos de verbo um por vez, a armadilha da falsa preposição, os objetos e pronomes (o/a vs. lhe e camaleões) e os casos especiais.",
      estimatedMinutes: 40,
      render: () => (
        <div className="space-y-6">
          {/* 2.1 O Que Significa Transitividade Verbal */}
          <ProseSection
            number="2.1"
            title='O Que Significa "Transitividade Verbal"? (Fechar o Sentido ou Atravessar até um Alvo)'
          >
            <p>
              No Eixo 1, aprendemos a separar o <strong>Sujeito</strong> do <strong>Predicado</strong> e vimos que o{" "}
              <strong>verbo</strong> mora sempre dentro do Predicado. Agora vamos olhar para esse verbo e fazer a
              pergunta mais importante da sintaxe:{" "}
              <strong>
                este verbo consegue fechar a mensagem sozinho ou ele precisa que a ação continue até atingir outra
                palavra?
              </strong>
            </p>
            <p>
              A palavra <strong>Transitar</strong> vem do latim e significa literalmente{" "}
              <strong>atravessar / passar adiante</strong> (pense no trânsito de veículos que atravessam a cidade de
              um ponto a outro). Na gramática, <strong>Transitividade Verbal</strong> é a propriedade que mostra se a
              ação do verbo já nasce completa ou se ela precisa “transitar” (atravessar) até um complemento chamado{" "}
              <strong>Objeto</strong>.
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Verbos Significativos (Indicam Ação ou Acontecimento → VI, VTD, VTI, VTDI)",
                  badge: "AÇÃO NO MUNDO REAL",
                  accent: "indigo",
                  summary:
                    "Mostram uma atividade ou fato acontecendo (chegar, protocolar, precisar, entregar). Conforme precisem ou não de complemento (e de preposição), dividem-se em 4 tipos: VI, VTD, VTI e VTDI.",
                },
                {
                  term: "2. Verbo de Ligação (Indica Apenas Estado → VL)",
                  badge: "PONTE DE ESTADO",
                  accent: "emerald",
                  summary:
                    "Aqui não acontece ação física nenhuma! O verbo funciona apenas como um sinal de igual (=) ligando o Sujeito a uma qualidade, estado ou condição (ser, estar, permanecer, parecer, ficar).",
                },
                {
                  term: "3. Regra de Ouro do Contexto (O Verbo Muda de Roupa na Frase)",
                  badge: "LEIA A FRASE INTEIRA",
                  accent: "amber",
                  summary:
                    "Nenhum verbo nasce com um carimbo fixo e eterno no dicionário! Um mesmo verbo (como andar, pagar, virar ou ficar) pode mudar de classificação dependendo do sentido exato que tem na frase da prova.",
                },
              ]}
            />

            <KeyTable
              title="Panorama Visual dos 5 Tipos de Verbo (Que Veremos Um por Um a Seguir)"
              headers={[
                "Sigla e Nome",
                "O Que o Nome Significa",
                "Pergunta Após o Verbo",
                "Analogia-Âncora",
                "Exemplo",
              ]}
              rows={[
                [
                  "VI — Intransitivo",
                  "In- (não) + transitivo: não atravessa para objeto",
                  "Nenhuma obrigatória (só cenário: onde? quando?)",
                  "Lanterna a pilha (acende sozinha)",
                  "“O processo chegou hoje.”",
                ],
                [
                  "VTD — Transitivo Direto",
                  "Atravessa em linha reta, sem preposição",
                  "O quê? / Quem? (direto!)",
                  "Tomada direta de 2 pinos",
                  "“O setor protocolou o pedido.”",
                ],
                [
                  "VTI — Transitivo Indireto",
                  "Atravessa por uma ponte obrigatória (preposição)",
                  "De quê? / A quê? / Em quê? / Com quê?",
                  "Tomada com adaptador",
                  "“A equipe precisou de ajuda.”",
                ],
                [
                  "VTDI — Bitransitivo",
                  "Atravessa por duas mãos ao mesmo tempo (reta + ponte)",
                  "O quê? + A quem / De quem?",
                  "Carteiro de duas mãos",
                  "“Entregou o recibo ao cidadão.”",
                ],
                [
                  "VL — Verbo de Ligação",
                  "Zero ação: apenas liga o Sujeito ao estado",
                  "Como o sujeito é / está / ficou / parece?",
                  "Sinal de Igual (=) com tempo",
                  "“O arquivo permaneceu intacto.”",
                ],
              ]}
            />

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (O verbo 'andar' mudando de ação VI para estado VL)",
                  accent: "indigo",
                  content: (
                    <>
                      <p>
                        <strong>Frase A:</strong> <em>“O atendente <strong>andou</strong> depressa pelo corredor.”</em>{" "}
                        → Caminhou de fato (ação física que se fecha sozinha = <strong>VI</strong>).
                      </p>
                      <p>
                        <strong>Frase B:</strong>{" "}
                        <em>“O atendente <strong>anda</strong> preocupado com o prazo.”</em> → Não está caminhando;
                        equivale a <em>“está preocupado”</em> (ponte de estado = <strong>VL</strong>).
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (O verbo 'pagar' atuando como VTD, VTI e VTDI)",
                  accent: "emerald",
                  content: (
                    <>
                      <p>
                        • <em>“A tesouraria <strong>pagou</strong> a fatura.”</em> → Só a coisa sem preposição (
                        <strong>VTD</strong>).
                      </p>
                      <p>
                        • <em>“A tesouraria <strong>pagou</strong> ao fornecedor.”</em> → Só a pessoa com preposição{" "}
                        <em>a</em> (<strong>VTI</strong>).
                      </p>
                      <p>
                        • <em>“A tesouraria <strong>pagou</strong> a fatura <strong>ao</strong> fornecedor.”</em> → Coisa
                        + pessoa juntos (<strong>VTDI</strong>).
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite (O verbo 'virar' mudando de ação VTD para estado VL)",
                  accent: "amber",
                  content: (
                    <>
                      <p>
                        <strong>Frase A:</strong>{" "}
                        <em>“O estagiário <strong>virou</strong> a folha do livro de atas.”</em> → Ação física sobre
                        um objeto (<strong>VTD</strong>).
                      </p>
                      <p>
                        <strong>Frase B:</strong>{" "}
                        <em>“O novo sistema eletrônico <strong>virou</strong> referência regional.”</em> → Mudança de
                        estado equivalente a <em>“tornou-se”</em> (<strong>VL</strong>).
                      </p>
                    </>
                  ),
                },
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Tentar classificar o verbo olhando apenas para ele isolado sem ler o restante da frase — e errar quando verbos como andar, ficar, estar, virar, começar ou pagar mudam de sentido."
              escape="Leia sempre o período inteiro e faça as 3 perguntas na ordem: (1) É ação ou é só estado? Se for ação: (2) Fecha sozinho ou exige alvo? Se exige alvo: (3) Liga direto sem preposição, exige preposição, ou pede os dois?"
            />
          </ProseSection>

          {/* 2.2 Verbo Intransitivo (VI) */}
          <ProseSection
            number="2.2"
            title="Verbo Intransitivo (VI): A Ação Completa Sem Objeto e a Regra do Lugar"
          >
            <p>
              Vamos começar pelo primeiro tipo de verbo de ação: o <strong>Verbo Intransitivo (VI)</strong>. O próprio
              nome já entrega a definição: o prefixo <strong>in-</strong> indica negação (<em>“não”</em>) +{" "}
              <strong>transitivo</strong> (<em>“que atravessa até um objeto”</em>). Portanto, o{" "}
              <strong>Verbo Intransitivo (VI)</strong> é aquele cuja ação ou acontecimento{" "}
              <strong>se fecha integralmente no próprio verbo</strong>, sem precisar atravessar para nenhum objeto!
            </p>
            <p>
              Quando você diz <em>“O prazo expirou”</em>, <em>“O servidor nasceu”</em> ou <em>“O diretor chegou”</em>,
              a ação já tem sentido completo por si só. Mas cuidado com a regra abaixo, que decide questões inteiras:
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "A Regra de Ouro do Lugar (Por que verbos de movimento com preposição continuam sendo VI)",
                  badge: "LUGAR NUNCA É OBJETO!",
                  accent: "emerald",
                  summary: (
                    <>
                      “Não precisar de objeto” não quer dizer que a frase acaba no verbo! Depois de um <strong>VI</strong>,
                      o autor pode colocar palavras indicando <strong>ONDE</strong> (lugar), <strong>QUANDO</strong>{" "}
                      (tempo) ou <strong>COMO</strong> (modo). Verbos de movimento ou moradia no espaço — como{" "}
                      <strong>ir, vir, chegar, sair, voltar, morar, residir, comparecer</strong> — costumam vir seguidos
                      de preposição indicando <strong>LUGAR</strong> (<em>“chegou ao setor”</em>,{" "}
                      <em>“mora em Birigui”</em>, <em>“compareceu à sessão”</em>). Como respondem{" "}
                      <strong>ONDE/AONDE?</strong> (cenário de lugar!), continuam sendo <strong>100% VI</strong>!
                    </>
                  ),
                  note: "Teste de 5 Segundos: coloque um ponto final após o verbo ou veja se o termo seguinte responde apenas ONDE, QUANDO ou COMO. Se responder lugar físico, jamais é VTI!",
                },
              ]}
            />

            <AnalogyBox title="Analogia da Lanterna a Pilha" tag="Energia Própria">
              <p>
                Uma lanterna a pilha já possui toda a energia de que precisa dentro dela: basta apertar o botão que ela
                acende sozinha (<strong>VI</strong>). Você pode acendê-la <em>na sala</em>, <em>no corredor</em> ou{" "}
                <em>de madrugada</em> (cenários de lugar e tempo), mas ela não precisa ser plugada em nenhuma tomada
                externa (objeto) para funcionar!
              </p>
            </AnalogyBox>

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (Sentido fechado acompanhado de modo e tempo)",
                  accent: "indigo",
                  content: (
                    <p>
                      <em>“A criança <strong>dormiu</strong> tranquilamente durante a noite.”</em> → Quem dorme, não
                      “dorme algo”. <em>Tranquilamente</em> responde <strong>COMO</strong> (modo) e{" "}
                      <em>durante a noite</em> responde <strong>QUANDO</strong> (tempo). Nenhum dos dois é objeto →{" "}
                      <strong>VI</strong>.
                    </p>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (Verbo 'chegar' com lugar e tempo)",
                  accent: "emerald",
                  content: (
                    <p>
                      <em>“Os novos computadores <strong>chegaram</strong> ao almoxarifado ontem cedo.”</em> → O trecho{" "}
                      <em>“ao almoxarifado”</em> responde <strong>AONDE / ONDE</strong> chegaram (lugar físico!), e{" "}
                      <em>“ontem cedo”</em> responde <strong>QUANDO</strong> → <strong>VI</strong>!
                    </p>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite de Prova (Crase indicando lugar após 'comparecer')",
                  accent: "amber",
                  content: (
                    <p>
                      <em>“Todos os candidatos convocados <strong>compareceram</strong> à audiência pública.”</em> →
                      Mesmo existindo crase em <em>“à audiência pública”</em>, a expressão indica o{" "}
                      <strong>local/evento aonde</strong> os candidatos foram (responde <strong>ONDE/AONDE</strong>).
                      Verbo de deslocamento/presença física + destino continua sendo <strong>VI</strong>!
                    </p>
                  ),
                },
              ]}
            />

            <KeyTable
              title="Comparativo · Cenário (VI) vs. Alvo Direto (VTD)"
              headers={["Frase Analisada na Prova", "Pergunta Respondida Pelo Trecho Seguinte", "Classificação"]}
              rows={[
                ["“O prefeito saiu da reunião.”", "DE ONDE? (lugar de origem)", "VI (lugar não é objeto!)"],
                ["“A sessão começou pontualmente às 9h.”", "COMO e QUANDO? (modo e tempo)", "VI (fechou em si mesmo)"],
                ["“A equipe começou a conferência das notas.”", "COMEÇOU O QUÊ? (alvo: a conferência)", "VTD (aqui pediu objeto!)"],
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Sublinhar o verbo em 'O servidor morou em Birigui' ou 'O cidadão chegou ao guichê' e afirmar que o verbo é Transitivo Indireto (VTI) por vir seguido das preposições 'em' e 'a'."
              escape="Antes de marcar VTI só porque viu uma preposição, pergunte: 'Esse termo depois da preposição responde ONDE/AONDE (lugar físico)?' Se responder ONDE, jamais é Objeto Indireto — o verbo é Intransitivo (VI)!"
            />
          </ProseSection>

          {/* 2.3 Verbo Transitivo Direto (VTD) */}
          <ProseSection
            number="2.3"
            title="Verbo Transitivo Direto (VTD): A Ação em Linha Reta Sem Preposição"
          >
            <p>
              Agora entramos nos verbos cuja ação <strong>não</strong> se fecha sozinha. Quando você diz apenas{" "}
              <em>“O diretor assinou...”</em>, <em>“A prefeitura publicou...”</em> ou{" "}
              <em>“O servidor protocolou...”</em>, quem está ouvindo trava na mesma hora e pergunta:{" "}
              <strong>“Assinou O QUÊ? Publicou O QUÊ? Protocolou O QUÊ?”</strong>
            </p>
            <p>
              O verbo que precisa atravessar até um complemento{" "}
              <strong>em linha reta, sem nenhuma preposição obrigatória no meio do caminho</strong>, chama-se{" "}
              <strong>Verbo Transitivo Direto (VTD)</strong>. E a peça que completa o sentido dele chama-se{" "}
              <strong>Objeto Direto (OD)</strong>.
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "O Teste Prático Infalível de 5 Segundos (Teste do 'ISSO')",
                  badge: "VERBO + O QUÊ / QUEM?",
                  accent: "indigo",
                  summary: (
                    <>
                      1. Pergunte logo depois do verbo: <strong>Verbo + O QUÊ?</strong> (para coisas) ou{" "}
                      <strong>Verbo + QUEM?</strong> (para pessoas).
                      <br />
                      2. Substitua mentalmente todo o complemento depois do verbo pela palavra <strong>ISSO</strong>{" "}
                      (ou pelos pronomes <strong>o, a, os, as</strong>): se encaixar direto, sem nenhuma preposição
                      antes de <em>ISSO</em> (<em>“assinou ISSO”</em>, <em>“publicou ISSO”</em>), o verbo é{" "}
                      <strong>100% Transitivo Direto (VTD)</strong>!
                    </>
                  ),
                },
              ]}
            />

            <AnalogyBox title="Analogia da Tomada Direta de 2 Pinos" tag="Ligação Sem Intermediário">
              <p>
                O <strong>VTD</strong> é um aparelho cujo plugue encaixa <strong>direto na tomada da parede</strong>,
                sem precisar de nenhum adaptador no meio. Se você deixar o plugue solto no ar sem encaixar no Objeto
                Direto, a frase não funciona!
              </p>
            </AnalogyBox>

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (Ligação direta com artigo masculino)",
                  accent: "indigo",
                  content: (
                    <p>
                      <em>“O cidadão <strong>preencheu</strong> o formulário.”</em> → Preencheu <strong>o quê?</strong>{" "}
                      → <em>o formulário</em> (a palavra <em>o</em> é apenas artigo definido masculino, sem preposição).
                      Trocando por <em>ISSO</em>: <em>“O cidadão preencheu <strong>ISSO</strong>.”</em> →{" "}
                      <strong>VTD</strong>.
                    </p>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (Alvo longo resumido em 'ISSO')",
                  accent: "emerald",
                  content: (
                    <p>
                      <em>“A comissão organizadora <strong>homologou</strong> o resultado final do concurso público.”</em>{" "}
                      → Trocando o bloco inteiro após o verbo por <em>ISSO</em>:{" "}
                      <em>“A comissão homologou <strong>ISSO</strong>.”</em> Encaixou sem preposição antes de{" "}
                      <em>ISSO</em> → <strong>VTD</strong>!
                    </p>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite (Como não confundir o artigo feminino 'a' com preposição)",
                  accent: "amber",
                  content: (
                    <>
                      <p>
                        <strong>Frase A:</strong> <em>“O coordenador <strong>revisou a</strong> portaria.”</em> → Para
                        provar que esse <strong>a</strong> é apenas artigo (e não preposição), troque a palavra feminina
                        (<em>portaria</em>) por uma masculina (<em>decreto</em>): fica{" "}
                        <em>“O coordenador revisou <strong>o</strong> decreto”</em> (só artigo <em>o</em>!). Logo,{" "}
                        <em>revisou</em> é <strong>VTD</strong>!
                      </p>
                      <p>
                        <strong>Frase B (Contraste):</strong>{" "}
                        <em>“O coordenador <strong>obedeceu à</strong> portaria.”</em> → Trocando por <em>decreto</em>,
                        vira <em>“O coordenador obedeceu <strong>ao</strong> decreto”</em> (apareceu{" "}
                        <code>ao = preposição a + artigo o</code>!). Aqui sim há preposição obrigatória →{" "}
                        <strong>VTI</strong>.
                      </p>
                    </>
                  ),
                },
              ]}
            />

            <CompareGrid
              title="Como Testar a Letra 'a' Depois do Verbo em 3 Segundos"
              mode="contrast"
              left={{
                title: "Se no masculino virar 'O' → Só Artigo = VTD",
                badge: "SEM PREPOSIÇÃO",
                items: [
                  <span key="vtd1">
                    <em>“A secretaria <strong>publicou a</strong> norma.”</em> → Trocando por masculino:{" "}
                    <em>“A secretaria publicou <strong>o</strong> decreto.”</em> (Não existe preposição ={" "}
                    <strong>VTD</strong>).
                  </span>,
                ],
              }}
              right={{
                title: "Se no masculino virar 'AO' → Preposição + Artigo = VTI",
                badge: "COM PREPOSIÇÃO A",
                items: [
                  <span key="vti1">
                    <em>“O servidor <strong>obedeceu à</strong> norma.”</em> → Trocando por masculino:{" "}
                    <em>“O servidor obedeceu <strong>ao</strong> decreto.”</em> (Apareceu a preposição <em>a</em> ={" "}
                    <strong>VTI</strong>).
                  </span>,
                ],
              }}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Colocar um verbo VTD seguido de palavra feminina com o artigo 'a' ('A prefeitura convocou a candidata') e afirmar na alternativa que o complemento é introduzido pela preposição 'a'."
              escape="Passe o substantivo feminino para o masculino ('convocou O candidato'). Se virar apenas 'o' (e não 'ao'), não existe preposição nenhuma ali: é apenas um artigo acompanhando o Objeto Direto de um VTD!"
            />
          </ProseSection>

          {/* 2.4 Verbo Transitivo Indireto (VTI) */}
          <ProseSection
            number="2.4"
            title="Verbo Transitivo Indireto (VTI): A Ação que Exige Ponte Obrigatória (Preposição)"
          >
            <p>
              Acabamos de ver que o <code>VTD</code> liga-se ao seu complemento em linha reta, sem intermediário. Mas
              existem verbos em português que <strong>não conseguem encostar no seu complemento sozinhos</strong>: entre
              o verbo e o alvo, a norma culta exige obrigatoriamente uma palavra-ponte chamada{" "}
              <strong>preposição</strong> (<code>de, a, em, com, por, para</code>).
            </p>
            <p>
              Esse verbo chama-se <strong>Verbo Transitivo Indireto (VTI)</strong>, justamente porque a travessia até o
              alvo é <em>indireta</em> (passa pela ponte da preposição). E o complemento precedido por essa preposição
              obrigatória chama-se <strong>Objeto Indireto (OI)</strong>.
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Atenção às Preposições Escondidas em Contrações",
                  badge: "DESMONTE A CONTRAÇÃO!",
                  accent: "purple",
                  summary: (
                    <>
                      Na maioria das questões da ACCESS, a preposição não aparece “pura” (<em>de, em, a</em>), mas sim{" "}
                      <strong>misturada com o artigo seguinte</strong>:
                      <br />• <code>de + o/a = do, da, dos, das</code> (<em>“precisa <strong>da</strong> certidão”</em>)
                      <br />• <code>em + o/a = no, na, nos, nas</code> (<em>“confia <strong>nos</strong> servidores”</em>)
                      <br />• <code>a + o/a = ao, à, aos, às</code> (<em>“obedece <strong>ao</strong> edital / <strong>às</strong> regras”</em>)
                    </>
                  ),
                },
                {
                  term: "2. O Teste Prático de 5 Segundos (Teste do 'DISSO / A ISSO / NISSO')",
                  badge: "PREPOSIÇÃO OBRIGATÓRIA",
                  accent: "sky",
                  summary:
                    "Pergunte depois do verbo colocando a preposição na frente: DE QUÊ? / A QUÊ? / EM QUÊ? / COM QUÊ?. Troque o complemento por DISSO, A ISSO, NISSO ou COM ISSO: se a preposição for indispensável antes de ISSO, o verbo é 100% VTI!",
                },
              ]}
            />

            <AnalogyBox title="Analogia da Tomada com Adaptador Obrigatório" tag="Ponte com Pedágio">
              <p>
                O <strong>VTI</strong> é um plugue de 3 pinos diante de uma tomada antiga: ele só passa energia se você
                colocar o <strong>adaptador obrigatório (a preposição)</strong> no meio. Sem o adaptador, a ligação
                quebra!
              </p>
            </AnalogyBox>

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (Preposição 'de' explícita)",
                  accent: "indigo",
                  content: (
                    <p>
                      <em>“O novo chefe <strong>gosta de</strong> pontualidade.”</em> → Quem gosta, gosta{" "}
                      <strong>DE quê?</strong> Teste: <em>“gosta <strong>DISSO</strong>”</em> (é impossível dizer{" "}
                      <em>“gosta pontualidade”</em> sem o <em>de</em>). Resultado: <em>gosta</em> é{" "}
                      <strong>VTI</strong> e <em>de pontualidade</em> é o <strong>Objeto Indireto (OI)</strong>.
                    </p>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (Preposição 'a' marcada pela crase)",
                  accent: "emerald",
                  content: (
                    <p>
                      <em>“Todos os funcionários <strong>obedeceram às</strong> normas de segurança.”</em> → Quem
                      obedece, obedece <strong>A quê / A quem?</strong> O acento grave em <strong>às</strong> prova que
                      ali existem <code>preposição a + artigo as</code> (<em>obedeceram <strong>A ISSO</strong></em>)
                      → <strong>VTI</strong>!
                    </p>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite (Preposição 'em' camuflada dentro de 'nos')",
                  accent: "amber",
                  content: (
                    <p>
                      <em>“A comissão <strong>confiou nos</strong> laudos apresentados pelo perito.”</em> → Nunca leia{" "}
                      <em>“nos”</em> como um simples artigo! Desmonte: <code>nos = preposição EM + artigo OS</code>.
                      Quem confia, confia <strong>EM quê?</strong> (<em>confiou <strong>NISSO</strong></em>) →{" "}
                      <strong>VTI</strong>!
                    </p>
                  ),
                },
              ]}
            />

            <KeyTable
              title="Comparativo · Objeto Indireto (VTI) vs. Lugar Físico (VI)"
              headers={["Frase Comparada na Prova", "Pergunta Feita Após o Verbo", "Classificação Real"]}
              rows={[
                ["“O departamento precisou de novos técnicos.”", "Precisou DE QUÊ? (precisou DISSO)", "VTI + Objeto Indireto"],
                ["“O servidor trabalhou em Birigui.”", "Trabalhou ONDE? (localização geográfica)", "VI + Adjunto de Lugar"],
                ["“O auditor duvidou do relatório.”", "Duvidou DE QUÊ? (do = de+o → DISSO)", "VTI + Objeto Indireto"],
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Esconder a preposição dentro de contrações como 'do', 'da', 'no', 'na', 'ao', 'à' ('O candidato lembrou-se do prazo', 'A equipe concordou com o parecer') e afirmar que o verbo é Transitivo Direto (VTD)."
              escape="Sempre desmonte mentalmente do = de+o, no = em+o, ao = a+o, à = a+a. Se a preposição não puder ser removida antes de ISSO (lembrou-se DISSO, concordou COM ISSO), o verbo é VTI!"
            />
          </ProseSection>

          {/* 2.5 Verbo Transitivo Direto e Indireto (VTDI) */}
          <ProseSection
            number="2.5"
            title="Verbo Transitivo Direto e Indireto (VTDI): O Verbo de Duas Mãos"
          >
            <p>
              Agora que você já conhece o <code>VTD</code> (que pede um alvo direto sem preposição) e o{" "}
              <code>VTI</code> (que pede um alvo indireto com preposição), fica muito fácil entender o quarto tipo de
              verbo de ação: o <strong>Verbo Transitivo Direto e Indireto (VTDI)</strong>, também chamado pelas bancas
              de <strong>Verbo Bitransitivo</strong> (<em>bi</em> = dois).
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "Como Funciona o VTDI (As Duas Mãos Ocupadas ao Mesmo Tempo)",
                  badge: "OD + OI NA MESMA ORAÇÃO",
                  accent: "purple",
                  summary: (
                    <>
                      O <strong>VTDI</strong> abre duas necessidades simultâneas na mesma frase:
                      <br />
                      1. Pede <strong>um Objeto Direto (OD — sem preposição)</strong> para dizer{" "}
                      <strong>O QUÊ</strong> foi transferido ou comunicado; <strong>E</strong>
                      <br />
                      2. Pede <strong>um Objeto Indireto (OI — com preposição)</strong> para dizer{" "}
                      <strong>A QUEM / PARA QUEM / DE QUEM</strong> aquilo foi destinado.
                    </>
                  ),
                  example:
                    "Fórmula de 5 Segundos: Sujeito + Verbo + ISSO (sem preposição = OD) + A ALGUÉM (com preposição = OI). Ex.: “A secretaria entregou o certificado (OD) ao candidato (OI).”",
                },
              ]}
            />

            <AnalogyBox title="Analogia do Carteiro de Duas Mãos" tag="Pacote + Destinatário">
              <p>
                Imagine um carteiro entrando na Prefeitura com as <strong>duas mãos ocupadas</strong>: na{" "}
                <strong>mão direita</strong>, ele segura a encomenda sem adaptador (<strong>Objeto Direto</strong>:{" "}
                <em>o documento</em>); na <strong>mão esquerda</strong>, ele segura a etiqueta de destinatário com a
                preposição colada (<strong>Objeto Indireto</strong>: <em>ao diretor</em>).
              </p>
            </AnalogyBox>

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (Entrega clássica com os dois objetos)",
                  accent: "indigo",
                  content: (
                    <p>
                      <em>“O porteiro <strong>entregou</strong> a encomenda <strong>ao</strong> morador.”</em> → Mão 1 (
                      <em>entregou o quê?</em> — sem preposição): <strong>a encomenda (OD)</strong>. Mão 2 (
                      <em>a quem?</em> — com preposição <em>a</em>): <strong>ao morador (OI)</strong> →{" "}
                      <strong>VTDI</strong>.
                    </p>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (Comunicação oficial de duas vias)",
                  accent: "emerald",
                  content: (
                    <p>
                      <em>
                        “O departamento de compras <strong>enviou</strong> os novos orçamentos{" "}
                        <strong>à</strong> diretoria financeira.”
                      </em>{" "}
                      → Enviou <em>o quê?</em> <strong>os novos orçamentos (OD)</strong> + <em>a quem?</em>{" "}
                      <strong>à diretoria financeira (OI)</strong> → <strong>VTDI</strong>.
                    </p>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite (Quando o pronome 'lhe' ocupa uma das mãos)",
                  accent: "amber",
                  content: (
                    <p>
                      <em>“O presidente da comissão <strong>comunicou-lhe</strong> o resultado final do certame.”</em>{" "}
                      → Olhe para o pronome <strong>-lhe</strong> grudado no verbo! Ele significa{" "}
                      <strong>“a ele / a ela”</strong> e funciona como <strong>Objeto Indireto (OI)</strong>, enquanto{" "}
                      <strong>o resultado final do certame</strong> é o <strong>Objeto Direto (OD)</strong>. Tem as
                      duas mãos ocupadas = <strong>VTDI</strong>!
                    </p>
                  ),
                },
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Colocar um verbo VTD seguido de um objeto e de um LUGAR — como 'O funcionário arquivou os processos no armário de aço' — e afirmar que o verbo é VTDI porque possui um termo sem preposição e outro com preposição."
              escape="Olhe para o segundo bloco ('no armário de aço'): ele responde 'A QUEM?' ou responde 'ONDE?' Ele responde ONDE (lugar físico)! Como lugar nunca é Objeto Indireto, existe apenas 1 objeto na frase ('os processos' = OD), e o verbo 'arquivou' é apenas VTD!"
            />
          </ProseSection>

          {/* 2.6 Verbo de Ligacao (VL) */}
          <ProseSection
            number="2.6"
            title="Verbo de Ligação (VL): A Ponte de Estado, as 5 Famílias e o Verbo Mudando de Roupa"
          >
            <p>
              Nos tópicos 2.2 a 2.5, estudamos os quatro verbos que expressam <strong>ação ou acontecimento</strong> (
              <code>VI, VTD, VTI, VTDI</code>). Agora chegamos ao quinto tipo de verbo, que pertence a uma natureza
              completamente diferente: o <strong>Verbo de Ligação (VL)</strong>.
            </p>
            <p>
              Por que ele tem esse nome? Porque em uma frase como <em>“O edital é claro”</em> ou{" "}
              <em>“Os servidores estão cansados”</em>, o verbo{" "}
              <strong>NÃO representa nenhuma ação física nem atividade executada pelo sujeito</strong>. O papel dele é
              exclusivamente servir de <strong>ponte (ligação)</strong> entre o <strong>Sujeito</strong> e uma{" "}
              <strong>qualidade, estado ou condição</strong> desse sujeito.
            </p>

            <KeyTable
              title="As 5 Famílias de Estado dos Verbos de Ligação (VL)"
              headers={[
                "Família de Estado",
                "Verbos Principais",
                "O Que a Ponte Indica",
                "Exemplo na Rotina da Prefeitura",
              ]}
              rows={[
                [
                  "1. Estado Permanente",
                  "ser, viver",
                  "Característica fixa ou constante",
                  "“O prazo legal é improrrogável.” / “O balcão vive cheio.”",
                ],
                [
                  "2. Estado Transitório",
                  "estar, andar, achar-se",
                  "Como o sujeito está temporariamente",
                  "“A equipe está pronta.” / “O diretor anda preocupado.”",
                ],
                [
                  "3. Mudança de Estado",
                  "ficar, tornar-se, virar",
                  "Passou de um estado para outro",
                  "“O cidadão ficou tranquilo.” / “O protocolo tornou-se digital.”",
                ],
                [
                  "4. Continuidade de Estado",
                  "permanecer, continuar",
                  "Manteve o mesmo estado anterior",
                  "“Os documentos fiscais permaneceram intactos no cofre.”",
                ],
                [
                  "5. Aparência de Estado",
                  "parecer",
                  "Impressão aparente do sujeito",
                  "“O recurso apresentado parece consistente.”",
                ],
              ]}
            />

            <AnalogyBox title="Analogia do Sinal de Igual (=) com Filtro de Tempo" tag="Sujeito = Qualidade">
              <p>
                O <strong>Verbo de Ligação (VL)</strong> funciona exatamente como o sinal de igual <strong>=</strong>{" "}
                da Matemática conectando o sujeito à sua característica (<code>Sujeito = Qualidade</code>), só que
                adicionando um filtro de tempo: <em>é</em> = sempre; <em>está/anda</em> = agora;{" "}
                <em>ficou/tornou-se</em> = mudou para; <em>permaneceu/continuou</em> = continuou sendo; <em>parece</em>{" "}
                = aparenta ser.
              </p>
            </AnalogyBox>

            <DefinitionBlocks
              items={[
                {
                  term: "Cuidado Redobrado: O Fenômeno do 'Verbo Mudando de Roupa' (VL vs. VI)",
                  badge: "ESTADO = VL · LUGAR/MOVIMENTO = VI",
                  accent: "rose",
                  summary: (
                    <>
                      Os verbos <em>ser, estar, andar, ficar, continuar, permanecer, viver</em>{" "}
                      <strong>SÓ são Verbos de Ligação quando ligam o Sujeito a uma QUALIDADE ou ESTADO!</strong> Se na
                      frase da prova um desses verbos indicar <strong>movimento físico</strong> (
                      <em>“andou pela rua”</em>) ou <strong>localização física / lugar onde algo está</strong> (
                      <em>“está na gaveta”</em>, <em>“ficou em casa”</em>, <em>“permaneceu no gabinete”</em>), ele{" "}
                      <strong>deixa de ser VL e passa a ser Verbo Intransitivo (VI)</strong>!
                    </>
                  ),
                },
              ]}
            />

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (Estado emocional ligado ao sujeito = VL)",
                  accent: "indigo",
                  content: (
                    <p>
                      <em>“O candidato <strong>ficou confiante</strong> após a leitura do edital.”</em> → O verbo{" "}
                      <em>ficou</em> liga o sujeito <em>O candidato</em> à qualidade <em>confiante</em> →{" "}
                      <strong>VL</strong>.
                    </p>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (Continuidade e aparência de estado = VL)",
                  accent: "emerald",
                  content: (
                    <p>
                      <em>
                        “Durante a fiscalização, as atas <strong>permaneceram organizadas</strong> e o relatório{" "}
                        <strong>parecia completo</strong>.”
                      </em>{" "}
                      → Ambos ligam os sujeitos às suas qualidades (<em>organizadas</em> e <em>completo</em>) → ambos
                      são <strong>VL</strong>.
                    </p>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite (O mesmo verbo 'estar' como VL vs. VI)",
                  accent: "amber",
                  content: (
                    <>
                      <p>
                        <strong>Frase A:</strong> <em>“Os processos licitatórios <strong>estão atrasados</strong>.”</em>{" "}
                        → <em>Atrasados</em> é uma <strong>qualidade/estado</strong> dos processos →{" "}
                        <strong>Verbo de Ligação (VL)</strong>.
                      </p>
                      <p>
                        <strong>Frase B:</strong>{" "}
                        <em>“Os processos licitatórios <strong>estão no armário</strong>.”</em> → <em>No armário</em>{" "}
                        responde apenas <strong>ONDE</strong> eles estão fisicamente (<strong>lugar</strong>!) →{" "}
                        <strong>Verbo Intransitivo (VI)</strong>!
                      </p>
                    </>
                  ),
                },
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Sublinhar o verbo em 'O prefeito permaneceu no gabinete até as 20h' ou 'Os malotes estão na recepção' e afirmar que é Verbo de Ligação (VL) só porque 'permanecer' e 'estar' são famosos verbos de ligação."
              escape="Olhe para o que vem logo depois do verbo: é uma QUALIDADE/ESTADO do sujeito ou é um LUGAR (ONDE)? Se for qualidade ('permaneceu calmo', 'estão abertos'), é VL. Se for lugar ('no gabinete', 'na recepção'), é VI!"
            />
          </ProseSection>

          {/* 2.7 Falsa Preposicao e Regencias Campeas */}
          <ProseSection
            number="2.7"
            title="A Armadilha da 'Falsa Preposição' e as 5 Regências Campeãs da ACCESS"
          >
            <p>
              Antes de estudarmos os Objetos e Pronomes, precisamos blindar você contra uma das questões mais cobradas
              recentemente pelo Instituto ACCESS (inclusive na prova da{" "}
              <strong>Prefeitura de Contagem/MG 2026 — Assistente Administrativo, Q01</strong>): a{" "}
              <strong>Armadilha da “Falsa Preposição”</strong>!
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "Como Funciona a Armadilha da 'Falsa Preposição'",
                  badge: "CONTAGEM/MG 2026 Q01",
                  accent: "rose",
                  summary: (
                    <>
                      O examinador escolhe um verbo que é <strong>Transitivo Direto (VTD — não pede preposição)</strong>,
                      mas coloca depois dele um complemento comprido que{" "}
                      <strong>contém uma preposição lá dentro</strong>. Veja a frase real da prova:{" "}
                      <em>
                        “O edifício monumental... <strong>exibe</strong> fachada revestida <strong>por</strong>{" "}
                        hieróglifos...”
                      </em>
                      . Quem exigiu a preposição <strong>por</strong> foi a palavra <em>revestida</em> (revestida por
                      algo), e NÃO o verbo <em>exibe</em>!
                    </>
                  ),
                  note: "Teste de 5 Segundos: troque o bloco inteiro após o verbo por ISSO. Coube 'O edifício exibe ISSO' sem preposição antes de ISSO? Então o verbo é 100% VTD!",
                },
              ]}
            />

            <p>
              Além da falsa preposição, a banca cobra muito <strong>5 verbos famosos</strong> cuja transitividade muda
              conforme o significado (ou que na fala popular usamos sem preposição, mas na prova exigem preposição{" "}
              <strong>a</strong> obrigatória):
            </p>

            <KeyTable
              title="As 5 Regências Verbais Campeãs em Concursos Municipais (ACCESS)"
              headers={[
                "Verbo Campeão",
                "Quando é VTD (SEM Preposição)",
                "Quando é VTI (COM Preposição 'A' Obrigatória)",
              ]}
              rows={[
                [
                  "1. ASSISTIR",
                  "= Ajudar / prestar socorro (“O médico assistiu o paciente.”)",
                  "= Ver / presenciar (“O servidor assistiu ao debate / à sessão.” — não aceita 'lhe', usa 'a ele')",
                ],
                [
                  "2. VISAR",
                  "= Assinar / pôr visto ou mirar (“O diretor visou o cheque.”)",
                  "= Ter como objetivo / almejar (“A medida visa ao interesse público / à eficiência.”)",
                ],
                [
                  "3. OBEDECER / DESOBEDECER",
                  "(Na norma culta de concurso, NUNCA é VTD!)",
                  "SEMPRE VTI com preposição A (“O funcionário obedece ao estatuto / às leis / obedece-lhe.”)",
                ],
                [
                  "4. PAGAR / PERDOAR",
                  "Alvo é COISA: conta, multa, dívida (“A prefeitura pagou a fatura.”)",
                  "Alvo é PESSOA / EMPRESA (“A prefeitura pagou ao fornecedor.” — Coisa + Pessoa = VTDI)",
                ],
                [
                  "5. ASPIRAR",
                  "= Cheirar / inalar pelos pulmões (“O operário aspirou o pó.”)",
                  "= Desejar / pretender cargo (“O jovem aspira ao cargo de Oficial Administrativo.”)",
                ],
              ]}
            />

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Desarmando a Falsa Preposição com o Teste do 'ISSO'",
                  accent: "indigo",
                  content: (
                    <p>
                      <em>
                        “A técnica de informática <strong>instalou</strong> o programa <strong>de</strong> controle{" "}
                        <strong>com</strong> assinatura digital.”
                      </em>{" "}
                      → Existem duas preposições (<em>de</em> e <em>com</em>), mas troque tudo depois do verbo por{" "}
                      <em>ISSO</em>: <em>“A técnica <strong>instalou ISSO</strong>.”</em> As preposições pertencem a{" "}
                      <em>programa</em>, e não ao verbo → <strong>VTD</strong>!
                    </p>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura ('Visar' e 'Obedecer' na norma culta)",
                  accent: "emerald",
                  content: (
                    <p>
                      <em>
                        “O novo decreto <strong>visa à</strong> modernização do protocolo, e todos os setores{" "}
                        <strong>obedecem às</strong> suas diretrizes.”
                      </em>{" "}
                      → <em>Visar</em> (= objetivar) e <em>obedecer</em> exigem a preposição <strong>a</strong> (gerando
                      crase antes de palavras femininas) → ambos <strong>VTI</strong>.
                    </p>
                  ),
                },
                {
                  label: "Exemplo 3 · Questão Real ACCESS (CRBio-05 2025 Q10 · 'Assistir' + 'Pagar')",
                  accent: "amber",
                  content: (
                    <p>
                      Em <em>“O professor <strong>assistiu aos</strong> alunos”</em>, a presença da preposição em{" "}
                      <strong>aos</strong> caracteriza o verbo como <strong>VTI</strong>. Já em{" "}
                      <em>“O munícipe <strong>pagou a</strong> taxa <strong>ao</strong> caixa”</em>, temos coisa sem
                      preposição (OD) + pessoa com preposição (OI) → <strong>VTDI</strong>!
                    </p>
                  ),
                },
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Escrever frases que parecem normais na fala cotidiana, mas que estão erradas na prova: 'Assistimos o documentário', 'O servidor obedeceu o regulamento', 'Pagaram o fornecedor ontem', 'Aspirava o cargo público'."
              escape="Memorize o grupo da preposição A: Assistir (ver), Visar (objetivar), Aspirar (desejar cargo), Obedecer (sempre!) e Pagar/Perdoar (pessoa) exigem obrigatoriamente ao / à / aos / às!"
            />
          </ProseSection>

          {/* 2.8 Objetos OD e OI e Pronomes */}
          <ProseSection
            number="2.8"
            title="Objeto Direto (OD), Objeto Indireto (OI) e a Substituição por Pronomes (o/a vs. lhe e Camaleões)"
          >
            <p>
              Nos tópicos anteriores, nós olhamos para o <strong>verbo</strong> (<code>VTD, VTI, VTDI</code>). Agora
              vamos olhar para a peça que vem depois dele completando o seu sentido: os <strong>Objetos</strong>, e
              descobrir como substituí-los por <strong>pronomes oblíquos</strong> sem cair nas armadilhas da prova.
            </p>
            <p>
              Na fala do dia a dia as pessoas dizem <em>“Eu vi ele”</em> ou <em>“Eu lhe amo”</em>, mas na norma culta de
              concurso cada pronome oblíquo tem um endereço sintático exclusivo. Veja um por um em ordem linear:
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Objeto Direto (OD) → Par Exclusivo de 'o, a, os, as' (e variantes 'lo, la, no, na')",
                  badge: "COMPLEMENTO SEM PREPOSIÇÃO (VTD)",
                  accent: "indigo",
                  summary: (
                    <>
                      O <strong>Objeto Direto</strong> completa um verbo <code>VTD</code> (ou a mão direta de um{" "}
                      <code>VTDI</code>) sem preposição obrigatória. Na norma culta, ele é substituído{" "}
                      <strong>EXCLUSIVAMENTE por o, a, os, as</strong>.
                    </>
                  ),
                  note: "Por que às vezes vira LO/LA ou NO/NA? Quando o verbo termina em -R, -S ou -Z, a consoante cai e entra L ('protocolar + o = protocolá-lo', 'fez + o = fê-lo'). Quando o verbo termina em som nasal (-M, -ÃO, -ÕE), entra N ('protocolaram + o = protocolaram-no'). Todos continuam sendo 100% Objeto Direto!",
                },
                {
                  term: "2. Objeto Indireto (OI) → Par do Pronome 'lhe / lhes' (para preposição A)",
                  badge: "COMPLEMENTO COM PREPOSIÇÃO (VTI)",
                  accent: "sky",
                  summary: (
                    <>
                      O <strong>Objeto Indireto</strong> completa um verbo <code>VTI</code> (ou a mão indireta de um{" "}
                      <code>VTDI</code>) com preposição obrigatória. Quando representa pessoa (ou ente personificado)
                      com a preposição <strong>a</strong>, é substituído{" "}
                      <strong>EXCLUSIVAMENTE por lhe ou lhes</strong> (<em>“Obedecemos ao diretor” → “Obedecemos-lhe”</em>
                      ).
                    </>
                  ),
                },
                {
                  term: "3. Os Pronomes Camaleões ('me, te, se, nos, vos') → Dependem do Verbo!",
                  badge: "OLHE PARA O VERBO!",
                  accent: "purple",
                  summary: (
                    <>
                      Os pronomes <strong>me, te, se, nos, vos</strong> trabalham tanto como <strong>OD</strong> quanto
                      como <strong>OI</strong>! Quem decide o cargo deles é o verbo:
                      <br />• Com verbo <strong>VTD</strong> (sem preposição: <em>chamar, convocar, elogiar</em>) → são{" "}
                      <strong>Objeto Direto (OD)</strong>! Ex.: <em>“O diretor convocou-<strong>me</strong>.”</em>
                      <br />• Com verbo <strong>VTI</strong> (com preposição: <em>obedecer a, responder a</em>) → são{" "}
                      <strong>Objeto Indireto (OI)</strong>! Ex.: <em>“O diretor respondeu-<strong>me</strong>.”</em>
                    </>
                  ),
                },
              ]}
            />

            <KeyTable
              title="Mapa Rápido dos Pronomes Oblíquos na Prova"
              headers={[
                "Pronome Oblíquo",
                "Qual Função Sintática Exerce Junto ao Verbo?",
                "Exemplo Correto na Norma Culta",
              ]}
              rows={[
                [
                  "o, a, os, as (lo, la, no, na)",
                  "SEMPRE Objeto Direto (OD) — só entra com VTD ou VTDI",
                  "“Conheço o servidor” (VTD) → “Conheço-o” / “Vou chamá-lo”",
                ],
                [
                  "lhe, lhes",
                  "Objeto Indireto (OI) — entra com verbo que pede preposição A",
                  "“Obedeço ao estatuto” (VTI) → “Obedeço-lhe” / “Enviei-lhe a ata”",
                ],
                [
                  "me, te, se, nos, vos (Camaleões)",
                  "Com VTD = Objeto Direto (OD) | Com VTI = Objeto Indireto (OI)",
                  "“Elogiou-nos” (VTD → OD) vs. “Obedeceu-nos” (VTI → OI)",
                ],
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Trocar 'o/no' por 'lhe' (ou vice-versa), criando frases como: 'Os servidores obedecem-no rigorosamente' (errado, pois obedecer é VTI e exige lhe!) ou 'Eu lhe vi na recepção' (errado, pois ver é VTD e exige o: 'Eu o vi'!)."
              escape="Antes de aceitar o/lo/no ou lhe, pergunte ao verbo: 'Ele pede preposição A?' Se NÃO pede preposição (ver, conhecer, convidar), use o/a/lo/no (OD). Se PEDE preposição a (obedecer a, agradecer a, responder a), use lhe/lhes (OI)!"
            />
          </ProseSection>

          {/* 2.9 Casos Especiais: OD Preposicionado e Objeto Pleonastico */}
          <ProseSection
            number="2.9"
            title="Casos Especiais dos Objetos: Objeto Direto Preposicionado e Objeto Pleonástico"
          >
            <p>
              Para fechar o Eixo 2 com 100% de cobertura do edital, existem dois casos especiais em que o Objeto ganha
              um formato diferente na frase. Vamos entender um de cada vez:
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Objeto Direto Preposicionado (Verbo VTD + Preposição Opcional/Estilística)",
                  badge: "A PREPOSIÇÃO NÃO FOI EXIGIDA PELO VERBO",
                  accent: "amber",
                  summary: (
                    <>
                      Aqui o verbo <strong>continua sendo um VTD</strong> (ele não exige preposição), mas o autor coloca
                      uma preposição <strong>opcional / estilística</strong> antes do objeto apenas por ênfase, clareza
                      ou tradição (<em>“Amar <strong>a</strong> Deus”</em>,{" "}
                      <em>“A secretária cumpriu <strong>com o</strong> dever”</em>,{" "}
                      <em>“Comeu <strong>do</strong> pão”</em>).
                    </>
                  ),
                  note: "Como diferenciar de um Objeto Indireto em 5 segundos? Faça o Teste da Remoção: em 'A secretária cumpriu com o dever', se você tirar o 'com' ('A secretária cumpriu o dever'), a frase continua 100% perfeita na norma culta! Logo, o verbo é VTD e o termo é Objeto Direto Preposicionado!",
                },
                {
                  term: "2. Objeto Pleonástico (OD Pleonástico e OI Pleonástico — Repetição Enfática)",
                  badge: "ANTECIPA O OBJETO E REPETE COM PRONOME",
                  accent: "emerald",
                  summary: (
                    <>
                      <strong>Pleonasmo</strong> significa repetição para dar ênfase. Ocorre quando o autor coloca o
                      Objeto no <strong>começo da frase</strong> para destacá-lo e, logo depois,{" "}
                      <strong>repete esse mesmo objeto usando um pronome oblíquo (o, a, os, as, lhe, lhes)</strong>{" "}
                      junto ao verbo!
                    </>
                  ),
                  example:
                    "OD Pleonástico: “O ofício urgente, a secretária já o protocolou hoje.” (o repete 'O ofício urgente') | OI Pleonástico: “Aos candidatos aprovados, a Prefeitura não lhes negou posse.” (lhes repete 'Aos candidatos aprovados').",
                },
              ]}
            />

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Teste da Remoção (OD Preposicionado vs. OI Real)",
                  accent: "indigo",
                  content: (
                    <>
                      <p>
                        • <em>“A servidora <strong>cumpriu com a</strong> meta.”</em> → Tirando a preposição:{" "}
                        <em>“A servidora cumpriu a meta.”</em> (Fica perfeito! →{" "}
                        <strong>Objeto Direto Preposicionado</strong>).
                      </p>
                      <p>
                        • <em>“A servidora <strong>precisou da</strong> certidão.”</em> → Tirando a preposição:{" "}
                        <em>“A servidora precisou a certidão.”</em> (Quebra a norma culta! →{" "}
                        <strong>Objeto Indireto</strong>).
                      </p>
                    </>
                  ),
                },
                {
                  label: "Exemplo 2 · Objeto Direto Pleonástico na Rotina de Prefeitura",
                  accent: "emerald",
                  content: (
                    <p>
                      <em>“<strong>Os processos licitatórios</strong>, o fiscal já <strong>os</strong> conferiu ontem.”</em>{" "}
                      → Na Ordem Direta: <em>“O fiscal (Sujeito) já conferiu os processos licitatórios (OD) ontem.”</em>{" "}
                      Como o objeto foi antecipado e repetido pelo pronome <strong>os</strong>, esse pronome{" "}
                      <strong>os</strong> classifica-se como <strong>Objeto Direto Pleonástico</strong>!
                    </p>
                  ),
                },
                {
                  label: "Exemplo 3 · Objeto Indireto Pleonástico com 'lhe'",
                  accent: "amber",
                  content: (
                    <p>
                      <em>“<strong>Ao contribuinte</strong>, não <strong>lhe</strong> negamos atendimento.”</em> → O
                      pronome <strong>lhe</strong> repete enfaticamente o Objeto Indireto antecipado{" "}
                      <em>Ao contribuinte</em> → <strong>Objeto Indireto Pleonástico</strong>!
                    </p>
                  ),
                },
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Na frase 'As certidões negativas, o atendente já as emitiu pela manhã', perguntar a função de 'As certidões negativas' e afirmar na alternativa que é o Sujeito da oração por vir no começo antes da vírgula."
              escape="Coloque na Ordem Direta! Quem praticou a ação de emitir? 'O atendente' (ele é o Sujeito!). 'As certidões negativas' é o Objeto Direto antecipado, e o pronome 'as' que o repete é o Objeto Direto Pleonástico!"
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
        "Leitura linear em 5 passos: o Teste da Concordância (+ Fluxograma SVG), Sujeito Determinado (Simples, Composto e Oculto), Voz Passiva Analítica e Agente da Passiva, o Trio do 'SE' (PA × IIS × Reflexivo) e as Orações Sem Sujeito.",
      estimatedMinutes: 30,
      render: () => (
        <div className="space-y-6">
          {/* 3.1 Teste da Concordancia + SVG 2 */}
          <ProseSection
            number="3.1"
            title="Como Encontrar o Sujeito Sem Nunca Errar: O Teste da Concordância (+ Fluxograma em SVG)"
          >
            <p>
              Agora que você já sabe dividir a frase em <strong>Sujeito e Predicado</strong> (Eixo 1) e já domina a{" "}
              <strong>Transitividade dos Verbos</strong> (<code>VI, VTD, VTI, VTDI, VL</code> — Eixo 2), chegou a hora
              de abrir o bloco do <strong>Sujeito</strong> e aprender a classificar todos os tipos possíveis sem cair em
              nenhuma armadilha.
            </p>
            <p>
              Antes de ver as classificações, grave os <strong>dois princípios sagrados</strong> para localizar qualquer
              Sujeito:
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. O Teste Definitivo da Concordância (A Prova dos 9)",
                  badge: "MUDE PARA O PLURAL!",
                  accent: "indigo",
                  summary:
                    "Nunca confie apenas na posição da palavra na frase. Para ter 100% de certeza de que um termo é o Sujeito, passe esse termo do singular para o plural (ou do plural para o singular). Se o verbo for OBRIGADO a mudar junto, você encontrou o verdadeiro Sujeito da oração!",
                },
                {
                  term: "2. A Regra da Preposição Proibida no Núcleo do Sujeito",
                  badge: "NÚCLEO SEM PREPOSIÇÃO",
                  accent: "emerald",
                  summary: (
                    <>
                      Em língua portuguesa, <strong>o núcleo do Sujeito JAMAIS pode começar com preposição</strong> (
                      <code>de, do, da, em, no, na, para, por, com, a</code>). É exatamente por isso que escrevemos:{" "}
                      <em>“Chegou a hora <strong>de o</strong> prefeito assinar”</em> (e nunca <em>“do prefeito”</em>)
                      e <em>“Trouxeram o processo <strong>para eu</strong> conferir”</em> (e nunca{" "}
                      <em>“para mim conferir”</em>, pois <em>eu</em> é o sujeito do verbo <em>conferir</em>!).
                    </>
                  ),
                },
              ]}
            />

            <p>
              Observe no fluxograma abaixo as <strong>4 decisões em sequência linear</strong> que classificam qualquer
              sujeito em segundos:
            </p>

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
                    <p>
                      <em>“O comprovante de pagamento <strong>chegou</strong> por e-mail.”</em> → Quem tem núcleo sem
                      preposição? <strong>comprovante</strong> (<em>de pagamento</em> começa com preposição <em>de</em>
                      ). Passando para <em>comprovantes</em>, o verbo muda para <strong>chegaram</strong> → Sujeito
                      confirmado!
                    </p>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (Expressão partitiva 'A maioria de...')",
                  accent: "emerald",
                  content: (
                    <p>
                      <em>“A maioria <strong>dos servidores</strong> aprovou (ou aprovaram) o novo horário.”</em> → O
                      núcleo gramatical sem preposição é <strong>maioria</strong> (singular → <em>aprovou</em>, embora
                      nas expressões partitivas a gramática também aceite concordância atrativa no plural).
                    </p>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite ('Para eu' vs. 'Para mim')",
                  accent: "amber",
                  content: (
                    <>
                      <p>
                        • <em>“O diretor enviou a minuta <strong>para eu</strong> revisar.”</em> → Há o verbo{" "}
                        <em>revisar</em> logo depois! Quem vai revisar? <strong>Eu</strong> (Sujeito de <em>revisar</em>{" "}
                        → pronome reto <strong>eu</strong>).
                      </p>
                      <p>
                        • <em>“O diretor enviou a minuta <strong>para mim</strong>.”</em> → Há ponto final, sem verbo
                        para conjugar → entra o pronome oblíquo preposicionado <strong>mim</strong>.
                      </p>
                    </>
                  ),
                },
              ]}
            />
          </ProseSection>

          {/* 3.2 Sujeito Determinado */}
          <ProseSection
            number="3.2"
            title="Sujeito Determinado: Simples, Composto e Oculto (Elíptico / Desinencial)"
          >
            <p>
              Chamamos o sujeito de <strong>Determinado</strong> sempre que conseguimos identificar com exatidão{" "}
              <strong>quem</strong> é o ser sobre o qual o verbo declara algo. Ele se divide em{" "}
              <strong>3 subtipos lineares</strong>:
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Sujeito Determinado Simples (1 Único Núcleo)",
                  badge: "1 PALAVRA-NÚCLEO",
                  accent: "indigo",
                  summary: (
                    <>
                      Ocorre quando o sujeito está escrito na oração e possui <strong>apenas 1 núcleo</strong> (uma
                      única palavra substantiva principal comandando o verbo).{" "}
                      <strong>Atenção: “Sujeito Simples” NÃO significa singular!</strong> Em{" "}
                      <em>“Os trezentos candidatos aprovados tomaram posse”</em>, existem 300 pessoas, mas há apenas{" "}
                      <strong>1 núcleo substantivo</strong> (a palavra <em>candidatos</em>) →{" "}
                      <strong>Sujeito Simples</strong>!
                    </>
                  ),
                },
                {
                  term: "2. Sujeito Determinado Composto (2 ou Mais Núcleos)",
                  badge: "2+ PALAVRAS-NÚCLEO",
                  accent: "emerald",
                  summary:
                    "Ocorre quando o sujeito está escrito na oração e possui 2 ou mais núcleos substantivos distintos ligados ao mesmo verbo.",
                  example: "“O prefeito e o secretário assinaram o convênio.” (2 núcleos: prefeito + secretário).",
                },
                {
                  term: "3. Sujeito Determinado Oculto (Elíptico, Desinencial ou Implícito)",
                  badge: "IDENTIFICADO PELA TERMINAÇÃO OU TEXTO",
                  accent: "sky",
                  summary: (
                    <>
                      Ocorre quando o sujeito não está escrito materialmente naquela oração, mas sabemos{" "}
                      <strong>com 100% de certeza quem ele é</strong> por duas pistas:
                      <br />• <strong>Pela desinência/terminação do verbo (Sujeito Desinencial):</strong> em{" "}
                      <em>“Protocolamos os ofícios”</em>, a terminação <code>-mos</code> prova que o sujeito é{" "}
                      <strong>nós</strong>.
                      <br />• <strong>Pela oração anterior (Sujeito Elíptico):</strong> em{" "}
                      <em>“O auditor analisou as contas e emitiu o parecer”</em>, na 2ª oração o sujeito oculto é{" "}
                      <strong>ele (O auditor)</strong>.
                    </>
                  ),
                },
              ]}
            />

            <KeyTable
              title="Como Não Confundir Plural com Sujeito Composto"
              headers={["Frase Analisada", "Quantos Núcleos Escritos Tem?", "Classificação Oficial do Sujeito"]}
              rows={[
                ["“Todos os cinquenta oficiais participaram do curso.”", "1 núcleo escrito (oficiais)", "Sujeito Determinado Simples"],
                ["“Ninguém encontrou a chave do arquivo.”", "1 núcleo escrito (Ninguém)", "Sujeito Determinado Simples"],
                ["“Editais e portarias exigem revisão.”", "2 núcleos escritos (Editais + portarias)", "Sujeito Determinado Composto"],
                ["“Recebemos a notificação hoje cedo.”", "0 escritos, mas terminação -mos = nós", "Sujeito Determinado Oculto (Desinencial)"],
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Afirmar que 'Os trinta processos urgentes' tem Sujeito Composto só porque está no plural, ou dizer que 'Ninguém compareceu' tem Sujeito Indeterminado porque a palavra 'ninguém' tem sentido negativo."
              escape="Conte quantas palavras-núcleo substantivas estão escritas antes do verbo: 'processos' = 1 núcleo (Sujeito Simples); 'Ninguém' = 1 pronome escrito funcionando como núcleo (Sujeito Simples)!"
            />
          </ProseSection>

          {/* 3.3 Voz Ativa vs Voz Passiva Analitica */}
          <ProseSection
            number="3.3"
            title="Voz Ativa vs. Voz Passiva Analítica: Sujeito Paciente e Agente da Passiva"
          >
            <p>
              Até aqui, vimos exemplos em que o Sujeito <strong>pratica</strong> a ação do verbo (
              <strong>Sujeito Agente</strong>, na chamada <strong>Voz Ativa</strong>). Mas o que acontece quando o
              sujeito não faz a ação, e sim <strong>sofre/recebe</strong> a ação praticada por outro?
            </p>
            <p>
              Entramos na <strong>Voz Passiva</strong>, que é fundamental tanto por si mesma quanto para destravar a
              partícula <code>“SE”</code> no próximo tópico! Veja passo a passo como uma frase passa da{" "}
              <strong>Voz Ativa</strong> para a <strong>Voz Passiva Analítica</strong> (<code>SER + Particípio</code>):
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Na Voz Ativa → O Sujeito PRATICA a Ação (e o Alvo é o Objeto Direto)",
                  badge: "SUJEITO AGENTE",
                  accent: "indigo",
                  summary: (
                    <>
                      Frase: <em>“<strong>O engenheiro responsável</strong> fiscalizou <strong>a obra municipal</strong>.”</em>
                      <br />• Quem fiscalizou? <strong>O engenheiro responsável</strong> →{" "}
                      <strong>Sujeito Simples Agente</strong>.
                      <br />• Fiscalizou o quê (<code>VTD</code>)? <strong>a obra municipal</strong> →{" "}
                      <strong>Objeto Direto (OD)</strong>.
                    </>
                  ),
                },
                {
                  term: "2. Na Voz Passiva Analítica → O Antigo Objeto Direto Vira SUJEITO PACIENTE!",
                  badge: "SUJEITO PACIENTE + AGENTE DA PASSIVA",
                  accent: "amber",
                  summary: (
                    <>
                      Agora invertemos a câmera para focar na obra:
                      <br />
                      Frase:{" "}
                      <em>
                        “<strong>A obra municipal</strong> foi fiscalizada{" "}
                        <strong>pelo engenheiro responsável</strong>.”
                      </em>
                      <br />• <strong>Quem comanda o verbo “foi fiscalizada” agora?</strong>{" "}
                      <strong>A obra municipal</strong>! (Se fossem duas obras, viraria{" "}
                      <em>“As obras foram fiscalizadas”</em>). Portanto, <strong>A obra municipal</strong> é o{" "}
                      <strong>Sujeito Simples Paciente</strong>!
                      <br />• <strong>E qual é a função de “pelo engenheiro responsável”?</strong> Quem pratica a ação
                      na voz passiva, introduzido pela preposição <strong>por (pelo, pela, pelos)</strong> ou raramente{" "}
                      <strong>de</strong>, chama-se <strong>Agente da Passiva</strong>!
                    </>
                  ),
                  note: "Regra de Ouro: só é possível passar para a Voz Passiva quando o verbo tem Objeto Direto (VTD ou VTDI), porque é o Objeto Direto da ativa que se transforma no Sujeito Paciente da passiva!",
                },
              ]}
            />

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (Identificando Sujeito Paciente e Agente da Passiva)",
                  accent: "indigo",
                  content: (
                    <p>
                      <em>“O muro da escola <strong>foi pintado</strong> pelos moradores do bairro.”</em> →{" "}
                      <strong>Sujeito Simples Paciente:</strong> <em>O muro da escola</em>.{" "}
                      <strong>Agente da Passiva:</strong> <em>pelos moradores do bairro</em> (com preposição{" "}
                      <code>pelos = por + os</code>).
                    </p>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (Voz Passiva Analítica sem Agente Expresso)",
                  accent: "emerald",
                  content: (
                    <p>
                      <em>“Os três lotes da licitação <strong>serão homologados</strong> amanhã.”</em> → Quem sofrerá a
                      homologação e manda no plural <em>serão homologados</em>?{" "}
                      <strong>Os três lotes da licitação (Sujeito Simples Paciente)</strong>. O Agente da Passiva foi
                      omitido, mas o Sujeito Paciente está escrito claramente!
                    </p>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite (Agente da Passiva com a preposição 'de')",
                  accent: "amber",
                  content: (
                    <p>
                      <em>“O antigo diretor era cercado <strong>de assessores leais</strong>.”</em> (= era cercado{" "}
                      <em>por assessores leais</em>). Com verbos como <em>cercar, rodear, acompanhar</em>, o{" "}
                      <strong>Agente da Passiva</strong> pode vir com a preposição <strong>de</strong>.
                    </p>
                  ),
                },
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Na frase 'O contrato emergencial foi prorrogado pela diretoria de compras', perguntar qual é o Sujeito da oração e colocar na alternativa: 'pela diretoria de compras, pois é quem pratica a ação'."
              escape="Lembre-se da Regra da Preposição Proibida: 'pela = preposição POR + artigo A'. Sujeito NUNCA começa com preposição por/pelo/pela! Quem começa com por/pelo/pela após 'ser + particípio' é o Agente da Passiva, e o verdadeiro Sujeito (Paciente) é 'O contrato emergencial'!"
            />
          </ProseSection>

          {/* 3.4 Sujeito Indeterminado e Trio do SE */}
          <ProseSection
            number="3.4"
            title="Sujeito Indeterminado (As 3 Formas) e o Trio do 'SE' (PA vs. IIS vs. Pronome Reflexivo)"
          >
            <p>
              Agora que você já domina os tipos de verbo (<code>VTD</code> vs. <code>VTI/VI/VL</code> no Eixo 2) e
              acabou de ver como o Objeto Direto vira Sujeito Paciente na Voz Passiva (tópico 3.3), você tem tudo para
              acertar de olhos fechados o tema mais cobrado em todas as provas de nível médio:{" "}
              <strong>o Sujeito Indeterminado e as 3 funções da palavra “SE”</strong>!
            </p>

            <DefinitionBlocks
              title="Parte 1 · As 3 Formas Oficiais de Sujeito Indeterminado"
              items={[
                {
                  term: "1ª Forma · Verbo na 3ª Pessoa do Plural ('eles') SEM Sujeito Escrito Antes",
                  badge: "ALGUÉM FEZ, MAS NÃO DIZ QUEM",
                  accent: "purple",
                  summary:
                    "Alguém praticou a ação, mas a frase não citou nenhum grupo no plural anteriormente.",
                  example: "“Protocolaram uma denúncia anônima na ouvidoria hoje.”",
                },
                {
                  term: "2ª Forma · Verbo VTI, VI ou VL na 3ª Pessoa do Singular + 'SE' (IIS)",
                  badge: "VERBO TRAVADO NO SINGULAR!",
                  accent: "sky",
                  summary:
                    "Quando juntamos um verbo que NÃO tem Objeto Direto (VTI com preposição, VI ou VL) + a partícula 'SE', o 'SE' funciona como Índice de Indeterminação do Sujeito (IIS) e o verbo fica OBRIGATORIAMENTE no singular!",
                  example: "“Precisa-se de novos oficiais.” (VTI) / “Trabalha-se muito aqui.” (VI) / “Era-se feliz.” (VL)",
                },
                {
                  term: "3ª Forma · Verbo no Infinitivo Impessoal (-r) Sem Sujeito Próprio",
                  badge: "AÇÃO GERAL",
                  accent: "indigo",
                  summary:
                    "Quando um verbo no infinitivo indica uma recomendação geral sem dono específico.",
                  example: "“É fundamental conferir todas as assinaturas antes do envio.”",
                },
              ]}
            />

            <p>
              Agora veja na <strong>Parte 2</strong> como diferenciar em 5 segundos as{" "}
              <strong>3 funções da palavra “SE”</strong> na prova da ACCESS:
            </p>

            <DefinitionBlocks
              title="Parte 2 · O Duelo Campeão: Como Diferenciar o Trio do 'SE' (PA × IIS × Reflexivo)"
              items={[
                {
                  term: "Caso 1 · VTD (ou VTDI) + SE → Partícula Apassivadora (PA = Voz Passiva Sintética)",
                  badge: "TEM SUJEITO PACIENTE → VARIA NO PLURAL!",
                  accent: "emerald",
                  summary: (
                    <>
                      Com verbo <strong>VTD</strong> (que tem alvo direto <strong>sem preposição</strong>), o{" "}
                      <strong>SE</strong> transforma esse alvo em <strong>Sujeito Simples Paciente</strong>! Basta
                      fazer o teste da Voz Passiva Analítica:
                      <br />• <em>“<strong>Alugam-se</strong> salas comerciais”</em> ={" "}
                      <em>“Salas comerciais <strong>são alugadas</strong>”</em> ✅!
                      <br />• Portanto, <em>salas comerciais</em> é o <strong>Sujeito Paciente</strong>, e o verbo{" "}
                      <strong>É OBRIGADO a ir para o plural</strong>!
                    </>
                  ),
                },
                {
                  term: "Caso 2 · VTI (com preposição!), VI ou VL + SE → Índice de Indeterminação (IIS)",
                  badge: "SUJEITO INDETERMINADO → TRAVA NO SINGULAR!",
                  accent: "purple",
                  summary: (
                    <>
                      Com verbo <strong>VTI, VI ou VL</strong>, não existe Objeto Direto para virar sujeito (a
                      preposição tranca a porta!). Você jamais diria <em>“De estagiários são precisados”</em> ❌!
                      <br />• Portanto, em <em>“<strong>Precisa-se de</strong> estagiários”</em> ou{" "}
                      <em>“<strong>Trata-se de</strong> processos urgentes”</em>, o sujeito é{" "}
                      <strong>Indeterminado</strong>, o <code>SE</code> é <strong>IIS</strong>, e o verbo fica{" "}
                      <strong>TRAVADO NO SINGULAR</strong>!
                    </>
                  ),
                },
                {
                  term: "Caso 3 · Sujeito Claro Agindo Sobre Si Mesmo → Pronome Reflexivo",
                  badge: "ACEITA 'A SI MESMO'",
                  accent: "amber",
                  summary: (
                    <>
                      Ocorre quando existe um sujeito determinado claro que{" "}
                      <strong>pratica e recebe a ação em si mesmo</strong>.
                      <br />• <strong>Questão Real ACCESS (Pref. Domingos Martins/ES 2023 Q05):</strong>{" "}
                      <em>“um assento de vaso sanitário que <strong>se</strong> esterilizava chegando a 250 °C”</em> →
                      O próprio assento esterilizava <strong>a si mesmo</strong> = <strong>Pronome Reflexivo</strong>!
                    </>
                  ),
                },
              ]}
            />

            <KeyTable
              title="Tabela Definitiva de Prova · O Trio do 'SE'"
              headers={[
                "Papel da Palavra 'SE'",
                "Com Qual Verbo Acontece?",
                "Tipo de Sujeito",
                "Concordância do Verbo",
                "Teste Rápido de 5s",
              ]}
              rows={[
                [
                  "1. Partícula Apassivadora (PA)",
                  "VTD (ou VTDI) + SE (sem preposição no alvo!)",
                  "Sujeito Simples Paciente",
                  "Varia no plural com o Sujeito Paciente",
                  "Vira “Algo É/SÃO + particípio” (“Salas são alugadas”)",
                ],
                [
                  "2. Índice de Indeterminação (IIS)",
                  "VTI (com prep.), VI ou VL + SE",
                  "Sujeito Indeterminado",
                  "TRAVADO NO SINGULAR (3ª p. sing.)",
                  "NÃO aceita passiva (❌ “De técnicos são precisados”)",
                ],
                [
                  "3. Pronome Reflexivo",
                  "Sujeito claro age sobre si mesmo",
                  "Sujeito Determinado",
                  "Concorda com esse sujeito claro",
                  "Aceita trocar por “a si mesmo”",
                ],
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Colocar nas alternativas frases muito ouvidas na TV, mas erradas na gramática: 'Tratam-se de questões complexas', 'Necessitam-se de novos digitadores', 'Obedecem-se às normas municipais'."
              escape="Viu Verbo + SE seguido imediatamente de preposição (de, em, a, às, aos, com)? É VTI + SE = IIS! O verbo está proibido de ir ao plural: o certo é sempre 'Trata-se de questões', 'Necessita-se de digitadores', 'Obedece-se às normas'!"
            />
          </ProseSection>

          {/* 3.5 Oracao Sem Sujeito */}
          <ProseSection
            number="3.5"
            title="Oração Sem Sujeito (Sujeito Inexistente) e os 6 Casos de Verbos Impessoais"
          >
            <p>
              Chegamos ao último degrau do Eixo 3: a <strong>Oração Sem Sujeito</strong> (também chamada de{" "}
              <strong>Sujeito Inexistente</strong>).
            </p>
            <p>
              Qual é a diferença entre <strong>Sujeito Indeterminado</strong> (que acabamos de ver no 3.4) e{" "}
              <strong>Oração Sem Sujeito</strong>? No Indeterminado, existe uma pessoa que fez a ação (
              <em>“Quebraram a vidraça”</em>), apenas não sabemos quem foi. Na{" "}
              <strong>Oração Sem Sujeito</strong>, a ação ou fenômeno{" "}
              <strong>não tem autor nem paciente nenhum na estrutura da frase</strong> — o verbo é chamado de{" "}
              <strong>Verbo Impessoal</strong>, e <strong>100% da oração é formada apenas pelo Predicado</strong>!
            </p>
            <p>
              Como não existe Sujeito para puxar o verbo para o plural,{" "}
              <strong>todo Verbo Impessoal fica travado na 3ª pessoa do singular</strong> (com a única exceção do verbo{" "}
              <em>SER</em> em horas/datas/distâncias) e{" "}
              <strong>trava também o verbo auxiliar na locução verbal</strong>! Estude os 6 casos em sequência linear:
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Verbo HAVER no sentido de 'existir, acontecer, ocorrer' ou 'tempo decorrido'",
                  badge: "SEMPRE SINGULAR (E TRAVA O AUXILIAR!)",
                  accent: "rose",
                  summary: (
                    <>
                      Quem vem depois de <em>haver</em> (<em>“Há muitas vagas”</em>, <em>“Havia trinta processos”</em>,{" "}
                      <em>“Deve haver soluções”</em>) <strong>não é Sujeito</strong>, e sim o{" "}
                      <strong>Objeto Direto</strong> do verbo <em>haver</em>! Por isso fica travado no singular!
                    </>
                  ),
                  note: "Contraste Campeão: Os verbos EXISTIR, OCORRER e ACONTECER NÃO são impessoais! Eles têm Sujeito Simples normal e VÃO PARA O PLURAL: 'Havia muitos processos' / 'Deve haver processos' vs. 'Existiam muitos processos' / 'Devem existir processos'!",
                },
                {
                  term: "2. Verbo FAZER indicando 'tempo decorrido' ou 'clima/temperatura'",
                  badge: "SEMPRE SINGULAR (E TRAVA O AUXILIAR!)",
                  accent: "amber",
                  summary:
                    "Fica 100% preso no singular, inclusive com auxiliar: 'Faz cinco anos que trabalho aqui', 'Vai fazer três semanas do edital', 'Fez dias muito frios'. Jamais escreva 'Fazem cinco anos' ou 'Vão fazer três semanas'!",
                },
                {
                  term: "3. Verbos de Fenômenos da Natureza (Sentido Real vs. Sentido Figurado)",
                  badge: "REAL = SEM SUJEITO · FIGURADO = TEM SUJEITO",
                  accent: "sky",
                  summary:
                    "No sentido real climático ('Choveu forte em Birigui', 'Ventou ontem'), é Oração Sem Sujeito (singular). Mas no sentido figurado/metafórico, ganha Sujeito Simples e vai ao plural: 'Choveram críticas ao projeto' (Sujeito = críticas)!",
                },
                {
                  term: "4. Verbos ESTAR e FICAR indicando clima + Expressões BASTA DE / CHEGA DE",
                  badge: "SEMPRE SINGULAR",
                  accent: "purple",
                  summary:
                    "Exemplos: 'Está muito quente hoje', 'Ficou abafado na sala', 'Basta de atrasos no protocolo!', 'Chega de desculpas!'. Todos formam Oração Sem Sujeito.",
                },
                {
                  term: "5. Verbo SER indicando Horas, Datas ou Distâncias (A Única Exceção que Concorda!)",
                  badge: "SEM SUJEITO, MAS CONCORDA COM O NUMERAL!",
                  accent: "indigo",
                  summary:
                    "Quando indica horas, datas ou distâncias, o verbo SER também é Oração Sem Sujeito, mas concorda obrigatoriamente com o numeral: 'É uma hora', 'São duas horas', 'Daqui até lá são dez quilômetros', 'Hoje são vinte de novembro' (ou 'Hoje é dia vinte').",
                },
              ]}
            />

            <KeyTable
              title="Quadro Comparativo · Verbos Impessoais vs. Verbos Pessoais"
              headers={[
                "Verbo / Construção",
                "Classificação do Sujeito",
                "Regra de Concordância",
                "Certo vs. Errado na Prova",
              ]}
              rows={[
                [
                  "Haver (= existir / ocorrer / tempo)",
                  "Oração Sem Sujeito",
                  "Sempre Singular (trava auxiliar)",
                  "✅ “Deve haver falhas” | ❌ “Devem haver falhas”",
                ],
                [
                  "Existir / Ocorrer / Acontecer",
                  "Sujeito Determinado Simples",
                  "Concorda no plural com o sujeito",
                  "✅ “Devem existir falhas” | ❌ “Deve existir falhas”",
                ],
                [
                  "Fazer (tempo decorrido / clima)",
                  "Oração Sem Sujeito",
                  "Sempre Singular (trava auxiliar)",
                  "✅ “Vai fazer dez dias” | ❌ “Vão fazer dez dias”",
                ],
                [
                  "Ser (horas, datas, distâncias)",
                  "Oração Sem Sujeito",
                  "Concorda com o numeral",
                  "✅ “É uma hora” e “São quatorze horas”",
                ],
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Quando o verbo 'haver' NÃO significa 'existir', mas sim 'ter' (ajudando outro verbo no particípio, como em 'Os diretores haviam assinado o termo'), o candidato que decorou 'haver não tem plural' acha que a frase está errada!"
              escape="Olhe o que vem depois de haver: vem um substantivo ('Havia processos' = existiam processos → impessoal, singular!)? Ou vem um particípio verbal ('Os diretores haviam assinado' = tinham assinado → pessoal, concorda com o sujeito 'Os diretores' no plural!)?"
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
        "Leitura linear em 3 passos: os 3 tipos de Predicado (PV, PN e PVN + Fluxograma SVG), a diferença entre Predicativo do Sujeito e Predicativo do Objeto, e os 2 Testes Práticos de Prova.",
      estimatedMinutes: 25,
      render: () => (
        <div className="space-y-6">
          {/* 4.1 3 Tipos de Predicado + SVG 3 */}
          <ProseSection
            number="4.1"
            title="Os 3 Tipos de Predicado (PV, PN e PVN + Fluxograma em SVG)"
          >
            <p>
              Nos Eixos 1, 2 e 3, aprendemos que toda oração com sujeito se divide em <strong>Sujeito</strong> e{" "}
              <strong>Predicado</strong>, e vimos que o verbo mora obrigatoriamente dentro do Predicado. Agora vamos
              responder a uma pergunta muito simples:{" "}
              <strong>qual é a palavra mais importante (o núcleo) dentro do Predicado?</strong>
            </p>
            <p>
              Dependendo de o predicado transmitir apenas uma <strong>ação</strong>, apenas um <strong>estado</strong>,
              ou <strong>uma ação + um estado ao mesmo tempo</strong>, ele recebe um destes <strong>3 nomes</strong>:
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Predicado Verbal (PV) → Comunica APENAS AÇÃO (1 Núcleo = o Verbo)",
                  badge: "SÓ VERBO DE AÇÃO (VI, VTD, VTI, VTDI)",
                  accent: "sky",
                  summary:
                    "Ocorre quando o verbo da oração é um verbo significativo de ação ou acontecimento e NÃO existe nenhum predicativo (nenhuma qualidade momentânea atribuída ao sujeito ou ao objeto por meio do verbo). O único núcleo é o próprio verbo!",
                  example: "“Os auditores examinaram todos os contratos ontem.” (Núcleo = examinaram).",
                },
                {
                  term: "2. Predicado Nominal (PN) → Comunica APENAS ESTADO (1 Núcleo = o Nome/Predicativo)",
                  badge: "VERBO DE LIGAÇÃO (VL) + QUALIDADE DO SUJEITO",
                  accent: "emerald",
                  summary:
                    "Ocorre quando o verbo é um Verbo de Ligação (ser, estar, permanecer, ficar, parecer, continuar, andar) que apenas serve de ponte para ligar o Sujeito a um estado ou qualidade (Predicativo do Sujeito). O núcleo é o nome (a qualidade), e não o verbo!",
                  example: "“Os documentos fiscais permaneceram intactos.” (VL = permaneceram; Núcleo = intactos).",
                },
                {
                  term: "3. Predicado Verbo-Nominal (PVN) → Comunica AÇÃO + ESTADO JUNTOS (2 Núcleos!)",
                  badge: "VERBO DE AÇÃO + PREDICATIVO AO MESMO TEMPO",
                  accent: "amber",
                  summary: (
                    <>
                      Ocorre quando a frase junta <strong>as duas coisas ao mesmo tempo</strong>: traz um{" "}
                      <strong>verbo significativo de ação</strong> (<code>VI, VTD, VTI</code>){" "}
                      <strong>E TAMBÉM</strong> traz uma qualidade/estado momentâneo do Sujeito ou do Objeto (
                      <strong>Predicativo</strong>)! Possui <strong>2 núcleos</strong> (1 verbo + 1 nome).
                    </>
                  ),
                  note: "Teste de 5 Segundos para o PVN: todo Predicado Verbo-Nominal pode ser desdobrado em duas frases (1 de ação + 1 de estado): 'Os candidatos chegaram cansados' = 'Os candidatos chegaram (Ação)' + 'e estavam cansados (Estado)'!",
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

            <AnalogyBox title="Analogia da Câmera Fotográfica" tag="Vídeo × Foto × Os Dois Juntos">
              <p>
                • O <strong>Predicado Verbal (PV)</strong> é um <strong>vídeo</strong> gravando apenas movimento (
                <em>“A técnica consertou o computador”</em>).
                <br />• O <strong>Predicado Nominal (PN)</strong> é uma <strong>foto parada</strong> retratando apenas
                um estado (<em>“A técnica ficou satisfeita”</em>).
                <br />• O <strong>Predicado Verbo-Nominal (PVN)</strong> grava o{" "}
                <strong>vídeo do movimento e tira a foto do estado ao mesmo tempo</strong> (
                <em>“A técnica saiu satisfeita da sala”</em> = ela <em>saiu</em> + ela <em>estava satisfeita</em>!).
              </p>
            </AnalogyBox>

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Ver o verbo 'estar' ou 'permanecer' em 'Os documentos estão no arquivo' e marcar automaticamente 'Predicado Nominal'."
              escape="Confira se o que vem depois de estar/permanecer é uma qualidade/estado ou um LUGAR (ONDE): 'no arquivo' é lugar físico, logo o verbo é VI e o predicado é Predicado Verbal (PV)!"
            />
          </ProseSection>

          {/* 4.2 Predicativo do Sujeito vs Predicativo do Objeto */}
          <ProseSection
            number="4.2"
            title="Predicativo do Sujeito (PS) vs. Predicativo do Objeto (PO): Qualidades no Alvo Certo"
          >
            <p>
              Acabamos de ver que tanto o Predicado Nominal (<code>PN</code>) quanto o Predicado Verbo-Nominal (
              <code>PVN</code>) possuem um termo que expressa estado, qualidade ou condição, chamado{" "}
              <strong>Predicativo</strong>.
            </p>
            <p>
              Mas para quem essa qualidade está apontando? Na oração, existem dois alvos possíveis para o Predicativo:
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Predicativo do Sujeito (PS) → Qualifica o Sujeito da Oração",
                  badge: "APARECE EM PN OU EM PVN",
                  accent: "emerald",
                  summary: (
                    <>
                      É a qualidade, condição ou estado momentâneo que se refere ao <strong>Sujeito</strong> (concordando
                      com ele em gênero e número). Pode aparecer em dois lugares:
                      <br />• Com <strong>Verbo de Ligação (VL)</strong> formando <strong>Predicado Nominal</strong>:{" "}
                      <em>“O atendimento municipal <strong>é eficiente</strong>.”</em>
                      <br />• Com <strong>Verbo de Ação</strong> formando <strong>Predicado Verbo-Nominal</strong>:{" "}
                      <em>“Os novos servidores iniciaram o turno <strong>motivados</strong>.”</em>
                    </>
                  ),
                },
                {
                  term: "2. Predicativo do Objeto (PO) → Atribui Estado ou Julgamento ao Objeto",
                  badge: "APARECE SEMPRE EM PVN",
                  accent: "amber",
                  summary: (
                    <>
                      É a qualidade momentânea, estado resultante ou <strong>julgamento</strong> que o verbo da frase
                      atribui ao <strong>Objeto</strong> (quase sempre ao Objeto Direto). Muito comum com verbos de
                      julgamento, escolha ou transformação:{" "}
                      <strong>julgar, considerar, declarar, achar, nomear, eleger, encontrar, deixar, tornar</strong>.
                    </>
                  ),
                  example:
                    "“A comissão julgou improcedente o recurso da empresa.” (Quem era improcedente? O recurso = Objeto Direto → improcedente é PO!) | “O prefeito nomeou a servidora coordenadora.” (coordenadora = PO!).",
                },
              ]}
            />
          </ProseSection>

          {/* 4.3 Os 2 Testes Praticos de Prova */}
          <ProseSection
            number="4.3"
            title="Os 2 Testes Práticos de Prova: Teste do Pronome (o/a) e Teste do Feminino Plural"
          >
            <p>
              Na hora da prova, surgem duas dúvidas muito comuns: (1) como saber se um adjetivo ao lado do objeto é um{" "}
              <strong>Predicativo do Objeto (PO)</strong> ou apenas uma característica comum que já fazia parte do
              nome? E (2) como saber se uma palavra depois de um verbo de ação é um{" "}
              <strong>Predicativo do Sujeito (PS)</strong> ou um <strong>Advérbio de Modo</strong>?
            </p>
            <p>
              Você resolve 100% dessas questões em 5 segundos aplicando estes <strong>2 Testes Práticos</strong>:
            </p>

            <StepByStep
              title="Os 2 Testes de 5 Segundos para Isolar o Predicativo Sem Erros"
              steps={[
                {
                  title: "Teste 1 · Substitua o Objeto Direto pelo Pronome 'o / a / os / as'",
                  badge: "SEPARA PO DE CARACTERÍSTICA INTERNA",
                  content: (
                    <div className="space-y-1.5">
                      <p>
                        • Se a qualidade <strong>SOBRAR DO LADO DE FORA</strong> do pronome (
                        <em>“O servidor encontrou o relatório rasgado” → “O servidor encontrou-<strong>o rasgado</strong>”</em>
                        ), ela é <strong>Predicativo do Objeto (PO)</strong> (e o predicado é{" "}
                        <strong>Verbo-Nominal</strong>)!
                      </p>
                      <p>
                        • Se a qualidade <strong>SUMIR ENGOLIDA PARA DENTRO</strong> do pronome (
                        <em>“O servidor leu o relatório anual” → “O servidor leu-<strong>o</strong>”</em>), ela não é
                        predicativo: é apenas uma característica interna do nome (que veremos no Eixo 5 como Adjunto
                        Adnominal, mantendo o predicado como <strong>Predicado Verbal</strong>)!
                      </p>
                    </div>
                  ),
                },
                {
                  title: "Teste 2 · Passe o Sujeito para o Feminino Plural ('Elas / As servidoras...')",
                  badge: "SEPARA PS DE ADVÉRBIO DE MODO",
                  content: (
                    <div className="space-y-1.5">
                      <p>
                        • Se a palavra <strong>FLEXIONAR para o feminino plural</strong> (
                        <em>“As engenheiras saíram <strong>satisfeitas</strong>”</em>), é um adjetivo qualificando o
                        sujeito = <strong>Predicativo do Sujeito (PS)</strong> (em{" "}
                        <strong>Predicado Verbo-Nominal</strong>)!
                      </p>
                      <p>
                        • Se a palavra <strong>FICAR TRAVADA INVARIÁVEL no singular</strong> (
                        <em>“As engenheiras falaram <strong>claro / alto / rápido</strong>”</em>), palavra invariável
                        que modifica o verbo é <strong>Advérbio de Modo</strong> (em <strong>Predicado Verbal</strong>)!
                      </p>
                    </div>
                  ),
                },
              ]}
            />

            <KeyTable
              title="Aplicação Direta dos 2 Testes em Questões de Prova"
              headers={["Frase Comparada na Prova", "Como Fica Após o Teste Prático", "Classificação Sintática Exata"]}
              rows={[
                [
                  "“A junta considerou válidos os documentos.”",
                  "Teste 1 (os): “A junta os considerou válidos.” (sobrou fora!)",
                  "válidos = Predicativo do Objeto (PO) → PVN",
                ],
                [
                  "“A junta arquivou os documentos válidos.”",
                  "Teste 1 (os): “A junta arquivou-os.” (sumiu dentro de os!)",
                  "válidos = Característica interna (AA) → PV",
                ],
                [
                  "“Os engenheiros saíram satisfeitos.”",
                  "Teste 2 (Elas): “As engenheiras saíram satisfeitas.” (variou!)",
                  "satisfeitos = Predicativo do Sujeito (PS) → PVN",
                ],
                [
                  "“Os engenheiros falaram claro.”",
                  "Teste 2 (Elas): “As engenheiras falaram claro.” (invariável!)",
                  "claro = Advérbio de Modo → PV",
                ],
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Inverter a ordem e colocar o Predicativo do Objeto ANTES do Objeto Direto — como em 'O tribunal julgou inconstitucional a cobrança da taxa' — para o candidato achar que 'inconstitucional' faz parte do nome ou qualifica o sujeito."
              escape="Aplique o Teste do Pronome (a): 'O tribunal julgou-A INCONSTITUCIONAL.' A palavra 'inconstitucional' sobrou intacta do lado de fora do pronome 'a' → é Predicativo do Objeto (PO)!"
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
        "Leitura linear em 5 passos: Adjunto Adnominal (5 classes), o Duelo Campeão Complemento Nominal vs. Adjunto Adnominal (+ Fluxograma SVG), Adjunto Adverbial (10 valores + vírgula + quão), Aposto (4 tipos) e Vocativo.",
      estimatedMinutes: 30,
      render: () => (
        <div className="space-y-6">
          {/* 5.1 Adjunto Adnominal */}
          <ProseSection
            number="5.1"
            title="Adjunto Adnominal (AA): As 5 Classes Satélites que Moram Dentro do Substantivo"
          >
            <p>
              Chegamos ao quinto e último degrau da nossa escada! Nos Eixos 1 a 4, estudamos o esqueleto central da
              oração (Sujeito, Verbo, Objetos e Predicativos). Agora vamos olhar para as palavras menores que orbitam{" "}
              <strong>ao redor do substantivo</strong>, para as circunstâncias de <strong>tempo/lugar/modo</strong> e
              para os termos de <strong>explicação e chamamento</strong>.
            </p>
            <p>
              O primeiro deles é o <strong>Adjunto Adnominal (AA)</strong>. O próprio nome explica sua função:{" "}
              <em>Ad-nominal</em> significa <strong>“junto ao nome (substantivo)”</strong>. Toda palavra satélite que
              mora colada dentro do bloco de um substantivo para determiná-lo, quantificá-lo ou caracterizá-lo recebe o
              cargo sintático de <strong>Adjunto Adnominal (AA)</strong>!
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "As 5 Classes de Palavras que Exercem a Função de Adjunto Adnominal (AA)",
                  badge: "SEMPRE LIGADAS A UM SUBSTANTIVO",
                  accent: "indigo",
                  summary: (
                    <>
                      1. <strong>Artigos</strong> (<em>o, a, os, as, um, uma</em>): em{" "}
                      <em>“<strong>O</strong> edital saiu”</em>.<br />
                      2. <strong>Adjetivos</strong> (que caracterizam o substantivo por dentro): em{" "}
                      <em>“O edital <strong>municipal</strong> saiu”</em>.<br />
                      3. <strong>Pronomes Adjetivos</strong> (que acompanham um substantivo): em{" "}
                      <em>“<strong>Nosso</strong> edital”</em>, <em>“<strong>Este</strong> processo”</em>.<br />
                      4. <strong>Numerais Adjetivos</strong> (que quantificam o substantivo): em{" "}
                      <em>“<strong>Três</strong> processos”</em>.<br />
                      5. <strong>Locuções Adjetivas</strong> (<code>preposição + substantivo</code> indicando matéria,
                      posse, origem ou tipo): em <em>“armário <strong>de aço</strong>”</em>,{" "}
                      <em>“Prefeitura <strong>de Birigui</strong>”</em>,{" "}
                      <em>“projeto <strong>de iluminação</strong>”</em>.
                    </>
                  ),
                  note: "Conexão Linear com o Eixo 4: quando substituímos o bloco inteiro do substantivo por um pronome (o, a, os, as, ele, eles), todos os Adjuntos Adnominais desaparecem engolidos para dentro do pronome!",
                },
              ]}
            />

            <ProgressiveExamples
              items={[
                {
                  label: "Exemplo 1 · Cotidiano (4 Adjuntos Adnominais no mesmo substantivo)",
                  accent: "indigo",
                  content: (
                    <p>
                      <em>“<strong>Aqueles dois novos</strong> relatórios <strong>de despesas</strong> chegaram.”</em>{" "}
                      → O núcleo do sujeito é <em>relatórios</em>. Os 4 satélites pendurados nele (<em>Aqueles</em>{" "}
                      [pronome], <em>dois</em> [numeral], <em>novos</em> [adjetivo] e <em>de despesas</em> [locução
                      adjetiva]) são todos <strong>Adjuntos Adnominais (AA)</strong>!
                    </p>
                  ),
                },
                {
                  label: "Exemplo 2 · Rotina de Prefeitura (Confirmando pelo Teste do Pronome)",
                  accent: "emerald",
                  content: (
                    <p>
                      <em>“O técnico arquivou <strong>os três formulários antigos da recepção</strong>.”</em> → Trocando
                      por pronome: <em>“O técnico arquivou-<strong>os</strong>.”</em> Os satélites <em>os</em>,{" "}
                      <em>três</em>, <em>antigos</em> e <em>da recepção</em> sumiram dentro de <em>os</em> → todos são{" "}
                      <strong>Adjuntos Adnominais (AA)</strong>!
                    </p>
                  ),
                },
                {
                  label: "Exemplo 3 · Caso Limite (Adjetivo como AA vs. Adjetivo como PO)",
                  accent: "amber",
                  content: (
                    <>
                      <p>
                        • <em>“A diretoria aprovou <strong>a nova proposta urgente</strong>.”</em> →{" "}
                        <em>“A diretoria aprovou-<strong>a</strong>.”</em> (<em>urgente</em> sumiu dentro de <em>a</em>{" "}
                        = <strong>Adjunto Adnominal</strong>).
                      </p>
                      <p>
                        • <em>“A diretoria julgou <strong>urgente</strong> a nova proposta.”</em> →{" "}
                        <em>“A diretoria julgou-<strong>a urgente</strong>.”</em> (<em>urgente</em> ficou fora de{" "}
                        <em>a</em> = <strong>Predicativo do Objeto</strong>).
                      </p>
                    </>
                  ),
                },
              ]}
            />
          </ProseSection>

          {/* 5.2 Complemento Nominal x Adjunto Adnominal + SVG 4 */}
          <ProseSection
            number="5.2"
            title="Complemento Nominal (CN) e o Duelo Campeão CN vs. AA (+ Fluxograma em 3 Passos em SVG)"
          >
            <p>
              Prepare o marca-texto: a diferença entre <strong>Complemento Nominal (CN)</strong> e{" "}
              <strong>Adjunto Adnominal (AA)</strong> é, disparada, a questão de sintaxe que o Instituto ACCESS mais
              repete em provas de nível médio (caiu em <strong>CRBio-08 2023 Q10</strong>,{" "}
              <strong>Pref. Passos/MG 2023 Q12</strong> e <strong>Pref. Domingos Martins/ES 2023 Q10</strong>!).
            </p>
            <p>
              Por que os candidatos confundem os dois? Porque ambos podem aparecer como{" "}
              <code>preposição + substantivo</code> logo depois de um nome (ex.: <em>“a reforma da escola”</em> vs.{" "}
              <em>“o portão da escola”</em>).
            </p>
            <p>
              Enquanto o <em>Objeto Indireto</em> completa um <em>verbo</em>, existem <strong>NOMES</strong> (
              <strong>Substantivos Abstratos, Adjetivos e Advérbios</strong>) que também têm sentido incompleto e exigem
              um complemento com preposição obrigatória — chamado <strong>Complemento Nominal (CN)</strong>. Para nunca
              errar, aplique os <strong>3 Passos Lineares</strong> abaixo:
            </p>

            <StepByStep
              title="O Método Definitivo em 3 Passos Lineares (Complemento Nominal × Adjunto Adnominal)"
              steps={[
                {
                  title: "PASSO 1 · A palavra anterior que está sendo completada é um ADJETIVO ou um ADVÉRBIO?",
                  badge: "SE SIM → 100% COMPLEMENTO NOMINAL",
                  content: (
                    <p>
                      <strong>Adjunto Adnominal SÓ acompanha SUBSTANTIVO!</strong> Adjetivo e Advérbio jamais têm
                      Adjunto Adnominal! Portanto, em <em>“nocivo <strong>para crianças</strong>”</em> (<em>nocivo</em>{" "}
                      = adjetivo), <em>“útil <strong>ao setor</strong>”</em> (<em>útil</em> = adjetivo) ou{" "}
                      <em>“longe <strong>da sede</strong>”</em> (<em>longe</em> = advérbio), o termo é{" "}
                      <strong>100% Complemento Nominal (CN)</strong>!
                    </p>
                  ),
                },
                {
                  title: "PASSO 2 · É um SUBSTANTIVO! Ele é CONCRETO ou a preposição é DIFERENTE de 'DE'?",
                  badge: "CONCRETO = AA · PREP ≠ DE = CN",
                  content: (
                    <div className="space-y-1.5">
                      <p>
                        • <strong>Se o substantivo for CONCRETO</strong> (<em>mesa, prédio, carro, pasta</em>) →{" "}
                        <strong>Pare aqui! É 100% Adjunto Adnominal (AA)!</strong> Ex.: <em>“mesa de madeira”</em>,{" "}
                        <em>“prédio da Prefeitura”</em>.
                      </p>
                      <p>
                        • <strong>Se o substantivo for ABSTRATO e a preposição NÃO for “de”</strong> (for{" "}
                        <code>a, com, em, por, para, contra</code>) →{" "}
                        <strong>Pare aqui! É 100% Complemento Nominal (CN)!</strong> Ex. Real ACCESS (Domingos
                        Martins/ES 2023 Q10): <em>“A preocupação <strong>com uma votação mais prática</strong>”</em> (
                        <em>preocupação</em> + prep. <em>com</em> → <strong>CN</strong>!).
                      </p>
                    </div>
                  ),
                },
                {
                  title: "PASSO 3 · É SUBSTANTIVO ABSTRATO + Preposição 'DE'! Ele PRATICA ou SOFRE a ação?",
                  badge: "AGENTE = AA · PACIENTE = CN",
                  content: (
                    <div className="space-y-1.5">
                      <p>
                        • Se o termo <strong>PRATICA a ação (Sentido AGENTE)</strong> → é{" "}
                        <strong>ADJUNTO ADNOMINAL (AA)</strong>! Ex.: <em>“A reclamação <strong>dos moradores</strong>”</em>{" "}
                        (os moradores reclamaram = Agente → <strong>AA</strong>).
                      </p>
                      <p>
                        • Se o termo <strong>SOFRE / RECEBE a ação (Sentido PACIENTE)</strong> → é{" "}
                        <strong>COMPLEMENTO NOMINAL (CN)</strong>! Ex. Real ACCESS (CRBio-08 2023 Q10):{" "}
                        <em>
                          “A poluição <strong>da água</strong> ocorre devido à eliminação <strong>do esgoto</strong>”
                        </em>{" "}
                        (a água é poluída e o esgoto é eliminado = ambos sofrem a ação → ambos são{" "}
                        <strong>Complementos Nominais</strong>!).
                      </p>
                    </div>
                  ),
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

            <KeyTable
              title="Treino Rápido dos 3 Passos do Fluxograma"
              headers={["Expressão Analisada na Prova", "Passo Aplicado", "Classificação Oficial"]}
              rows={[
                ["“nocivo para crianças” / “útil ao setor”", "Passo 1: Completa Adjetivo (nocivo, útil)", "Complemento Nominal (CN)"],
                ["“armário de ferro” / “caderno do diretor”", "Passo 2: Completa Substantivo Concreto", "Adjunto Adnominal (AA)"],
                ["“preocupação com a votação” / “respeito às leis”", "Passo 2: Abstrato com preposição ≠ de (com, a)", "Complemento Nominal (CN)"],
                ["“discurso do prefeito” / “reclamação do munícipe”", "Passo 3: Abstrato + de → Prefeito/munícipe agiram (Agente)", "Adjunto Adnominal (AA)"],
                ["“aprovação do projeto” / “uso do computador”", "Passo 3: Abstrato + de → Projeto foi aprovado / computador é usado (Paciente)", "Complemento Nominal (CN)"],
              ]}
            />
          </ProseSection>

          {/* 5.3 Adjunto Adverbial */}
          <ProseSection
            number="5.3"
            title="Adjunto Adverbial: Os 10 Valores Semânticos, Intensidade com 'quão' e Vírgula no Deslocamento"
          >
            <p>
              Enquanto o <em>Adjunto Adnominal</em> vive grudado em um <strong>Substantivo</strong>, o{" "}
              <strong>Adjunto Adverbial</strong> vive orbitando um <strong>Verbo</strong>, um <strong>Adjetivo</strong>{" "}
              ou outro <strong>Advérbio</strong> para indicar uma <strong>circunstância</strong> (quando, onde, como,
              por que ou com qual intensidade algo ocorreu).
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Adjunto Adverbial de Intensidade Modificando Adjetivo (O Caso 'quão' · Passos/MG 2023 Q12)",
                  badge: "MODIFICA VERBO, ADJETIVO OU ADVÉRBIO",
                  accent: "indigo",
                  summary: (
                    <>
                      O Adjunto Adverbial também modifica <strong>Adjetivos</strong>! Na prova da Prefeitura de
                      Passos/MG (2023, Q12), a ACCESS cobrou:{" "}
                      <em>
                        “Mas <strong>quão</strong> nocivo é realmente o uso do computador para crianças?”
                      </em>
                      . A palavra <strong>quão</strong> significa <em>“o quanto / tão / muito”</em> e aponta diretamente
                      para o adjetivo <strong>nocivo</strong>, medindo seu grau →{" "}
                      <strong>Adjunto Adverbial de Intensidade</strong>!
                    </>
                  ),
                },
                {
                  term: "2. A Regra da Vírgula no Adjunto Adverbial Deslocado",
                  badge: "3+ PALAVRAS = VÍRGULA OBRIGATÓRIA",
                  accent: "sky",
                  summary: (
                    <>
                      • Na <strong>Ordem Direta</strong> (no final da frase), não usa vírgula:{" "}
                      <em>“Os servidores assinaram a ata na manhã de segunda-feira.”</em>
                      <br />• Deslocado para o <strong>início ou meio</strong> da oração: se for{" "}
                      <strong>Longo (3 ou mais palavras)</strong>, a vírgula é <strong>OBRIGATÓRIA</strong> (
                      <em>“Na manhã de segunda-feira, os servidores assinaram a ata.”</em>); se for{" "}
                      <strong>Curto (1 ou 2 palavras)</strong>, a vírgula é <strong>FACULTATIVA</strong> (
                      <em>“Ontem(,) os servidores assinaram a ata.”</em>).
                    </>
                  ),
                },
              ]}
            />

            <KeyTable
              title="Os 10 Valores Semânticos do Adjunto Adverbial Cobrados pela ACCESS"
              headers={["Valor Semântico", "Pergunta que Responde", "Exemplo Prático de Prova"]}
              rows={[
                ["1. Tempo", "Quando?", "“Na última sexta-feira, o edital foi encerrado.”"],
                ["2. Lugar", "Onde / Aonde?", "“Próximo à Grande Pirâmide, o Egito inaugura o museu.”"],
                ["3. Modo", "Como?", "“A comissão analisou os recursos com extrema cautela.”"],
                ["4. Intensidade", "Quanto / Em que grau?", "“Mas quão nocivo é o uso...” / “O sistema é muito rápido.”"],
                ["5. Causa", "Por qual motivo / razão?", "“O atendimento atrasou devido à queda de energia.”"],
                ["6. Finalidade", "Para quê / Com que fim?", "“Os candidatos estudaram para a prova municipal.”"],
                ["7. Meio", "Por qual via / canal?", "“A intimação foi enviada pelo correio eletrônico.”"],
                ["8. Instrumento", "Com qual ferramenta / objeto?", "“O fiscal rubricou as folhas com a caneta azul.”"],
                ["9. Companhia", "Junto com quem?", "“O coordenador viajou com os novos assessores.”"],
                ["10. Negação / Afirmação / Dúvida", "Sim / Não / Talvez", "“Não houve atraso.” / “Certamente sairá.” / “Talvez chova.”"],
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos (Passos/MG 2023 Q12)"
              trap="Ver o ponto de interrogação em 'Mas quão nocivo é realmente o uso do computador?' e marcar que 'quão' é adjunto adverbial de DÚVIDA ou Adjunto Adnominal."
              escape="Veja para qual palavra a setinha aponta: 'quão' modifica o adjetivo 'nocivo' medindo seu grau (= tão/muito nocivo) → Adjunto Adverbial de INTENSIDADE!"
            />
          </ProseSection>

          {/* 5.4 O Aposto e Seus 4 Tipos */}
          <ProseSection
            number="5.4"
            title="O Aposto e Seus 4 Tipos (+ O Teste do Sinal de Igual '=' contra o Adjunto Adnominal)"
          >
            <p>
              O <strong>Aposto</strong> é um termo de base <strong>substantiva</strong> que aparece ao lado de outro
              substantivo (ou pronome) para <strong>explicá-lo, enumerá-lo, resumi-lo ou especificá-lo</strong>.
            </p>
            <p>
              A grande marca do Aposto é a <strong>identidade / equivalência</strong>: o Aposto e o termo a que ele se
              refere representam <strong>a mesma coisa ou pessoa na frase</strong>! Conheça os 4 tipos em ordem linear:
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Aposto Explicativo (SEMPRE entre vírgulas, travessões ou parênteses)",
                  badge: "EXPLICA O TERMO ANTERIOR",
                  accent: "indigo",
                  summary:
                    "Serve para explicar quem é ou dar uma informação extra sobre o substantivo anterior.",
                  example: "“Birigui, capital nacional do calçado infantil, realizou novo concurso.”",
                },
                {
                  term: "2. Aposto Enumerativo (Lista detalhada após dois-pontos ou travessão)",
                  badge: "DESDOBRA UMA LISTA",
                  accent: "emerald",
                  summary:
                    "Serve para listar os elementos que compõem um termo anunciado antes.",
                  example: "“O candidato deve levar três itens: documento com foto, caneta preta e comprovante.”",
                },
                {
                  term: "3. Aposto Resumitivo ou Recapitulativo (Resume uma lista em um pronome)",
                  badge: "TUDO / NADA / TODOS",
                  accent: "sky",
                  summary:
                    "Depois de listar vários substantivos, um pronome indefinido (tudo, nada, todos, ninguém) resume a lista inteira antes do verbo.",
                  example: "“Ofícios, portarias, decretos, tudo foi digitalizado pela equipe.”",
                },
                {
                  term: "4. Aposto Especificativo (SEM VÍRGULA — Individualiza com um Nome Próprio)",
                  badge: "TESTE DO SINAL DE IGUAL (=)",
                  accent: "amber",
                  summary: (
                    <>
                      <strong>Atenção máxima:</strong> diferente do Explicativo, o{" "}
                      <strong>Aposto Especificativo NUNCA tem vírgula</strong>! Ele junta um{" "}
                      <strong>nome próprio</strong> a um substantivo comum genérico (
                      <em>cidade, município, estado, rua, avenida, rio, doutor</em>) para dizer qual é o nome próprio
                      dele — com ou sem a preposição <em>de</em>.
                    </>
                  ),
                  note: "Como diferenciar Aposto Especificativo ('O município de Birigui') de Adjunto Adnominal ('A Prefeitura de Birigui')? Use o Teste do Sinal de Igual (=): Município = Birigui? SIM (Birigui é o próprio município → Aposto Especificativo!). Decreto = Birigui? NÃO (indica apenas origem/posse → Adjunto Adnominal!).",
                },
              ]}
            />
          </ProseSection>

          {/* 5.5 O Vocativo */}
          <ProseSection
            number="5.5"
            title="O Vocativo: O Chamamento Independente e a Vírgula Obrigatória nas 3 Posições"
          >
            <p>
              Para encerrar os termos da oração, temos o <strong>Vocativo</strong> (do latim <em>vocare</em> = chamar
              em voz alta).
            </p>
            <p>
              O <strong>Vocativo</strong> é o único termo que{" "}
              <strong>NÃO pertence nem ao Sujeito nem ao Predicado</strong>! Ele é um termo 100% independente que serve
              exclusivamente para <strong>chamar, invocar ou falar diretamente com o ouvinte/leitor</strong> dentro da
              frase.
            </p>

            <DefinitionBlocks
              items={[
                {
                  term: "1. Regra da Pontuação: SEMPRE Isolado por Vírgula nas 3 Posições",
                  badge: "VÍRGULA OBRIGATÓRIA",
                  accent: "amber",
                  summary: (
                    <>
                      Não importa onde o Vocativo esteja na frase, ele vem obrigatoriamente separado por vírgula:
                      <br />• <strong>No início (1 vírgula depois):</strong>{" "}
                      <em>“<strong>Senhores vereadores,</strong> apresentamos o balanço anual.”</em>
                      <br />• <strong>No meio (entre 2 vírgulas):</strong>{" "}
                      <em>“Apresentamos, <strong>senhores vereadores,</strong> o balanço anual.”</em>
                      <br />• <strong>No fim (1 vírgula antes):</strong>{" "}
                      <em>“Apresentamos o balanço anual<strong>, senhores vereadores</strong>.”</em>
                    </>
                  ),
                },
                {
                  term: "2. Como Nunca Confundir Vocativo com Sujeito ou com Aposto Explicativo",
                  badge: "SUJEITO NUNCA TEM 1 VÍRGULA ANTES DO VERBO!",
                  accent: "rose",
                  summary: (
                    <>
                      • <strong>Vocativo vs. Sujeito:</strong> É proibido separar o Sujeito do Verbo com uma única
                      vírgula! Portanto, se houver um nome no começo seguido de <strong>uma única vírgula</strong> antes
                      do verbo (<em>“<strong>Carlos,</strong> protocole este guia!”</em>), <em>Carlos</em>{" "}
                      <strong>JAMAIS</strong> é o Sujeito — é <strong>Vocativo</strong>!
                      <br />• <strong>Vocativo vs. Aposto Explicativo:</strong> O Aposto Explicativo explica um nome que
                      veio <em>antes</em> dele falando <em>sobre</em> uma 3ª pessoa (
                      <em>“Carlos, <strong>o novo estagiário</strong>, protocolou o guia”</em>). O Vocativo fala{" "}
                      <em>diretamente com</em> quem está ouvindo!
                    </>
                  ),
                },
              ]}
            />

            <KeyTable
              title="Quadro Comparativo Final · Vocativo × Sujeito × Aposto"
              headers={[
                "Frase Comparada na Prova",
                "Como Identificar pela Pontuação e Sentido",
                "Classificação Sintática Exata",
              ]}
              rows={[
                [
                  "“Cidadãos, confiram o prazo do edital!”",
                  "Chamamento direto ao ouvinte + 1 vírgula separando do verbo",
                  "Cidadãos = Vocativo",
                ],
                [
                  "“Os cidadãos conferiram o prazo do edital.”",
                  "Sem vírgula entre o nome e o verbo; comanda a 3ª p. do plural",
                  "Os cidadãos = Sujeito Simples",
                ],
                [
                  "“Dr. Marcos, o novo procurador, assinou a ata.”",
                  "Entre duas vírgulas explicando quem é o sujeito Dr. Marcos",
                  "o novo procurador = Aposto Explicativo",
                ],
                [
                  "“O município de Birigui abriu vagas.”",
                  "Sem vírgula + Teste do Igual (município = Birigui)",
                  "de Birigui = Aposto Especificativo",
                ],
              ]}
            />

            <TrapAlert
              title="Pegadinha ACCESS + Teste de 5 Segundos"
              trap="Iniciar uma fala com 'Prezados servidores, a Secretaria informa que...' ou 'Maria, trouxe os relatórios' e afirmar que 'Prezados servidores' ou 'Maria' funciona como Sujeito ou Aposto."
              escape="Olhe se o termo inicial serve para chamar o interlocutor e se está isolado por uma única vírgula. Se a frase está falando COM aquela pessoa, é 100% Vocativo!"
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
