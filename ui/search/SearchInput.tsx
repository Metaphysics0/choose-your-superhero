"use client";

import useDebounce from "@/services/useDebounce";
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { Tooltip } from "react-tooltip";
import LoaderSpinner from "../utilities/LoaderSpinner";

const debounceTimeInMs = 500;

export default function SearchInput({
  searchText,
  searchResults,
  setSearchText,
  setSearchResults,
  setIsLoading,
  setErrorMessage,
  isLoading,
}: ISearchInputProps) {
  const debouncedSearch = useDebounce(searchText, debounceTimeInMs);

  useEffect(() => {
    if (!searchText) {
      setSearchResults([]);
      setErrorMessage("");
      return;
    }

    setIsLoading(true);

    async function search() {
      try {
        const response = await fetch(`/api/search?text=${searchText}`);
        const { results } = (await response.json()) as ISearchByNameResponse;

        if (results?.length > 0) {
          setSearchResults(results);
          setErrorMessage("");
        } else {
          setErrorMessage("No heroes found for " + searchText + " 😔");
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error searching for heroes", error);
        setErrorMessage("There was a problem 😔");
        setIsLoading(false);
      }
    }

    if (debouncedSearch) search();

    // We only care about the debounce here, not every time searchText changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  function clearResultsAndSearchText(): void {
    setSearchResults([]);
    setSearchText("");
  }

  return (
    <form className="flex items-center">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 text-lg left-0 flex items-center pl-3 pointer-events-none">
          🦸
        </div>
        <input
          type="text"
          id="simple-search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Poison Ivy..."
          required
        />
        {isLoading ? (
          <div className="absolute inset-y-0 right-0 flex items-center">
            <LoaderSpinner />
          </div>
        ) : (
          ""
        )}
        {!isLoading && (searchText || searchResults?.length) ? (
          <div
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer hover:text-red-500"
            onClick={clearResultsAndSearchText}
            data-tooltip-id="clear-results-and-search-text-tooltip"
            data-tooltip-content="Clear search results and text"
            data-tooltip-place="right"
          >
            <Icon icon="ph:x-bold" />
            <Tooltip id="clear-results-and-search-text-tooltip" />
          </div>
        ) : (
          ""
        )}
      </div>
    </form>
  );
}
