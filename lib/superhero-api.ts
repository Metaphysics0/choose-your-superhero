class SuperheroApi {
  private BASE_URL = `https://superheroapi.com/api/${process.env.SUPERHERO_API_KEY}`;

  async searchByName(searchInput: string) {
    const url = this.buildUrl(`search/${searchInput}`);
    return fetch(url);
  }

  private buildUrl(suffix: string = "") {
    return `${this.BASE_URL}/${suffix}`;
  }
}
