"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscoveryService = void 0;
const axios_1 = __importDefault(require("axios"));
const swagger_strategy_1 = require("../strategies/swagger.strategy");
const shared_utils_1 = require("@api-sentinel/shared-utils");
class DiscoveryService {
    swaggerStrategy = new swagger_strategy_1.SwaggerStrategy();
    async discover(targetUrl) {
        shared_utils_1.Logger.info(`Starting discovery: ${targetUrl}`);
        if (!(0, shared_utils_1.isValidUrl)(targetUrl)) {
            throw new Error("Invalid target URL");
        }
        const endpoints = await this.performHealthCheck(targetUrl);
        return {
            targetUrl,
            discoveredAt: new Date().toISOString(),
            totalEndpoints: endpoints.length,
            endpoints
        };
        const swaggerResult = await this.swaggerStrategy
            .discover(targetUrl);
        if (swaggerResult.found) {
            shared_utils_1.Logger.info(`Documentation found at ${swaggerResult.url}`);
        }
    }
    async performHealthCheck(targetUrl) {
        try {
            await axios_1.default.get(`${targetUrl}/api/v1/health`);
            shared_utils_1.Logger.info("Target reachable");
            return [
                {
                    path: "/api/v1/health",
                    method: "GET",
                    source: "manual",
                    discoveredAt: new Date().toISOString()
                }
            ];
        }
        catch {
            shared_utils_1.Logger.error("Health check failed");
            return [];
        }
    }
}
exports.DiscoveryService = DiscoveryService;
