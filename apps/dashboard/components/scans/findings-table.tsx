import { Session }
from "@/types/session";

import {
  getRiskClasses
}
from "@/lib/risk-colors";

export default function FindingsTable({
  session
}: {
  session: Session;
}) {

  const findings =
    session.scanResult
      ?.findings || [];

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
        Security Findings
      </h2>

      <div
        className="
        space-y-4
        "
      >

        {
          findings.map(
            (
              finding: any,
              index: number
            ) => (

              <div
                key={index}
                className="
                border
                border-zinc-800
                rounded-lg
                p-4
                "
              >

                <div
                  className="
                  flex
                  justify-between
                  "
                >

                  <h3
                    className="
                    font-semibold
                    "
                  >
                    {
                      finding.category
                    }
                  </h3>

                  <span
                    className={`
                      px-2
                      py-1
                      rounded-md
                      text-xs
                      font-semibold
                      ${getRiskClasses(finding.severity)}
                    `}
                  >
                    {
                      finding.severity
                    }
                  </span>

                </div>

                <p
                  className="
                  text-zinc-400
                  mt-3
                  "
                >
                  {
                    finding.endpoint
                  }
                </p>

                <p
                  className="
                  text-zinc-500
                  mt-2
                  "
                >
                  {
                    finding.recommendation
                  }
                </p>

              </div>

            )
          )
        }

      </div>

    </div>
  );
}