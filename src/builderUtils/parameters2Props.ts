import type { OpenAPIV3 } from 'openapi-types';
import {
  $ref2Type,
  defKey2defName,
  getPropertyName,
  isRefObject,
  schema2value,
} from './converters';
import type { Prop } from './props2String';
import { resolveParamsRef } from './resolvers';

export type Parameter = { name: string; prop: string | Prop };

export default (params: OpenAPIV3.ComponentsObject['parameters'], openapi: OpenAPIV3.Document) =>
  params &&
  Object.keys(params)
    .filter((defKey) => {
      const target = params[defKey];
      return !(isRefObject(target) ? resolveParamsRef(openapi, target.$ref) : target).deprecated;
    })
    .map((defKey) => {
      const target = params[defKey];
      let prop: Parameter['prop'];

      if (isRefObject(target)) {
        prop = $ref2Type(target.$ref);
      } else {
        const value = schema2value(target.schema);
        if (!value) return null;

        prop = {
          name: getPropertyName(target.name),
          required: target.required ?? false,
          description: target.description ?? null,
          values: [value],
        };
      }

      return { name: defKey2defName(defKey), prop };
    })
    .filter((v): v is Parameter => !!v);
