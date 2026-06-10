import DashboardLayout
from "@/components/layout/dashboard-layout";

import SeverityChart
from "@/components/analytics/severity-chart";

import RiskTrendChart
from "@/components/analytics/risk-trend-chart";

import {
  getSessions
}
from "@/services/api";

export default async function AnalyticsPage() {

  const sessions =
    await getSessions();

  return (

    <DashboardLayout>

      <div className="space-y-8">

        <div>

          <h1
            className="
            text-3xl
            font-bold
            "
          >
            Analytics
          </h1>

        </div>

        <SeverityChart
          sessions={sessions}
        />

        <RiskTrendChart
          sessions={sessions}
        />

      </div>

    </DashboardLayout>
  );
}