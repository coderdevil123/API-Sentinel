import {
  Session
}
from "@/types/session";

import {
  getTenantId
}
from "./tenant-scope";

export async function
scopeSessions(
  sessions: Session[]
) {

  const tenantId =
    await getTenantId();

  return sessions.filter(
    session =>
      (
        session as any
      ).organizationId
      === tenantId
  );

}