import { OpenAPIV3 } from 'openapi-types';
import { Prop } from './props2String';
export declare type Parameter = {
    name: string;
    prop: string | Prop;
};
declare const _default: (params: OpenAPIV3.ComponentsObject['parameters'], openapi: OpenAPIV3.Document, required: boolean) => Parameter[] | undefined;
export default _default;
//# sourceMappingURL=parameters2Props.d.ts.map