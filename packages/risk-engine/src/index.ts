import {
  RiskOrchestrator
}
from "./services/risk-orchestrator.service";

const report =
  new RiskOrchestrator()
    .execute({

      totalFindings: 6,

      critical: 2,

      high: 4,

      medium: 0,

      low: 0,

      findings: []
    });

console.log(
  JSON.stringify(
    report,
    null,
    2
  )
);