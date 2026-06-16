import {
  auth0
}
from "./auth0";

import {
  getUserRole
}
from "./user-role";

export async function getUser() {

  const session =
    await auth0.getSession();

  if (!session?.user) {
    return null;
  }

  const role =
    await getUserRole();

  return {
    ...session.user,
    role
  };
}