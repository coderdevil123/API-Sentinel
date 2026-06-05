export interface SwaggerDiscoveryResult {
  found: boolean;

  url?: string;

  type?: "swagger" | "openapi";

  discoveredAt: string;
}