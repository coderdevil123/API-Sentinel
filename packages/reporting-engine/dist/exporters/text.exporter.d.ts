import { Exporter } from "../interfaces/exporter.interface";
export declare class TextExporter implements Exporter {
    export(report: any): Promise<void>;
}
