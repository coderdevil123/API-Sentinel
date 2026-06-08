export interface ScanSession {
    scanId: string;
    target: string;
    startedAt: string;
    completedAt: string;
    durationMs: number;
    findingsCount: number;
}
