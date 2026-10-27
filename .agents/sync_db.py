"""
Script auxiliar para o Agente Local consultar ou atualizar o progresso do aluno
no banco de dados da plataforma (sincronizando com o site).

Se o aluno ainda não estiver vinculado localmente (.agents/usuario_ativo.json),
o agente deve perguntar o e-mail (ou nome de usuário) do aluno e executar:
  python .agents/sync_db.py set-user <email_ou_usuario>

Comandos disponíveis:
  python .agents/sync_db.py status
  python .agents/sync_db.py set-user <email_ou_usuario>
  python .agents/sync_db.py mark <chave_bloco>                 (ex: python .agents/sync_db.py mark w1_port)
  python .agents/sync_db.py mark <email_ou_id> <chave_bloco>   (ex: python .agents/sync_db.py mark usuario@email.com w1_port)
  python .agents/sync_db.py exam <numero_prova>                (ex: python .agents/sync_db.py exam 1)
  python .agents/sync_db.py exam <email_ou_id> <numero_prova>  (ex: python .agents/sync_db.py exam usuario@email.com 1)

Chaves de blocos por semana (X = 1 a 12):
  wX_port -> Língua Portuguesa da Semana X
  wX_rlm  -> Matemática e RLM da Semana X
  wX_esp  -> Conhecimentos Específicos da Semana X
  wX_ger  -> Conhecimentos Gerais da Semana X
  wX_sim  -> Simulado de Sábado da Semana X
"""
import os
import sys
import json
import urllib.request

DB_SQL_URL = "https://ep-muddy-thunder-ac0eoxn3-pooler.sa-east-1.aws.neon.tech/sql"
DB_CONN_STR = "postgresql://neondb_owner:npg_l2mWY5HINrgG@ep-muddy-thunder-ac0eoxn3-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require"
ACTIVE_USER_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "usuario_ativo.json")


def db_query(query, params=None):
    req = urllib.request.Request(
        DB_SQL_URL,
        data=json.dumps({"query": query, "params": params or []}).encode("utf-8"),
        headers={
            "Neon-Connection-String": DB_CONN_STR,
            "Content-Type": "application/json"
        }
    )
    with urllib.request.urlopen(req, timeout=15) as r:
        return json.loads(r.read().decode("utf-8"))


def find_user(identifier):
    if str(identifier).isdigit():
        res = db_query(
            "SELECT id, nome, email FROM usuarios WHERE id = $1 LIMIT 1;",
            [int(identifier)]
        )
    else:
        res = db_query(
            "SELECT id, nome, email FROM usuarios WHERE LOWER(email) = LOWER($1) OR LOWER(nome) = LOWER($1) LIMIT 1;",
            [str(identifier).strip()]
        )
    rows = res.get("rows", [])
    return rows[0] if rows else None


def get_active_user(optional_identifier=None):
    if optional_identifier:
        u = find_user(optional_identifier)
        if u:
            with open(ACTIVE_USER_FILE, "w", encoding="utf-8") as f:
                json.dump(u, f, ensure_ascii=False, indent=2)
            return u
        print(f"ERRO: Usuário '{optional_identifier}' não encontrado na tabela 'usuarios'.")
        sys.exit(1)

    if os.path.exists(ACTIVE_USER_FILE):
        try:
            with open(ACTIVE_USER_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            pass

    print("ATENÇÃO AGENTE: Nenhum usuário ativo configurado localmente (.agents/usuario_ativo.json não encontrado).")
    print("Pergunte ao usuário qual é o e-mail ou nome de usuário dele na plataforma e execute:")
    print("  python .agents/sync_db.py set-user <email_do_usuario>")
    sys.exit(1)


if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else "status"

    if cmd == "set-user":
        if len(sys.argv) < 3:
            print("Uso: python .agents/sync_db.py set-user <email_ou_usuario>")
            sys.exit(1)
        u = get_active_user(sys.argv[2])
        print(f"Usuário ativo vinculado com sucesso: ID={u['id']} | Nome={u['nome']} | E-mail={u['email']}")

    elif cmd == "status":
        u = get_active_user(sys.argv[2] if len(sys.argv) >= 3 else None)
        res = db_query("""
            SELECT u.id, u.nome, u.email, p.checklist, p.provas_feitas, p.semana_atual, p.updated_at
            FROM usuarios u
            LEFT JOIN concurso_progresso p ON p.usuario_id = u.id
            WHERE u.id = $1;
        """, [u["id"]])
        rows = res.get("rows", [])
        if rows:
            print(json.dumps(rows[0], ensure_ascii=False, indent=2))
        else:
            print(f"Usuário {u['email']} encontrado, mas ainda sem registros de progresso.")

    elif cmd == "mark":
        if len(sys.argv) == 3:
            u = get_active_user()
            key = sys.argv[2]
        elif len(sys.argv) >= 4:
            u = get_active_user(sys.argv[2])
            key = sys.argv[3]
        else:
            print("Uso: python .agents/sync_db.py mark <chave_bloco> (ex: w1_port)")
            sys.exit(1)

        db_query("""
            INSERT INTO concurso_progresso (usuario_id, checklist, updated_at)
            VALUES ($1, jsonb_build_object($2::text, true), NOW())
            ON CONFLICT (usuario_id) DO UPDATE SET
              checklist = COALESCE(concurso_progresso.checklist, '{}'::jsonb) || jsonb_build_object($2::text, true),
              updated_at = NOW();
        """, [u["id"], key])
        print(f"Progresso atualizado: bloco '{key}' marcado como concluído para {u['nome']} ({u['email']}).")

    elif cmd == "exam":
        if len(sys.argv) == 3:
            u = get_active_user()
            exam_num = str(sys.argv[2])
        elif len(sys.argv) >= 4:
            u = get_active_user(sys.argv[2])
            exam_num = str(sys.argv[3])
        else:
            print("Uso: python .agents/sync_db.py exam <numero_prova> (ex: 1)")
            sys.exit(1)

        db_query("""
            INSERT INTO concurso_progresso (usuario_id, provas_feitas, updated_at)
            VALUES ($1, jsonb_build_object($2::text, true), NOW())
            ON CONFLICT (usuario_id) DO UPDATE SET
              provas_feitas = COALESCE(concurso_progresso.provas_feitas, '{}'::jsonb) || jsonb_build_object($2::text, true),
              updated_at = NOW();
        """, [u["id"], exam_num])
        print(f"Progresso atualizado: prova #{exam_num} marcada como concluída para {u['nome']} ({u['email']}).")
