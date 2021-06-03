import { OpenAPI } from 'openapi-types';
import { AspidaConfig } from 'aspida/dist/commands';
export declare type RequiredConfig = {
    schema: boolean;
    parameter: boolean;
    query: boolean;
    status: boolean;
    resBody: boolean;
    resHeader: boolean;
    reqBody: boolean;
    reqFormat: boolean;
    method: boolean;
};
export declare type Config = Pick<AspidaConfig, 'outputEachDir' | 'outputMode' | 'trailingSlash'> & {
    input: string | OpenAPI.Document;
    output: string;
    isYaml: boolean;
    requiredConfig: RequiredConfig;
    replaceLeadingAtMark: string;
};
export declare type ConfigFile = AspidaConfig & {
    openapi?: {
        inputFile: string;
        yaml?: boolean;
        requiredConfig?: Partial<RequiredConfig>;
        replaceLeadingAtMark?: string;
    };
};
declare type PartialConfig = Partial<ConfigFile> | Partial<ConfigFile>[];
declare const _default: (config?: string | PartialConfig | undefined) => Config[];
export default _default;
//# sourceMappingURL=getConfig.d.ts.map