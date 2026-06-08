"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BolaDetector = void 0;
const axios_1 = __importDefault(require("axios"));
const shared_types_1 = require("@api-sentinel/shared-types");
const evidence_builder_1 = require("../../evidence/evidence-builder");
class BolaDetector {
    async scan(targetUrl) {
        try {
            const response = await axios_1.default.get(`${targetUrl}/api/v1/users/2`);
            if (response.status === 200) {
                return {
                    vulnerable: true,
                    severity: shared_types_1.Severity.CRITICAL,
                    category: shared_types_1.VulnerabilityCategory.BOLA,
                    endpoint: "/api/v1/users/2",
                    evidence: evidence_builder_1.EvidenceBuilder.build("GET /api/v1/users/2", JSON.stringify(response.data)),
                    recommendation: "Implement object ownership checks"
                };
            }
            return {
                vulnerable: false,
                endpoint: "/api/v1/users/2"
            };
        }
        catch {
            return {
                vulnerable: false,
                endpoint: "/api/v1/users/2"
            };
        }
    }
}
exports.BolaDetector = BolaDetector;
