import { Exporter } from "../interfaces/exporter.interface";
export declare class MarkdownExporter implements Exporter {
    export(report: any): Promise<void>;
}
