"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportBuilder = void 0;
const shared_types_1 = require("@api-sentinel/shared-types");
class ReportBuilder {
    build(findings) {
        return {
            totalFindings: findings.length,
            critical: findings.filter(f => f.severity ===
                shared_types_1.Severity.CRITICAL).length,
            high: findings.filter(f => f.severity ===
                shared_types_1.Severity.HIGH).length,
            medium: findings.filter(f => f.severity ===
                shared_types_1.Severity.MEDIUM).length,
            low: findings.filter(f => f.severity ===
                shared_types_1.Severity.LOW).length,
            findings
        };
    }
}
exports.ReportBuilder = ReportBuilder;
