"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deduplicateEndpoints = void 0;
const deduplicateEndpoints = (endpoints) => {
    const seen = new Set();
    return endpoints.filter(endpoint => {
        const key = `${endpoint.method}:${endpoint.path}`;
        if (seen.has(key)) {
            return false;
        }
        seen.add(key);
        return true;
    });
};
exports.deduplicateEndpoints = deduplicateEndpoints;
