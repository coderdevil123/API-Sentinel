"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executiveTemplate = void 0;
const executiveTemplate = (data) => `
====================================
 API-SENTINEL EXECUTIVE REPORT
====================================

Target:
${data.target}

Risk Score:
${data.riskScore}

Overall Risk:
${data.overallRisk}

Business Impact:
${data.businessImpact}

Executive Summary:
${data.executiveSummary}

Generated:
${data.generatedAt}
`;
exports.executiveTemplate = executiveTemplate;
