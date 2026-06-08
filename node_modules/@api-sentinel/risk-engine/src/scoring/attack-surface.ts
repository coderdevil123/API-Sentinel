import {
  ScanSummary
}
from "../interfaces/scan-summary.interface";

export class AttackSurfaceAnalyzer {

  analyze(
    summary: ScanSummary
  ): string {

    if (
      summary.totalFindings >= 6
    ) {
      return "HIGH";
    }

    if (
      summary.totalFindings >= 3
    ) {
      return "MEDIUM";
    }

    return "LOW";
  }
}