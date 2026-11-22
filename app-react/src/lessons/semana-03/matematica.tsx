import type { RichLessonModule } from "@/types";
import {
  AnalogyBox,
  ConceptCard,
  FeynmanCard,
  FlipCardsGrid,
  FormulaSpotlight,
  GuidedCalcCard,
  GuidedCalcGrid,
  KeyTable,
  MathStack,
  MathTex,
  ProseSection,
  StepByStep,
  TrapAlert,
} from "@/components/edu";

export const matematicaSemana03: RichLessonModule = {
  id: "w3_rlm_doc0",
  blockId: "w3_rlm",
  docIndex: 0,
  title: "Semana 03: Matemática e RLM — Radiciação, Regra de Três e Porcentagem",
  shortTitle: "Aula Interativa · 3 Eixos + Checkpoints + 6 Questões",
  subtitle:
    "Construção lógica passo a passo (do zero ao avançado), resolução organizada no estilo papel e caneta, casos guiados e questões reais comentadas.",
  introRender: () => (
    <ConceptCard
      title="O que você vai dominar nesta Semana 03"
      badge="Foco: Oficial Administrativo · Nível Médio"
      accent="indigo"
      icon="sparkle"
    >
      <p>
        Nesta semana, avançamos sobre os <strong>três pilares mais frequentes em provas municipais do Instituto ACCESS</strong>:
        Radiciação completa (incluindo expoente fracionário e racionalização), Regra de Três Simples e Composta (sem
        errar o sentido das setas) e Porcentagem com Fator de Multiplicação e variações sucessivas.
      </p>
      <p>
        Todo o conteúdo integral da aula foi organizado em <strong>3 Eixos guiados</strong> — com bloquinhos de cálculo
        passo a passo, <strong>3 questões diretas de checkpoint ao final de cada eixo</strong> e a{" "}
        <strong>Bateria Final de 6 Questões Reais Comentadas</strong>.
      </p>
    </ConceptCard>
  ),
  axes: [
    // =========================================================================
    // EIXO 1: RADICIAÇÃO COMPLETA
    // =========================================================================
    {
      id: "eixo-1",
      index: 1,
      title: "Radiciação Completa — Do Expoente Fracionário à Racionalização",
      subtitle:
        "Operação reversa da potência, anatomia do radical, regra dos sinais, Sol & Sombra, simplificação e racionalização.",
      estimatedMinutes: 18,
      render: () => (
        <div className="space-y-7">
          <ProseSection number="1" title="O que a Radiciação Faz na Realidade? (A Operação Reversa)">
            <p>
              Na Semana 01, vimos a <strong>potenciação</strong>: você tem a <strong>base</strong> e o{" "}
              <strong>expoente</strong> e pergunta qual é o resultado multiplicado. Exemplo:{" "}
              <em>“Se o lado de uma sala quadrada mede 5 m, qual é a área?”</em>
            </p>
            <MathStack
              compact
              lines={[
                {
                  label: "Potência",
                  tex: "5^2 = 25\\text{ m}^2",
                  note: "Você tinha o lado (5) e descobriu a área (25).",
                },
              ]}
            />
            <p>
              A <strong>radiciação</strong> faz a pergunta no sentido contrário: ela entrega o resultado pronto (a área{" "}
              <MathTex tex="= 25\text{ m}^2" /> ou o volume de um cubo <MathTex tex="= 64\text{ m}^3" />) e pergunta:{" "}
              <strong>“Qual número positivo multiplicado por si mesmo n vezes produziu esse valor?”</strong>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <MathStack
                compact
                lines={[
                  { label: "Raiz quadrada", tex: "\\sqrt{25} = 5", highlight: true },
                  { tex: "5^2 = 5 \\times 5 = 25", note: "Prova real" },
                ]}
              />
              <MathStack
                compact
                lines={[
                  { label: "Raiz cúbica", tex: "\\sqrt[3]{64} = 4", highlight: true },
                  { tex: "4^3 = 4 \\times 4 \\times 4 = 64", note: "Prova real" },
                ]}
              />
            </div>
          </ProseSection>

          <ProseSection number="2" title="Anatomia do Radical e a Regra dos Sinais (Índice Par vs. Índice Ímpar)">
            <p>
              Toda expressão radical <MathTex tex="\sqrt[n]{a} = b" /> possui quatro peças com funções bem definidas:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-[15px]">
              <li>
                <strong>Índice (<MathTex tex="n" />):</strong> o número pequeno que fica em cima do “V” do radical. Ele
                diz <strong>quantas vezes</strong> a resposta precisa multiplicar a si mesma.{" "}
                <em>(Quando não aparece nada escrito, o índice é obrigatoriamente <strong>2</strong> — raiz quadrada).</em>
              </li>
              <li>
                <strong>Radical (<MathTex tex="\sqrt{\;\;}" />):</strong> o símbolo da operação.
              </li>
              <li>
                <strong>Radicando (<MathTex tex="a" />):</strong> o número que está protegido debaixo do teto.
              </li>
              <li>
                <strong>Raiz (<MathTex tex="b" />):</strong> o resultado final da conta (
                <MathTex tex="\sqrt[n]{a} = b \iff b^n = a" />).
              </li>
            </ul>
          </ProseSection>

          <FormulaSpotlight
            title="Anatomia do Radical"
            formulaTex="\sqrt[n]{a} = b \iff b^n = a"
            note={
              <>
                Exemplo: <MathTex tex="\sqrt[4]{81} = 3" /> porque <MathTex tex="3^4 = 81" />. Se o índice estiver
                oculto, vale sempre <strong>2</strong> (raiz quadrada).
              </>
            }
            legend={[
              { symbol: "n", meaning: "Índice (quantas vezes multiplica; oculto = 2)" },
              { symbol: "a", meaning: "Radicando (conteúdo interno debaixo do teto)" },
              { symbol: "b", meaning: "Raiz (resultado final da operação)" },
            ]}
          />

          <GuidedCalcGrid>
            <GuidedCalcCard
              title={
                <span>
                  Índice PAR (<MathTex tex="2, 4, 6\dots" />)
                </span>
              }
              badge="Proibido negativo em ℝ"
              accent="rose"
              banner={
                <span>
                  <strong>NÃO aceita</strong> radicando negativo no conjunto dos Reais (<MathTex tex="\mathbb{R}" />).
                  Todo número real elevado a expoente par fica positivo ou zero.
                </span>
              }
              rows={[
                {
                  badge: "Teste com −9",
                  badgeVariant: "danger",
                  description: (
                    <>
                      Precisamos de um número real que, multiplicado por ele mesmo 2 vezes, dê <MathTex tex="-9" />:
                    </>
                  ),
                  mathLines: [
                    { tex: "(+3) \\times (+3) = +9", note: "Deu positivo!" },
                    { tex: "(-3) \\times (-3) = +9", note: "Regra dos sinais também dá positivo!" },
                    { tex: "\\sqrt{-9} \\notin \\mathbb{R} \\quad \\text{e} \\quad \\sqrt{-16} \\notin \\mathbb{R}" },
                  ],
                },
                {
                  badge: "Sinal do lado de fora",
                  badgeVariant: "default",
                  description: "Cuidado: se o menos estiver FORA da raiz, calcula-se normalmente:",
                  mathLines: [
                    { tex: "-\\sqrt{9} = -(3) = -3", highlight: true },
                    { tex: "-\\sqrt{16} = -(4) = -4" },
                  ],
                },
              ]}
            />

            <GuidedCalcCard
              title={
                <span>
                  Índice ÍMPAR (<MathTex tex="3, 5, 7\dots" />)
                </span>
              }
              badge="Conserva o sinal"
              accent="emerald"
              banner={
                <span>
                  <strong>ACEITA normalmente</strong> radicando negativo: multiplicar quantidade ímpar de fatores
                  negativos preserva o sinal negativo no resultado.
                </span>
              }
              rows={[
                {
                  badge: "Prova passo a passo",
                  badgeVariant: "success",
                  description: (
                    <>
                      Teste <MathTex tex="\sqrt[3]{-8}" /> multiplicando <MathTex tex="-2" /> três vezes:
                    </>
                  ),
                  mathLines: [
                    { tex: "(-2) \\times (-2) \\times (-2)" },
                    { tex: "= (+4) \\times (-2)" },
                    { tex: "= -8", note: "Fechou!" },
                    { tex: "\\sqrt[3]{-8} = -2", highlight: true },
                  ],
                },
                {
                  badge: "Outros clássicos",
                  badgeVariant: "default",
                  mathLines: [
                    { tex: "\\sqrt[3]{-27} = -3", note: "pois (−3)³ = −27" },
                    { tex: "\\sqrt[5]{-32} = -2", note: "pois (−2)⁵ = −32" },
                  ],
                },
              ]}
            />
          </GuidedCalcGrid>

          <ProseSection number="3" title="Expoente Fracionário: A Lógica da 'Regra do Sol e da Sombra'">
            <p>
              Por que escrever <MathTex tex="8^{\frac{1}{3}}" /> significa o mesmo que <MathTex tex="\sqrt[3]{8}" />?
              Pela regra de potências da Semana 01, multiplicar potências de mesma base <strong>soma os expoentes</strong>.
              Veja no papel o que acontece quando multiplicamos <MathTex tex="8^{\frac{1}{3}}" /> por ele mesmo 3 vezes:
            </p>
            <MathStack
              showFlowArrows
              lines={[
                { tex: "8^{\\frac{1}{3}} \\times 8^{\\frac{1}{3}} \\times 8^{\\frac{1}{3}}", note: "Mesma base → soma os expoentes" },
                { tex: "= 8^{\\frac{1}{3} + \\frac{1}{3} + \\frac{1}{3}}" },
                { tex: "= 8^{\\frac{3}{3}}" },
                { tex: "= 8^1 = 8", highlight: true },
              ]}
            />
            <p>
              Ora, o único número positivo que multiplicado por si mesmo 3 vezes dá 8 é justamente a{" "}
              <strong>raiz cúbica de 8</strong> (<MathTex tex="\sqrt[3]{8} = 2" />)! Daí nasce a lei universal de
              conversão entre potência e raiz:
            </p>
          </ProseSection>

          <FormulaSpotlight
            title="Lei Universal do Expoente Fracionário"
            formulaTex="a^{\frac{m}{n}} = \sqrt[n]{a^m}"
            legend={[
              { symbol: "m", meaning: "Numerador (estava no Sol → entra na Sombra como potência)" },
              { symbol: "n", meaning: "Denominador (estava na Sombra → vai para o Sol como índice)" },
            ]}
          />

          <AnalogyBox title="Analogia da Regra do Sol e da Sombra" tag="Para nunca inverter quem vai dentro ou fora">
            <p>
              Imagine a fração <MathTex tex="\frac{m}{n}" /> no expoente: o número de cima (<MathTex tex="m" />) está
              tomando <strong>Sol</strong>; o de baixo (<MathTex tex="n" />) está na <strong>Sombra</strong>.
            </p>
            <p>
              Ao transformar em raiz, quem estava no <strong>Sol (<MathTex tex="m" />)</strong> entra para a{" "}
              <strong>Sombra</strong> (debaixo do teto do radical, como expoente do <MathTex tex="a" />), e quem estava
              na <strong>Sombra (<MathTex tex="n" />)</strong> sai para o <strong>Sol</strong> (no índice do radical)!
            </p>
          </AnalogyBox>

          <GuidedCalcCard
            title="Aplicando Sol & Sombra no Papel (Passo a Passo Vertical)"
            accent="sky"
            badge="2 Exemplos de Prova"
            rows={[
              {
                badge: "Exemplo 1",
                badgeVariant: "sky",
                description: (
                  <>
                    Calcular <MathTex tex="8^{\frac{2}{3}}" /> (o <MathTex tex="3" /> sai para o índice e o{" "}
                    <MathTex tex="2" /> entra dentro da raiz):
                  </>
                ),
                showFlowArrows: true,
                mathLines: [
                  { tex: "8^{\\frac{2}{3}} = \\sqrt[3]{8^2}" },
                  { tex: "= \\sqrt[3]{64}" },
                  { tex: "= 4", note: "Ou direto: (∛8)² = 2² = 4", highlight: true },
                ],
              },
              {
                badge: "Exemplo 2 (Negativo)",
                badgeVariant: "amber",
                description: (
                  <>
                    Com expoente negativo <MathTex tex="27^{-\frac{1}{3}}" />, primeiro o sinal menos inverte a base:
                  </>
                ),
                showFlowArrows: true,
                mathLines: [
                  { tex: "27^{-\\frac{1}{3}} = \\left(\\frac{1}{27}\\right)^{\\frac{1}{3}}", note: "Inverte a base" },
                  { tex: "= \\sqrt[3]{\\frac{1}{27}}" },
                  { tex: "= \\frac{1}{3}", highlight: true },
                ],
              },
            ]}
          />

          <ProseSection number="4" title="Simplificação de Raízes Não Exatas (Extraindo Fatores)">
            <p>
              Na Semana 01, vimos raízes exatas como <MathTex tex="\sqrt{144} = 12" />. Mas e quando o número{" "}
              <strong>não</strong> tem raiz exata, como <MathTex tex="\sqrt{50}" />, <MathTex tex="\sqrt{72}" /> ou{" "}
              <MathTex tex="\sqrt[3]{54}" />? Em provas, a banca nunca escreve o decimal aproximado (
              <MathTex tex="7{,}071\dots" />); ela escreve na <strong>forma simplificada</strong>.
            </p>
            <p>
              <strong>Como funciona na prática?</strong> Você fatora o radicando em números primos e junta grupos do
              tamanho exato do <strong>índice <MathTex tex="n" /></strong> (pares se o índice for 2; trincas se o índice
              for 3). Quem fecha um grupo inteiro <strong>paga o pedágio</strong> (perde o expoente{" "}
              <MathTex tex="n" />) e <strong>sai</strong> da raiz; quem sobra sozinho <strong>fica preso</strong>{" "}
              dentro do radical.
            </p>
          </ProseSection>

          <GuidedCalcCard
            title="Exemplos Práticos de Simplificação (Papel e Caneta)"
            accent="indigo"
            badge="Extração de Fatores"
            rows={[
              {
                badge: "√50 (Índice 2)",
                description: (
                  <>
                    Como o índice é <strong>2</strong>, junte pares iguais na fatoração de{" "}
                    <MathTex tex="50" />:
                  </>
                ),
                showFlowArrows: true,
                mathLines: [
                  { tex: "50 = 2 \\times 25 = 2 \\times 5^2" },
                  { tex: "\\sqrt{50} = \\sqrt{5^2 \\times 2}", note: "5² fechou um par → sai como 5; o 2 fica preso" },
                  { tex: "= 5\\sqrt{2}", highlight: true },
                ],
              },
              {
                badge: "√72 (Índice 2)",
                description: (
                  <>
                    Fatore <MathTex tex="72" /> separando o maior quadrado perfeito (<MathTex tex="36 = 6^2" />):
                  </>
                ),
                showFlowArrows: true,
                mathLines: [
                  { tex: "72 = 36 \\times 2 = 6^2 \\times 2" },
                  { tex: "\\sqrt{72} = \\sqrt{6^2 \\times 2}" },
                  { tex: "= 6\\sqrt{2}", highlight: true },
                ],
              },
              {
                badge: "∛54 (Índice 3)",
                badgeVariant: "success",
                description: (
                  <>
                    Como o índice agora é <strong>3</strong>, precisamos de trincas (<MathTex tex="x^3" />):
                  </>
                ),
                showFlowArrows: true,
                mathLines: [
                  { tex: "54 = 27 \\times 2 = 3^3 \\times 2" },
                  { tex: "\\sqrt[3]{54} = \\sqrt[3]{3^3 \\times 2}", note: "3³ fechou uma trinca → sai como 3" },
                  { tex: "= 3\\sqrt[3]{2}", highlight: true },
                ],
              },
            ]}
          />

          <ProseSection number="5" title="As 4 Propriedades Sagradas e Operações com Radicais">
            <p>
              Com o <strong>mesmo índice <MathTex tex="n" /></strong>, multiplicação, divisão e raiz de raiz seguem regras
              diretas. Já na soma e na subtração, a regra muda completamente — é exatamente onde as bancas colocam a
              maior armadilha da prova:
            </p>
          </ProseSection>

          <GuidedCalcGrid>
            <GuidedCalcCard
              title="Multiplicação, Divisão & Raiz de Raiz"
              badge="Pode juntar/separar"
              accent="emerald"
              banner={
                <span>
                  Com o <strong>mesmo índice <MathTex tex="n" /></strong>, o produto e a divisão permitem juntar tudo sob
                  um único radical livremente:
                </span>
              }
              rows={[
                {
                  badge: "Produto",
                  badgeVariant: "success",
                  mathLines: [
                    { label: "Regra", tex: "\\sqrt[n]{a} \\cdot \\sqrt[n]{b} = \\sqrt[n]{a \\cdot b}" },
                    { label: "Ex.", tex: "\\sqrt{3} \\cdot \\sqrt{12} = \\sqrt{36} = 6", highlight: true },
                  ],
                },
                {
                  badge: "Divisão",
                  badgeVariant: "success",
                  mathLines: [
                    { label: "Regra", tex: "\\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}} = \\sqrt[n]{\\frac{a}{b}}" },
                    { label: "Ex.", tex: "\\frac{\\sqrt{48}}{\\sqrt{3}} = \\sqrt{16} = 4", highlight: true },
                  ],
                },
                {
                  badge: "Raiz de Raiz",
                  badgeVariant: "default",
                  mathLines: [
                    { label: "Regra", tex: "\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[m \\cdot n]{a}" },
                    { label: "Ex.", tex: "\\sqrt{\\sqrt[3]{64}} = \\sqrt[6]{64} = 2", highlight: true },
                  ],
                },
              ]}
            />

            <GuidedCalcCard
              title="Soma e Subtração de Radicais"
              badge="Cuidado Crítico"
              accent="rose"
              banner={
                <span>
                  <strong>JAMAIS some os números dentro da raiz!</strong> Só podemos somar ou subtrair os coeficientes de{" "}
                  <strong>radicais idênticos</strong> (como se fossem letras em álgebra:{" "}
                  <MathTex tex="3x + 5x = 8x" />).
                </span>
              }
              rows={[
                {
                  badge: "Prova / Proibido",
                  badgeVariant: "danger",
                  description: "Veja por que separar uma soma dentro da raiz dá resultado errado:",
                  mathLines: [
                    { tex: "\\sqrt{9 + 16} = \\sqrt{25} = 5" },
                    { tex: "\\sqrt{9} + \\sqrt{16} = 3 + 4 = 7" },
                    { tex: "\\sqrt{2} + \\sqrt{3} \\neq \\sqrt{5}", note: "PROIBIDO somar dentro!" },
                  ],
                },
                {
                  badge: "Semelhantes",
                  badgeVariant: "success",
                  description: "Com o mesmo radical por fora, basta juntar os coeficientes:",
                  mathLines: [{ tex: "3\\sqrt{2} + 5\\sqrt{2} = 8\\sqrt{2}", highlight: true }],
                },
                {
                  badge: "Simplificar Antes",
                  badgeVariant: "amber",
                  description: "Se parecerem diferentes, fatore e simplifique primeiro:",
                  showFlowArrows: true,
                  mathLines: [
                    { tex: "\\sqrt{18} + \\sqrt{50}" },
                    { tex: "= 3\\sqrt{2} + 5\\sqrt{2}" },
                    { tex: "= 8\\sqrt{2}", highlight: true },
                  ],
                },
              ]}
            />
          </GuidedCalcGrid>

          <ProseSection number="6" title="Racionalização de Denominadores (Tirar a Raiz de Baixo)">
            <p>
              Imagine tentar calcular na mão <MathTex tex="\frac{1}{\sqrt{2}} = \frac{1}{1{,}4142135\dots}" />. Dividir 1
              por um número infinito não periódico dá um trabalho imenso. Mas se multiplicarmos em cima e embaixo por{" "}
              <MathTex tex="\sqrt{2}" /> (ou seja, multiplicarmos por <strong>“1 disfarçado”</strong>{" "}
              <MathTex tex="= \frac{\sqrt{2}}{\sqrt{2}}" />), não alteramos o valor da fração e o denominador vira
              inteiro:
            </p>
            <MathStack
              showFlowArrows
              lines={[
                { tex: "\\frac{1}{\\sqrt{2}} \\times \\frac{\\sqrt{2}}{\\sqrt{2}}" },
                { tex: "= \\frac{\\sqrt{2}}{(\\sqrt{2})^2}" },
                { tex: "= \\frac{\\sqrt{2}}{2}", note: "Dividir 1,4142... por 2 (= 0,7071...) é instantâneo!", highlight: true },
              ]}
            />
            <p>Há <strong>2 casos</strong> cobrados em provas:</p>
          </ProseSection>

          <GuidedCalcGrid>
            <GuidedCalcCard
              title={
                <span>
                  Caso 1 — Raiz Sozinha Embaixo (<MathTex tex="\frac{A}{\sqrt{b}}" />)
                </span>
              }
              badge="1 Termo no Denominador"
              accent="indigo"
              banner={
                <span>
                  Vale para <MathTex tex="\frac{A}{\sqrt{b}}" /> ou <MathTex tex="\frac{A}{k\sqrt{b}}" />: multiplique
                  em cima e embaixo pela <strong>própria raiz <MathTex tex="\sqrt{b}" /></strong>.
                </span>
              }
              rows={[
                {
                  badge: "Exemplo Resolvido",
                  badgeVariant: "default",
                  description: (
                    <>
                      Racionalizar <MathTex tex="\frac{12}{\sqrt{3}}" /> multiplicando em cima e embaixo por{" "}
                      <MathTex tex="\sqrt{3}" />:
                    </>
                  ),
                  showFlowArrows: true,
                  mathLines: [
                    { tex: "\\frac{12}{\\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}}" },
                    { tex: "= \\frac{12\\sqrt{3}}{\\sqrt{3} \\cdot \\sqrt{3}}" },
                    { tex: "= \\frac{12\\sqrt{3}}{3}" },
                    { tex: "= 4\\sqrt{3}", highlight: true },
                  ],
                },
              ]}
            />

            <GuidedCalcCard
              title={
                <span>
                  Caso 2 — Soma ou Subtração (<MathTex tex="\frac{A}{\sqrt{b} \pm \sqrt{c}}" />)
                </span>
              }
              badge="Conjugado"
              accent="emerald"
              banner={
                <span>
                  Se multiplicar só por <MathTex tex="\sqrt{b}" />, a outra raiz continua lá! Usamos o produto notável{" "}
                  <MathTex tex="(x+y)(x-y) = x^2 - y^2" />, multiplicando pelo <strong>conjugado</strong> (mesmos termos
                  com o <strong>sinal do meio invertido</strong>).
                </span>
              }
              rows={[
                {
                  badge: "Exemplo Resolvido",
                  badgeVariant: "success",
                  description: (
                    <>
                      Racionalizar <MathTex tex="\frac{4}{\sqrt{5} - \sqrt{3}}" /> multiplicando pelo conjugado{" "}
                      <MathTex tex="(\sqrt{5} + \sqrt{3})" />:
                    </>
                  ),
                  showFlowArrows: true,
                  mathLines: [
                    { tex: "\\frac{4}{\\sqrt{5} - \\sqrt{3}} \\cdot \\frac{\\sqrt{5} + \\sqrt{3}}{\\sqrt{5} + \\sqrt{3}}" },
                    { tex: "= \\frac{4(\\sqrt{5} + \\sqrt{3})}{(\\sqrt{5})^2 - (\\sqrt{3})^2}" },
                    { tex: "= \\frac{4(\\sqrt{5} + \\sqrt{3})}{5 - 3}" },
                    { tex: "= \\frac{4(\\sqrt{5} + \\sqrt{3})}{2}" },
                    { tex: "= 2(\\sqrt{5} + \\sqrt{3})", highlight: true },
                  ],
                },
              ]}
            />
          </GuidedCalcGrid>

          <StepByStep
            title="Laboratório Guiado 1 · Simplificação + Racionalização"
            problem={
              <>
                Reduza à forma mais simples a expressão:{" "}
                <MathTex tex="E = \sqrt{50} + \sqrt{18} - \frac{12}{\sqrt{2}}" />
              </>
            }
            steps={[
              {
                title: "Simplifique os radicais não exatos",
                badge: "Passo 1",
                content: "Fatore cada radicando e extraia os quadrados perfeitos:",
                mathLines: [
                  { tex: "\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt{2}" },
                  { tex: "\\sqrt{18} = \\sqrt{9 \\times 2} = 3\\sqrt{2}" },
                ],
              },
              {
                title: (
                  <>
                    Racionalize o termo <MathTex tex="\frac{12}{\sqrt{2}}" /> (tirar a raiz de baixo)
                  </>
                ),
                badge: "Passo 2",
                content: "Multiplique em cima e embaixo por √2:",
                showFlowArrows: true,
                mathLines: [
                  { tex: "\\frac{12}{\\sqrt{2}} \\times \\frac{\\sqrt{2}}{\\sqrt{2}}" },
                  { tex: "= \\frac{12\\sqrt{2}}{2}" },
                  { tex: "= 6\\sqrt{2}", highlight: true },
                ],
              },
              {
                title: (
                  <>
                    Junte os radicais semelhantes (todos agora têm <MathTex tex="\sqrt{2}" />)
                  </>
                ),
                badge: "Passo 3",
                showFlowArrows: true,
                mathLines: [
                  { tex: "E = 5\\sqrt{2} + 3\\sqrt{2} - 6\\sqrt{2}" },
                  { tex: "E = (5 + 3 - 6)\\sqrt{2}" },
                  { tex: "E = 2\\sqrt{2}", highlight: true },
                ],
              },
            ]}
          />

          <FeynmanCard
            title="Síntese Feynman · Eixo 1 (Radiciação em 3 Linhas)"
            lines={[
              {
                render: (
                  <>
                    <MathTex tex="\sqrt[n]{a}" /> pergunta qual número elevado a <MathTex tex="n" /> dá{" "}
                    <MathTex tex="a" />; índice par rejeita negativos em <MathTex tex="\mathbb{R}" />, enquanto índice
                    ímpar preserva o sinal, e <MathTex tex="a^{\frac{m}{n}} = \sqrt[n]{a^m}" /> (“Sol entra na sombra”).
                  </>
                ),
                copyText:
                  "Raiz n-ésima de a pergunta qual número elevado a n dá a; índice par rejeita negativos em ℝ, enquanto índice ímpar preserva o sinal, e a^(m/n) = ⁿ√(a^m) ('Sol entra na sombra').",
              },
              {
                render: (
                  <>
                    Raízes não exatas simplificam-se fatorando e extraindo grupos de tamanho <MathTex tex="n" />; na
                    soma e subtração, só juntamos coeficientes de radicais idênticos após simplificá-los.
                  </>
                ),
                copyText:
                  "Raízes não exatas simplificam-se fatorando e extraindo grupos de tamanho n; na soma/subtração só juntamos radicais idênticos após simplificá-los.",
              },
              {
                render: (
                  <>
                    Racionalizar multiplica numerador e denominador por <MathTex tex="\sqrt{b}" /> (termo isolado) ou
                    pelo conjugado (troca do sinal do meio) para eliminar a raiz do denominador.
                  </>
                ),
                copyText:
                  "Racionalizar multiplica numerador e denominador por √b (termo isolado) ou pelo conjugado (troca do sinal do meio) para eliminar a raiz do denominador.",
              },
            ]}
          />
        </div>
      ),
      checkpointQuestions: [
        {
          num: "1",
          header: "Checkpoint 1.1",
          banca: "**Foco:** Regra dos Sinais & Expoente Fracionário",
          statement:
            "Assinale a alternativa que apresenta uma igualdade **CORRETA** no conjunto dos números reais ($\\mathbb{R}$):",
          options: {
            A: "$\\sqrt{-16} = -4$",
            B: "$\\sqrt[3]{-27} = -3$",
            C: "$8^{\\frac{2}{3}} = 16$",
            D: "$\\sqrt{9} + \\sqrt{16} = \\sqrt{25}$",
          },
          answer: "B",
          commentary:
            "Índice ímpar ($3$) aceita radicando negativo:\n\n$$(-3)^3 = (-3)\\cdot(-3)\\cdot(-3) = -27 \\implies \\sqrt[3]{-27} = \\mathbf{-3}$$\n\n- **(A) Errada:** índice par não aceita negativo em $\\mathbb{R}$.\n- **(C) Errada:** $8^{2/3} = \\sqrt[3]{8^2} = \\sqrt[3]{64} = 4$.\n- **(D) Errada:** $\\sqrt{9} + \\sqrt{16} = 3 + 4 = 7 \\neq 5$.",
        },
        {
          num: "2",
          header: "Checkpoint 1.2",
          banca: "**Foco:** Simplificação e Soma de Radicais",
          statement: "Qual é o valor simplificado da expressão $\\sqrt{18} + \\sqrt{50} - \\sqrt{8}$?",
          options: {
            A: "$6\\sqrt{2}$",
            B: "$8\\sqrt{2}$",
            C: "$\\sqrt{60}$",
            D: "$10\\sqrt{2}$",
          },
          answer: "A",
          commentary:
            "Simplificando cada radical primeiro:\n- $\\sqrt{18} = \\sqrt{9 \\times 2} = 3\\sqrt{2}$\n- $\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt{2}$\n- $\\sqrt{8} = \\sqrt{4 \\times 2} = 2\\sqrt{2}$\n\nAgora juntando os radicais semelhantes:\n\n$$3\\sqrt{2} + 5\\sqrt{2} - 2\\sqrt{2} = (3 + 5 - 2)\\sqrt{2} = \\mathbf{6\\sqrt{2}}$$",
        },
        {
          num: "3",
          header: "Checkpoint 1.3",
          banca: "**Foco:** Racionalização de Denominadores",
          statement: "Ao racionalizar o denominador da fração $\\dfrac{12}{\\sqrt{3}}$, obtém-se:",
          options: {
            A: "$4$",
            B: "$12\\sqrt{3}$",
            C: "$4\\sqrt{3}$",
            D: "$3\\sqrt{4}$",
          },
          answer: "C",
          commentary:
            "Multiplicando em cima e embaixo por $\\sqrt{3}$:\n\n$$\\frac{12}{\\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}} \\implies \\frac{12\\sqrt{3}}{3} \\implies \\mathbf{4\\sqrt{3}}$$",
        },
      ],
    },

    // =========================================================================
    // EIXO 2: REGRA DE TRÊS SIMPLES E COMPOSTA
    // =========================================================================
    {
      id: "eixo-2",
      index: 2,
      title: "Regra de Três Simples e Composta — A Lógica das Grandezas",
      subtitle:
        "Qual problema real ela resolve, Método das Setas (GDP vs. GIP), Composta passo a passo e Processo ÷ Produto.",
      estimatedMinutes: 18,
      render: () => (
        <div className="space-y-7">
          <ProseSection number="1" title="Qual Problema Real a Regra de Três Resolve?">
            <p>
              Você conhece <strong>três valores</strong> de uma relação proporcional na rotina administrativa e precisa
              descobrir o <strong>quarto valor (<MathTex tex="x" />)</strong> — por exemplo:{" "}
              <em>
                “Se 3 impressoras do setor de protocolo imprimem 900 guias em 2 horas, quantas horas levarão 5
                impressoras para imprimir 3.000 guias?”
              </em>
            </p>
            <p>
              Na Semana 02, aprendemos a montar proporções (<MathTex tex="\frac{a}{b}=\frac{c}{d}" />). A{" "}
              <strong>Regra de Três</strong> é exatamente o método organizado para montar essa proporção quando as
              grandezas podem crescer juntas (<strong>diretas</strong>) ou em direções opostas (<strong>inversas</strong>).
            </p>
          </ProseSection>

          <ProseSection number="2" title="Regra de Três Simples: Método das Setas (2 Grandezas)">
            <p>
              O erro nº 1 do candidato apressado é montar a tabela e sair <strong>multiplicando cruzado no piloto automático</strong>.
              Antes de cruzar qualquer coisa, faça sempre a pergunta da realidade:{" "}
              <strong>“Se eu AUMENTAR a coluna A, a coluna B AUMENTA ou DIMINUI?”</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-[15px]">
              <li>
                <strong>Grandezas Diretamente Proporcionais (GDP — Setas no MESMO sentido ↑ ↑):</strong> mais processos
                para digitalizar → exige <strong>mais</strong> tempo (ou mais folhas de papel). Quando ambas crescem ou
                diminuem juntas, a fração fica na posição original e <strong>multiplica-se cruzado</strong>.
              </li>
              <li>
                <strong>Grandezas Inversamente Proporcionais (GIP — Setas em sentidos OPOSTOS ↑ ↓):</strong> mais
                servidores atendendo ao mesmo tempo (ou maior velocidade de um veículo) → o serviço termina em{" "}
                <strong>menos</strong> tempo! Quando uma cresce e a outra cai, <strong>INVERTA uma das colunas</strong>{" "}
                (vire de cabeça para baixo) antes de multiplicar cruzado (ou multiplique <strong>reto na horizontal</strong>).
              </li>
            </ul>
          </ProseSection>

          <GuidedCalcGrid>
            <GuidedCalcCard
              title="Diretamente Proporcional (GDP ↑ ↑)"
              badge="Mais trabalho = Mais tempo"
              accent="emerald"
              banner={
                <span>
                  <em>Exemplo:</em> Uma impressora imprime <strong>120 páginas em 4 minutos</strong>. Quantas páginas
                  imprimirá em <strong>10 minutos</strong>?
                </span>
              }
              rows={[
                {
                  badge: "1. Setas",
                  badgeVariant: "success",
                  description: "Mais minutos disponíveis → imprime mais páginas (mesmo sentido):",
                  mathLines: [
                    { tex: "\\uparrow \\text{Minutos } (4 \\to 10) \\quad \\text{e} \\quad \\uparrow \\text{Páginas } (120 \\to x)" },
                  ],
                },
                {
                  badge: "2. Conta no Papel",
                  badgeVariant: "default",
                  description: "Mantém a fração na posição original e multiplica cruzado:",
                  showFlowArrows: true,
                  mathLines: [
                    { tex: "\\frac{4}{10} = \\frac{120}{x}" },
                    { tex: "4x = 120 \\times 10" },
                    { tex: "4x = 1.200" },
                    { tex: "x = \\frac{1.200}{4} = 300\\text{ páginas}", note: "Cresceu junto!", highlight: true },
                  ],
                },
              ]}
            />

            <GuidedCalcCard
              title="Inversamente Proporcional (GIP ↑ ↓)"
              badge="Mais servidores = Menos dias"
              accent="amber"
              banner={
                <span>
                  <em>Exemplo:</em> Uma equipe de <strong>6 servidores</strong> cataloga um arquivo em{" "}
                  <strong>10 dias</strong>. Se colocarmos <strong>15 servidores</strong>, em quantos dias terminam?
                </span>
              }
              rows={[
                {
                  badge: "1. Setas",
                  badgeVariant: "amber",
                  description: "Mais servidores na equipe → termina o arquivo em menos dias (sentidos opostos):",
                  mathLines: [
                    { tex: "\\uparrow \\text{Servidores } (6 \\to 15) \\quad \\text{e} \\quad \\downarrow \\text{Dias } (10 \\to x)" },
                  ],
                },
                {
                  badge: "2. Inverter Coluna!",
                  badgeVariant: "danger",
                  description: "Inverte a coluna dos servidores antes de resolver:",
                  showFlowArrows: true,
                  mathLines: [
                    { tex: "\\frac{15}{6} = \\frac{10}{x}", note: "Virou 15/6 no lugar de 6/15" },
                    { tex: "15x = 6 \\times 10" },
                    { tex: "15x = 60" },
                    { tex: "x = \\frac{60}{15} = 4\\text{ dias}", note: "Caiu o prazo!", highlight: true },
                  ],
                },
              ]}
            />
          </GuidedCalcGrid>

          <ProseSection number="3" title="Regra de Três Composta (3 ou mais Grandezas) — Passo a Passo">
            <p>
              Na rotina de um órgão público, um prazo quase nunca depende de apenas um fator. Ele costuma depender ao
              mesmo tempo de <strong>quantos servidores trabalham</strong>,{" "}
              <strong>quantas horas por dia eles rendem</strong> e <strong>qual o tamanho da pilha de processos</strong>.
              Quando temos 3 ou mais grandezas juntas, usamos a <strong>Regra de Três Composta</strong>.
            </p>
            <ConceptCard title="Exemplo Real (Digitalização na Prefeitura de Birigui)" accent="sky" icon="book">
              <p>
                Na Prefeitura de Birigui, <strong>6 servidores</strong>, trabalhando <strong>4 horas por dia</strong>,
                digitalizam <strong>1.200 processos</strong> em <strong>5 dias</strong>. Se a chefia realocar a equipe
                para <strong>5 servidores</strong>, mas ampliar a jornada para <strong>6 horas por dia</strong>, em{" "}
                <strong>quantos dias</strong> eles digitalizarão <strong>3.600 processos</strong>?
              </p>
            </ConceptCard>
            <p>
              <strong>Regra de ouro ao comparar:</strong> ao analisar uma coluna,{" "}
              <em>finja que todas as outras estão congeladas!</em> Nunca compare <em>Servidores</em> com{" "}
              <em>Processos</em> entre si — compare tudo sempre com a coluna do <strong>x (Dias)</strong>.
            </p>
          </ProseSection>

          <KeyTable
            title="Passo 1 — Tabela Organizada em Colunas (Digitalização em Birigui)"
            headers={["Servidores", "Horas por dia", "Processos", "Dias (Incógnita)"]}
            rows={[
              ["6", "4", "1.200", <strong>5</strong>],
              ["5", "6", "3.600", <strong className="text-indigo-600 dark:text-indigo-400">x</strong>],
            ]}
          />

          <GuidedCalcCard
            title="Passo 2 e 3 — Comparando Cada Coluna Apenas com Dias (↓)"
            badge="Análise Isolada"
            accent="indigo"
            banner={
              <span>
                Primeiro isole a coluna da incógnita antes do sinal de igual:{" "}
                <MathTex tex="\dfrac{5}{x} = \text{(produto das outras colunas)}" />. Depois teste uma coluna por vez:
              </span>
            }
            rows={[
              {
                badge: "1ª Servidores",
                badgeVariant: "danger",
                description:
                  "Pergunta: se eu DIMINUO o nº de servidores (6 → 5), o mesmo serviço demora MAIS ou menos dias? Demora MAIS dias → INVERSA!",
                mathLines: [{ label: "Inverte", tex: "\\frac{6}{5} \\longrightarrow \\frac{5}{6}" }],
              },
              {
                badge: "2ª Horas/dia",
                badgeVariant: "danger",
                description:
                  "Pergunta: se a equipe trabalha MAIS horas por dia (4 → 6), termina em mais ou MENOS dias? Termina em MENOS dias → INVERSA!",
                mathLines: [{ label: "Inverte", tex: "\\frac{4}{6} \\longrightarrow \\frac{6}{4}" }],
              },
              {
                badge: "3ª Processos",
                badgeVariant: "success",
                description:
                  "Pergunta: se temos MAIS processos para digitalizar (1.200 → 3.600), precisamos de MAIS ou menos dias? Precisamos de MAIS dias → DIRETA!",
                mathLines: [{ label: "Mantém", tex: "\\frac{1.200}{3.600} = \\frac{1}{3}", highlight: true }],
              },
            ]}
          />

          <StepByStep
            title="Passo 4 — Montando e Resolvendo no Papel (Linha por Linha)"
            defaultRevealAll={false}
            steps={[
              {
                title: "Monte a multiplicação com a coluna do x isolada à esquerda",
                badge: "Montagem",
                content: "Escreva a coluna do x sozinha antes do '=', e multiplique as 3 frações já ajustadas depois do '=':",
                mathLines: [
                  { tex: "\\frac{5}{x} = \\frac{5}{6} \\times \\frac{6}{4} \\times \\frac{1}{3}" },
                ],
              },
              {
                title: "Simplifique cortando antes de multiplicar",
                badge: "Simplificação",
                content: "Corte o 6 de cima com o 6 de baixo (economiza conta grande!):",
                showFlowArrows: true,
                mathLines: [
                  { tex: "\\frac{5}{x} = \\frac{5}{\\cancel{6}} \\times \\frac{\\cancel{6}}{4} \\times \\frac{1}{3}" },
                  { tex: "\\frac{5}{x} = \\frac{5}{4} \\times \\frac{1}{3}" },
                  { tex: "\\frac{5}{x} = \\frac{5}{12}" },
                ],
              },
              {
                title: "Resolva a proporção final e faça a conferência física",
                badge: "Conclusão",
                content:
                  "Totalmente coerente com a realidade: os processos triplicaram (o que exigiria 15 dias), mas o aumento de horas/dia compensou a redução da equipe e fechou em 12 dias!",
                showFlowArrows: true,
                mathLines: [
                  { tex: "5x = 5 \\times 12" },
                  { tex: "5x = 60" },
                  { tex: "x = \\frac{60}{5} = 12\\text{ dias}", highlight: true },
                ],
              },
            ]}
          />

          <FormulaSpotlight
            title="Atalho de Conferência 'Processo ÷ Produto' (Causas ÷ Efeitos)"
            formulas={[
              {
                label: "1. Fórmula Geral",
                tex: "\\frac{\\text{Processo}_1}{\\text{Produto}_1} = \\frac{\\text{Processo}_2}{\\text{Produto}_2}",
                note: "Separe tudo que trabalha/produz no numerador (Causas) e o que foi entregue no denominador (Efeito).",
              },
              {
                label: "2. Aplicando no Mesmo Exemplo de Birigui (Linha por Linha)",
                showFlowArrows: true,
                steps: [
                  { tex: "\\frac{6 \\times 4 \\times 5}{1.200} = \\frac{5 \\times 6 \\times x}{3.600}" },
                  { tex: "\\frac{120}{1.200} = \\frac{30x}{3.600}", note: "Simplifica os zeros" },
                  { tex: "\\frac{1}{10} = \\frac{x}{120}" },
                  { tex: "10x = 120 \\implies x = 12\\text{ dias}", highlight: true },
                ],
              },
            ]}
            note="Use as setas como método principal e o Processo ÷ Produto para conferir em 15 segundos se não inverteu nenhuma seta sem querer!"
            legend={[
              { symbol: "\\text{Processo}", meaning: "Quem trabalha/produz (Servidores × Horas/dia × Dias)" },
              { symbol: "\\text{Produto}", meaning: "O que foi entregue (Processos, m², Carnês, Peças)" },
            ]}
          />

          <FeynmanCard
            title="Síntese Feynman · Eixo 2 (Regra de Três em 3 Linhas)"
            lines={[
              "Antes de cruzar números, pergunte à realidade: se a grandeza cresce e o resultado cresce junto, é direta (mantém); se um cresce e o outro encolhe, é inversa (inverte).",
              {
                render: (
                  <>
                    Na Regra de Três Composta, isole a fração do <MathTex tex="x" /> antes do <code>=</code> e compare
                    cada outra coluna individualmente apenas com a do <MathTex tex="x" />, multiplicando todas depois
                    do <code>=</code>.
                  </>
                ),
                copyText:
                  "Na Regra de Três Composta, isole a fração do x antes do '=' e compare cada outra coluna individualmente apenas com a do x, multiplicando todas depois do '='.",
              },
              "Sempre cheque se a resposta faz sentido físico (dobrar a equipe sem mudar a obra precisa reduzir o prazo, nunca aumentá-lo!).",
            ]}
          />
        </div>
      ),
      checkpointQuestions: [
        {
          num: "1",
          header: "Checkpoint 2.1",
          banca: "**Foco:** Regra de Três Simples Inversa",
          statement:
            "Uma equipe de 8 servidores organiza um arquivo municipal em 12 dias. Mantendo o mesmo ritmo de trabalho, em quantos dias 16 servidores organizariam esse mesmo arquivo?",
          options: {
            A: "24 dias.",
            B: "8 dias.",
            C: "6 dias.",
            D: "4 dias.",
          },
          answer: "C",
          commentary:
            "Servidores e dias são **inversamente proporcionais** (mais servidores $\\to$ menos dias):\n\n$$\\frac{16}{8} = \\frac{12}{x} \\implies 16x = 8 \\times 12 \\implies x = \\frac{96}{16} = \\mathbf{6\\text{ dias}}$$\n\n*(Ou direto de cabeça: dobrou a equipe de 8 para 16, o tempo cai pela metade: $12 \\div 2 = 6$ dias!).*",
        },
        {
          num: "2",
          header: "Checkpoint 2.2",
          banca: "**Foco:** Desafio da Reforma Escolar (Regra de Três Composta)",
          statement:
            "Para reformar as salas de uma escola municipal, 4 pintores, trabalhando 6 horas por dia, pintam $180\\text{ m}^2$ de parede em 5 dias. Se a Prefeitura contratar mais 2 pintores (ficando 6 pintores no total) e ajustar a jornada para 5 horas por dia, em quantos dias eles pintarão $270\\text{ m}^2$?",
          options: {
            A: "4 dias.",
            B: "5 dias.",
            C: "6 dias.",
            D: "8 dias.",
          },
          answer: "C",
          commentary:
            "Pelas comparações com Dias ($x$):\n- **Pintores ($4 \\to 6$):** Inversa $\\to \\frac{6}{4}$\n- **Horas/dia ($6 \\to 5$):** Inversa $\\to \\frac{5}{6}$\n- **Área ($180 \\to 270$):** Direta $\\to \\frac{180}{270} = \\frac{2}{3}$\n\n$$\\frac{5}{x} = \\frac{6}{4} \\times \\frac{5}{6} \\times \\frac{2}{3} \\implies \\frac{5}{x} = \\frac{5}{6} \\implies x = \\mathbf{6\\text{ dias}}$$\n\nConferindo por **Processo ÷ Produto**:\n\n$$\\frac{4 \\times 6 \\times 5}{180} = \\frac{6 \\times 5 \\times x}{270} \\implies \\frac{2}{3} = \\frac{x}{9} \\implies x = \\mathbf{6\\text{ dias}}$$",
        },
        {
          num: "3",
          header: "Checkpoint 2.3",
          banca: "**Foco:** Caso Guiado da Gráfica Municipal",
          statement:
            "Na gráfica da Prefeitura de Birigui, 4 impressoras idênticas imprimem 2.400 carnês trabalhando 6 horas. Quantas horas serão necessárias para 6 dessas impressoras imprimirem 5.400 carnês?",
          options: {
            A: "7 horas.",
            B: "8 horas.",
            C: "9 horas.",
            D: "12 horas.",
          },
          answer: "C",
          commentary:
            "Pelo método das Setas (comparando com Horas $x$):\n- **Impressoras ($4 \\to 6$):** Inversa $\\to \\frac{6}{4}$\n- **Carnês ($2.400 \\to 5.400$):** Direta $\\to \\frac{2.400}{5.400} = \\frac{4}{9}$\n\n$$\\frac{6}{x} = \\frac{6}{4} \\times \\frac{4}{9} \\implies \\frac{6}{x} = \\frac{6}{9} \\implies x = \\mathbf{9\\text{ horas}}$$\n\nConferência por **Processo ÷ Produto**:\n\n$$\\frac{4 \\times 6}{2.400} = \\frac{6 \\times x}{5.400} \\implies \\frac{1}{100} = \\frac{6x}{5.400} \\implies 6x = 54 \\implies x = \\mathbf{9\\text{ horas}}$$",
        },
      ],
    },

    // =========================================================================
    // EIXO 3: PORCENTAGEM E VARIAÇÕES SUCESSIVAS
    // =========================================================================
    {
      id: "eixo-3",
      index: 3,
      title: "Porcentagem Aplicada e Variações Sucessivas (Aumentos e Descontos)",
      subtitle:
        "O significado real de '%', cálculo mental, Fator de Multiplicação (1 ± i), reversão de preço e efeito cascata.",
      estimatedMinutes: 18,
      render: () => (
        <div className="space-y-7">
          <ProseSection number="1" title="O Significado Real de '%' e a Tríade da Conversão">
            <p>
              O símbolo <strong>% (“por cento”)</strong> significa literalmente <strong>“dividido por 100”</strong> —
              isto é, fatiar o inteiro em 100 pedacinhos iguais e pegar <em>p</em> fatias. Dominar porcentagem rápido
              em prova exige transitar com naturalidade entre <strong>três idiomas equivalentes</strong> (taxa, fração e
              decimal).
            </p>
          </ProseSection>

          <KeyTable
            title="Tríade da Conversão & Atalhos de Cálculo Mental"
            headers={["Taxa Percentual", "Forma Fracionária", "Forma Decimal (Fator)", "Cálculo Mental Rápido"]}
            rows={[
              [<strong>100%</strong>, <MathTex tex="\frac{100}{100}=1" />, <strong>1,00</strong>, "É o próprio inteiro (V)."],
              [<strong>50%</strong>, <MathTex tex="\frac{1}{2}" />, <strong>0,50</strong>, "Metade (÷ 2)."],
              [<strong>25%</strong>, <MathTex tex="\frac{1}{4}" />, <strong>0,25</strong>, "Um quarto (÷ 4, ou metade da metade)."],
              [<strong>10%</strong>, <MathTex tex="\frac{1}{10}" />, <strong>0,10</strong>, "Divide por 10 (anda a vírgula 1 casa p/ esquerda)."],
              [<strong>5%</strong>, <MathTex tex="\frac{1}{20}" />, <strong>0,05</strong>, "É a metade de 10%!"],
              [<strong>1%</strong>, <MathTex tex="\frac{1}{100}" />, <strong>0,01</strong>, "Divide por 100 (anda a vírgula 2 casas p/ esquerda)."],
            ]}
          />

          <GuidedCalcCard
            title="Como Combinar Rápido de Cabeça (15% de R$ 400,00)"
            badge="Cálculo Mental"
            accent="sky"
            rows={[
              {
                badge: "Fatia de 10%",
                description: "Ande a vírgula 1 casa para a esquerda:",
                mathLines: [{ tex: "10\\% \\text{ de } 400 = 40" }],
              },
              {
                badge: "Fatia de 5%",
                description: "Pegue apenas a metade dos 10%:",
                mathLines: [{ tex: "5\\% \\text{ de } 400 = 40 \\div 2 = 20" }],
              },
              {
                badge: "Total (15%)",
                badgeVariant: "success",
                mathLines: [{ tex: "15\\% = 40 + 20 = \\text{R\\$ } 60{,}00", highlight: true }],
              },
            ]}
          />

          <ProseSection number="2" title="Fator de Multiplicação (1 + i e 1 − i) e Como Voltar ao Valor Original">
            <p>
              Calcular o desconto ou aumento e depois somar/subtrair funciona, mas em provas modernas (especialmente em{" "}
              <strong>variações sucessivas</strong> e <strong>reversão de preço</strong>) o{" "}
              <strong>Fator de Multiplicação</strong> resolve em 1 linha sem armadilhas: o valor original completo vale{" "}
              <strong>100% = 1,00</strong>.
            </p>
          </ProseSection>

          <GuidedCalcGrid>
            <GuidedCalcCard
              title={
                <span>
                  Para AUMENTAR <MathTex tex="i\%" /> → Multiplique por <MathTex tex="(1 + i)" />
                </span>
              }
              badge="Acréscimo Direto"
              accent="emerald"
              rows={[
                {
                  badge: "Aumento de +15%",
                  badgeVariant: "success",
                  description: "Você soma 100% com 15%:",
                  mathLines: [{ tex: "1{,}00 + 0{,}15 = 1{,}15", note: "Basta fazer V × 1,15" }],
                },
                {
                  badge: "Aumento de +5%",
                  badgeVariant: "amber",
                  description: "Atenção ao zero decimal!",
                  mathLines: [
                    { tex: "1{,}00 + 0{,}05 = 1{,}05", highlight: true },
                    { tex: "\\text{Cuidado: } 1{,}50 \\text{ seria } 50\\%, \\text{ não } 5\\%!" },
                  ],
                },
              ]}
            />

            <GuidedCalcCard
              title={
                <span>
                  Para DESCONTAR <MathTex tex="i\%" /> → Multiplique por <MathTex tex="(1 - i)" />
                </span>
              }
              badge="Abatimento Direto"
              accent="indigo"
              rows={[
                {
                  badge: "Desconto de −20%",
                  badgeVariant: "default",
                  description: "Você paga os 80% que restaram:",
                  mathLines: [{ tex: "1{,}00 - 0{,}20 = 0{,}80", note: "Basta fazer V × 0,80" }],
                },
                {
                  badge: "Desconto de −9%",
                  badgeVariant: "default",
                  description: "Você paga os 91% restantes:",
                  mathLines: [{ tex: "1{,}00 - 0{,}09 = 0{,}91", note: "Basta fazer V × 0,91", highlight: true }],
                },
              ]}
            />
          </GuidedCalcGrid>

          <TrapAlert
            title="A Maior Armadilha da ACCESS: Descobrir o Valor ANTES do Ajuste"
            trap={
              <>
                <em>“Após um desconto de 20%, um produto passou a custar R$ 240,00. Qual era o preço original?”</em>
                <br />
                <br />
                Erro clássico: calcular 20% de 240 (= 48) e somar (240 + 48 = 288). <strong>ERRADO!</strong> O desconto
                de 20% foi aplicado sobre o preço antigo <MathTex tex="P" />, e não sobre 240!
              </>
            }
            escape={
              <div className="space-y-2.5">
                <p>
                  Para <strong>avançar</strong> no tempo, multiplique pelo fator; para <strong>voltar</strong> ao
                  original, <strong>divida</strong> pelo fator (ou monte a regra de três: 240 está para 80%, assim como{" "}
                  <MathTex tex="P" /> está para 100%):
                </p>
                <MathStack
                  compact
                  showFlowArrows
                  lines={[
                    { tex: "P_{\\text{novo}} = P_{\\text{antigo}} \\times 0{,}80" },
                    { tex: "240 = P_{\\text{antigo}} \\times 0{,}80" },
                    { tex: "P_{\\text{antigo}} = \\frac{240}{0{,}80} = \\text{R\\$ } 300{,}00", highlight: true },
                  ]}
                />
              </div>
            }
          />

          <ProseSection number="3" title="Aumentos e Descontos Sucessivos (O Efeito Cascata)">
            <p>
              Por que um produto que sobe <strong>20%</strong> num mês e cai <strong>20%</strong> no mês seguinte{" "}
              <strong>NÃO</strong> volta ao preço inicial? Porque a segunda porcentagem{" "}
              <strong>não incide sobre o valor original</strong>, e sim <strong>sobre o novo valor já inchado</strong>{" "}
              (a nova base de 100% ficou maior)!
            </p>
          </ProseSection>

          <GuidedCalcCard
            title="Variações Sucessivas na Prática: A Ilusão do '+20% e −20%'"
            badge="Teste Mental com R$ 100"
            accent="rose"
            banner="Sempre que uma questão de porcentagem sucessiva não der o preço inicial em reais, teste mentalmente com R$ 100,00!"
            rows={[
              {
                badge: "1º Início (Base 100)",
                badgeVariant: "default",
                description: "Preço de partida adotado para simular o efeito cascata:",
                mathLines: [{ tex: "V_{\\text{inicial}} = \\text{R\\$ } 100{,}00" }],
              },
              {
                badge: "2º Aumento (+20%)",
                badgeVariant: "success",
                description: "Aplica o fator × 1,20. Agora a base onde o desconto vai bater é R$ 120, e não mais 100!",
                mathLines: [{ tex: "100 \\times 1{,}20 = \\text{R\\$ } 120{,}00" }],
              },
              {
                badge: "3º Desconto (−20%)",
                badgeVariant: "danger",
                description: "20% de R$ 120,00 dá R$ 24,00 de queda (e não R$ 20,00!):",
                showFlowArrows: true,
                mathLines: [
                  { tex: "120 - 24 = \\text{R\\$ } 96{,}00" },
                  { tex: "\\text{Via fatores: } 1{,}20 \\times 0{,}80 = 0{,}96", note: "96% do início = queda real de −4%!", highlight: true },
                ],
              },
            ]}
          />

          <FlipCardsGrid
            title="Variações Sucessivas — Teste seu instinto (Clique nos cards)"
            cards={[
              {
                front: "+20% e depois −20%",
                hint: "Volta a 0%?",
                back: (
                  <>
                    <strong>NÃO! Cai 4%!</strong>
                    <br />
                    <MathTex tex="1{,}20 \times 0{,}80 = 0{,}96" /> (96% do início → queda líquida de −4%).
                  </>
                ),
              },
              {
                front: "+10% e depois +10%",
                hint: "Dá +20%?",
                back: (
                  <>
                    <strong>NÃO! Dá +21%!</strong>
                    <br />
                    <MathTex tex="1{,}10 \times 1{,}10 = 1{,}21" /> (aumento acumulado sobre aumento).
                  </>
                ),
              },
              {
                front: "+25% e depois −20%",
                hint: "Quanto sobra?",
                back: (
                  <>
                    <strong>Volta exato a 0%!</strong>
                    <br />
                    <MathTex tex="1{,}25 \times 0{,}80 = 1{,}00" /> (se anulam perfeitamente!).
                  </>
                ),
              },
            ]}
          />

          <FormulaSpotlight
            title="Fórmula Geral das Variações Sucessivas e Variação Percentual"
            formulas={[
              {
                label: "1. Encadear n Variações Sucessivas (Multiplicação de Fatores)",
                tex: "F_{\\text{total}} = (1 \\pm i_1) \\cdot (1 \\pm i_2) \\cdot (1 \\pm i_3) \\dots",
                showFlowArrows: false,
                steps: [
                  {
                    label: "2 aumentos de 10%",
                    tex: "1{,}10 \\times 1{,}10 = 1{,}21",
                    note: "Aumento acumulado de +21% (não 20%)",
                  },
                  {
                    label: "2 descontos de 10%",
                    tex: "0{,}90 \\times 0{,}90 = 0{,}81",
                    note: "Restou 81% → desconto acumulado de −19%",
                  },
                ],
              },
              {
                label: "2. Variação Percentual Entre Dois Valores (Vi → Vf)",
                tex: "\\text{Variação (\\%)} = \\frac{V_{\\text{final}} - V_{\\text{inicial}}}{V_{\\text{inicial}}} \\times 100\\%",
                showFlowArrows: false,
                steps: [
                  {
                    label: "De 80 para 100",
                    tex: "\\frac{100 - 80}{80} = \\frac{20}{80} = +25\\%",
                    note: "Divide pelo inicial (80)",
                  },
                  {
                    label: "De 100 para 80",
                    tex: "\\frac{80 - 100}{100} = \\frac{-20}{100} = -20\\%",
                    note: "Divide pelo inicial (100)",
                  },
                ],
                note: "Por que dividir pelo Valor Inicial? Porque você mede quanto mudou em relação ao ponto de partida.",
              },
            ]}
          />

          <StepByStep
            title="Caso Guiado 3 · Reversão de Desconto e Variação Sucessiva"
            problem={
              <>
                Uma licitação estimou uma compra em valor <MathTex tex="V" />. Aplicou-se primeiro um aumento de{" "}
                <strong>25%</strong> por reajuste de tabela e, sobre o novo preço, obteve-se um desconto de{" "}
                <strong>20%</strong> na etapa de lances, fechando em <strong>R$ 1.500,00</strong>. Qual foi a variação
                acumulada e qual era o valor inicial <MathTex tex="V" />?
              </>
            }
            steps={[
              {
                title: "Multiplicar os fatores de variação",
                badge: "Passo 1",
                content: "Converta aumento de 25% em × 1,25 e desconto de 20% em × 0,80:",
                showFlowArrows: true,
                mathLines: [
                  { label: "+25%", tex: "\\times 1{,}25" },
                  { label: "−20%", tex: "\\times 0{,}80" },
                  { label: "Fator total", tex: "1{,}25 \\times 0{,}80 = 1{,}00", highlight: true },
                ],
              },
              {
                title: "Interpretar o resultado e achar o valor inicial V",
                badge: "Passo 2",
                content:
                  "Como o fator acumulado deu exatamente 1,00, o aumento de 25% e o desconto de 20% se anularam exata e perfeitamente (variação líquida = 0%):",
                mathLines: [{ tex: "V = \\frac{1.500}{1{,}00} = \\text{R\\$ } 1.500{,}00", highlight: true }],
              },
            ]}
          />

          <FeynmanCard
            title="Síntese Feynman · Eixo 3 (Porcentagem em 3 Linhas)"
            lines={[
              {
                render: (
                  <>
                    Porcentagem é uma fração por 100; multiplicar pelo fator <MathTex tex="(1 + i)" /> aplica aumento e{" "}
                    <MathTex tex="(1 - i)" /> aplica desconto em uma única operação.
                  </>
                ),
                copyText:
                  "Porcentagem é uma fração por 100; multiplicar pelo fator (1 + i) aplica aumento e (1 − i) aplica desconto em uma única operação.",
              },
              {
                render: (
                  <>
                    Para descobrir o preço anterior a um ajuste, nunca some ou subtraia a taxa do valor novo — divida
                    pelo fator <MathTex tex="(1 \pm i)" />.
                  </>
                ),
                copyText:
                  "Para descobrir o preço anterior a um ajuste, nunca some/subtraia a taxa do valor novo — divida pelo fator (1 ± i).",
              },
              {
                render: (
                  <>
                    Em aumentos ou descontos sucessivos, cada nova taxa bate sobre o valor acumulado anterior:
                    multiplique os fatores entre si e compare o resultado com <MathTex tex="1{,}00" />.
                  </>
                ),
                copyText:
                  "Em aumentos ou descontos sucessivos, cada nova taxa bate sobre o valor acumulado anterior: multiplique os fatores entre si e compare o resultado com 1,00.",
              },
            ]}
          />
        </div>
      ),
      checkpointQuestions: [
        {
          num: "1",
          header: "Checkpoint 3.1",
          banca: "**Foco:** Reversão de Preço (Voltar ao Original)",
          statement:
            "Após receber um desconto de 20%, um equipamento de escritório passou a custar R$ 240,00. Qual era o preço original desse equipamento antes do desconto?",
          options: {
            A: "R$ 288,00",
            B: "R$ 290,00",
            C: "R$ 300,00",
            D: "R$ 320,00",
          },
          answer: "C",
          commentary:
            "Um desconto de $20\\%$ equivale ao fator $1 - 0{,}20 = 0{,}80$. Dividindo o valor final pelo fator para voltar ao original:\n\n$$P_{\\text{antigo}} = \\frac{240}{0{,}80} = \\mathbf{\\text{R\\$ } 300{,}00}$$",
        },
        {
          num: "2",
          header: "Checkpoint 3.2",
          banca: "**Foco:** Descontos Sucessivos",
          statement:
            "Uma papelaria concedeu dois descontos sucessivos de 10% sobre o valor de uma compra. O desconto único equivalente a esses dois descontos sucessivos é de:",
          options: {
            A: "18%",
            B: "19%",
            C: "20%",
            D: "21%",
          },
          answer: "B",
          commentary:
            "Multiplicando os fatores dos dois descontos de $10\\%$ ($\\times 0{,}90$):\n\n$$0{,}90 \\times 0{,}90 = 0{,}81 \\implies 100\\% - 81\\% = \\mathbf{19\\%}$$",
        },
        {
          num: "3",
          header: "Checkpoint 3.3",
          banca: "**Foco:** Variação Percentual (Armadilha do Valor Inicial)",
          statement:
            "O preço de um insumo passou de R$ 80,00 para R$ 100,00. Qual foi o percentual de aumento real?",
          options: {
            A: "20%",
            B: "22%",
            C: "25%",
            D: "30%",
          },
          answer: "C",
          commentary:
            "A variação percentual divide sempre pelo **valor inicial ($80$)**:\n\n$$\\frac{100 - 80}{80} = \\frac{20}{80} = \\frac{1}{4} = \\mathbf{25\\%}$$",
        },
      ],
    },
  ],

  finalQuestionsTitle: "Bateria Final · 6 Questões Reais & Padrão ACCESS",
  finalQuestions: [
    {
      num: "1",
      header: "Questão 01",
      banca: "**Banca:** Adaptada de FUNDATEC (Pref. Arroio do Sal/RS — 2024) · Padrão Instituto ACCESS",
      statement:
        "Durante a conferência de cálculos de um projeto de engenharia municipal, um servidor precisou simplificar a expressão numérica envolvendo radicais:\n\n$$\\frac{\\sqrt{1764}}{\\sqrt{7}} + \\sqrt{70} \\cdot \\sqrt{10} - \\sqrt{1575}$$\n\nRealizando corretamente as propriedades da radiciação e a racionalização de denominadores, assinale a alternativa que apresenta o resultado CORRETO da expressão:",
      options: {
        A: "$\\sqrt{7}$",
        B: "$2\\sqrt{7}$",
        C: "$7$",
        D: "$5\\sqrt{7}$",
      },
      answer: "A",
      commentary:
        "**1) Resolver $\\frac{\\sqrt{1764}}{\\sqrt{7}}$:**  \nFatorando $1764$: $1764 = 2^2 \\times 3^2 \\times 7^2 \\implies \\sqrt{1764} = 2 \\times 3 \\times 7 = 42$. Racionalizando:\n\n$$\\frac{42}{\\sqrt{7}} \\times \\frac{\\sqrt{7}}{\\sqrt{7}} = \\frac{42\\sqrt{7}}{7} = \\mathbf{6\\sqrt{7}}$$\n\n**2) Resolver $\\sqrt{70} \\cdot \\sqrt{10}$:**\n\n$$\\sqrt{70 \\times 10} = \\sqrt{700} = \\sqrt{100 \\times 7} = \\mathbf{10\\sqrt{7}}$$\n\n**3) Simplificar $\\sqrt{1575}$:**\n\n$$\\sqrt{1575} = \\sqrt{225 \\times 7} = \\mathbf{15\\sqrt{7}}$$\n\n**4) Somar e subtrair os radicais semelhantes:**\n\n$$6\\sqrt{7} + 10\\sqrt{7} - 15\\sqrt{7} = (6 + 10 - 15)\\sqrt{7} = \\mathbf{\\sqrt{7}}$$",
    },
    {
      num: "2",
      header: "Questão 02",
      banca: "**Banca:** Instituto ACCESS (UFJ — 2023 — Assistente em Administração)",
      statement:
        "Uma pequena empresa possui duas máquinas que produzem igualmente $120$ peças cada uma no período de $8$ horas. Se a taxa de produção permanecer constante nas duas máquinas, quantas peças elas irão produzir ao todo num período de $15$ horas?",
      options: {
        A: "$225$.",
        B: "$240$.",
        C: "$360$.",
        D: "$450$.",
        E: "$480$.",
      },
      answer: "D",
      commentary:
        "**Atenção à leitura (`120` peças CADA UMA vs. `ao todo`):**  \nSe são **duas máquinas**, em $8$ horas juntas produzem $2 \\times 120 = 240$ peças.\n\n**Regra de Três Simples Direta:**\n\n$$\\frac{8}{15} = \\frac{240}{x} \\implies 8x = 240 \\times 15 \\implies x = 30 \\times 15 = \\mathbf{450\\text{ peças}}$$\n\n*(Armadilha A: $225$ é a produção de apenas uma máquina em $15$ horas!)*",
    },
    {
      num: "3",
      header: "Questão 03",
      banca: "**Banca:** OBJETIVA (Pref. Ilópolis/RS — 2025 — Auxiliar de Administração)",
      statement:
        "Uma construtora iniciou a construção de um muro e, para isso, designou $12$ operários, que trabalham $6$ horas por dia. Com essa organização, o muro foi finalizado em $20$ dias. Agora, a empresa precisa construir um novo muro com as mesmas dimensões, mas precisou reduzir a equipe para $10$ funcionários. No intuito de compensar a redução de funcionários, eles aumentaram a jornada de trabalho para $8$ horas diárias. Com base nos dados apresentados, em quantos dias o novo muro será finalizado?",
      options: {
        A: "$18$ dias.",
        B: "$20$ dias.",
        C: "$22$ dias.",
        D: "$24$ dias.",
      },
      answer: "A",
      commentary:
        "**Pela Regra de Três Composta (Operários e Horas/dia são INVERSAS aos Dias):**\n\n$$\\frac{20}{x} = \\frac{10}{12} \\times \\frac{8}{6} \\implies \\frac{20}{x} = \\frac{80}{72} \\implies \\frac{20}{x} = \\frac{10}{9} \\implies 10x = 180 \\implies x = \\mathbf{18\\text{ dias}}$$\n\n**Conferência por Processo ÷ Produto (mesmo muro):**\n\n$$12 \\times 6 \\times 20 = 1.440 \\quad \\text{e} \\quad 10 \\times 8 \\times x = 1.440 \\implies x = \\mathbf{18\\text{ dias}}$$",
    },
    {
      num: "4",
      header: "Questão 04",
      banca: "**Banca:** Instituto ACCESS (Pref. Passos/MG — 2023 — Oficial de Administração)",
      statement:
        "Uma empresa vai aumentar o salário de todos os seus funcionários em $5\\%$. Sabe-se que um dos seus funcionários ganha hoje $\\text{R\\$ } 3.000{,}00$. Para ele calcular o seu salário com o aumento, ele vai precisar",
      options: {
        A: "multiplicar por $1{,}05$.",
        B: "multiplicar por $1{,}15$.",
        C: "multiplicar por $1{,}25$.",
        D: "multiplicar por $1{,}50$.",
      },
      answer: "A",
      commentary:
        "Fator de aumento: $1{,}00 + 0{,}05 = \\mathbf{1{,}05}$ ($3.000 \\times 1{,}05 = \\text{R\\$ } 3.150{,}00$). Armadilha clássica na letra (D): $1{,}50$ representa aumento de $50\\%$, e não $5\\%$.",
    },
    {
      num: "5",
      header: "Questão 05",
      banca: "**Banca:** Instituto ACCESS (Pref. Domingos Martins/ES — 2024 — Auxiliar Administrativo)",
      statement:
        "Em 2024 o salário mínimo passou para o valor de $\\text{R\\$ } 1.412{,}00$. Um trabalhador que recebe exatamente $1{,}5$ salário mínimo de salário bruto e tem como desconto apenas os $9\\%$ de previdência tem o salário líquido, em reais, igual a",
      options: {
        A: "$\\text{R\\$ } 1.885{,}02$.",
        B: "$\\text{R\\$ } 1.906{,}20$.",
        C: "$\\text{R\\$ } 1.927{,}38$.",
        D: "$\\text{R\\$ } 2.012{,}10$.",
      },
      answer: "C",
      commentary:
        "**Passo 1 — Salário bruto ($1{,}5$ salário mínimo):**\n\n$$1.412{,}00 + 706{,}00 = \\mathbf{\\text{R\\$ } 2.118{,}00}$$\n\n**Passo 2 — Aplicar desconto de $9\\%$ (fator $1 - 0{,}09 = 0{,}91$):**\n\n$$2.118 \\times 0{,}91 = \\mathbf{\\text{R\\$ } 1.927{,}38}$$",
    },
    {
      num: "6",
      header: "Questão 06",
      banca: "**Banca:** Instituto ACCESS (Pref. Promissão/SP — 2026 — Escriturário)",
      statement:
        "Um engenheiro civil projeta um reservatório de água em formato de paralelepípedo retângulo com $8$ metros de comprimento, $6$ metros de largura e $3$ metros de profundidade. Por questões estruturais, decide-se aumentar o comprimento em $20\\%$, dobrar a largura e reduzir a profundidade em um terço da medida original. Com base nas novas dimensões, calcule a capacidade final de armazenamento desse reservatório após as alterações.",
      options: {
        A: "O volume do novo reservatório é de $115{,}2\\text{ m}^3$.",
        B: "O volume do novo reservatório é de $192{,}0\\text{ m}^3$.",
        C: "O volume do novo reservatório é de $460{,}8\\text{ m}^3$.",
        D: "O volume do novo reservatório é de $230{,}4\\text{ m}^3$.",
      },
      answer: "D",
      commentary:
        "**Passo 1 — Novas dimensões ($C = 8$, $L = 6$, $P = 3$):**\n- Comprimento ($+20\\%$): $8 \\times 1{,}20 = 9{,}6\\text{ m}$\n- Largura (dobrar): $6 \\times 2 = 12\\text{ m}$\n- Profundidade (tirar $\\frac{1}{3}$ de $3$): $3 - 1 = 2\\text{ m}$\n\n**Passo 2 — Calcular volume final ($V = C \\times L \\times P$):**\n\n$$V_{\\text{novo}} = 9{,}6 \\times 12 \\times 2 \\implies 9{,}6 \\times 24 = \\mathbf{230{,}4\\text{ m}^3}$$",
    },
  ],
  checklistItems: [
    "Consigo explicar por que √(-9) não existe nos Reais, mas ∛(-8) = -2 existe?",
    "Sei transformar qualquer potência fracionária a^(m/n) em raiz usando a Regra do Sol e da Sombra?",
    "Sei simplificar √50 = 5√2 e racionalizar tanto A/√b quanto A/(√b − √c) pelo conjugado?",
    "Antes de montar qualquer Regra de Três, verifico sempre a direção da seta (GDP vs. GIP) e sei conferir por Processo ÷ Produto?",
    "Domino o Fator de Multiplicação (1 + i e 1 − i) tanto para variações sucessivas quanto para voltar ao valor original dividindo?",
  ],
};

export default matematicaSemana03;
