import { OpenAPIV3 } from 'openapi-types';
import { Config } from './getConfig';
declare const _default: ({ input, isYaml, requiredConfig, replaceLeadingAtMark }: Config) => Promise<{
    openapi: OpenAPIV3.Document<{}>;
    baseURL: string;
    types: string | null;
    files: {
        file: string[];
        methods: string;
    }[];
}>;
export default _default;
//# sourceMappingURL=buildTemplate.d.ts.map