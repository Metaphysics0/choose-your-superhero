"use client";
import { useState } from "react";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

export default function Search() {
  const [searchText, setSearchText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<ISuperhero[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  return (
    <div className="w-1/2 m-auto">
      <SearchInput
        searchText={searchText}
        setSearchText={setSearchText}
        setSearchResults={setSearchResults}
        setIsLoading={setIsLoading}
        setErrorMessage={setErrorMessage}
      />
      <SearchResults
        searchResults={searchResults}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
    </div>
  );
}