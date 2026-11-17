# Semana 04: Matemática e Raciocínio Lógico-Matemático (RLM) — Equações, Inequações e Sistemas de 1º Grau
**Cargo:** Oficial Administrativo  
**Nível de Escolaridade:** Ensino Médio  
**Foco:** Desmontagem Passo a Passo dos Bastidores do Cálculo, Tradução do Português para a Álgebra, Demonstração Lógica das Regras, Fixação Entre Blocos e Questões no Padrão Instituto ACCESS  

---

## Sumário da Aula
1. [Eixo 1: Equações de 1º Grau — A Balança do Equilíbrio e o Dicionário Algébrico](#eixo-1-equações-de-1º-grau--a-balança-do-equilíbrio-e-o-dicionário-algébrico)
   - O que é Álgebra e qual problema real uma Equação resolve?
   - Vocabulário sem Mistério: Incógnita, Coeficiente, Termo Independente e Membros
   - A Lei da Balança de Dois Pratos: O que *realmente* acontece quando um número "passa para o outro lado"?
   - O Dicionário Português $\leftrightarrow$ Matematiquês (Como traduzir textos em contas)
   - Os 3 Obstáculos Técnicos: Parênteses (Chuveirinho), Sinal de Menos antes de Parênteses e Equações com Frações (Golpe do MMC)
   - Síntese Feynman (Equações de 1º Grau)
   - 🛑 Bloco de Fixação Direta 1 (Aprender a Matemática na Unha)
2. [Eixo 2: Inequações de 1º Grau — Limites, Metas e o Mistério do Sinal Invertido](#eixo-2-inequações-de-1º-grau--limites-metas-e-o-mistério-do-sinal-invertido)
   - O que é uma Inequação e onde ela aparece na Prefeitura?
   - Traduzindo os 4 Símbolos ($>$, $<$, $\ge$, $\le$) para as Palavras de Prova (*no mínimo*, *no máximo*, *pelo menos*)
   - Por que multiplicar ou dividir por número negativo ($-1$) INVERTE a boca do jacaré? (Demonstração visual na reta numérica)
   - Síntese Feynman (Inequações de 1º Grau)
   - 🛑 Bloco de Fixação Direta 2 (Treino de Inequações)
3. [Eixo 3: Sistemas de Equações de 1º Grau com Duas Incógnitas ($x$ e $y$)](#eixo-3-sistemas-de-equações-de-1º-grau-com-duas-incógnitas-x-e-y)
   - Por que duas letras precisam de duas pistas?
   - Método 1: A Substituição (Isolar em cima e encaixar embaixo)
   - Método 2: A Adição / Eliminação (O cancelamento direto de uma letra)
   - O Modelo Campeão de Concursos: "Total de Unidades vs. Total de Valor/Capacidade"
   - Síntese Feynman (Sistemas de 1º Grau)
   - 🛑 Bloco de Fixação Direta 3 (Treino de Sistemas)
4. [Laboratório de 3 Exemplos Guiados Passo a Passo](#laboratório-de-3-exemplos-guiados-passo-a-passo)
5. [Raio-X das Armadilhas: Os Erros de Conta que Viram Alternativas Erradas](#raio-x-das-armadilhas-os-erros-de-conta-que-viram-alternativas-erradas)
6. [Bateria Interativa: 6 Questões de Fixação por Bloco + 8 Questões Padrão Instituto ACCESS](#bateria-interativa-6-questões-de-fixação-por-bloco--8-questões-padrão-instituto-access)
7. [Checklist de Fixação Ativa para o Caderno](#checklist-de-fixação-ativa-para-o-caderno)

---

## EIXO 1: Equações de 1º Grau — A Balança do Equilíbrio e o Dicionário Algébrico

### 1. O que é Álgebra e qual problema real uma Equação resolve?
Nas Semanas 01 a 03, fizemos **Aritmética**: todas as peças da conta eram conhecidas desde o início e você só precisava calcular o resultado final. Exemplo: *"Comprei $3$ caixas de papel a $\text{R\$ } 20{,}00$ cada e paguei $\text{R\$ } 15{,}00$ de frete. Quanto gastei?"*
$$3 \times 20 + 15 = 60 + 15 = \text{R\$ } 75{,}00$$

Na vida real de uma Prefeitura — e nas provas do Instituto ACCESS —, muitas vezes acontece o inverso: **você já conhece o resultado final ($\text{R\$ } 75{,}00$), conhece o frete ($\text{R\$ } 15{,}00$) e sabe que foram $3$ caixas iguais, mas o preço de cada caixa está escondido na nota fiscal borrada!**

Antigamente, na escola primária, representávamos esse valor escondido por um quadradinho vazio:
$$3 \times \square + 15 = 75$$

A **Álgebra** (palavra que vem do árabe *al-jabr*, que significa *"recompor / restaurar partes quebradas"*) simplesmente trocou o desenho do quadradinho $\square$ por uma letra do alfabeto — geralmente o **$x$** — para ficar mais rápido de escrever!
$$3x + 15 = 75$$

> [!NOTE]
> **Por que escrevemos $3x$ grudado, sem o sinal de multiplicação?**  
> Porque o sinal clássico de vezes ($\times$) é idêntico à letra $x$! Se escrevêssemos $3 \times x$, pareceria *"três xis xis"*. Por isso, na Álgebra combinou-se uma regra universal: **sempre que um número estiver encostado em uma letra (ou em um parêntese) sem nenhum sinal no meio, eles estão SE MULTIPLICANDO!**  
> * $3x$ significa **$3 \cdot x$** (o triplo de $x$).  
> * $x$ sozinho significa **$1 \cdot x$** (quando não há número visível na frente da letra, o número invisível ali é sempre o **$1$**, nunca o zero!).

---

### 2. Vocabulário sem Mistério: O Nome de Cada Peça
Antes de mexer nas peças, vamos dar nome a cada uma para que nenhum termo técnico te assuste em enunciados ou comentários de prova:

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span class="edu-comp-icon">🔍</span>
      <span>ANATOMIA DE UMA EQUAÇÃO DE 1º GRAU: $3x + 15 = x + 55$</span>
    </div>
    <span class="edu-comp-badge">Vocabulário Essencial</span>
  </div>
  <div class="edu-cards-grid grid-3">
    <div class="edu-card card-indigo">
      <div class="edu-card-top">
        <span class="card-icon">🎯</span>
        <span class="card-badge">A Letra ($x$)</span>
      </div>
      <h4 class="card-title">Incógnita e 1º Grau</h4>
      <p class="card-text"><strong>Incógnita</strong> significa <em>"coisa desconhecida"</em> (o valor oculto que queremos descobrir). Dizemos que a equação é de <strong>1º grau</strong> porque o expoente da letra $x$ é $1$ ($x^1 = x$), ou seja, não tem $x^2$ nem $x^3$.</p>
      <div class="card-examples">
        <span class="ex-tag">$x$ = valor misterioso</span>
      </div>
    </div>
    <div class="edu-card card-emerald">
      <div class="edu-card-top">
        <span class="card-icon">🔢</span>
        <span class="card-badge">Os Números</span>
      </div>
      <h4 class="card-title">Coeficiente vs. Termo Independente</h4>
      <p class="card-text"><strong>Coeficiente</strong> é o número multiplicador que vem colado na letra (em $3x$, o coeficiente é $3$; em $x$, é $1$). Já o <strong>Termo Independente</strong> é o número solto, sem letra ($+15$ e $+55$).</p>
      <div class="card-examples">
        <span class="ex-tag">$3x \to$ coef. $3$</span>
        <span class="ex-tag">$+15 \to$ independente</span>
      </div>
    </div>
    <div class="edu-card card-amber">
      <div class="edu-card-top">
        <span class="card-icon">⚖️</span>
        <span class="card-badge">Os Dois Lados</span>
      </div>
      <h4 class="card-title">1º Membro e 2º Membro</h4>
      <p class="card-text">O sinal de igual ($=$) é o pino central da balança. Tudo o que está à <strong>esquerda</strong> do $=$ chama-se <strong>1º Membro</strong> ($3x + 15$); tudo o que está à <strong>direita</strong> chama-se <strong>2º Membro</strong> ($x + 55$).</p>
      <div class="card-examples">
        <span class="ex-tag">$\underbrace{3x + 15}_{\text{1º Membro}} = \underbrace{x + 55}_{\text{2º Membro}}$</span>
      </div>
    </div>
  </div>
</div>

---

### 3. A Lei da Balança de Dois Pratos: O que *Realmente* Acontece nos Bastidores?
Na escola, quase todo mundo decorou frases mecânicas como: *"Está somando, passa para o outro lado diminuindo; está multiplicando, passa dividindo"*. Mas quando a conta fica grande ou envolve sinais negativos, quem só decorou a frase se confunde inteiro: *"Espere aí, quando o $-3$ passa dividindo, ele vira $+3$ ou continua $-3$?"*

Vamos acabar com essa dúvida para sempre entendendo **a física real da conta**:

Imagine uma **balança de feira de dois pratos** em perfeito equilíbrio:
* No **Prato da Esquerda (1º Membro)**, há **3 caixas fechadas iguais ($3x$)** mais um peso de **$15\text{ kg}$**.
* No **Prato da Direita (2º Membro)**, há um peso total de **$75\text{ kg}$**.
* Equação: $3x + 15 = 75$.

Nosso objetivo ao resolver uma equação é **deixar uma única caixa ($x$) completamente sozinha em um dos pratos** para ler quanto ela pesa no outro prato! Como fazemos isso sem desequilibrar a balança?

```text
================================================================================
              A FÍSICA DOS BASTIDORES vs. O ATALHO DE PROVA
================================================================================

  EQUAÇÃO INICIAL:          3x + 15 = 75

  PASSO 1: Queremos nos livrar do "+ 15" que está atrapalhando o 3x.
  • O que fazemos na balança? Tiramos 15 kg DOS DOIS PRATOS ao mesmo tempo!
      3x + 15 - 15 = 75 - 15
      3x + 0       = 60
      3x           = 60
  • Como parece no atalho visual? Parece que o "+ 15" pulou a cerca do "="
    e virou "- 15" do outro lado!

  PASSO 2: Temos 3 caixas pesando 60 kg (3x = 60). Queremos 1 caixa só (1x).
  • O que fazemos na balança? Dividimos OS DOIS PRATOS por 3!
      (3x) / 3 = 60 / 3
       1x      = 20  --->  x = 20 kg!
  • Como parece no atalho visual? Parece que o "3" que multiplicava o x
    desceu dividindo o 60!
================================================================================
```

> [!IMPORTANT]
> **Por que entender os bastidores salva sua questão na prova?**  
> Porque agora você enxerga que **você nunca "troca o sinal do número" ao mudar de lado; você aplica a OPERAÇÃO INVERSA!**  
> Veja o caso clássico que derruba candidatos:
> $$-3x = 12$$
> Qual é a operação que o $-3$ está fazendo com o $x$? Ele está **multiplicando** o $x$ por $-3$!  
> Para cancelar uma multiplicação por $-3$, dividimos os dois lados por **$-3$** (o sinal de menos faz parte do número que estamos dividindo!):
> $$\frac{-3x}{-3} = \frac{12}{-3} \implies x = \mathbf{-4}$$
> *(Quem decora "troca o sinal ao passar para o outro lado" erra porque passa o $-3$ dividindo como $+3$! Quando a operação invertida já é de multiplicação para divisão, o sinal do número multiplicador vai junto com ele para baixo!).*

---

### 4. O Dicionário Português $\leftrightarrow$ Matematiquês (Como Traduzir o Enunciado)
O Instituto ACCESS raramente entrega a equação pronta ($2x + 10 = 50$). Ele entrega uma **história em português** com servidores, processos, salários ou idades, e o seu verdadeiro trabalho é **traduzir cada frase do português para a linguagem algébrica**.

Guarde esta tabela de tradução simultânea:

| Como o Enunciado Escreve em Português | Como Você Escreve na Equação | Por que é Assim? (A Lógica) |
| :--- | :---: | :--- |
| *"Um número desconhecido / certa quantia"* | $x$ | É o nosso ponto de partida (a incógnita). |
| *"O **dobro** / o **triplo** / o **quádruplo** de um número"* | $2x \;/\; 3x \;/\; 4x$ | Multiplicar o número por $2$, $3$ ou $4$. |
| *"A **metade** / a **terça parte** / a **quinta parte**"* | $\dfrac{x}{2} \;/\; \dfrac{x}{3} \;/\; \dfrac{x}{5}$ | Dividir o número em $2$, $3$ ou $5$ partes iguais. |
| *"Dois quintos de um valor"* | $\dfrac{2x}{5}$ | Multiplicar pela fração $\frac{2}{5}$. |
| *"Um número **acrescido de** / **somado a** / **superado em** $8$"* | $x + 8$ | Ideia de adição/ganho. |
| *"A **diferença** entre um número e $12$"* / *"$12$ **a menos** que $x$"* | $x - 12$ | *Diferença* na matemática é sempre **subtração** na ordem dada. |
| *"O **triplo de** um número, menos $10$"* (com vírgula) | $3x - 10$ | Primeiro multiplica o número por $3$, depois tira $10$. |
| *"O **triplo da diferença** entre um número e $10$"* | $3\cdot(x - 10)$ | Aqui o triplo incide sobre a diferença inteira $\to$ exige **parênteses**! |
| *"O **sucessor** de um número inteiro $x$"* | $x + 1$ | O próximo número inteiro (ex.: o sucessor de $7$ é $7+1=8$). |
| *"O **antecessor** de um número inteiro $x$"* | $x - 1$ | O número inteiro imediatamente anterior. |
| *"Três números inteiros **consecutivos**"* | $x,\; x+1,\; x+2$ | Cada próximo número aumenta de $1$ em $1$. |
| *"Três números **pares** (ou ímpares) consecutivos"* | $x,\; x+2,\; x+4$ | Pares (ou ímpares) pulam de **$2$ em $2$** (ex.: $10, 12, 14$). |
| *"De um total $x$, gastou $\frac{1}{4}$ e **restaram** $\dots$"* | $\text{Resto} = x - \dfrac{x}{4} = \dfrac{3x}{4}$ | Se tirou $1$ parte de $4$, sobraram automaticamente $3$ partes de $4$! |

---

### 5. Os 3 Obstáculos Técnicos nas Contas (e Como Desmontá-los)

Quando você monta a equação a partir do texto, quase sempre aparecerá um destes três obstáculos antes de você conseguir isolar o $x$. Veja como derrubar cada um:

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span class="edu-comp-icon">🛠️</span>
      <span>AS 3 MANOBRAS TÉCNICAS OBRIGATÓRIAS</span>
    </div>
    <span class="edu-comp-badge">Destravando o Cálculo</span>
  </div>
  <div class="edu-cards-grid grid-3">
    <div class="edu-card card-indigo">
      <div class="edu-card-top">
        <span class="card-icon">🚿</span>
        <span class="card-badge">Manobra 1</span>
      </div>
      <h4 class="card-title">Propriedade Distributiva ("Chuveirinho")</h4>
      <p class="card-text">Quando um número multiplica um parêntese, como $4(2x - 5)$, esse número de fora deve multiplicar <strong>TODOS os termos lá de dentro</strong>, respeitando a regra dos sinais:</p>
      <div class="card-examples">
        <span class="ex-tag">$4(2x - 5) = 4\cdot 2x - 4\cdot 5 = \mathbf{8x - 20}$</span>
      </div>
    </div>
    <div class="edu-card card-rose">
      <div class="edu-card-top">
        <span class="card-icon">⚠️</span>
        <span class="card-badge">Manobra 2</span>
      </div>
      <h4 class="card-title">Sinal de Menos Antes de Parêntese ou Fração</h4>
      <p class="card-text">Um sinal de menos colado na frente de um parêntese, como $-(3x - 7)$, é na verdade <strong>$-1 \cdot (3x - 7)$</strong>. Ele <strong>inverte o sinal de todo mundo</strong> que está lá dentro!</p>
      <div class="card-examples">
        <span class="ex-tag">$10 - (3x - 7) = 10 - 3x \mathbf{+ 7}$</span>
      </div>
    </div>
    <div class="edu-card card-emerald">
      <div class="edu-card-top">
        <span class="card-icon">🧹</span>
        <span class="card-badge">Manobra 3</span>
      </div>
      <h4 class="card-title">O Golpe do MMC (Eliminando Frações)</h4>
      <p class="card-text">Odeia somar frações com $x$? Em uma equação, se você tirar o <strong>MMC de todos os denominadores</strong> e aplicar nos dois lados (<em>divide pelo de baixo, multiplica pelo de cima</em>), você <strong>corta os denominadores fora</strong> na hora!</p>
      <div class="card-examples">
        <span class="ex-tag">$\frac{x}{2} + \frac{x}{3} = 10 \xrightarrow{\text{MMC}=6} 3x + 2x = 60$</span>
      </div>
    </div>
  </div>
</div>

#### 🔎 Veja a Manobra 3 (Golpe do MMC) em Câmera Lenta:
Imagine que você precisa resolver:
$$\frac{x}{2} + \frac{x}{5} + 18 = x$$
1. **Coloque o denominador $1$ embaixo de quem não tem fração:**
   $$\frac{x}{2} + \frac{x}{5} + \frac{18}{1} = \frac{x}{1}$$
2. **Qual é o MMC entre $2$, $5$ e $1$?** Como $2$ e $5$ são primos, basta multiplicar: $\text{MMC} = 2 \times 5 = \mathbf{10}$.
3. **Aplique a regra "Divide pelo de baixo e multiplica pelo de cima" em TODOS os termos dos dois lados:**
   * 1º termo: $(10 \div 2) \times x = \mathbf{5x}$
   * 2º termo: $(10 \div 5) \times x = \mathbf{2x}$
   * 3º termo: $(10 \div 1) \times 18 = \mathbf{180}$
   * Lado direito: $(10 \div 1) \times x = \mathbf{10x}$
4. **Agora como os dois lados estão sobre $10$, jogamos o denominador $10$ no lixo!** Olhe que equação limpa sobrou:
   $$5x + 2x + 180 = 10x$$
   $$7x + 180 = 10x \implies 180 = 10x - 7x \implies 3x = 180 \implies x = \frac{180}{3} = \mathbf{60}$$

> [!TIP]
> **Síntese Feynman de 3 Linhas (Equações de 1º Grau):**
> 1. Uma equação de 1º grau é uma **balança em equilíbrio**: para descobrir o valor oculto ($x$), deixamos todos os termos com $x$ de um lado e os números puros do outro, aplicando sempre a **operação inversa**.
> 2. Ao eliminar parênteses com sinal negativo na frente, lembre-se de que o sinal de menos **inverte o sinal de todos os termos internos** ($-(a - b) = -a + b$).
> 3. Quando houver frações na equação, tire o **MMC de todos os denominadores** nos dois membros (*divide pelo de baixo, multiplica pelo de cima*) e descarte os denominadores de uma vez só.

---

### 🛑 PARE E TREINE — Bloco de Fixação Direta 1 (Equações na Unha)
Antes de avançarmos para as Inequações, resolva no papel estes 4 exercícios progressivos focados puramente na mecânica da equação de 1º grau e confira a desmontagem logo abaixo:

1. **Equação com Distributiva e Sinal Negativo:** Resolva $5(x - 2) - 2(x - 4) = 13$.
2. **Equação com Frações (Golpe do MMC):** Resolva $\dfrac{x}{3} + \dfrac{x}{4} = 14$.
3. **Armadilha de Sinal no Numerador da Fração:** Resolva $x - \dfrac{x - 2}{3} = 6$.
4. **Tradução Direta:** *"A soma de três números inteiros consecutivos é igual a $78$. Qual é o maior desses três números?"*

<details>
<summary><b>Ver Resolução Passo a Passo da Fixação Direta 1</b></summary>

* **1. Resolução de $5(x - 2) - 2(x - 4) = 13$:**
  - Aplicando o chuveirinho (cuidado com $-2 \cdot (-4) = +8$!):
    $$5x - 10 - 2x + 8 = 13$$
  - Juntando letras com letras ($5x - 2x = 3x$) e números com números ($-10 + 8 = -2$) no 1º membro:
    $$3x - 2 = 13$$
  - Passando o $-2$ somando para o 2º membro:
    $$3x = 13 + 2 \implies 3x = 15 \implies x = \frac{15}{3} = \mathbf{5}$$

* **2. Resolução de $\frac{x}{3} + \frac{x}{4} = 14$:**
  - O MMC entre $3$, $4$ e $1$ é **$12$**.
  - Aplicando *"divide pelo de baixo, multiplica pelo de cima"* nos dois lados:
    $$(12 \div 3)\cdot x + (12 \div 4)\cdot x = (12 \div 1)\cdot 14$$
    $$4x + 3x = 168 \implies 7x = 168 \implies x = \frac{168}{7} = \mathbf{24}$$

* **3. Resolução de $x - \frac{x - 2}{3} = 6$ (CUIDADO MÁXIMO AQUI!):**
  - O MMC é **$3$**. Mas repare que há um sinal de **menos** na frente da fração $\frac{x - 2}{3}$! Esse menos pertence ao pacote inteiro $(x - 2)$:
    $$3x - 1\cdot(x - 2) = 18$$
    $$3x - x \mathbf{+ 2} = 18 \implies 2x = 16 \implies x = \mathbf{8}$$
  - *(Tirando a prova real com $x = 8$: $8 - \frac{8 - 2}{3} = 8 - \frac{6}{3} = 8 - 2 = 6$. Cravado!).*

* **4. Resolução dos Três Inteiros Consecutivos:**
  - Três consecutivos são: $x$, $(x + 1)$ e $(x + 2)$.
  - Somando os três:
    $$x + (x + 1) + (x + 2) = 78 \implies 3x + 3 = 78 \implies 3x = 75 \implies x = \mathbf{25}$$
  - Atenção à pergunta: pediu o **maior** dos três! Os números são $25$, $26$ e $27$. Logo, o maior é **$27$**!
</details>

---

## EIXO 2: Inequações de 1º Grau — Limites, Metas e o Mistério do Sinal Invertido

### 1. O que é uma Inequação e onde ela aparece na Prefeitura?
O prefixo **"in-"** significa negação (*in*feliz = não feliz; *in*equação = **não igualdade / desigualdade**).
Enquanto a **equação** procura um valor único que empata a balança ($=$), a **inequação** procura **uma faixa inteira de valores** que faz um lado superar ou ficar abaixo de uma meta ($>$, $<$, $\ge$, $\le$).

**Exemplo concreto na Prefeitura:**
Imagine que a Prefeitura tem um orçamento máximo de $\text{R\$ } 1.000{,}00$ para comprar cadeiras de $\text{R\$ } 150{,}00$ cada, pagando $\text{R\$ } 100{,}00$ de frete fixo. Quantas cadeiras ($x$) o Oficial Administrativo pode comprar sem estourar a verba?
$$150x + 100 \le 1.000$$
Repare que ele não é obrigado a gastar exatamente os $\text{R\$ } 1.000{,}00$: ele pode gastar **menos ou igual** a $\text{R\$ } 1.000{,}00$!

---

### 2. Traduzindo os 4 Símbolos de Desigualdade para o Português de Prova
Para nunca confundir para qual lado a seta aponta, lembre-se da **Regra da Boca do Jacaré**: **a boca aberta do símbolo aponta SEMPRE para o lado MAIOR**, e a pontinha fechada aponta sempre para o lado **MENOR**.

| Símbolo | Nome Oficial | Como o Enunciado da Banca Escreve no Texto | Inclui o Número da Fronteira? |
| :---: | :--- | :--- | :---: |
| **$>$** | **Maior que** | *"Superar"*, *"ultrapassar"*, *"ser superior a"*, *"mais de"*, *"acima de"*. | **NÃO** (se $x > 10$ e $x$ é inteiro, o menor $x$ que serve é **$11$**). |
| **$<$** | **Menor que** | *"Ser inferior a"*, *"menos de"*, *"abaixo de"*, *"aquém de"*. | **NÃO** (se $x < 10$ e $x$ é inteiro, o maior $x$ que serve é **$9$**). |
| **$\ge$** | **Maior ou igual a** | ***"Pelo menos"***, ***"no mínimo"***, *"a partir de"*, *"não inferior a"*. | **SIM** (se $x \ge 10$, o próprio **$10$** já serve!). |
| **$\le$** | **Menor ou igual a** | ***"No máximo"***, ***"até"***, *"não ultrapassar"*, *"não superior a"*. | **SIM** (se $x \le 10$, o próprio **$10$** ainda serve!). |

---

### 3. A Grande Regra da Inequação: Por que Multiplicar ou Dividir por Negativo Inverte o Sinal?
A resolução de uma inequação de 1º grau é **99% idêntica à de uma equação**: você passa números somando, subtraindo, tira MMC, faz chuveirinho... **TUDO IGUAL!**

Existe apenas **UMA ÚNICA DIFERENÇA** em toda a matéria, e é exatamente nela que as bancas montam todas as pegadinhas:

> [!CAUTION]
> **A REGRA DE OURO DAS INEQUAÇÕES:**  
> Quando o coeficiente final do $x$ for **NEGATIVO** (ex.: $-2x > 10$) e você multiplicar ou dividir os dois lados por um **número negativo** (ou multiplicar por $-1$), **você é OBRIGADO a inverter o sentido do sinal da desigualdade** ($>$ vira $<$; $\ge$ vira $\le$)!

#### 🧠 Mas POR QUE isso acontece? (Entendendo a lógica em vez de decorar)
Muita gente esquece de inverter o sinal na hora da prova porque acha que é uma "regra arbitrária inventada pelos matemáticos". Não é! Olhe o que acontece com dois números simples na reta numérica (ou num termômetro de temperatura):

```text
================================================================================
         POR QUE MULTIPLICAR POR (-1) INVERTE O SINAL DA DESIGUALDADE?
================================================================================

  1. Pense em duas temperaturas positivas:  5 °C  e  2 °C.
     Qual é maior? Óbvio que 5 é maior que 2:
                         5  >  2     (VERDADEIRO!)

  2. Agora multiplique os dois lados por (-1).
     O 5 vira -5, e o 2 vira -2:
     Na reta numérica (ou no termômetro de frio):

        <---|-------|-------|-------|-------|-------|-------|--->
           -5      -4      -3      -2      -1       0      +2

     Quem está mais à direita (quem é mais quente / MAIOR): -5 ou -2?
     O -2 é MAIOR que o -5! (Dever R$ 2 é melhor/maior do que dever R$ 5!).

  3. Portanto, se mantivéssemos o sinal ">", escreveríamos "-5 > -2" (FALSO!).
     Para a frase continuar verdadeira no mundo negativo, o sinal É OBRIGADO
     a espelhar junto com os números:
                        -5  <  -2    (VERDADEIRO!)
================================================================================
```

**Veja na prática como resolver $-3x + 18 \ge 6$:**
1. Passe o $+18$ para a direita subtraindo (passar somando ou subtraindo **NÃO** inverte o sinal!):
   $$-3x \ge 6 - 18$$
   $$-3x \ge -12$$
2. Agora o número que acompanha o $x$ é negativo ($-3$). Multiplique a linha toda por **$(-1)$** (troca todos os sinais **E** vira o $\ge$ para $\le$):
   $$3x \mathbf{\le} 12 \implies x \le \frac{12}{3} \implies \mathbf{x \le 4}$$

> [!TIP]
> **Síntese Feynman de 3 Linhas (Inequações de 1º Grau):**
> 1. A inequação funciona igual à equação de 1º grau, mas representa um **intervalo de soluções**: traduzimos *"no mínimo / pelo menos"* por **$\ge$** e *"no máximo / até"* por **$\le$**.
> 2. Ao multiplicar ou dividir os dois membros por um **número negativo** (para positivar o $-x$), o sentido da desigualdade **inverte obrigatoriamente** ($>$ vira $<$, e $\ge$ vira $\le$) porque na reta negativa os valores se espelham.
> 3. Atenção ao final da conta: se o problema pedir um número inteiro para $x > 7$, a resposta mínima não é $7$, e sim **$8$**!

---

### 🛑 PARE E TREINE — Bloco de Fixação Direta 2 (Inequações na Unha)
Resolva no rascunho estas 3 situações práticas antes de ir para o Eixo 3:

1. **Inequação Direta:** Determine o conjunto solução de $4x - 7 > 2x + 9$.
2. **Inequação com Coeficiente Negativo:** Determine o maior número inteiro $x$ que satisfaz $15 - 2x > 4x - 9$.
3. **Problema Prático de Meta:** Um Oficial Administrativo já protocolou $28$ processos hoje. Em cada hora restante de trabalho ($h$), ele consegue protocolar $12$ processos. Quantas horas inteiras, **no mínimo**, ele ainda precisa trabalhar para que o total do dia **ultrapasse** $100$ processos?

<details>
<summary><b>Ver Resolução Passo a Passo da Fixação Direta 2</b></summary>

* **1. Resolução de $4x - 7 > 2x + 9$:**
  - Trazendo $2x$ para a esquerda e levando $-7$ para a direita:
    $$4x - 2x > 9 + 7 \implies 2x > 16 \implies x > \frac{16}{2} \implies \mathbf{x > 8}$$

* **2. Resolução de $15 - 2x > 4x - 9$:**
  - Juntando os termos com $x$ na esquerda e os números na direita:
    $$-2x - 4x > -9 - 15 \implies -6x > -24$$
  - Como o coeficiente do $x$ é negativo ($-6$), multiplicamos tudo por $(-1)$ e **invertemos o sinal $>$ para $<$**:
    $$6x \mathbf{<} 24 \implies x < \frac{24}{6} \implies \mathbf{x < 4}$$
  - Atenção à pergunta: qual é o **maior número inteiro** menor que $4$? O número **$3$**!

* **3. Resolução da Meta de Processos:**
  - A palavra do comando é **"ultrapasse"** $100$ (ou seja, estritamente **maior que $100$**: $> 100$).
  - Montando a inequação:
    $$28 + 12h > 100 \implies 12h > 100 - 28 \implies 12h > 72 \implies h > \frac{72}{12} \implies \mathbf{h > 6}$$
  - Cuidado final: se em $6$ horas ele chega a exatamente $100$ processos ($28 + 72 = 100$), ele ainda **não ultrapassou** $100$! Para ultrapassar $100$ trabalhando horas inteiras, ele precisa de no mínimo **$7\text{ horas}$**!
</details>

---

## EIXO 3: Sistemas de Equações de 1º Grau com Duas Incógnitas ($x$ e $y$)

### 1. Por que Duas Letras Precisam de Duas Pistas?
Imagine que eu chegue para você na repartição e diga apenas uma frase:
*"Somando a quantidade de processos na mesa da Ana ($x$) com a da mesa do Bruno ($y$), dá $10$ processos ao todo ($x + y = 10$)."*

Quantos processos a Ana tem? **Impossível saber só com isso!** Pode ser $1$ e $9$, pode ser $2$ e $8$, pode ser $5$ e $5$, pode ser $7$ e $3$... Quando temos **duas incógnitas ($x$ e $y$) em uma única equação**, existem várias combinações que funcionam.

Mas agora imagine que eu te dê uma **segunda pista** sobre esses mesmos dois colegas:
*"Além disso, a Ana tem $2$ processos a mais que o Bruno ($x - y = 2$)."*

Quando juntamos as duas pistas numa chave `{`, formamos um **Sistema de Equações de 1º Grau**:
$$\begin{cases} x + y = 10 \\ x - y = 2 \end{cases}$$
Entre todas as combinações que somam $10$, **apenas uma única dupla** também tem diferença igual a $2$: **$x = 6$ e $y = 4$**!

> [!IMPORTANT]
> **A Ideia Central para Resolver Qualquer Sistema:**  
> Nós não conseguimos resolver uma linha com duas letras ($x$ e $y$) ao mesmo tempo. Por isso, todos os métodos de sistemas servem para uma única coisa: **combinar as duas linhas para fazer uma das letras SUMIR temporariamente**, caindo numa equação simples de **uma letra só** (igual às do Eixo 1)! Depois que achamos a primeira letra, voltamos e descobrimos a segunda em 5 segundos.

Existem **dois métodos** para fazer uma letra sumir. Você deve conhecer os dois para usar o mais rápido em cada questão:

---

### 2. Os Dois Métodos Desmontados Passo a Passo

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span class="edu-comp-icon">⚔️</span>
      <span>MÉTODO DA SUBSTITUIÇÃO vs. MÉTODO DA ADIÇÃO</span>
    </div>
    <span class="edu-comp-badge">Escolha sua Arma</span>
  </div>
  <div class="edu-cards-grid grid-2">
    <div class="edu-card card-indigo">
      <div class="edu-card-top">
        <span class="card-icon">🔄</span>
        <span class="card-badge">Método 1: Substituição</span>
      </div>
      <h4 class="card-title">Isole uma letra na 1ª linha e troque na 2ª</h4>
      <p class="card-text"><strong>Quando usar:</strong> Quando uma das equações já vem pronta com uma letra isolada (ex.: $y = 2x$, ou $x = y + 5$) ou com coeficiente $1$ fácil de isolar.</p>
      <div class="card-examples">
        <span class="ex-tag">1º Isole: $x = 10 - y$</span>
        <span class="ex-tag">2º Substitua na outra linha!</span>
      </div>
    </div>
    <div class="edu-card card-emerald">
      <div class="edu-card-top">
        <span class="card-icon">➕</span>
        <span class="card-badge">Método 2: Adição (Eliminação)</span>
      </div>
      <h4 class="card-title">Some as duas linhas para cortar termos opostos</h4>
      <p class="card-text"><strong>Quando usar:</strong> É o mais rápido na maioria das provas! Basta que uma letra tenha números opostos nas duas linhas (ex.: $+y$ em cima e $-y$ embaixo, ou $+2y$ e $-2y$). Ao somar as colunas verticalmente, essa letra dá <strong>zero e desaparece</strong>!</p>
      <div class="card-examples">
        <span class="ex-tag">$(+y) + (-y) = 0$ (Cortou!)</span>
      </div>
    </div>
  </div>
</div>

#### 🔎 Demonstração Lado a Lado: O Modelo Campeão da Banca ACCESS
Vamos resolver juntos o tipo de questão que mais cai em concursos municipais (**Total de itens + Soma ponderada de valores/páginas**):

> **Problema-Modelo:** *"No protocolo da Prefeitura, foram autuados $20$ processos ao todo. Alguns processos são simples e têm **$2$ páginas** cada ($x$); outros são especiais e têm **$5$ páginas** cada ($y$). Sabendo que todos esses processos juntos somam **$64$ páginas**, quantos são os processos especiais de $5$ páginas?"*

**Passo 1 — Montar as 2 equações do sistema a partir do texto:**
* **Equação 1 (Total de processos):** Somando os processos simples ($x$) com os especiais ($y$), temos $20$ processos:
  $$x + y = 20$$
* **Equação 2 (Total de páginas):** Cada processo $x$ contribui com $2$ páginas ($2x$) e cada processo $y$ contribui com $5$ páginas ($5y$), totalizando $64$ páginas:
  $$2x + 5y = 64$$

Veja agora como resolver esse mesmo sistema $\begin{cases} x + y = 20 \\ 2x + 5y = 64 \end{cases}$ pelos **dois métodos**:

```text
================================================================================
   CAMINHO A: MÉTODO DA SUBSTITUIÇÃO     |    CAMINHO B: MÉTODO DA ADIÇÃO
================================================================================
 1. Na 1ª linha (x + y = 20), isole o x: | 1. Queremos achar o y (processos de
       x = 20 - y                        |    5 páginas), então vamos eliminar
                                         |    o x! Como embaixo temos "+2x",
 2. Na 2ª linha (2x + 5y = 64), no lugar |    multiplicamos a 1ª linha inteira
    da letra "x", encaixe "(20 - y)":    |    por (-2) para criar "-2x":
       2 · (20 - y) + 5y = 64            |
                                         |      x +  y = 20   --(x -2)--> -2x - 2y = -40
 3. Faça o chuveirinho e resolva:        |     2x + 5y = 64   ---------->  2x + 5y =  64
       40 - 2y + 5y = 64                 |                                --------------
       40 + 3y = 64                      | 2. Some as duas linhas de cima p/ baixo:
       3y = 64 - 40                      |     (-2x + 2x) + (-2y + 5y) = -40 + 64
       3y = 24  --->  y = 24 / 3 = 8!    |          0     +     3y     =   24
                                         |                      3y     =   24  --> y = 8!
 4. E se quisesse o x?                   |
       x = 20 - 8 = 12 processos!        | 3. Achou direto em 2 linhas: y = 8!
================================================================================
```

> [!TIP]
> **Dica de Ouro de Prova (Como escolher quem eliminar no Método da Adição):**  
> Antes de multiplicar a linha no Método da Adição, olhe **qual das duas perguntas a questão fez no final**!  
> No exemplo acima, a questão pediu os processos de $5$ páginas ($y$). Por isso, nós eliminamos o **$x$** (multiplicando por $-2$), porque assim o **$y$ já sai pronto na primeira conta**, sem precisar voltar para substituir!

> [!TIP]
> **Síntese Feynman de 3 Linhas (Sistemas de 1º Grau):**
> 1. Problemas com **dois valores desconhecidos ($x$ e $y$)** exigem montar **duas equações** a partir das duas informações do enunciado (geralmente uma equação para a *quantidade total de itens* e outra para o *peso/valor total*).
> 2. No **Método da Substituição**, você isola uma letra na equação mais simples e substitui a expressão dela dentro de parênteses na outra equação.
> 3. No **Método da Adição**, você multiplica uma das equações pelo número conveniente para criar coeficientes opostos (ex.: $-2x$ e $+2x$) e soma as duas linhas, eliminando uma incógnita instantaneamente.

---

### 🛑 PARE E TREINE — Bloco de Fixação Direta 3 (Sistemas na Unha)
Resolva no papel estes 3 sistemas clássicos antes de irmos para os exemplos guiados e a bateria da ACCESS:

1. **Adição Direta (já pronta para cortar):** Resolva $\begin{cases} x + y = 34 \\ x - y = 10 \end{cases}$.
2. **Substituição Direta:** Em um setor há $48$ servidores ao todo. O número de mulheres ($m$) é o triplo do número de homens ($h$). Quantas mulheres trabalham nesse setor?
3. **Sistema de Notas no Caixa:** Para pagar uma taxa de $\text{R\$ } 310{,}00$, um contribuinte entregou $11$ cédulas, sendo algumas de $\text{R\$ } 20{,}00$ ($x$) e outras de $\text{R\$ } 50{,}00$ ($y$). Quantas cédulas de $\text{R\$ } 50{,}00$ ele entregou?

<details>
<summary><b>Ver Resolução Passo a Passo da Fixação Direta 3</b></summary>

* **1. Resolução de $\begin{cases} x + y = 34 \\ x - y = 10 \end{cases}$:**
  - Repare que já temos $+y$ em cima e $-y$ embaixo! Somando as duas linhas verticalmente:
    $$(x + x) + (y - y) = 34 + 10 \implies 2x = 44 \implies x = \mathbf{22}$$
  - Substituindo $x = 22$ na 1ª linha: $22 + y = 34 \implies y = 34 - 22 = \mathbf{12}$.

* **2. Resolução do Setor com $48$ Servidores:**
  - Sistema: $\begin{cases} m + h = 48 \\ m = 3h \end{cases}$.
  - Usando **Substituição** (trocando $m$ por $3h$ na 1ª equação):
    $$3h + h = 48 \implies 4h = 48 \implies h = \mathbf{12\text{ homens}}$$
  - Cuidado com a pergunta: pediu o número de **mulheres ($m$)**!
    $$m = 3 \times 12 = \mathbf{36\text{ mulheres}}$$

* **3. Resolução das Cédulas de $\text{R\$ } 20$ ($x$) e $\text{R\$ } 50$ ($y$):**
  - Equação 1 (Total de cédulas): $x + y = 11$
  - Equação 2 (Valor em reais): $20x + 50y = 310$ *(Podemos dividir a 2ª linha toda por $10$ para cortar um zero de cada lado: $2x + 5y = 31$!)*.
  - Queremos achar $y$ (cédulas de $\text{R\$ } 50$), então multiplicamos a 1ª linha por $(-2)$ para eliminar o $x$:
    $$\begin{cases} -2x - 2y = -22 \\ \phantom{-}2x + 5y = 31 \end{cases}$$
  - Somando as duas linhas: $3y = 9 \implies y = \mathbf{3\text{ cédulas de R\$ 50,00}}$ (e $x = 11 - 3 = 8$ cédulas de $\text{R\$ } 20{,}00$).
</details>

---

## Laboratório de 3 Exemplos Guiados Passo a Passo

### Exemplo Guiado 1 (Equação de 1º Grau com Frações Sucessivas — O Clássico da Repartição)
**Enunciado:** Helena, Oficial Administrativa, recebeu um lote de fichas cadastrais para digitar. No período da manhã, ela digitou $\frac{1}{3}$ do total de fichas. No início da tarde, digitou $\frac{2}{5}$ do total inicial de fichas e verificou que ainda restavam $28$ fichas para encerrar o lote. Qual era o número total de fichas desse lote?

<details>
<summary><b>Desmontagem Passo a Passo (Do Português para o Cálculo)</b></summary>

1. **Passo 1 — Batizar a incógnita:**
   * Total de fichas do lote $= x$.
2. **Passo 2 — Traduzir cada parte do texto:**
   * Manhã: um terço do total $= \dfrac{x}{3}$.
   * Tarde: dois quintos do total $= \dfrac{2x}{5}$.
   * Restante final: $28$ fichas.
3. **Passo 3 — Montar a equação (Manhã + Tarde + Restante = Total):**
   $$\frac{x}{3} + \frac{2x}{5} + \frac{28}{1} = \frac{x}{1}$$
4. **Passo 4 — Eliminar os denominadores com o MMC entre $3$ e $5$ ($\text{MMC} = 15$):**
   * $(15 \div 3) \cdot x = 5x$
   * $(15 \div 5) \cdot 2x = 3 \cdot 2x = 6x$
   * $(15 \div 1) \cdot 28 = 420$
   * $(15 \div 1) \cdot x = 15x$
   $$5x + 6x + 420 = 15x$$
5. **Passo 5 — Isolar o $x$:**
   $$11x + 420 = 15x \implies 420 = 15x - 11x \implies 4x = 420 \implies x = \frac{420}{4} = \mathbf{105\text{ fichas}}$$
</details>

---

### Exemplo Guiado 2 (Inequação Aplicada — Comparação de Planos de Locação)
**Enunciado:** A Secretaria de Administração vai alugar uma copiadora industrial e recebeu duas propostas mensais:
* **Empresa Alfa:** Taxa fixa mensal de $\text{R\$ } 450{,}00$ mais $\text{R\$ } 0{,}12$ por página impressa.
* **Empresa Beta:** Taxa fixa mensal de $\text{R\$ } 690{,}00$ mais $\text{R\$ } 0{,}08$ por página impressa.

A partir de quantas páginas impressas no mês ($x$) a proposta da **Empresa Beta** passa a ser **mais econômica (mais barata)** do que a da Empresa Alfa?

<details>
<summary><b>Desmontagem Passo a Passo (Do Português para o Cálculo)</b></summary>

1. **Passo 1 — Escrever a fórmula de custo de cada empresa para $x$ páginas:**
   * $\text{Custo Alfa} = 450 + 0{,}12x$
   * $\text{Custo Beta} = 690 + 0{,}08x$
2. **Passo 2 — Montar a inequação ("Beta mais barata que Alfa" $\implies \text{Beta} < \text{Alfa}$):**
   $$690 + 0{,}08x < 450 + 0{,}12x$$
3. **Passo 3 — Passar letras para a esquerda e números para a direita:**
   $$0{,}08x - 0{,}12x < 450 - 690$$
   $$-0{,}04x < -240$$
4. **Passo 4 — Multiplicar por $(-1)$ (INVERTENDO o sinal $<$ para $>$!) e dividir:**
   $$0{,}04x \mathbf{>} 240 \implies x > \frac{240}{0{,}04}$$
   *(Para dividir sem vírgula, multiplique em cima e embaixo por $100$: $\frac{24.000}{4} = 6.000$)*.
   $$x > 6.000\text{ páginas}$$
5. **Passo 5 — Interpretar a fronteira inteira:**
   * Com exatas $6.000$ páginas, os dois planos empatam ($\text{R\$ } 1.170{,}00$). Para ser estritamente mais barata ($x > 6.000$), a secretaria deve imprimir a partir de **$6.001\text{ páginas}$**!
</details>

---

### Exemplo Guiado 3 (Sistema de Equações — O Problema da Divisão de Conta)
**Enunciado:** Os servidores de uma repartição decidiram comprar uma cafeteira espresso de presente para a copa, dividindo o valor igualmente entre todos. Se cada servidor contribuir com $\text{R\$ } 25{,}00$, faltarão $\text{R\$ } 40{,}00$ para inteirar o preço da cafeteira. Porém, se cada servidor contribuir com $\text{R\$ } 32{,}00$, sobrarão $\text{R\$ } 16{,}00$ de troco. Quantos servidores participaram da compra e qual é o preço da cafeteira?

<details>
<summary><b>Desmontagem Passo a Passo (Do Português para o Cálculo)</b></summary>

1. **Passo 1 — Definir as duas incógnitas:**
   * $x =$ número de servidores.
   * $P =$ preço exato da cafeteira.
2. **Passo 2 — Traduzir as duas situações para equações:**
   * **Situação 1 ($25$ reais por pessoa falta $40$):** O dinheiro arrecadado ($25x$) é $\text{R\$ } 40{,}00$ menor que o preço $P$, ou seja, para chegar ao preço $P$ precisamos somar os $40$ que faltaram:
     $$P = 25x + 40$$
   * **Situação 2 ($32$ reais por pessoa sobra $16$):** O dinheiro arrecadado ($32x$) passou do preço $P$ em $\text{R\$ } 16{,}00$, ou seja, tirando o troco de $16$ temos o preço $P$:
     $$P = 32x - 16$$
3. **Passo 3 — Igualar os dois valores de $P$ (Substituição):**
   $$32x - 16 = 25x + 40$$
   $$32x - 25x = 40 + 16 \implies 7x = 56 \implies x = \frac{56}{7} = \mathbf{8\text{ servidores}}$$
4. **Passo 4 — Calcular o preço $P$ da cafeteira:**
   $$P = 25 \times 8 + 40 = 200 + 40 = \mathbf{\text{R\$ } 240{,}00}$$
</details>

---

## Raio-X das Armadilhas: Os Erros de Conta que Viram Alternativas Erradas

As bancas de concurso não escolhem os números das alternativas incorretas por sorteio! O examinador resolve a questão cometendo propositalmente os **4 erros mais comuns dos candidatos** e coloca cada resultado em uma letra. Conheça-os para nunca cair:

| Armadilha da Banca | O Erro que o Candidato Comete | Como Fazer o Certo Sempre |
| :--- | :--- | :--- |
| **1. Parar no valor de $x$ sem ler a pergunta final** | Acha $x = 18$ (ex.: número de homens) e marca a letra (A) $18$, mas a questão pedia o número de **mulheres** ($y = 30$) ou a **diferença** ($y - x = 12$). | Ao achar o $x$, **releia as últimas 5 palavras do enunciado** antes de marcar o gabarito! |
| **2. Esquecer de distribuir o sinal de menos** | Em $10 - (2x - 5)$, escreve $10 - 2x - 5$ (esquece de multiplicar o menos pelo $-5$). | Coloque sempre um $-1$ visível na frente do parêntese: $10 - 1(2x - 5) = 10 - 2x + 5$. |
| **3. Não inverter o sinal da inequação ao dividir por negativo** | Chega em $-2x > -10$, divide por $-2$ e escreve $x > 5$ em vez de $x < 5$. | Toda vez que o número colado no $x$ for negativo na inequação, circule o símbolo de desigualdade para lembrar de virá-lo! |
| **4. Confundir "Do Total" com "Do Restante"** | O texto diz *"gastou $\frac{1}{3}$ do total e depois metade **do que sobrou**"*, e o candidato escreve $\frac{x}{2}$ em vez de metade de $\frac{2x}{3}$. | Se gastou $\frac{1}{3}$, sobrou $\frac{2}{3}$. A metade do que sobrou é $\frac{1}{2} \cdot \frac{2x}{3} = \frac{x}{3}$! |

---

## Bateria Interativa: 6 Questões de Fixação por Bloco + 8 Questões Padrão Instituto ACCESS

> **Como usar esta bateria:**  
> * As **Questões 01 a 06** são **Questões Diretas de Fixação por Bloco** (duas para Equações, duas para Inequações e duas para Sistemas), ideais para consolidar a base do cálculo.  
> * As **Questões 07 a 14** são as **8 Questões no Padrão Instituto ACCESS** (extraídas de provas oficiais da ACCESS e adaptadas ao estilo clone da banca, com personificação e 4 alternativas `A`–`D`).

### Questão 01
**Bloco:** Fixação Direta — Eixo 1 (Equações de 1º Grau) | **Foco:** Distributiva, Frações e Isolamento da Incógnita

Para destravar a mecânica algébrica das equações com parênteses e frações, considere a equação de 1º grau abaixo:
$$\frac{2(x + 3)}{5} - \frac{x - 1}{2} = 1$$

Aplicando o método do MMC para eliminar os denominadores e cuidando da regra de sinais, o valor CORRETO da incógnita $x$ que torna essa igualdade verdadeira é:
(A) $x = -3$.
(B) $x = 3$.
(C) $x = 7$.
(D) $x = 13$.

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: C**

**Desmontagem linha por linha:**
* **Passo 1 — Tirar o MMC dos denominadores ($5$, $2$ e $1$):**
  O MMC entre $5$ e $2$ é **$10$**.
* **Passo 2 — Dividir pelo de baixo e multiplicar pelo de cima nos dois membros:**
  - 1ª fração: $(10 \div 5) \cdot 2(x + 3) = 2 \cdot 2(x + 3) = \mathbf{4(x + 3)}$
  - 2ª fração (atenção ao sinal de menos na frente!): $-(10 \div 2) \cdot (x - 1) = \mathbf{-5(x - 1)}$
  - 2º membro: $(10 \div 1) \cdot 1 = \mathbf{10}$
  $$4(x + 3) - 5(x - 1) = 10$$
* **Passo 3 — Fazer o chuveirinho (distributiva):**
  Repare que $-5 \cdot (-1) = \mathbf{+5}$:
  $$4x + 12 - 5x + 5 = 10$$
* **Passo 4 — Isolar o $x$:**
  $$-x + 17 = 10 \implies -x = 10 - 17 \implies -x = -7 \implies x = \mathbf{7}$$
* **Armadilha de prova:** Quem esquece de trocar o sinal em $-5 \cdot (-1)$ escreve $4x + 12 - 5x - 5 = 10 \implies -x + 7 = 10 \implies x = -3$ (distrator da letra A).

</details>

---

### Questão 02
**Bloco:** Fixação Direta — Eixo 1 (Equações de 1º Grau) | **Foco:** Tradução do Português para a Equação

No almoxarifado de uma escola municipal, o número de resmas de papel na prateleira de cima é o triplo do número de resmas da prateleira de baixo. Se retirarmos $18$ resmas da prateleira de cima e as colocarmos na prateleira de baixo, as duas prateleiras passarão a ter exatamente a mesma quantidade de resmas.

Quantas resmas havia inicialmente na prateleira de cima?
(A) $18$ resmas.
(B) $36$ resmas.
(C) $54$ resmas.
(D) $72$ resmas.

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: C**

**Desmontagem linha por linha:**
* **Passo 1 — Representar o início:**
  - Prateleira de baixo $= x$.
  - Prateleira de cima (o triplo) $= 3x$.
* **Passo 2 — Traduzir a transferência das $18$ resmas (Pegadinha clássica!):**
  Quando tiramos $18$ resmas de cima e colocamos embaixo, a de cima **perde $18$** ($3x - 18$) e a de baixo **ganha $18$** ($x + 18$)! Muita gente esquece de somar $18$ na prateleira de baixo.
* **Passo 3 — Igualar as duas quantidades finais:**
  $$3x - 18 = x + 18$$
  $$3x - x = 18 + 18 \implies 2x = 36 \implies x = \mathbf{18\text{ resmas (embaixo)}}$$
* **Passo 4 — Responder à pergunta do enunciado:**
  O problema pediu quantas resmas havia inicialmente na **prateleira de cima ($3x$)**:
  $$3 \times 18 = \mathbf{54\text{ resmas}}$$
  *(A letra A traz $18$, que é a armadilha para quem para no valor de $x$ sem reler a pergunta!).*

</details>

---

### Questão 03
**Bloco:** Fixação Direta — Eixo 2 (Inequações de 1º Grau) | **Foco:** Inversão do Sinal ao Multiplicar por $(-1)$

Considere a inequação de 1º grau abaixo, definida no conjunto dos números reais:
$$20 - 3(x - 2) \le x + 6$$

Resolvendo passo a passo essa desigualdade, assinale a alternativa que apresenta o conjunto solução CORRETO e o **menor número inteiro** que satisfaz a inequação:
(A) $x \le 5$, sendo $5$ o menor inteiro.
(B) $x \ge 5$, sendo $5$ o menor inteiro.
(C) $x \ge 4$, sendo $4$ o menor inteiro.
(D) $x \le 4$, sendo $3$ o menor inteiro.

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Desmontagem linha por linha:**
* **Passo 1 — Eliminar o parêntese aplicando o chuveirinho com $-3$:**
  Cuidado: $-3 \cdot (x) = -3x$ e $-3 \cdot (-2) = \mathbf{+6}$!
  $$20 - 3x + 6 \le x + 6$$
  $$26 - 3x \le x + 6$$
* **Passo 2 — Passar letras para a esquerda e números para a direita:**
  $$-3x - x \le 6 - 26$$
  $$-4x \le -20$$
* **Passo 3 — Multiplicar os dois lados por $(-1)$ invertendo o sinal $\le$ para $\ge$:**
  $$4x \mathbf{\ge} 20 \implies x \ge \frac{20}{4} \implies \mathbf{x \ge 5}$$
* **Passo 4 — Identificar o menor inteiro:**
  Como o símbolo é $\ge$ (maior **ou igual** a $5$), o próprio número **$5$** faz parte da solução e é o menor inteiro que satisfaz a inequação!

</details>

---

### Questão 04
**Bloco:** Fixação Direta — Eixo 2 (Inequações de 1º Grau) | **Foco:** Tradução de *"No Máximo"* em Problema Prático

Um elevador de carga da Prefeitura suporta um peso total de, **no máximo**, $680\text{ kg}$. O operador do elevador pesa $80\text{ kg}$ e precisa transportar em uma única viagem diversas caixas de arquivo morto, sabendo que cada caixa pesa $25\text{ kg}$.

Se representarmos por $x$ a quantidade de caixas transportadas junto com o operador, qual é a inequação que modela o problema e qual é o número máximo de caixas que ele pode levar nessa viagem?
(A) $25x + 80 < 680$, podendo levar no máximo $23$ caixas.
(B) $25x + 80 \le 680$, podendo levar no máximo $24$ caixas.
(C) $25x - 80 \le 680$, podendo levar no máximo $30$ caixas.
(D) $80x + 25 \le 680$, podendo levar no máximo $8$ caixas.

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Desmontagem linha por linha:**
* **Passo 1 — Traduzir "no máximo $680\text{ kg}$":**
  A expressão *"no máximo"* significa que o peso pode ser menor ou exatamente igual a $680\text{ kg}$ ($\le 680$).
* **Passo 2 — Montar a inequação (Peso das caixas + Peso do operador $\le 680$):**
  Cada caixa pesa $25\text{ kg}$, logo $x$ caixas pesam $25x$. Somando os $80\text{ kg}$ do operador:
  $$25x + 80 \le 680$$
* **Passo 3 — Resolver a inequação:**
  $$25x \le 680 - 80 \implies 25x \le 600 \implies x \le \frac{600}{25} \implies \mathbf{x \le 24\text{ caixas}}$$
  Como $x \le 24$ inclui o $24$, ele pode levar no máximo **$24$ caixas**!

</details>

---

### Questão 05
**Bloco:** Fixação Direta — Eixo 3 (Sistemas de 1º Grau) | **Foco:** Resolução pelo Método da Adição

Dado o sistema de equações lineares de 1º grau com duas incógnitas:
$$\begin{cases} 3x + 2y = 26 \\ 2x - y = 8 \end{cases}$$

Utilizando o Método da Adição ou da Substituição, é CORRETO afirmar que o valor da soma $(x + y)$ é igual a:
(A) $9$.
(B) $10$.
(C) $11$.
(D) $12$.

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Desmontagem linha por linha:**
* **Passo 1 — Preparar para o Método da Adição:**
  Olhe para a letra $y$: na 1ª equação temos $+2y$ e na 2ª temos $-y$. Se multiplicarmos a **2ª equação inteira por $2$**, ela vira $4x - 2y = 16$, e poderemos cortar $+2y$ com $-2y$!
  $$\begin{cases} 3x + 2y = 26 \\ 4x - 2y = 16 \end{cases}$$
* **Passo 2 — Somar as duas equações verticalmente:**
  $$(3x + 4x) + (2y - 2y) = 26 + 16 \implies 7x = 42 \implies x = \frac{42}{7} = \mathbf{6}$$
* **Passo 3 — Achar o valor de $y$ substituindo $x = 6$ na 1ª equação:**
  $$3(6) + 2y = 26 \implies 18 + 2y = 26 \implies 2y = 8 \implies y = \mathbf{4}$$
* **Passo 4 — Calcular o que foi pedido ($x + y$):**
  $$x + y = 6 + 4 = \mathbf{10}$$

</details>

---

### Questão 06
**Bloco:** Fixação Direta — Eixo 3 (Sistemas de 1º Grau) | **Foco:** Modelagem Clássica de Veículos no Pátio

No pátio da frota oficial da Prefeitura, estão estacionados $32$ veículos ao todo, entre motocicletas (de $2$ rodas) e caminhonetes (de $4$ rodas). Um vigia contou todas as rodas desses veículos (sem contar estepes) e obteve um total de $108$ rodas.

Com base nesses dados, a quantidade de caminhonetes estacionadas no pátio supera a quantidade de motocicletas em:
(A) $10$ veículos.
(B) $12$ veículos.
(C) $16$ veículos.
(D) $22$ veículos.

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Desmontagem linha por linha:**
* **Passo 1 — Definir as incógnitas e montar o sistema:**
  - $m =$ número de motocicletas ($2$ rodas cada).
  - $c =$ número de caminhonetes ($4$ rodas cada).
  $$\begin{cases} m + c = 32 \quad \text{(total de veículos)} \\ 2m + 4c = 108 \quad \text{(total de rodas)} \end{cases}$$
* **Passo 2 — Eliminar $m$ multiplicando a 1ª linha por $(-2)$:**
  $$\begin{cases} -2m - 2c = -64 \\ \phantom{-}2m + 4c = 108 \end{cases}$$
  Somando as duas linhas:
  $$2c = 44 \implies c = \mathbf{22\text{ caminhonetes}}$$
* **Passo 3 — Achar o número de motocicletas ($m$):**
  $$m = 32 - 22 = \mathbf{10\text{ motocicletas}}$$
* **Passo 4 — Atenção à pergunta final ("supera em"):**
  A questão não pediu $c$ ($22$) nem $m$ ($10$), mas sim em quanto $c$ supera $m$ ($c - m$):
  $$22 - 10 = \mathbf{12\text{ veículos}}$$

</details>

---

### Questão 07
**Banca:** Instituto ACCESS (2024 — Pref. de Domingos Martins/ES, Auxiliar Administrativo — Q16) | **Foco:** Equação de 1º Grau (Divisão de Conta)

Um grupo de amigos quer pedir uma pizza e resolveram dividir a conta igualmente entre eles. Se cada um deles pagar $\text{R\$ } 19{,}00$, vão faltar $\text{R\$ } 5{,}00$ para pagar a conta. Se cada um deles pagar $\text{R\$ } 22{,}00$, recebem $\text{R\$ } 10{,}00$ de troco.

Quantos reais tem que pagar cada um dos amigos para que o valor da conta seja exato?
(A) $\text{R\$ } 19{,}50$.
(B) $\text{R\$ } 20{,}00$.
(C) $\text{R\$ } 20{,}50$.
(D) $\text{R\$ } 21{,}00$.

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Resolução Comentada Linha por Linha:**
* **Passo 1 — Definir a incógnita $x$ (quantidade de amigos no grupo):**
  O preço total da pizza ($P$) é o mesmo nas duas situações!
  - **1ª Situação:** Cada um dos $x$ amigos dá $\text{R\$ } 19{,}00$ (arrecadando $19x$), mas ainda faltam $\text{R\$ } 5{,}00$ para alcançar o preço da pizza:
    $$P = 19x + 5$$
  - **2ª Situação:** Cada um dos $x$ amigos dá $\text{R\$ } 22{,}00$ (arrecadando $22x$), passando do preço da pizza em $\text{R\$ } 10{,}00$ (troco):
    $$P = 22x - 10$$
* **Passo 2 — Igualar as duas expressões do preço da pizza:**
  $$22x - 10 = 19x + 5$$
  $$22x - 19x = 5 + 10 \implies 3x = 15 \implies x = \frac{15}{3} = \mathbf{5\text{ amigos}}$$
* **Passo 3 — Descobrir o valor total da conta ($P$) e dividir pelos $5$ amigos:**
  - Valor da conta: $P = 19 \times 5 + 5 = 95 + 5 = \mathbf{\text{R\$ } 100{,}00}$.
  - Valor exato por amigo: $\frac{\text{R\$ } 100{,}00}{5\text{ amigos}} = \mathbf{\text{R\$ } 20{,}00}$.

</details>

---

### Questão 08
**Banca:** Instituto ACCESS (2024 — Pref. de Domingos Martins/ES, Auxiliar Administrativo — Q12) | **Foco:** Sistema de Equações de 1º Grau

Em um clube, estavam $113$ pessoas distribuídas por mesas de $4$, $5$ e $6$ lugares. Havia um total de $22$ mesas, e todos os lugares estavam ocupados. O número de mesas de $6$ lugares era o dobro do número de mesas de $5$ lugares.

O total de mesas de $4$ lugares é igual a:
(A) $6$.
(B) $7$.
(C) $12$.
(D) $17$.

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Resolução Comentada Linha por Linha:**
* **Passo 1 — Nomear as incógnitas de forma inteligente:**
  - Seja $q =$ número de mesas de **$4$ lugares**.
  - Seja $c =$ número de mesas de **$5$ lugares**.
  - Como o número de mesas de **$6$ lugares** é o **dobro** das de $5$ lugares, já podemos chamá-lo direto de **$2c$**! (Assim ficamos com apenas duas letras: $q$ e $c$!).
* **Passo 2 — Montar a 1ª equação (Total de $22$ mesas):**
  $$q + c + 2c = 22 \implies \mathbf{q + 3c = 22}$$
* **Passo 3 — Montar a 2ª equação (Total de $113$ pessoas/lugares ocupados):**
  - As $q$ mesas de $4$ lugares acomodam $4q$ pessoas.
  - As $c$ mesas de $5$ lugares acomodam $5c$ pessoas.
  - As $2c$ mesas de $6$ lugares acomodam $6 \cdot (2c) = 12c$ pessoas.
  $$4q + 5c + 12c = 113 \implies \mathbf{4q + 17c = 113}$$
* **Passo 4 — Resolver o sistema $\begin{cases} q + 3c = 22 \\ 4q + 17c = 113 \end{cases}$:**
  Da 1ª linha, isolamos $q = 22 - 3c$ e substituímos na 2ª linha:
  $$4(22 - 3c) + 17c = 113$$
  $$88 - 12c + 17c = 113 \implies 5c = 113 - 88 \implies 5c = 25 \implies c = \mathbf{5\text{ mesas de 5 lugares}}$$
* **Passo 5 — Achar o total de mesas de $4$ lugares ($q$):**
  $$q = 22 - 3(5) = 22 - 15 = \mathbf{7\text{ mesas de 4 lugares}}$$

</details>

---

### Questão 09
**Banca:** Adaptada para o Padrão Instituto ACCESS | **Cargo:** Oficial Administrativo | **Foco:** Equação com Frações Sucessivas ("Do Restante")

No setor de recursos humanos da Prefeitura, o servidor Rodrigo recebeu uma pilha de prontuários funcionais para atualizar no sistema. Na segunda-feira, ele atualizou $\frac{1}{4}$ do total de prontuários. Na terça-feira, atualizou $\frac{2}{3}$ **do que havia restado** da segunda-feira. Sabendo que na quarta-feira ainda faltavam exatamente $18$ prontuários para concluir todo o serviço, é CORRETO afirmar que o número de prontuários atualizados por Rodrigo apenas na terça-feira foi igual a:
(A) $18$ prontuários.
(B) $36$ prontuários.
(C) $54$ prontuários.
(D) $72$ prontuários.

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Resolução Comentada Linha por Linha:**
* **Passo 1 — Acompanhar a fração que sobra a cada dia (total $= x$):**
  - **Segunda-feira:** Rodrigo fez $\frac{1}{4}$ do total ($x$). Se ele fez $1$ parte de $4$, quanto **restou** ao final da segunda-feira? Restaram **$\frac{3}{4}$ de $x$**!
  - **Terça-feira:** Ele fez $\frac{2}{3}$ **do que havia restado** (ou seja, $\frac{2}{3}$ de $\frac{3}{4}x$). Na matemática, a preposição *"de"* entre frações é uma multiplicação:
    $$\text{Terça-feira} = \frac{2}{\cancel{3}} \times \frac{\cancel{3}}{4}x = \frac{2}{4}x = \mathbf{\frac{1}{2}x}$$
* **Passo 2 — Montar a equação (ou pensar visualmente):**
  - Segunda-feira: $\frac{1}{4}x$
  - Terça-feira: $\frac{2}{4}x$ (metade)
  - Juntos (segunda + terça): $\frac{1}{4}x + \frac{2}{4}x = \frac{3}{4}x$.
  - Logo, os $18$ prontuários que sobraram para quarta-feira representam exatamente o **$\frac{1}{4}x$ restante**!
    $$\frac{x}{4} = 18 \implies x = 18 \times 4 = \mathbf{72\text{ prontuários ao todo}}$$
* **Passo 3 — Atenção máxima à pergunta final:**
  A questão não pediu o total ($72$), mas sim quantos prontuários Rodrigo atualizou **apenas na terça-feira** ($\frac{2}{4}x = \text{metade do total}$):
  $$\text{Terça-feira} = \frac{72}{2} = \mathbf{36\text{ prontuários}}$$

</details>

---

### Questão 10
**Banca:** Adaptada para o Padrão Instituto ACCESS | **Cargo:** Oficial Administrativo | **Foco:** Problema de Idades no Passado e no Futuro

Em uma conversa durante o intervalo do expediente na Câmara Municipal, descobriu-se que a idade atual de Cláudia é o triplo da idade atual de seu estagiário Lucas. Daqui a $12$ anos, a idade de Cláudia passará a ser o dobro da idade que Lucas terá na ocasião.

Com base nessas informações, a soma das idades atuais de Cláudia e Lucas é igual a:
(A) $36$ anos.
(B) $42$ anos.
(C) $48$ anos.
(D) $60$ anos.

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: C**

**Resolução Comentada Linha por Linha:**
* **Passo 1 — Montar o quadro das idades HOJE:**
  - Idade atual de Lucas $= x$.
  - Idade atual de Cláudia (o triplo) $= 3x$.
* **Passo 2 — Avançar $12$ anos no tempo (O tempo passa igual para os dois!):**
  Muita gente erra problemas de idade porque soma $12$ só para uma pessoa! Daqui a $12$ anos, **ambos** estarão $12$ anos mais velhos:
  - Idade de Lucas daqui a $12$ anos $= x + 12$.
  - Idade de Cláudia daqui a $12$ anos $= 3x + 12$.
* **Passo 3 — Montar a equação do futuro ("Cláudia será o dobro de Lucas"):**
  $$3x + 12 = 2 \cdot (x + 12)$$
  Fazendo o chuveirinho no lado direito:
  $$3x + 12 = 2x + 24$$
  $$3x - 2x = 24 - 12 \implies x = \mathbf{12\text{ anos (idade atual de Lucas)}}$$
* **Passo 4 — Calcular a idade atual de Cláudia e somar as duas:**
  - Cláudia hoje: $3 \times 12 = \mathbf{36\text{ anos}}$.
  - Soma das idades atuais: $36 + 12 = \mathbf{48\text{ anos}}$.

</details>

---

### Questão 11
**Banca:** Adaptada para o Padrão Instituto ACCESS | **Cargo:** Oficial Administrativo | **Foco:** Inequação de 1º Grau Aplicada à Pontuação de Concurso

Em um processo seletivo interno da Prefeitura composto por $50$ questões, todas as questões devem ser obrigatoriamente respondidas em branco zero. Pelo regulamento do edital, o candidato ganha **$4$ pontos** por cada questão que acerta, mas **perde $1$ ponto** por cada questão que erra. Para ser habilitado para a segunda fase, o candidato precisa obter uma pontuação final de, **pelo menos**, $115$ pontos.

Nessas condições, o número **mínimo** de questões que a candidata Mariana precisa acertar para garantir sua habilitação é igual a:
(A) $31$ questões.
(B) $32$ questões.
(C) $33$ questões.
(D) $34$ questões.

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: C**

**Resolução Comentada Linha por Linha:**
* **Passo 1 — Expressar os acertos e os erros com uma única letra ($x$):**
  - Se o total da prova é de $50$ questões e Mariana acertou **$x$ questões**, quantas questões ela errou?
  - Ela errou o restante das $50$, isto é: **$(50 - x)$ questões**!
* **Passo 2 — Montar a expressão da pontuação e a inequação ("pelo menos $115$" $\implies \ge 115$):**
  - Pontos ganhos nos acertos: $4 \cdot x = 4x$.
  - Pontos perdidos nos erros: $-1 \cdot (50 - x)$.
  $$4x - 1(50 - x) \ge 115$$
* **Passo 3 — Resolver a inequação (atenção ao sinal $-1 \cdot (-x) = +x$!):**
  $$4x - 50 + x \ge 115$$
  $$5x - 50 \ge 115 \implies 5x \ge 115 + 50 \implies 5x \ge 165 \implies x \ge \frac{165}{5} \implies \mathbf{x \ge 33}$$
* **Conferência rápida:** Se Mariana acertar $33$ questões, ela erra $50 - 33 = 17$ questões. Pontuação: $(33 \times 4) - 17 = 132 - 17 = \mathbf{115\text{ pontos}}$! Logo, o mínimo é **$33$ questões**.

</details>

---

### Questão 12
**Banca:** Adaptada para o Padrão Instituto ACCESS | **Cargo:** Oficial Administrativo | **Foco:** Sistema de Equações com Julgamento de Afirmativas Romanas (Formato 2 ACCESS)

Para organizar o arquivo corrente da Secretaria de Obras, foram compradas pastas azuis e pastas verdes, totalizando $45$ pastas. Sabe-se que cada pasta azul custou $\text{R\$ } 8{,}00$, cada pasta verde custou $\text{R\$ } 12{,}00$ e o valor total da nota fiscal foi de $\text{R\$ } 432{,}00$.

A respeito das quantidades compradas de cada modelo, analise as afirmativas a seguir:
I. Foram compradas exatamente $27$ pastas azuis.
II. O número de pastas azuis supera o número de pastas verdes em $9$ unidades.
III. O valor gasto apenas com as pastas verdes foi de $\text{R\$ } 216{,}00$.

Está(ão) CORRETA(S):
(A) apenas a afirmativa I.
(B) apenas as afirmativas I e II.
(C) apenas as afirmativas II e III.
(D) todas as afirmativas.

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: D**

**Resolução Comentada Linha por Linha:**
* **Passo 1 — Montar o sistema ($a =$ pastas azuis; $v =$ pastas verdes):**
  $$\begin{cases} a + v = 45 \\ 8a + 12v = 432 \end{cases}$$
* **Passo 2 — Multiplicar a 1ª linha por $(-8)$ para eliminar $a$ pelo Método da Adição:**
  $$\begin{cases} -8a - 8v = -360 \\ \phantom{-}8a + 12v = 432 \end{cases}$$
  Somando as duas linhas:
  $$4v = 72 \implies v = \frac{72}{4} = \mathbf{18\text{ pastas verdes}}$$
  Logo, as pastas azuis são:
  $$a = 45 - 18 = \mathbf{27\text{ pastas azuis}}$$
* **Passo 3 — Julgar as afirmativas I, II e III:**
  - **I. CORRETA:** $a = 27$ pastas azuis.
  - **II. CORRETA:** Diferença $= 27 - 18 = 9$ unidades.
  - **III. CORRETA:** Gasto com as pastas verdes $= 18 \times \text{R\$ } 12{,}00 = \text{R\$ } 216{,}00$ (e com as azuis: $27 \times 8 = \text{R\$ } 216{,}00$).
  Portanto, **todas as afirmativas estão corretas**!

</details>

---

### Questão 13
**Banca:** Adaptada para o Padrão Instituto ACCESS | **Cargo:** Oficial Administrativo | **Foco:** Sistema de Equações com Transferência entre Setores

Nos setores de Tributos ($T$) e de Fiscalização ($F$) de uma Prefeitura, trabalham juntos $64$ servidores. Se $6$ servidores do setor de Tributos forem transferidos para o setor de Fiscalização, o setor de Tributos ainda ficará com $4$ servidores a mais do que a nova quantidade do setor de Fiscalização.

Nessas condições, é CORRETO afirmar que o número de servidores lotados originalmente no setor de Tributos era igual a:
(A) $34$ servidores.
(B) $38$ servidores.
(C) $40$ servidores.
(D) $42$ servidores.

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: C**

**Resolução Comentada Linha por Linha:**
* **Passo 1 — Equação 1 (Total inicial de servidores):**
  $$T + F = 64$$
* **Passo 2 — Equação 2 (Após a transferência de $6$ servidores de $T$ para $F$):**
  - Quando $6$ servidores saem de Tributos e vão para Fiscalização, Tributos passa a ter **$(T - 6)$** e Fiscalização passa a ter **$(F + 6)$**.
  - O texto diz que, mesmo depois disso, $(T - 6)$ ainda é igual a $(F + 6)$ somado de $4$:
    $$T - 6 = (F + 6) + 4 \implies T - 6 = F + 10 \implies \mathbf{T - F = 16}$$
* **Passo 3 — Resolver o sistema $\begin{cases} T + F = 64 \\ T - F = 16 \end{cases}$ pelo Método da Adição:**
  Somando as duas linhas diretamente ($+F$ corta com $-F$):
  $$2T = 80 \implies T = \frac{80}{2} = \mathbf{40\text{ servidores em Tributos}}$$
  *(E $F = 64 - 40 = 24$ servidores em Fiscalização. Teste real: se $T$ perde $6$, vai para $34$; se $F$ ganha $6$, vai para $30$; e $34$ tem exatamente $4$ a mais que $30$!).*

</details>

---

### Questão 14
**Banca:** Adaptada para o Padrão Instituto ACCESS | **Cargo:** Oficial Administrativo | **Foco:** Inequação Dupla e Estimativa de Orçamento

Para realizar um curso de capacitação para os novos Oficiais Administrativos, uma escola de governo cobra uma taxa fixa de abertura de turma no valor de $\text{R\$ } 840{,}00$, acrescida de $\text{R\$ } 45{,}00$ por apostila impressa fornecida a cada servidor inscrito ($x$). A nota de empenho reservada pela Prefeitura estabelece que o gasto total com o curso deve ser **superior a $\text{R\$ } 1.740{,}00$** e **não pode ultrapassar $\text{R\$ } 2.190{,}00$**.

Sabendo que o número de servidores inscritos ($x$) é um número inteiro, a quantidade de valores distintos que $x$ pode assumir dentro dessa faixa orçamentária é igual a:
(A) $9$ valores possíveis.
(B) $10$ valores possíveis.
(C) $11$ valores possíveis.
(D) $12$ valores possíveis.

<details><summary><b>Ver Gabarito e Comentário Detalhado</b></summary>

**Gabarito Oficial: B**

**Resolução Comentada Linha por Linha:**
* **Passo 1 — Traduzir as duas fronteiras do orçamento:**
  - Custo do curso para $x$ servidores: $840 + 45x$.
  - **"Superior a $1.740$"** (estritamente maior: $>$):
    $$840 + 45x > 1.740 \implies 45x > 1.740 - 840 \implies 45x > 900 \implies x > \frac{900}{45} \implies \mathbf{x > 20}$$
  - **"Não pode ultrapassar $2.190$"** (menor ou igual: $\le$):
    $$840 + 45x \le 2.190 \implies 45x \le 2.190 - 840 \implies 45x \le 1.350 \implies x \le \frac{1.350}{45} \implies \mathbf{x \le 30}$$
* **Passo 2 — Contar quantos números inteiros existem em $20 < x \le 30$:**
  - Como $x > 20$ (não inclui o $20$) e $x \le 30$ (inclui o $30$), os valores inteiros possíveis são:
    $$\{21, 22, 23, 24, 25, 26, 27, 28, 29, 30\}$$
  - De $21$ até $30$ (inclusive), há exatamente $30 - 20 = \mathbf{10\text{ valores possíveis}}$!

</details>

---

## Checklist de Fixação Ativa para o Caderno

Ao finalizar esta sessão de 90 minutos, confirme se você domina estes 5 pilares no seu caderno:
- [ ] Entendo que "passar para o outro lado com a operação inversa" é a Lei da Balança e sei que, ao passar um número negativo dividindo ($-3x = 12 \implies x = \frac{12}{-3} = -4$), o sinal negativo vai junto para o denominador?
- [ ] Sei eliminar todos os denominadores de uma equação fracionária de uma só vez calculando o **MMC** (*divide pelo de baixo, multiplica pelo de cima*) e cuidando do sinal de menos antes de frações?
- [ ] Sei explicar na reta numérica por que multiplicar ou dividir uma **inequação** por número negativo **inverte o sinal da desigualdade** ($>$ vira $<$, e $\ge$ vira $\le$)?
- [ ] Sei traduzir imediatamente *"no mínimo / pelo menos"* para **$\ge$** e *"no máximo / até"* para **$\le$**?
- [ ] Sei montar e resolver um **Sistema de 1º Grau com 2 incógnitas ($x$ e $y$)** tanto pelo Método da Substituição quanto pelo Método da Adição?
