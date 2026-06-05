import { randomUUID } from "crypto";

export class SessionService {

  createSession(
    target: string
  ) {

    return {
      scanId:
        randomUUID(),

      target,

      startedAt:
        new Date()
          .toISOString()
    };
  }

}