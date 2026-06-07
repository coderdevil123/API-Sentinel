import {
  ReportFactory
}
from "../builders/report.factory";

export class ReportingOrchestrator {

  generate(
    type: string,
    riskReport: any
  ) {

    const builder =
      ReportFactory.create(
        type
      );

    return builder.build(
      riskReport
    );
  }
}