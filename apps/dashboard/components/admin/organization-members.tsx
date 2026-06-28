import {
  getOrganizationMembers
}
from "@/services/member.service";

export default async function
OrganizationMembers() {

  const members =
    await getOrganizationMembers();

  return (

    <div
      className="
      bg-zinc-950
      border
      border-zinc-800
      rounded-xl
      p-6
      "
    >

      <h2
        className="
        text-xl
        font-semibold
        mb-4
        "
      >
        Organization Members
      </h2>

      <div
        className="
        space-y-3
        "
      >

        {
          members.map(
            member => (

              <div
                key={
                  member.id
                }
                className="
                flex
                justify-between
                border-b
                border-zinc-800
                pb-2
                "
              >

                <span>

                  {member.name}

                </span>

                <span
                  className="
                  text-zinc-400
                  "
                >

                  {member.role}

                </span>

              </div>

            )
          )
        }

      </div>

    </div>

  );

}