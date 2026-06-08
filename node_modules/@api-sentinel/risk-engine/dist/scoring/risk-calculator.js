"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskCalculator = void 0;
const severity_score_1 = require("./severity-score");
class RiskCalculator {
    calculate(summary) {
        let score = 0;
        score +=
            summary.critical *
                severity_score_1.SeverityScore.CRITICAL;
        score +=
            summary.high *
                severity_score_1.SeverityScore.HIGH;
        score +=
            summary.medium *
                severity_score_1.SeverityScore.MEDIUM;
        score +=
            summary.low *
                severity_score_1.SeverityScore.LOW;
        return Math.min(score, 100);
    }
}
exports.RiskCalculator = RiskCalculator;
