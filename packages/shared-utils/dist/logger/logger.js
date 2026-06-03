"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    static info(message) {
        console.log(`[INFO] ${message}`);
    }
    static warn(message) {
        console.warn(`[WARN] ${message}`);
    }
    static error(message) {
        console.error(`[ERROR] ${message}`);
    }
    static vulnerability(message) {
        console.log(`[VULNERABILITY] ${message}`);
    }
}
exports.Logger = Logger;
