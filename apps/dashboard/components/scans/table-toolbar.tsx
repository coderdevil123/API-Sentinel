"use client";

import ScanFilters
from "./scan-filters";

import GlobalSearch
from "../dashboard/global-search";

export default function TableToolbar() {

  return (

    <div
      className="
      flex
      flex-col
      lg:flex-row
      gap-4
      justify-between
      items-start
      lg:items-center
      mb-6
      "
    >

      <GlobalSearch />

      <ScanFilters />

    </div>
  );
}