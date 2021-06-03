"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var minimist_1 = __importDefault(require("minimist"));
var _1 = __importDefault(require("."));
var run = function (args) {
    var argv = minimist_1.default(args, {
        string: ['version', 'input', 'config'],
        alias: { v: 'version', i: 'input', c: 'config' }
    });
    argv.version !== undefined
        ? console.log("v" + require('../package.json').version)
        : argv.input
            ? _1.default({ outputEachDir: true, openapi: { inputFile: argv.input } })
            : _1.default(argv.config);
};
exports.run = run;
//# sourceMappingURL=cli.js.map