export declare type PropValue = {
    isArray: boolean;
    isEnum: boolean;
    nullable: boolean;
    hasOf?: 'oneOf' | 'allOf' | 'anyOf';
    description: string | null;
    value: Prop[] | string | string[] | PropValue | PropValue[];
};
export declare type Prop = {
    name: string;
    required: boolean;
    values: PropValue[];
    description: string | null;
};
export declare const value2String: (v: PropValue, indent: string) => string;
export declare const description2Doc: (desc: string | null, indent: string) => string;
export declare const props2String: (props: Prop[], indent: string) => string;
//# sourceMappingURL=props2String.d.ts.map