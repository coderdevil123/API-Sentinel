"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordlistStrategy = void 0;
const axios_1 = __importDefault(require("axios"));
const shared_utils_1 = require("@api-sentinel/shared-utils");
class WordlistStrategy {
    wordlist = [
        "/api/v1/users",
        "/api/v1/products",
        "/api/v1/admin",
        "/api/v1/auth/login",
        "/api/v1/health",
        "/docs"
    ];
    async discover(targetUrl) {
        const discovered = [];
        for (const endpoint of this.wordlist) {
            try {
                const url = `${targetUrl}${endpoint}`;
                const response = await axios_1.default.get(url);
                if (response.status >= 200 &&
                    response.status < 500) {
                    shared_utils_1.Logger.info(`Discovered ${endpoint}`);
                    discovered.push({
                        path: endpoint,
                        method: "GET",
                        source: "wordlist",
                        discoveredAt: new Date().toISOString()
                    });
                }
            }
            catch {
                continue;
            }
        }
        return discovered;
    }
}
exports.WordlistStrategy = WordlistStrategy;
