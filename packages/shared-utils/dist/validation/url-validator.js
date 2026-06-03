"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidUrl = void 0;
const isValidUrl = (value) => {
    try {
        new URL(value);
        return true;
    }
    catch {
        return false;
    }
};
exports.isValidUrl = isValidUrl;
