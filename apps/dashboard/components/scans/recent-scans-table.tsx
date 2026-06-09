import {
  Session
} from "@/types/session";

import ScanStatusBadge
from "./scan-status-badge";

import RiskBadge
from "../dashboard/risk-badge";

export default function RecentScansTable({
  sessions
}: {
  sessions: Session[];
}) {

  return (

    <div
      className="
      bg-zinc-950
      border
      border-zinc-800
      rounded-xl
      p-6
      "
    >

      <h2
        className="
        text-xl
        font-semibold
        mb-6
        "
      >
        Recent Scans
      </h2>

      <table
        className="
        w-full
        "
      >

        <thead>

          <tr
            className="
            text-left
            text-zinc-400
            "
          >

            <th>Target</th>
            <th>Status</th>
            <th>Risk</th>
            <th>Created</th>

          </tr>

        </thead>

        <tbody>

          {sessions.map(
            (session) => (

              <tr
                key={session.scanId}
                className="
                border-t
                border-zinc-800
                "
              >

                <td
                  className="py-4"
                >
                  {session.target}
                </td>

                <td>

                <ScanStatusBadge
                    status={session.status}
                />

                </td>

                <td>

  <RiskBadge
    risk={
      session.riskReport
        ?.overallRisk || "LOW"
    }
  />

</td>

                <td>
                  {
                    new Date(
                      session.createdAt
                    )
                    .toLocaleString()
                  }
                </td>

              </tr>

            )
          )}

        </tbody>

      </table>

    </div>
  );
}