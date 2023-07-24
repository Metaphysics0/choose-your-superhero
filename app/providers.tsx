import { SearchTextProvider } from "@/providers/searchTextProvider";
import { SelectedHeroesProvider } from "@/providers/selectedHeroesProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SearchTextProvider>
      <SelectedHeroesProvider>{children}</SelectedHeroesProvider>
    </SearchTextProvider>
  );
}
