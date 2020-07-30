# OpenAPI / Swagger to aspida

<br />
<br />
<br />
<br />
<br />
<div align="center">
  <img src="https://aspida.github.io/aspida/logos/svg/black.svg" alt="aspida" title="aspida" width="600" />
</div>
<br />
<br />
<br />
<div align="center">
  <a href="https://www.npmjs.com/package/openapi2aspida">
    <img src="https://img.shields.io/npm/v/openapi2aspida" alt="npm version" />
  </a>
  <a href="https://github.com/aspida/openapi2aspida/actions?query=workflow%3A%22Node.js+CI%22">
    <img src="https://github.com/aspida/openapi2aspida/workflows/Node.js%20CI/badge.svg" alt="Node.js CI" />
  </a>
  <a href="https://codecov.io/gh/aspida/aspida">
    <img src="https://img.shields.io/codecov/c/github/aspida/openapi2aspida.svg" alt="Codecov" />
  </a>
  <a href="https://github.com/aspida/openapi2aspida/LICENSE">
    <img src="https://img.shields.io/npm/l/openapi2aspida" alt="License" />
  </a>
</div>
<br />
<p align="center">Convert OpenAPI 3.0 and Swagger 2.0 definitions into <a href="https://github.com/aspida/aspida/tree/master/packages/aspida">aspida</a>.</p>
<br />
<br />

## Getting Started

Compatible with yaml/json of OpenAPI3.0/Swagger2.0

```sh
$ npx openapi2aspida -i https://petstore.swagger.io/v2/swagger.json
# api/$api.ts was built successfully.
```

## Build from config file

Create config file in project root

`aspida.config.js`

```js
module.exports = {
  input: "api", // "input" of aspida is "output" for openapi2aspida
  outputEachDir: true, // Generate $api.ts in each endpoint directory
  openapi: { inputFile: "https://petstore.swagger.io/v2/swagger.json" }
}
```

```sh
$ npx openapi2aspida
```

## License

openapi2aspida is licensed under a [MIT License](https://github.com/aspida/openapi2aspida/blob/master/LICENSE).
