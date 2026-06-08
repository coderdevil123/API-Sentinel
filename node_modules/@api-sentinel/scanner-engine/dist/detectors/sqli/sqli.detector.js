"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqliDetector = void 0;
const axios_1 = __importDefault(require("axios"));
const shared_types_1 = require("@api-sentinel/shared-types");
class SqliDetector {
    async scan(targetUrl) {
        try {
            const response = await axios_1.default.get(`${targetUrl}/api/v1/products/search?q='`, {
                validateStatus: () => true
            });
            const body = JSON.stringify(response.data).toLowerCase();
            const indicators = [
                "sqlite",
                "database",
                "sql injection",
                "potential sql injection",
                "sqlite_error"
            ];
            const vulnerable = indicators.some(indicator => body.includes(indicator));
            if (vulnerable) {
                return {
                    vulnerable: true,
                    severity: shared_types_1.Severity.HIGH,
                    category: shared_types_1.VulnerabilityCategory.SQL_INJECTION,
                    endpoint: "/api/v1/products/search",
                    evidence: `Payload: q='\nResponse: ${body}`,
                    recommendation: "Use parameterized queries"
                };
            }
            return {
                vulnerable: false,
                endpoint: "/api/v1/products/search"
            };
        }
        catch {
            return {
                vulnerable: false,
                endpoint: "/api/v1/products/search"
            };
        }
    }
}
exports.SqliDetector = SqliDetector;
