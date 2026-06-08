"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printDiscoveryReport = void 0;
const printDiscoveryReport = (result) => {
    console.log("\n");
    console.log("===== DISCOVERY REPORT =====");
    console.log(`Target: ${result.targetUrl}`);
    console.log(`Endpoints: ${result.totalEndpoints}`);
    console.log("\n");
    result.endpoints.forEach(endpoint => {
        console.log(`[${endpoint.method}] ${endpoint.path}`);
    });
    console.log("\n");
};
exports.printDiscoveryReport = printDiscoveryReport;
