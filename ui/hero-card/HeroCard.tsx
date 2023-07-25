"use client";

import { useSelectedHeroModal } from "@/providers/selectedHeroModalProvider";
import { useSelectedHeroes } from "@/providers/selectedHeroesProvider";
import { classNames } from "@/services/css";
import { removeSelectedHeroFromList } from "@/services/searchResultsHelper";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { Tooltip } from "react-tooltip";

export default function HeroCard({
  hero,
  id,
  isModalView,
}: {
  hero: ISuperhero;
  id: string | number;
  isModalView?: boolean;
}) {
  const [selectedHeroes, setSelectedHeroes] = useSelectedHeroes();
  const [{ shouldShowModal }, setShouldShowModal] = useSelectedHeroModal();

  const propertiesToDisplay = {
    "Stats 📈": hero.powerstats,
    "Biography 📝": hero.biography,
    "Appearance 💅🏻": hero.appearance,
  };

  const additionalPropertiesForModalView = isModalView
    ? {
        "Work 👨🏻‍💻": hero.work,
        "Connections 🤝": hero.connections,
      }
    : {};

  function removeSelectedHero(): void {
    setSelectedHeroes?.(removeSelectedHeroFromList(selectedHeroes, hero));
  }

  return (
    <div
      key={id}
      className={classNames(
        "rounded-md 2xl:max-h-64 relative",
        !isModalView && "bg-slate-50 p-4 m-3 shadow-md"
      )}
    >
      {!isModalView && (
        <div
          className="absolute top-3 right-0 flex items-center pr-3 cursor-pointer hover:text-amber-700"
          onClick={removeSelectedHero}
          data-tooltip-id="remove-selected-hero-tooltip"
          data-tooltip-content="Remove hero"
          data-tooltip-place="right"
        >
          <Icon icon="system-uicons:archive" />
          <Tooltip id="remove-selected-hero-tooltip" />
        </div>
      )}
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
          <p className="mb-0.5">
            Full Name: {hero?.biography?.["full-name"] || "Not Specified"}
          </p>
          {!isModalView && (
            <button
              className="w-fit border border-slate-300 px-1.5 py-0.5 rounded-lg hover:shadow-md transition hover:bg-slate-50 active:shadow-sm"
              onClick={() =>
                setShouldShowModal?.({ shouldShowModal: true, hero })
              }
            >
              View Full Info
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-col w-full justify-between items-center max-h-96 overflow-y-scroll">
        {Object.entries({
          ...propertiesToDisplay,
          ...additionalPropertiesForModalView,
        }).map(([title, properties], idx) => (
          <div
            className="w-full mb-3 pb-2 border-b border-dotted border-slate-200 last:border-none"
            key={idx}
          >
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
      <strong className="w-full block text-lg">{title}</strong>
      <ul>
        {Object.entries(properties).map(([key, val]) => (
          <li
            key={key}
            className="capitalize border-b border-slate-200 py-2 last:border-none"
          >
            {key}: {val ? val : "Not Specified"}
          </li>
        ))}
      </ul>
    </div>
  );
}
