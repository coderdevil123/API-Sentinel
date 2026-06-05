import {
  ScanSummary
}
from "../interfaces/scan-summary.interface";

import {
  SeverityScore
}
from "./severity-score";

export class RiskCalculator {

  calculate(
    summary: ScanSummary
  ): number {

    let score = 0;

    score +=
      summary.critical *
      SeverityScore.CRITICAL;

    score +=
      summary.high *
      SeverityScore.HIGH;

    score +=
      summary.medium *
      SeverityScore.MEDIUM;

    score +=
      summary.low *
      SeverityScore.LOW;

    return Math.min(
      score,
      100
    );
  }
}