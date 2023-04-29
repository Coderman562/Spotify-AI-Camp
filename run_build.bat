@echo
call npm run build
xcopy /s /y /I dist\* server\static
