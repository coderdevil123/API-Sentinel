import { DetectorResult } from "../interfaces/detector-result.interface";
export declare class FindingManager {
    private findings;
    add(finding: DetectorResult): void;
    getAll(): DetectorResult[];
    count(): number;
}
