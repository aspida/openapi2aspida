import type { OpenAPIV3 } from 'openapi-types';
import { getPropertyName, isRefObject, schema2value } from './converters';
import { resolveSchemasRef } from './resolvers';

export default (
  text: string,
  params: OpenAPIV3.ParameterObject[],
  openapi: OpenAPIV3.Document,
  required: boolean
) => {
  if (text === '*') return '_any';
  if (!/^{/.test(text)) {
    return text;
  }

  const valName = text.slice(1, -1);

  let schema = params.find(p => p.in === 'path' && p.name === valName)?.schema;
  if (schema && isRefObject(schema)) {
    const referencedSchema = resolveSchemasRef(openapi, schema.$ref);
    if (referencedSchema.type === 'string' || referencedSchema.type === 'number') {
      schema = referencedSchema;
    }
  }

  const schemaVal = schema2value(schema, required);

  return `_${getPropertyName(valName)}${
    schemaVal && typeof schemaVal.value === 'string' ? `@${schemaVal.value}` : ''
  }`;
};
