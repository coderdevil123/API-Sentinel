export interface Exporter {
    export(report: any): Promise<void>;
}
