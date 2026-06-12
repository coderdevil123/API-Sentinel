import {
  AppUser
}
from "@/types/user";

export async function getCurrentUser()
: Promise<AppUser> {

  return {

    id: "1",

    email:
      "admin@apisentinel.com",

    name:
      "Administrator",

    role:
      "ADMIN"
  };
}