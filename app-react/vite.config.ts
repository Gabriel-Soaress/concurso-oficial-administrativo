import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import fs from "node:fs";

const PARENT_ROOT = path.resolve(__dirname, "..");

const MIME_TYPES: Record<string, string> = {
  ".pdf": "application/pdf",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
};

/**
 * Middleware de desenvolvimento para servir os assets estáticos da raiz do
 * repositório (PDFs de provas, edital, aulas-data.js, revisao/*) sem duplicar
 * arquivos pesados dentro de app-react/ durante a fase de testes.
 */
function serveLegacyAssetsPlugin(): Plugin {
  const allowedPrefixes = [
    "/prova-auto/",
    "/revisao/",
    "/aulas-data.js",
    "/simulados-registry.js",
    "/edital_organizado_oficial_administrativo.pdf",
  ];

  return {
    name: "serve-legacy-root-assets",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const rawUrl = (req.url || "").split("?")[0];
        const decodedUrl = decodeURIComponent(rawUrl);
        const matches = allowedPrefixes.some((p) => decodedUrl === p || decodedUrl.startsWith(p));
        if (!matches) return next();

        const targetPath = path.resolve(PARENT_ROOT, "." + decodedUrl);
        if (!targetPath.startsWith(PARENT_ROOT)) return next();

        if (fs.existsSync(targetPath) && fs.statSync(targetPath).isFile()) {
          const ext = path.extname(targetPath).toLowerCase();
          res.setHeader("Content-Type", MIME_TYPES[ext] || "application/octet-stream");
          res.setHeader("Cache-Control", "no-cache");
          fs.createReadStream(targetPath).pipe(res);
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), serveLegacyAssetsPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    proxy: {
      "/api/db": {
        target: "https://concurso-oficial-administrativo.vercel.app",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
