"use client";

import {
  Session
} from "@/types/session";

import ScanStatusBadge
from "./scan-status-badge";

import RiskBadge
from "../dashboard/risk-badge";

import Link from "next/link";

import {
  useSearch
}
from "@/components/dashboard/search-context";

import {
  useFilter
}
from "@/components/scans/filter-context";

import {
  formatDate
}
from "@/lib/format-date";

import {
  useSort
}
from "@/components/scans/sort-context";

import {
  useState
}
from "react";

export default function RecentScansTable({
  sessions
}: {
  sessions: Session[];
}) {

  const [
  page,
  setPage
] = useState(1);

const PAGE_SIZE = 10;

  const {
    sort
  } = useSort();

  const { search } = useSearch();

  const {
    filter
  } = useFilter();

  const filteredSessions =
  sessions
    .filter(
      session =>
        session.target
          .toLowerCase()
          .includes(
            search
              .toLowerCase()
          )
    )
    .filter(
      session => {

        if (
          filter === "ALL"
        ) {
          return true;
        }

        if (
          [
            "COMPLETED",
            "RUNNING",
            "FAILED"
          ].includes(filter)
        ) {

          return (
            session.status ===
            filter
          );
        }

        return (
          session.riskReport
            ?.overallRisk ===
          filter
        );
      }
    );

    const sortedSessions =
  [...filteredSessions];

if (
  sort === "latest"
) {

  sortedSessions.sort(
    (a, b) =>
      new Date(
        b.createdAt
      ).getTime()
      -
      new Date(
        a.createdAt
      ).getTime()
  );

}

if (
  sort === "oldest"
) {

  sortedSessions.sort(
    (a, b) =>
      new Date(
        a.createdAt
      ).getTime()
      -
      new Date(
        b.createdAt
      ).getTime()
  );

}

if (
  sort === "risk"
) {

  const riskOrder = {
    CRITICAL: 4,
    HIGH: 3,
    MEDIUM: 2,
    LOW: 1
  };

  sortedSessions.sort((a, b) => {

    const riskA =
      a.riskReport?.overallRisk ?? "LOW";

    const riskB =
      b.riskReport?.overallRisk ?? "LOW";

    return (
      riskOrder[
        riskB as keyof typeof riskOrder
      ]
      -
      riskOrder[
        riskA as keyof typeof riskOrder
      ]
    );
  });
}

    const totalPages =
    Math.max(
      1,
      Math.ceil(
        sortedSessions.length
        / PAGE_SIZE
      )
    );

  const paginatedSessions =
  sortedSessions.slice(
    (
      page - 1
    ) * PAGE_SIZE,

    page *
    PAGE_SIZE
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

          {
            paginatedSessions.length === 0 && (

              <tr>

                <td
                  colSpan={4}
                  className="
                  py-10
                  text-center
                  text-zinc-500
                  "
                >
                  No scans found
                </td>

              </tr>

            )
          }

          {paginatedSessions.map(
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

                  <Link
                    href={`/scans/${session.scanId}`}
                    className="
                    text-blue-400
                    hover:text-blue-300
                    hover:underline
                    "
                  >
                    {session.target}
                  </Link>

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
                    formatDate(session.createdAt)
                  }
                </td>

              </tr>

            )
          )}

        </tbody>

      </table>

      <div
        className="
        flex
        justify-end
        gap-4
        mt-6
        "
      >

        <button
          onClick={() =>
            setPage(
              Math.max(
                1,
                page - 1
              )
            )
          }
        >
          Previous
        </button>

        <span>

          {page}
          /
          {totalPages}

        </span>

        <button
          onClick={() =>
            setPage(
              Math.min(
                totalPages,
                page + 1
              )
            )
          }
        >
          Next
        </button>

      </div>

    </div>
  );
}