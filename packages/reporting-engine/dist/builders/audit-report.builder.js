"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditReportBuilder = void 0;
class AuditReportBuilder {
    build(riskReport) {
        return {
            title: "Audit Report",
            generatedAt: new Date().toISOString(),
            content: `
AUDIT SUMMARY
=============

Risk Score:
${riskReport.riskScore}

Overall Risk:
${riskReport.overallRisk}

Generated:
${riskReport.generatedAt}
`
        };
    }
}
exports.AuditReportBuilder = AuditReportBuilder;
