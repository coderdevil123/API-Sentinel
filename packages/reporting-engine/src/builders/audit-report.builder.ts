import { Report }
from "../interfaces/report.interface";

export class AuditReportBuilder {

  build(
    riskReport: any
  ): Report {

    return {

      title:
        "Audit Report",

      generatedAt:
        new Date().toISOString(),

      content:
`
AUDIT SUMMARY
=============

Risk Score:
${riskReport.riskScore}

Overall Risk:
${riskReport.overallRisk}

Generated:
${riskReport.generatedAt}
`
    };
  }
}