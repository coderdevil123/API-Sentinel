import { SwaggerDiscoveryResult } from "../index";
export declare class SwaggerStrategy {
    private readonly candidates;
    discover(targetUrl: string): Promise<SwaggerDiscoveryResult>;
}
