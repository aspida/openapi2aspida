# OpenAPI / Swagger to aspida

<br />
<br />
<br />
<br />
<br />
<div align="center">
  <img src="https://aspidajs.github.io/aspida/logos/svg/black.svg" alt="aspida" title="aspida" width="600" />
</div>
<br />
<br />
<br />
<div align="center">
  <a href="https://www.npmjs.com/package/openapi2aspida">
    <img src="https://img.shields.io/npm/v/openapi2aspida" alt="npm version" />
  </a>
  <a href="https://github.com/aspidajs/openapi2aspida/actions?query=workflow%3A%22Node.js+CI%22">
    <img src="https://github.com/aspidajs/openapi2aspida/workflows/Node.js%20CI/badge.svg" alt="Node.js CI" />
  </a>
  <a href="https://codecov.io/gh/aspidajs/aspida">
    <img src="https://img.shields.io/codecov/c/github/aspidajs/openapi2aspida.svg" alt="Codecov" />
  </a>
  <a href="https://dependabot.com">
    <img src="https://api.dependabot.com/badges/status?host=github&repo=aspidajs/openapi2aspida" alt="Dependabot Status" />
  </a>
  <a href="https://github.com/aspidajs/openapi2aspida/LICENSE">
    <img src="https://img.shields.io/npm/l/openapi2aspida" alt="License" />
  </a>
</div>
<br />
<p align="center">Convert OpenAPI 3.0 and Swagger 2.0 definitions into <a href="https://github.com/aspidajs/aspida/tree/master/packages/aspida">aspida</a>.</p>
<br />
<br />

## Getting Started

Create config file in project root

`aspida.config.js`

```js
module.exports = {
  input: "apis", // "input" of aspida is "output" for openapi2aspida
  openapi: { inputFile: "https://petstore.swagger.io/v2/swagger.json" } // Compatible with yaml/json of OpenAPI3.0/Swagger2.0
}
```

`tarminal`

```sh
$ npx openapi2aspida --build
# apis/$api.ts was built successfully.
```

## Getting Started with aspida-mock

Installation ([@aspida/axios](https://github.com/aspidajs/aspida/tree/master/packages/aspida-axios) only mock compatible)

- Using [npm](https://www.npmjs.com/):

  ```sh
  $ npm install @aspida/axios axios
  $ npm install aspida-mock --save-dev
  ```

- Using [Yarn](https://yarnpkg.com/):

  ```sh
  $ yarn add @aspida/axios axios
  $ yarn add aspida-mock --dev
  ```

`package.json`

```json
{
  "scripts": {
    "build": "aspida-mock --build"
  }
}
```

`aspida.config.js`

```js
module.exports = {
  openapi: { inputFile: "https://petstore.swagger.io/v2/swagger.json", mock: true }
}
```

`tarminal`

```sh
$ npx openapi2aspida --build
# apis/$api.ts was built successfully.
$ npm run build
# apis/$mock.ts was built successfully.
```

## License

openapi2aspida is licensed under a [MIT License](https://github.com/aspidajs/openapi2aspida/LICENSE).
