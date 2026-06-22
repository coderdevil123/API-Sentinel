import {
  OrganizationSession
}
from "@/types/organization-session";

export async function
getOrganizationSession()
: Promise<
    OrganizationSession
  > {

  return {

    userId:
      "user-001",

    organizationId:
      "org-001",

    role:
      "ADMIN"

  };

}