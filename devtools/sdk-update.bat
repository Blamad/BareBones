@echo off
cd ..\server
curl http://127.0.0.1:3000/explorer/openapi.json --output openapi.json
.\node_modules\.bin\openapi-generator generate -i openapi.json -g typescript-angular -o ..\webapp\sdk --skip-validate-spec
.\node_modules\.bin\openapi-generator generate -i openapi.json -g typescript-angular -o ..\controlPanel\sdk --skip-validate-spec
rm openapi.json