export class JsonReportBuilder {

  build(
    report: any
  ) {

    return JSON.stringify(
      report,
      null,
      2
    );
  }
}