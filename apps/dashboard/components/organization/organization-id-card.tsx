import {
  getCurrentOrganization
}
from "@/lib/current-organization";

export default async function
OrganizationIdCard(){

  const organization=
    await getCurrentOrganization();

  return(

    <div
      className="
      bg-zinc-950
      border
      border-zinc-800
      rounded-xl
      p-6
      "
    >

      <p
        className="
        text-zinc-400
        "
      >

        Organization ID

      </p>

      <h2
        className="
        font-mono
        text-green-500
        mt-2
        "
      >

        {organization.id}

      </h2>

    </div>

  );

}