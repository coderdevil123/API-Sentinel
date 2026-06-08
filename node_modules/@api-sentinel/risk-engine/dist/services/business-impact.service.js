"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessImpactService = void 0;
class BusinessImpactService {
    determine(summary) {
        if (summary.critical > 0) {
            return `
Potential unauthorized access,
data leakage,
privilege escalation,
and compliance violations.
`;
        }
        if (summary.high > 0) {
            return `
Elevated risk of
business disruption
and sensitive information exposure.
`;
        }
        return `
Limited security impact detected.
`;
    }
}
exports.BusinessImpactService = BusinessImpactService;
