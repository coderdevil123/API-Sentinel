import { DetectorResult } from "../../interfaces/detector-result.interface";
export declare class AuthDetector {
    scan(targetUrl: string): Promise<DetectorResult>;
}
