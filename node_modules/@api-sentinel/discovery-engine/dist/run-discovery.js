"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discovery_service_1 = require("./services/discovery.service");
const discovery_report_1 = require("./utils/discovery-report");
async function main() {
    const service = new discovery_service_1.DiscoveryService();
    const result = await service.discover("http://localhost:5001");
    (0, discovery_report_1.printDiscoveryReport)(result);
}
main();
