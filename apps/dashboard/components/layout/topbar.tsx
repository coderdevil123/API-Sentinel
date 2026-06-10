"use client";

import {
  Bell,
  Search
} from "lucide-react";
import GlobalSearch from "../dashboard/global-search";

export default function Topbar() {

  return (

    <header
      className="
      h-16
      border-b
      border-zinc-800
      bg-zinc-950
      flex
      items-center
      justify-between
      px-6
      "
    >

      <div
        className="
        flex
        items-center
        gap-2
        text-zinc-400
        "
      >
        <GlobalSearch />
      </div>

      <div
        className="
        flex
        items-center
        gap-5
        "
      >
        <Bell
          size={18}
          className="text-zinc-400"
        />

        <div
          className="
          w-8
          h-8
          rounded-full
          bg-green-500
          "
        />
      </div>

    </header>
  );
}