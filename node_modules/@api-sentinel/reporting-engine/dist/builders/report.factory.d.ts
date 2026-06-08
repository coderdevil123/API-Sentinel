import { ExecutiveReportBuilder } from "./executive-report.builder";
import { TechnicalReportBuilder } from "./technical-report.builder";
import { AuditReportBuilder } from "./audit-report.builder";
export declare class ReportFactory {
    static create(type: string): ExecutiveReportBuilder | TechnicalReportBuilder | AuditReportBuilder;
}
