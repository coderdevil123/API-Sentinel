import {
  Invitation
}
from "@/types/invitation";

export async function
getInvitations()
: Promise<Invitation[]> {

  return [

    {

      id: "1",

      email:
        "newuser@apisentinel.com",

      role:
        "ANALYST",

      invitedBy:
        "Administrator",

      invitedAt:
        "2026-06-25",

      status:
        "PENDING",

      organizationId:
        "org_001"

    },

    {

      id: "2",

      email:
        "viewer@apisentinel.com",

      role:
        "VIEWER",

      invitedBy:
        "Administrator",

      invitedAt:
        "2026-06-20",

      status:
        "ACCEPTED",

      organizationId:
        "org_001"

    }

  ];

}