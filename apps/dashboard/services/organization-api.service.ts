import {
  Organization
}
from "@/types/organization";

import {
  getCurrentOrganization
}
from "@/lib/current-organization";

export async function
getOrganization()
: Promise<Organization> {

  return getCurrentOrganization();

}

export async function
updateOrganization(

  organization:
    Organization

){

  console.log(

    "Updating organization",

    organization

  );

  return true;

}

export async function
deleteOrganization(

  organizationId:
    string

){

  console.log(

    "Deleting organization",

    organizationId

  );

  return true;

}