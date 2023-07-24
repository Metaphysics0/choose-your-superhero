export function buildSuperheroApiUrl(suffix: string) {
  const BASE_URL = `https://superheroapi.com/api/${process.env.NEXT_PUBLIC_SUPERHERO_API_KEY}`;
  return `${BASE_URL}/${suffix}`;
}

// class SuperheroApi {
//   private BASE_URL = `https://superheroapi.com/api/${process.env.NEXT_PUBLIC_SUPERHERO_API_KEY}`;

//   async searchByName(searchInput: string): Promise<ISearchByNameResponse> {
//     const url = this.buildUrl(`search/${searchInput}`);
//   }

//   private buildUrl(suffix: string = "") {
//     return `${this.BASE_URL}/${suffix}`;
//   }
// }
