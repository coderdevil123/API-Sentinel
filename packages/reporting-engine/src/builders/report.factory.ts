import {
  ExecutiveReportBuilder
}
from "./executive-report.builder";

import {
  TechnicalReportBuilder
}
from "./technical-report.builder";

import {
  AuditReportBuilder
}
from "./audit-report.builder";

export class ReportFactory {

  static create(
    type: string
  ) {

    switch(type) {

      case "executive":
        return new ExecutiveReportBuilder();

      case "technical":
        return new TechnicalReportBuilder();

      case "audit":
        return new AuditReportBuilder();

      default:
        throw new Error(
          "Invalid report type"
        );
    }
  }
}