import {
  ExecutiveReportBuilder
}
from "../builders/executive-report.builder";

import {
  TechnicalReportBuilder
}
from "../builders/technical-report.builder";

import {
  AuditReportBuilder
}
from "../builders/audit-report.builder";

import {
  JsonReportBuilder
}
from "../builders/json-report.builder";

export class ReportingService {

  private executiveBuilder =
    new ExecutiveReportBuilder();

    private technicalBuilder =
    new TechnicalReportBuilder();

    private auditBuilder =
    new AuditReportBuilder();

    private jsonBuilder =
    new JsonReportBuilder();

  generateExecutiveReport(
    riskReport: any
  ) {

    return this.executiveBuilder
      .build(riskReport);
  }
  
  generateTechnicalReport(
    riskReport: any
    ) {
    return this.technicalBuilder
        .build(riskReport);
    }

    generateAuditReport(
    riskReport: any
    ) {
    return this.auditBuilder
        .build(riskReport);
    }

    generateJsonReport(
    riskReport: any
    ) {
    return this.jsonBuilder
        .build(riskReport);
    }
}