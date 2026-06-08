import {
  SessionService
}
from "./session.service";

import {
  DiscoveryService
}
from "@api-sentinel/discovery-engine";

import {
  ScannerService
}
from "@api-sentinel/scanner-engine";

import {
  RiskService
}
from "@api-sentinel/risk-engine";

import {
  ReportingService
}
from "@api-sentinel/reporting-engine";

export class OrchestrationService {

  private sessionService =
    new SessionService();

  private scannerService =
    new ScannerService();

  private discoveryService =
    new DiscoveryService();

  private riskService =
    new RiskService();

  private reportingService =
    new ReportingService();

  async execute(
    scanId: string
  ) {

    this.sessionService
      .updateStatus(
        scanId,
        "RUNNING"
      );

    const discoveryResult =
      await this.discoveryService
        .discover(
          "http://localhost:5001"
        );

    console.log(
      "DISCOVERY COMPLETE"
    );

    console.log(
      discoveryResult
        .totalEndpoints
    );

    this.sessionService
    .saveArtifacts(
      scanId,
      {
        discovery:
          discoveryResult
      }
    );

    const scanResult =
      await this.scannerService
        .scanTarget(
          "http://localhost:5001"
        );

    console.log(
      "SCANNER COMPLETE"
    );

    console.log(
      JSON.stringify(
        scanResult,
        null,
        2
      )
    );

    this.sessionService
    .saveArtifacts(
      scanId,
      {
        scanResult
      }
    );

    const riskReport =
      this.riskService
        .generate(
          scanResult
        );

    console.log(
      "RISK COMPLETE"
    );

    console.log(
      JSON.stringify(
        riskReport,
        null,
        2
      )
    );

    this.sessionService
    .saveArtifacts(
      scanId,
      {
        riskReport
      }
    );

    const executiveReport =
      this.reportingService
        .generateExecutiveReport(
          riskReport
        );

    console.log(
      "REPORTING COMPLETE"
    );

    console.log(
      JSON.stringify(
        executiveReport,
        null,
        2
      )
    );

    this.sessionService
    .saveArtifacts(
      scanId,
      {
        report:
          executiveReport
      }
    );

    this.sessionService
      .updateStatus(
        scanId,
        "COMPLETED"
      );
  }
}