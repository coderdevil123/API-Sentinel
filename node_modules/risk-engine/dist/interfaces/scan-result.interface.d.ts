export interface ScanResult {
    targetUrl: string;
    scanId: string;
    summary: {
        totalFindings: number;
        critical: number;
        high: number;
        medium: number;
        low: number;
    };
}
