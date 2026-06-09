import {
  Request,
  Response
}
from "express";

import {
  SessionService
}
from "../services/session.service";

export class ReportController {

  private sessionService =
    new SessionService();

  getReport(
    req: Request,
    res: Response
  ) {

    const session =
      this.sessionService
        .getById(
          String(
            req.params.id
          )
        );

    if (!session) {

      return res.status(404)
        .json({
          message:
            "Session not found"
        });
    }

    return res.json(
      session.report
    );
  }
}