import {
  Request,
  Response
}
from "express";

import {
  ScanService
}
from "../services/scan.service";

const scanService =
  new ScanService();

export class ScanController {

  async createScan(
    req: Request,
    res: Response
  ) {

    const result =
      await scanService
        .startScan(
          req.body
        );

    return res
      .status(201)
      .json(result);
  }
}