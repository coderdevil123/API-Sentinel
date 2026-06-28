"use client";

import { Invitation }
from "@/types/invitation";

export default function InvitationActions({
  invitation
}:{
  invitation: Invitation;
}){

  function resend(){

    alert(
      "Invitation resent to "
      + invitation.email
    );

  }

  function revoke(){

    alert(
      "Invitation revoked."
    );

  }

  if(
    invitation.status
    !==
    "PENDING"
  ){

    return null;

  }

  return(

    <div
      className="
      flex
      gap-2
      mt-4
      "
    >

      <button
        onClick={resend}
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
        onClick={revoke}
        className="
        px-3
        py-2
        rounded-lg
        bg-red-500/20
        text-red-400
        text-sm
        "
      >
        Revoke
      </button>

    </div>

  );

}