export const executiveTemplate = (
  data: any
) => `
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