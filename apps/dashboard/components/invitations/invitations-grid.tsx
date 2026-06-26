import {
  getInvitations
}
from "@/services/invitation.service";

import InvitationCard
from "./invitation-card";

export default async function
InvitationsGrid(){

  const invitations=
    await getInvitations();

  return(

    <div
      className="
      grid
      md:grid-cols-2
      gap-6
      "
    >

      {

        invitations.map(

          invitation=>(

            <InvitationCard

              key={
                invitation.id
              }

              invitation={
                invitation
              }

            />

          )

        )

      }

    </div>

  );

}