export declare class ReportPipeline {
    private orchestrator;
    private exporter;
    execute(type: string, riskReport: any): Promise<import("../interfaces/report.interface").Report>;
}
