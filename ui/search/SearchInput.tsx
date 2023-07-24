"use client";

import useSWR from "swr";
import useDebounce from "@/services/useDebounce";
import { useEffect, useState } from "react";
import { fetcher } from "@/services/fetcher";
import { useSearchResults } from "@/providers/searchResultsProvider";

export default function SearchInput() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useSearchResults();
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearch = useDebounce(searchText, 100);

  useEffect(() => {
    if (!searchText) {
      console.log("CLEARING TEXT");

      // @ts-ignore
      setSearchResults([]);
      return;
    }

    setIsLoading(true);

    async function search() {
      try {
        const response = await fetch(`/api/search?text=${searchText}`);
        const { results } = (await response.json()) as ISearchByNameResponse;

        if (results) {
          // @ts-ignore
          setSearchResults(results);
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error searching for heroes", error);
        setIsLoading(false);
      }
    }

    if (debouncedSearch) search();
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
