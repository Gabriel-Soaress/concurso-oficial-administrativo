"""
Script auxiliar para o Agente Local consultar ou atualizar o progresso do aluno
diretamente no banco Neon PostgreSQL (tabela concurso_progresso).

Uso:
  python .agents/sync_db.py status
  python .agents/sync_db.py mark <usuario_id> <chave_bloco>   (ex: python .agents/sync_db.py mark 1 w1_port)
  python .agents/sync_db.py exam <usuario_id> <numero_prova>  (ex: python .agents/sync_db.py exam 1 1)
"""
import sys
import json
import urllib.request

NEON_SQL_URL = "https://ep-muddy-thunder-ac0eoxn3-pooler.sa-east-1.aws.neon.tech/sql"
NEON_CONN_STR = "postgresql://neondb_owner:npg_l2mWY5HINrgG@ep-muddy-thunder-ac0eoxn3-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require"

def neon_query(query, params=None):
    req = urllib.request.Request(
        NEON_SQL_URL,
        data=json.dumps({"query": query, "params": params or []}).encode("utf-8"),
        headers={
            "Neon-Connection-String": NEON_CONN_STR,
            "Content-Type": "application/json"
        }
    )
    with urllib.request.urlopen(req, timeout=15) as r:
        return json.loads(r.read().decode("utf-8"))

if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else "status"
    if cmd == "status":
        res = neon_query("""
            SELECT u.id, u.nome, u.email, p.checklist, p.provas_feitas, p.semana_atual, p.updated_at
            FROM usuarios u
            LEFT JOIN concurso_progresso p ON p.usuario_id = u.id
            ORDER BY u.id;
        """)
        for row in res.get("rows", []):
            print(json.dumps(row, ensure_ascii=False))
    elif cmd == "mark" and len(sys.argv) >= 4:
        uid = int(sys.argv[2])
        key = sys.argv[3]
        neon_query("""
            INSERT INTO concurso_progresso (usuario_id, checklist, updated_at)
            VALUES ($1, jsonb_build_object($2::text, true), NOW())
            ON CONFLICT (usuario_id) DO UPDATE SET
              checklist = concurso_progresso.checklist || jsonb_build_object($2::text, true),
              updated_at = NOW();
        """, [uid, key])
        print(f"Marcado bloco '{key}' como concluido para usuario_id={uid} no Neon DB.")
    elif cmd == "exam" and len(sys.argv) >= 4:
        uid = int(sys.argv[2])
        exam_num = str(sys.argv[3])
        neon_query("""
            INSERT INTO concurso_progresso (usuario_id, provas_feitas, updated_at)
            VALUES ($1, jsonb_build_object($2::text, true), NOW())
            ON CONFLICT (usuario_id) DO UPDATE SET
              provas_feitas = concurso_progresso.provas_feitas || jsonb_build_object($2::text, true),
              updated_at = NOW();
        """, [uid, exam_num])
        print(f"Marcada prova #{exam_num} como concluida para usuario_id={uid} no Neon DB.")
