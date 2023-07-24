"use client";
import { useSearchResults } from "@/providers/searchResultsProvider";

export default function SearchResults() {
  const [results = [], setResults] = useSearchResults();
  console.log("results", results);

  if (results.length === 0) return;
  return results.map(searchResult);
}

function searchResult(result: ISuperhero, key: number) {
  return (
    <div
      key={key}
      className="flex shadow-lg bg-slate-200 border-b min-h-max border-slate-300 p-1 items-center"
    >
      <p className="mr-2">{key + 1}.</p>
      <div>
        <strong>{result.name}</strong>
        <p className="italic font-thin">{result.biography["full-name"]}</p>
      </div>
    </div>
  );
}
