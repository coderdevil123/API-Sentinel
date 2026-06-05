import {
  RiskLevel
}
from "../types/risk-level.type";

export interface RiskReport {

  scanId: string;

  target: string;

  riskScore: number;

  overallRisk: RiskLevel;

  attackSurface: string;

  totalFindings: number;

  businessImpact: string;

  executiveSummary: string;

  generatedAt: string;
}