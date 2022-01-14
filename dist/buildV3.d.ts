import { OpenAPIV3 } from 'openapi-types';
import { RequiredConfig } from './getConfig';
declare const _default: (openapi: OpenAPIV3.Document, requiredConfig: RequiredConfig, replaceLeadingAtMark: string) => {
    openapi: OpenAPIV3.Document<{}>;
    baseURL: string;
    types: string | null;
    files: {
        file: string[];
        methods: string;
    }[];
};
export default _default;
//# sourceMappingURL=buildV3.d.ts.map