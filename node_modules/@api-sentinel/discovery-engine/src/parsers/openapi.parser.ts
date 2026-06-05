import {
  DiscoveredEndpoint
} from "../interfaces/discovered-endpoint.interface";

export class OpenApiParser {

  parse(document: any)
  : DiscoveredEndpoint[] {

    const endpoints:
      DiscoveredEndpoint[] = [];

    const paths =
      document.paths || {};

    for (
      const [path, methods]
      of Object.entries(paths)
    ) {

      for (
        const method
        of Object.keys(methods as object)
      ) {

        endpoints.push({
          path,
          method:
            method.toUpperCase(),
          source: "openapi",
          discoveredAt:
            new Date().toISOString()
        });

      }

    }

    return endpoints;
  }
}