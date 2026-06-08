"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvidenceBuilder = void 0;
class EvidenceBuilder {
    static build(request, response) {
        return `
REQUEST:
${request}

RESPONSE:
${response}
`;
    }
}
exports.EvidenceBuilder = EvidenceBuilder;
