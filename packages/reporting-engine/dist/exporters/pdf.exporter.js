"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfExporter = void 0;
const pdfkit_1 = __importDefault(require("pdfkit"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class PdfExporter {
    async export(report) {
        const doc = new pdfkit_1.default();
        const exportDir = path_1.default.join(process.cwd(), "exports");
        if (!fs_1.default.existsSync(exportDir)) {
            fs_1.default.mkdirSync(exportDir, { recursive: true });
        }
        doc.pipe(fs_1.default.createWriteStream(path_1.default.join(exportDir, "report.pdf")));
        doc.fontSize(22);
        doc.text(report.title);
        doc.moveDown();
        doc.fontSize(12);
        doc.text(`Generated: ${report.generatedAt}`);
        doc.moveDown();
        doc.text(report.content);
        console.log("PDF report exported");
    }
}
exports.PdfExporter = PdfExporter;
