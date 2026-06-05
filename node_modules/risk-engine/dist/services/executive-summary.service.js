"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecutiveSummaryService = void 0;
class ExecutiveSummaryService {
    generate(summary, score, rating) {
        return `
API-Sentinel identified
${summary.totalFindings}
security findings.

Critical Findings:
${summary.critical}

High Findings:
${summary.high}

Overall Risk:
${rating}

Risk Score:
${score}/100

Immediate remediation
is recommended.
`;
    }
}
exports.ExecutiveSummaryService = ExecutiveSummaryService;
