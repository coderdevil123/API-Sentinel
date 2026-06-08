"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerDiscoveryService = void 0;
const axios_1 = __importDefault(require("axios"));
class SwaggerDiscoveryService {
    async fetchDocument(url) {
        const response = await axios_1.default.get(url);
        return response.data;
    }
}
exports.SwaggerDiscoveryService = SwaggerDiscoveryService;
