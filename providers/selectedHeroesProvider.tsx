"use client";

import React from "react";

const SelectedHeroes = React.createContext<
  [ISuperhero[], React.Dispatch<React.SetStateAction<ISuperhero[]>>] | []
>([]);

export function SelectedHeroesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedHeroes, setSelectedHeroes] = React.useState<ISuperhero[]>([]);
  return (
    <SelectedHeroes.Provider value={[selectedHeroes, setSelectedHeroes]}>
      {children}
    </SelectedHeroes.Provider>
  );
}

export function useSelectedHeroes() {
  const context = React.useContext(SelectedHeroes);
  if (context === undefined) {
    throw new Error(
      "useSelectedHeroes must be used within a SelectedHeroesProvider"
    );
  }
  return context;
}
