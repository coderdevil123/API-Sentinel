import { Session }
from "@/types/session";

import DiscoveryTable
from "./discovery-table";

import FindingsTable
from "./findings-table";

import RiskSummary
from "./risk-summary";

export default function ScanDetails({
  session
}: {
  session: Session;
}) {

  return (

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
          Scan Details
        </h1>

        <p
          className="
          text-zinc-500
          mt-2
          "
        >
          {session.scanId}
        </p>

      </div>

      <a
        href={`http://localhost:7000/api/reports/${session.scanId}/download`}
        target="_blank"
        className="
        inline-flex
        mt-4
        px-4
        py-2
        rounded-lg
        bg-blue-600
        hover:bg-blue-500
        "
        >
        Download Report
      </a>

      <RiskSummary
        session={session}
      />

      <DiscoveryTable
        session={session}
      />

      <FindingsTable
        session={session}
      />

    </div>
  );
}