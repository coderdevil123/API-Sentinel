import { DetectorResult } from "../../interfaces/detector-result.interface";
export declare class DataExposureDetector {
    scan(targetUrl: string): Promise<DetectorResult>;
}
