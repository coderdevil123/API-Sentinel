import {
  DiscoveryService
}
from "@api-sentinel/discovery-engine";

import {
  ScannerService
}
from "./scanner.service";

export class ScanOrchestrator {

  private discovery =
    new DiscoveryService();

  private scanner =
    new ScannerService();

  async execute(
    targetUrl: string
  ) {

    const discoveryResult =
      await this.discovery.discover(
        targetUrl
      );

    console.log(
      "\nDISCOVERY COMPLETE"
    );

    console.log(
      discoveryResult.totalEndpoints
    );

    return await this.scanner
      .scanTarget(
        targetUrl
      );
  }
}