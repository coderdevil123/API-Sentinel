"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip
}
from "recharts";

import { Session }
from "@/types/session";

const COLORS = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e"
];

export default function SeverityChart({
  sessions
}: {
  sessions: Session[];
}) {

  const critical =
    sessions.reduce(
      (s, x) =>
        s +
        (
          x.scanResult
            ?.critical || 0
        ),
      0
    );

  const high =
    sessions.reduce(
      (s, x) =>
        s +
        (
          x.scanResult
            ?.high || 0
        ),
      0
    );

  const medium =
    sessions.reduce(
      (s, x) =>
        s +
        (
          x.scanResult
            ?.medium || 0
        ),
      0
    );

  const low =
    sessions.reduce(
      (s, x) =>
        s +
        (
          x.scanResult
            ?.low || 0
        ),
      0
    );

  const data = [

    {
      name: "Critical",
      value: critical
    },

    {
      name: "High",
      value: high
    },

    {
      name: "Medium",
      value: medium
    },

    {
      name: "Low",
      value: low
    }
  ];

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
        Severity Distribution
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

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              outerRadius={100}
            >

              {
                data.map(
                  (
                    _,
                    index
                  ) => (

                    <Cell
                      key={index}
                      fill={
                        COLORS[index]
                      }
                    />

                  )
                )
              }

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>

  );
}