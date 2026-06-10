import DashboardLayout
from "@/components/layout/dashboard-layout";

import RecentScansTable
from "@/components/scans/recent-scans-table";

import ScanFilters
from "@/components/scans/scan-filters";

import {
  getSessions
}
from "@/services/api";

import TableToolbar
from "@/components/scans/table-toolbar";

export default async function ScansPage() {

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
            Scan Management
          </h1>

          <p
            className="
            text-zinc-400
            mt-2
            "
          >
            View and manage all scans
          </p>

        </div>

        <TableToolbar />

        <RecentScansTable
          sessions={sessions}
        />

      </div>

    </DashboardLayout>
  );
}