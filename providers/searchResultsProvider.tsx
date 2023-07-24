"use client";

import React from "react";

const SearchResults = React.createContext<
  [ISuperhero[], React.Dispatch<React.SetStateAction<ISuperhero[]>>] | []
>([]);

export function SearchResultsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchResults, setSearchResults] = React.useState<ISuperhero[]>([]);
  return (
    <SearchResults.Provider value={[searchResults, setSearchResults]}>
      {children}
    </SearchResults.Provider>
  );
}

export function useSearchResults() {
  const context = React.useContext(SearchResults);
  if (context === undefined) {
    throw new Error(
      "useSearchResults must be used within a SearchResultsProvider!"
    );
  }
  return context;
}
