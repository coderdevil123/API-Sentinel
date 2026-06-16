import {
  getCurrentOrganization
}
from "@/lib/current-organization";

export default async function
OrganizationBadge() {

  const organization =
    await getCurrentOrganization();

  return (

    <div
      className="
      px-3
      py-1
      rounded-lg
      bg-zinc-800
      text-zinc-300
      text-xs
      "
    >

      {organization.name}

    </div>

  );

}