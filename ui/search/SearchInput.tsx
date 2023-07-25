"use client";

import useDebounce from "@/services/useDebounce";
import { useEffect } from "react";

export default function SearchInput({
  searchText,
  setSearchText,
  setSearchResults,
  setIsLoading,
  setErrorMessage,
}: ISearchInputProps) {
  const debouncedSearch = useDebounce(searchText, 100);

  useEffect(() => {
    if (!searchText) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);

    async function search() {
      try {
        const response = await fetch(`/api/search?text=${searchText}`);
        const { results } = (await response.json()) as ISearchByNameResponse;

        if (results) {
          console.log("RESULTS", results);

          setSearchResults(results);
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

  return (
    <form className="flex items-center">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          🦸
        </div>
        <input
          type="text"
          id="simple-search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search superheros..."
          required
        />
      </div>
    </form>
  );
}
