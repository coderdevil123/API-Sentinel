import { Report } from "./report.interface";
export interface StoredReport {
    id: string;
    report: Report;
    createdAt: string;
}
