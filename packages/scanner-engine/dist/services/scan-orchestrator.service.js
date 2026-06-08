"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScanOrchestrator = void 0;
const discovery_engine_1 = require("@api-sentinel/discovery-engine");
const scanner_service_1 = require("./scanner.service");
class ScanOrchestrator {
    discovery = new discovery_engine_1.DiscoveryService();
    scanner = new scanner_service_1.ScannerService();
    async execute(targetUrl) {
        const discoveryResult = await this.discovery.discover(targetUrl);
        console.log("\nDISCOVERY COMPLETE");
        console.log(discoveryResult.totalEndpoints);
        return await this.scanner
            .scanTarget(targetUrl);
    }
}
exports.ScanOrchestrator = ScanOrchestrator;
