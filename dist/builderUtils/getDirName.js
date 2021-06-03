"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var converters_1 = require("./converters");
exports.default = (function (text, params, required, replaceLeadingAtMark) {
    var _a;
    if (text === '*')
        return '_any';
    if (!/^{/.test(text)) {
        if (replaceLeadingAtMark !== '@' && text.startsWith('@'))
            return text.replace('@', replaceLeadingAtMark);
        return text;
    }
    var valName = text.slice(1, -1);
    var schemaVal = converters_1.schema2value((_a = params.find(function (p) { return p.in === 'path' && p.name === valName; })) === null || _a === void 0 ? void 0 : _a.schema, required);
    return "_" + converters_1.getPropertyName(valName) + (schemaVal && typeof schemaVal.value === 'string' ? "@" + schemaVal.value : '');
});
//# sourceMappingURL=getDirName.js.map