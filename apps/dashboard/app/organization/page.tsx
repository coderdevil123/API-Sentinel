import DashboardLayout
from "@/components/layout/dashboard-layout";

import MembersGrid
from "@/components/organization/members-grid";

import {
  redirect
}
from "next/navigation";

import {
  getUserRole
}
from "@/lib/user-role";

import {
  canManageUsers
}
from "@/lib/rbac";

import SubscriptionCard
from "@/components/organization/subscription-card";

export default async function
OrganizationPage() {

  const role =
    await getUserRole();

  if (
    !canManageUsers(
      role
    )
  ) {

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
          Organization
        </h1>

        <MembersGrid />
        
        <SubscriptionCard />

      </div>

    </DashboardLayout>

  );

}