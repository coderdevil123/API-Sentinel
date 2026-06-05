import {
  RiskService
} from "./risk.service";

import {
  ScanSummary
}
from "../interfaces/scan-summary.interface";

export class RiskOrchestrator {

  private riskService =
    new RiskService();

  execute(
    summary: ScanSummary
  ) {

    return this.riskService
      .generate(summary);
  }
}