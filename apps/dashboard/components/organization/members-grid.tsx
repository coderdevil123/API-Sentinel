import {
  getOrganizationMembers
}
from "@/services/member.service";

import MemberCard
from "./member-card";

export default async function
MembersGrid() {

  const members =
    await getOrganizationMembers();

    if (
    members.length === 0
    ) {

    return (

        <div
        className="
        bg-zinc-950
        border
        border-zinc-800
        rounded-xl
        p-8
        text-center
        text-zinc-500
        "
        >

        No organization members found.

        </div>

    );

    }

  return (

    <div>

      <div
        className="
        flex
        items-center
        justify-between
        mb-6
        "
        >

        <h2
            className="
            text-2xl
            font-semibold
            "
        >
            Organization Members
        </h2>

        <span
            className="
            text-zinc-400
            "
        >

            {

            members.length

            }

            Members

        </span>

        </div>

      <div
        className="
        grid
        sm:grid-cols-2
        xl:grid-cols-3
        gap-6
        "
      >

        {

          members.map(

            member => (

              <MemberCard

                key={
                  member.id
                }

                member={
                  member
                }

              />

            )

          )

        }

      </div>

    </div>

  );

}