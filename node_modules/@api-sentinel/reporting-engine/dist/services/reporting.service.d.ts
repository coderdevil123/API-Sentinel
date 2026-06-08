export declare class ReportingService {
    private executiveBuilder;
    private technicalBuilder;
    private auditBuilder;
    private jsonBuilder;
    generateExecutiveReport(riskReport: any): import("../interfaces/report.interface").Report;
    generateTechnicalReport(riskReport: any): import("../interfaces/report.interface").Report;
    generateAuditReport(riskReport: any): import("../interfaces/report.interface").Report;
    generateJsonReport(riskReport: any): string;
}
