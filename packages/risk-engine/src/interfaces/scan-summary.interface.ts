export interface ScanSummary {

  totalFindings: number;

  critical: number;

  high: number;

  medium: number;

  low: number;

  findings: unknown[];
}