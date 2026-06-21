import DashboardLayout
from "@/components/layout/dashboard-layout";

import MetricsGrid
from "@/components/dashboard/metrics-grid";

import {
  getSessions
}
from "@/services/api";

import RecentScansTable
from "@/components/scans/recent-scans-table";

import FindingsOverview
from "@/components/dashboard/findings-overview";

import SeverityChart
from "@/components/analytics/severity-chart";

import RiskTrendChart
from "@/components/analytics/risk-trend-chart";

import ExecutiveRiskPanel
from "@/components/dashboard/executive-risk-panel";

import ActivityFeed
from "@/components/dashboard/activity-feed";

import AutoRefresh
from "@/components/dashboard/auto-refresh";
import PlatformHealth from "@/components/dashboard/platform-health";

import Protected
from "@/components/auth/protected";

import {
  getCurrentUser
}
from "@/lib/current-user";
import { getUserRole } from "@/lib/user-role";

import CanAccess
from "@/components/auth/can-access";

import UserManagementPanel
from "@/components/admin/user-management-panel";

import OrganizationMembers
from "@/components/admin/organization-members";

import OrganizationOverview
from "@/components/organization/organization-overview";

export default async function HomePage() {

  const role =
  await getUserRole();
  const sessions =
  await getSessions();

  // console.log(
  //   "SESSIONS:",
  //   sessions
  // );

  return (

    <DashboardLayout>
      <AutoRefresh />

      <div
        className="
        space-y-8
        "
      >

        <div>

          <h1
            className="
            text-3xl
            font-bold
            "
          >
            Security Dashboard
          </h1>

          <p
            className="
            text-zinc-400
            mt-2
            "
          >
            Real-time API Security Monitoring
          </p>

        </div>

        <MetricsGrid
          sessions={sessions}
        />

        <OrganizationOverview />

        <PlatformHealth />

        <RecentScansTable
          sessions={sessions}
        />

        <FindingsOverview
          sessions={sessions}
        />

        <div
          className="
          grid
          lg:grid-cols-2
          gap-6
          "
          >

          <SeverityChart
            sessions={sessions}
          />

          <RiskTrendChart
            sessions={sessions}
          />

        </div>

        <div
          className="
          grid
          lg:grid-cols-2
          gap-6
          "
          >

          <Protected
            role={role}
            allow={[
              "ADMIN",
              "ANALYST"
            ]}
          >

            <ExecutiveRiskPanel
              sessions={sessions}
            />

          </Protected>

          <CanAccess
            role={role}
            permission="USER_MANAGE"
          >

            <UserManagementPanel />

            <CanAccess
              role={role}
              permission="USER_MANAGE"
            >

              <OrganizationMembers />

            </CanAccess>

          </CanAccess>

         <CanAccess
            role={role}
            permission="REPORT_READ"
          >

            <ActivityFeed
              sessions={sessions}
            />

          </CanAccess>

        </div>

      </div>

    </DashboardLayout>
  );
}