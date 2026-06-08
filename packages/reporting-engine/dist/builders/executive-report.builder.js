"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecutiveReportBuilder = void 0;
const executive_template_1 = require("../templates/executive.template");
class ExecutiveReportBuilder {
    build(riskReport) {
        return {
            title: "Executive Security Report",
            generatedAt: new Date().toISOString(),
            content: (0, executive_template_1.executiveTemplate)(riskReport)
        };
    }
}
exports.ExecutiveReportBuilder = ExecutiveReportBuilder;
