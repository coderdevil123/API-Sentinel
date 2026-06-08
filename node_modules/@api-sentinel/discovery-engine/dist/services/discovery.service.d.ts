import { DiscoveryResult } from "../index";
export declare class DiscoveryService {
    private swaggerStrategy;
    private parser;
    private swaggerFetcher;
    private wordlistStrategy;
    discover(targetUrl: string): Promise<DiscoveryResult>;
    private performHealthCheck;
}
