"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportPipeline = void 0;
const reporting_orchestrator_service_1 = require("./reporting-orchestrator.service");
const export_service_1 = require("./export.service");
class ReportPipeline {
    constructor() {
        this.orchestrator = new reporting_orchestrator_service_1.ReportingOrchestrator();
        this.exporter = new export_service_1.ExportService();
    }
    async execute(type, riskReport) {
        const report = this.orchestrator.generate(type, riskReport);
        await this.exporter
            .exportAll(report);
        return report;
    }
}
exports.ReportPipeline = ReportPipeline;
