import { Finding } from "../findings/finding.interface";

export interface Scan {
  id: string;

  targetUrl: string;

  startedAt: string;

  completedAt?: string;

  findings: Finding[];
}