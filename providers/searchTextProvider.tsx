"use client";

import React from "react";

const SearchText = React.createContext<
  [string, React.Dispatch<React.SetStateAction<string>>] | ""
>("");

export function SearchTextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchText, setSearchText] = React.useState<string>("");
  return (
    <SearchText.Provider value={[searchText, setSearchText]}>
      {children}
    </SearchText.Provider>
  );
}

export function useSearchText() {
  const context = React.useContext(SearchText);
  if (context === undefined) {
    throw new Error("useSearchText must be used within a SearchTextProvider");
  }
  return context;
}
