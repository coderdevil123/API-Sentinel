import {
  getCurrentOrganization
}
from "@/lib/current-organization";

import {
  getOrganizationStats
}
from "@/services/organization-stats.service";

export default async function
OrganizationOverview() {

  const organization =
    await getCurrentOrganization();

  const stats =
    await getOrganizationStats();

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
        Organization Overview
      </h2>

      <div
        className="
        space-y-2
        "
      >

        <p>

          Name:
          {" "}
          {organization.name}

        </p>

        <p>

          Plan:
          {" "}
          {organization.plan}

        </p>

        <p>

          Members:
          {" "}
          {stats.members}

        </p>

        <p>

          Scans:
          {" "}
          {stats.scans}

        </p>

      </div>

    </div>

  );

}