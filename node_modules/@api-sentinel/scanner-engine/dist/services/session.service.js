"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionService = void 0;
const crypto_1 = require("crypto");
class SessionService {
    createSession(target) {
        return {
            scanId: (0, crypto_1.randomUUID)(),
            target,
            startedAt: new Date()
                .toISOString()
        };
    }
}
exports.SessionService = SessionService;
