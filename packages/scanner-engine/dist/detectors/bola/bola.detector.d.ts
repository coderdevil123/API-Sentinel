import { DetectorResult } from "../../interfaces/detector-result.interface";
export declare class BolaDetector {
    scan(targetUrl: string): Promise<DetectorResult>;
}
