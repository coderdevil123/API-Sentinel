import { Severity, VulnerabilityCategory } from "@api-sentinel/shared-types";
export interface DetectorResult {
    vulnerable: boolean;
    severity?: Severity;
    category?: VulnerabilityCategory;
    endpoint: string;
    evidence?: string;
    recommendation?: string;
}
