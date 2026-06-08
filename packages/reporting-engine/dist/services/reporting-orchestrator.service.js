"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportingOrchestrator = void 0;
const report_factory_1 = require("../builders/report.factory");
class ReportingOrchestrator {
    generate(type, riskReport) {
        const builder = report_factory_1.ReportFactory.create(type);
        return builder.build(riskReport);
    }
}
exports.ReportingOrchestrator = ReportingOrchestrator;
