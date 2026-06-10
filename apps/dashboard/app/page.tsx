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

export default async function HomePage() {

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

          <ExecutiveRiskPanel
            sessions={sessions}
          />

          <ActivityFeed
            sessions={sessions}
          />

        </div>

      </div>

    </DashboardLayout>
  );
}