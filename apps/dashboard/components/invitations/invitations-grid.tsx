import {
  getInvitations
}
from "@/services/invitation.service";

import InvitationCard
from "./invitation-card";

import InvitationSummary
from "./invitation-summary";

export default async function
InvitationsGrid(){

  const invitations=
    await getInvitations();

  return(

    <div
      className="
      mt-6
      grid
      md:grid-cols-2
      gap-6
      "
    >
      <InvitationSummary
        invitations={invitations}
      />

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