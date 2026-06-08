"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscoveryService = void 0;
const axios_1 = __importDefault(require("axios"));
const swagger_strategy_1 = require("../strategies/swagger.strategy");
const openapi_parser_1 = require("../parsers/openapi.parser");
const swagger_discovery_service_1 = require("./swagger-discovery.service");
const shared_utils_1 = require("@api-sentinel/shared-utils");
const wordlist_strategy_1 = require("../strategies/wordlist.strategy");
const deduplicate_endpoints_1 = require("../utils/deduplicate-endpoints");
class DiscoveryService {
    swaggerStrategy = new swagger_strategy_1.SwaggerStrategy();
    parser = new openapi_parser_1.OpenApiParser();
    swaggerFetcher = new swagger_discovery_service_1.SwaggerDiscoveryService();
    wordlistStrategy = new wordlist_strategy_1.WordlistStrategy();
    async discover(targetUrl) {
        shared_utils_1.Logger.info(`Starting discovery: ${targetUrl}`);
        if (!(0, shared_utils_1.isValidUrl)(targetUrl)) {
            throw new Error("Invalid target URL");
        }
        const endpoints = await this.performHealthCheck(targetUrl);
        /*
        |--------------------------------------------------------------------------
        | Swagger Discovery
        |--------------------------------------------------------------------------
        */
        const swaggerResult = await this.swaggerStrategy
            .discover(targetUrl);
        if (swaggerResult.found) {
            shared_utils_1.Logger.info(`Documentation found at ${swaggerResult.url}`);
            const document = await this.swaggerFetcher
                .fetchDocument(swaggerResult.url);
            const parsedEndpoints = this.parser.parse(document);
            shared_utils_1.Logger.info(`Parsed ${parsedEndpoints.length} endpoints`);
            endpoints.push(...parsedEndpoints);
        }
        /*
        |--------------------------------------------------------------------------
        | Wordlist Discovery
        |--------------------------------------------------------------------------
        */
        const wordlistEndpoints = await this.wordlistStrategy
            .discover(targetUrl);
        endpoints.push(...wordlistEndpoints);
        /*
        |--------------------------------------------------------------------------
        | Deduplication
        |--------------------------------------------------------------------------
        */
        const uniqueEndpoints = (0, deduplicate_endpoints_1.deduplicateEndpoints)(endpoints);
        return {
            targetUrl,
            discoveredAt: new Date().toISOString(),
            totalEndpoints: uniqueEndpoints.length,
            endpoints: uniqueEndpoints
        };
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
