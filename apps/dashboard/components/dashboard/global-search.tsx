"use client";

import {
  Search
}
from "lucide-react";

import {
  useState
}
from "react";

import {
  useSearch
}
from "./search-context";

export default function GlobalSearch() {

  const {
  search,
  setSearch
} = useSearch();

  return (

    <div
      className="
      relative
      "
    >

      <Search
        className="
        absolute
        left-3
        top-3
        h-4
        w-4
        text-zinc-500
        "
      />

      <input
        value={search}
        onChange={
          e =>
            setSearch(
              e.target.value
            )
        }
        placeholder="Search targets..."
        className="
        bg-zinc-950
        border
        border-zinc-800
        rounded-lg
        pl-10
        pr-4
        py-2
        text-sm
        w-72
        "
      />

    </div>
  );
}