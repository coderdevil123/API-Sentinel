import { DiscoveryResult } from "../index";
export declare class DiscoveryService {
    private swaggerStrategy;
    discover(targetUrl: string): Promise<DiscoveryResult>;
    private performHealthCheck;
}
