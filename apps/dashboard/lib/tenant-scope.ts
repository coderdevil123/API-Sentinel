import {
  getCurrentOrganization
}
from "./current-organization";

export async function
getTenantId() {

  const organization =
    await getCurrentOrganization();

  return organization.id;

}