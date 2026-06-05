import {
  DetectorResult
} from "../interfaces/detector-result.interface";

import {
  ScanSummary
} from "../interfaces/scan-summary.interface";

import {
  BolaDetector
} from "../detectors/bola/bola.detector";

import {
  SqliDetector
}
from "../detectors/sqli/sqli.detector";

import {
  FindingManager
} from "../findings/finding-manager";

import {
  ReportBuilder
} from "./report-builder.service";

import {
  RateLimitDetector
}
from "../detectors/rate-limit/rate-limit.detector";

import { AuthDetector } from "../detectors/auth/auth.detector";

import { DataExposureDetector } from "../detectors/data-exposure/data-exposure.detector";

import { MassAssignmentDetector } from "../detectors/mass-assignment/mass-assignment.detector";

export class ScannerService {

  private bolaDetector =
    new BolaDetector();

  private sqliDetector =
    new SqliDetector();

    private authDetector =
    new AuthDetector();

    private dataExposureDetector =
    new DataExposureDetector();

    private massAssignmentDetector =
    new MassAssignmentDetector();

    private findingManager =
    new FindingManager();

    private reportBuilder =
    new ReportBuilder();

    private rateLimitDetector =
    new RateLimitDetector();

  async scanTarget(
    targetUrl: string
  ): Promise<ScanSummary> {

    const findings:
      DetectorResult[] = [];
    
    const authResult =
    await this.authDetector.scan(
        targetUrl
    );

    const dataExposureResult =
    await this.dataExposureDetector.scan(
        targetUrl
    );

    const massAssignmentResult =
    await this.massAssignmentDetector.scan(
        targetUrl
    );

    this.findingManager.add(
    authResult
    );

    this.findingManager.add(
    dataExposureResult
    );

    this.findingManager.add(
    massAssignmentResult
    );

    const bolaResult =
      await this.bolaDetector.scan(
        targetUrl
      );

    this.findingManager.add(
        bolaResult
    );

    const sqliResult =
        await this.sqliDetector.scan(
            targetUrl
        );

    this.findingManager.add(
        sqliResult
    );

    const rateLimitResult =
        await this.rateLimitDetector.scan(
            targetUrl
        );

    this.findingManager.add(
        rateLimitResult
    );

    return this.reportBuilder.build(
        this.findingManager.getAll()
    );
  }
}