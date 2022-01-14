"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.props2String = exports.description2Doc = exports.value2String = void 0;
var array2String = function (val, indent) {
    var hasMulti = (val.isEnum || val.hasOf) && Array.isArray(val.value) && val.value.length;
    return "" + (hasMulti ? '(' : '') + exports.value2String(val, indent) + (hasMulti ? ')' : '') + "[]";
};
var value2String = function (v, indent) {
    return "" + (v.hasOf
        ? values2String(v.value, v.hasOf, indent)
        : v.isArray
            ? array2String(v.value, indent)
            : v.isEnum
                ? v.value.join(' | ')
                : Array.isArray(v.value)
                    ? exports.props2String(v.value, "  " + indent)
                    : v.value) + (v.nullable ? ' | null' : '');
};
exports.value2String = value2String;
var values2String = function (values, hasOf, indent) {
    return "" + (hasOf === 'anyOf' ? 'Partial<' : '') + values
        .map(function (a) { return exports.value2String(a, indent); })
        .join(hasOf === 'oneOf' ? ' | ' : ' & ') + (hasOf === 'anyOf' ? '>' : '');
};
var isMultiLine = function (values) { return values.find(function (v) { return !v.isEnum && Array.isArray(v.value); }); };
var description2Doc = function (desc, indent) {
    if (!desc)
        return '';
    var rows = desc.trim().split('\n');
    return rows.length === 1
        ? indent + "/** " + rows[0] + " */\n"
        : indent + "/**\n" + indent + " * " + rows.join("\n" + indent + " * ") + "\n" + indent + " */\n";
};
exports.description2Doc = description2Doc;
var props2String = function (props, indent) {
    return "{\n" + props
        .map(function (p, i) {
        return exports.description2Doc(p.description, "  " + indent) + "  " + indent + p.name + (p.required ? '' : '?') + ": " + values2String(p.values, undefined, indent) + (props.length - 1 === i || isMultiLine(p.values) || isMultiLine(props[i + 1].values)
            ? '\n'
            : '');
    })
        .join('\n') + indent + "}";
};
exports.props2String = props2String;
//# sourceMappingURL=props2String.js.map