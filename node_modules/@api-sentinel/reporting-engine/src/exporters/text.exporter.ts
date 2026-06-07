import fs from "fs/promises";
import path from "path";

import {
  Exporter
}
from "../interfaces/exporter.interface";

export class TextExporter
implements Exporter {

  async export(
    report: any
  ): Promise<void> {

    const exportDir =
      path.join(
        process.cwd(),
        "exports"
      );

    await fs.mkdir(
      exportDir,
      { recursive: true }
    );

    await fs.writeFile(
      path.join(
        exportDir,
        "report.txt"
      ),
      report.content
    );

    console.log(
      "TXT report exported"
    );
  }
}