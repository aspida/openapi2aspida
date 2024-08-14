# OpenAPI / Swagger to aspida

<br />
<br />
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://aspida.github.io/aspida/logos/svg/white.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://aspida.github.io/aspida/logos/svg/black.svg">
  <img alt="aspida logo image" src="https://aspida.github.io/aspida/logos/svg/black.svg">
</picture>
<br />
<br />
<br />
<div align="center">
  <a href="https://www.npmjs.com/package/openapi2aspida">
    <img src="https://img.shields.io/npm/v/openapi2aspida" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/openapi2aspida">
    <img src="https://img.shields.io/npm/dm/openapi2aspida" alt="npm download" />
  </a>
</div>
<br />
<p align="center">Convert OpenAPI 3.0 and Swagger 2.0 definitions into <a href="https://github.com/aspida/aspida/tree/master/packages/aspida">aspida</a>.</p>
<br />
<br />

## Getting Started

Compatible with yaml/json of OpenAPI3.0/Swagger2.0

```sh
$ mkdir petstore-api
$ cd petstore-api
$ npx openapi2aspida -i https://petstore.swagger.io/v2/swagger.json # or ../local-swagger.yaml
# api/$api.ts was built successfully.

$ npm init -y
$ npm install @aspida/axios axios typescript ts-node @types/node
```

`index.ts`

```ts
import axiosClient from '@aspida/axios';
import api from './api/$api';
import type { Pet } from './api/@types';
(async () => {
  const client = api(axiosClient());
  const petId = 100;
  const body: Pet = {
    id: petId,
    name: 'hoge',
    photoUrls: [],
    status: 'available',
  };

  await client.pet.$post({ body });
  const pet = await client.pet._petId(petId).$get();
  console.log(pet);
})();
```

`package.json`

```json
{
  "scripts": {
    "start": "ts-node index.ts"
  }
}
```

```sh
$ npm start
# { id: 100, name: 'hoge', photoUrls: [], tags: [], status: 'available' }
```

## Build from config file

Create config file in project root

`aspida.config.js`

```js
module.exports = {
  input: 'api', // "input" of aspida is "output" for openapi2aspida
  outputEachDir: true, // Generate $api.ts in each endpoint directory
  openapi: { inputFile: 'https://petstore.swagger.io/v2/swagger.json' },
};
```

```sh
$ npx openapi2aspida
```

## Cli options

### `-i`, `--input`

path to an OpenAPI spec file for input

### `-o`, `--outputdir`

can change aspida output directory

### `-c`, `--config`

path to an aspida config file

### `--version`

displays version of openapi2aspida

### example

```bash
npx openapi2aspida -i=openApi/sample.yaml -o=lib/api/sample
```

## License

openapi2aspida is licensed under a [MIT License](https://github.com/aspida/openapi2aspida/blob/master/LICENSE).
