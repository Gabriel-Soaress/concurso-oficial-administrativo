# 📑 Dossiê de Revisão: Matemática e Raciocínio Lógico (Semanas 01 e 02)
**Guia de Operações, Fórmulas e Resoluções Guiadas Passo a Passo**  
**Cargo Alvo:** Oficial Administrativo (Nível Médio) | **Foco:** Provas Reais (Instituto ACCESS, VUNESP e Similares)

---

## 🎯 Estrutura Sequencial do Resumo (Ordem Exata das Aulas)
* **PARTE 1 — SEMANA 01 (Os Alicerces do Cálculo):**
  1. **Eixo 1:** Conjuntos Numéricos ($\mathbb{N}, \mathbb{Z}, \mathbb{Q}, \mathbb{I}, \mathbb{R}$) e Regras de Sinais.
  2. **Eixo 2:** Cálculo de MMC e MDC + As 4 Operações com Frações e "Fração do Restante".
  3. **Eixo 3:** Operações com Decimais (Divisão com Vírgula) e Fração Geratriz de Dízimas.
  4. **Eixo 4:** Propriedades de Potências, Raízes e Resolução Guiada de Expressão (PEMDAS).
* **PARTE 2 — SEMANA 02 (Conjuntos, Diagramas de Venn e Proporcionalidade):**
  5. **Eixo 5:** Teoria dos Conjuntos (Pertinência, Inclusão, Subconjuntos $2^n$ e as 4 Operações).
  6. **Eixo 6:** Diagramas de Venn (Fórmula e Resolução Guiada para 2 e 3 Conjuntos).
  7. **Eixo 7:** Razão, Proporção e Multiplicação Cruzada.
  8. **Eixo 8:** Divisão Diretamente Proporcional e Inversamente Proporcional (Método da Constante $k$).

---

# PARTE 1 — CONTEÚDOS DA SEMANA 01

## Eixo 1: Conjuntos Numéricos e Regras de Sinais

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span>🔢</span>
      <span>1. MAPA DOS 5 CONJUNTOS NUMÉRICOS ($\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$)</span>
    </div>
    <span class="edu-comp-badge">Semana 01 • Eixo 1</span>
  </div>
  <div class="guided-body">
    <div class="guided-table-wrap">
      <table class="lesson-table">
        <thead>
          <tr>
            <th>Símbolo e Nome</th>
            <th>Quem faz parte (Definição Prática)</th>
            <th>Exemplos de Prova</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>$\mathbb{N}$ — Naturais</strong></td>
            <td>Inteiros positivos usados para contagem, incluindo o zero ($\mathbb{N}^*$ exclui o zero).</td>
            <td>$0, 1, 2, 3, 10, 500\dots$</td>
          </tr>
          <tr>
            <td><strong>$\mathbb{Z}$ — Inteiros</strong></td>
            <td>Todos os naturais mais os seus opostos <strong>negativos</strong> (não têm parte decimal/quebrada).</td>
            <td>$\dots -15, -3, -1, 0, 1, 2, 8\dots$</td>
          </tr>
          <tr>
            <td><strong>$\mathbb{Q}$ — Racionais</strong></td>
            <td>Todo número que <strong>pode ser escrito como fração</strong> $\frac{a}{b}$ (inteiros, decimais exatos e <strong>dízimas periódicas</strong>).</td>
            <td>$-4$, $\frac{3}{5}$, $0{,}25$, $0{,}333\dots$</td>
          </tr>
          <tr>
            <td><strong>$\mathbb{I}$ — Irracionais</strong></td>
            <td>Decimais infinitos <strong>NÃO periódicos</strong> (jamais viram fração). Ficam isolados de $\mathbb{Q}$ ($\mathbb{Q} \cap \mathbb{I} = \emptyset$).</td>
            <td>$\sqrt{2}, \sqrt{3}, \sqrt{5}, \pi \approx 3{,}14159\dots$</td>
          </tr>
          <tr>
            <td><strong>$\mathbb{R}$ — Reais</strong></td>
            <td>A união completa dos Racionais com os Irracionais ($\mathbb{R} = \mathbb{Q} \cup \mathbb{I}$).</td>
            <td>Todos os números acima.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="guided-grid-2">
      <div class="guided-card">
        <div class="guided-card-head head-indigo">Op. 1A • Regra de Sinais na SOMA e SUBTRAÇÃO</div>
        <div class="formula-banner">
          Não existe "menos com menos dá mais" na soma! Olhe para o <strong>tamanho (módulo)</strong> dos números:
        </div>
        <div class="guided-steps">
          <div class="step-row">
            <span class="step-badge">Sinais Iguais</span>
            <div class="step-content">
              <div class="step-desc"><strong>Soma os valores</strong> e <strong>conserva o mesmo sinal</strong> (dívida com dívida vira uma dívida maior):</div>
              <div class="step-math">$-8 - 5 = -13$ &nbsp;&nbsp;|&nbsp;&nbsp; $+8 + 5 = +13$</div>
            </div>
          </div>
          <div class="step-row">
            <span class="step-badge">Sinais Diferentes</span>
            <div class="step-content">
              <div class="step-desc"><strong>Subtrai os valores</strong> e mantém o <strong>sinal do maior número</strong>:</div>
              <div class="step-math">$-12 + 5 = -7$ (o 12 é maior, fica negativo) &nbsp;&nbsp;|&nbsp;&nbsp; $+12 - 5 = +7$</div>
            </div>
          </div>
        </div>
      </div>

      <div class="guided-card">
        <div class="guided-card-head head-emerald">Op. 1B • Regra de Sinais na MULTIPLICAÇÃO e DIVISÃO</div>
        <div class="formula-banner">
          Usada somente quando há multiplicação ($\times$), divisão ($\div$) ou eliminação de parênteses:
        </div>
        <div class="guided-steps">
          <div class="step-row">
            <span class="step-badge">Sinais Iguais ➔ (+)</span>
            <div class="step-content">
              <div class="step-desc">Positivo com positivo ou negativo com negativo resulta em <strong>POSITIVO</strong>:</div>
              <div class="step-math">$(-4) \times (-5) = +20$ &nbsp;&nbsp;|&nbsp;&nbsp; $(-18) \div (-3) = +6$</div>
            </div>
          </div>
          <div class="step-row">
            <span class="step-badge">Sinais Diferentes ➔ (−)</span>
            <div class="step-content">
              <div class="step-desc">Um positivo e outro negativo resulta sempre em <strong>NEGATIVO</strong>:</div>
              <div class="step-math">$(-4) \times (+5) = -20$ &nbsp;&nbsp;|&nbsp;&nbsp; $(+18) \div (-3) = -6$</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

---

## Eixo 2: MMC, MDC e Operações com Frações

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span>⚙️</span>
      <span>2. COMO CALCULAR E QUANDO USAR MMC vs. MDC</span>
    </div>
    <span class="edu-comp-badge">Semana 01 • Eixo 2A</span>
  </div>
  <div class="guided-body">
    <div class="guided-grid-2">
      <div class="guided-card">
        <div class="guided-card-head head-indigo">MMC (Mínimo Múltiplo Comum)</div>
        <div class="formula-banner">
          <strong>Gatilho de Prova:</strong> Eventos cíclicos que voltam a acontecer juntos no futuro (<em>"de quantos em quantos dias/horas voltarão a se encontrar?"</em>) ou para igualar denominadores de frações.
        </div>
        <div class="guided-steps">
          <div class="step-row">
            <span class="step-badge">Exemplo Guiado</span>
            <div class="step-content">
              <div class="step-desc">Calcular o $\text{MMC}(12, 18)$ fatorando até todos virarem $1$:</div>
              <div class="step-math">
                $12, 18 \div 2 \to 6, 9$<br/>
                $6, 9 \div 2 \to 3, 9$<br/>
                $3, 9 \div 3 \to 1, 3$<br/>
                $1, 3 \div 3 \to 1, 1$
              </div>
            </div>
          </div>
          <div class="step-row">
            <span class="step-badge badge-ok">Resultado</span>
            <div class="step-content">
              <div class="step-desc">Multiplica <strong>todos</strong> os fatores primos da direita:</div>
              <div class="step-math">$\text{MMC}(12, 18) = 2 \times 2 \times 3 \times 3 = \mathbf{36}$</div>
            </div>
          </div>
        </div>
      </div>

      <div class="guided-card">
        <div class="guided-card-head head-amber">MDC (Máximo Divisor Comum)</div>
        <div class="formula-banner">
          <strong>Gatilho de Prova:</strong> Dividir quantidades diferentes em partes/grupos iguais de <strong>maior tamanho possível</strong>, sem sobrar nada.
        </div>
        <div class="guided-steps">
          <div class="step-row">
            <span class="step-badge">Exemplo Guiado</span>
            <div class="step-content">
              <div class="step-desc">No $\text{MDC}(12, 18)$, marque apenas os fatores que dividem <strong>os dois números ao mesmo tempo</strong>:</div>
              <div class="step-math">
                $12, 18 \div \mathbf{2}^* \to 6, 9$ (dividiu ambos ✔️)<br/>
                $6, 9 \div 2 \to 3, 9$ (só dividiu o 6 ❌)<br/>
                $3, 9 \div \mathbf{3}^* \to 1, 3$ (dividiu ambos ✔️)
              </div>
            </div>
          </div>
          <div class="step-row">
            <span class="step-badge badge-ok">Resultado</span>
            <div class="step-content">
              <div class="step-desc">Multiplica apenas os fatores marcados ($2$ e $3$):</div>
              <div class="step-math">$\text{MDC}(12, 18) = 2 \times 3 = \mathbf{6}$</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span>➗</span>
      <span>3. AS 4 OPERAÇÕES COM FRAÇÕES E A "FRAÇÃO DO RESTANTE"</span>
    </div>
    <span class="edu-comp-badge">Semana 01 • Eixo 2B</span>
  </div>
  <div class="guided-body">
    <div class="guided-card">
      <div class="guided-card-head head-indigo">Op. 2A • Soma e Subtração de Frações (Denominadores Diferentes)</div>
      <div class="formula-banner">
        <strong>Regra:</strong> Nunca some os números de baixo! Tire o MMC dos denominadores, <strong>divida pelo de baixo e multiplique pelo de cima</strong>.
      </div>
      <div class="guided-steps">
        <div class="step-row">
          <span class="step-badge">Conta Alvo</span>
          <div class="step-content">
            <div class="step-desc">Resolver a operação:</div>
            <div class="step-math">$\frac{2}{3} + \frac{3}{4} - \frac{1}{6}$</div>
          </div>
        </div>
        <div class="step-row">
          <span class="step-badge">Passo 1</span>
          <div class="step-content">
            <div class="step-desc">Tirar o MMC dos denominadores $(3, 4, 6)$:</div>
            <div class="step-math">$\text{MMC}(3, 4, 6) = \mathbf{12}$ (novo denominador único)</div>
          </div>
        </div>
        <div class="step-row">
          <span class="step-badge">Passo 2</span>
          <div class="step-content">
            <div class="step-desc">Para cada fração, faça: <strong>$(12 \div \text{de baixo}) \times \text{de cima}$</strong>:</div>
            <div class="step-math">
              1ª fração: $(12 \div 3) \times 2 = 4 \times 2 = \mathbf{8}$<br/>
              2ª fração: $(12 \div 4) \times 3 = 3 \times 3 = \mathbf{9}$<br/>
              3ª fração: $(12 \div 6) \times 1 = 2 \times 1 = \mathbf{2}$
            </div>
          </div>
        </div>
        <div class="step-row">
          <span class="step-badge badge-ok">Passo 3</span>
          <div class="step-content">
            <div class="step-desc">Juntar tudo sobre o denominador $12$:</div>
            <div class="step-math">$\frac{8 + 9 - 2}{12} = \mathbf{\frac{15}{12}} \xrightarrow{\text{simplifica por } 3} \mathbf{\frac{5}{4}}$</div>
          </div>
        </div>
      </div>
    </div>

    <div class="guided-grid-2">
      <div class="guided-card">
        <div class="guided-card-head head-emerald">Op. 2B • Multiplicação de Frações</div>
        <div class="formula-banner">
          <strong>Fórmula:</strong> $\frac{a}{b} \times \frac{c}{d} = \frac{a \times c}{b \times d}$ (Multiplica reto: cima com cima, baixo com baixo).<br/>
          <em>Dica:</em> Na matemática, a preposição <strong>"DE"</strong> significa multiplicação ($\frac{2}{5} \text{ de } 100 = \frac{2}{5} \times 100 = 40$).
        </div>
        <div class="guided-steps">
          <div class="step-row">
            <span class="step-badge">Resolução Guiada</span>
            <div class="step-content">
              <div class="step-desc">Multiplicar $\frac{3}{5}$ por $\frac{10}{9}$:</div>
              <div class="step-math">$\frac{3}{5} \times \frac{10}{9} = \frac{3 \times 10}{5 \times 9} = \frac{30}{45} \xrightarrow{\div 15} \mathbf{\frac{2}{3}}$</div>
            </div>
          </div>
        </div>
      </div>

      <div class="guided-card">
        <div class="guided-card-head head-rose">Op. 2C • Divisão de Frações</div>
        <div class="formula-banner">
          <strong>Fórmula:</strong> $\frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \times \frac{d}{c}$<br/>
          <strong>Regra:</strong> Conserva a 1ª fração intacta e <strong>multiplica pelo inverso da 2ª fração</strong>.
        </div>
        <div class="guided-steps">
          <div class="step-row">
            <span class="step-badge">Resolução Guiada</span>
            <div class="step-content">
              <div class="step-desc">Dividir $\frac{4}{7}$ por $\frac{2}{5}$:</div>
              <div class="step-math">$\frac{4}{7} \div \frac{2}{5} = \frac{4}{7} \times \frac{5}{2} = \frac{20}{14} \xrightarrow{\div 2} \mathbf{\frac{10}{7}}$</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="guided-card">
      <div class="guided-card-head head-amber">Op. 2D • Resolução Guiada: Problema da "Fração do Restante"</div>
      <div class="formula-banner">
        <strong>Problema-Modelo (Padrão ACCESS):</strong> Um servidor gastou $\frac{2}{5}$ do salário com aluguel e $\frac{1}{3}$ <strong>do que restou</strong> com alimentação, sobrando ainda R\$ 1.200,00. Qual é o salário total desse servidor?
      </div>
      <div class="guided-steps">
        <div class="step-row">
          <span class="step-badge">Passo 1</span>
          <div class="step-content">
            <div class="step-desc">Descobrir quanto <strong>sobrou</strong> após pagar o aluguel ($\frac{2}{5}$):</div>
            <div class="step-math">$\text{Inteiro} - \text{Aluguel} = \frac{5}{5} - \frac{2}{5} = \mathbf{\frac{3}{5}}$ (1ª sobra)</div>
          </div>
        </div>
        <div class="step-row">
          <span class="step-badge">Passo 2</span>
          <div class="step-content">
            <div class="step-desc">Calcular a alimentação ($\frac{1}{3}$ <strong>da sobra</strong>, ou seja, $\frac{1}{3}$ de $\frac{3}{5}$):</div>
            <div class="step-math">$\frac{1}{3} \times \frac{3}{5} = \frac{3}{15} = \mathbf{\frac{1}{5}}$ do salário foi para alimentação</div>
          </div>
        </div>
        <div class="step-row">
          <span class="step-badge">Passo 3</span>
          <div class="step-content">
            <div class="step-desc">Achar a fração final que restou no bolso:</div>
            <div class="step-math">$\text{1ª sobra} - \text{Alimentação} = \frac{3}{5} - \frac{1}{5} = \mathbf{\frac{2}{5}}$ do salário</div>
          </div>
        </div>
        <div class="step-row">
          <span class="step-badge badge-ok">Passo 4</span>
          <div class="step-content">
            <div class="step-desc">Se $\frac{2}{5}$ equivalem a R\$ 1.200,00, então cada $\frac{1}{5}$ vale R\$ 600,00 ($1.200 \div 2$) e o salário completo ($\frac{5}{5}$) é:</div>
            <div class="step-math">$5 \times 600 = \mathbf{\text{R\$ } 3.000,00}$</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

---

## Eixo 3: Operações com Decimais e Fração Geratriz

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span>🎯</span>
      <span>4. DIVISÃO COM VÍRGULA E DÍZIMAS PERIÓDICAS (FRAÇÃO GERATRIZ)</span>
    </div>
    <span class="edu-comp-badge">Semana 01 • Eixo 3</span>
  </div>
  <div class="guided-body">
    <div class="guided-card">
      <div class="guided-card-head head-indigo">Op. 3A • Divisão de Números com Vírgula (Método de Igualar as Casas)</div>
      <div class="formula-banner">
        <strong>Regra:</strong> Iguale a quantidade de casas depois da vírgula completando com <strong>zeros</strong>, elimine as vírgulas e divida os números inteiros normalmente.
      </div>
      <div class="guided-steps">
        <div class="step-row">
          <span class="step-badge">Conta Alvo</span>
          <div class="step-content">
            <div class="step-desc">Calcular $4{,}5 \div 0{,}15$:</div>
            <div class="step-math">$4{,}5$ (tem <strong>1 casa</strong> após a vírgula) $\div$ $0{,}15$ (tem <strong>2 casas</strong> após a vírgula)</div>
          </div>
        </div>
        <div class="step-row">
          <span class="step-badge">Passo 1</span>
          <div class="step-content">
            <div class="step-desc">Coloque um zero no $4{,}5$ para ambos ficarem com <strong>2 casas decimais</strong>:</div>
            <div class="step-math">$4{,}50 \div 0{,}15$</div>
          </div>
        </div>
        <div class="step-row">
          <span class="step-badge badge-ok">Passo 2</span>
          <div class="step-content">
            <div class="step-desc">Corte a vírgula dos dois lados e divida como inteiros:</div>
            <div class="step-math">$450 \div 15 = \mathbf{30}$</div>
          </div>
        </div>
      </div>
    </div>

    <div class="guided-grid-2">
      <div class="guided-card">
        <div class="guided-card-head head-emerald">Op. 3B • Fração Geratriz de Dízima SIMPLES</div>
        <div class="formula-banner">
          <strong>Quando é simples:</strong> O período (parte que se repete) começa imediatamente após a vírgula.<br/>
          <strong>Fórmula:</strong> Numerador = período | Denominador = um <strong>9</strong> para cada algarismo do período.
        </div>
        <div class="guided-steps">
          <div class="step-row">
            <span class="step-badge">Caso 1</span>
            <div class="step-content">
              <div class="step-desc">Converter $0{,}777\dots$ (período $7$ tem 1 algarismo):</div>
              <div class="step-math">$0{,}777\dots = \mathbf{\frac{7}{9}}$</div>
            </div>
          </div>
          <div class="step-row">
            <span class="step-badge">Caso 2</span>
            <div class="step-content">
              <div class="step-desc">Converter $0{,}3636\dots$ (período $36$ tem 2 algarismos):</div>
              <div class="step-math">$0{,}3636\dots = \frac{36}{99} \xrightarrow{\div 9} \mathbf{\frac{4}{11}}$</div>
            </div>
          </div>
          <div class="step-row">
            <span class="step-badge">Caso 3</span>
            <div class="step-content">
              <div class="step-desc">Com parte inteira ($1{,}444\dots$): some o inteiro com a fração:</div>
              <div class="step-math">$1 + \frac{4}{9} = \frac{9 + 4}{9} = \mathbf{\frac{13}{9}}$</div>
            </div>
          </div>
        </div>
      </div>

      <div class="guided-card">
        <div class="guided-card-head head-amber">Op. 3C • Fração Geratriz de Dízima COMPOSTA</div>
        <div class="formula-banner">
          <strong>Quando é composta:</strong> Existe um número "intruso" (antiperíodo) após a vírgula que <strong>não se repete</strong>.<br/>
          <strong>Fórmula:</strong> $\frac{\text{(Tudo até o 1º período)} - \text{(Parte que não repete)}}{\text{Um } \mathbf{9} \text{ por alg. do período e um } \mathbf{0} \text{ por alg. do intruso}}$
        </div>
        <div class="guided-steps">
          <div class="step-row">
            <span class="step-badge">Conta Alvo</span>
            <div class="step-content">
              <div class="step-desc">Converter $0{,}2555\dots$ em fração:</div>
              <div class="step-math">Intruso (não repete) = $\mathbf{2}$ (1 algarismo) | Período (repete) = $\mathbf{5}$ (1 algarismo)</div>
            </div>
          </div>
          <div class="step-row">
            <span class="step-badge">Passo 1</span>
            <div class="step-content">
              <div class="step-desc">Numerador (junta até o primeiro $5$ e subtrai o intruso $2$):</div>
              <div class="step-math">$25 - 2 = \mathbf{23}$</div>
            </div>
          </div>
          <div class="step-row">
            <span class="step-badge badge-ok">Passo 2</span>
            <div class="step-content">
              <div class="step-desc">Denominador (um $9$ pelo período $5$ e um $0$ pelo intruso $2$ = $90$):</div>
              <div class="step-math">$0{,}2555\dots = \frac{25 - 2}{90} = \mathbf{\frac{23}{90}}$</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

---

## Eixo 4: Potenciação, Radiciação e Expressões Numéricas (PEMDAS)

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span>⚡</span>
      <span>5. TABELA DE OPERAÇÕES COM POTÊNCIAS, RAÍZES E PEMDAS</span>
    </div>
    <span class="edu-comp-badge">Semana 01 • Eixo 4</span>
  </div>
  <div class="guided-body">
    <div class="guided-table-wrap">
      <table class="lesson-table">
        <thead>
          <tr>
            <th>Propriedade / Operação</th>
            <th>Fórmula Geral</th>
            <th>Resolução Guiada com Números</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1. Multiplicação de mesma base</strong></td>
            <td>$a^m \cdot a^n = a^{m + n}$ (conserva a base e <strong>soma</strong> os expoentes)</td>
            <td>$2^3 \cdot 2^4 = 2^{3 + 4} = 2^7 = \mathbf{128}$</td>
          </tr>
          <tr>
            <td><strong>2. Divisão de mesma base</strong></td>
            <td>$\frac{a^m}{a^n} = a^{m - n}$ (conserva a base e <strong>subtrai</strong> os expoentes)</td>
            <td>$\frac{5^6}{5^4} = 5^{6 - 4} = 5^2 = \mathbf{25}$</td>
          </tr>
          <tr>
            <td><strong>3. Potência de potência</strong></td>
            <td>$(a^m)^n = a^{m \cdot n}$ (<strong>multiplica</strong> os expoentes)</td>
            <td>$(3^2)^3 = 3^{2 \times 3} = 3^6 = \mathbf{729}$</td>
          </tr>
          <tr>
            <td><strong>4. Expoente Zero e Negativo</strong></td>
            <td>$a^0 = 1$ &nbsp;|&nbsp; $a^{-n} = \frac{1}{a^n}$ (inverte a base e troca o sinal do expoente)</td>
            <td>$\left(\frac{2}{3}\right)^{-2} = \left(\frac{3}{2}\right)^2 = \frac{3^2}{2^2} = \mathbf{\frac{9}{4}}$</td>
          </tr>
          <tr>
            <td><strong>5. Expoente Fracionário (Raiz)</strong></td>
            <td>$a^{\frac{m}{n}} = \sqrt[n]{a^m}$ (numerador $m$ fica dentro; denominador $n$ vira o índice da raiz)</td>
            <td>$8^{\frac{2}{3}} = \sqrt[3]{8^2} = \sqrt[3]{64} = \mathbf{4}$</td>
          </tr>
          <tr>
            <td><strong>6. Simplificação de Radical</strong></td>
            <td>Fatore o número em primos e tire da raiz quem formar par ($\sqrt{a^2 \cdot b} = a\sqrt{b}$)</td>
            <td>$\sqrt{50} = \sqrt{25 \times 2} = \mathbf{5\sqrt{2}}$</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="guided-card">
      <div class="guided-card-head head-indigo">Op. 4 • Resolução Guiada de Expressão Numérica (Ordem PEMDAS)</div>
      <div class="formula-banner">
        <strong>Ordem Obrigatória:</strong> <strong>1º</strong> Parênteses $(\ )$, Colchetes $[\ ]$, Chaves $\{\ \}$ ➔ <strong>2º</strong> Potências e Raízes ➔ <strong>3º</strong> Multiplicação e Divisão (<strong>na ordem em que aparecerem da esquerda para a direita!</strong>) ➔ <strong>4º</strong> Adição e Subtração.
      </div>
      <div class="guided-steps">
        <div class="step-row">
          <span class="step-badge">Expressão</span>
          <div class="step-content">
            <div class="step-desc">Calcular o valor exato de:</div>
            <div class="step-math">$30 - [\, 20 \div 5 \times 2 + (3^2 - \sqrt{16}) \,]$</div>
          </div>
        </div>
        <div class="step-row">
          <span class="step-badge">Passo 1</span>
          <div class="step-content">
            <div class="step-desc">Resolver as potências e raízes dentro dos <strong>parênteses</strong> ($3^2 = 9$ e $\sqrt{16} = 4$):</div>
            <div class="step-math">$30 - [\, 20 \div 5 \times 2 + (9 - 4) \,] = 30 - [\, 20 \div 5 \times 2 + \mathbf{5} \,]$</div>
          </div>
        </div>
        <div class="step-row">
          <span class="step-badge">Passo 2</span>
          <div class="step-content">
            <div class="step-desc">Dentro dos colchetes, há $\div$ e $\times$. <strong>Pegadinha de prova:</strong> resolva quem vem primeiro da esquerda para a direita ($20 \div 5 = 4$, e depois $4 \times 2 = 8$):</div>
            <div class="step-math">$30 - [\, \mathbf{4} \times 2 + 5 \,] = 30 - [\, \mathbf{8} + 5 \,]$</div>
          </div>
        </div>
        <div class="step-row">
          <span class="step-badge badge-ok">Passo 3</span>
          <div class="step-content">
            <div class="step-desc">Finalizar o colchete ($8 + 5 = 13$) e subtrair de $30$:</div>
            <div class="step-math">$30 - 13 = \mathbf{17}$</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

---

# PARTE 2 — CONTEÚDOS DA SEMANA 02

## Eixo 5: Teoria dos Conjuntos e As 4 Operações

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span>🔗</span>
      <span>6. SÍMBOLOS, SUBCONJUNTOS ($2^n$) E AS 4 OPERAÇÕES ENTRE CONJUNTOS</span>
    </div>
    <span class="edu-comp-badge">Semana 02 • Eixo 1</span>
  </div>
  <div class="guided-body">
    <div class="guided-grid-2">
      <div class="guided-card">
        <div class="guided-card-head head-indigo">Pertinência ($\in$) vs. Inclusão ($\subset$)</div>
        <div class="formula-banner">
          Dado o conjunto $A = \{1, 2, 3\}$:
        </div>
        <div class="guided-steps">
          <div class="step-row">
            <span class="step-badge">$\in$ e $\notin$</span>
            <div class="step-content">
              <div class="step-desc">Compara <strong>Elemento $\to$ Conjunto</strong> (sem chaves):</div>
              <div class="step-math">$2 \in A$ (verdadeiro) &nbsp;|&nbsp; $5 \notin A$ (verdadeiro)</div>
            </div>
          </div>
          <div class="step-row">
            <span class="step-badge">$\subset$ e $\not\subset$</span>
            <div class="step-content">
              <div class="step-desc">Compara <strong>Conjunto $\to$ Conjunto</strong> (com chaves ou $\emptyset$):</div>
              <div class="step-math">$\{1, 2\} \subset A$ (verdadeiro) &nbsp;|&nbsp; $\emptyset \subset A$ (sempre verdadeiro!)</div>
            </div>
          </div>
        </div>
      </div>

      <div class="guided-card">
        <div class="guided-card-head head-amber">Total de Subconjuntos — Fórmula $2^n$</div>
        <div class="formula-banner">
          Se um conjunto $A$ possui $n$ elementos, o Conjunto das Partes $\mathcal{P}(A)$ possui exatamente <strong>$2^n$ subconjuntos</strong>.
        </div>
        <div class="guided-steps">
          <div class="step-row">
            <span class="step-badge">Exemplo Guiado</span>
            <div class="step-content">
              <div class="step-desc">Quantos subconjuntos possui $A = \{a, b, c, d\}$ ($n = 4$ elementos)?</div>
              <div class="step-math">$\text{Total} = 2^4 = 2 \times 2 \times 2 \times 2 = \mathbf{16\text{ subconjuntos}}$</div>
            </div>
          </div>
          <div class="step-row">
            <span class="step-badge">Variação</span>
            <div class="step-content">
              <div class="step-desc">Se a prova pedir subconjuntos <strong>não vazios</strong>, tire $1$ (o vazio $\emptyset$):</div>
              <div class="step-math">$2^4 - 1 = \mathbf{15}$</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="guided-card">
      <div class="guided-card-head head-emerald">Op. 5 • Demonstração Prática das 4 Operações com os Mesmos Conjuntos</div>
      <div class="formula-banner">
        Considere os conjuntos <strong>$A = \{1, 2, 3, 4\}$</strong> e <strong>$B = \{3, 4, 5, 6\}$</strong> dentro do universo <strong>$U = \{1, 2, 3, 4, 5, 6, 7\}$</strong>. Veja o que cada operação faz:
      </div>
      <div class="guided-steps">
        <div class="step-row">
          <span class="step-badge">1. União ($A \cup B$)</span>
          <div class="step-content">
            <div class="step-desc"><strong>Junta todos os elementos</strong> de $A$ e de $B$ (sem repetir o $3$ e o $4$):</div>
            <div class="step-math">$A \cup B = \mathbf{\{1, 2, 3, 4, 5, 6\}}$</div>
          </div>
        </div>
        <div class="step-row">
          <span class="step-badge">2. Interseção ($A \cap B$)</span>
          <div class="step-content">
            <div class="step-desc">Pega <strong>apenas os elementos repetidos (comuns)</strong> que estão nos dois conjuntos ao mesmo tempo:</div>
            <div class="step-math">$A \cap B = \mathbf{\{3, 4\}}$</div>
          </div>
        </div>
        <div class="step-row">
          <span class="step-badge">3. Diferença ($A - B$)</span>
          <div class="step-content">
            <div class="step-desc">Elementos que pertencem <strong>exclusivamente a $A$</strong> (comece com $A$ e risque quem também aparece em $B$):</div>
            <div class="step-math">$A - B = \{1, 2, \cancel{3}, \cancel{4}\} = \mathbf{\{1, 2\}}$ &nbsp;&nbsp;|&nbsp;&nbsp; Já $B - A = \mathbf{\{5, 6\}}$</div>
          </div>
        </div>
        <div class="step-row">
          <span class="step-badge">4. Complementar ($\complement_U A$)</span>
          <div class="step-content">
            <div class="step-desc">O que falta para o conjunto $A$ completar o Universo $U$ ($U - A$):</div>
            <div class="step-math">$\complement_U A = U - A = \mathbf{\{5, 6, 7\}}$</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

---

## Eixo 6: Diagramas de Venn (Resolução Guiada de 2 e 3 Conjuntos)

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span>🔵</span>
      <span>7. RESOLUÇÃO GUIADA COM DIAGRAMAS DE VENN (DE DENTRO PARA FORA)</span>
    </div>
    <span class="edu-comp-badge">Semana 02 • Eixo 2</span>
  </div>
  <div class="guided-body">
    <div class="guided-card">
      <div class="guided-card-head head-indigo">Op. 6A • Caso Guiado 1: Achando as Regiões no Diagrama de 2 Conjuntos</div>
      <div class="formula-banner">
        <strong>Fórmula Geral:</strong> $\text{Total} = \text{Apenas } A + (A \cap B) + \text{Apenas } B + \text{Nenhum}$<br/>
        <strong>Problema-Modelo:</strong> Em uma repartição com <strong>80 servidores</strong>, <strong>45</strong> usam o sistema $A$, <strong>38</strong> usam o sistema $B$ e <strong>15</strong> usam <strong>ambos os sistemas ($A \cap B$)</strong>. Quantos servidores não usam nenhum dos dois?
      </div>
      <div class="guided-steps">
        <div class="step-row">
          <span class="step-badge">Passo 1 (Centro)</span>
          <div class="step-content">
            <div class="step-desc">Comece sempre anotando a <strong>Interseção ($A \cap B$)</strong> no meio:</div>
            <div class="step-math">$n(A \cap B) = \mathbf{15}$</div>
          </div>
        </div>
        <div class="step-row">
          <span class="step-badge">Passo 2 (Exclusivos)</span>
          <div class="step-content">
            <div class="step-desc">Subtraia a interseção ($15$) de cada grupo para descobrir quem usa <strong>apenas um</strong> sistema:</div>
            <div class="step-math">
              $\text{Apenas } A = 45 - 15 = \mathbf{30}$<br/>
              $\text{Apenas } B = 38 - 15 = \mathbf{23}$
            </div>
          </div>
        </div>
        <div class="step-row">
          <span class="step-badge">Passo 3 (União)</span>
          <div class="step-content">
            <div class="step-desc">Some as três regiões internas para achar quantos usam pelo menos um sistema ($A \cup B$):</div>
            <div class="step-math">$n(A \cup B) = 30 + 15 + 23 = \mathbf{68\text{ servidores}}$</div>
          </div>
        </div>
        <div class="step-row">
          <span class="step-badge badge-ok">Passo 4 (Fora)</span>
          <div class="step-content">
            <div class="step-desc">Subtraia do total da repartição ($80$) para achar quem fica de fora (Nenhum):</div>
            <div class="step-math">$\text{Nenhum} = 80 - 68 = \mathbf{12\text{ servidores}}$</div>
          </div>
        </div>
      </div>
    </div>

    <div class="guided-card">
      <div class="guided-card-head head-rose">Op. 6B • Caso Guiado 2: Quando a Prova Esconde a Interseção ($x$)</div>
      <div class="formula-banner">
        <strong>Atalho da Sobra:</strong> Quando a questão dá o Total, dá $n(A)$, dá $n(B)$ e pede a interseção $n(A \cap B)$, <strong>some $A + B + \text{Nenhum}$ e veja quanto passou do Total!</strong> O excesso é exatamente a interseção.
      </div>
      <div class="guided-steps">
        <div class="step-row">
          <span class="step-badge">Problema</span>
          <div class="step-content">
            <div class="step-desc">Num grupo de <strong>100 candidatos</strong>, <strong>65</strong> estudam Português, <strong>55</strong> estudam Matemática e <strong>10</strong> não estudam nenhuma das duas. Quantos estudam <strong>ambas</strong>?</div>
            <div class="step-math">
              1º Some tudo: $65 + 55 + 10 = \mathbf{130}$<br/>
              2º Subtraia o total real ($100$): $130 - 100 = \mathbf{30\text{ estudam ambas!}}$
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

---

## Eixo 7 e Eixo 8: Razão, Proporção e Divisão Proporcional

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span>⚖️</span>
      <span>8. RAZÃO, PROPORÇÃO E DIVISÃO DIRETAMENTE / INVERSAMENTE PROPORCIONAL</span>
    </div>
    <span class="edu-comp-badge">Semana 02 • Eixos 3 e 4</span>
  </div>
  <div class="guided-body">
    <div class="guided-card">
      <div class="guided-card-head head-indigo">Op. 7 • Razão e Multiplicação Cruzada na Proporção</div>
      <div class="formula-banner">
        <strong>Propriedade Fundamental:</strong> $\frac{a}{b} = \frac{c}{d} \iff a \cdot d = b \cdot c$ (Produto dos meios = Produto dos extremos).
      </div>
      <div class="guided-steps">
        <div class="step-row">
          <span class="step-badge">Problema</span>
          <div class="step-content">
            <div class="step-desc">A razão entre processos arquivados e processos pendentes é de $\frac{5}{3}$. Se há $45$ processos pendentes, quantos foram arquivados ($x$)?</div>
            <div class="step-math">$\frac{\text{Arquivados}}{\text{Pendentes}} = \frac{5}{3} \implies \frac{x}{45} = \frac{5}{3}$</div>
          </div>
        </div>
        <div class="step-row">
          <span class="step-badge badge-ok">Resolução</span>
          <div class="step-content">
            <div class="step-desc">Multiplique cruzado ($3 \cdot x = 5 \cdot 45$) e isole o $x$:</div>
            <div class="step-math">$3x = 225 \implies x = \frac{225}{3} = \mathbf{75\text{ processos arquivados}}$</div>
          </div>
        </div>
      </div>
    </div>

    <div class="guided-card">
      <div class="guided-card-head head-emerald">Op. 8A • Resolução Guiada: Divisão DIRETAMENTE Proporcional</div>
      <div class="formula-banner">
        <strong>Regra da Constante $k$:</strong> Na divisão direta, quem tem maior número recebe mais. Coloque um $k$ ao lado de cada peso, some tudo para achar o valor de $1\text{ cota } (k)$ e multiplique no final.
      </div>
      <div class="guided-steps">
        <div class="step-row">
          <span class="step-badge">Problema</span>
          <div class="step-content">
            <div class="step-desc">Dividir <strong>120 processos</strong> entre três servidores de forma <strong>diretamente proporcional</strong> ao tempo de casa: Lucas (<strong>2 anos</strong>), Marina (<strong>3 anos</strong>) e Pedro (<strong>5 anos</strong>).</div>
            <div class="step-math">$\text{Lucas} = 2k$ &nbsp;|&nbsp; $\text{Marina} = 3k$ &nbsp;|&nbsp; $\text{Pedro} = 5k$</div>
          </div>
        </div>
        <div class="step-row">
          <span class="step-badge">Passo 1</span>
          <div class="step-content">
            <div class="step-desc">Somar todas as cotas e igualar ao total de processos ($120$):</div>
            <div class="step-math">$2k + 3k + 5k = 120 \implies 10k = 120 \implies k = \frac{120}{10} = \mathbf{12}$ (cada cota vale $12$)</div>
          </div>
        </div>
        <div class="step-row">
          <span class="step-badge badge-ok">Passo 2</span>
          <div class="step-content">
            <div class="step-desc">Multiplicar os pesos por $k = 12$:</div>
            <div class="step-math">
              $\text{Lucas}: 2 \times 12 = \mathbf{24}$ &nbsp;|&nbsp; $\text{Marina}: 3 \times 12 = \mathbf{36}$ &nbsp;|&nbsp; $\text{Pedro}: 5 \times 12 = \mathbf{60}$ (Soma: $24+36+60 = 120$ ✔️)
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="guided-card">
      <div class="guided-card-head head-amber">Op. 8B • Resolução Guiada: Divisão INVERSAMENTE Proporcional</div>
      <div class="formula-banner">
        <strong>Regra dos 3 Passos:</strong> Na divisão inversa, quem tem número menor recebe mais. <strong>1º</strong> Inverta os pesos ($\frac{1}{p}$); <strong>2º</strong> Tire o MMC dos denominadores e use os numeradores como cotas $k$; <strong>3º</strong> Ache o $k$ e distribua.
      </div>
      <div class="guided-steps">
        <div class="step-row">
          <span class="step-badge">Problema</span>
          <div class="step-content">
            <div class="step-desc">Dividir um bônus de <strong>R\$ 1.800,00</strong> de forma <strong>inversamente proporcional</strong> às faltas de Ana (<strong>2 faltas</strong>) e Bruno (<strong>3 faltas</strong>).</div>
            <div class="step-math">Pesos originais: $\text{Ana} = 2$ &nbsp;e&nbsp; $\text{Bruno} = 3$</div>
          </div>
        </div>
        <div class="step-row">
          <span class="step-badge">Passo 1</span>
          <div class="step-content">
            <div class="step-desc">Inverter os números e igualar os denominadores pelo $\text{MMC}(2, 3) = 6$:</div>
            <div class="step-math">
              $\text{Ana}: \frac{1}{2} = \frac{\mathbf{3}}{6} \implies \mathbf{3k}$<br/>
              $\text{Bruno}: \frac{1}{3} = \frac{\mathbf{2}}{6} \implies \mathbf{2k}$
            </div>
          </div>
        </div>
        <div class="step-row">
          <span class="step-badge">Passo 2</span>
          <div class="step-content">
            <div class="step-desc">Somar as cotas ($3k + 2k$) e igualar a R\$ 1.800,00 para achar $k$:</div>
            <div class="step-math">$3k + 2k = 1.800 \implies 5k = 1.800 \implies k = \frac{1.800}{5} = \mathbf{360}$</div>
          </div>
        </div>
        <div class="step-row">
          <span class="step-badge badge-ok">Passo 3</span>
          <div class="step-content">
            <div class="step-desc">Multiplicar as cotas por $k = 360$:</div>
            <div class="step-math">
              $\text{Ana (faltou menos)}: 3 \times 360 = \mathbf{\text{R\$ } 1.080,00}$<br/>
              $\text{Bruno (faltou mais)}: 2 \times 360 = \mathbf{\text{R\$ } 720,00}$
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

---

## ⚡ Checklist de Resgate Rápido (10 Gatilhos de Prova)
- [ ] 1. Raiz quadrada de número não exato ($\sqrt{2}, \sqrt{3}, \sqrt{7}$) é **número irracional** ($\mathbb{I}$); não pode virar fração.
- [ ] 2. Toda dízima periódica ($0{,}333\dots$ ou $0{,}1212\dots$) é **número racional** ($\mathbb{Q}$), pois tem fração geratriz.
- [ ] 3. Na divisão de frações, conserva a primeira e **multiplica pelo inverso da segunda**.
- [ ] 4. Em problemas com fração do que sobrou, calcule a sobra antes de aplicar a segunda fração.
- [ ] 5. Qualquer número não nulo elevado a zero vale **1** ($a^0 = 1$); com expoente negativo, **inverte a base**.
- [ ] 6. Em expressões numéricas, multiplicação e divisão resolvem-se **na ordem em que aparecem** (da esquerda p/ direita).
- [ ] 7. Um conjunto com $n$ elementos tem **$2^n$ subconjuntos** (conjunto das partes).
- [ ] 8. No Diagrama de Venn de 2 conjuntos: $n(A \cup B) = n(A) + n(B) - n(A \cap B)$.
- [ ] 9. Para preencher diagramas de Venn, comece obrigatoriamente pela **interseção de todos os conjuntos** e subtraia.
- [ ] 10. Na divisão inversamente proporcional, inverta os números dados, tire o MMC dos denominadores e use os numeradores como pesos diretos.
