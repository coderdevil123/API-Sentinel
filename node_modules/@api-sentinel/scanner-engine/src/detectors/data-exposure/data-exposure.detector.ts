import axios from "axios";

import {
  Severity,
  VulnerabilityCategory
} from "@api-sentinel/shared-types";

import {
  DetectorResult
} from "../../interfaces/detector-result.interface";

export class DataExposureDetector {

  async scan(
    targetUrl: string
  ): Promise<DetectorResult> {

    try {

      const response =
        await axios.get(
          `${targetUrl}/api/v1/users/1`
        );

      const body =
        JSON.stringify(
          response.data
        ).toLowerCase();

      const indicators = [
        "password_hash",
        "internal_notes"
      ];

      const exposed =
        indicators.some(
          indicator =>
            body.includes(
              indicator
            )
        );

      if (exposed) {

        return {
          vulnerable: true,
          severity:
            Severity.HIGH,
          category:
            VulnerabilityCategory.SENSITIVE_DATA_EXPOSURE,
          endpoint:
            "/api/v1/users/1",
          evidence:
            body,
          recommendation:
            "Remove sensitive fields from API responses"
        };
      }

      return {
        vulnerable: false,
        endpoint:
          "/api/v1/users/1"
      };

    } catch {

      return {
        vulnerable: false,
        endpoint:
          "/api/v1/users/1"
      };
    }
  }
}