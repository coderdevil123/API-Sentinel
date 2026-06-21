import {
  Organization
}
from "@/types/organization";

export async function
getCurrentOrganization()
: Promise<Organization> {

  return {

    id:
      "org-001",

    name:
      "API Sentinel Labs",

    plan:
      "ENTERPRISE",

    scansUsed:
      25,

    scanLimit:
      1000,

    settings: {

      allowExports:
        true,

      allowInvites:
        true,

      allowApiAccess:
        true

    }
  };

}