import { OpenAPIV3 } from 'openapi-types';
import { PropValue } from './props2String';
export declare type Schema = {
    name: string;
    value: PropValue;
};
declare const _default: (schemas: OpenAPIV3.ComponentsObject['schemas'], openapi: OpenAPIV3.Document, required: boolean) => Schema[] | undefined;
export default _default;
//# sourceMappingURL=schemas2Props.d.ts.map