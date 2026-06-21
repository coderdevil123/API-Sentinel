import {
  auth0
}
from "@/lib/auth0";

import {
  UserRole
}
from "@/types/role";

export async function getUserRole()
: Promise<UserRole> {

  const session =
    await auth0.getSession();

  if (!session?.user) {
    return "VIEWER";
  }

  const email =
    session.user.email;

  if (
    email ===
    "shubhangmishra094@gmail.com"
  ) {
    return "ADMIN";
  }

  return "VIEWER";

}