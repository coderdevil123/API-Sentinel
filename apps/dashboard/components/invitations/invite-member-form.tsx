"use client";

import {
  useState
}
from "react";

export default function
InviteMemberForm() {

  const [
    email,
    setEmail
  ] = useState("");

  const [
    role,
    setRole
  ] = useState("VIEWER");

  function submit() {

    alert(

      `Invitation sent to ${email}
Role: ${role}`

    );

    setEmail("");

    setRole(
      "VIEWER"
    );

  }

  return (

    <div
      className="
      bg-zinc-950
      border
      border-zinc-800
      rounded-xl
      p-6
      space-y-4
      "
    >

      <h2
        className="
        text-xl
        font-semibold
        "
      >
        Invite Member
      </h2>

      <input

        value={email}

        onChange={
          e =>
            setEmail(
              e.target.value
            )
        }

        placeholder="Email"

        className="
        w-full
        rounded-lg
        bg-zinc-900
        border
        border-zinc-700
        px-4
        py-3
        "

      />

      <select

        value={role}

        onChange={
          e =>
            setRole(
              e.target.value
            )
        }

        className="
        w-full
        rounded-lg
        bg-zinc-900
        border
        border-zinc-700
        px-4
        py-3
        "

      >

        <option>
          VIEWER
        </option>

        <option>
          ANALYST
        </option>

        <option>
          ADMIN
        </option>

      </select>

      <button

        onClick={submit}

        className="
        px-5
        py-3
        rounded-lg
        bg-green-500
        text-black
        font-medium
        "

      >

        Send Invitation

      </button>

    </div>

  );

}