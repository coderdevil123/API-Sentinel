import axios from "axios";

import {
  Severity,
  VulnerabilityCategory
} from "@api-sentinel/shared-types";

import {
  DetectorResult
} from "../../interfaces/detector-result.interface";

export class MassAssignmentDetector {

  async scan(
    targetUrl: string
  ): Promise<DetectorResult> {

    try {

      const response =
        await axios.post(
          `${targetUrl}/api/v1/users`,
          {
            name: "scanner-user",
            email: "scanner@test.com",
            role: "admin"
          },
          {
            validateStatus: () => true
          }
        );

      const body =
        JSON.stringify(
          response.data
        );

      if (
        body.includes(
          "admin"
        )
      ) {

        return {
          vulnerable: true,
          severity:
            Severity.HIGH,
          category:
            VulnerabilityCategory.MASS_ASSIGNMENT,
          endpoint:
            "/api/v1/users",
          evidence:
            body,
          recommendation:
            "Whitelist assignable properties"
        };
      }

      return {
        vulnerable: false,
        endpoint:
          "/api/v1/users"
      };

    } catch {

      return {
        vulnerable: false,
        endpoint:
          "/api/v1/users"
      };
    }
  }
}