"use client";

import { useSelectedHeroes } from "@/providers/selectedHeroesProvider";
import SelectButton from "./SelectButton";
import { isSuperheroSelected } from "@/services/searchResultsHelper";

export default function SearchResults({
  searchResults = [],
  isLoading = false,
  errorMessage,
}: ISearchResultProps) {
  const [selectedHeroes, setSelectedHeroes] = useSelectedHeroes();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  return (
    <div className="overflow-scroll max-h-72 shadow-md">
      {searchResults.map((result, key) =>
        searchResult({ hero: result, key, selectedHeroes, setSelectedHeroes })
      )}
    </div>
  );
}

function searchResult({
  hero,
  key,
  selectedHeroes,
  setSelectedHeroes,
}: {
  hero: ISuperhero;
  key: number;
  selectedHeroes: ISuperhero[] | undefined;
  setSelectedHeroes: ISetSelectedHeroesAction;
}) {
  const isSelected = () => isSuperheroSelected(selectedHeroes, hero);

  const wrapperStyles =
    "flex justify-between shadow-lg bg-slate-200 border-b min-h-max border-slate-300 p-1 items-center cursor-pointer hover:bg-gray-50 transition";
  const selectedStyles = "bg-slate-100";

  const wrapperClass = [wrapperStyles, isSelected() && selectedStyles]
    .filter(Boolean)
    .join(" ");

  function addSelectedHero(): void {
    setSelectedHeroes?.([...(selectedHeroes || []), hero]);
  }

  function removeSelectedHero(): void {
    const heroesToSet = selectedHeroes?.filter(
      (selectedHero) => selectedHero.id !== hero.id
    );
    setSelectedHeroes?.(heroesToSet || []);
  }

  const addOrRemoveHero = (): void =>
    isSelected() ? removeSelectedHero() : addSelectedHero();

  return (
    <div key={key} className={wrapperClass} onClick={addOrRemoveHero}>
      <div className="flex items-center">
        <p className="mr-2">{key + 1}.</p>
        <div className="min-h-[55px] flex flex-col justify-center">
          <strong>{hero.name}</strong>
          <p className="italic font-thin">
            {hero?.biography?.["full-name"] || ""}
          </p>
        </div>
      </div>
      <SelectButton hero={hero} />
    </div>
  );
}
