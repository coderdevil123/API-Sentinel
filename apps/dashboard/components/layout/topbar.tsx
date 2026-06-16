// "use client";

import OrganizationBadge
from "@/components/auth/organization-badge";

import {
  Bell,
  Search
} from "lucide-react";
import GlobalSearch from "../dashboard/global-search";

import UserProfile
from "@/components/auth/user-profile";

import TopbarClient
from "./topbar-client";

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
        <TopbarClient />
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
         <OrganizationBadge />
        <UserProfile />
      </div>

    </header>
  );
}