export declare class ScanOrchestrator {
    private discovery;
    private scanner;
    execute(targetUrl: string): Promise<import("../interfaces/scan-summary.interface").ScanSummary>;
}
