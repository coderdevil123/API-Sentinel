"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MassAssignmentDetector = void 0;
const axios_1 = __importDefault(require("axios"));
const shared_types_1 = require("@api-sentinel/shared-types");
class MassAssignmentDetector {
    async scan(targetUrl) {
        try {
            const response = await axios_1.default.post(`${targetUrl}/api/v1/users`, {
                name: "scanner-user",
                email: "scanner@test.com",
                role: "admin"
            }, {
                validateStatus: () => true
            });
            const body = JSON.stringify(response.data);
            if (body.includes("admin")) {
                return {
                    vulnerable: true,
                    severity: shared_types_1.Severity.HIGH,
                    category: shared_types_1.VulnerabilityCategory.MASS_ASSIGNMENT,
                    endpoint: "/api/v1/users",
                    evidence: body,
                    recommendation: "Whitelist assignable properties"
                };
            }
            return {
                vulnerable: false,
                endpoint: "/api/v1/users"
            };
        }
        catch {
            return {
                vulnerable: false,
                endpoint: "/api/v1/users"
            };
        }
    }
}
exports.MassAssignmentDetector = MassAssignmentDetector;
