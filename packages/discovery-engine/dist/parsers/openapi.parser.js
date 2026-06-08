"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenApiParser = void 0;
class OpenApiParser {
    parse(document) {
        const endpoints = [];
        const paths = document.paths || {};
        for (const [path, methods] of Object.entries(paths)) {
            for (const method of Object.keys(methods)) {
                endpoints.push({
                    path,
                    method: method.toUpperCase(),
                    source: "openapi",
                    discoveredAt: new Date().toISOString()
                });
            }
        }
        return endpoints;
    }
}
exports.OpenApiParser = OpenApiParser;
