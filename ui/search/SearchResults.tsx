"use client";

import { useSelectedHeroes } from "@/providers/selectedHeroesProvider";
import SelectButton from "./SelectButton";
import {
  isSuperheroSelected,
  removeSelectedHeroFromList,
} from "@/services/searchResultsHelper";
import toast, { Toaster } from "react-hot-toast";
import { MAX_SELECTED_HERO_LIMIT } from "@/constants";
import { classNames } from "@/services/css";
import { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { Tooltip } from "react-tooltip";
import { useSelectedHeroModal } from "@/providers/selectedHeroModalProvider";

export default function SearchResults({
  searchResults = [],
  setSearchResults,
}: ISearchResultProps) {
  const ref = useRef(null);
  const [selectedHeroes, setSelectedHeroes] = useSelectedHeroes();
  const [shouldShowModal, setShouldShowModal] = useSelectedHeroModal();

  useEffect(() => {
    function closeDropdown(event: Event) {
      // @ts-ignore
      if (ref.current && !ref.current.contains(event.target)) {
        setSearchResults?.([]);
      }
    }
    window.addEventListener("click", closeDropdown);
    // clean up
    return () => window.removeEventListener("click", closeDropdown);
  }, [ref, setSearchResults]);

  return (
    <>
      <div
        className="absolute overflow-scroll max-h-72 shadow-md rounded-b-md w-[calc(100%-.7rem)] top-30 z-20 opacity-95 left-1/2 transform -translate-x-1/2"
        ref={ref}
      >
        {searchResults.map((result, key) =>
          searchResult({
            hero: result,
            key,
            selectedHeroes,
            setSelectedHeroes,
            setShouldShowModal,
            shouldShowModal,
          })
        )}
      </div>
      <Toaster />
    </>
  );
}

function searchResult({
  hero,
  key,
  setShouldShowModal,
  shouldShowModal,
  selectedHeroes,
  setSelectedHeroes,
}: ISearchResultItemProps) {
  const isSelected = () => isSuperheroSelected(selectedHeroes, hero);

  function addSelectedHero(): void {
    if (selectedHeroes?.length === MAX_SELECTED_HERO_LIMIT) {
      toast.error("You can't have more than 6 heroes!");
      return;
    }
    setSelectedHeroes?.([...(selectedHeroes || []), hero]);
  }

  function removeSelectedHero(): void {
    setSelectedHeroes?.(removeSelectedHeroFromList(selectedHeroes, hero));
  }

  const addOrRemoveHero = isSelected() ? removeSelectedHero : addSelectedHero;

  function showModal(e: any) {
    e.stopPropagation();
    setShouldShowModal({ shouldShowModal: true, hero });
  }

  const tooltipId = `view-full-info-tooltip-${key}`;
  return (
    <div
      key={key}
      className={classNames(
        "flex justify-between shadow-lg bg-slate-200 border-b min-h-max border-slate-300 p-1 items-center cursor-pointer hover:bg-gray-50 transition",
        "subpixel-antialiased",
        isSelected() && "bg-slate-100!"
      )}
      onClick={addOrRemoveHero}
    >
      <div className="flex items-center">
        <p className="mr-2">{key + 1}.</p>
        <div className="min-h-[55px] flex flex-col justify-center">
          <strong>{hero.name}</strong>
          <p className="italic font-thin">
            {hero?.biography?.["full-name"] || ""}
          </p>
        </div>
        <div
          className="flex ml-3 text-md items-center cursor-pointer hover:text-blue-300"
          onClick={showModal}
          data-tooltip-id={tooltipId}
          data-tooltip-content="View full info"
          data-tooltip-place="right"
        >
          <Icon icon="tabler:external-link" />
          <Tooltip id={tooltipId} style={{ fontSize: "12px" }} />
        </div>
      </div>
      <SelectButton hero={hero} />
    </div>
  );
}
