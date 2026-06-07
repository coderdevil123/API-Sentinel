import { Report }
from "../interfaces/report.interface";

export class TechnicalReportBuilder {

  build(
    riskReport: any
  ): Report {

    const findings =
      riskReport.findings || [];

    return {

      title:
        "Technical Security Report",

      generatedAt:
        new Date().toISOString(),

      content:
`
TECHNICAL FINDINGS
==================

${JSON.stringify(
  findings,
  null,
  2
)}
`
    };
  }
}