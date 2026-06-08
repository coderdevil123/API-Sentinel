"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportService = void 0;
const json_exporter_1 = require("../exporters/json.exporter");
const text_exporter_1 = require("../exporters/text.exporter");
const markdown_exporter_1 = require("../exporters/markdown.exporter");
const pdf_exporter_1 = require("../exporters/pdf.exporter");
class ExportService {
    constructor() {
        this.json = new json_exporter_1.JsonExporter();
        this.text = new text_exporter_1.TextExporter();
        this.markdown = new markdown_exporter_1.MarkdownExporter();
        this.pdf = new pdf_exporter_1.PdfExporter();
    }
    async exportAll(report) {
        await this.json.export(report);
        await this.text.export(report);
        await this.markdown.export(report);
        await this.pdf.export(report);
    }
}
exports.ExportService = ExportService;
