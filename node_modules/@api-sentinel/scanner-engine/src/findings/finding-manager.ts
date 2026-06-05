import {
  DetectorResult
} from "../interfaces/detector-result.interface";

export class FindingManager {

  private findings:
    DetectorResult[] = [];

  add(
    finding: DetectorResult
  ) {

    if (finding.vulnerable) {
      this.findings.push(
        finding
      );
    }

  }

  getAll() {
    return this.findings;
  }

  count() {
    return this.findings.length;
  }
}