export function isSuperheroSelected(
  list: ISuperhero[] | undefined,
  hero: ISuperhero
): boolean {
  return !!list?.some((selectedHero) => selectedHero.id === hero.id);
}
