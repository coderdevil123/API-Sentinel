import { Report }
from "../interfaces/report.interface";

import {
  executiveTemplate
}
from "../templates/executive.template";

export class ExecutiveReportBuilder {

  build(
    riskReport: any
  ): Report {

    return {

      title:
        "Executive Security Report",

      generatedAt:
        new Date().toISOString(),

      content:
        executiveTemplate(
            riskReport
        )
    };
  }
}