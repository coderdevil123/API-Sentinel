import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

import {
  Exporter
}
from "../interfaces/exporter.interface";

export class PdfExporter
implements Exporter {

  async export(
    report: any
  ): Promise<void> {

    const doc =
      new PDFDocument();
    
    const exportDir =
        path.join(
            process.cwd(),
            "exports"
        );

        if (
        !fs.existsSync(exportDir)
        ) {
        fs.mkdirSync(
            exportDir,
            { recursive: true }
        );
    }

    doc.pipe(
        fs.createWriteStream(
            path.join(
            exportDir,
            "report.pdf"
            )
        )
    );

    doc.fontSize(22);

    doc.text(
      report.title
    );

    doc.moveDown();

    doc.fontSize(12);

    doc.text(
      `Generated: ${report.generatedAt}`
    );

    doc.moveDown();

    doc.text(report.content);
    
    console.log(
      "PDF report exported"
    );
  }
}