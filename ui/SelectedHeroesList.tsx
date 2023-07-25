"use client";
import { useSelectedHeroes } from "@/providers/selectedHeroesProvider";
import HeroCard from "./hero-card/HeroCard";

export default function SelectedHeroesList() {
  const [selectedHeroes, setSelectedHeroes] = useSelectedHeroes();

  return (
    <div className="grid grid-flow-row sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-3 w-[calc(100%-2rem)] justify-center mx-auto">
      {selectedHeroes?.map((hero, idx) => {
        return <HeroCard hero={hero} key={idx} id={idx} />;
      })}
    </div>
  );
}
