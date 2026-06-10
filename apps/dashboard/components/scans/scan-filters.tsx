"use client";

import {
  useFilter
}
from "./filter-context";

export default function ScanFilters() {

  const filters = [

    "ALL",

    "COMPLETED",

    "RUNNING",

    "FAILED",

    "CRITICAL",

    "HIGH",

    "MEDIUM",

    "LOW"
  ];

  const {
    filter: filterState,
    setFilter
    } = useFilter();

  return (

    <div
      className="
      flex
      gap-2
      flex-wrap
      "
    >

      {
        filters.map(
          filter => (

            <button
            key={filter}

            onClick={() =>
                setFilter(filter)
            }

            className={`
                px-4
                py-2
                rounded-lg
                border
                text-sm

                ${
                filter ===
                filterState

                    ? `
                    bg-blue-600
                    border-blue-600
                    text-white
                    `

                    : `
                    bg-zinc-900
                    border-zinc-800
                    hover:bg-zinc-800
                    `
                }
            `}
            >
            {filter}
            </button>

          )
        )
      }

    </div>
  );
}