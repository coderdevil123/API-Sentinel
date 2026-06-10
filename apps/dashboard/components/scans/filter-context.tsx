"use client";

import {
  createContext,
  useContext,
  useState
} from "react";

const FilterContext =
  createContext<any>(null);

export function FilterProvider({
  children
}: {
  children: React.ReactNode;
}) {

  const [
    filter,
    setFilter
  ] = useState("ALL");

  return (

    <FilterContext.Provider
      value={{
        filter,
        setFilter
      }}
    >
      {children}
    </FilterContext.Provider>

  );
}

export function useFilter() {

  return useContext(
    FilterContext
  );
}