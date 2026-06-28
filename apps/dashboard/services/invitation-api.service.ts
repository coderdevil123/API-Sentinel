import {
  Invitation
}
from "@/types/invitation";

import {
  getInvitations
}
from "./invitation.service";

export async function
listInvitations()
: Promise<Invitation[]>{

  return getInvitations();

}

export async function
createInvitation(

  invitation:
    Invitation

){

  console.log(

    invitation

  );

}

export async function
cancelInvitation(

  invitationId:
    string

){

  console.log(

    invitationId

  );

}

