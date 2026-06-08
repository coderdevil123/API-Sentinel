import { ScanSummary } from "../interfaces/scan-summary.interface";
export declare class ScannerService {
    private bolaDetector;
    private sqliDetector;
    private authDetector;
    private dataExposureDetector;
    private massAssignmentDetector;
    private findingManager;
    private reportBuilder;
    private rateLimitDetector;
    scanTarget(targetUrl: string): Promise<ScanSummary>;
}
