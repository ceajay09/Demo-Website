@echo off
setlocal
pushd "%~dp0"
if errorlevel 1 exit /b 1
call scripts\check-docker.bat
if errorlevel 1 goto :error
if not defined JAVA_HOME (
  echo JAVA_HOME is missing. Install JDK 17 and reopen the terminal.
  goto :error
)
if not exist My-App_Backend\src\main\resources\application-dev.properties (
  echo Backend development configuration is missing. See My-App_Backend\README.md.
  goto :error
)
echo Building backend with the existing Maven wrapper and parent configuration...
pushd My-App_Backend
call mvnw.cmd -B package
set "BACKEND_BUILD_EXIT=%ERRORLEVEL%"
popd
if not "%BACKEND_BUILD_EXIT%"=="0" goto :error
echo Starting backend and Traefik...
docker compose -f compose.local.yaml up -d --build backend traefik
if errorlevel 1 goto :error
echo Backend: http://localhost:8081
popd
pause
exit /b 0
:error
echo Backend start failed. See the message above and README.md.
popd
pause
exit /b 1
