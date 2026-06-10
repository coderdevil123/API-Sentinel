"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
}
from "recharts";

import { Session }
from "@/types/session";

export default function RiskTrendChart({
  sessions
}: {
  sessions: Session[];
}) {

  const data =
    sessions
      .slice()
      .reverse()
      .map(
        (
          session,
          index
        ) => ({
          scan:
            index + 1,

          risk:
            session
              .riskReport
              ?.riskScore || 0
        })
      );

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
        text-lg
        font-semibold
        mb-4
        "
      >
        Risk Trend
      </h2>

      <div
        className="
        h-[300px]
        "
      >

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart
            data={data}
          >

            <XAxis
              dataKey="scan"
            />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="risk"
              stroke="#22c55e"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  );
}