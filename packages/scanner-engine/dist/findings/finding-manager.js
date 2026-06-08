"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindingManager = void 0;
class FindingManager {
    findings = [];
    add(finding) {
        if (finding.vulnerable) {
            this.findings.push(finding);
        }
    }
    getAll() {
        return this.findings;
    }
    count() {
        return this.findings.length;
    }
}
exports.FindingManager = FindingManager;
