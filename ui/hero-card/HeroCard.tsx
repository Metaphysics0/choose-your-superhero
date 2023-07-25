import Image from "next/image";

export default function HeroCard({
  hero,
  id,
}: {
  hero: ISuperhero;
  id: string | number;
}) {
  const propertiesToDisplay = {
    "Stats 📈": hero.powerstats,
    "Biography 📝": hero.biography,
    "Appearance 💅🏻": hero.appearance,
  };

  return (
    <div
      key={id}
      className="rounded-md shadow-md bg-slate-50 p-4 m-3 2xl:max-h-64"
    >
      <div className="flex items-center mb-3">
        <div className="mr-2 rounded-full overflow-hidden h-20 w-20">
          <Image
            placeholder="blur"
            blurDataURL="/superhero-placeholder.png"
            src={hero.image.url}
            width={100}
            height={100}
            objectFit="contain"
            style={{
              width: "auto",
              height: "auto",
            }}
            alt={hero.name + " Image"}
          />
        </div>
        <div className="flex flex-col">
          <strong>{hero.name}</strong>
          <p>Full Name: {hero?.biography?.["full-name"] || "Not Specified"}</p>
        </div>
      </div>
      <div className="flex flex-col w-full justify-between items-center max-h-96 overflow-y-scroll">
        {Object.entries(propertiesToDisplay).map(([title, properties], idx) => (
          <div className="w-full mb-2" key={idx}>
            {propertyList(title, properties)}
          </div>
        ))}
      </div>
    </div>
  );
}

function propertyList(
  title: string,
  properties: Record<string, string> | IPowerstats | IBiography | IAppearance
) {
  return (
    <div className="w-full">
      <strong className="text-center">{title}</strong>
      <ul>
        {Object.entries(properties).map(([key, val]) => (
          <li
            key={key}
            className="capitalize border-b border-slate-200 p-1 py-2 last:border-none"
          >
            {key}: {val ? val : "Not Specified"}
          </li>
        ))}
      </ul>
    </div>
  );
}
