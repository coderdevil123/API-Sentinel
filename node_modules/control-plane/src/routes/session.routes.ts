import { Router }
from "express";

import {
  SessionService
}
from "../services/session.service";

import {
  SessionController
}
from "../controllers/session.controller";

const controller =
  new SessionController();

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

router.get(
  "/sessions/:id",
  controller.getSession.bind(
    controller
  )
);

export default router;