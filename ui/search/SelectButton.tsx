"use client";

import { useSelectedHeroes } from "@/providers/selectedHeroesProvider";
import { isSuperheroSelected } from "@/services/searchResultsHelper";
import { Icon } from "@iconify/react";
import { CSSProperties } from "react";

export default function SelectButton({ hero }: { hero: ISuperhero }) {
  const [selectedHeroes, setSelectedHeroes] = useSelectedHeroes();

  const isSelected = () => isSuperheroSelected(selectedHeroes, hero);

  const sharedIconStyles: CSSProperties = {
    fontSize: "25px",
  };

  return isSelected() ? (
    <Icon
      icon="ri:checkbox-circle-fill"
      style={sharedIconStyles}
      className="text-green-600"
    />
  ) : (
    <Icon
      icon="ri:checkbox-circle-line"
      style={sharedIconStyles}
      className="opacity-40 hover:text-green-600 hover:opacity-100"
    />
  );
}
