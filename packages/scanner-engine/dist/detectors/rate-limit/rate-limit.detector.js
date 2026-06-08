"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimitDetector = void 0;
const axios_1 = __importDefault(require("axios"));
const shared_types_1 = require("@api-sentinel/shared-types");
class RateLimitDetector {
    async scan(targetUrl) {
        let blocked = false;
        for (let i = 0; i < 25; i++) {
            const response = await axios_1.default.get(`${targetUrl}/api/v1/health`, {
                validateStatus: () => true
            });
            if (response.status === 429) {
                blocked = true;
                break;
            }
        }
        if (!blocked) {
            return {
                vulnerable: true,
                severity: shared_types_1.Severity.HIGH,
                category: shared_types_1.VulnerabilityCategory.RATE_LIMITING,
                endpoint: "/api/v1/health",
                evidence: "25 requests sent without rate limit",
                recommendation: "Implement API rate limiting"
            };
        }
        return {
            vulnerable: false,
            endpoint: "/api/v1/health"
        };
    }
}
exports.RateLimitDetector = RateLimitDetector;
