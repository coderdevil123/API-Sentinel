import {
  AuditLog
}
from "@/types/audit-log";

export async function
getAuditLogs()
: Promise<AuditLog[]> {

  return [

    {

      id: "1",

      action:
        "Member invited",

      actor:
        "Administrator",

      createdAt:
        "2026-06-27",

      organizationId:
        "org_001"

    },

    {

      id: "2",

      action:
        "Role updated",

      actor:
        "Administrator",

      createdAt:
        "2026-06-28",

      organizationId:
        "org_001"

    }

  ];

}