"use client";
import { useState } from "react";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import SelectedHeroesHeader from "../SelectedHeroesHeader";

export default function Search() {
  const [searchText, setSearchText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<ISuperhero[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  return (
    <div className="sm:w-1/2 m-auto relative w-3/4">
      <SelectedHeroesHeader />
      <SearchInput
        searchText={searchText}
        isLoading={isLoading}
        searchResults={searchResults}
        setSearchText={setSearchText}
        setSearchResults={setSearchResults}
        setIsLoading={setIsLoading}
        setErrorMessage={setErrorMessage}
      />
      <SearchResults
        setSearchResults={setSearchResults}
        searchResults={searchResults}
        errorMessage={errorMessage}
      />
    </div>
  );
}
