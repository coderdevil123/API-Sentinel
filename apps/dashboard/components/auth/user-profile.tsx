import {
  getUser
}
from "@/lib/auth";

import LoginButton
from "./login-button";

import LogoutButton
from "./logout-button";

export default async function UserProfile() {

  const user =
    await getUser();

  if (!user) {

    return (
      <LoginButton />
    );
  }

  return (

    <div
      className="
      flex
      items-center
      gap-3
      "
    >

      <img
        src={
          user.picture ||
          ""
        }
        alt="User"
        className="
        w-10
        h-10
        rounded-full
        "
      />

      <div>

        <p>
          {user.name}
        </p>

        <p
          className="
          text-xs
          text-zinc-500
          "
        >
          {user.email}
        </p>

      </div>

      <LogoutButton />

    </div>
  );
}