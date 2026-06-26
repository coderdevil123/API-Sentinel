"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  Shield,
  BarChart3,
  FileText,
  Settings,
  Building2,
  UserPlus
} from "lucide-react";

const items = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard
  },
  {
    name: "Scans",
    href: "/scans",
    icon: Shield
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3
  },
  {
    name: "Reports",
    href: "/reports",
    icon: FileText
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings
  },
  {
    name: "Exports",
    href: "/export",
    icon: FileText
  },
  {
    name: "Organization",
    href: "/organization",
    icon: Building2
  },
  {
    name:"Invitations",
    href:"/invitations",
    icon:UserPlus
  }
];

export default function Sidebar() {

  return (

    <aside
      className="
      w-64
      bg-zinc-950
      border-r
      border-zinc-800
      h-screen
      flex
      flex-col
      "
    >

      <div
        className="
        p-6
        text-xl
        font-bold
        text-green-500
        "
      >
        API-Sentinel
      </div>

      <nav
        className="
        flex-1
        px-3
        space-y-2
        "
      >
        {
          items.map(
            item => {

              const Icon =
                item.icon;

              return (

                <Link
                  key={item.name}
                  href={item.href}
                  className="
                  flex
                  items-center
                  gap-3
                  px-3
                  py-3
                  rounded-lg
                  text-zinc-300
                  hover:bg-zinc-900
                  hover:text-white
                  transition
                  "
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              );
            }
          )
        }
      </nav>

    </aside>
  );
}