import {
  auth0
}
from "./auth0";

export async function getUser() {

  const session =
    await auth0.getSession();

  return {

  ...session?.user,

  role: "ADMIN"

};
}