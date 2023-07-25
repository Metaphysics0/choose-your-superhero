export function isSuperheroSelected(
  list: ISuperhero[] | undefined,
  hero: ISuperhero
): boolean {
  return !!list?.some((selectedHero) => selectedHero.id === hero.id);
}

export function removeSelectedHeroFromList(
  list: ISuperhero[] | undefined,
  hero: ISuperhero
): ISuperhero[] {
  return (list || [])?.filter((selectedHero) => selectedHero.id !== hero.id);
}
