import {
  ScanSummary
}
from "../interfaces/scan-summary.interface";

export class ExecutiveSummaryService {

  generate(
    summary: ScanSummary,
    score: number,
    rating: string
  ): string {

    return `
API-Sentinel identified
${summary.totalFindings}
security findings.

Critical Findings:
${summary.critical}

High Findings:
${summary.high}

Overall Risk:
${rating}

Risk Score:
${score}/100

Immediate remediation
is recommended.
`;
  }
}