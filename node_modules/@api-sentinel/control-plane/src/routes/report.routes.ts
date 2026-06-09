import {
  Router
}
from "express";

import {
  ReportController
}
from "../controllers/report.controller";

import { SessionService } from "../services/session.service";

const router =
  Router();

const controller =
  new ReportController();

router.get(
  "/reports/:id",
  controller.getReport.bind(
    controller
  )
);

router.get(
  "/reports/:id/download",
  (
    req,
    res
  ) => {

    const session =
      new SessionService()
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

    res.setHeader(
      "Content-Type",
      "text/plain"
    );

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=report.txt"
    );

    return res.send(
      session.report.content
    );
  }
);

export default router;