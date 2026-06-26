import {
  Member
}
from "@/types/member";

export async function
getOrganizationMembers()
: Promise<Member[]> {

  return [

    {

      id:
        "1",

      name:
        "Shubhang Mishra",

      email:
        "admin@apisentinel.com",

      role:
        "ADMIN",

      joinedAt:
        "2026-06-01"

    },

    {

      id:
        "2",

      name:
        "Security Analyst",

      email:
        "analyst@apisentinel.com",

      role:
        "ANALYST",

      joinedAt:
        "2026-06-10"

    },

    {

      id:
        "3",

      name:
        "Read Only User",

      email:
        "viewer@apisentinel.com",

      role:
        "VIEWER",

      joinedAt:
        "2026-06-15"

    }

  ];

}