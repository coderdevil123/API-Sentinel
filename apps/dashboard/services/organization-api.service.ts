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