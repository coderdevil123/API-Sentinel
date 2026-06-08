import { DetectorResult } from "../../interfaces/detector-result.interface";
export declare class SqliDetector {
    scan(targetUrl: string): Promise<DetectorResult>;
}
