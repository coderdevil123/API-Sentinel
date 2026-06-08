import { Exporter } from "../interfaces/exporter.interface";
export declare class PdfExporter implements Exporter {
    export(report: any): Promise<void>;
}
