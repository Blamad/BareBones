@echo off
curl http://127.0.0.1:3000/explorer/openapi.json --output openapi.json
.\..\server\node_modules\.bin\openapi-generator generate -i openapi.json -g typescript-angular -o ..\webapp\sdk --skip-validate-spec
rm openapi.json