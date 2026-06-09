import MetricCard
from "./metric-card";

import {
  Session
}
from "@/types/session";

export default function DashboardStats({
  sessions
}: {
  sessions: Session[];
}) {

  const totalScans =
    sessions.length;

  const criticalFindings =
    sessions.reduce(
      (sum, session) =>
        sum +
        (
          session.scanResult
            ?.critical || 0
        ),
      0
    );

  const targets =
    new Set(
      sessions.map(
        s => s.target
      )
    ).size;

  const latestRiskScore =
    sessions[0]
      ?.riskReport
      ?.riskScore || 0;

    // console.log(
    //     "Dashboard Stats Sessions:",
    //     sessions.length
    // );

  return (

    <div
      className="
      grid
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-4
      gap-6
      "
    >

      <MetricCard
        title="Total Scans"
        value={totalScans}
      />

      <MetricCard
        title="Critical Findings"
        value={criticalFindings}
      />

      <MetricCard
        title="Risk Score"
        value={latestRiskScore}
      />

      <MetricCard
        title="Targets"
        value={targets}
      />

    </div>
  );
}