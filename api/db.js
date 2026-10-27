export default async function handler(req, res) {
  // Configuração de CORS para permitir requisições tanto de produção quanto de testes locais
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization"
  );

  // Resposta para preflight CORS (OPTIONS)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  const { query, params } = req.body || {};
  if (!query) {
    return res.status(400).json({ error: "Parâmetro 'query' ausente." });
  }

  const DB_SQL_URL = process.env.DB_SQL_URL || "https://ep-muddy-thunder-ac0eoxn3-pooler.sa-east-1.aws.neon.tech/sql";
  const DB_CONN_STR = process.env.DB_CONN_STR || "postgresql://neondb_owner:npg_l2mWY5HINrgG@ep-muddy-thunder-ac0eoxn3-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require";

  try {
    const neonRes = await fetch(DB_SQL_URL, {
      method: "POST",
      headers: {
        "Neon-Connection-String": DB_CONN_STR,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query, params: params || [] })
    });

    const data = await neonRes.json();
    return res.status(neonRes.status).json(data);
  } catch (err) {
    console.error("Erro ao consultar banco Neon:", err);
    return res.status(500).json({ error: "Falha na consulta ao banco.", details: err.message });
  }
}
