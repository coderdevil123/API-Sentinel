"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthDetector = void 0;
const axios_1 = __importDefault(require("axios"));
const shared_types_1 = require("@api-sentinel/shared-types");
class AuthDetector {
    async scan(targetUrl) {
        try {
            const response = await axios_1.default.get(`${targetUrl}/api/v1/admin`, {
                validateStatus: () => true
            });
            if (response.status === 200) {
                return {
                    vulnerable: true,
                    severity: shared_types_1.Severity.CRITICAL,
                    category: shared_types_1.VulnerabilityCategory.BROKEN_AUTHENTICATION,
                    endpoint: "/api/v1/admin",
                    evidence: JSON.stringify(response.data),
                    recommendation: "Require authentication middleware"
                };
            }
            return {
                vulnerable: false,
                endpoint: "/api/v1/admin"
            };
        }
        catch {
            return {
                vulnerable: false,
                endpoint: "/api/v1/admin"
            };
        }
    }
}
exports.AuthDetector = AuthDetector;
