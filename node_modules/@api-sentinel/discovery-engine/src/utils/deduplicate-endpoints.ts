import {
  DiscoveredEndpoint
}
from "../interfaces/discovered-endpoint.interface";

export const deduplicateEndpoints =
(
  endpoints:
    DiscoveredEndpoint[]
): DiscoveredEndpoint[] => {

  const seen =
    new Set<string>();

  return endpoints.filter(
    endpoint => {

      const key =
        `${endpoint.method}:${endpoint.path}`;

      if (seen.has(key)) {
        return false;
      }

      seen.add(key);

      return true;
    }
  );
};