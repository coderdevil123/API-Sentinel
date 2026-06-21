import {
  Member
}
from "@/types/member";

export async function
getOrganizationMembers()
: Promise<Member[]> {

  return [

    {
      id: "1",

      email:
        "admin@apisentinel.com",

      name:
        "Administrator",

      role:
        "ADMIN"
    },

    {
      id: "2",

      email:
        "analyst@apisentinel.com",

      name:
        "Security Analyst",

      role:
        "ANALYST"
    },

    {
      id: "3",

      email:
        "viewer@apisentinel.com",

      name:
        "Viewer User",

      role:
        "VIEWER"
    }

  ];

}