import {
  DiscoveryResult
}
from "../interfaces/discovery-result.interface";

export const printDiscoveryReport =
(
  result: DiscoveryResult
) => {

  console.log("\n");

  console.log(
    "===== DISCOVERY REPORT ====="
  );

  console.log(
    `Target: ${result.targetUrl}`
  );

  console.log(
    `Endpoints: ${result.totalEndpoints}`
  );

  console.log("\n");

  result.endpoints.forEach(
    endpoint => {

      console.log(
        `[${endpoint.method}] ${endpoint.path}`
      );

    }
  );

  console.log("\n");
};