import { ScanSummary } from "../interfaces/scan-summary.interface";
export declare class ExecutiveSummaryService {
    generate(summary: ScanSummary, score: number, rating: string): string;
}
