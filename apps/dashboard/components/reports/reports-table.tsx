import {
  Session
}
from "@/types/session";

import DownloadReportButton
from "./download-report-button";

export default function ReportsTable({
  sessions,
  canDownload
}: {
  sessions: Session[];
  canDownload: boolean;
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

      <table className="w-full">

        <thead>

          <tr
            className="
            text-zinc-400
            text-left
            "
          >
            <th>Target</th>
            <th>Risk</th>
            <th>Created</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {
            sessions.map(
              session => (

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
                    {
                      session.riskReport
                        ?.overallRisk
                    }
                  </td>

                  <td>
                    {
                      new Date(
                        session.createdAt
                      )
                      .toLocaleString()
                    }
                  </td>

                  <td>

                    {
                      canDownload ? (
                        <DownloadReportButton
                          scanId={
                            session.scanId
                          }
                        />
                      ) : (
                        <span
                          className="
                          text-zinc-500
                          "
                        >
                          Restricted
                        </span>
                      )
                    }

                  </td>

                </tr>

              )
            )
          }

        </tbody>

      </table>

    </div>
  );
}