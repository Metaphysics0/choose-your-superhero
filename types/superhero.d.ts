interface ISuperhero {
  id: string;
  name: string;
  powerstats: IPowerstats;
  biography: IBiography;
  appearance: IAppearance;
  work: IWork;
  connections: IConnections;
  image: ISupeheroImage;
}

interface ISupeheroImage {
  url: string;
}

interface IConnections {
  "group-affiliation": string;
  relatives: string;
}

interface IWork {
  occupation: string;
  base: string;
}

interface IAppearance {
  gender: string;
  race: string;
  height: string[];
  weight: string[];
  "eye-color": string;
  "hair-color": string;
}

interface IBiography {
  "full-name": string;
  "alter-egos": string;
  aliases: string[];
  "place-of-birth": string;
  "first-appearance": string;
  publisher: string;
  alignment: string;
}

interface IPowerstats {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
}
