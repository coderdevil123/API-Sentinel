"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reporting_service_1 = require("./services/reporting.service");
const export_service_1 = require("./services/export.service");
const reporting = new reporting_service_1.ReportingService();
const riskReport = {
    target: "http://localhost:5001",
    riskScore: 100,
    overallRisk: "CRITICAL",
    generatedAt: new Date()
        .toISOString(),
    businessImpact: "Potential data leakage",
    executiveSummary: "Immediate remediation required",
    findings: [
        {
            category: "BOLA",
            severity: "CRITICAL"
        },
        {
            category: "SQL_INJECTION",
            severity: "HIGH"
        }
    ]
};
console.log(reporting.generateTechnicalReport(riskReport));
console.log(reporting.generateAuditReport(riskReport));
const report = reporting.generateExecutiveReport(riskReport);
console.log(report);
const exporter = new export_service_1.ExportService();
(async () => {
    await exporter.exportAll(report);
})();
