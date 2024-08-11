import type { OpenAPIV3 } from 'openapi-types';
import { getPropertyName, isRefObject } from './converters';
import { resolveSchemasRef } from './resolvers';

export default (text: string, params: OpenAPIV3.ParameterObject[], openapi: OpenAPIV3.Document) => {
  if (text === '*') return '_any';
  if (!/^{/.test(text)) return text;

  const valName = text.slice(1, -1);
  const prefix = `_${getPropertyName(valName)}`;

  const schema = params.find((p) => p.in === 'path' && p.name === valName)?.schema;

  if (!schema) return prefix;

  if (isRefObject(schema)) {
    const referencedSchema = resolveSchemasRef(openapi, schema.$ref);

    if (referencedSchema.type === 'string') {
      return `${prefix}@string`;
    } else if (referencedSchema.type === 'number' || referencedSchema.type === 'integer') {
      return `${prefix}@number`;
    } else {
      return prefix;
    }
  }

  return `${prefix}${
    schema.type === 'string'
      ? '@string'
      : schema.type === 'number' || schema.type === 'integer'
        ? '@number'
        : ''
  }`;
};
