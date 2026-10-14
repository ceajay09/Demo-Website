@echo off
rem Called from the launchers; all changes remain inside their setlocal scope.
if exist "%ProgramFiles%\Docker\Docker\resources\bin\docker.exe" set "PATH=%ProgramFiles%\Docker\Docker\resources\bin;%PATH%"
if exist "%LOCALAPPDATA%\Programs\DockerDesktop\resources\bin\docker.exe" set "PATH=%LOCALAPPDATA%\Programs\DockerDesktop\resources\bin;%PATH%"
where docker >nul 2>&1
if errorlevel 1 (
  echo Docker Desktop is missing. Follow the setup instructions in README.md.
  exit /b 1
)
:check
docker compose version >nul 2>&1
if errorlevel 1 (
  echo Docker Compose v2 is missing. Install or update Docker Desktop.
  exit /b 1
)
docker info >nul 2>&1
if errorlevel 1 (
  echo Docker is not ready. Open Docker Desktop and wait until the engine is running.
  echo If requested, complete WSL setup and restart Windows. Use Linux containers.
  exit /b 1
)
exit /b 0
