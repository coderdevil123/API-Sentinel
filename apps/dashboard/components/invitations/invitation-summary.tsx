import {
  Invitation
}
from "@/types/invitation";

export default function
InvitationSummary({
  invitations
}:{
  invitations:
    Invitation[];
}){

  const pending=
    invitations.filter(
      i=>
      i.status==="PENDING"
    ).length;

  const accepted=
    invitations.filter(
      i=>
      i.status==="ACCEPTED"
    ).length;

  const expired=
    invitations.filter(
      i=>
      i.status==="EXPIRED"
    ).length;

  return(

    <div
      className="
      grid
      grid-cols-3
      gap-4
      "
    >

      <div
        className="
        bg-zinc-950
        border
        border-zinc-800
        rounded-xl
        p-5
        "
      >

        <p
          className="text-zinc-400"
        >
          Pending
        </p>

        <h2
          className="
          text-3xl
          font-bold
          "
        >
          {pending}
        </h2>

      </div>

      <div
        className="
        bg-zinc-950
        border
        border-zinc-800
        rounded-xl
        p-5
        "
      >

        <p
          className="text-zinc-400"
        >
          Accepted
        </p>

        <h2
          className="
          text-3xl
          font-bold
          "
        >
          {accepted}
        </h2>

      </div>

      <div
        className="
        bg-zinc-950
        border
        border-zinc-800
        rounded-xl
        p-5
        "
      >

        <p
          className="text-zinc-400"
        >
          Expired
        </p>

        <h2
          className="
          text-3xl
          font-bold
          "
        >
          {expired}
        </h2>

      </div>

    </div>

  );

}