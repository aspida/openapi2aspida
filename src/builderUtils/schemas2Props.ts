import type { OpenAPIV3 } from 'openapi-types';
import { defKey2defName, isRefObject, schema2value } from './converters';
import type { PropValue } from './props2String';
import { resolveSchemasRef } from './resolvers';

export type Schema = { name: string; value: PropValue };

export default (schemas: OpenAPIV3.ComponentsObject['schemas'], openapi: OpenAPIV3.Document) =>
  schemas &&
  Object.keys(schemas)
    .filter((defKey) => {
      const target = schemas[defKey];
      return !(isRefObject(target) ? resolveSchemasRef(openapi, target.$ref) : target).deprecated;
    })
    .map((defKey) => {
      const value = schema2value(schemas[defKey]);
      return value ? { name: defKey2defName(defKey), value } : null;
    })
    .filter((v): v is Schema => !!v);
