module.exports = [
  {
    input: 'samples/swagger',
    outputEachDir: true,
    openapi: { inputFile: 'samples/swagger.yaml' },
  },
  {
    input: 'samples/simple',
    outputEachDir: true,
    openapi: { inputFile: 'samples/simple.yaml' },
  },
  {
    input: 'samples/strapi',
    outputEachDir: true,
    openapi: { inputFile: 'samples/strapi.json' },
  },
  {
    input: 'samples/freee',
    outputEachDir: true,
    openapi: { inputFile: 'samples/freee.json' },
  },
  {
    input: 'samples/openapi',
    outputEachDir: true,
    openapi: { inputFile: 'samples/openapi.json', yaml: false },
  },
  {
    input: 'samples/externals',
    outputEachDir: true,
    openapi: { inputFile: 'samples/externals.json', yaml: false },
  },
  {
    input: 'samples/nullable-object',
    outputEachDir: true,
    openapi: { inputFile: 'samples/nullable-object.yml' },
  },
  {
    input: 'samples/array-one-of',
    outputEachDir: true,
    openapi: { inputFile: 'samples/array-one-of.yml' },
  },
  {
    input: 'samples/request-bodies',
    outputEachDir: true,
    openapi: { inputFile: 'samples/request-bodies.yml' },
  },
  {
    input: 'samples/responses',
    outputEachDir: true,
    openapi: { inputFile: 'samples/responses.yml' },
  },
  {
    input: 'samples/path',
    outputEachDir: true,
    openapi: { inputFile: 'samples/path.yml' },
  },
  {
    input: 'samples/headers',
    outputEachDir: true,
    openapi: { inputFile: 'samples/headers.yml' },
  },
  {
    input: 'samples/allOf-required',
    outputEachDir: true,
    openapi: { inputFile: 'samples/allOf-required.yml' },
  },
  {
    input: 'samples/empty-object-response-body',
    outputEachDir: true,
    openapi: { inputFile: 'samples/empty-object-response-body.yml' },
  },
  // {
  //   input: 'samples/path-at-mark',
  //   outputEachDir: true,
  //   openapi: { inputFile: 'samples/path-at-mark.yml' }
  // }
];
