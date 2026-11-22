import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";
import { MetodoPage } from "@/pages/MetodoPage";
import { CronogramaPage } from "@/pages/CronogramaPage";
import { LessonPage } from "@/pages/LessonPage";
import { GeradorPage } from "@/pages/GeradorPage";
import { ProvasPage } from "@/pages/ProvasPage";
import { SimuladosHubPage } from "@/pages/SimuladosHubPage";
import { SimuladoRunPage } from "@/pages/SimuladoRunPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<Navigate to="/metodo" replace />} />
          <Route path="/metodo" element={<MetodoPage />} />
          <Route path="/cronograma" element={<CronogramaPage />} />

          {/* Rotas reais da Aula Guiada por Eixos (Voltar & F5 perfeitos!) */}
          <Route path="/aulas/:blockId" element={<LessonPage mode="summary" />} />
          <Route path="/aulas/:blockId/:docIdx" element={<LessonPage mode="summary" />} />
          <Route path="/aulas/:blockId/:docIdx/eixo/:axisNum" element={<LessonPage mode="axis" />} />
          <Route path="/aulas/:blockId/:docIdx/questoes" element={<LessonPage mode="questoes" />} />

          <Route path="/gerador" element={<GeradorPage />} />
          <Route path="/provas" element={<ProvasPage />} />

          <Route path="/simulados" element={<SimuladosHubPage />} />
          <Route path="/simulados/:simId" element={<SimuladoRunPage />} />

          <Route path="*" element={<Navigate to="/metodo" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
