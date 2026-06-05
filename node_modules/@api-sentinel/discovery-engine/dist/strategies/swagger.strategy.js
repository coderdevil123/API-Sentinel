"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerStrategy = void 0;
const axios_1 = __importDefault(require("axios"));
const shared_utils_1 = require("@api-sentinel/shared-utils");
class SwaggerStrategy {
    candidates = [
        "/docs",
        "/swagger",
        "/swagger.json",
        "/openapi.json",
        "/api-docs"
    ];
    async discover(targetUrl) {
        for (const path of this.candidates) {
            try {
                const url = `${targetUrl}${path}`;
                shared_utils_1.Logger.info(`Checking Swagger path: ${url}`);
                const response = await axios_1.default.get(url);
                if (response.status === 200) {
                    shared_utils_1.Logger.info(`Swagger discovered: ${url}`);
                    return {
                        found: true,
                        url,
                        type: path.includes("openapi")
                            ? "openapi"
                            : "swagger",
                        discoveredAt: new Date().toISOString()
                    };
                }
            }
            catch {
                continue;
            }
        }
        return {
            found: false,
            discoveredAt: new Date().toISOString()
        };
    }
}
exports.SwaggerStrategy = SwaggerStrategy;
