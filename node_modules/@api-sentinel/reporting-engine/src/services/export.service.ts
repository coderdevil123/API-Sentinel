import {
  JsonExporter
}
from "../exporters/json.exporter";

import {
  TextExporter
}
from "../exporters/text.exporter";

import {
  MarkdownExporter
}
from "../exporters/markdown.exporter";

import {
  PdfExporter
}
from "../exporters/pdf.exporter";

export class ExportService {

  private json =
    new JsonExporter();

  private text =
    new TextExporter();

  private markdown =
    new MarkdownExporter();

  private pdf =
    new PdfExporter();

  async exportAll(
    report: any
  ) {

    await this.json.export(
      report
    );

    await this.text.export(
      report
    );

    await this.markdown.export(
      report
    );

    await this.pdf.export(
      report
    );
  }
}