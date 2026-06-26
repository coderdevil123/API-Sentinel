import {
  Invitation
}
from "@/types/invitation";

import RoleBadge
from "../organization/role-badge";

import InvitationStatus
from "./invitation-status";

export default function
InvitationCard({
  invitation
}:{
  invitation: Invitation;
}){

  return(

    <div
      className="
      bg-zinc-950
      border
      border-zinc-800
      rounded-xl
      p-5
      space-y-3
      "
    >

      <div>

        <h3
          className="font-semibold"
        >

          {invitation.email}

        </h3>

        <p
          className="
          text-xs
          text-zinc-500
          "
        >

          Invited by

          {" "}

          {invitation.invitedBy}

          <p
            className="
            text-xs
            text-zinc-500
            "
            >

            Invited

            {

            new Date(
            invitation.invitedAt
            ).toLocaleDateString()

            }

            </p>

        </p>

      </div>

      <div
        className="
        flex
        gap-3
        "
      >

        <RoleBadge
          role={invitation.role}
        />

        <InvitationStatus
          status={invitation.status}
        />

      </div>

    </div>

  );

}