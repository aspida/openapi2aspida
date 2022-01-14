"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var commands_1 = require("aspida/dist/commands");
var defaultRequired = {
    schema: true,
    parameter: true,
    query: true,
    status: true,
    resBody: true,
    resHeader: true,
    reqBody: true,
    reqFormat: true,
    method: true
};
var createConfig = function (config) {
    var _a, _b;
    var openapi = config.openapi;
    return {
        input: openapi.inputFile,
        output: config.input,
        trailingSlash: config.trailingSlash,
        outputEachDir: config.outputEachDir,
        outputMode: config.outputMode,
        isYaml: (_a = openapi.yaml) !== null && _a !== void 0 ? _a : !openapi.inputFile.endsWith('.json'),
        requiredConfig: __assign(__assign({}, defaultRequired), openapi.requiredConfig),
        replaceLeadingAtMark: (_b = openapi.replaceLeadingAtMark) !== null && _b !== void 0 ? _b : '@'
    };
};
exports.default = (function (config) {
    return commands_1.getConfigs(config)
        .filter(function (c) { return c.openapi; })
        .map(function (c) { return createConfig(c); });
});
//# sourceMappingURL=getConfig.js.map