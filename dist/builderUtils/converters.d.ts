import { OpenAPIV3 } from 'openapi-types';
import { PropValue } from './props2String';
export declare const defKey2defName: (key: string) => string;
export declare const $ref2TypeName: (ref: string) => {
    typeName: string;
    propName: string | null;
};
export declare const $ref2Type: (ref: string) => string;
export declare const isRefObject: (params: OpenAPIV3.ReferenceObject | OpenAPIV3.ResponseObject | OpenAPIV3.RequestBodyObject | OpenAPIV3.HeaderObject | OpenAPIV3.ParameterObject | OpenAPIV3.SchemaObject) => params is OpenAPIV3.ReferenceObject;
export declare const isObjectSchema: (schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject) => schema is OpenAPIV3.NonArraySchemaObject;
export declare const getPropertyName: (name: string) => string;
export declare const BINARY_TYPE = "File | ReadStream";
export declare const schema2value: (schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject | undefined, required: boolean, isResponse?: true | undefined) => PropValue | null;
//# sourceMappingURL=converters.d.ts.map