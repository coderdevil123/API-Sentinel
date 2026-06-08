export interface ScanSession {

  scanId: string;

  target: string;

  status:
    "PENDING"
    | "RUNNING"
    | "COMPLETED"
    | "FAILED";

  createdAt: string;

  completedAt?: string;

  discovery?: any;

  scanResult?: any;

  riskReport?: any;

  report?: any;
}