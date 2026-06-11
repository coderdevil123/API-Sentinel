"use client";

import {
  motion
}
from "framer-motion";

import { Session } from "@/types/session";

export default function ExecutiveRiskPanel({
  sessions
}: {
  sessions: Session[];
}) {

  const latest =
    sessions[0];

  if (!latest?.riskReport)
    return null;

  return (

    <motion.div
      whileHover={{
        y: -4
      }}
      transition={{
        duration: 0.15
      }}
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
        mb-4
        "
      >
        Executive Risk Summary
      </h2>

      <div
        className="
        space-y-4
        "
      >

        <div>
          <p className="text-zinc-500">
            Overall Risk
          </p>

          <h3
            className="
            text-red-500
            text-3xl
            font-bold
            "
          >
            {latest.riskReport.overallRisk}
          </h3>
        </div>

        <div>
          <p className="text-zinc-500">
            Attack Surface
          </p>

          <h3
            className="
            text-orange-400
            text-xl
            font-semibold
            "
          >
            {latest.riskReport.attackSurface}
          </h3>
        </div>

        <div>
          <p className="text-zinc-500">
            Business Impact
          </p>

          <p className="text-zinc-300">
            {latest.riskReport.businessImpact}
          </p>
        </div>

      </div>

    </motion.div>
  );
}