"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskOrchestrator = void 0;
const risk_service_1 = require("./risk.service");
class RiskOrchestrator {
    constructor() {
        this.riskService = new risk_service_1.RiskService();
    }
    execute(summary) {
        return this.riskService
            .generate(summary);
    }
}
exports.RiskOrchestrator = RiskOrchestrator;
