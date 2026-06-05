import axios from "axios";

import {
  Severity,
  VulnerabilityCategory
} from "@api-sentinel/shared-types";

import {
  DetectorResult
} from "../../interfaces/detector-result.interface";

import {
  EvidenceBuilder
}
from "../../evidence/evidence-builder";

export class BolaDetector {

  async scan(
    targetUrl: string
  ): Promise<DetectorResult> {

    try {

      const response =
        await axios.get(
          `${targetUrl}/api/v1/users/2`
        );

      if (
        response.status === 200
      ) {

        return {
          vulnerable: true,
          severity:
            Severity.CRITICAL,
          category:
            VulnerabilityCategory.BOLA,
          endpoint:
            "/api/v1/users/2",
          evidence:
            EvidenceBuilder.build(
                "GET /api/v1/users/2",
                JSON.stringify(
                response.data
                ) 
            ),
          recommendation:
            "Implement object ownership checks"
        };
      }

      return {
        vulnerable: false,
        endpoint:
          "/api/v1/users/2"
      };

    } catch {

      return {
        vulnerable: false,
        endpoint:
          "/api/v1/users/2"
      };
    }
  }
}