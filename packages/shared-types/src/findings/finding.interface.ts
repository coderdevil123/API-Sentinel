import { Severity } from "../enums/severity.enum";
import { VulnerabilityCategory } from "../enums/vulnerability-category.enum";
import { Evidence } from "../interfaces/evidence.interface";

export interface Finding {
  id: string;

  title: string;

  description: string;

  endpoint: string;

  severity: Severity;

  category: VulnerabilityCategory;

  evidence: Evidence;

  recommendation: string;
}