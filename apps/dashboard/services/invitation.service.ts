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
        "futureanalyst@company.com",

      role:
        "ANALYST",

      status:
        "PENDING"
    }

  ];

}