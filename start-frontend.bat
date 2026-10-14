@echo off
setlocal
pushd "%~dp0My-App_Frontend"
if errorlevel 1 exit /b 1
where npm.cmd >nul 2>&1
if errorlevel 1 (
  echo Node.js 22 and npm are required. Install them and reopen the terminal.
  goto :error
)
node -e "process.exit(process.versions.node.split('.')[0] === '22' ? 0 : 1)"
if errorlevel 1 (
  echo This project requires Node.js 22. Check node --version.
  goto :error
)
if not exist node_modules\.bin\vite.cmd (
  call npm.cmd ci
  if errorlevel 1 goto :error
)
echo Frontend: http://localhost:5173 or http://localhost via Traefik.
echo Stop with Ctrl+C. API requests require start-backend.bat.
call npm.cmd run start
if errorlevel 1 goto :error
popd
exit /b 0
:error
popd
pause
exit /b 1
