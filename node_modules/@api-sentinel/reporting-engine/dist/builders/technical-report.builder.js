"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechnicalReportBuilder = void 0;
class TechnicalReportBuilder {
    build(riskReport) {
        const findings = riskReport.findings || [];
        return {
            title: "Technical Security Report",
            generatedAt: new Date().toISOString(),
            content: `
TECHNICAL FINDINGS
==================

${JSON.stringify(findings, null, 2)}
`
        };
    }
}
exports.TechnicalReportBuilder = TechnicalReportBuilder;
