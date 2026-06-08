"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonReportBuilder = void 0;
class JsonReportBuilder {
    build(report) {
        return JSON.stringify(report, null, 2);
    }
}
exports.JsonReportBuilder = JsonReportBuilder;
