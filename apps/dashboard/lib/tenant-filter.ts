import {
  Session
}
from "@/types/session";

export function
filterSessionsByOrganization(

  sessions:
    Session[],

  organizationId:
    string

) {

  return sessions.filter(
    session =>

      session.organizationId
      ===
      organizationId
  );

}