import { DiscoveredEndpoint } from "./discovered-endpoint.interface";
export interface DiscoveryResult {
    targetUrl: string;
    discoveredAt: string;
    totalEndpoints: number;
    endpoints: DiscoveredEndpoint[];
}
