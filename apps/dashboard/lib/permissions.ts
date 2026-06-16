import {
  Permission
}
from "@/types/permission";

import {
  UserRole
}
from "@/types/role";

export const ROLE_PERMISSIONS:
Record<
  UserRole,
  Permission[]
> = {

  ADMIN: [

    "SCAN_READ",
    "SCAN_WRITE",

    "REPORT_READ",
    "REPORT_EXPORT",

    "USER_READ",
    "USER_MANAGE",

    "ORG_ADMIN"
  ],

  ANALYST: [

    "SCAN_READ",
    "SCAN_WRITE",

    "REPORT_READ",
    "REPORT_EXPORT"
  ],

  VIEWER: [

    "SCAN_READ",

    "REPORT_READ"
  ]

};