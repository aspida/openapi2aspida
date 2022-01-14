"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var commands_1 = require("aspida/dist/commands");
exports.default = (function (_a) {
    var config = _a.config, types = _a.types, files = _a.files;
    if (types) {
        fs_1.default.mkdirSync(config.input + "/@types");
        fs_1.default.writeFileSync(config.input + "/@types/index.ts", types, 'utf8');
    }
    files.forEach(function (p) {
        var fileName = p.file.pop();
        p.file.forEach(function (_d, i, dirList) {
            var dirPath = config.input + "/" + dirList.slice(0, i + 1).join('/');
            if (!fs_1.default.existsSync(dirPath)) {
                fs_1.default.mkdirSync(dirPath);
            }
        });
        fs_1.default.writeFileSync(config.input + "/" + p.file.join('/') + "/" + fileName + ".ts", p.methods, 'utf8');
    });
    commands_1.build(config);
});
//# sourceMappingURL=writeRouteFile.js.map