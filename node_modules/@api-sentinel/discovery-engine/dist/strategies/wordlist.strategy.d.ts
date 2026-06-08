import { DiscoveredEndpoint } from "../interfaces/discovered-endpoint.interface";
export declare class WordlistStrategy {
    private readonly wordlist;
    discover(targetUrl: string): Promise<DiscoveredEndpoint[]>;
}
