import type { SimuladoRegistryEntry } from "@/types";

declare global {
  interface Window {
    SIMULADOS_REGISTRY?: SimuladoRegistryEntry[];
  }
}

const SIMULADO_SCRIPTS = [
  "/revisao/data.js",
  "/revisao/simulado-data.js",
  "/revisao/simulado-sem-01-03-data.js",
  "/revisao/resumos-sem-01-03.js",
  "/revisao/simulado-sem-01-04-data.js",
  "/revisao/resumos-sem-01-04.js",
  "/simulados-registry.js",
];

let simuladosPromise: Promise<SimuladoRegistryEntry[]> | null = null;

function loadScriptSequential(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[data-sim-src="${src}"]`);
    if (existing && existing.dataset.loaded === "true") {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.dataset.simSrc = src;
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error(`Erro ao carregar ${src}`));
    document.head.appendChild(script);
  });
}

export async function loadSimuladosRegistry(): Promise<SimuladoRegistryEntry[]> {
  if (window.SIMULADOS_REGISTRY && window.SIMULADOS_REGISTRY.length > 0) {
    return window.SIMULADOS_REGISTRY;
  }
  if (!simuladosPromise) {
    simuladosPromise = (async () => {
      for (const src of SIMULADO_SCRIPTS) {
        await loadScriptSequential(src);
      }
      return window.SIMULADOS_REGISTRY || [];
    })();
  }
  return simuladosPromise;
}
