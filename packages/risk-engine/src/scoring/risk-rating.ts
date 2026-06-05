import { RiskLevel }
from "../types/risk-level.type";

export class RiskRating {

  static determine(
    score: number
  ): RiskLevel {

    if (score >= 90) {
      return "CRITICAL";
    }

    if (score >= 70) {
      return "HIGH";
    }

    if (score >= 40) {
      return "MEDIUM";
    }

    return "LOW";
  }
}