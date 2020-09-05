### Configuração Inicial (Mínimo pra rodar um projeto em TS)
```ssh
yarn init
yarn add -D typescript
```

### Arquivo de configuração do typescript (tsconfig.json)
```ssh
tsc --init
```

```json
{
  "compilerOptions": {
    "target": "es2018",
    "skipLibCheck": true,
    "sourceMap": true,
    "module": "commonjs",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "allowJs": true,
    "removeComments": true
  },
  "exclude": [
    "./node_modules/*",
    "dist"
  ]
}
```

### Arquitetura
```ssh
yarn add -D ts-node-dev
```
- criar pasta src
- criar pasta test
- Adicionar script `build` no `package.json`
- Adicionar script `start` no `package.json`
```json
"scripts": {
  "build": "tsc",
  "start": "dist/src/index",
  "start-dev": "ts-node--dev src/index.ts",
}
```
### Configurando ambiente de test
yarn add -D jest ts-jest @types/jest
```ssh
jest --init
```
```json
{
  "displayName": "integration",
  "preset": "ts-jest",
  "testEnvironment": "node",
  "bail": true,
  "verbose": true,
  "setupFilesAfterEnv": ["./jest.setup.ts"]
}
```

### Configuração do express
```ssh
yarn add express
yarn add @types/express
```
- criar a classe src/server.ts
- criar o controller src/api/status/status.controller.ts
