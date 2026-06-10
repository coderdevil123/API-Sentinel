"use client";

import {
  createContext,
  useContext,
  useState
}
from "react";

const SortContext =
  createContext<any>(null);

export function SortProvider({
  children
}: {
  children: React.ReactNode;
}) {

  const [
    sort,
    setSort
  ] = useState(
    "latest"
  );

  return (

    <SortContext.Provider
      value={{
        sort,
        setSort
      }}
    >
      {children}
    </SortContext.Provider>

  );
}

export function useSort() {

  return useContext(
    SortContext
  );
}