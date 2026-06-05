import axios from "axios";

import {
  Severity,
  VulnerabilityCategory
} from "@api-sentinel/shared-types";

import {
  DetectorResult
} from "../../interfaces/detector-result.interface";

export class RateLimitDetector {

  async scan(
    targetUrl: string
  ): Promise<DetectorResult> {

    let blocked = false;

    for (let i = 0; i < 25; i++) {

      const response =
        await axios.get(
          `${targetUrl}/api/v1/health`,
          {
            validateStatus: () => true
          }
        );

      if (response.status === 429) {
        blocked = true;
        break;
      }
    }

    if (!blocked) {

      return {
        vulnerable: true,
        severity: Severity.HIGH,
        category:
          VulnerabilityCategory.RATE_LIMITING,
        endpoint: "/api/v1/health",
        evidence:
          "25 requests sent without rate limit",
        recommendation:
          "Implement API rate limiting"
      };
    }

    return {
      vulnerable: false,
      endpoint: "/api/v1/health"
    };
  }
}