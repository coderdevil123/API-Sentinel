import {
  Invitation
}
from "@/types/invitation";

import RoleBadge
from "../organization/role-badge";

import InvitationStatus
from "./invitation-status";
import { Mail } from "lucide-react";

import InvitationActions
from "./invitation-actions";

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

        <div
          className="
          flex
          items-center
          gap-2
          "
        >
          <Mail
            size={18}
            className="text-green-500"
          />
        </div>

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

          <p>

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

        <div
        className="
        flex
        gap-2
        mt-3
        "
        >

          <button
            className="
            px-3
            py-2
            rounded-lg
            bg-zinc-800
            text-sm
            "
            >

            Resend

          </button>

          <button
            className="
            px-3
            py-2
            rounded-lg
            bg-red-500/20
            text-red-400
            text-sm
            "
            >

            Cancel

          </button>

        </div>

        <InvitationActions
          invitation={invitation}
        />

      </div>

    </div>

  );

}