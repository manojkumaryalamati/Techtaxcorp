@echo off
setlocal
title TechTaxCorp dev server
cd /d "%~dp0"

where npm >nul 2>nul
if errorlevel 1 (
  echo [ERROR] npm not found. Install Node.js from https://nodejs.org then try again.
  pause
  exit /b 1
)

echo.
echo  ============================================================
echo    TechTaxCorp - development site
echo.
echo    1. Wait until you see "ready" below.
echo    2. Open ONLY this address in Chrome or Edge:
echo.
echo        http://127.0.0.1:5321/
echo.
echo    Do NOT open index.html or vite.config.ts from File Explorer.
echo  ============================================================
echo.

call npm run dev:client
set ERR=%ERRORLEVEL%
if not "%ERR%"=="0" (
  echo.
  echo [ERROR] Dev server exited with code %ERR%.
  echo If port 5321 is busy, close other apps using it or change port in client\vite.config.ts
  pause
)
exit /b %ERR%
