Creacion de archivo de redoc

npx redoc-cli --output myapi.html bundle openapi.yaml
https://redocly.com/docs/cli/commands/build-docs/
npx @redocly/cli build-docs openapi.yaml --output=api.html

creacion de archivo async api
npm install -g @asyncapi/generator
ag websocket.yaml @asyncapi/html-template -o websocket
