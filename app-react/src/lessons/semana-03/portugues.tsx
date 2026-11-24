import type { RichLessonModule } from "@/types";
import {
  AnalogyBox,
  CompareGrid,
  ConceptCard,
  DefinitionBlocks,
  FeynmanCard,
  FlipCardsGrid,
  KeyTable,
  ProseSection,
  TrapAlert,
} from "@/components/edu";

export const portuguesSemana03: RichLessonModule = {
  id: "w3_port_doc0",
  blockId: "w3_port",
  docIndex: 0,
  title: "Semana 03: Língua Portuguesa — Morfologia II (Verbos, Advérbios, Preposição vs. Artigo, Conjunções) e Semântica",
  shortTitle: "Aula Interativa · 6 Eixos + Checkpoints + 10 Questões",
  subtitle:
    "Didática passo a passo, compreensão lógica e histórica, mecânica das regras e exceções, exemplos da rotina administrativa e 10 questões reais comentadas.",
  introRender: () => (
    <ConceptCard
      title="Por que esta semana é o divisor de águas em Português?"
      badge="Foco: Oficial Administrativo · Nível Médio"
      accent="indigo"
      icon="sparkle"
    >
      <p>
        Na Semana 02, aprendemos que os substantivos dão nome às coisas e os adjetivos as qualificam — mas com eles
        o mundo ainda seria uma fotografia congelada. Agora entram em cena as engrenagens que dão movimento e lógica
        ao texto: <strong>Verbos, Advérbios, Preposições, Conjunções e Semântica</strong>.
      </p>
      <p>
        Todo o conteúdo completo da aula foi preservado integralmente em <strong>6 Eixos guiados</strong>, com{" "}
        <strong>3 questões diretas de checkpoint ao final de cada eixo</strong> e a{" "}
        <strong>Bateria Final de 10 Questões Reais Comentadas</strong>.
      </p>
    </ConceptCard>
  ),
  axes: [
    // =========================================================================
    // EIXO 1: O VERBO — MODOS E TEMPOS
    // =========================================================================
    {
      id: "eixo-1",
      index: 1,
      title: "O Verbo — A Palavra-Motor e a Linha do Tempo da Ação",
      subtitle: "O relógio embutido, os 3 modos verbais, a linha do tempo dos pretéritos e os futuros em contraste.",
      estimatedMinutes: 14,
      render: () => (
        <div className="space-y-7">
          <ProseSection number="1" title="O que é o Verbo? A Palavra com Relógio Embutido">
            <p>
              Na Semana 02, aprendemos que os <strong>substantivos</strong> dão nome às coisas (<em>o processo, a portaria, o servidor</em>) e os <strong>adjetivos</strong> qualificam essas coisas (<em>o processo volumoso, a portaria revogada</em>). Porém, com apenas substantivos e adjetivos, o mundo seria uma fotografia congelada. Nada aconteceria.
            </p>
            <p>
              Para que haja vida, movimento e narrativa, entra em cena a classe mais rica e importante de qualquer
              língua: o <strong>VERBO</strong> — a palavra que situa um fato no <strong>tempo</strong>, exprimindo{" "}
              <strong>ação</strong> (<em>protocolar, assinar</em>), <strong>estado</strong> (<em>estar, permanecer</em>) ou{" "}
              <strong>fenômeno natural</strong> (<em>chover, anoitecer</em>).
            </p>
          </ProseSection>

          <DefinitionBlocks
            title="Os 3 Papéis do Verbo — Um Ponto por Vez"
            items={[
              {
                term: "1. Verbo de Ação",
                badge: "Atividade concreta",
                accent: "indigo",
                summary: (
                  <>
                    O sujeito pratica (ou sofre) uma atividade dinâmica que transforma algo no mundo real (<em>protocolar, arquivar, assinar</em>).
                  </>
                ),
                examples: [
                  {
                    label: "Exemplo na Repartição",
                    sentence: (
                      <>
                        “O oficial <strong>arquivou</strong> a pasta.”
                      </>
                    ),
                    explanation: "O sujeito (O oficial) executa uma atividade concreta sobre a pasta no mundo real.",
                  },
                ],
              },
              {
                term: "2. Verbo de Estado",
                badge: "Ponte de qualidade",
                accent: "emerald",
                summary: (
                  <>
                    Não indica ação alguma: serve apenas como ponte para ligar o sujeito a uma característica passageira ou duradoura (<em>ser, estar, parecer, permanecer</em>).
                  </>
                ),
                examples: [
                  {
                    label: "Exemplo na Repartição",
                    sentence: (
                      <>
                        “O servidor <strong>parece</strong> exausto.”
                      </>
                    ),
                    explanation: "O verbo não descreve movimento: apenas conecta o sujeito ao seu estado aparente (exausto).",
                  },
                ],
              },
              {
                term: "3. Verbo de Fenômeno Natural",
                badge: "Sem sujeito agente",
                accent: "amber",
                summary: (
                  <>
                    Exprime acontecimentos próprios da natureza (<em>chover, ventar, anoitecer</em>), formando orações em que o próprio evento é o fato.
                  </>
                ),
                examples: [
                  {
                    label: "Exemplo",
                    sentence: (
                      <>
                        “<strong>Choveu</strong> intensamente em Birigui.”
                      </>
                    ),
                    explanation: "Oração sem sujeito: não há pessoa executando a chuva — o fenômeno acontece por si.",
                  },
                ],
              },
            ]}
          />

          <ProseSection number="2" title="A Lógica dos Três Modos Verbais: A Atitude do Falante">
            <p>
              Por que o verbo muda de “modo”? O modo verbal indica <strong>qual é a postura psicológica de quem fala em relação ao fato</strong>: é uma certeza incontestável? É uma mera suposição? Ou é uma ordem direta?
            </p>
          </ProseSection>

          <DefinitionBlocks
            title="Cada Modo Verbal com Seu Exemplo Imediato"
            items={[
              {
                term: "1. Modo Indicativo",
                badge: "Certeza",
                accent: "indigo",
                summary: "Transmite postura de certeza objetiva: fato real, consumado no passado, em curso no presente ou garantido no futuro.",
                examples: [
                  {
                    label: "Exemplo na Repartição",
                    sentence: (
                      <>
                        “O prefeito <strong>sancionou</strong> a lei municipal.”
                      </>
                    ),
                    explanation: "A sanção é apresentada como fato concreto e incontestável.",
                  },
                ],
              },
              {
                term: "2. Modo Subjuntivo",
                badge: "Hipótese / Dúvida / Desejo",
                accent: "amber",
                summary: "Expressa dúvida, possibilidade incerta, desejo ou condição de algo que ainda não se concretizou como certeza.",
                examples: [
                  {
                    label: "Exemplo na Repartição",
                    sentence: (
                      <>
                        “Caso o prefeito <strong>sancione</strong> a lei, haverá posse.”
                      </>
                    ),
                    explanation: "A conjunção condicional 'Caso' puxa o verbo 'sancione' para o terreno da hipótese.",
                  },
                ],
              },
              {
                term: "3. Modo Imperativo",
                badge: "Ordem / Pedido / Instrução",
                accent: "rose",
                summary: "Serve para dar ordem, instrução direta, convite ou orientação ao interlocutor (não possui a 1ª pessoa do singular 'eu').",
                examples: [
                  {
                    label: "Exemplo na Repartição",
                    sentence: (
                      <>
                        “<strong>Protocole</strong> este processo imediatamente!”
                      </>
                    ),
                    explanation: "Verbo em comando direto voltado para quem lê ou ouve a ordem.",
                  },
                ],
              },
            ]}
          />

          <KeyTable
            title="Quadro-Resumo: Os 3 Modos Verbais e Sua Mecânica Cognitiva"
            headers={["Modo", "Postura Psicológica", "Exemplo na Repartição"]}
            rows={[
              [
                <strong className="text-indigo-600 dark:text-indigo-400">Indicativo</strong>,
                "Certeza: fato real, consumado, presente ou certo de acontecer.",
                <em>“O prefeito <strong>sancionou</strong> a lei municipal.”</em>,
              ],
              [
                <strong className="text-amber-600 dark:text-amber-400">Subjuntivo</strong>,
                "Dúvida / Hipótese / Desejo: fato incerto ou dependente de condição.",
                <em>“Caso o prefeito <strong>sancione</strong> a lei, haverá posse.”</em>,
              ],
              [
                <strong className="text-rose-600 dark:text-rose-400">Imperativo</strong>,
                "Ordem / Solicitação / Instrução direta (não possui 1ª pessoa 'eu').",
                <em>“<strong>Protocole</strong> este processo imediatamente!”</em>,
              ],
            ]}
          />

          <ProseSection number="3" title="A Linha do Tempo dos Pretéritos no Indicativo: A Foto vs. O Filme">
            <p>
              Muitos alunos acham que “passado é passado”. Mas o português é cirúrgico na distinção de{" "}
              <strong>como</strong> a ação ocorreu no passado. O Instituto ACCESS e a VUNESP exploram intensamente a
              semântica dos três pretéritos do Indicativo:
            </p>
          </ProseSection>

          <DefinitionBlocks
            title="Os 3 Pretéritos do Indicativo — Um por Vez"
            items={[
              {
                term: "1. Pretérito Perfeito (A FOTO)",
                badge: "Ação pontual acabada",
                accent: "indigo",
                summary: "Indica uma ação pontual, perfeitamente concluída no passado, com começo e fim bem definidos.",
                examples: [
                  {
                    label: "Exemplo (Foto Acabada)",
                    sentence: (
                      <>
                        “Ontem o servidor <strong>redigiu</strong> o ofício.”
                      </>
                    ),
                    explanation: "Fato único e totalmente encerrado ontem.",
                  },
                ],
              },
              {
                term: "2. Pretérito Imperfeito (O FILME)",
                badge: "Hábito / Continuidade",
                accent: "sky",
                summary: (
                  <>
                    Indica ação habitual, contínua, repetida ou em andamento no passado (marcado pelas terminações típicas{" "}
                    <em>-va</em> e <em>-ia</em>: <em>cantava, vendia, redigia</em>).
                  </>
                ),
                examples: [
                  {
                    label: "Exemplo (Filme Contínuo)",
                    sentence: (
                      <>
                        “Antigamente ele <strong>redigia</strong> ofícios todos os dias.”
                      </>
                    ),
                    explanation: "Mostra rotina repetida no passado, e não um ato isolado.",
                  },
                ],
              },
              {
                term: "3. Pretérito Mais-que-perfeito (O Passado do Passado)",
                badge: "Anterior a outro passado",
                accent: "purple",
                summary: (
                  <>
                    Expressa uma ação passada que aconteceu <strong>antes de outra ação que também já passou</strong>. Na
                    forma simples termina em <em>-ra</em> (<em>redigira, fizera</em>); na linguagem comum substitui-se pela forma
                    composta (<em>“tinha redigido”</em>).
                  </>
                ),
                examples: [
                  {
                    label: "Exemplo (Forma Simples -ra)",
                    sentence: (
                      <>
                        “Quando o chefe chegou, ele já <strong>redigira</strong> o despacho.”
                      </>
                    ),
                    explanation: "Primeiro ele redigiu o despacho ('tinha redigido'); só depois o chefe chegou.",
                  },
                ],
              },
            ]}
          />

          <CompareGrid
            title="Síntese Visual: Pretérito Perfeito (A Foto) vs. Pretérito Imperfeito (O Filme)"
            mode="contrast"
            left={{
              title: "Pretérito Perfeito (A FOTO)",
              badge: "Ação pontual acabada",
              items: [
                <>Ação pontual, perfeitamente concluída no passado, com começo e fim definidos.</>,
                <>
                  Ex: <em>“Ontem o servidor <strong>redigiu</strong> o ofício.”</em>
                </>,
              ],
            }}
            right={{
              title: "Pretérito Imperfeito (O FILME)",
              badge: "Hábito / Continuidade",
              items: [
                <>Ação habitual, contínua, repetida ou em andamento no passado (terminações <em>-va</em> e <em>-ia</em>: <em>cantava, vendia, redigia</em>).</>,
                <>
                  Ex: <em>“Antigamente ele <strong>redigia</strong> ofícios todos os dias.”</em>
                </>,
              ],
            }}
          />

          <AnalogyBox title="Macete do Pretérito Mais-que-perfeito (-ra = tinha + particípio)" tag="3º Pretérito do Indicativo">
            <p>
              Sempre que encontrar um verbo terminado em <em>-ra</em> sem acento no final (<em>redigira, fizera, entregara</em>) em
              questões da ACCESS ou VUNESP, troque mentalmente por <strong>“tinha + particípio”</strong> (<em>tinha redigido, tinha feito</em>) para conferir se ocorreu antes de outro fato passado.
            </p>
          </AnalogyBox>

          <ProseSection number="4" title="Futuros em Contraste: Futuro do Presente vs. Futuro do Pretérito">
            <p>
              Enquanto um futuro aponta para algo dado como certo após a fala, o outro abre o campo das hipóteses não realizadas e da cortesia formal exigida na redação oficial:
            </p>
          </ProseSection>

          <DefinitionBlocks
            title="Os 2 Futuros do Indicativo — Um por Vez"
            items={[
              {
                term: "1. Futuro do Presente",
                badge: "Fato certo no futuro",
                accent: "indigo",
                summary: "Exprime um fato dado como certo que ocorrerá após o momento da fala.",
                examples: [
                  {
                    label: "Exemplo (Previsão Certa)",
                    sentence: (
                      <>
                        “O prefeito <strong>nomeará</strong> os aprovados em maio.”
                      </>
                    ),
                    explanation: "Comunica uma ação futura direta e afirmativa.",
                  },
                ],
              },
              {
                term: "2. Futuro do Pretérito",
                badge: "Condicional & Polidez Oficial",
                accent: "amber",
                summary: (
                  <>
                    Indica fato futuro que dependia de uma condição que não se realizou, ou atua como{" "}
                    <strong>recurso de polidez/educação</strong> na correspondência administrativa (atenuando a exigência em relação a dizer bruscamente <em>“Eu quero uma informação”</em>).
                  </>
                ),
                examples: [
                  {
                    label: "Uso 1 · Sentido Condicional",
                    sentence: (
                      <>
                        “Se houvesse orçamento, a secretaria <strong>compraria</strong> os computadores.”
                      </>
                    ),
                    explanation: "A compra dependeria de haver orçamento (condição não efetivada).",
                  },
                  {
                    label: "Uso 2 · Polidez no Serviço Público",
                    sentence: (
                      <>
                        “Eu <strong>gostaria</strong> de solicitar uma certidão.”
                      </>
                    ),
                    explanation: "Substitui o direto 'Eu quero' por um pedido cortês e respeitoso típico de ofícios.",
                  },
                ],
              },
            ]}
          />

          <FeynmanCard
            title="Síntese Feynman · Eixo 1 (Modos e Tempos Verbais)"
            lines={[
              "O modo indica a postura de quem fala: Indicativo é certeza objetiva, Subjuntivo é hipótese ou desejo, Imperativo é ordem ou instrução.",
              "O Pretérito Perfeito é uma foto acabada (ele assinou), enquanto o Imperfeito é um filme habitual (ele assinava todos os dias).",
              "O Futuro do Pretérito expressa uma ação que ocorreria sob condição ou serve para demonstrar cortesia respeitosa em textos oficiais (gostaria, solicitaria).",
            ]}
          />
        </div>
      ),
      checkpointQuestions: [
        {
          num: "1",
          header: "Checkpoint 1.1",
          banca: "**Foco:** Pretérito Perfeito vs. Imperfeito",
          statement:
            "Na frase *“Antigamente, os protocolos **tramitavam** apenas em papel”*, o verbo destacado está no:",
          options: {
            A: "Pretérito Perfeito do Indicativo, indicando ação pontual.",
            B: "Pretérito Imperfeito do Indicativo, indicando hábito contínuo no passado.",
            C: "Pretérito Mais-que-perfeito do Indicativo, indicando passado do passado.",
            D: "Futuro do Pretérito do Indicativo, indicando polidez.",
          },
          answer: "B",
          commentary:
            "A terminação *-va/-vam* somada à ideia de rotina antiga ('Antigamente') caracteriza o **Pretérito Imperfeito do Indicativo** (o 'filme' habitual).",
        },
        {
          num: "2",
          header: "Checkpoint 1.2",
          banca: "**Foco:** Pretérito Mais-que-perfeito",
          statement:
            "Em *“Quando a auditoria começou, o servidor já **arquivara** os comprovantes”*, a forma verbal destacada equivale a:",
          options: {
            A: "arquivará",
            B: "arquivava",
            C: "tinha arquivado",
            D: "arquivaria",
          },
          answer: "C",
          commentary:
            "A forma simples terminada em *-ra* (*arquivara*) é o **Pretérito Mais-que-perfeito**, equivalente à forma composta *tinha arquivado*.",
        },
        {
          num: "3",
          header: "Checkpoint 1.3",
          banca: "**Foco:** Modos Verbais",
          statement:
            "Em *“Caso o edital **seja** retificado, os prazos mudarão”*, o verbo destacado está no Modo:",
          options: {
            A: "Indicativo (certeza).",
            B: "Imperativo (ordem).",
            C: "Subjuntivo (hipótese/condição).",
            D: "Infinitivo impessoal.",
          },
          answer: "C",
          commentary:
            "Introduzido pela conjunção condicional *Caso*, o verbo *seja* expressa uma hipótese incerta — marca clássica do **Modo Subjuntivo**.",
        },
      ],
    },

    // =========================================================================
    // EIXO 2: VERBOS IRREGULARES CRÍTICOS, GERUNDISMO E VOZES VERBAIS
    // =========================================================================
    {
      id: "eixo-2",
      index: 2,
      title: "Verbos Irregulares Críticos, Vozes Verbais e Formas Nominais",
      subtitle: "Verbos regulares vs. irregulares, famílias TER/VIR/PÔR, duelo VER vs. VIR, particípios abundantes, gerundismo e vozes verbais.",
      estimatedMinutes: 16,
      render: () => (
        <div className="space-y-7">
          <ProseSection number="1" title="A Lógica dos Verbos Irregulares">
            <p>
              Um verbo é chamado de <strong>regular</strong> quando seu radical permanece idêntico em todas as pessoas
              e tempos (ex.: <em>cantar: canto, cantei, cantarei</em> — a base <em>cant-</em> nunca muda). Um verbo é{" "}
              <strong>irregular</strong> quando sua raiz sofre modificações sonoras ao longo da conjugação (ex.:{" "}
              <em>saber: eu sei, eu soube, eu saberei</em>). As bancas sabem exatamente onde o ouvido popular
              “escorrega” e concentram as questões em três famílias cruciais:
            </p>
          </ProseSection>

          <FlipCardsGrid
            title="As 3 Famílias Verbais Mais Perigosas de Concursos (Clique para virar)"
            cards={[
              {
                front: "TER / VIR e derivados (manter, reter, intervir, provir)",
                hint: "Acento & Pretérito",
                back: (
                  <>
                    Simples: <strong>ele tem / vem</strong> (sing.) vs. <strong>eles têm / vêm</strong> (pl.).
                    <br />
                    Derivados: <strong>mantém / intervém</strong> (agudo) vs. <strong>mantêm / intervêm</strong> (circunflexo).
                    <br />
                    Passado de intervir: <strong>ele interveio</strong> (nunca <em>interviu</em>!).
                  </>
                ),
              },
              {
                front: "O Duelo VER vs. VIR (Futuro do Subjuntivo)",
                hint: "Campeã absoluta de pegadinhas!",
                back: (
                  <>
                    Verbo <strong>VER</strong> (olhar): <em>“Quando eu <strong>vir</strong> o processo, darei o parecer.”</em> (nunca <em>quando eu ver</em>!).
                    <br />
                    Verbo <strong>VIR</strong> (deslocar-se): <em>“Quando o prefeito <strong>vier</strong> à repartição...”</em>
                  </>
                ),
              },
              {
                front: "Família PÔR (repor, dispor, propor, supor)",
                hint: "Radical pos- / puser-",
                back: (
                  <>
                    Imperfeito Subjuntivo: <em>“Se o secretário <strong>pusesse</strong> / <strong>propusesse</strong>...”</em> (nunca <em>posse / proposse</em>).
                    <br />
                    Futuro Subjuntivo: <em>“Quando o servidor <strong>dispuser</strong> de tempo...”</em> (nunca <em>dispor</em>).
                  </>
                ),
              },
            ]}
          />

          <ProseSection number="2" title="Formas Nominais (Infinitivo, Particípio e Gerúndio) e Verbos Abundantes">
            <p>
              As formas nominais do verbo são três — vamos entrar em cada uma com seu exemplo e sua regra de prova antes de ver a armadilha do gerundismo:
            </p>
          </ProseSection>

          <DefinitionBlocks
            title="As 3 Formas Nominais — Uma por Vez"
            items={[
              {
                term: "1. Infinitivo (Terminação em -r)",
                badge: "Nome do verbo",
                accent: "indigo",
                summary: (
                  <>
                    É o nome original do verbo terminado em <em>-r</em> (<em>analisar, deferir, protocolar</em>). Funciona quase como um substantivo.
                  </>
                ),
                examples: [
                  {
                    label: "Exemplo",
                    sentence: (
                      <>
                        “É essencial <strong>analisar</strong> e <strong>deferir</strong> o pedido no prazo.”
                      </>
                    ),
                    explanation: "Os verbos estão na sua forma básica terminada em -r, sem indicar pessoa nem tempo.",
                  },
                ],
              },
              {
                term: "2. Particípio (e Verbos Abundantes)",
                badge: "Ter/Haver (longo) × Ser/Estar (curto)",
                accent: "emerald",
                summary: (
                  <>
                    Indica ação concluída (em geral terminada em <em>-do</em>: <em>analisado, deferido</em>). Alguns verbos são{" "}
                    <strong>abundantes</strong> (dupla forma): usa-se a forma regular longa (<em>imprimido, aceitado</em>) com{" "}
                    <strong>ter/haver</strong> e a forma curta irregular (<em>impresso, aceito</em>) com <strong>ser/estar</strong>.
                  </>
                ),
                examples: [
                  {
                    label: "Forma Regular Longa (com TER / HAVER)",
                    sentence: (
                      <>
                        “O estagiário <strong>tinha imprimido</strong> as guias.”
                      </>
                    ),
                    explanation: "Com auxiliar TER ou HAVER, a norma culta exige o particípio longo terminado em -do.",
                  },
                  {
                    label: "Forma Curta Irregular (com SER / ESTAR)",
                    sentence: (
                      <>
                        “O relatório já <strong>está impresso</strong> na pasta.”
                      </>
                    ),
                    explanation: "Com auxiliar SER ou ESTAR, usa-se a forma curta irregular (impresso, aceito, entregue, pago).",
                  },
                ],
              },
              {
                term: "3. Gerúndio (Terminação em -ndo)",
                badge: "Ação em curso",
                accent: "amber",
                summary: (
                  <>
                    Exprime ação contínua e em andamento no momento referido, terminada em <em>-ndo</em> (<em>analisando, deferindo</em>).
                  </>
                ),
                examples: [
                  {
                    label: "Exemplo Legítimo (Simultâneo)",
                    sentence: (
                      <>
                        “O auditor está <strong>examinando</strong> as contas agora.”
                      </>
                    ),
                    explanation: "Descreve processo realmente em curso neste instante — diferente do gerundismo futuro.",
                  },
                ],
              },
            ]}
          />

          <TrapAlert
            title="Atenção ao Gerundismo na Redação Oficial"
            trap={
              <>
                Usar o gerundismo para prometer uma ação futura instantânea:{" "}
                <strong>“Aguarde um minuto que eu vou estar protocolando o seu requerimento.”</strong>
              </>
            }
            escape={
              <>
                O gerúndio só cabe para ações realmente contínuas e simultâneas (<em>“O auditor está examinando as contas”</em>).
                Para ação futura, use o Futuro do Presente:{" "}
                <strong>“Aguarde um minuto que eu protocolarei o seu requerimento.”</strong>
              </>
            }
          />

          <ProseSection number="3" title="As Vozes Verbais na Administração Pública">
            <p>
              A voz verbal expressa se o sujeito da oração é quem <strong>pratica</strong> a ação (agente), quem{" "}
              <strong>recebe/sofre</strong> a ação (paciente) ou ambos ao mesmo tempo (reflexiva).
            </p>
          </ProseSection>

          <DefinitionBlocks
            title="As Vozes Verbais — Uma por Vez com Exemplos"
            items={[
              {
                term: "1. Voz Ativa (Sujeito Agente)",
                badge: "Sujeito pratica a ação",
                accent: "indigo",
                summary: "O sujeito da frase é quem executa diretamente a ação indicada pelo verbo.",
                examples: [
                  {
                    label: "Exemplo na Repartição",
                    sentence: (
                      <>
                        “O fiscal <strong>autuou</strong> a empresa infratora.”
                      </>
                    ),
                    explanation: "O sujeito (O fiscal) pratica diretamente a ação sobre a empresa.",
                  },
                ],
              },
              {
                term: "2. Voz Passiva Analítica (Ser/Estar + Particípio)",
                badge: "Sujeito sofre a ação",
                accent: "sky",
                summary: "O termo que recebia a ação vira Sujeito Paciente, e o verbo aparece em locução (ser/estar + particípio), podendo trazer quem praticou nos bastidores (pelo fiscal).",
                examples: [
                  {
                    label: "Exemplo na Repartição",
                    sentence: (
                      <>
                        “A empresa infratora <strong>foi autuada</strong> pelo fiscal.”
                      </>
                    ),
                    explanation: "A empresa recebe a autuação (Sujeito Paciente); 'pelo fiscal' é o Agente da Passiva.",
                  },
                ],
              },
              {
                term: "3. Voz Passiva Sintética com 'SE'",
                badge: "VTD + SE (Concordância obrigatória)",
                accent: "emerald",
                summary: "Formada por verbo transitivo direto na 3ª pessoa + pronome apassivador 'se'. O termo paciente comanda o singular ou o plural do verbo!",
                examples: [
                  {
                    label: "Sujeito Paciente no Singular",
                    sentence: (
                      <>
                        “<strong>Autuou-se</strong> a empresa.”
                      </>
                    ),
                    explanation: "Equivale a 'A empresa foi autuada': sujeito singular mantém o verbo no singular.",
                  },
                  {
                    label: "Sujeito Paciente no Plural",
                    sentence: (
                      <>
                        “<strong>Autuaram-se</strong> as empresas infratoras.”
                      </>
                    ),
                    explanation: "Se o termo paciente for plural, o verbo vai obrigatoriamente para o plural ('As empresas foram autuadas').",
                  },
                ],
              },
              {
                term: "4. Voz Reflexiva",
                badge: "Agente e Paciente ao mesmo tempo",
                accent: "purple",
                summary: "O sujeito pratica a ação e ele próprio sofre o efeito dela sobre si mesmo ('a si mesmo').",
                examples: [
                  {
                    label: "Exemplo na Repartição",
                    sentence: (
                      <>
                        “O próprio sistema <strong>atualizou-se</strong> durante a madrugada.”
                      </>
                    ),
                    explanation: "O sujeito claro (O próprio sistema) executa e recebe a atualização em si mesmo.",
                  },
                ],
              },
            ]}
          />

          <CompareGrid
            title="Quadro Comparativo: Voz Ativa vs. Voz Passiva (Analítica e Sintética com 'SE')"
            mode="contrast"
            left={{
              title: "Voz Ativa (Sujeito Agente)",
              badge: "Pratica a ação",
              items: [
                <>
                  <em>“O fiscal <strong>autuou</strong> a empresa infratora.”</em>
                </>,
                <>O sujeito (<em>O fiscal</em>) pratica diretamente a ação.</>,
              ],
            }}
            right={{
              title: "Voz Passiva (Sujeito Paciente)",
              badge: "Recebe a ação",
              items: [
                <>
                  <strong>Analítica (ser/estar + particípio):</strong> <em>“A empresa infratora <strong>foi autuada</strong> pelo fiscal.”</em>
                </>,
                <>
                  <strong>Sintética (verbo 3ª pess. + SE):</strong> <em>“<strong>Autuou-se</strong> a empresa.”</em> Se
                  o termo for plural, o verbo vai obrigatoriamente ao plural:{" "}
                  <em>“<strong>Autuaram-se</strong> as empresas infratoras.”</em>
                </>,
              ],
            }}
          />

          <FeynmanCard
            title="Síntese Feynman · Eixo 2 (Verbos Críticos e Vozes)"
            lines={[
              "No singular dos derivados de ter/vir, usa-se acento agudo (ele intervém); no plural, acento circunflexo (eles intervêm).",
              "O Futuro do Subjuntivo do verbo ver é vir (quando eu vir o documento); o de vir é vier (quando eu vier aqui).",
              "Na voz passiva sintética com a partícula 'se', o verbo concorda com o sujeito paciente (vende-se casa / vendem-se casas).",
            ]}
          />
        </div>
      ),
      checkpointQuestions: [
        {
          num: "1",
          header: "Checkpoint 2.1",
          banca: "**Foco:** Derivados de VIR e PÔR",
          statement:
            "Assinale a alternativa em que a conjugação verbal está **CORRETA** conforme a norma culta:",
          options: {
            A: "O coordenador interviu rapidamente no atendimento.",
            B: "Se a equipe propor uma melhoria, será analisada.",
            C: "Quando o servidor dispuser de tempo, revisará a ata.",
            D: "Os diretores mantém o sigilo dos autos.",
          },
          answer: "C",
          commentary:
            "O verbo *dispor* segue *pôr* (quando ele puser → quando dispuser). Em (A), o certo é *interveio*; em (B), *propuser*; em (D), plural leva circunflexo (*mantêm*).",
        },
        {
          num: "2",
          header: "Checkpoint 2.2",
          banca: "**Foco:** Duelo VER vs. VIR",
          statement:
            "Complete corretamente: *“Quando você ____ o relatório final e ____ à secretaria, entregue-o ao chefe.”*",
          options: {
            A: "ver — vir",
            B: "vir — vier",
            C: "vier — vir",
            D: "ver — vier",
          },
          answer: "B",
          commentary:
            "Futuro do Subjuntivo de **VER** = **vir** (*quando você vir o relatório*); Futuro do Subjuntivo de **VIR** = **vier** (*quando você vier à secretaria*).",
        },
        {
          num: "3",
          header: "Checkpoint 2.3",
          banca: "**Foco:** Voz Passiva Sintética",
          statement:
            "Assinale a frase em que a concordância da voz passiva sintética está **CORRETA**:",
          options: {
            A: "Protocolou-se todos os requerimentos de férias.",
            B: "Analisou-se as propostas da licitação ontem.",
            C: "Arquivaram-se os processos concluídos no setor.",
            D: "Vende-se terrenos municipais em leilão.",
          },
          answer: "C",
          commentary:
            "Em *Arquivaram-se os processos* (= Os processos foram arquivados), o sujeito paciente está no plural (*os processos*), exigindo verbo no plural.",
        },
      ],
    },

    // =========================================================================
    // EIXO 3: O ADVÉRBIO
    // =========================================================================
    {
      id: "eixo-3",
      index: 3,
      title: "O Advérbio — O Modificador Universal e Invariável",
      subtitle: "O adjetivo dos verbos, o porquê da imutabilidade, 'meio vs. meia' e adjetivos adverbializados.",
      estimatedMinutes: 12,
      render: () => (
        <div className="space-y-7">
          <ProseSection number="1" title="O que é o Advérbio? O Adjetivo dos Verbos">
            <p>
              Se o adjetivo é a classe que se liga exclusivamente a substantivos para qualificá-los, quem qualifica ou
              modifica os verbos? <strong>O ADVÉRBIO</strong>. Além de modificar verbos, o advérbio tem um poder único:
              ele pode intensificar um <strong>adjetivo</strong> ou até mesmo <strong>outro advérbio</strong>.
            </p>
          </ProseSection>

          <DefinitionBlocks
            title="Os 3 Alvos que o Advérbio Modifica — Um por Vez"
            items={[
              {
                term: "1. Modifica um Verbo",
                badge: "Circunstância da ação",
                accent: "indigo",
                summary: "Indica o modo, tempo, lugar ou intensidade com que a ação verbal acontece.",
                examples: [
                  {
                    label: "Exemplo",
                    sentence: (
                      <>
                        “O assessor despachou <strong>rapidamente</strong>.”
                      </>
                    ),
                    explanation: "Explica o modo como o ato de despachar aconteceu.",
                  },
                ],
              },
              {
                term: "2. Modifica um Adjetivo",
                badge: "Grau da qualidade",
                accent: "sky",
                summary: "Aumenta ou atenua a intensidade de uma característica ligada a um nome.",
                examples: [
                  {
                    label: "Exemplo",
                    sentence: (
                      <>
                        “O relatório é <strong>muito</strong> detalhado.”
                      </>
                    ),
                    explanation: "O advérbio 'muito' intensifica a característica 'detalhado' (adjetivo).",
                  },
                ],
              },
              {
                term: "3. Modifica Outro Advérbio",
                badge: "Intensificação dupla",
                accent: "amber",
                summary: "Pode reforçar ou dosar o sentido de outro advérbio logo ao lado.",
                examples: [
                  {
                    label: "Exemplo",
                    sentence: (
                      <>
                        “O concurso passou <strong>tão</strong> depressa!”
                      </>
                    ),
                    explanation: "'Tão' intensifica o advérbio 'depressa'.",
                  },
                ],
              },
            ]}
          />

          <ProseSection number="2" title="A Regra de Ouro: Por que o Advérbio NUNCA Flexiona?">
            <p>
              Por que os advérbios não têm plural nem feminino? Porque eles não nomeiam nem caracterizam seres
              materiais (<em>coisas</em> com gênero ou contabilidade física). Eles exprimem apenas uma{" "}
              <strong>circunstância</strong> da ação. Essa propriedade gera as maiores pegadinhas de bancas como
              ACCESS e VUNESP: <strong>meio</strong>, <strong>bastante</strong> e o{" "}
              <strong>adjetivo adverbializado</strong>. Vamos ver uma por uma:
            </p>
          </ProseSection>

          <DefinitionBlocks
            title="As Pegadinhas da Invariabilidade — Uma por Vez"
            items={[
              {
                term: "1. 'Meio' (Advérbio = um pouco) vs. 'Meia' (Numeral = metade)",
                badge: "Pegadinha campeã",
                accent: "indigo",
                summary: (
                  <>
                    Quando equivale a <em>“um pouco”</em> ou <em>“mais ou menos”</em> modificando um adjetivo, é{" "}
                    <strong>advérbio invariável</strong> (<em>meio</em>). Só concorda no feminino (<em>meia</em>) quando significa literalmente <strong>metade física</strong> de algo!
                  </>
                ),
                examples: [
                  {
                    label: "Certo (Advérbio = um pouco)",
                    verdict: "right",
                    sentence: (
                      <>
                        “A candidata estava <strong>meio</strong> apreensiva com o gabarito.”
                      </>
                    ),
                    explanation: "Significa 'um pouco apreensiva' → advérbio nunca vai para o feminino.",
                  },
                  {
                    label: "Errado (Pegadinha de Prova)",
                    verdict: "wrong",
                    sentence: (
                      <>
                        “A candidata estava <strong>meia</strong> apreensiva.”
                      </>
                    ),
                    explanation: "Erro grosseiro: ela não estava dividida na metade física!",
                  },
                  {
                    label: "Certo (Numeral = metade real)",
                    verdict: "right",
                    sentence: (
                      <>
                        “Ele tomou <strong>meia</strong> dose de café e comeu <strong>meia</strong> maçã.”
                      </>
                    ),
                    explanation: "Aqui 'meia' significa metade física (1/2) de um substantivo → concorda normalmente.",
                  },
                ],
              },
              {
                term: "2. 'Bastante' (Advérbio = muito) vs. Adjetivo (= suficiente)",
                badge: "Invariável antes de adjetivo/verbo",
                accent: "amber",
                summary: (
                  <>
                    Ligado a um adjetivo ou verbo com sentido de <em>“muito”</em>, <strong>bastante</strong> é advérbio e{" "}
                    <strong>jamais ganha -s</strong> (mesmo que o sujeito esteja no plural).
                  </>
                ),
                examples: [
                  {
                    label: "Errado (Pegadinha de Prova)",
                    verdict: "wrong",
                    sentence: (
                      <>
                        “Os candidatos estavam <strong>bastantes</strong> tranquilos.”
                      </>
                    ),
                    explanation: "'Bastante' modifica o adjetivo 'tranquilos' (= muito tranquilos) → advérbio invariável: 'bastante tranquilos'.",
                  },
                ],
              },
              {
                term: "3. Adjetivo Adverbializado (Trabalhar duro, Falar alto)",
                badge: "Congela no singular",
                accent: "emerald",
                summary: (
                  <>
                    Palavras normalmente adjetivas (<em>duro, alto, claro, rápido</em>), quando passam a modificar um{" "}
                    <strong>verbo</strong>, viram advérbios e congelam obrigatoriamente no masculino singular!
                  </>
                ),
                examples: [
                  {
                    label: "Certo (Adjetivos adverbializados)",
                    verdict: "right",
                    sentence: (
                      <>
                        “As servidoras trabalham <strong>duro</strong> e falaram <strong>alto</strong>.”
                      </>
                    ),
                    explanation: "Como modificam os verbos 'trabalham' e 'falaram', permanecem invariáveis.",
                  },
                  {
                    label: "Errado (Flexionado junto do verbo)",
                    verdict: "wrong",
                    sentence: (
                      <>
                        “Elas falaram <strong>altas</strong> durante a conferência.”
                      </>
                    ),
                    explanation: "Ligado ao verbo 'falar', deve ficar invariável no masculino singular: 'alto'.",
                  },
                  {
                    label: "Contraste (Ligado a substantivo → Adjetivo variável)",
                    verdict: "neutral",
                    sentence: (
                      <>
                        “Elas tinham vozes <strong>altas</strong>.”
                      </>
                    ),
                    explanation: "Aqui 'altas' qualifica o substantivo 'vozes' (não o verbo) → adjetivo varia normalmente.",
                  },
                ],
              },
            ]}
          />

          <CompareGrid
            title="Resumo Rápido: As Grandes Pegadinhas da Invariabilidade"
            mode="right-wrong"
            left={{
              title: "Forma Correta (Norma Culta)",
              items: [
                <>
                  <em>“A candidata estava <strong>meio</strong> apreensiva com o gabarito.”</em> (= um pouco → advérbio invariável).
                </>,
                <>
                  <em>“Ele tomou <strong>meia</strong> dose de café e comeu <strong>meia</strong> maçã.”</em> (= metade → numeral fracionário variável).
                </>,
                <>
                  <em>“As servidoras trabalham <strong>duro</strong> e falaram <strong>alto</strong>.”</em> (adjetivos adverbializados congelam no singular!).
                </>,
                <>
                  <em>“Elas tinham vozes <strong>altas</strong>.”</em> (aqui <em>altas</em> qualifica o substantivo <em>vozes</em> → adjetivo variável).
                </>,
              ],
            }}
            right={{
              title: "Pegadinha de Prova (Errado)",
              items: [
                <>
                  <em>“A candidata estava <strong>meia</strong> apreensiva.”</em> (Erro grosseiro: ela não estava dividida na metade física!).
                </>,
                <>
                  <em>“Os candidatos estavam <strong>bastantes</strong> tranquilos.”</em> (<em>Bastante</em> = muito → advérbio invariável!).
                </>,
                <>
                  <em>“Elas falaram <strong>altas</strong> durante a conferência.”</em> (Ligado ao verbo <em>falar</em>, deve ficar invariável: <em>alto</em>).
                </>,
              ],
            }}
          />

          <FeynmanCard
            title="Síntese Feynman · Eixo 3 (Advérbios)"
            lines={[
              "O advérbio é classe invariável que traz circunstância ao verbo, ao adjetivo ou a outro advérbio.",
              "Se a palavra significar 'um pouco', é advérbio e não aceita feminino (ela está meio nervosa).",
              "Quando um adjetivo vira advérbio de modo (falar alto, trabalhar duro), ele perde o plural.",
            ]}
          />
        </div>
      ),
      checkpointQuestions: [
        {
          num: "1",
          header: "Checkpoint 3.1",
          banca: "**Foco:** Uso de 'Meio' vs. 'Meia'",
          statement: "Assinale a alternativa **INCORRETA** quanto ao emprego de *meio/meia*:",
          options: {
            A: "A servidora ficou meio confusa com a nova portaria.",
            B: "A reunião terminou ao meio-dia e meia.",
            C: "As janelas do protocolo ficaram meias abertas durante a chuva.",
            D: "Ele aguardou meia hora na recepção.",
          },
          answer: "C",
          commentary:
            "Em *meio abertas* (= um pouco abertas), *meio* modifica o adjetivo *abertas*, sendo advérbio invariável. O correto é *meio abertas*.",
        },
        {
          num: "2",
          header: "Checkpoint 3.2",
          banca: "**Foco:** Adjetivo Adverbializado",
          statement:
            "Na frase *“Os fiscais cobraram **caro** pelas irregularidades”*, a palavra destacada classifica-se como:",
          options: {
            A: "Adjetivo, devendo concordar no plural (*caros*).",
            B: "Advérbio de modo (adjetivo adverbializado), sendo invariável.",
            C: "Substantivo abstrato.",
            D: "Pronome indefinido.",
          },
          answer: "B",
          commentary:
            "*Caro* está ligado ao verbo *cobrar* (indicando o modo/valor da cobrança), funcionando como advérbio invariável.",
        },
        {
          num: "3",
          header: "Checkpoint 3.3",
          banca: "**Foco:** Bastante (Advérbio vs. Pronome)",
          statement: "Em qual frase a palavra **bastante** atua como advérbio invariável?",
          options: {
            A: "Havia bastantes processos na mesa do diretor.",
            B: "Eles receberam bastantes elogios pelo atendimento.",
            C: "Os servidores ficaram bastante satisfeitos com o sistema.",
            D: "Foram protocolados bastantes ofícios nesta semana.",
          },
          answer: "C",
          commentary:
            "Em *bastante satisfeitos*, modifica o adjetivo *satisfeitos* (= muito satisfeitos) → advérbio invariável. Nas demais, acompanha substantivos (= muitos) e varia para *bastantes*.",
        },
      ],
    },

    // =========================================================================
    // EIXO 4: A TRÍPLICE FUNÇÃO DA PALAVRA "A"
    // =========================================================================
    {
      id: "eixo-4",
      index: 4,
      title: "A Tríplice Função da Palavra 'A' — Preposição, Artigo e Pronome",
      subtitle: "O teste infalível da troca pelo masculino (O / AO / O) e o elenco das preposições essenciais.",
      estimatedMinutes: 12,
      render: () => (
        <div className="space-y-7">
          <ProseSection number="1" title="O Enigma do 'A': Como Não Confundir na Hora da Prova">
            <p>
              A letra “A” na língua portuguesa pode pertencer a <strong>três classes gramaticais completamente diferentes</strong>.
              Dominar esse teste é o pré-requisito definitivo para nunca mais errar questões de morfologia e de{" "}
              <strong>Crase</strong> (que estudaremos na Semana 08). Vamos analisar cada um dos 3 papéis com a troca pelo masculino:
            </p>
          </ProseSection>

          <DefinitionBlocks
            title="Os 3 Papéis do 'A' — Um por Vez com Teste pelo Masculino"
            items={[
              {
                term: "1. 'A' como Artigo Definido (Variável)",
                badge: "Troca por 'O'",
                accent: "indigo",
                summary: (
                  <>
                    Vem antes de um substantivo feminino para determiná-lo. Varia em número (<em>a / as</em>) e, na troca por substantivo masculino, vira <strong>O</strong>.
                  </>
                ),
                examples: [
                  {
                    label: "Frase Original (Feminino)",
                    sentence: (
                      <>
                        “<strong>A</strong> portaria foi revogada.”
                      </>
                    ),
                    explanation: "Precede e determina o substantivo feminino 'portaria'.",
                  },
                  {
                    label: "Prova dos 9 (Troca pelo Masculino)",
                    verdict: "right",
                    sentence: (
                      <>
                        “<strong>O</strong> decreto foi revogado.”
                      </>
                    ),
                    explanation: "Trocou por masculino e virou apenas 'O'? Era Artigo Definido!",
                  },
                ],
              },
              {
                term: "2. 'A' como Preposição (Invariável)",
                badge: "Fica 'A' ou vira 'AO'",
                accent: "emerald",
                summary: (
                  <>
                    Liga duas palavras por exigência de regência de verbo ou nome. Não varia para o plural e, na troca pelo masculino, permanece <strong>a</strong> ou contrai em <strong>ao</strong>.
                  </>
                ),
                examples: [
                  {
                    label: "Frase Original",
                    sentence: (
                      <>
                        “Entregou o laudo <strong>a</strong> você.”
                      </>
                    ),
                    explanation: "Quem entrega, entrega algo A alguém (regência exige preposição 'a').",
                  },
                  {
                    label: "Prova dos 9 (Troca pelo Masculino)",
                    verdict: "right",
                    sentence: (
                      <>
                        “Entregou o laudo <strong>a</strong> ele / <strong>ao</strong> chefe.”
                      </>
                    ),
                    explanation: "A preposição permaneceu 'a' (ou virou 'a + o = ao')! Jamais vira só 'o'.",
                  },
                ],
              },
              {
                term: "3. 'A' como Pronome Oblíquo (Substituto)",
                badge: "Troca por 'O' (= ela/ele)",
                accent: "amber",
                summary: (
                  <>
                    Substitui um substantivo feminino já mencionado anteriormente (exercendo função de Objeto Direto), colado ao verbo.
                  </>
                ),
                examples: [
                  {
                    label: "Frase Original",
                    sentence: (
                      <>
                        “Recebi a intimação e <strong>a</strong> arquivei.”
                      </>
                    ),
                    explanation: "'a' substitui 'a intimação' (arquivei ela).",
                  },
                  {
                    label: "Prova dos 9 (Troca pelo Masculino)",
                    verdict: "right",
                    sentence: (
                      <>
                        “Recebi o ofício e <strong>o</strong> arquivei.”
                      </>
                    ),
                    explanation: "Na troca por 'o ofício', vira 'o' retomando o substantivo masculino junto ao verbo.",
                  },
                ],
              },
            ]}
          />

          <KeyTable
            title="Diagrama Comparativo da Palavra 'A' (Teste da Troca pelo Masculino)"
            headers={["Classe do 'A'", "O que faz", "Exemplo", "Troca pelo Masculino"]}
            rows={[
              [
                <strong className="text-indigo-600 dark:text-indigo-400">Artigo Definido (Variável)</strong>,
                "Vem antes de um substantivo feminino para determiná-lo. Varia em 'as'.",
                <em>“<strong>A</strong> portaria foi revogada.”</em>,
                <strong>“O decreto foi revogado” (Virou O!)</strong>,
              ],
              [
                <strong className="text-emerald-600 dark:text-emerald-400">Preposição (Invariável)</strong>,
                "Liga duas palavras por exigência de regência de verbo ou nome. Não varia.",
                <em>“Entregou o laudo <strong>a</strong> você.”</em>,
                <strong>“...a ele / ao chefe” (Fica A ou AO!)</strong>,
              ],
              [
                <strong className="text-amber-600 dark:text-amber-400">Pronome Oblíquo (Substituto)</strong>,
                "Substitui substantivo feminino já mencionado (objeto direto).",
                <em>“Recebi a intimação e <strong>a</strong> arquivei.”</em>,
                <strong>“...recebi o ofício e o arquivei” (= ela)</strong>,
              ],
            ]}
          />

          <ProseSection number="2" title="O Elenco das 17 Preposições Essenciais e Seus Valores Semânticos">
            <p>
              As preposições essenciais em português são:{" "}
              <em>
                a, ante, após, até, com, contra, de, desde, em, entre, para, perante, por, sem, sob, sobre, trás.
              </em>
            </p>
            <p>
              As bancas não cobram apenas “decore a lista”, mas sim <strong>o valor semântico</strong> que a
              preposição carrega no contexto da frase:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Origem/Procedência:</strong> “O documento veio <strong>de</strong> Birigui.”</li>
              <li><strong>Matéria:</strong> “Uma placa feita <strong>de</strong> bronze.”</li>
              <li><strong>Instrumento:</strong> “Escreveu o despacho <strong>com</strong> caneta preta.”</li>
              <li><strong>Causa:</strong> “O servidor tremia <strong>de</strong> frio.” (= por motivo do frio).</li>
              <li><strong>Finalidade:</strong> “Estudou <strong>para</strong> vencer.”</li>
            </ul>
          </ProseSection>

          <FeynmanCard
            title="Síntese Feynman · Eixo 4 (Preposição vs. Artigo)"
            lines={[
              "O 'A' que vira 'O' no masculino antes de um nome é Artigo Definido (a lei / o decreto).",
              "O 'A' que fica 'A' ou vira 'AO' no masculino é Preposição (obedecer à lei / obedecer ao decreto).",
              "O 'A' que substitui uma palavra feminina e vira 'O' junto ao verbo é Pronome Oblíquo (eu a chamei / eu o chamei).",
            ]}
          />
        </div>
      ),
      checkpointQuestions: [
        {
          num: "1",
          header: "Checkpoint 4.1",
          banca: "**Foco:** Identificação da palavra 'A'",
          statement:
            "Na frase *“O chefe recebeu a certidão e **a** guardou no cofre”*, o termo destacado é:",
          options: {
            A: "Artigo definido.",
            B: "Preposição essencial.",
            C: "Pronome pessoal oblíquo.",
            D: "Conjunção coordenativa.",
          },
          answer: "C",
          commentary:
            "O *a* substitui *a certidão* (objeto direto de *guardou*: guardou-a / no masculino: *o guardou*), logo é **pronome pessoal oblíquo**.",
        },
        {
          num: "2",
          header: "Checkpoint 4.2",
          banca: "**Foco:** Preposição pura",
          statement:
            "Em *“O servidor não faltou **a** nenhuma audiência”*, o termo destacado classifica-se como:",
          options: {
            A: "Preposição.",
            B: "Artigo definido.",
            C: "Pronome demonstrativo.",
            D: "Advérbio.",
          },
          answer: "A",
          commentary:
            "O verbo *faltar* exige a preposição *a* (quem falta, falta *a* algo), e antes do pronome indefinido *nenhuma* não há artigo — é **preposição pura**.",
        },
        {
          num: "3",
          header: "Checkpoint 4.3",
          banca: "**Foco:** Valor Semântico da Preposição",
          statement:
            "Em *“O servidor redigiu o termo **com** esferográfica azul”*, a preposição destacada indica:",
          options: {
            A: "Companhia.",
            B: "Instrumento.",
            C: "Causa.",
            D: "Finalidade.",
          },
          answer: "B",
          commentary:
            "*Com esferográfica azul* indica o objeto/meio físico utilizado para executar a ação de redigir (**instrumento**).",
        },
      ],
    },

    // =========================================================================
    // EIXO 5: AS CONJUNÇÕES
    // =========================================================================
    {
      id: "eixo-5",
      index: 5,
      title: "As Conjunções — A Engenharia Lógica e a Coesão do Texto",
      subtitle: "Coordenativas, o mapa das 9 Subordinativas Adverbiais, duelo 'Mas vs. Embora' e 'À medida que vs. Na medida em que'.",
      estimatedMinutes: 16,
      render: () => (
        <div className="space-y-7">
          <ProseSection number="1" title="O que é a Conjunção? O Cimento Lógico Entre Orações">
            <p>
              Se as preposições ligam palavras isoladas (<em>café com leite</em>), as <strong>CONJUNÇÕES</strong> ligam{" "}
              <strong>orações inteiras</strong> (<em>Eu estudei muito + Passei no concurso = Eu estudei muito, <strong>portanto</strong> passei no concurso</em>).
              A conjunção é o motor do raciocínio lógico na língua: define se as ideias estão somando, brigando,
              concluindo ou justificando.
            </p>
          </ProseSection>

          <DefinitionBlocks
            title="As 5 Conjunções Coordenativas — Uma por Vez"
            items={[
              {
                term: "1. Aditiva",
                badge: "Soma · Acréscimo",
                accent: "indigo",
                summary: (
                  <>
                    Liga orações independentes somando ideias ou fatos (<em>e, nem, não só... mas também, bem como</em>).
                  </>
                ),
                examples: [
                  {
                    label: "Exemplo Prático",
                    sentence: (
                      <>
                        “O servidor conferiu os dados <strong>e</strong> assinou a ata.”
                      </>
                    ),
                    explanation: "O conectivo 'e' apenas adiciona uma segunda ação à primeira, sem oposição.",
                  },
                ],
              },
              {
                term: "2. Adversativa",
                badge: "Oposição · Quebra de expectativa",
                accent: "amber",
                summary: (
                  <>
                    Introduz contraste, ressalva ou quebra do que se esperava antes (<em>mas, porém, contudo, todavia, entretanto, no entanto</em>).
                  </>
                ),
                examples: [
                  {
                    label: "Exemplo Prático",
                    sentence: (
                      <>
                        “O prazo era curto, <strong>porém</strong> a equipe concluiu a triagem.”
                      </>
                    ),
                    explanation: "'porém' marca a virada lógica: apesar do prazo apertado, o serviço foi concluído.",
                  },
                ],
              },
              {
                term: "3. Alternativa",
                badge: "Escolha · Exclusão",
                accent: "sky",
                summary: (
                  <>
                    Apresenta caminhos alternativos ou opções que se alternam ou excluem (<em>ou... ou, ora... ora, quer... quer, seja... seja</em>).
                  </>
                ),
                examples: [
                  {
                    label: "Exemplo Prático",
                    sentence: (
                      <>
                        “<strong>Ou</strong> protocola hoje, <strong>ou</strong> perderá o prazo.”
                      </>
                    ),
                    explanation: "Estabelece uma escolha excludente entre cumprir o prazo hoje ou ficar de fora.",
                  },
                ],
              },
              {
                term: "4. Conclusiva",
                badge: "Dedução lógica · Desfecho",
                accent: "emerald",
                summary: (
                  <>
                    Fecha o raciocínio com uma consequência lógica do que foi dito antes (<em>logo, portanto, por conseguinte, pois [posposto ao verbo]</em>).
                  </>
                ),
                examples: [
                  {
                    label: "Exemplo Prático",
                    sentence: (
                      <>
                        “Cumpriu tudo; tomará, <strong>pois</strong>, posse.”
                      </>
                    ),
                    explanation: "Deslocado depois do verbo e entre vírgulas, 'pois' equivale a 'portanto' (conclusão).",
                  },
                ],
              },
              {
                term: "5. Explicativa",
                badge: "Justificativa · Motivo",
                accent: "purple",
                summary: (
                  <>
                    Apresenta a razão imediata ou justificativa de uma ordem, pedido ou declaração anterior (<em>porque, que, pois [anteposto ao verbo], porquanto</em>).
                  </>
                ),
                examples: [
                  {
                    label: "Exemplo Prático",
                    sentence: (
                      <>
                        “Feche a janela, <strong>porque</strong> a chuva começou.”
                      </>
                    ),
                    explanation: "Explica o motivo imediato do pedido feito antes ('Feche a janela').",
                  },
                ],
              },
            ]}
          />

          <KeyTable
            title="Quadro-Resumo: Conjunções Coordenativas (Ligam Orações Independentes)"
            headers={["Tipo", "Ideia Central", "Conjunções Mais Frequentes", "Exemplo Prático"]}
            rows={[
              [<strong>Aditiva</strong>, "Soma, acréscimo", "e, nem, não só... mas também, bem como", "O servidor conferiu os dados e assinou a ata."],
              [<strong>Adversativa</strong>, "Oposição, quebra de expectativa", "mas, porém, contudo, todavia, entretanto, no entanto", "O prazo era curto, porém a equipe concluiu a triagem."],
              [<strong>Alternativa</strong>, "Escolha, exclusão", "ou... ou, ora... ora, quer... quer, seja... seja", "Ou protocola hoje, ou perderá o prazo."],
              [<strong>Conclusiva</strong>, "Dedução lógica, desfecho", "logo, portanto, por conseguinte, pois (posposto ao verbo)", "Cumpriu tudo; tomará, pois, posse."],
              [<strong>Explicativa</strong>, "Justificativa, motivo", "porque, que, pois (anteposto ao verbo), porquanto", "Feche a janela, porque a chuva começou."],
            ]}
          />

          <ProseSection number="2" title="Conjunções Subordinativas Adverbiais: As 9 Circunstâncias Lógicas">
            <p>
              Ligam uma oração principal a uma oração dependente que funciona como advérbio dela (indicando causa,
              concessão, condição, consequência, conformidade, comparação, proporção, finalidade ou tempo). Veja cada uma com seu exemplo direto em ordem sequencial:
            </p>
            <div className="space-y-3 pt-1">
              {[
                ["1. Causal", "já que, visto que, como (início), porque", "“Como choveu muito, o trânsito parou.”"],
                ["2. Concessiva ⭐", "embora, ainda que, conquanto, posto que", "“Embora chovesse, fomos trabalhar.”"],
                ["3. Condicional", "se, caso, contanto que, desde que", "“Se houver verba, compraremos mesas.”"],
                ["4. Consecutiva", "tão... que, tanto... que, de modo que", "“Gritou tanto que ficou rouco.”"],
                ["5. Conformativa", "conforme, segundo, consoante, como", "“Agimos conforme determina a lei.”"],
                ["6. Comparativa", "como, tal qual, tanto quanto", "“Ele foi veloz como um raio.”"],
                ["7. Proporcional", "à medida que, à proporção que", "“À medida que o tempo passa, aprendo mais.”"],
                ["8. Final", "para que, a fim de que", "“Explicou a fim de que todos entendessem.”"],
                ["9. Temporal", "quando, assim que, logo que", "“Assim que chegou, iniciou o atendimento.”"],
              ].map(([name, list, ex]) => (
                <div key={name} className="p-4 rounded-xl surface border border-tech space-y-1.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="text-xs sm:text-sm font-mono font-bold text-indigo-600 dark:text-indigo-400">{name}</div>
                    <div className="text-xs text-sec italic">{list}</div>
                  </div>
                  <div className="text-sm font-mono text-pri bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2">
                    {ex}
                  </div>
                </div>
              ))}
            </div>
          </ProseSection>

          <CompareGrid
            title="O Duelo Crucial (>30% das Questões): Adversativa (Mas) vs. Concessiva (Embora)"
            mode="contrast"
            left={{
              title: "Adversativa (mas, porém, todavia)",
              badge: "Modo Indicativo",
              items: [
                <>A oração fica no <strong>Modo Indicativo</strong> (certeza) e a informação mais forte vem depois do <em>mas</em>.</>,
                <>
                  <em>“Estudou muito, <strong>mas não passou</strong>.”</em> (O foco e a ênfase estão na reprovação).
                </>,
              ],
            }}
            right={{
              title: "Concessiva (embora, conquanto, ainda que)",
              badge: "Modo Subjuntivo",
              items: [
                <>A oração fica no <strong>Modo Subjuntivo</strong>. Admite um obstáculo, mas ele <strong>não barra</strong> o fato principal!</>,
                <>
                  <em>“<strong>Embora não tivesse</strong> estudado muito, <strong>passou no concurso</strong>.”</em> (O fato principal triunfou!).
                </>,
              ],
            }}
          />

          <TrapAlert
            title="Cuidado com a Expressão que NÃO Existe na Norma Culta"
            trap={
              <>
                Escrever <strong>“À medida em que”</strong> — essa forma mista não existe! É uma contaminação errônea
                de duas expressões diferentes.
              </>
            }
            escape={
              <>
                <strong>À medida que</strong> (com crase) = <strong>Proporção</strong> (<em>À medida que leio, compreendo</em>).
                <br />
                <strong>Na medida em que</strong> (com “na” e sem crase) = <strong>Causa</strong> (<em>Não haverá atendimento na medida em que hoje é feriado</em>).
              </>
            }
          />

          <FeynmanCard
            title="Síntese Feynman · Eixo 5 (Conjunções)"
            lines={[
              "Conjunções coordenativas ligam orações autônomas; adversativas (mas, porém) quebram a expectativa no indicativo.",
              "Conjunções concessivas (embora, conquanto) admitem um obstáculo fraco e exigem verbo no modo subjuntivo.",
              "Use 'à medida que' para proporção e 'na medida em que' para causa; jamais misture as duas na redação.",
            ]}
          />
        </div>
      ),
      checkpointQuestions: [
        {
          num: "1",
          header: "Checkpoint 5.1",
          banca: "**Foco:** Sinônimos de Conjunções",
          statement:
            "Em *“O setor recebeu poucos recursos, **contudo** cumpriu todas as metas”*, a conjunção pode ser substituída sem perda de sentido por:",
          options: {
            A: "portanto",
            B: "porquanto",
            C: "entretanto",
            D: "consoante",
          },
          answer: "C",
          commentary:
            "*Contudo* é adversativa; seu sinônimo exato é **entretanto** (ou *porém, todavia, mas*). *Portanto* é conclusiva; *porquanto* é causal/explicativa; *consoante* é conformativa.",
        },
        {
          num: "2",
          header: "Checkpoint 5.2",
          banca: "**Foco:** Concessiva vs. Causal",
          statement:
            "Em *“**Conquanto** o prazo fosse curto, a comissão entregou o parecer”*, o conectivo destacado indica:",
          options: {
            A: "Causa.",
            B: "Concessão.",
            C: "Condição.",
            D: "Finalidade.",
          },
          answer: "B",
          commentary:
            "*Conquanto* é sinônimo exato de *embora* (conjunção subordinativa **concessiva**, exigindo subjuntivo *fosse*).",
        },
        {
          num: "3",
          header: "Checkpoint 5.3",
          banca: "**Foco:** À medida que vs. Na medida em que",
          statement:
            "Assinale a frase em que a locução conjuntiva está empregada com valor de **PROPORÇÃO** e grafia **CORRETA**:",
          options: {
            A: "À medida em que o tempo passa, o arquivo cresce.",
            B: "Na medida em que o tempo passa, o arquivo cresce.",
            C: "À medida que o tempo passa, o arquivo cresce.",
            D: "A medida que o tempo passa, o arquivo cresce.",
          },
          answer: "C",
          commentary:
            "Proporção exige **À medida que** (com crase e sem 'em'). *Na medida em que* expressa causa.",
        },
      ],
    },

    // =========================================================================
    // EIXO 6: SEMÂNTICA — HOMÔNIMOS, PARÔNIMOS E QUADRO FINAL
    // =========================================================================
    {
      id: "eixo-6",
      index: 6,
      title: "Semântica em Contexto — Homônimos, Parônimos e Revisão Geral",
      subtitle: "Homógrafos, homófonos, homônimos perfeitos, os 8 pares de parônimos de prova e o quadro comparativo final.",
      estimatedMinutes: 14,
      render: () => (
        <div className="space-y-7">
          <ProseSection number="1" title="Denotação vs. Conotação e Homônimos (O Som e a Grafia)">
            <p>
              Antes dos pares de palavras parecidas, domine dois planos de sentido — <strong>Denotação</strong> vs.{" "}
              <strong>Conotação</strong> — e os três tipos de palavras <strong>homônimas</strong> (que coincidem no som ou na escrita, mas têm significados totalmente distintos), entrando em cada caso com seus exemplos:
            </p>
          </ProseSection>

          <DefinitionBlocks
            title="Sentido Literal vs. Figurado — Um por Vez"
            items={[
              {
                term: "1. Denotação (Sentido Real / Dicionário)",
                badge: "D de Dicionário",
                accent: "indigo",
                summary: "A palavra é empregada com seu sentido literal, objetivo, exatamente como aparece registrada no dicionário.",
                examples: [
                  {
                    label: "Exemplo Literal",
                    sentence: (
                      <>
                        “A prefeitura pavimentou a <strong>pedra</strong> da rua principal.”
                      </>
                    ),
                    explanation: "'Pedra' refere-se ao material físico real, sem metáfora.",
                  },
                ],
              },
              {
                term: "2. Conotação (Sentido Figurado / Contexto)",
                badge: "C de Criatividade",
                accent: "amber",
                summary: "A palavra ganha sentido simbólico, metafórico ou expressivo dependente do contexto.",
                examples: [
                  {
                    label: "Exemplo Figurado",
                    sentence: (
                      <>
                        “Aquele parecer foi uma <strong>pedra</strong> no caminho da licitação.”
                      </>
                    ),
                    explanation: "'Pedra' significa obstáculo burocrático ou problema imprevisto — sentido figurado.",
                  },
                ],
              },
            ]}
          />

          <DefinitionBlocks
            title="Os 3 Tipos de Homônimos — Um por Vez com Exemplos"
            items={[
              {
                term: "1. Homógrafos (Mesma Grafia, Sons Diferentes)",
                badge: "Escrita igual · Som diferente",
                accent: "sky",
                summary: "Escrevem-se com exatamente as mesmas letras, mas a pronúncia (timbre aberto/fechado ou sílaba tônica) e a classe gramatical mudam.",
                examples: [
                  {
                    label: "Par 1 · O colher (verbo) × A colher (talher)",
                    sentence: (
                      <>
                        “Vou <strong>colher</strong> (ô) frutos com <strong>a colher</strong> (é) de aço.”
                      </>
                    ),
                    explanation: "Mesma grafia 'colher', mas timbre fechado no verbo (/ô/) e aberto no substantivo (/é/).",
                  },
                  {
                    label: "Par 2 · O almoço (nome) × Eu almoço (verbo)",
                    sentence: (
                      <>
                        “Durante o <strong>almoço</strong> (ô), eu <strong>almoço</strong> (ó) no refeitório.”
                      </>
                    ),
                    explanation: "'o almoço' tem /ô/ fechado (substantivo); 'eu almoço' tem /ó/ aberto (verbo).",
                  },
                ],
              },
              {
                term: "2. Homófonos (Mesmo Som, Grafias Diferentes)",
                badge: "Clássico teste de ortografia",
                accent: "rose",
                summary: "Soam de maneira idêntica ao ouvido, mas têm escrita e significados completamente diferentes. Em provas da ACCESS e VUNESP, memorize cada termo abaixo:",
                examples: [
                  {
                    label: "Sessão (com dois S)",
                    sentence: (
                      <>
                        “A <strong>sessão</strong> da Câmara Municipal durou duas horas.”
                      </>
                    ),
                    explanation: "Intervalo de tempo de uma reunião, audiência ou filme.",
                  },
                  {
                    label: "Seção ou Secção (com Ç)",
                    sentence: (
                      <>
                        “Entregue o protocolo na <strong>Seção</strong> de Arquivo.”
                      </>
                    ),
                    explanation: "Divisão física, departamento ou repartição pública.",
                  },
                  {
                    label: "Cessão (com C inicial)",
                    sentence: (
                      <>
                        “Foi assinada a <strong>cessão</strong> de servidores entre secretarias.”
                      </>
                    ),
                    explanation: "Ato de ceder ou transferir posse/uso de direitos ou bens.",
                  },
                  {
                    label: "Senso (com S)",
                    sentence: (
                      <>
                        “O servidor agiu com bom <strong>senso</strong> durante o atendimento.”
                      </>
                    ),
                    explanation: "Juízo, discernimento, bom senso.",
                  },
                  {
                    label: "Censo (com C)",
                    sentence: (
                      <>
                        “Os dados oficiais do <strong>Censo</strong> do IBGE orientam o orçamento.”
                      </>
                    ),
                    explanation: "Recenseamento, contagem estatística populacional.",
                  },
                  {
                    label: "Conserto (com S)",
                    sentence: (
                      <>
                        “O setor solicitou o <strong>conserto</strong> do computador da recepção.”
                      </>
                    ),
                    explanation: "Reparo de algo estragado.",
                  },
                  {
                    label: "Concerto (com C)",
                    sentence: (
                      <>
                        “A orquestra apresentou um <strong>concerto</strong> de piano no teatro municipal.”
                      </>
                    ),
                    explanation: "Apresentação musical artística.",
                  },
                ],
              },
              {
                term: "3. Homônimos Perfeitos (Mesmo Som E Mesma Escrita)",
                badge: "Escrita e som idênticos",
                accent: "emerald",
                summary: "Têm grafia e pronúncia totalmente iguais, distinguindo-se apenas pelo contexto da frase.",
                examples: [
                  {
                    label: "Exemplo 1 · Manga (fruta vs. peça de camisa)",
                    sentence: (
                      <>
                        “Sujei a <strong>manga</strong> da camisa com caldo de <strong>manga</strong>.”
                      </>
                    ),
                    explanation: "Idênticas no som e na escrita; só o contexto distingue peça de roupa de fruta.",
                  },
                  {
                    label: "Exemplo 2 · Cedo (horário vs. verbo ceder)",
                    sentence: (
                      <>
                        “Cheguei <strong>cedo</strong> e não <strong>cedo</strong> minha vez na fila.”
                      </>
                    ),
                    explanation: "O primeiro é advérbio de tempo; o segundo é o verbo 'ceder' conjugado.",
                  },
                ],
              },
            ]}
          />

          <ProseSection number="2" title="Parônimos: As Palavras Gêmeas Falsas">
            <p>
              <strong>Parônimos</strong> são palavras apenas <em>parecidas</em> na pronúncia e na escrita, mas com
              sentidos totalmente desconexos. Em provas para Oficial Administrativo, a banca adora cobrar estes 8 pares
              do vocabulário jurídico-administrativo:
            </p>
          </ProseSection>

          <FlipCardsGrid
            title="Guia Definitivo dos Parônimos de Prova (Clique para virar cada card)"
            cards={[
              {
                front: "RATIFICAR vs. RETIFICAR",
                hint: "Decretos e Editais",
                back: (
                  <>
                    <strong>Ratificar:</strong> confirmar, validar (<em>“ratificou o decreto”</em>).<br />
                    <strong>Retificar:</strong> corrigir, emendar (<em>“o edital foi retificado”</em>).
                  </>
                ),
              },
              {
                front: "MANDADO vs. MANDATO",
                hint: "Justiça vs. Política",
                back: (
                  <>
                    <strong>Mandado:</strong> ordem judicial escrita (<em>mandado de segurança</em>).<br />
                    <strong>Mandato:</strong> período político ou procuração (<em>mandato de 4 anos</em>).
                  </>
                ),
              },
              {
                front: "DEFERIR vs. DIFERIR",
                hint: "Rotina de Protocolo",
                back: (
                  <>
                    <strong>Deferir:</strong> conceder, aprovar (<em>“pedido de férias deferido”</em>).<br />
                    <strong>Diferir:</strong> adiar, prorrogar ou ser diferente.
                  </>
                ),
              },
              {
                front: "INFLIGIR vs. INFRINGIR",
                hint: "Pena vs. Regra",
                back: (
                  <>
                    <strong>Infligir:</strong> aplicar penalidade ou multa.<br />
                    <strong>Infringir:</strong> desrespeitar, violar norma ou lei.
                  </>
                ),
              },
              {
                front: "EMINENTE vs. IMINENTE",
                hint: "Ilustre vs. Imediato",
                back: (
                  <>
                    <strong>Eminente:</strong> ilustre, notável (<em>eminente jurista</em>).<br />
                    <strong>Iminente:</strong> prestes a acontecer (<em>nomeação iminente</em>).
                  </>
                ),
              },
              {
                front: "FLAGRANTE vs. FRAGRANTE",
                hint: "Ato vs. Perfume",
                back: (
                  <>
                    <strong>Flagrante:</strong> visto no exato momento da ação (<em>prisão em flagrante</em>).<br />
                    <strong>Fragrante:</strong> cheiroso, perfumado (<em>flores fragrantes</em>).
                  </>
                ),
              },
              {
                front: "DISCRIMINAR vs. DESCRIMINAR",
                hint: "Listar vs. Tirar Crime",
                back: (
                  <>
                    <strong>Discriminar:</strong> diferenciar, listar itens na nota.<br />
                    <strong>Descriminar:</strong> tirar o caráter de crime, descriminalizar.
                  </>
                ),
              },
              {
                front: "TRÁFEGO vs. TRÁFICO",
                hint: "Trânsito vs. Ilegal",
                back: (
                  <>
                    <strong>Tráfego:</strong> trânsito, circulação de veículos.<br />
                    <strong>Tráfico:</strong> comércio clandestino ilegal.
                  </>
                ),
              },
            ]}
          />

          <KeyTable
            title="Quadro Comparativo Geral — O que a Banca Tenta Fazer Você Marcar"
            headers={["❌ Frase Errada (Pegadinha)", "✅ Frase Correta (Norma Culta)", "Explicação Lógica"]}
            rows={[
              ["“Quando você ver o diretor, avise.”", <strong>“Quando você vir o diretor, avise.”</strong>, "Futuro do Subjuntivo de ver é vir; vier pertence a vir."],
              ["“A comissão interviu no caso.”", <strong>“A comissão interveio no caso.”</strong>, "Derivado de vir: se ele veio, então ele interveio."],
              ["“A assessora estava meia preocupada.”", <strong>“A assessora estava meio preocupada.”</strong>, "Meio = um pouco; advérbios são invariáveis."],
              ["“O edital foi ratificado para corrigir.”", <strong>“O edital foi retificado para corrigir.”</strong>, "Retificar é consertar/emendar; ratificar é confirmar."],
              ["“À medida em que o trabalho cresce...”", <strong>“À medida que o trabalho cresce...”</strong>, "A forma mista não existe; proporção é à medida que."],
              ["“O juiz expediu o mandato de busca.”", <strong>“O juiz expediu o mandado de busca.”</strong>, "Mandado = ordem judicial; mandato = cargo/procuração."],
            ]}
          />

          <FeynmanCard
            title="Síntese Feynman · Eixo 6 (Semântica e Parônimos)"
            lines={[
              "Ratificar confirma o que está certo; retificar conserta o que estava errado.",
              "O servidor trabalha na seção de arquivo; a reunião da comissão ocorre em sessão; a doação de bens é cessão.",
              "Mandado é a ordem judicial em papel; mandato é o período do cargo político.",
            ]}
          />
        </div>
      ),
      checkpointQuestions: [
        {
          num: "1",
          header: "Checkpoint 6.1",
          banca: "**Foco:** Homófonos (Sessão / Seção / Cessão)",
          statement:
            "Complete corretamente: *“Na ____ de Protocolo, formalizou-se a ____ de uso do prédio durante a ____ plenária.”*",
          options: {
            A: "sessão — seção — cessão",
            B: "seção — cessão — sessão",
            C: "cessão — sessão — seção",
            D: "seção — sessão — cessão",
          },
          answer: "B",
          commentary:
            "Departamento = **seção**; ato de ceder/transferir = **cessão**; tempo da reunião plenária = **sessão**.",
        },
        {
          num: "2",
          header: "Checkpoint 6.2",
          banca: "**Foco:** Ratificar vs. Retificar",
          statement:
            "A Prefeitura publicou nova portaria para **corrigir** o horário da prova. O verbo adequado para substituir o termo em negrito é:",
          options: {
            A: "ratificar",
            B: "retificar",
            C: "diferir",
            D: "descriminar",
          },
          answer: "B",
          commentary:
            "**Retificar** significa corrigir, emendar. *Ratificar* seria apenas confirmar sem alterar.",
        },
        {
          num: "3",
          header: "Checkpoint 6.3",
          banca: "**Foco:** Infligir vs. Infringir",
          statement:
            "Em *“A autoridade ____ multa pesada ao motorista que ____ o código de trânsito”*, preenchem corretamente as lacunas:",
          options: {
            A: "infringiu — infligiu",
            B: "infligiu — infringiu",
            C: "deferiu — diferiu",
            D: "eminente — iminente",
          },
          answer: "B",
          commentary:
            "Aplicar pena/multa = **infligir** (*infligiu*); desrespeitar/violar a norma = **infringir** (*infringiu*).",
        },
      ],
    },
  ],

  finalQuestionsTitle: "Bateria Final · 10 Questões Reais de Concursos Comentadas",
  finalQuestions: [
    {
      num: "1",
      header: "Questão 01",
      banca: "**Banca:** INSTITUTO ACCESS · Pref. Cataguases/MG (2024)",
      statement:
        "No trecho *“**Embora** a repartição pública dispusesse de recursos tecnológicos modernos, o atendimento presencial ainda demandava grande esforço dos servidores”*, a oração introduzida pelo conectivo destacado expressa ideia de:",
      options: {
        A: "Condição necessária para a realização da ação principal.",
        B: "Concessão, admitindo um fato contrário que não anula o evento da oração principal.",
        C: "Consequência imediata decorrente da modernização tecnológica do setor.",
        D: "Causa determinante para a morosidade verificada nos guichês de recepção.",
      },
      answer: "B",
      commentary:
        "A conjunção *embora* é subordinativa **concessiva**: reconhece um obstáculo real, mas que não impede o fato da oração principal.",
    },
    {
      num: "2",
      header: "Questão 02",
      banca: "**Banca:** VUNESP · Câmara de Fernandópolis/SP (2022)",
      statement:
        "Assinale a alternativa em que a forma verbal destacada está empregada em conformidade com o padrão culto:",
      options: {
        A: "Se o encarregado do protocolo **propor** uma reestruturação do fluxo, o setor aceitará.",
        B: "Quando o diretor **ver** os relatórios orçamentários, entenderá a necessidade.",
        C: "O secretário municipal **interveio** na discussão antes que os prazos expirassem.",
        D: "Se a comissão **revesse** o edital de concurso, encontraria a incongruência.",
      },
      answer: "C",
      commentary:
        "*Intervir* deriva de *vir* (ele veio → **ele interveio**). Nas demais: *propuser* (A), *vir* (B) e *revisse* (D).",
    },
    {
      num: "3",
      header: "Questão 03",
      banca: "**Banca:** AVANÇA SP · Câmara de Francisco Morato/SP (2026)",
      statement: "Assinale a frase em que o vocábulo destacado classifica-se como **ADVÉRBIO**:",
      options: {
        A: "O relator emitiu parecer **favorável** ao prosseguimento do projeto.",
        B: "Os candidatos responderam **bastante** tranquilos às arguições da banca.",
        C: "Foram encontradas **muitas** rasuras no livro oficial de atas.",
        D: "Os novos servidores chegaram à repartição **apressados**.",
      },
      answer: "B",
      commentary:
        "Em *bastante tranquilos*, *bastante* intensifica o adjetivo *tranquilos* (= muito) → **advérbio de intensidade** invariável.",
    },
    {
      num: "4",
      header: "Questão 04",
      banca: "**Banca:** INSTITUTO ACCESS · Pref. Itaguara/MG (2024)",
      statement:
        "Em *“A servidora atendeu aos munícipes com presteza, **mas** não conseguiu solucionar o caso de imediato”*, o conectivo destacado pode ser substituído, mantendo o sentido original, por:",
      options: {
        A: "porquanto.",
        B: "todavia.",
        C: "consoante.",
        D: "por conseguinte.",
      },
      answer: "B",
      commentary:
        "*Mas* é adversativa; seu sinônimo exato é **todavia**. *Porquanto* = porque; *consoante* = conforme; *por conseguinte* = portanto.",
    },
    {
      num: "5",
      header: "Questão 05",
      banca: "**Banca:** FUNDATEC · Pref. Getúlio Vargas/RS (2026)",
      statement:
        "Observe os parônimos destacados:\nI. O presidente **ratificou** a decisão anterior, confirmando todos os seus termos.\nII. O perito **retificou** o documento para corrigir o erro material de digitação.\nIII. O motorista **infligiu** as regras de circulação ao estacionar na vaga de emergência.\n\nEstá(ão) CORRETA(S):",
      options: {
        A: "Apenas I.",
        B: "Apenas I e II.",
        C: "Apenas II e III.",
        D: "I, II e III.",
      },
      answer: "B",
      commentary:
        "I e II estão corretas (*ratificar* = confirmar; *retificar* = corrigir). III está errada: violar regras é **infringir**, não *infligir*.",
    },
    {
      num: "6",
      header: "Questão 06",
      banca: "**Banca:** INSTITUTO ACCESS · Pref. Cataguases/MG (2024)",
      statement:
        "Analise a função da palavra **“A”** nos três períodos:\n1. Entregamos **a** documentação exigida ao protocolo.\n2. O chefe não compareceu **a** nenhuma reunião.\n3. O projeto era complexo, mas a equipe **a** concluiu.\n\nA classificação correta em 1, 2 e 3 é, respectivamente:",
      options: {
        A: "Artigo definido – Preposição – Pronome pessoal oblíquo.",
        B: "Preposição – Artigo definido – Pronome demonstrativo.",
        C: "Artigo definido – Pronome relativo – Preposição.",
        D: "Pronome pessoal oblíquo – Preposição – Artigo definido.",
      },
      answer: "A",
      commentary:
        "1: determina substantivo feminino (*o documento*) = **Artigo**; 2: regido por *comparecer* antes de *nenhuma* = **Preposição**; 3: substitui termo feminino = **Pronome oblíquo**.",
    },
    {
      num: "7",
      header: "Questão 07",
      banca: "**Banca:** VUNESP · Câmara de Itapeva/SP (2024)",
      statement:
        "No período *“O requerimento foi indeferido **na medida em que** os documentos obrigatórios não foram anexados no prazo”*, o conectivo destacado introduz valor de:",
      options: {
        A: "Proporção.",
        B: "Causa.",
        C: "Concessão.",
        D: "Finalidade.",
      },
      answer: "B",
      commentary:
        "**Na medida em que** (sem crase) equivale a *já que / porque* e expressa **Causa**. (Proporção seria *à medida que*).",
    },
    {
      num: "8",
      header: "Questão 08",
      banca: "**Banca:** OBJETIVA · Pref. Nonai/RS (2025)",
      statement:
        "Assinale a alternativa em que o termo destacado foi empregado com o significado **CORRETO**:",
      options: {
        A: "O magistrado expediu o **mandato** de busca e apreensão.",
        B: "O prazo de recurso estava **preste a expirar**.",
        C: "Os servidores aguardam a decisão que está **iminente**.",
        D: "A autoridade suspendeu o processo para **descriminar** as despesas.",
      },
      answer: "C",
      commentary:
        "*Iminente* = prestes a acontecer. Nas demais: *mandado* (A), *prestes* (B) e *discriminar* (D).",
    },
    {
      num: "9",
      header: "Questão 09",
      banca: "**Banca:** INSTITUTO CONSULPLAN · Câmara de Caratinga/MG (2024)",
      statement:
        "Em *“O processo tramitou com celeridade, contudo a votação **gerou** intensos debates”*, o verbo destacado encontra-se no:",
      options: {
        A: "Pretérito Perfeito do Modo Indicativo.",
        B: "Pretérito Imperfeito do Modo Subjuntivo.",
        C: "Pretérito Mais-que-perfeito do Modo Indicativo.",
        D: "Futuro do Pretérito do Modo Indicativo.",
      },
      answer: "A",
      commentary:
        "*Gerou* indica ação pontual e concluída no passado — **Pretérito Perfeito do Modo Indicativo**.",
    },
    {
      num: "10",
      header: "Questão 10",
      banca: "**Banca:** INSTITUTO ACCESS · UFAC (2026 — Assistente em Administração)",
      statement:
        "Em *“A equipe encontrava-se **meio** apreensiva”*, assinale a afirmativa **CORRETA** sobre o vocábulo destacado:",
      options: {
        A: "É numeral fracionário e deveria estar no feminino (*meia*).",
        B: "É adjetivo qualificativo e flexiona para concordar com o sujeito.",
        C: "É advérbio de intensidade com sentido de 'um pouco' e, portanto, rigorosamente invariável.",
        D: "É preposição acidental que introduz uma oração subordinada.",
      },
      answer: "C",
      commentary:
        "*Meio* modifica o adjetivo *apreensiva* (= um pouco apreensiva), sendo **advérbio de intensidade invariável**.",
    },
  ],
  checklistItems: [
    "Consigo explicar a diferença visual entre Pretérito Perfeito (foto fechada) e Imperfeito (filme habitual)?",
    "Sei conjugar ter/vir e derivados no singular/plural (mantém / mantêm e interveio)?",
    "Domino o duelo VER vs. VIR no Futuro do Subjuntivo (quando eu vir / quando eu vier)?",
    "Sei por que o advérbio é invariável e nunca digo 'ela está meia cansada'?",
    "Sei diferenciar 'A' preposição (vira ao), 'A' artigo (vira o) e 'A' pronome (substitui nome)?",
    "Compreendo Adversativa (mas + indicativo) vs. Concessiva (embora + subjuntivo) e À medida que vs. Na medida em que?",
    "Sei distinguir ratificar/retificar, mandado/mandato, deferir/diferir, infligir/infringir e sessão/seção/cessão?",
  ],
};

export default portuguesSemana03;
