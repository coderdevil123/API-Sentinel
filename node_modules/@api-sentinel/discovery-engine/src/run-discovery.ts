import {
  DiscoveryService
}
from "./services/discovery.service";

import {
  printDiscoveryReport
}
from "./utils/discovery-report";

async function main() {

  const service =
    new DiscoveryService();

  const result =
    await service.discover(
      "http://localhost:5001"
    );

  printDiscoveryReport(
    result
  );

}

main();