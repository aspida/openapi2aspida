"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var converters_1 = require("./converters");
var resolvers_1 = require("./resolvers");
exports.default = (function (params, openapi, required) {
    return params &&
        Object.keys(params)
            .filter(function (defKey) {
            var target = params[defKey];
            return !(converters_1.isRefObject(target) ? resolvers_1.resolveParamsRef(openapi, target.$ref) : target).deprecated;
        })
            .map(function (defKey) {
            var _a, _b;
            var target = params[defKey];
            var prop;
            if (converters_1.isRefObject(target)) {
                prop = converters_1.$ref2Type(target.$ref);
            }
            else {
                var value = converters_1.schema2value(target.schema, required);
                if (!value)
                    return null;
                prop = {
                    name: converters_1.getPropertyName(target.name),
                    required: (_a = target.required) !== null && _a !== void 0 ? _a : required,
                    description: (_b = target.description) !== null && _b !== void 0 ? _b : null,
                    values: [value]
                };
            }
            return { name: converters_1.defKey2defName(defKey), prop: prop };
        })
            .filter(function (v) { return !!v; });
});
//# sourceMappingURL=parameters2Props.js.map