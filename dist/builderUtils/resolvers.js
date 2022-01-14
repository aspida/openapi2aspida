"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveReqRef = exports.resolveResRef = exports.resolveSchemasRef = exports.resolveParamsRef = void 0;
var converters_1 = require("./converters");
var resolveParamsRef = function (openapi, ref) {
    var target = openapi.components.parameters[converters_1.$ref2TypeName(ref).typeName];
    return converters_1.isRefObject(target) ? exports.resolveParamsRef(openapi, target.$ref) : target;
};
exports.resolveParamsRef = resolveParamsRef;
var resolveSchemasRef = function (openapi, ref) {
    var _a = converters_1.$ref2TypeName(ref), typeName = _a.typeName, propName = _a.propName;
    var target = openapi.components.schemas[typeName];
    target = !converters_1.isRefObject(target) && propName ? target.properties[propName] : target;
    return converters_1.isRefObject(target) ? exports.resolveSchemasRef(openapi, target.$ref) : target;
};
exports.resolveSchemasRef = resolveSchemasRef;
var resolveResRef = function (openapi, ref) {
    var target = openapi.components.responses[converters_1.$ref2TypeName(ref).typeName];
    return converters_1.isRefObject(target) ? exports.resolveResRef(openapi, target.$ref) : target;
};
exports.resolveResRef = resolveResRef;
var resolveReqRef = function (openapi, ref) {
    var target = openapi.components.requestBodies[converters_1.$ref2TypeName(ref).typeName];
    return converters_1.isRefObject(target) ? exports.resolveReqRef(openapi, target.$ref) : target;
};
exports.resolveReqRef = resolveReqRef;
//# sourceMappingURL=resolvers.js.map