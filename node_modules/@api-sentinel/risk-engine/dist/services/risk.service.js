"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskService = void 0;
const risk_calculator_1 = require("../scoring/risk-calculator");
const risk_rating_1 = require("../scoring/risk-rating");
const attack_surface_1 = require("../scoring/attack-surface");
const executive_summary_service_1 = require("./executive-summary.service");
const business_impact_service_1 = require("./business-impact.service");
class RiskService {
    constructor() {
        this.calculator = new risk_calculator_1.RiskCalculator();
        this.summaryService = new executive_summary_service_1.ExecutiveSummaryService();
        this.impactService = new business_impact_service_1.BusinessImpactService();
    }
    generate(summary) {
        const score = this.calculator.calculate(summary);
        const rating = risk_rating_1.RiskRating.determine(score);
        const attackSurface = new attack_surface_1.AttackSurfaceAnalyzer()
            .analyze(summary);
        return {
            riskScore: score,
            overallRisk: rating,
            attackSurface,
            totalFindings: summary.totalFindings,
            executiveSummary: this.summaryService.generate(summary, score, rating),
            businessImpact: this.impactService
                .determine(summary),
            scanId: crypto.randomUUID(),
            target: "localhost",
            generatedAt: new Date()
                .toISOString(),
        };
    }
}
exports.RiskService = RiskService;
