"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scan_orchestrator_service_1 = require("./services/scan-orchestrator.service");
(async () => {
    const orchestrator = new scan_orchestrator_service_1.ScanOrchestrator();
    const report = await orchestrator.execute("http://localhost:5001");
    console.log(JSON.stringify(report, null, 2));
})();
