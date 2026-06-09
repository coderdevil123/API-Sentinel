export interface Session {

  scanId: string;

  target: string;

  status: string;

  createdAt: string;

  completedAt?: string;

  discovery?: any;

  scanResult?: any;

  riskReport?: any;

  report?: any;
}