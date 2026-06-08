"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportFactory = void 0;
const executive_report_builder_1 = require("./executive-report.builder");
const technical_report_builder_1 = require("./technical-report.builder");
const audit_report_builder_1 = require("./audit-report.builder");
class ReportFactory {
    static create(type) {
        switch (type) {
            case "executive":
                return new executive_report_builder_1.ExecutiveReportBuilder();
            case "technical":
                return new technical_report_builder_1.TechnicalReportBuilder();
            case "audit":
                return new audit_report_builder_1.AuditReportBuilder();
            default:
                throw new Error("Invalid report type");
        }
    }
}
exports.ReportFactory = ReportFactory;
