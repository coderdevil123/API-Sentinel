import {
  ScanOrchestrator
}
from "./services/scan-orchestrator.service";

(async () => {

  const orchestrator =
    new ScanOrchestrator();

  const report =
    await orchestrator.execute(
      "http://localhost:5001"
    );

  console.log(
    JSON.stringify(
      report,
      null,
      2
    )
  );

})();