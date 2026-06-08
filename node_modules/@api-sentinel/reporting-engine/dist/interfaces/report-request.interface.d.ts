import { ReportType } from "../types/report-type.enum";
export interface ReportRequest {
    type: ReportType;
    riskReport: any;
}
