import {
  Severity
} from "@api-sentinel/shared-types";

import {
  DetectorResult
} from "../interfaces/detector-result.interface";

import {
  ScanSummary
} from "../interfaces/scan-summary.interface";

export class ReportBuilder {

  build(
    findings:
      DetectorResult[]
  ): ScanSummary {

    return {

      totalFindings:
        findings.length,

      critical:
        findings.filter(
          f =>
            f.severity ===
            Severity.CRITICAL
        ).length,

      high:
        findings.filter(
          f =>
            f.severity ===
            Severity.HIGH
        ).length,

      medium:
        findings.filter(
          f =>
            f.severity ===
            Severity.MEDIUM
        ).length,

      low:
        findings.filter(
          f =>
            f.severity ===
            Severity.LOW
        ).length,

      findings
    };
  }
}