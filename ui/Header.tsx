import { MAX_SELECTED_HERO_LIMIT } from "@/constants";

export default function Header() {
  return (
    <header className="w-fit text-center mx-auto mb-2">
      <h1 className="text-slate-700 font-extrabold text-4xl mb-1">
        🦹🏻‍♂️ Superhero Faceoff 🦸🏻‍♂️
      </h1>
      <h3 className="text-slate-700 text-lg">
        Select up to {MAX_SELECTED_HERO_LIMIT} superheros to rank up against
        each other!
      </h3>
    </header>
  );
}
