import axios from "axios";

import { Logger } from "@api-sentinel/shared-utils";

import { SwaggerDiscoveryResult } from "../index";

export class SwaggerStrategy {

  private readonly candidates = [
    "/openapi.json",
    "/swagger.json",
    "/api-docs",
    "/docs"
  ];

  async discover(
    targetUrl: string
  ): Promise<SwaggerDiscoveryResult> {

    for (const path of this.candidates) {

      try {

        const url = `${targetUrl}${path}`;

        Logger.info(
          `Checking Swagger path: ${url}`
        );

        const response =
          await axios.get(url);

        if (response.status === 200) {

          Logger.info(
            `Swagger discovered: ${url}`
          );

          return {
            found: true,
            url,
            type: path.includes("openapi")
              ? "openapi"
              : "swagger",
            discoveredAt:
              new Date().toISOString()
          };
        }

      } catch {
        continue;
      }
    }

    return {
      found: false,
      discoveredAt:
        new Date().toISOString()
    };
  }
}