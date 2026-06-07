import {
  ReportingService
}
from "./services/reporting.service";

import {
  ExportService
}
from "./services/export.service";

const reporting =
  new ReportingService();

const riskReport = {

    target: "http://localhost:5001",
  riskScore: 100,

  overallRisk:
    "CRITICAL",

  generatedAt:
    new Date()
      .toISOString(),

  businessImpact:
    "Potential data leakage",

  executiveSummary:
    "Immediate remediation required",

  findings: [

    {
      category:
        "BOLA",

      severity:
        "CRITICAL"
    },

    {
      category:
        "SQL_INJECTION",

      severity:
        "HIGH"
    }
  ]
};

console.log(
  reporting.generateTechnicalReport(
    riskReport
  )
);

console.log(
  reporting.generateAuditReport(
    riskReport
  )
);

const report =
  reporting.generateExecutiveReport(
    riskReport
  );

console.log(report);

const exporter =
  new ExportService();

(async () => {

  await exporter.exportAll(
    report
  );

})();
