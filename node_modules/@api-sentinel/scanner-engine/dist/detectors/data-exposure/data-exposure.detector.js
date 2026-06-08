"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataExposureDetector = void 0;
const axios_1 = __importDefault(require("axios"));
const shared_types_1 = require("@api-sentinel/shared-types");
class DataExposureDetector {
    async scan(targetUrl) {
        try {
            const response = await axios_1.default.get(`${targetUrl}/api/v1/users/1`);
            const body = JSON.stringify(response.data).toLowerCase();
            const indicators = [
                "password_hash",
                "internal_notes"
            ];
            const exposed = indicators.some(indicator => body.includes(indicator));
            if (exposed) {
                return {
                    vulnerable: true,
                    severity: shared_types_1.Severity.HIGH,
                    category: shared_types_1.VulnerabilityCategory.SENSITIVE_DATA_EXPOSURE,
                    endpoint: "/api/v1/users/1",
                    evidence: body,
                    recommendation: "Remove sensitive fields from API responses"
                };
            }
            return {
                vulnerable: false,
                endpoint: "/api/v1/users/1"
            };
        }
        catch {
            return {
                vulnerable: false,
                endpoint: "/api/v1/users/1"
            };
        }
    }
}
exports.DataExposureDetector = DataExposureDetector;
