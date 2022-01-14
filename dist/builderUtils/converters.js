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
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema2value = exports.BINARY_TYPE = exports.getPropertyName = exports.isObjectSchema = exports.isRefObject = exports.$ref2Type = exports.$ref2TypeName = exports.defKey2defName = void 0;
var defKey2defName = function (key) {
    return "" + key[0].replace(/^([^a-zA-Z$_])$/, '$$$1').toUpperCase() + key
        .slice(1)
        .replace(/[^a-zA-Z0-9$_]/g, '_');
};
exports.defKey2defName = defKey2defName;
var $ref2TypeName = function (ref) {
    var _a = __read(ref.split('/'), 6), typeName = _a[3], propName = _a[5];
    return { typeName: typeName, propName: propName || null };
};
exports.$ref2TypeName = $ref2TypeName;
// $ref2Type: replace /Array$/ for Swagger 2.0
var $ref2Type = function (ref) {
    var _a = exports.$ref2TypeName(ref), typeName = _a.typeName, propName = _a.propName;
    return ("Types." + exports.defKey2defName(typeName) + (propName ? "['" + propName + "']" : '')).replace(/Array$/, '[]');
};
exports.$ref2Type = $ref2Type;
var isRefObject = function (params) { return '$ref' in params; };
exports.isRefObject = isRefObject;
var isArraySchema = function (schema) {
    return schema.type === 'array';
};
var isObjectSchema = function (schema) { return !exports.isRefObject(schema) && schema.type !== 'array'; };
exports.isObjectSchema = isObjectSchema;
var getPropertyName = function (name) {
    return /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name) ? name : "'" + name + "'";
};
exports.getPropertyName = getPropertyName;
var of2Values = function (obj, required) {
    var values = (obj.oneOf || obj.allOf || obj.anyOf || [])
        .map(function (p) { return exports.schema2value(p, required); })
        .filter(function (v) { return v; });
    return values.length ? values : null;
};
var object2value = function (obj, required) {
    var _a;
    var properties = (_a = obj.properties) !== null && _a !== void 0 ? _a : {};
    var value = Object.keys(properties)
        .filter(function (name) {
        var target = properties[name];
        return exports.isRefObject(target) || !target.deprecated;
    })
        .map(function (name) {
        var _a, _b;
        var val = exports.schema2value(properties[name], required);
        if (!val)
            return null;
        return {
            name: exports.getPropertyName(name),
            required: (_b = (_a = obj.required) === null || _a === void 0 ? void 0 : _a.includes(name)) !== null && _b !== void 0 ? _b : required,
            description: val.description,
            values: [val]
        };
    })
        .filter(function (v) { return v; });
    var additionalProps = obj.additionalProperties;
    if (additionalProps) {
        var val = additionalProps === true
            ? {
                isArray: false,
                isEnum: false,
                nullable: false,
                description: null,
                value: 'any'
            }
            : exports.schema2value(additionalProps, required);
        if (val)
            value.push({
                name: '[key: string]',
                required: required,
                description: val.description,
                values: [val]
            });
    }
    return value;
};
exports.BINARY_TYPE = 'File | ReadStream';
var schema2value = function (schema, required, isResponse) {
    var _a, _b;
    if (!schema)
        return null;
    var isArray = false;
    var isEnum = false;
    var nullable = false;
    var hasOf;
    var value = null;
    var description = null;
    if (exports.isRefObject(schema)) {
        value = exports.$ref2Type(schema.$ref);
    }
    else {
        nullable = !!schema.nullable;
        description = (_a = schema.description) !== null && _a !== void 0 ? _a : null;
        if (schema.oneOf || schema.allOf || schema.anyOf) {
            hasOf = schema.oneOf ? 'oneOf' : schema.allOf ? 'allOf' : 'anyOf';
            value = of2Values(schema, required);
        }
        else if (schema.enum) {
            isEnum = true;
            value = schema.type === 'string' ? schema.enum.map(function (e) { return "'" + e + "'"; }) : schema.enum;
        }
        else if (isArraySchema(schema)) {
            isArray = true;
            value = exports.schema2value(schema.items, required);
        }
        else if (schema.properties || schema.additionalProperties) {
            value = object2value(schema, required);
        }
        else if (schema.format === 'binary') {
            value = isResponse ? 'Blob' : exports.BINARY_TYPE;
        }
        else if (schema.type !== 'object') {
            value = {
                integer: 'number',
                number: 'number',
                null: 'null',
                string: 'string',
                boolean: 'boolean'
            }[(_b = schema.type) !== null && _b !== void 0 ? _b : 'string'];
        }
    }
    return value ? { isArray: isArray, isEnum: isEnum, nullable: nullable, hasOf: hasOf, value: value, description: description } : null;
};
exports.schema2value = schema2value;
//# sourceMappingURL=converters.js.map