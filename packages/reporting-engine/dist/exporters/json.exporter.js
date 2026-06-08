"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonExporter = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
class JsonExporter {
    async export(report) {
        const exportDir = path_1.default.join(process.cwd(), "exports");
        await promises_1.default.mkdir(exportDir, { recursive: true });
        await promises_1.default.writeFile(path_1.default.join(exportDir, "report.json"), JSON.stringify(report, null, 2));
        console.log("JSON report exported");
    }
}
exports.JsonExporter = JsonExporter;
