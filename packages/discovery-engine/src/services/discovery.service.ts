import axios from "axios";
import { SwaggerStrategy }
from "../strategies/swagger.strategy";

import { OpenApiParser }
from "../parsers/openapi.parser";

import {
  SwaggerDiscoveryService
}
from "./swagger-discovery.service";

import {
  isValidUrl,
  Logger
} from "@api-sentinel/shared-utils";

import {
  DiscoveryResult,
  DiscoveredEndpoint
} from "../index";

import {
  WordlistStrategy
}
from "../strategies/wordlist.strategy";

import {
  deduplicateEndpoints
}
from "../utils/deduplicate-endpoints";

export class DiscoveryService {
    private swaggerStrategy =
    new SwaggerStrategy();

    private parser =
    new OpenApiParser();

    private swaggerFetcher =
    new SwaggerDiscoveryService();

    private wordlistStrategy =
    new WordlistStrategy();

  async discover(
  targetUrl: string
): Promise<DiscoveryResult> {

  Logger.info(
    `Starting discovery: ${targetUrl}`
  );

  if (!isValidUrl(targetUrl)) {
    throw new Error(
      "Invalid target URL"
    );
  }

  const endpoints =
    await this.performHealthCheck(
      targetUrl
    );

  /*
  |--------------------------------------------------------------------------
  | Swagger Discovery
  |--------------------------------------------------------------------------
  */

  const swaggerResult =
    await this.swaggerStrategy
      .discover(targetUrl);

  if (swaggerResult.found) {

    Logger.info(
      `Documentation found at ${swaggerResult.url}`
    );

    const document =
      await this.swaggerFetcher
        .fetchDocument(
          swaggerResult.url!
        );

    const parsedEndpoints =
      this.parser.parse(document);

    Logger.info(
      `Parsed ${parsedEndpoints.length} endpoints`
    );

    endpoints.push(
      ...parsedEndpoints
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Wordlist Discovery
  |--------------------------------------------------------------------------
  */

  const wordlistEndpoints =
    await this.wordlistStrategy
      .discover(targetUrl);

  endpoints.push(
    ...wordlistEndpoints
  );

  /*
  |--------------------------------------------------------------------------
  | Deduplication
  |--------------------------------------------------------------------------
  */

  const uniqueEndpoints =
    deduplicateEndpoints(
      endpoints
    );

  return {
    targetUrl,
    discoveredAt:
      new Date().toISOString(),
    totalEndpoints:
      uniqueEndpoints.length,
    endpoints:
      uniqueEndpoints
  };
}

  private async performHealthCheck(
    targetUrl: string
  ): Promise<DiscoveredEndpoint[]> {

    try {

      await axios.get(
        `${targetUrl}/api/v1/health`
      );

      Logger.info(
        "Target reachable"
      );

      return [
        {
          path: "/api/v1/health",
          method: "GET",
          source: "manual",
          discoveredAt:
            new Date().toISOString()
        }
      ];

    } catch {

      Logger.error(
        "Health check failed"
      );

      return [];
    }
  }
}