import {
  OrganizationStats
}
from "@/types/organization-stats";

export async function
getOrganizationStats()
: Promise<OrganizationStats> {

  return {

    members: 3,

    scans: 42,

    findings: 137,

    reports: 18

  };

}