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

export default async function HomePage() {

  const sessions =
  await getSessions();

  // console.log(
  //   "SESSIONS:",
  //   sessions
  // );

  return (

    <DashboardLayout>

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

        <RecentScansTable
          sessions={sessions}
        />

        <FindingsOverview
          sessions={sessions}
        />

      </div>

    </DashboardLayout>
  );
}