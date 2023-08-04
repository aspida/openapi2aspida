import SwaggerParser from '@apidevtools/swagger-parser';
import type { OpenAPI, OpenAPIV3 } from 'openapi-types';
import buildV3 from './buildV3';
import type { Config } from './getConfig';
import resolveExternalRefs from './resolveExternalRefs';

const isV3 = (openapi: OpenAPI.Document): openapi is OpenAPIV3.Document => 'openapi' in openapi;

export default async ({ input, isYaml }: Config) => {
  const openapi = await SwaggerParser.parse(input, { parse: { json: !isYaml } });
  const docs = isV3(openapi)
    ? openapi
    : await require('swagger2openapi').convertObj(openapi, { direct: true, resolveInternal: true });

  return buildV3(await resolveExternalRefs(docs, typeof input === 'string' ? input : ''));
};
