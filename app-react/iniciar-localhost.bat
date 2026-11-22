@echo off
chcp 65001 >nul
cd /d "%~dp0"

title Plataforma de Estudos (Versao de Teste Localhost)

where npm >nul 2>nul
if errorlevel 1 (
  echo [ERRO] Node.js / npm nao encontrado neste PC.
  echo Instale o Node.js LTS em https://nodejs.org/ e tente novamente.
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo [1/2] Instalando dependencias do projeto pela primeira vez...
  call npm install
  if errorlevel 1 (
    echo [ERRO] Falha ao instalar dependencias.
    pause
    exit /b 1
  )
)

echo [2/2] Iniciando servidor de teste em http://localhost:5173 ...
echo (Mantenha esta janela aberta enquanto estiver estudando. Pressione Ctrl+C para encerrar.)
call npm run dev -- --open
if errorlevel 1 (
  echo [ERRO] O servidor foi encerrado com erro.
  pause
)
