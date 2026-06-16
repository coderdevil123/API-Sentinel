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

  console.log(
    "SESSION USER:",
    session?.user
  );

  const roles =
    (
      session?.user as any
    )?.[
      "https://api-sentinel/roles"
    ] || [];

  console.log(
    "ROLES:",
    roles
  );

  if (
    roles.includes(
      "ADMIN"
    )
  ) {
    return "ADMIN";
  }

  if (
    roles.includes(
      "ANALYST"
    )
  ) {
    return "ANALYST";
  }

  return "VIEWER";
}