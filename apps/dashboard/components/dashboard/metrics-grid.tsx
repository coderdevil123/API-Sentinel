import {
  Session
}
from "@/types/session";

import DashboardStats
from "./dashboard-stats";

export default function MetricsGrid({
  sessions
}: {
  sessions: Session[];
}) {

  return (
    <DashboardStats
      sessions={sessions}
    />
  );
}