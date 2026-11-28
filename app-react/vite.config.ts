import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import fs from "node:fs";
import type { IncomingMessage, ServerResponse } from "node:http";

const PARENT_ROOT = path.resolve(__dirname, "..");

const MIME_TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".pdf": "application/pdf",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
};

/**
 * Middleware de desenvolvimento/preview para servir os assets estáticos da raiz do
 * repositório (PDFs de provas, edital, aulas-data.js, revisao/*) e o site legado
 * em /antigo sem duplicar arquivos dentro de app-react/.
 */
function serveLegacyAssetsPlugin(): Plugin {
  const allowedPrefixes = [
    "/prova-auto/",
    "/revisao/",
    "/aulas-data.js",
    "/simulados-registry.js",
    "/simulados-app.js",
    "/edital_organizado_oficial_administrativo.pdf",
  ];

  const legacyMiddleware = (req: IncomingMessage, res: ServerResponse, next: () => void) => {
    const rawUrl = (req.url || "").split("?")[0];
    const decodedUrl = decodeURIComponent(rawUrl);

    if (decodedUrl === "/antigo/") {
      res.statusCode = 302;
      res.setHeader("Location", "/antigo");
      res.end();
      return;
    }

    if (decodedUrl === "/antigo" || decodedUrl === "/antigo.html") {
      const legacyHtml = path.join(PARENT_ROOT, "index.html");
      if (fs.existsSync(legacyHtml)) {
        res.setHeader("Content-Type", MIME_TYPES[".html"]);
        res.setHeader("Cache-Control", "no-cache");
        fs.createReadStream(legacyHtml).pipe(res);
        return;
      }
    }

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
  };

  return {
    name: "serve-legacy-root-assets",
    configureServer(server) {
      server.middlewares.use(legacyMiddleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(legacyMiddleware);
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
  preview: {
    port: 4173,
    proxy: {
      "/api/db": {
        target: "https://concurso-oficial-administrativo.vercel.app",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
