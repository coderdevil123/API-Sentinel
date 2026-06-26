import {
  Member
}
from "@/types/member";

import RoleBadge
from "./role-badge";

export default function
MemberCard({
  member
}: {
  member: Member;
}) {

  return (

    <div
      className="
      bg-zinc-950
      border
      border-zinc-800
      rounded-xl
      p-4
      "
    >

      <h3
        className="
        font-semibold
        "
      >
        <div
            className="
            w-12
            h-12
            rounded-full
            bg-green-500
            flex
            items-center
            justify-center
            font-bold
            text-black
            mb-4
            "
            >

            {
                member.name
                .charAt(0)
            }

        </div>

        {member.name}
      </h3>

      <p
        className="
        text-sm
        text-zinc-400
        "
      >
        {member.email}
      </p>

      <p
        className="
        text-xs
        text-zinc-500
        mt-1
        "
        >

        Joined

        {

        new Date(
            member.joinedAt
        )
        .toLocaleDateString()

        }

        </p>

      <span
        className="
        inline-block
        mt-3
        px-2
        py-1
        rounded
        bg-zinc-800
        text-xs
        "
      >
        <RoleBadge role={member.role} />
      </span>

    </div>

  );

}