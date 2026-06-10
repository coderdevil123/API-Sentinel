import DashboardLayout
from "@/components/layout/dashboard-layout";

import {
  getSession
}
from "@/services/session.service";

import ScanDetails
from "@/components/scans/scan-details";

export default async function ScanPage({
  params
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const {
    id
  } = await params;

  const session =
    await getSession(id);

  return (

    <DashboardLayout>

      <ScanDetails
        session={session}
      />

    </DashboardLayout>
  );
}