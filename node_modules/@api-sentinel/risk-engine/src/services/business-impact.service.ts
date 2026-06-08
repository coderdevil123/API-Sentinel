import {
  ScanSummary
}
from "../interfaces/scan-summary.interface";

export class BusinessImpactService {

  determine(
    summary: ScanSummary
  ): string {

    if (
      summary.critical > 0
    ) {

      return `
Potential unauthorized access,
data leakage,
privilege escalation,
and compliance violations.
`;
    }

    if (
      summary.high > 0
    ) {

      return `
Elevated risk of
business disruption
and sensitive information exposure.
`;
    }

    return `
Limited security impact detected.
`;
  }
}