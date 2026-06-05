"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeUrl = void 0;
const normalizeUrl = (url) => {
    return url.trim().replace(/\/$/, "");
};
exports.normalizeUrl = normalizeUrl;
