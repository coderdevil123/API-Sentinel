import {
  ReportingOrchestrator
}
from "./reporting-orchestrator.service";

import {
  ExportService
}
from "./export.service";

export class ReportPipeline {

  private orchestrator =
    new ReportingOrchestrator();

  private exporter =
    new ExportService();

  async execute(
    type: string,
    riskReport: any
  ) {

    const report =
      this.orchestrator.generate(
        type,
        riskReport
      );

    await this.exporter
      .exportAll(
        report
      );

    return report;
  }
}