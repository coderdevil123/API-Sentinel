import { DetectorResult } from "../../interfaces/detector-result.interface";
export declare class MassAssignmentDetector {
    scan(targetUrl: string): Promise<DetectorResult>;
}
