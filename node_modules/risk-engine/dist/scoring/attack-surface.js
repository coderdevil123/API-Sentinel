"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttackSurfaceAnalyzer = void 0;
class AttackSurfaceAnalyzer {
    analyze(summary) {
        if (summary.totalFindings >= 6) {
            return "HIGH";
        }
        if (summary.totalFindings >= 3) {
            return "MEDIUM";
        }
        return "LOW";
    }
}
exports.AttackSurfaceAnalyzer = AttackSurfaceAnalyzer;
