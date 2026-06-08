import {
  sessionStore
}
from "../storage/session.store";

export class SessionService {

  updateStatus(
    scanId: string,
    status:
      | "PENDING"
      | "RUNNING"
      | "COMPLETED"
      | "FAILED"
  ) {

    const session =
      sessionStore.find(
        s => s.scanId === scanId
      );

    if (!session) {
      return;
    }

    session.status =
      status;

    if (
      status === "COMPLETED"
    ) {

      session.completedAt =
        new Date()
          .toISOString();
    }
  }

  getSession(
    scanId: string
  ) {

    return sessionStore.find(
      s => s.scanId === scanId
    );
  }

  getAllSessions() {

    return sessionStore;
  }

  saveArtifacts(
    scanId: string,
    data: Partial<any>
  ) {

    const session =
      sessionStore.find(
        s => s.scanId === scanId
      );

    if (!session) {
      return;
    }

    Object.assign(
      session,
      data
    );
  }
}