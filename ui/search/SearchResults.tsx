"use client";

export default function SearchResults({
  searchResults = [],
  isLoading = false,
  errorMessage,
}: ISearchResultProps) {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  return <div>{searchResults.map(searchResult)}</div>;
}

function searchResult(result: ISuperhero, key: number) {
  return (
    <div
      key={key}
      className="flex shadow-lg bg-slate-200 border-b min-h-max border-slate-300 p-1 items-center cursor-pointer hover:bg-gray-50 transition"
    >
      <p className="mr-2">{key + 1}.</p>
      <div className="min-h-[55px] flex flex-col justify-center">
        <strong>{result.name}</strong>
        <p className="italic font-thin">
          {result?.biography?.["full-name"] || ""}
        </p>
      </div>
    </div>
  );
}
