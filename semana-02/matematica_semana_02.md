# Semana 02: Matemática e Raciocínio Lógico-Matemático (RLM) — Dando Nome, Estrutura e Proporção às Coisas
**Cargo:** Oficial Administrativo  
**Nível de Escolaridade:** Ensino Médio  
**Foco:** Didática Passo a Passo do Zero Absoluto, Desmontagem das Operações nos Bastidores, Diagramas Visuais em CSS, Tradução do Português para a Matemática, Eliminação de Fórmulas Cegas e Resolução Comentada de Questões de Concurso

---

## Sumário da Aula
1. [Eixo 1: Teoria dos Conjuntos — A Lógica de Agrupar, Pertencer e Conectar](#eixo-1-teoria-dos-conjuntos--a-lógica-de-agrupar-pertencer-e-conectar)
   - Por que o Cérebro Humano e a Administração Pública Precisam de Conjuntos?
   - Conceitos Primitivos: Elemento, Conjunto e o Conjunto Universo ($\mathbb{U}$)
   - Os Símbolos Decodificados: Pertinência ($\in, \notin$) vs. Inclusão ($\subset, \not\subset, \subseteq$)
   - As Quatro Operações Sagradas: União ($\cup$), Interseção ($\cap$), Diferença ($-$) e Complementar
   - Síntese Feynman (Teoria dos Conjuntos)
2. [Eixo 2: Diagramas de Venn — Como Desatar Problemas de Grupos Sobrepostos](#eixo-2-diagramas-de-venn--como-desatar-problemas-de-grupos-sobrepostos)
   - O Diagrama de Venn no Papel: Espaço Amostral sem Mistério
   - A Regra de Ouro Universal: **SEMPRE COMECE PELA INTERSEÇÃO MAIS PROFUNDA!**
   - Por que Subtraímos a Interseção? A Lógica da Fila Dupla ($n(A \cup B) = n(A) + n(B) - n(A \cap B)$)
   - Resolução de Problemas com 2 Conjuntos (Exclusivo $A$, Exclusivo $B$, Ambos e Nenhum)
   - Resolução de Problemas com 3 Conjuntos (A Região Central Tripla e as Pétalas)
   - Síntese Feynman (Diagramas de Venn)
3. [Eixo 3: Razões e Proporções — A Arte de Comparar Grandezas no Mundo Real](#eixo-3-razões-e-proporções--a-arte-de-comparar-grandezas-no-mundo-real)
   - O que é uma Razão na Prática? (Comparando Grandezas por Quociente)
   - A Ordem Importa: Antecedente e Consequente (Por que $3/5 \neq 5/3$)
   - O que é uma Proporção? A Igualdade entre Duas Razões
   - A Propriedade Fundamental das Proporções (Produto dos Extremos pelos Meios)
   - Grandezas Diretamente Proporcionais vs. Grandezas Inversamente Proporcionais
   - Síntese Feynman (Razões e Proporções)
4. [Eixo 4: Divisão Proporcional — O Segredo da Constante de Proporcionalidade ($k$)](#eixo-4-divisão-proporcional--o-segredo-da-constante-de-proporcionalidade-k)
   - O Conceito do Fator $k$: A Fatia Unitária que Simplifica Qualquer Conta
   - Divisão Diretamente Proporcional Passo a Passo (O Método das Cotas)
   - Divisão Inversamente Proporcional Passo a Passo (A Lógica da Inversão e o MMC)
   - Divisão Composta (Direta e Inversa ao Mesmo Tempo)
   - Síntese Feynman (Divisão Proporcional)
5. [Laboratório de Casos Guiados: Traduzindo do Português para a Matemática](#laboratório-de-casos-guiados-traduzindo-do-português-para-a-matemática)
   - Caso Guiado 1: A Pesquisa de Treinamento dos Servidores da Prefeitura (Venn 2 Grupos)
   - Caso Guiado 2: A Proporção de Atendimentos no Protocolo Geral (Razão e Proporção)
   - Caso Guiado 3: A Partilha de Gratificação por Produtividade Inversamente às Faltas (Divisão Inversa)
6. [Armadilhas Clássicas das Bancas (Onde o Candidato Desatento Escorrega)](#armadilhas-clássicas-das-bancas-onde-o-candidato-desatento-escorrega)
7. [Bateria de 8 Questões Reais de Concurso Comentadas Linha por Linha](#bateria-de-8-questões-reais-de-concurso-comentadas-linha-por-linha)
8. [Checklist de Fixação Ativa para o Aluno](#checklist-de-fixação-ativa-para-o-aluno)

---

## EIXO 1: Teoria dos Conjuntos — A Lógica de Agrupar, Pertencer e Conectar

### 1. Por que o Cérebro Humano e a Administração Pública Precisam de Conjuntos?
Imagine a seguinte cena em uma Prefeitura: você é o Oficial Administrativo do setor de Recursos Humanos e tem na sua mesa uma pilha com 500 fichas funcionais. Se todos os servidores estivessem misturados sem critério, localizar quem tem direito a férias ou quem precisa de treinamento seria um caos absoluto.  

Para colocar ordem no mundo, nós **agrupamos coisas que possuem características comuns**.  
* Chamamos esse grupo de **CONJUNTO**.  
* Cada indivíduo dentro do grupo é um **ELEMENTO**.  

A **Teoria dos Conjuntos** (criada pelo matemático Georg Cantor no fim do século XIX) não é um capricho teórico: ela é a linguagem universal que a lógica, os bancos de dados, os computadores e os editais de concurso utilizam para organizar a realidade.

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span class="edu-comp-icon">📦</span>
      <span>A TRÍADE FUNDAMENTAL DA TEORIA DOS CONJUNTOS</span>
    </div>
    <span class="edu-comp-badge">Conceitos Primitivos</span>
  </div>
  <div class="edu-cards-grid grid-3">
    <!-- Card 1 -->
    <div class="edu-card card-indigo">
      <div class="edu-card-top">
        <span class="card-icon">👤</span>
        <span class="card-badge">Elemento</span>
      </div>
      <h4 class="card-title">O Objeto Individual</h4>
      <p class="card-text">É o componente individual que integra o grupo. Sempre representado por <strong>letras minúsculas</strong> ($a, b, x, y$) ou números ($1, 2, 3$).</p>
      <div class="card-examples">
        <span class="ex-tag">Ex: O servidor Gabriel</span>
        <span class="ex-tag">Ex: O processo nº 42</span>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="edu-card card-sky">
      <div class="edu-card-top">
        <span class="card-icon">📁</span>
        <span class="card-badge">Conjunto</span>
      </div>
      <h4 class="card-title">A Coleção / Agrupamento</h4>
      <p class="card-text">É a reunião de elementos com uma característica bem definida. Sempre representado por <strong>letras maiúsculas</strong> ($A, B, C$) entre chaves $\{ \}$.</p>
      <div class="card-examples">
        <span class="ex-tag">Ex: $A = \{ \text{Oficiais Administrativos} \}$</span>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="edu-card card-emerald">
      <div class="edu-card-top">
        <span class="card-icon">🏛️</span>
        <span class="card-badge">Universo (𝕌)</span>
      </div>
      <h4 class="card-title">O Conjunto Universo</h4>
      <p class="card-text">É o universo delimitado do problema, que contém todos os elementos possíveis em discussão naquele contexto específico.</p>
      <div class="card-examples">
        <span class="ex-tag">Ex: $\mathbb{U} = \{ \text{Todos os servidores da Prefeitura} \}$</span>
      </div>
    </div>
  </div>
</div>

---

### 2. Os Símbolos Decodificados: Pertinência vs. Inclusão (A Pegadinha Mais Manjada das Bancas)

As bancas adoram tentar confundir você trocando os símbolos de **pertinência** pelos de **inclusão**. A regra é cirúrgica:

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span class="edu-comp-icon">🧭</span>
      <span>QUADRO COMPARATIVO: PERTINÊNCIA (∈) VS. INCLUSÃO (⊂)</span>
    </div>
    <span class="edu-comp-badge">Regra de Ouro</span>
  </div>
  <div class="edu-cards-grid grid-2">
    <!-- Pertinência -->
    <div class="edu-card card-amber">
      <div class="edu-card-top">
        <span class="card-icon">🔗</span>
        <span class="card-badge">Elemento ➔ Conjunto</span>
      </div>
      <h4 class="card-title">Relação de Pertinência ($\in$ e $\notin$)</h4>
      <p class="card-text">Liga <strong>UM ELEMENTO</strong> a <strong>UM CONJUNTO</strong>. Significa "pertence" ou "não pertence".</p>
      <ul class="card-checklist">
        <li><span>✅</span> <div>$2 \in \{1, 2, 3\}$ (O número 2 <strong>pertence</strong> ao conjunto).</div></li>
        <li><span>✅</span> <div>$5 \notin \{1, 2, 3\}$ (O número 5 <strong>não pertence</strong> ao conjunto).</div></li>
        <li><span>❌</span> <div><strong>ERRO DE BANCA:</strong> $\{2\} \in \{1, 2, 3\}$ (Errado! $\{2\}$ com chaves é conjunto, não elemento solto!).</div></li>
      </ul>
    </div>

    <!-- Inclusão -->
    <div class="edu-card card-purple">
      <div class="edu-card-top">
        <span class="card-icon">📦</span>
        <span class="card-badge">Conjunto ➔ Conjunto</span>
      </div>
      <h4 class="card-title">Relação de Inclusão ($\subset, \subseteq, \not\subset$)</h4>
      <p class="card-text">Liga <strong>UM CONJUNTO (subconjunto)</strong> a <strong>OUTRO CONJUNTO</strong>. Significa "está contido" ou "não está contido".</p>
      <ul class="card-checklist">
        <li><span>✅</span> <div>$\{2\} \subset \{1, 2, 3\}$ (O conjunto $\{2\}$ <strong>está contido</strong> no conjunto maior).</div></li>
        <li><span>✅</span> <div>$\emptyset \subset A$ (O conjunto vazio está contido em <strong>qualquer</strong> conjunto!).</div></li>
        <li><span>❌</span> <div><strong>ERRO DE BANCA:</strong> $2 \subset \{1, 2, 3\}$ (Errado! O número 2 sem chaves é elemento; elemento não "está contido", elemento "pertence"!).</div></li>
      </ul>
    </div>
  </div>
</div>

---

### 3. As Quatro Operações Sagradas entre Conjuntos

Quando você tem dois grupos de processos ou servidores, você pode combiná-los de quatro formas lógicas. Veja os bastidores de cada uma:

```text
Considere:
Conjunto A = { 1, 2, 3, 4 }   (Processos analisados pela manhã)
Conjunto B = { 3, 4, 5, 6 }   (Processos analisados à tarde)
```

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span class="edu-comp-icon">⚙️</span>
      <span>AS 4 OPERAÇÕES FUNDAMENTAIS EXPLICADAS COM EXEMPLOS REAIS</span>
    </div>
    <span class="edu-comp-badge">Operações Básicas</span>
  </div>
  <div class="edu-cards-grid grid-4">
    <!-- União -->
    <div class="edu-card card-sky">
      <div class="edu-card-top">
        <span class="card-icon">∪</span>
        <span class="card-badge">União ("OU")</span>
      </div>
      <h4 class="card-title">$A \cup B$</h4>
      <p class="card-text"><strong>Junta tudo</strong> o que está em A ou em B (sem repetir elementos comuns).</p>
      <div class="tier-exchange">
        <span class="exchange-tag">Resultado:</span>
        <strong>$\{ 1, 2, 3, 4, 5, 6 \}$</strong>
      </div>
    </div>

    <!-- Interseção -->
    <div class="edu-card card-emerald">
      <div class="edu-card-top">
        <span class="card-icon">∩</span>
        <span class="card-badge">Interseção ("E")</span>
      </div>
      <h4 class="card-title">$A \cap B$</h4>
      <p class="card-text">Pega <strong>apenas o que é comum</strong> (o que está simultaneamente em A e em B).</p>
      <div class="tier-exchange">
        <span class="exchange-tag">Resultado:</span>
        <strong>$\{ 3, 4 \}$</strong>
      </div>
    </div>

    <!-- Diferença A - B -->
    <div class="edu-card card-amber">
      <div class="edu-card-top">
        <span class="card-icon">−</span>
        <span class="card-badge">Diferença</span>
      </div>
      <h4 class="card-title">$A - B$</h4>
      <p class="card-text">O que é <strong>exclusivo de A</strong> (tira tudo o que também pertence a B).</p>
      <div class="tier-exchange">
        <span class="exchange-tag">Resultado:</span>
        <strong>$\{ 1, 2 \}$</strong>
      </div>
    </div>

    <!-- Diferença B - A -->
    <div class="edu-card card-rose">
      <div class="edu-card-top">
        <span class="card-icon">−</span>
        <span class="card-badge">Diferença Inversa</span>
      </div>
      <h4 class="card-title">$B - A$</h4>
      <p class="card-text">O que é <strong>exclusivo de B</strong> (tira tudo o que também pertence a A).</p>
      <div class="tier-exchange">
        <span class="exchange-tag">Resultado:</span>
        <strong>$\{ 5, 6 \}$</strong>
      </div>
    </div>
  </div>
</div>

> [!NOTE]
> **O que é o Conjunto Complementar ($\complement_U A$ ou $A^c$)?**  
> Se o universo de processos do dia for $\mathbb{U} = \{1, 2, 3, 4, 5, 6, 7, 8\}$ e o conjunto $A = \{1, 2, 3, 4\}$, o complementar $A^c$ é **tudo o que falta em A para ficar igual ao universo**:  
> $$A^c = \mathbb{U} - A = \{ 5, 6, 7, 8 \}$$

---

> [!TIP]
> **Síntese Feynman (Teoria dos Conjuntos em 3 Linhas):**  
> 1. Elemento solto *pertence* ($\in$) a conjunto; conjunto entre chaves *está contido* ($\subset$) em conjunto.  
> 2. União ($\cup$) é soma inclusiva (junta tudo sem duplicar); Interseção ($\cap$) é filtro restrito (apenas os repetidos).  
> 3. Diferença ($A - B$) é a faxina: fica só o que é exclusivo de $A$, jogando fora tudo o que esbarrar em $B$.

---

## EIXO 2: Diagramas de Venn — Como Desatar Problemas de Grupos Sobrepostos

### 1. A Situação Real: A Triagem do RH na Prefeitura de Birigui
Para entender de uma vez por todas o Diagrama de Venn sem decorar fórmulas cegas, imagine uma situação real e prática do dia a dia do serviço público:

A Secretaria de Administração de Birigui convocou **100 candidatos aprovados** na primeira fase para um teste de aptidão operacional em duas mesas de atendimento:
* **Mesa Azul ($A$):** Teste prático do **SEI** (Sistema Eletrônico de Informações e Redação de Ofícios).
* **Mesa Verde ($B$):** Teste de **Atendimento ao Cidadão no Balcão de Protocolo**.

Ao final da triagem, o RH computou as listas de presença assinadas:
1. **65 candidatos** assinaram a folha do teste de **SEI**.
2. **45 candidatos** assinaram a folha do teste de **Balcão**.
3. **20 candidatos** ficaram sentados no saguão porque eram novatos e **não tinham experiência em nenhum dos dois**.

#### O Mistério da "Fila Dupla" (A Pegadinha das Bancas)
Se você agir no piloto automático e somar os números brutos do relatório:
$65 + 45 + 20 = mathbf{130 	ext{ assinaturas}}$

> [!CAUTION]
> **O ALERTA DA REALIDADE:** Como podem existir 130 assinaturas se **havia apenas 100 candidatos dentro do prédio**?  
> Surgiram 30 fantasmas na Prefeitura? **Não!**  
> Essas 30 pessoas a mais são candidatos competentes que levantaram as **duas mãos** e assinaram **as duas listas**! Elas foram contadas **duas vezes**: uma na fila do SEI e outra na fila do Balcão!

Para a conta fechar na realidade, quem assinou duas vezes precisa ter sua duplicidade eliminada:
$n(	ext{Universo}) = n(	ext{SEI}) + n(	ext{Balcão}) - n(	ext{Ambos}) + n(	ext{Nenhum})$
$100 = 65 + 45 - x + 20 implies 100 = 130 - x implies x = mathbf{30 	ext{ candidatos (Ambos)}}$

---

### 2. O Diagrama Visual de Venn: A Representação das Quatro Regiões Sagradas

Veja abaixo o mapa visual exato do que aconteceu dentro da Prefeitura de Birigui. Observe como os círculos se cruzam formando quatro fatias independentes:

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span class="edu-comp-icon">📊</span>
      <span>DIAGRAMA DE VENN REAL: TRIAGEM DE 100 CANDIDATOS NA PREFEITURA</span>
    </div>
    <span class="edu-comp-badge">Espaço Amostral Visual</span>
  </div>
  
  <div class="edu-venn-stage">
    <!-- Caixa do Universo Retangular -->
    <div class="venn-universe-box">
      <div class="venn-universe-header">
        <span class="venn-universe-badge">🏛️ Prédio da Prefeitura • Universo Total $\mathbb{U} = 100$</span>
        <span class="text-xs font-mono font-bold text-sec">Área Retangular = 100% dos entrevistados</span>
      </div>

      <!-- SVG do Diagrama de Círculos Sobrepostos -->
      <div class="venn-svg-wrap">
        <svg viewBox="0 0 540 280" role="img" aria-label="Diagrama de Venn com dois círculos sobrepostos">
          <!-- Círculo A (SEI / Processos) -->
          <circle cx="210" cy="140" r="95" fill="rgba(59, 130, 246, 0.16)" stroke="#3b82f6" stroke-width="2.5" />
          
          <!-- Círculo B (Balcão de Atendimento) -->
          <circle cx="330" cy="140" r="95" fill="rgba(16, 185, 129, 0.16)" stroke="#10b981" stroke-width="2.5" />
          
          <!-- Lente Central de Sobreposição (Miolo / Interseção) -->
          <ellipse cx="270" cy="140" rx="35" ry="65" fill="rgba(147, 51, 234, 0.22)" stroke="#9333ea" stroke-width="2" />

          <!-- Título Círculo A -->
          <text x="145" y="45" font-size="12" font-weight="900" fill="#2563eb" text-anchor="middle">CONJUNTO A: SEI (Total: 65)</text>
          
          <!-- Título Círculo B -->
          <text x="395" y="45" font-size="12" font-weight="900" fill="#059669" text-anchor="middle">CONJUNTO B: BALCÃO (Total: 45)</text>

          <!-- Zona 1: Apenas SEI (Esquerda) -->
          <text x="155" y="130" text-anchor="middle" font-size="30" font-weight="900" fill="#2563eb" class="venn-svg-txt-main">35</text>
          <text x="155" y="153" text-anchor="middle" font-size="12" font-weight="800" class="venn-svg-txt-sub">Apenas SEI</text>
          <text x="155" y="171" text-anchor="middle" font-size="11" class="venn-svg-txt-calc">(65 − 30)</text>

          <!-- Zona 2: O Miolo Central (Interseção A ∩ B) -->
          <rect x="232" y="58" width="76" height="20" rx="10" fill="#7c3aed" />
          <text x="270" y="72" text-anchor="middle" font-size="9" font-weight="900" fill="#ffffff">O MIOLO</text>
          <text x="270" y="132" text-anchor="middle" font-size="34" font-weight="900" fill="#7c3aed" class="venn-svg-txt-main">30</text>
          <text x="270" y="154" text-anchor="middle" font-size="12" font-weight="800" fill="#6d28d9">Ambos</text>
          <text x="270" y="170" text-anchor="middle" font-size="10" font-weight="700" fill="#7c3aed">($A \cap B$)</text>

          <!-- Zona 3: Apenas Balcão (Direita) -->
          <text x="385" y="130" text-anchor="middle" font-size="30" font-weight="900" fill="#059669" class="venn-svg-txt-main">15</text>
          <text x="385" y="153" text-anchor="middle" font-size="12" font-weight="800" class="venn-svg-txt-sub">Apenas Balcão</text>
          <text x="385" y="171" text-anchor="middle" font-size="11" class="venn-svg-txt-calc">(45 − 30)</text>

          <!-- Zona 4: Nenhum dos dois (Saguão de Espera) -->
          <rect x="375" y="222" width="150" height="42" rx="8" fill="rgba(244, 63, 94, 0.12)" stroke="rgba(244, 63, 94, 0.35)" />
          <text x="450" y="240" text-anchor="middle" font-size="15" font-weight="900" fill="#e11d48">20 Candidatos</text>
          <text x="450" y="254" text-anchor="middle" font-size="10" font-weight="700" fill="#be123c">Nenhum dos dois (Saguão)</text>
        </svg>
      </div>
    </div>

    <!-- Grid com os 4 Cards Explicativos -->
    <div class="venn-step-grid">
      <!-- Card 1 -->
      <div class="venn-step-card venn-card-blue">
        <span class="venn-step-num">Região 1 • Exclusivo A</span>
        <div class="venn-step-val">35</div>
        <div class="venn-step-label">Apenas Processo SEI</div>
        <div class="venn-step-desc">Calculado subtraindo o miolo do total do SEI: $65 - 30 = 35$. Dominam apenas a parte digital.</div>
      </div>

      <!-- Card 2 -->
      <div class="venn-step-card venn-card-purple">
        <span class="venn-step-num">Região 2 • O Miolo ($A \cap B$)</span>
        <div class="venn-step-val">30</div>
        <div class="venn-step-label">Ambos os Serviços</div>
        <div class="venn-step-desc">A interseção sagrada. Candidatos versáteis que atendem ao balcão e redigem ofícios no SEI.</div>
      </div>

      <!-- Card 3 -->
      <div class="venn-step-card venn-card-emerald">
        <span class="venn-step-num">Região 3 • Exclusivo B</span>
        <div class="venn-step-val">15</div>
        <div class="venn-step-label">Apenas Balcão</div>
        <div class="venn-step-desc">Calculado subtraindo o miolo do total do Balcão: $45 - 30 = 15$. Atendem somente ao público presencial.</div>
      </div>

      <!-- Card 4 -->
      <div class="venn-step-card venn-card-rose">
        <span class="venn-step-num">Região 4 • Fora dos Círculos</span>
        <div class="venn-step-val">20</div>
        <div class="venn-step-label">Nenhum dos Dois</div>
        <div class="venn-step-desc">Estão dentro do prédio (Universo), mas fora dos círculos de teste. São os novatos sem experiência prévia.</div>
      </div>
    </div>
  </div>
</div>

#### A "Prova Real da Repartição" (Soma que Nunca Falha)
Depois de fatiar o diagrama nas 4 zonas isoladas, some cada região independente:
$mathbf{35} 	ext{ (só SEI)} + mathbf{30} 	ext{ (ambos)} + mathbf{15} 	ext{ (só Balcão)} + mathbf{20} 	ext{ (nenhum)} = mathbf{100 	ext{ candidatos}}$
A conta fecha exatamente nos 100 candidatos do prédio, sem sobrar nem faltar ninguém!

---

### 2. O Método Infalível em 4 Passos para Resolver Questões de Venn

Toda questão de concurso sobre Diagrama de Venn se resolve de olhos fechados seguindo este roteiro:

1. **Desenhe os círculos** e um retângulo em volta representando o Universo ($\mathbb{U}$).
2. **Preencha PRIMEIRO o miolo (a interseção central mais profunda).**
3. **Subtraia esse miolo** dos valores dados no enunciado para achar as regiões exclusivas de cada conjunto.
4. **Some todas as regiões isoladas + o grupo de fora (nenhum)** para igualar ao total do universo.

---

> [!TIP]
> **Síntese Feynman (Diagramas de Venn em 3 Linhas):**  
> 1. Somar os totais brutos dos círculos gera duplicidade porque o miolo central é contado duas vezes.  
> 2. Regra de ouro da sobrevivência: comece a preencher SEMPRE pela interseção dos dois (ou três) círculos.  
> 3. Subtraia a interseção de cada total para achar quem faz *apenas* uma coisa, e nunca esqueça dos que estão fora de tudo.

---

## EIXO 3: Razões e Proporções — A Arte de Comparar Grandezas no Mundo Real

### 1. O que é uma Razão na Prática?
No dia a dia, para comparar duas coisas, você pode usar uma subtração ou uma divisão:
* **Comparação por diferença (subtração):** "Eu tenho 10 processos e você tem 6. Eu tenho 4 a mais."
* **Comparação por quociente (razão / divisão):** "Para cada 3 homens concursados, há 2 mulheres concursadas."

A **razão** é o quociente (divisão) entre duas grandezas na mesma escala ou em escalas correlatas:
$$\text{Razão} = \frac{a}{b} \quad (b \neq 0)$$
* O número de cima ($a$) chama-se **Antecedente**.
* O número de baixo ($b$) chama-se **Consequente**.

> [!CAUTION]
> **A ORDEM NO ENUNCIADO É LEI ABSOLUTA!**  
> Se a banca pedir: *"A razão entre o número de **homens** e o número de **mulheres**"*, quem vem em cima no numerador é **homens**, e embaixo é **mulheres**.  
> Se você inverter e colocar mulheres em cima, você calculará outra coisa e marcará a pegadinha da alternativa errada!

---

### 2. O que é uma Proporção?
Uma **proporção** nada mais é do que uma **igualdade entre duas razões equivalentes**:
$$\frac{a}{b} = \frac{c}{d} \quad \text{lê-se: "a está para b, assim como c está para d"}$$

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span class="edu-comp-icon">⚖️</span>
      <span>A PROPRIEDADE FUNDAMENTAL DAS PROPORÇÕES</span>
    </div>
    <span class="edu-comp-badge">Produto Cruzado</span>
  </div>
  <div class="edu-cards-grid grid-2">
    <div class="edu-card card-indigo">
      <div class="edu-card-top">
        <span class="card-icon">✖️</span>
        <span class="card-badge">Mecanismo</span>
      </div>
      <h4 class="card-title">O Produto dos Meios pelos Extremos</h4>
      <p class="card-text">Em qualquer proporção válida, a multiplicação cruzada é sempre idêntica:</p>
      <div class="tier-exchange">
        <span class="exchange-tag">Regra:</span>
        <strong>$\frac{a}{b} = \frac{c}{d} \iff a \cdot d = b \cdot c$</strong>
      </div>
      <p class="card-text text-xs">Exemplo: $\frac{2}{5} = \frac{6}{15} \implies 2 \times 15 = 5 \times 6 = 30$.</p>
    </div>

    <div class="edu-card card-emerald">
      <div class="edu-card-top">
        <span class="card-icon">🔍</span>
        <span class="card-badge">Aplicação</span>
      </div>
      <h4 class="card-title">Como Achar o Termo Desconhecido ($x$)</h4>
      <p class="card-text">Se 3 Oficiais Administrativos arquivam 120 processos, quantos processos 5 Oficiais arquivarão no mesmo ritmo?</p>
      <div class="tier-exchange">
        <span class="exchange-tag">Equação:</span>
        <strong>$\frac{3}{5} = \frac{120}{x} \implies 3x = 600 \implies x = 200$</strong>
      </div>
    </div>
  </div>
</div>

---

### 3. Grandezas Diretamente vs. Inversamente Proporcionais

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span class="edu-comp-icon">🔄</span>
      <span>DIRETAMENTE VS. INVERSAMENTE PROPORCIONAIS</span>
    </div>
    <span class="edu-comp-badge">Conceito Chave</span>
  </div>
  <div class="edu-cards-grid grid-2">
    <!-- Direta -->
    <div class="edu-card card-sky">
      <div class="edu-card-top">
        <span class="card-icon">📈</span>
        <span class="card-badge">Diretamente Proporcional</span>
      </div>
      <h4 class="card-title">Caminham no Mesmo Sentido</h4>
      <p class="card-text">Quando uma grandeza aumenta, a outra aumenta <strong>na mesma proporção</strong> (se uma dobra, a outra dobra). A <strong>divisão</strong> entre elas é constante ($y/x = k$).</p>
      <div class="card-examples">
        <span class="ex-tag">Horas trabalhadas $\leftrightarrow$ Salário</span>
        <span class="ex-tag">Metros de asfalto $\leftrightarrow$ Gasto de piche</span>
      </div>
    </div>

    <!-- Inversa -->
    <div class="edu-card card-rose">
      <div class="edu-card-top">
        <span class="card-icon">📉</span>
        <span class="card-badge">Inversamente Proporcional</span>
      </div>
      <h4 class="card-title">Caminham em Sentidos Opostos</h4>
      <p class="card-text">Quando uma grandeza aumenta, a outra diminui <strong>na proporção inversa</strong> (se uma dobra, a outra cai pela metade). O <strong>produto</strong> entre elas é constante ($x \cdot y = k$).</p>
      <div class="card-examples">
        <span class="ex-tag">Velocidade $\leftrightarrow$ Tempo de viagem</span>
        <span class="ex-tag">Número de operários $\leftrightarrow$ Dias de obra</span>
        <span class="ex-tag">Faltas no trabalho $\leftrightarrow$ Bônus em dinheiro</span>
      </div>
    </div>
  </div>
</div>

---

> [!TIP]
> **Síntese Feynman (Razões e Proporções em 3 Linhas):**  
> 1. Razão é comparação por divisão; quem o texto cita primeiro fica em cima no numerador.  
> 2. Proporção é igualdade de frações resolvida cruzando os extremos: o que sobe multiplicando iguala o que desce.  
> 3. Diretamente proporcional divide e mantém o rumo; inversamente proporcional multiplica e anda na contramão.

---

## EIXO 4: Divisão Proporcional — O Segredo da Constante de Proporcionalidade ($k$)

### 1. O Conceito do Fator $k$: A Fatia Unitária
Em vez de montar sistemas de equações complicados com três incógnitas ($x + y + z$), os profissionais de concurso utilizam a **constante de proporcionalidade ($k$)**.  
Pense em $k$ como o **valor de UMA ÚNICA COTA (ou uma fatia da pizza)**.

---

### 2. Divisão DIRETAMENTE Proporcional Passo a Passo
> **Regra Prática:**  
> Cada participante recebe o seu peso multiplicado por $k$.  
> 1. Chame as partes de: $\text{Parte}_1 = p_1 \cdot k$, $\text{Parte}_2 = p_2 \cdot k$, etc.  
> 2. Some todas as cotas e iguale ao valor total.  
> 3. Descubra o valor de $k$ dividindo o total pela soma dos pesos.  
> 4. Multiplique $k$ pelo peso de quem a questão pedir.

---

### 3. Divisão INVERSAMENTE Proporcional Passo a Passo
> **O Desafio:** Quem tem o peso maior deve receber a menor fatia!  
> **O Mecanismo:** Dividir em partes inversamente proporcionais a $a, b, c$ é **exatamente a mesma coisa que dividir em partes diretamente proporcionais aos seus INVERSOS**:  
> $$\frac{1}{a}, \quad \frac{1}{b}, \quad \frac{1}{c}$$  
> **Como fugir das frações:**  
> 1. Tire o **MMC** dos denominadores.  
> 2. Reduza as frações ao mesmo denominador.  
> 3. **Cancele os denominadores** e utilize apenas os numeradores inteiros como os novos pesos da divisão direta!

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span class="edu-comp-icon">💡</span>
      <span>O TRUQUE DEFINITIVO DA DIVISÃO INVERSA (FIM DO MEDO DE FRAÇÃO)</span>
    </div>
    <span class="edu-comp-badge">Técnica Aceleradora</span>
  </div>
  <div class="edu-cards-grid grid-3">
    <div class="edu-card card-amber">
      <div class="edu-card-top">
        <span class="card-icon">1️⃣</span>
        <span class="card-badge">Passo 1</span>
      </div>
      <h4 class="card-title">Inverta os Pesos</h4>
      <p class="card-text">Se os pesos forem 2 e 3, inverta para as frações: $\frac{1}{2}$ e $\frac{1}{3}$.</p>
    </div>
    <div class="edu-card card-sky">
      <div class="edu-card-top">
        <span class="card-icon">2️⃣</span>
        <span class="card-badge">Passo 2</span>
      </div>
      <h4 class="card-title">Tire o MMC</h4>
      <p class="card-text">$\text{MMC}(2, 3) = 6$. Reduzindo: $\frac{3}{6}$ e $\frac{2}{6}$.</p>
    </div>
    <div class="edu-card card-emerald">
      <div class="edu-card-top">
        <span class="card-icon">3️⃣</span>
        <span class="card-badge">Passo 3</span>
      </div>
      <h4 class="card-title">Corte a Base</h4>
      <p class="card-text">Ignore o 6! Agora a divisão é simplesmente direta proporcional a <strong>3 e 2</strong>!</p>
    </div>
  </div>
</div>

---

> [!TIP]
> **Síntese Feynman (Divisão Proporcional em 3 Linhas):**  
> 1. Na divisão direta, cada um ganha o seu peso vezes a cota unitária $k$; ache $k$ somando os pesos e dividindo o total.  
> 2. Na divisão inversa, quem tem número maior ganha menos; inverta os pesos para frações e elimine os denominadores pelo MMC.  
> 3. Após eliminar o MMC, trate as partes como uma divisão direta comum usando o método do $k$.

---

## Laboratório de Casos Guiados: Traduzindo do Português para a Matemática

---

### Caso Guiado 1: A Pesquisa de Capacitação dos Servidores (Venn com 2 Conjuntos)
* **Enunciado em Português:**  
  Em uma repartição da Prefeitura com 120 servidores, realizou-se uma pesquisa sobre o domínio de dois softwares essenciais: **SEI** (Sistema Eletrônico de Informações) e **Excel**.  
  Constatou-se que:  
  - 70 servidores dominam o SEI.  
  - 60 servidores dominam o Excel.  
  - 25 servidores dominam ambos os softwares.  
  Quantos servidores dessa repartição **não dominam nenhum** desses dois softwares?

* **Desmontagem Passo a Passo:**  
  1. *Identificação do Universo:* Total de servidores = $120$.  
  2. *Passo 1 — Preencher a Interseção (Ambos):*  
     $$\text{Ambos (SEI } \cap \text{ Excel)} = \mathbf{25}$$  
  3. *Passo 2 — Descobrir quem domina APENAS o SEI:*  
     Dos 70 que dominam o SEI, 25 também dominam Excel. Logo:  
     $$\text{Apenas SEI} = 70 - 25 = \mathbf{45}$$  
  4. *Passo 3 — Descobrir quem domina APENAS o Excel:*  
     Dos 60 que dominam o Excel, 25 também dominam SEI. Logo:  
     $$\text{Apenas Excel} = 60 - 25 = \mathbf{35}$$  
  5. *Passo 4 — Somar todos os que dominam pelo menos um:*  
     $$\text{Total com algum domínio} = (\text{Apenas SEI}) + (\text{Ambos}) + (\text{Apenas Excel})$$  
     $$\text{Total} = 45 + 25 + 35 = \mathbf{105 \text{ servidores}}$$  
  6. *Passo 5 — Subtrair do Universo para achar quem não domina nenhum:*  
     $$\text{Nenhum} = 120 - 105 = \mathbf{15 \text{ servidores}}$$

---

### Caso Guiado 2: A Relação de Processos no Protocolo Geral (Razão e Proporção)
* **Enunciado em Português:**  
  No setor de Protocolo Geral da Prefeitura de Birigui, a razão entre o número de certidões emitidas e o número de recursos protocolados em determinado mês é de $5$ para $3$. Se a soma total entre certidões e recursos foi de $240$ documentos, qual foi a quantidade de certidões emitidas?

* **Desmontagem Passo a Passo:**  
  1. *Tradução da Razão:*  
     $$\frac{\text{Certidões}}{\text{Recursos}} = \frac{5}{3}$$  
     Isso significa que para cada 5 certidões, há 3 recursos.  
  2. *Uso do Fator $k$:*  
     - $\text{Certidões} = 5k$  
     - $\text{Recursos} = 3k$  
  3. *Equação da Soma:*  
     $$\text{Certidões} + \text{Recursos} = 240$$  
     $$5k + 3k = 240 \implies 8k = 240$$  
     $$k = \frac{240}{8} = \mathbf{30}$$  
  4. *Calculando as Certidões:*  
     $$\text{Certidões} = 5k = 5 \times 30 = \mathbf{150 \text{ certidões}}$$  
     *(Para conferir: Recursos = $3 \times 30 = 90$. Total = $150 + 90 = 240$. Razão = $150/90 = 5/3$. Perfeito!)*

---

### Caso Guiado 3: A Partilha de Bônus Inversamente às Faltas (Divisão Inversa)
* **Enunciado em Português:**  
  A Prefeitura destinou um prêmio de produtividade de **R$ 6.200,00** para ser dividido entre dois Oficiais Administrativos, Bruno e Carla, de forma **inversamente proporcional ao número de faltas não justificadas** no semestre. Bruno faltou $2$ vezes e Carla faltou $3$ vezes. Quanto Bruno receberá?

* **Desmontagem Passo a Passo:**  
  1. *Entendendo a Lógica da Justiça:* Bruno faltou menos (2 faltas), logo ele deve receber **MAIS** dinheiro do que Carla (3 faltas).  
  2. *Invertendo os Pesos:*  
     - Peso de Bruno: $\frac{1}{2}$  
     - Peso de Carla: $\frac{1}{3}$  
  3. *Tirando o MMC dos denominadores (2 e 3):* $\text{MMC}(2, 3) = 6$.  
     - Bruno: $\frac{1 \times 3}{6} = \frac{3}{6}$  
     - Carla: $\frac{1 \times 2}{6} = \frac{2}{6}$  
  4. *Eliminando os denominadores:* Agora Bruno tem peso **3** e Carla tem peso **2**!  
     - Bruno $= 3k$  
     - Carla $= 2k$  
  5. *Somando e Igualando ao Prêmio:*  
     $$3k + 2k = 6.200 \implies 5k = 6.200$$  
     $$k = \frac{6.200}{5} = \mathbf{1.240}$$  
  6. *Calculando a Parte de Bruno:*  
     $$\text{Parte de Bruno} = 3k = 3 \times 1.240 = \mathbf{\text{R$ } 3.720,00}$$  
     *(Carla receberá $2 \times 1.240 = \text{\text{R$ } } 2.480,00$. Total = $3.720 + 2.480 = 6.200$. Bruno faltou menos e recebeu mais!).*

---

## Armadilhas Clássicas das Bancas (Onde o Candidato Desatento Escorrega)

<div class="edu-component my-6">
  <div class="edu-comp-header">
    <div class="edu-comp-title">
      <span class="edu-comp-icon">⚠️</span>
      <span>AS 4 MAIORES CASCA DE BANANA EM CONJUNTOS E PROPORÇÃO</span>
    </div>
    <span class="edu-comp-badge">Alerta de Pegadinha</span>
  </div>
  <div class="edu-cards-grid grid-2">
    <!-- Pegadinha 1 -->
    <div class="edu-card card-rose">
      <div class="edu-card-top">
        <span class="card-icon">🚨</span>
        <span class="card-badge">Pegadinha 1</span>
      </div>
      <h4 class="card-title">Confundir "Gostam de A" com "Gostam APENAS de A"</h4>
      <p class="card-text">Se o texto diz "50 leem o jornal A", esse 50 inclui quem lê A e B! Você deve subtrair a interseção para achar quem lê <em>somente</em> o jornal A.</p>
    </div>

    <!-- Pegadinha 2 -->
    <div class="edu-card card-amber">
      <div class="edu-card-top">
        <span class="card-icon">🔄</span>
        <span class="card-badge">Pegadinha 2</span>
      </div>
      <h4 class="card-title">Inverter os Termos da Razão</h4>
      <p class="card-text">Se o enunciado pede a razão de <em>homens para o total</em>, colocar <em>homens para mulheres</em> dará uma alternativa errada feita de propósito para te seduzir.</p>
    </div>

    <!-- Pegadinha 3 -->
    <div class="edu-card card-purple">
      <div class="edu-card-top">
        <span class="card-icon">⚡</span>
        <span class="card-badge">Pegadinha 3</span>
      </div>
      <h4 class="card-title">Tentar Divisão Inversa Direto sem Inverter</h4>
      <p class="card-text">Na divisão inversa por 2 e 3, nunca multiplique por 2 e 3! Quem tem o número menor deve terminar com a fatia maior.</p>
    </div>

    <!-- Pegadinha 4 -->
    <div class="edu-card card-sky">
      <div class="edu-card-top">
        <span class="card-icon">⭕</span>
        <span class="card-badge">Pegadinha 4</span>
      </div>
      <h4 class="card-title">Esquecer o Grupo do "Nenhum"</h4>
      <p class="card-text">Ao calcular o total de pessoas de uma pesquisa, não some apenas os círculos do diagrama; certifique-se de somar também os que responderam "nenhum dos dois".</p>
    </div>
  </div>
</div>

---

## Bateria de 8 Questões Reais de Concurso Comentadas Linha por Linha

---

### Questão 01
**Banca:** Instituto ACCESS | **Órgão:** Prefeitura Municipal de Pirapora/MG | **Ano:** 2024 | **Cargo:** Oficial de Administração (Prova Oficial 16, Q44)  

Em um concurso há 900 candidatos inscritos para o cargo de auxiliar administrativo, sendo 540 deles do sexo feminino. A razão de inscritos do sexo masculino para o cargo de auxiliar administrativo neste concurso é igual a:  
(A) $\frac{1}{3}$  
(B) $\frac{2}{5}$  
(C) $\frac{3}{5}$  
(D) $\frac{2}{3}$  

<details>
<summary><b>Ver Gabarito e Resolução Passo a Passo</b></summary>

**Gabarito Oficial: B ($\frac{2}{5}$)**

**Resolução Detalhada:**  
* **Passo 1: Identificar os dados do enunciado:**  
  - Total de inscritos = $900$  
  - Candidatos do sexo feminino = $540$  
* **Passo 2: Calcular os candidatos do sexo masculino:**  
  $$\text{Masculino} = \text{Total} - \text{Feminino}$$  
  $$\text{Masculino} = 900 - 540 = \mathbf{360}$$  
* **Passo 3: Montar a razão pedida pelo enunciado:**  
  O enunciado pede: *"A razão de inscritos do sexo masculino para o cargo [total]"*:  
  $$\text{Razão} = \frac{\text{Masculino}}{\text{Total}} = \frac{360}{900}$$  
* **Passo 4: Simplificar a fração:**  
  - Cortando o zero final: $\frac{36}{90}$  
  - Dividindo numerador e denominador por 9: $\frac{36 \div 9}{90 \div 9} = \frac{4}{10}$  
  - Dividindo por 2: $\frac{4 \div 2}{10 \div 2} = \mathbf{\frac{2}{5}}$  
* **Gabarito:** Letra **B**.
</details>

---

### Questão 02
**Banca:** Instituto ACCESS | **Órgão:** Prefeitura Municipal de Pirapora/MG | **Ano:** 2024 | **Cargo:** Oficial de Administração (Prova Oficial 16, Q43)  

Uma herança de R$ 90.000,00 precisa ser dividida entre André, Bruno e Carlos, de modo diretamente proporcional às suas idades, 18, 15 e 12 anos, respectivamente. A quantia, em reais, que André vai receber é igual a:  
(A) R$ 18.000,00.  
(B) R$ 24.000,00.  
(C) R$ 30.000,00.  
(D) R$ 36.000,00.  

<details>
<summary><b>Ver Gabarito e Resolução Passo a Passo</b></summary>

**Gabarito Oficial: D (R$ 36.000,00)**

**Resolução Detalhada:**  
* **Passo 1: Definir as cotas pelo método do fator $k$:**  
  A divisão é **diretamente proporcional** às idades:  
  - André ($18$ anos) $\to 18k$  
  - Bruno ($15$ anos) $\to 15k$  
  - Carlos ($12$ anos) $\to 12k$  
* **Passo 2: Somar as partes e igualar ao total da herança:**  
  $$18k + 15k + 12k = 90.000$$  
  $$45k = 90.000$$  
* **Passo 3: Achar o valor da cota $k$:**  
  $$k = \frac{90.000}{45} = \mathbf{2.000}$$  
* **Passo 4: Calcular a quantia de André:**  
  $$\text{André} = 18k = 18 \times 2.000 = \mathbf{\text{R$ } 36.000,00}$$  
* *(Para checagem: Bruno $= 15 \times 2.000 = 30.000$; Carlos $= 12 \times 2.000 = 24.000$. Soma $= 36.000 + 30.000 + 24.000 = 90.000$).*  
* **Gabarito:** Letra **D**.
</details>

---

### Questão 03
**Banca:** Instituto ACCESS | **Órgão:** Prefeitura Municipal de Cataguases/MG | **Ano:** 2024 | **Cargo:** Oficial e Agente Administrativo (Prova Oficial 19/20, Q13)  

Antônio deixou de herança para seus três filhos, Arthur, Clara e Alice, a quantia de R$ 360.000,00 reais, que deve ser dividida de forma diretamente proporcional a 5, 3 e 4, respectivamente. A quantia, em reais, destinada a Clara é igual a:  
(A) R$ 30.000,00.  
(B) R$ 90.000,00.  
(C) R$ 120.000,00.  
(D) R$ 150.000,00.  

<details>
<summary><b>Ver Gabarito e Resolução Passo a Passo</b></summary>

**Gabarito Oficial: B (R$ 90.000,00)**

**Resolução Detalhada:**  
* **Passo 1: Mapear pesos e filhos:**  
  - Arthur: peso 5 $\to 5k$  
  - Clara: peso 3 $\to 3k$  
  - Alice: peso 4 $\to 4k$  
* **Passo 2: Somar as cotas:**  
  $$5k + 3k + 4k = 360.000$$  
  $$12k = 360.000$$  
* **Passo 3: Encontrar o fator $k$:**  
  $$k = \frac{360.000}{12} = \mathbf{30.000}$$  
* **Passo 4: Calcular o valor de Clara:**  
  $$\text{Clara} = 3k = 3 \times 30.000 = \mathbf{\text{R$ } 90.000,00}$$  
* **Gabarito:** Letra **B**.
</details>

---

### Questão 04
**Banca:** VUNESP | **Órgão:** Câmara Municipal de Sertãozinho/SP | **Cargo:** Oficial Administrativo  

Em uma repartição pública municipal, realizou-se um levantamento sobre o domínio de idiomas entre os 80 servidores lotados no prédio central. Verificou-se que 45 servidores falam Inglês, 35 falam Espanhol e 15 falam ambos os idiomas. O número de servidores que não falam nenhum desses dois idiomas é igual a:  
(A) 10.  
(B) 15.  
(C) 20.  
(D) 25.  
(E) 30.  

<details>
<summary><b>Ver Gabarito e Resolução Passo a Passo</b></summary>

**Gabarito Oficial: B (15)**

**Resolução Detalhada:**  
* **Passo 1: Universo de servidores:** $\mathbb{U} = 80$.  
* **Passo 2: Preencher o miolo (Inglês $\cap$ Espanhol):**  
  $$\text{Ambos} = 15$$  
* **Passo 3: Calcular os exclusivos:**  
  - Apenas Inglês: $45 - 15 = \mathbf{30}$  
  - Apenas Espanhol: $35 - 15 = \mathbf{20}$  
* **Passo 4: Somar quem fala pelo menos um idioma:**  
  $$\text{Falam algum} = (\text{Apenas Inglês}) + (\text{Ambos}) + (\text{Apenas Espanhol})$$  
  $$\text{Falam algum} = 30 + 15 + 20 = \mathbf{65 \text{ servidores}}$$  
* **Passo 5: Subtrair do total para achar quem não fala nenhum:**  
  $$\text{Nenhum} = 80 - 65 = \mathbf{15 \text{ servidores}}$$  
* **Gabarito:** Letra **B**.
</details>

---

### Questão 05
**Banca:** VUNESP | **Órgão:** Prefeitura Municipal de Guarulhos/SP | **Cargo:** Assistente de Gestão Pública  

Três funcionários de uma repartição municipal devem protocolar um total de 270 processos. O chefe do setor determinou que a divisão do trabalho fosse feita de forma **inversamente proporcional aos dias de atraso** que cada funcionário teve no mês anterior. Os funcionários A, B e C tiveram, respectivamente, 2, 3 e 6 dias de atraso. O número de processos que o funcionário A deverá protocolar é:  
(A) 45.  
(B) 90.  
(C) 120.  
(D) 135.  
(E) 150.  

<details>
<summary><b>Ver Gabarito e Resolução Passo a Passo</b></summary>

**Gabarito Oficial: D (135)**

**Resolução Detalhada:**  
* **Passo 1: Entender a inversão:**  
  Quem atrasou menos (funcionário A com 2 atrasos) deve protocolar **mais** processos.  
* **Passo 2: Inverter os pesos:**  
  - Funcionário A: $\frac{1}{2}$  
  - Funcionário B: $\frac{1}{3}$  
  - Funcionário C: $\frac{1}{6}$  
* **Passo 3: Tirar o MMC dos denominadores (2, 3, 6):**  
  $\text{MMC}(2, 3, 6) = 6$.  
  Reduzindo as frações ao mesmo denominador:  
  - A: $\frac{6 \div 2 \times 1}{6} = \frac{3}{6}$  
  - B: $\frac{6 \div 3 \times 1}{6} = \frac{2}{6}$  
  - C: $\frac{6 \div 6 \times 1}{6} = \frac{1}{6}$  
* **Passo 4: Eliminar o denominador 6 e usar o método do $k$:**  
  Os novos pesos diretos são **3, 2 e 1**:  
  - $A = 3k$  
  - $B = 2k$  
  - $C = 1k$  
* **Passo 5: Somar e igualar ao total:**  
  $$3k + 2k + 1k = 270 \implies 6k = 270$$  
  $$k = \frac{270}{6} = \mathbf{45}$$  
* **Passo 6: Calcular a quantia do funcionário A:**  
  $$\text{Processos de A} = 3k = 3 \times 45 = \mathbf{135 \text{ processos}}$$  
* *(Para checagem: $B = 2 \times 45 = 90$; $C = 1 \times 45 = 45$. Total = $135 + 90 + 45 = 270$).*  
* **Gabarito:** Letra **D**.
</details>

---

### Questão 06
**Banca:** FGV | **Órgão:** Câmara Municipal | **Cargo:** Técnico Administrativo  

Sejam $A$ e $B$ dois conjuntos finitos tais que o número de elementos de $A \cup B$ é 48, o número de elementos de $A - B$ é 18 e o número de elementos de $B - A$ é 22. O número de elementos da interseção $A \cap B$ é igual a:  
(A) 6.  
(B) 8.  
(C) 10.  
(D) 12.  
(E) 14.  

<details>
<summary><b>Ver Gabarito e Resolução Passo a Passo</b></summary>

**Gabarito Oficial: B (8)**

**Resolução Detalhada:**  
* **Passo 1: Entender a anatomia da união:**  
  A união de dois conjuntos é composta por 3 pedaços que não se sobrepõem:  
  1. Apenas $A$ (ou seja, $A - B$);  
  2. Apenas $B$ (ou seja, $B - A$);  
  3. A interseção ($A \cap B$).  
* **Passo 2: Montar a equação da partição:**  
  $$n(A \cup B) = n(A - B) + n(B - A) + n(A \cap B)$$  
* **Passo 3: Substituir os valores fornecidos:**  
  $$48 = 18 + 22 + n(A \cap B)$$  
  $$48 = 40 + n(A \cap B)$$  
  $$n(A \cap B) = 48 - 40 = \mathbf{8}$$  
* **Gabarito:** Letra **B**.
</details>

---

### Questão 07
**Banca:** CONSULPLAN | **Órgão:** Prefeitura Municipal | **Cargo:** Assistente Administrativo (Prova Oficial 36, Q11 adaptada)  

Um bônus de produtividade no valor de R$ 3.850,00 foi distribuído entre três funcionários de uma repartição municipal de forma diretamente proporcional ao tempo de serviço de cada um na prefeitura: 2, 4 e 5 anos completos. A diferença entre a quantia recebida pelo funcionário mais antigo e pelo funcionário mais novo foi de:  
(A) R$ 700,00.  
(B) R$ 1.050,00.  
(C) R$ 1.400,00.  
(D) R$ 1.750,00.  

<details>
<summary><b>Ver Gabarito e Resolução Passo a Passo</b></summary>

**Gabarito Oficial: B (R$ 1.050,00)**

**Resolução Detalhada:**  
* **Passo 1: Montar os pesos pelo tempo de serviço:**  
  - Funcionário mais novo: peso 2 $\to 2k$  
  - Funcionário intermediário: peso 4 $\to 4k$  
  - Funcionário mais antigo: peso 5 $\to 5k$  
* **Passo 2: Somar as partes e achar o fator $k$:**  
  $$2k + 4k + 5k = 3.850$$  
  $$11k = 3.850$$  
  $$k = \frac{3.850}{11} = \mathbf{350}$$  
* **Passo 3: O que a questão pede?**  
  Pede a **diferença** entre o mais antigo ($5k$) e o mais novo ($2k$):  
  $$\text{Diferença} = 5k - 2k = 3k$$  
  $$\text{Diferença} = 3 \times 350 = \mathbf{\text{R$ } 1.050,00}$$  
* **Gabarito:** Letra **B**.
</details>

---

### Questão 08
**Banca:** CEBRASPE / CESPE | **Órgão:** Tribunal de Contas | **Cargo:** Técnico Administrativo  

Em uma auditoria em 100 contratos de compras da Prefeitura, constatou-se que:  
- 60 contratos continham falhas na fase de cotação de preços;  
- 50 contratos continham falhas na comprovação de entrega de mercadorias;  
- 20 contratos não apresentavam nenhuma dessas duas falhas.  

Com base exclusivamente nesses dados, o número de contratos que apresentavam **ambas as falhas simultaneamente** foi de:  
(A) 10.  
(B) 20.  
(C) 30.  
(D) 40.  
(E) 50.  

<details>
<summary><b>Ver Gabarito e Resolução Passo a Passo</b></summary>

**Gabarito Oficial: C (30)**

**Resolução Detalhada:**  
* **Passo 1: Identificar o total com falhas (União dos grupos):**  
  O universo total é de 100 contratos, e 20 **não têm nenhuma falha**:  
  $$n(\text{Com alguma falha}) = 100 - 20 = \mathbf{80 \text{ contratos}}$$  
* **Passo 2: Aplicar a fórmula da união de dois conjuntos:**  
  $$n(A \cup B) = n(A) + n(B) - n(A \cap B)$$  
* **Passo 3: Substituir os valores na fórmula:**  
  $$80 = 60 + 50 - n(A \cap B)$$  
  $$80 = 110 - n(A \cap B)$$  
  $$n(A \cap B) = 110 - 80 = \mathbf{30 \text{ contratos}}$$  
* **Gabarito:** Letra **C**.
</details>

---

## Checklist de Fixação Ativa para o Aluno

Antes de considerar a Semana 02 de Matemática consolidada no seu caderno, teste a sua memória ativa:

1. [ ] Sei a diferença prática entre $\in$ (elemento para conjunto) e $\subset$ (conjunto para conjunto)?  
2. [ ] Consigo resolver qualquer problema de Diagrama de Venn começando sempre pelo preenchimento do miolo (interseção)?  
3. [ ] Sei por que subtraímos a interseção no cálculo da união para não contar a mesma pessoa duas vezes?  
4. [ ] Sei identificar e montar a razão respeitando rigidamente quem o texto mandou colocar no numerador?  
5. [ ] Sei aplicar o fator $k$ na divisão diretamente proporcional somando os pesos e dividindo o total?  
6. [ ] Sei transformar uma divisão inversamente proporcional em direta invertendo os pesos e eliminando o MMC?  
