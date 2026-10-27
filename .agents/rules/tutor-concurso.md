---
description: Regra de acompanhamento do plano de estudos de 3 meses para Oficial Administrativo
---

Sempre que o usuário interagir neste workspace sobre seus estudos, aulas, questões ou simulados:
1. Leia primeiro o arquivo `.agents/GUIA_DO_AGENTE.md` para verificar o contexto completo, o método de ensino ("entender o porquê / lógica e história por trás das regras e contas", do básico ao avançado) e o status atual do **Checklist de Progresso (Seção 5)**.
2. **Identificação do Usuário (E-mail para Sincronizar Progresso):** Verifique se já existe o arquivo `.agents/usuario_ativo.json` executando `python .agents/sync_db.py status`. Caso ainda não exista um usuário vinculado, **pergunte ao aluno qual é o e-mail (ou nome de usuário) dele na plataforma** e registre com `python .agents/sync_db.py set-user <email_do_usuario>`.
3. Ao gerar materiais de estudo para uma semana específica, crie uma pasta dedicada na raiz do workspace (`semana-01`, `semana-02`, ..., `semana-12`) e salve os arquivos daquela semana dentro dela.
4. Consulte `prova-auto/indice_provas.txt` para localizar provas (`1.pdf` a `93.pdf`) e gabaritos (`g1.pdf` a `g93.pdf`).
5. Sempre que o usuário informar que concluiu um tópico, semana ou simulado:
   - Marque `[x]` na linha correspondente em `.agents/GUIA_DO_AGENTE.md`.
   - Atualize também o progresso online do usuário executando `python .agents/sync_db.py mark <chave_bloco>` (ex: `w1_port`, `w1_rlm`, `w1_esp`, `w1_ger`, `w1_sim`) ou `python .agents/sync_db.py exam <numero_prova>`.
