import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const APP_DIR = path.join(ROOT_DIR, "app-react");
const APP_DIST_DIR = path.join(APP_DIR, "dist");
const DIST_DIR = path.join(ROOT_DIR, "dist");

console.log("[build-vercel] Compilando app React...");
const buildResult = spawnSync("npm", ["--prefix", "app-react", "run", "build"], {
  cwd: ROOT_DIR,
  stdio: "inherit",
  shell: process.platform === "win32",
});

if (buildResult.error) {
  throw buildResult.error;
}
if (buildResult.status !== 0) {
  process.exit(buildResult.status ?? 1);
}

if (!fs.existsSync(APP_DIST_DIR)) {
  throw new Error(`Diretório esperado não encontrado após build: ${APP_DIST_DIR}`);
}

console.log("[build-vercel] Preparando diretório final ./dist ...");
fs.rmSync(DIST_DIR, { recursive: true, force: true });
fs.cpSync(APP_DIST_DIR, DIST_DIR, { recursive: true });

// Preserva a versão legada na rota /antigo (via vercel.json rewrite /antigo -> /antigo.html)
fs.copyFileSync(path.join(ROOT_DIR, "index.html"), path.join(DIST_DIR, "antigo.html"));

const rootStaticFiles = [
  "aulas-data.js",
  "simulados-registry.js",
  "simulados-app.js",
  "edital_organizado_oficial_administrativo.pdf",
];

for (const file of rootStaticFiles) {
  const src = path.join(ROOT_DIR, file);
  const dest = path.join(DIST_DIR, file);
  if (!fs.existsSync(src)) {
    throw new Error(`Arquivo estático obrigatório ausente na raiz: ${src}`);
  }
  fs.copyFileSync(src, dest);
}

const rootStaticDirs = ["revisao", "prova-auto"];
for (const dir of rootStaticDirs) {
  const src = path.join(ROOT_DIR, dir);
  const dest = path.join(DIST_DIR, dir);
  if (!fs.existsSync(src)) {
    throw new Error(`Diretório estático obrigatório ausente na raiz: ${src}`);
  }
  fs.cpSync(src, dest, { recursive: true });
}

const requiredOutputs = [
  "index.html",
  "antigo.html",
  "aulas-data.js",
  "simulados-registry.js",
  "simulados-app.js",
  "edital_organizado_oficial_administrativo.pdf",
  "edital_220_2026_birigui.pdf",
  "revisao/data.js",
  "prova-auto/1.pdf",
  "assets",
];

for (const rel of requiredOutputs) {
  const target = path.join(DIST_DIR, rel);
  if (!fs.existsSync(target)) {
    throw new Error(`Saída crítica ausente em ./dist: ${rel}`);
  }
}

console.log("[build-vercel] OK! ./dist pronto com React em /, legado em /antigo e todos os assets.");
