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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var https_1 = __importDefault(require("https"));
var http_1 = __importDefault(require("http"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var js_yaml_1 = __importDefault(require("js-yaml"));
var getText = function (url) {
    return new Promise(function (resolve) {
        ;
        (url.startsWith('https') ? https_1.default : http_1.default)
            .get(url, function (res) {
            var body = '';
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                body += chunk;
            });
            res.on('end', function () {
                resolve(body);
            });
        })
            .on('error', function (e) {
            console.log("Could not get: " + url + "\n", e);
        });
    });
};
var hasExternalRegExp = /"\$ref":"[^#].+?"/g;
var fetchExternalDocs = function (docs, inputDir) { return __awaiter(void 0, void 0, void 0, function () {
    var docList, fetchingUrls, fetchDocs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                docList = [];
                fetchingUrls = [];
                fetchDocs = function (d, input) {
                    var _a;
                    return Promise.all(((_a = JSON.stringify(d).match(hasExternalRegExp)) !== null && _a !== void 0 ? _a : []).map(function (ref) { return __awaiter(void 0, void 0, void 0, function () {
                        var _a, url, filePath, text, doc;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = __read(ref.match(/"\$ref":"(.+?)[#"]/), 2), url = _a[1];
                                    if (fetchingUrls.includes(url))
                                        return [2 /*return*/];
                                    fetchingUrls.push(url);
                                    filePath = url.startsWith('http') ? url : path_1.default.posix.join(path_1.default.dirname(input), url);
                                    return [4 /*yield*/, (filePath.startsWith('http')
                                            ? getText(filePath)
                                            : fs_1.default.promises.readFile(filePath, 'utf8'))];
                                case 1:
                                    text = _b.sent();
                                    doc = filePath.endsWith('.json') ? JSON.parse(text) : js_yaml_1.default.load(text);
                                    docList[fetchingUrls.indexOf(url)] = { url: url, doc: doc };
                                    return [4 /*yield*/, fetchDocs(doc, filePath)];
                                case 2:
                                    _b.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }));
                };
                return [4 /*yield*/, fetchDocs(docs, inputDir)];
            case 1:
                _a.sent();
                return [2 /*return*/, docList];
        }
    });
}); };
var getComponentInfo = function (docList, url, prop) {
    var data = docList.find(function (d) { return d.url === url; }).doc;
    var target = prop ? prop.split('/').reduce(function (prev, current) { return prev[current]; }, data) : data;
    if (target.name)
        return { type: 'parameters', data: target };
    return { type: 'schemas', data: target };
};
var genExternalTypeName = function (docList, url, prop) {
    return "External" + docList.findIndex(function (d) { return d.url === url; }) + (prop ? "_" + prop.split('/').pop() : '');
};
var resolveExternalDocs = function (docs, inputDir) { return __awaiter(void 0, void 0, void 0, function () {
    var externalDocs, componentsInfoList, replacedExternalDocs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchExternalDocs(docs, inputDir)];
            case 1:
                externalDocs = _a.sent();
                componentsInfoList = [];
                replacedExternalDocs = externalDocs.map(function (selfDoc) {
                    var _a;
                    var docsString = JSON.stringify(selfDoc.doc);
                    ((_a = docsString.match(/"\$ref":".+?"/g)) !== null && _a !== void 0 ? _a : []).forEach(function (refs) {
                        var targetText = refs.replace('"$ref":"', '').slice(0, -1);
                        var _a = __read(targetText.split('#'), 2), urlBase = _a[0], _b = _a[1], propBase = _b === void 0 ? '/' : _b;
                        var url = urlBase || selfDoc.url;
                        var prop = propBase.slice(1);
                        var info = getComponentInfo(externalDocs, url, prop);
                        var name = genExternalTypeName(externalDocs, url, prop);
                        docsString = docsString.replace(targetText, "#/components/" + info.type + "/" + name);
                        componentsInfoList.push({ url: url, prop: prop, name: name });
                    });
                    return { url: selfDoc.url, doc: JSON.parse(docsString) };
                });
                return [2 /*return*/, {
                        externalDocs: replacedExternalDocs,
                        components: componentsInfoList.reduce(function (prev, _a) {
                            var _b, _c;
                            var url = _a.url, prop = _a.prop, name = _a.name;
                            var info = getComponentInfo(replacedExternalDocs, url, prop);
                            return __assign(__assign({}, prev), (_b = {}, _b[info.type] = __assign(__assign({}, prev[info.type]), (_c = {}, _c[name] = info.data, _c)), _b));
                        }, {})
                    }];
        }
    });
}); };
exports.default = (function (docs, inputDir) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, externalDocs, components, docsString, resolved;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, resolveExternalDocs(docs, inputDir)];
            case 1:
                _a = _c.sent(), externalDocs = _a.externalDocs, components = _a.components;
                docsString = JSON.stringify(docs);
                ((_b = docsString.match(hasExternalRegExp)) !== null && _b !== void 0 ? _b : []).forEach(function (refs) {
                    var _a;
                    var targetText = refs.replace('"$ref":"', '').slice(0, -1);
                    var _b = __read(targetText.split('#'), 2), url = _b[0], _c = _b[1], propBase = _c === void 0 ? '/' : _c;
                    var prop = propBase.slice(1);
                    var info = getComponentInfo(externalDocs, url, prop);
                    components[info.type] = components[info.type] || {};
                    var name = genExternalTypeName(externalDocs, url, prop);
                    Object.assign(components[info.type], (_a = {}, _a[name] = info.data, _a));
                    docsString = docsString.replace(targetText, "#/components/" + info.type + "/" + name);
                });
                resolved = JSON.parse(docsString);
                resolved.components = resolved.components || {};
                Object.keys(components).forEach(function (key) {
                    resolved.components[key] = __assign(__assign({}, resolved.components[key]), components[key]);
                });
                return [2 /*return*/, resolved];
        }
    });
}); });
//# sourceMappingURL=resolveExternalRefs.js.map