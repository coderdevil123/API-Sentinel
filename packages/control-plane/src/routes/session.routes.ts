import { Router }
from "express";

import {
  SessionService
}
from "../services/session.service";

const router =
  Router();

const service =
  new SessionService();

router.get(
  "/sessions",
  (_, res) => {

    return res.json(
      service.getAllSessions()
    );
  }
);

export default router;