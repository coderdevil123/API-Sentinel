import {
  RiskReport
}
from "./risk-report.interface";

export interface StoredRiskReport {

  id: string;

  report: RiskReport;

  createdAt: string;
}