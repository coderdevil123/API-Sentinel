import { ScanSummary } from "../interfaces/scan-summary.interface";
export declare class RiskOrchestrator {
    private riskService;
    execute(summary: ScanSummary): import("../interfaces/risk-report.interface").RiskReport;
}
