"use client";
import { useSelectedHeroes } from "@/providers/selectedHeroesProvider";
import HeroCard from "./hero-card/HeroCard";

export default function SelectedHeroesList() {
  const [selectedHeroes, setSelectedHeroes] = useSelectedHeroes();

  return selectedHeroes?.map((hero, idx) => {
    return <HeroCard hero={hero} key={idx} id={idx} />;
  });
}
