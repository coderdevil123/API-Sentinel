"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskRating = void 0;
class RiskRating {
    static determine(score) {
        if (score >= 90) {
            return "CRITICAL";
        }
        if (score >= 70) {
            return "HIGH";
        }
        if (score >= 40) {
            return "MEDIUM";
        }
        return "LOW";
    }
}
exports.RiskRating = RiskRating;
