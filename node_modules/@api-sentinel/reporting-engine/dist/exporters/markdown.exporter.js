"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownExporter = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
class MarkdownExporter {
    async export(report) {
        const exportDir = path_1.default.join(process.cwd(), "exports");
        await promises_1.default.mkdir(exportDir, { recursive: true });
        const markdown = `
# ${report.title}

Generated:
${report.generatedAt}

---

${report.content}
`;
        await promises_1.default.writeFile(path_1.default.join(exportDir, "report.md"), markdown);
        console.log("Markdown report exported");
    }
}
exports.MarkdownExporter = MarkdownExporter;
