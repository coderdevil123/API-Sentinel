import { ScanSummary } from "../interfaces/scan-summary.interface";
import { RiskReport } from "../interfaces/risk-report.interface";
export declare class RiskService {
    private calculator;
    private summaryService;
    private impactService;
    generate(summary: ScanSummary): RiskReport;
}
