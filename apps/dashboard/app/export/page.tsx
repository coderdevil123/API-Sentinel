import DashboardLayout
from "@/components/layout/dashboard-layout";

import {
  redirect
}
from "next/navigation";

import {
  getUserRole
}
from "@/lib/user-role";

import {
  canExport
}
from "@/lib/rbac";

export default async function ExportPage() {

  const role =
    await getUserRole();

  if (!canExport(role)) {
    redirect("/");
  }

  return (

    <DashboardLayout>

      <div
        className="
        space-y-8
        "
      >

        <h1
          className="
          text-3xl
          font-bold
          "
        >
          Export Center
        </h1>

        <div
          className="
          grid
          md:grid-cols-3
          gap-6
          "
        >

          <button
            className="
            bg-zinc-950
            border
            border-zinc-800
            rounded-xl
            p-6
            "
          >
            Export PDF
          </button>

          <button
            className="
            bg-zinc-950
            border
            border-zinc-800
            rounded-xl
            p-6
            "
          >
            Export JSON
          </button>

          <button
            className="
            bg-zinc-950
            border
            border-zinc-800
            rounded-xl
            p-6
            "
          >
            Export Markdown
          </button>

        </div>

      </div>

    </DashboardLayout>
  );
}