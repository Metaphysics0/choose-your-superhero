"use client";

import { useSelectedHeroes } from "@/providers/selectedHeroesProvider";
import { Tooltip } from "react-tooltip";
import { Icon } from "@iconify/react";

export default function SelectedHeroesHeader() {
  const [selectedHeroes, setSelectedHeroes] = useSelectedHeroes();

  function clearSelectedHeroes(): void {
    setSelectedHeroes?.([]);
  }

  return (
    <div className="flex w-fit mx-auto items-center min-h-[25px] text-center font-light">
      {selectedHeroes?.length || 0} / 6 heroes selected!
      {selectedHeroes?.length ? (
        <Icon
          icon="icomoon-free:undo"
          className="ml-2 cursor-pointer text-slate-400 hover:text-slate-600 transition"
          onClick={clearSelectedHeroes}
          data-tooltip-id="clear-heroes-tooltip"
          data-tooltip-content="Clear selected heroes"
          data-tooltip-place="right"
        />
      ) : (
        ""
      )}
      <Tooltip
        id="clear-heroes-tooltip"
        style={{ zIndex: 99, fontSize: "12px" }}
      />
    </div>
  );
}
