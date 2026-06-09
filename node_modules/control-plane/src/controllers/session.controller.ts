import {
  Request,
  Response
}
from "express";

import {
  SessionService
}
from "../services/session.service";

interface SessionParams {
  id: string;
}

export class SessionController {

  private sessionService =
    new SessionService();

  getSession(
    req: Request<SessionParams>,
    res: Response
  ) {

    const session =
      this.sessionService
        .getById(
          req.params.id
        );

    if (!session) {

      return res.status(404)
        .json({
          message:
            "Session not found"
        });
    }

    return res.json(
      session
    );
  }
}