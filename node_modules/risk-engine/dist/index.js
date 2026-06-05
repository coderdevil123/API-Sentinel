"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const risk_orchestrator_service_1 = require("./services/risk-orchestrator.service");
const scanSummary = {
    totalFindings: 6,
    critical: 2,
    high: 4,
    medium: 0,
    low: 0,
    findings: []
};
const report = new risk_orchestrator_service_1.RiskOrchestrator()
    .execute(scanSummary);
console.log(JSON.stringify(report, null, 2));
