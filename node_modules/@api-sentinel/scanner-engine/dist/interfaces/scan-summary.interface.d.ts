import { DetectorResult } from "./detector-result.interface";
export interface ScanSummary {
    totalFindings: number;
    critical: number;
    high: number;
    medium: number;
    low: number;
    findings: DetectorResult[];
}
