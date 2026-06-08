import { DetectorResult } from "../interfaces/detector-result.interface";
import { ScanSummary } from "../interfaces/scan-summary.interface";
export declare class ReportBuilder {
    build(findings: DetectorResult[]): ScanSummary;
}
