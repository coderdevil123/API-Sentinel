import {
  ScanSummary
}
from "../interfaces/scan-summary.interface";

import {
  RiskReport
}
from "../interfaces/risk-report.interface";

import {
  RiskCalculator
}
from "../scoring/risk-calculator";

import {
  RiskRating
}
from "../scoring/risk-rating";

import {
  AttackSurfaceAnalyzer
}
from "../scoring/attack-surface";

import {
  ExecutiveSummaryService
}
from "./executive-summary.service";

import {
  BusinessImpactService
}
from "./business-impact.service";

export class RiskService {

  private calculator =
    new RiskCalculator();

  private summaryService =
    new ExecutiveSummaryService();
    
    private impactService =
    new BusinessImpactService();

  generate(
    summary: ScanSummary
  ): RiskReport {

    const score =
      this.calculator.calculate(
        summary
      );

    const rating =
      RiskRating.determine(
        score
      );

    const attackSurface =
      new AttackSurfaceAnalyzer()
        .analyze(summary);

    return {

      riskScore: score,

      overallRisk:
        rating,

      attackSurface,

      totalFindings:
        summary.totalFindings,

      executiveSummary:
        this.summaryService.generate(
          summary,
          score,
          rating
        ),

      businessImpact:
        this.impactService
            .determine(summary),
    
      scanId: crypto.randomUUID(),

      target:
        "localhost",

      generatedAt:
        new Date()
            .toISOString(),
    };
  }
}