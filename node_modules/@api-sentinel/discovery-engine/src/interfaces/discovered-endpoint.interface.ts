export interface DiscoveredEndpoint {
  path: string;

  method: string;

  source:
    | "swagger"
    | "openapi"
    | "wordlist"
    | "manual";

  discoveredAt: string;
}