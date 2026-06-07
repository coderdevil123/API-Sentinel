import fs from "fs/promises";
import path from "path";

import {
  Exporter
}
from "../interfaces/exporter.interface";

export class MarkdownExporter
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

    const markdown =
`
# ${report.title}

Generated:
${report.generatedAt}

---

${report.content}
`;

    await fs.writeFile(
      path.join(
        exportDir,
        "report.md"
      ),
      markdown
    );

    console.log(
      "Markdown report exported"
    );
  }
}