module.exports = [
  {
    input: 'samples/swagger',
    outputEachDir: true,
    openapi: { inputFile: 'samples/swagger.yaml', mock: true }
  },
  {
    input: 'samples/simple',
    outputEachDir: true,
    openapi: { inputFile: 'samples/simple.yaml', mock: true, noMockType: true }
  },
  {
    input: 'samples/strapi',
    outputEachDir: true,
    openapi: { inputFile: 'samples/strapi.json' }
  },
  {
    input: 'samples/freee',
    outputEachDir: true,
    openapi: { inputFile: 'samples/freee.json', mock: true }
  },
  {
    input: 'samples/openapi',
    outputEachDir: true,
    openapi: { inputFile: 'samples/openapi.json', mock: true, yaml: false }
  },
  {
    input: 'samples/externals',
    outputEachDir: true,
    openapi: { inputFile: 'samples/externals.json', yaml: false }
  }
]
