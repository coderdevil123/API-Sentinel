import {
  OrganizationFeature
}
from "@/types/organization-feature";

export async function
getFeatures()
: Promise<OrganizationFeature[]>{

  return [

    {

      id:"1",

      name:
        "API Discovery",

      enabled:true

    },

    {

      id:"2",

      name:
        "Scheduled Scans",

      enabled:true

    },

    {

      id:"3",

      name:
        "Team Management",

      enabled:true

    },

    {

      id:"4",

      name:
        "SSO",

      enabled:false

    }

  ];

}