import axios from "axios";

import {
  Severity,
  VulnerabilityCategory
} from "@api-sentinel/shared-types";

import {
  DetectorResult
} from "../../interfaces/detector-result.interface";

export class AuthDetector {

  async scan(
    targetUrl: string
  ): Promise<DetectorResult> {

    try {

      const response =
        await axios.get(
          `${targetUrl}/api/v1/admin`,
          {
            validateStatus: () => true
          }
        );

      if (
        response.status === 200
      ) {

        return {
          vulnerable: true,
          severity:
            Severity.CRITICAL,
          category:
            VulnerabilityCategory.BROKEN_AUTHENTICATION,
          endpoint:
            "/api/v1/admin",
          evidence:
            JSON.stringify(
              response.data
            ),
          recommendation:
            "Require authentication middleware"
        };
      }

      return {
        vulnerable: false,
        endpoint:
          "/api/v1/admin"
      };

    } catch {

      return {
        vulnerable: false,
        endpoint:
          "/api/v1/admin"
      };
    }
  }
}