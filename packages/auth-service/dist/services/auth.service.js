"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
class AuthService {
    validateUser(user) {
        return Boolean(user.email);
    }
    isAdmin(user) {
        return (user.role ===
            "ADMIN");
    }
    isOwner(user) {
        return (user.role ===
            "OWNER");
    }
}
exports.AuthService = AuthService;
