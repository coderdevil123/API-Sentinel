import axios from "axios";

import {
  Severity,
  VulnerabilityCategory
} from "@api-sentinel/shared-types";

import {
  DetectorResult
}
from "../../interfaces/detector-result.interface";

export class SqliDetector {

  async scan(
    targetUrl: string
  ): Promise<DetectorResult> {

    try {

      const response =
        await axios.get(
          `${targetUrl}/api/v1/products/search?q='`,
          {
            validateStatus: () => true
          }
        );

      const body =
        JSON.stringify(
          response.data
        ).toLowerCase();

      const indicators = [
        "sqlite",
        "database",
        "sql injection",
        "potential sql injection",
        "sqlite_error"
      ];

      const vulnerable =
        indicators.some(
          indicator =>
            body.includes(
              indicator
            )
        );

      if (vulnerable) {

        return {
          vulnerable: true,
          severity:
            Severity.HIGH,
          category:
            VulnerabilityCategory.SQL_INJECTION,
          endpoint:
            "/api/v1/products/search",
          evidence:
          `Payload: q='\nResponse: ${body}`,
          recommendation:
            "Use parameterized queries"
        };
      }

      return {
        vulnerable: false,
        endpoint:
          "/api/v1/products/search"
      };

    } catch {

      return {
        vulnerable: false,
        endpoint:
          "/api/v1/products/search"
      };
    }
  }
}