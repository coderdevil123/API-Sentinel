import axios from "axios";

import { Logger } from "@api-sentinel/shared-utils";

import { DiscoveredEndpoint }
from "../interfaces/discovered-endpoint.interface";

export class WordlistStrategy {

  private readonly wordlist = [
    "/api/v1/users",
    "/api/v1/products",
    "/api/v1/admin",
    "/api/v1/auth/login",
    "/api/v1/health",
    "/docs"
  ];

  async discover(
    targetUrl: string
  ): Promise<DiscoveredEndpoint[]> {

    const discovered:
      DiscoveredEndpoint[] = [];

    for (const endpoint of this.wordlist) {

      try {

        const url =
          `${targetUrl}${endpoint}`;

        const response =
          await axios.get(url);

        if (
          response.status >= 200 &&
          response.status < 500
        ) {

          Logger.info(
            `Discovered ${endpoint}`
          );

          discovered.push({
            path: endpoint,
            method: "GET",
            source: "wordlist",
            discoveredAt:
              new Date().toISOString()
          });

        }

      } catch {
        continue;
      }
    }

    return discovered;
  }
}