"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportingService = void 0;
const executive_report_builder_1 = require("../builders/executive-report.builder");
const technical_report_builder_1 = require("../builders/technical-report.builder");
const audit_report_builder_1 = require("../builders/audit-report.builder");
const json_report_builder_1 = require("../builders/json-report.builder");
class ReportingService {
    constructor() {
        this.executiveBuilder = new executive_report_builder_1.ExecutiveReportBuilder();
        this.technicalBuilder = new technical_report_builder_1.TechnicalReportBuilder();
        this.auditBuilder = new audit_report_builder_1.AuditReportBuilder();
        this.jsonBuilder = new json_report_builder_1.JsonReportBuilder();
    }
    generateExecutiveReport(riskReport) {
        return this.executiveBuilder
            .build(riskReport);
    }
    generateTechnicalReport(riskReport) {
        return this.technicalBuilder
            .build(riskReport);
    }
    generateAuditReport(riskReport) {
        return this.auditBuilder
            .build(riskReport);
    }
    generateJsonReport(riskReport) {
        return this.jsonBuilder
            .build(riskReport);
    }
}
exports.ReportingService = ReportingService;
