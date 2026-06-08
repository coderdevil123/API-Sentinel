import { DetectorResult } from "../../interfaces/detector-result.interface";
export declare class RateLimitDetector {
    scan(targetUrl: string): Promise<DetectorResult>;
}
