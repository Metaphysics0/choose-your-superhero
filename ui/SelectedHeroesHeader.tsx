"use client";

import { useSelectedHeroes } from "@/providers/selectedHeroesProvider";

export default function SelectedHeroesHeader() {
  const [selectedHeroes, setSelectedHeroes] = useSelectedHeroes();

  const sharedStyles = "min-h-[25px]";

  return (
    <div className={sharedStyles + " text-center font-light"}>
      {selectedHeroes?.length || 0} / 6 heroes selected!
    </div>
  );
}
