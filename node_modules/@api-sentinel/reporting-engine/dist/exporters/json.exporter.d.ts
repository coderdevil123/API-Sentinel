import { Exporter } from "../interfaces/exporter.interface";
export declare class JsonExporter implements Exporter {
    export(report: any): Promise<void>;
}
