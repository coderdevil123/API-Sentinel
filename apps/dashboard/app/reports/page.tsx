import DashboardLayout
from "@/components/layout/dashboard-layout";

import {
  getSessions
}
from "@/services/api";

import ReportsTable from "@/components/reports/reports-table";

export default async function ReportsPage() {

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
            Reports
          </h1>

          <p
            className="
            text-zinc-400
            mt-2
            "
          >
            Manage generated reports
          </p>

        </div>

        <ReportsTable
          sessions={sessions}
        />

      </div>

    </DashboardLayout>
  );
}