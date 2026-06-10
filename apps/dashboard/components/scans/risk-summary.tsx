import { Session }
from "@/types/session";

import {
  getRiskClasses
}
from "@/lib/risk-colors";

export default function RiskSummary({
  session
}: {
  session: Session;
}) {

  const risk =
    session.riskReport;

  if (!risk)
    return null;

  const riskClasses =
    getRiskClasses(risk.overallRisk);

    const attackSurfaceClasses =
        getRiskClasses(
            risk.attackSurface
    );

  return (

    <div
      className="
      grid
      md:grid-cols-4
      gap-6
      "
    >

      <div
        className="
        bg-zinc-950
        border
        border-zinc-800
        rounded-xl
        p-6
        "
      >
        <p>Risk Score</p>

        <h2
          className="
          text-4xl
          font-bold
          mt-2
          "
        >
          {risk.riskScore}
        </h2>
      </div>

      <div
        className="
        bg-zinc-950
        border
        border-zinc-800
        rounded-xl
        p-6
        "
      >
        <p>Overall Risk</p>

        <h2
        className={`
            text-3xl
            font-bold
            mt-2
            ${riskClasses}
        `}
        >
        {risk.overallRisk}
        </h2>
      </div>

      <div
        className="
        bg-zinc-950
        border
        border-zinc-800
        rounded-xl
        p-6
        "
      >
        <p>Attack Surface</p>

        <h2
        className={`
            text-3xl
            font-bold
            mt-2
            ${attackSurfaceClasses}
        `}
        >
        {risk.attackSurface}
        </h2>
      </div>

      <div
        className="
        bg-zinc-950
        border
        border-zinc-800
        rounded-xl
        p-6
        "
      >
        <p>Findings</p>

        <h2
          className="
          text-3xl
          font-bold
          mt-2
          "
        >
          {risk.totalFindings}
        </h2>
      </div>

    </div>

  );
}