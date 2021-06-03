"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var converters_1 = require("./builderUtils/converters");
var props2String_1 = require("./builderUtils/props2String");
var resolvers_1 = require("./builderUtils/resolvers");
var getDirName_1 = __importDefault(require("./builderUtils/getDirName"));
var schemas2Props_1 = __importDefault(require("./builderUtils/schemas2Props"));
var parameters2Props_1 = __importDefault(require("./builderUtils/parameters2Props"));
var methodNames = ['get', 'post', 'put', 'delete', 'head', 'options', 'patch'];
var getParamsList = function (openapi, params) { return (params === null || params === void 0 ? void 0 : params.map(function (p) { return (converters_1.isRefObject(p) ? resolvers_1.resolveParamsRef(openapi, p.$ref) : p); })) || []; };
exports.default = (function (openapi, requiredConfig, replaceLeadingAtMark) {
    var _a, _b, _c, _d;
    var files = [];
    var schemas = schemas2Props_1.default((_a = openapi.components) === null || _a === void 0 ? void 0 : _a.schemas, openapi, requiredConfig.schema) || [];
    var parameters = parameters2Props_1.default((_b = openapi.components) === null || _b === void 0 ? void 0 : _b.parameters, openapi, requiredConfig.parameter) || [];
    files.push.apply(files, __spreadArray([], __read(Object.keys(openapi.paths)
        .map(function (path) {
        var methodProps = Object.keys(openapi.paths[path]).filter(function (method) {
            return methodNames.includes(method);
        });
        var file = __spreadArray(__spreadArray([], __read(path
            .replace(/\/$/, '')
            .split('/')
            .slice(1)
            .map(function (p) {
            return getDirName_1.default(p, __spreadArray(__spreadArray([], __read(getParamsList(openapi, openapi.paths[path].parameters))), __read(methodProps.reduce(function (prev, c) {
                var _a;
                return __spreadArray(__spreadArray([], __read(prev)), __read(getParamsList(openapi, (_a = openapi.paths[path][c]) === null || _a === void 0 ? void 0 : _a.parameters)));
            }, []))), requiredConfig.parameter, replaceLeadingAtMark);
        }))), [
            'index'
        ]);
        var methods = methodProps
            .map(function (method) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            var target = openapi.paths[path][method];
            if (target.deprecated)
                return null;
            var params = [];
            if (target.parameters || openapi.paths[path].parameters) {
                var reqRefHeaders_1 = [];
                var reqHeaders_1 = [];
                var refQuery_1 = [];
                var query_1 = [];
                var queryRequired_1 = requiredConfig.query;
                __spreadArray(__spreadArray([], __read((openapi.paths[path].parameters || []))), __read((target.parameters || []))).forEach(function (p) {
                    var _a, _b, _c, _d, _e;
                    if (converters_1.isRefObject(p)) {
                        var ref = resolvers_1.resolveParamsRef(openapi, p.$ref);
                        var val = {
                            isArray: false,
                            isEnum: false,
                            nullable: false,
                            description: (_a = ref.description) !== null && _a !== void 0 ? _a : null,
                            value: converters_1.$ref2Type(p.$ref)
                        };
                        switch (ref.in) {
                            case 'header':
                                reqRefHeaders_1.push(val);
                                break;
                            case 'query':
                                refQuery_1.push(val);
                                queryRequired_1 = (_b = ref.required) !== null && _b !== void 0 ? _b : requiredConfig.query;
                                break;
                            default:
                                break;
                        }
                    }
                    else {
                        var value = converters_1.schema2value(p.schema, requiredConfig.query);
                        if (!value)
                            return;
                        var prop = {
                            name: converters_1.getPropertyName(p.name),
                            required: (_c = p.required) !== null && _c !== void 0 ? _c : requiredConfig.query,
                            description: (_d = p.description) !== null && _d !== void 0 ? _d : null,
                            values: [value]
                        };
                        switch (p.in) {
                            case 'header':
                                reqHeaders_1.push(prop);
                                break;
                            case 'query':
                                query_1.push(prop);
                                queryRequired_1 = (_e = p.required) !== null && _e !== void 0 ? _e : requiredConfig.query;
                                break;
                            default:
                                break;
                        }
                    }
                });
                if (reqHeaders_1.length || reqRefHeaders_1.length) {
                    params.push({
                        name: 'reqHeaders',
                        required: false,
                        description: null,
                        values: __spreadArray(__spreadArray([], __read(reqRefHeaders_1)), __read((reqHeaders_1.length
                            ? [
                                {
                                    isArray: false,
                                    isEnum: false,
                                    nullable: false,
                                    description: null,
                                    value: reqHeaders_1
                                }
                            ]
                            : [])))
                    });
                }
                if (refQuery_1.length || query_1.length) {
                    params.push({
                        name: 'query',
                        required: queryRequired_1,
                        description: null,
                        values: __spreadArray(__spreadArray([], __read(refQuery_1)), __read((query_1.length
                            ? [
                                {
                                    isArray: false,
                                    isEnum: false,
                                    nullable: false,
                                    description: null,
                                    value: query_1
                                }
                            ]
                            : [])))
                    });
                }
            }
            if (target.responses) {
                var code = Object.keys(target.responses).find(function (code) { return code.startsWith('20'); });
                if (code) {
                    params.push({
                        name: 'status',
                        required: requiredConfig.status,
                        description: null,
                        values: [
                            {
                                isArray: false,
                                isEnum: false,
                                nullable: false,
                                description: null,
                                value: code
                            }
                        ]
                    });
                    var res = target.responses[code];
                    var ref_1 = converters_1.isRefObject(res) ? resolvers_1.resolveResRef(openapi, res.$ref) : res;
                    var content = ref_1.content &&
                        ((_a = Object.entries(ref_1.content).find(function (_a) {
                            var _b = __read(_a, 1), key = _b[0];
                            return key.startsWith('application/');
                        })) === null || _a === void 0 ? void 0 : _a[1]);
                    if (content === null || content === void 0 ? void 0 : content.schema) {
                        var val = converters_1.schema2value(content.schema, requiredConfig.resBody, true);
                        val &&
                            params.push({
                                name: 'resBody',
                                required: requiredConfig.resBody,
                                description: ref_1.description,
                                values: [val]
                            });
                    }
                    if (ref_1.headers) {
                        params.push({
                            name: 'resHeaders',
                            required: requiredConfig.resHeader,
                            description: null,
                            values: [
                                {
                                    isArray: false,
                                    isEnum: false,
                                    nullable: false,
                                    description: null,
                                    value: Object.keys(ref_1.headers)
                                        .map(function (header) {
                                        var _a;
                                        var headerData = ref_1.headers[header];
                                        var val = converters_1.isRefObject(headerData)
                                            ? {
                                                isArray: false,
                                                isEnum: false,
                                                description: null,
                                                value: converters_1.$ref2Type(headerData.$ref)
                                            }
                                            : converters_1.schema2value(headerData.schema, requiredConfig.resHeader);
                                        return (val && {
                                            name: converters_1.getPropertyName(header),
                                            required: converters_1.isRefObject(headerData)
                                                ? true
                                                : (_a = headerData.required) !== null && _a !== void 0 ? _a : requiredConfig.resHeader,
                                            description: converters_1.isRefObject(headerData)
                                                ? null
                                                : headerData.description,
                                            values: [val]
                                        });
                                    })
                                        .filter(function (v) { return !!v; })
                                }
                            ]
                        });
                    }
                }
            }
            if (target.requestBody) {
                var reqFormat = '';
                var reqBody = null;
                var required = requiredConfig.reqBody;
                var description = null;
                if (converters_1.isRefObject(target.requestBody)) {
                    var ref = resolvers_1.resolveReqRef(openapi, target.requestBody.$ref);
                    if ((_b = ref.content['multipart/form-data']) === null || _b === void 0 ? void 0 : _b.schema) {
                        reqFormat = 'FormData';
                    }
                    else if ((_c = ref.content['application/x-www-form-urlencoded']) === null || _c === void 0 ? void 0 : _c.schema) {
                        reqFormat = 'URLSearchParams';
                    }
                    reqBody = {
                        isArray: false,
                        isEnum: false,
                        nullable: false,
                        description: null,
                        value: converters_1.$ref2Type(target.requestBody.$ref)
                    };
                    required = (_d = ref.required) !== null && _d !== void 0 ? _d : requiredConfig.reqBody;
                    description = (_e = ref.description) !== null && _e !== void 0 ? _e : null;
                }
                else {
                    required = (_f = target.requestBody.required) !== null && _f !== void 0 ? _f : requiredConfig.reqBody;
                    description = (_g = target.requestBody.description) !== null && _g !== void 0 ? _g : null;
                    if ((_h = target.requestBody.content['multipart/form-data']) === null || _h === void 0 ? void 0 : _h.schema) {
                        reqFormat = 'FormData';
                        reqBody = converters_1.schema2value(target.requestBody.content['multipart/form-data'].schema, requiredConfig.reqBody);
                    }
                    else if ((_j = target.requestBody.content['application/x-www-form-urlencoded']) === null || _j === void 0 ? void 0 : _j.schema) {
                        reqFormat = 'URLSearchParams';
                        reqBody = converters_1.schema2value(target.requestBody.content['application/x-www-form-urlencoded'].schema, requiredConfig.reqBody);
                    }
                    else {
                        var content = target.requestBody.content &&
                            ((_k = Object.entries(target.requestBody.content).find(function (_a) {
                                var _b = __read(_a, 1), key = _b[0];
                                return key.startsWith('application/');
                            })) === null || _k === void 0 ? void 0 : _k[1]);
                        if (content === null || content === void 0 ? void 0 : content.schema)
                            reqBody = converters_1.schema2value(content.schema, requiredConfig.reqBody);
                    }
                }
                if (reqFormat) {
                    params.push({
                        name: 'reqFormat',
                        required: requiredConfig.reqFormat,
                        description: null,
                        values: [
                            {
                                isArray: false,
                                isEnum: false,
                                nullable: false,
                                description: null,
                                value: reqFormat
                            }
                        ]
                    });
                }
                if (reqBody) {
                    params.push({
                        name: 'reqBody',
                        required: required,
                        description: description,
                        values: [reqBody]
                    });
                }
            }
            return {
                name: method,
                required: requiredConfig.method,
                description: (_l = target.description) !== null && _l !== void 0 ? _l : null,
                values: [
                    { isArray: false, isEnum: false, nullable: false, description: null, value: params }
                ]
            };
        })
            .filter(function (method) { return !!method; });
        if (methods.length) {
            var methodsText = props2String_1.props2String(methods, '');
            var hasBinary = methodsText.includes(converters_1.BINARY_TYPE);
            var hasTypes = /( |<)Types\./.test(methodsText);
            return {
                file: file,
                methods: "/* eslint-disable */\n" + (hasBinary ? "import type { ReadStream } from 'fs'\n" : '') + (hasBinary && !hasTypes ? '\n' : '') + (hasTypes
                    ? "import type * as Types from '" + file.map(function () { return ''; }).join('../') + "@types'\n\n"
                    : '') + "export type Methods = " + methodsText + "\n"
            };
        }
        else {
            return { file: file, methods: '' };
        }
    })
        .filter(function (file) { return file.methods; }))));
    var typesText = parameters.length + schemas.length
        ? __spreadArray(__spreadArray([], __read(parameters.map(function (p) { return ({
            name: p.name,
            description: null,
            text: typeof p.prop === 'string' ? p.prop : props2String_1.props2String([p.prop], '')
        }); }))), __read(schemas.map(function (s) { return ({
            name: s.name,
            description: s.value.description,
            text: props2String_1.value2String(s.value, '').replace(/\n {2}/g, '\n')
        }); }))).map(function (p) { return "\n" + props2String_1.description2Doc(p.description, '') + "export type " + p.name + " = " + p.text + "\n"; })
            .join('')
            .replace(/(\W)Types\./g, '$1')
        : null;
    return {
        openapi: openapi,
        baseURL: ((_d = (_c = openapi.servers) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.url) || '',
        types: typesText &&
            "/* eslint-disable */" + (typesText.includes(converters_1.BINARY_TYPE) ? "\nimport type { ReadStream } from 'fs'\n" : '') + typesText,
        files: files
    };
});
//# sourceMappingURL=buildV3.js.map