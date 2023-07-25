import { SearchResultsProvider } from "@/providers/searchResultsProvider";
import { SelectedHeroModalProvider } from "@/providers/selectedHeroModalProvider";
import { SelectedHeroesProvider } from "@/providers/selectedHeroesProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SearchResultsProvider>
      <SelectedHeroModalProvider>
        <SelectedHeroesProvider>{children}</SelectedHeroesProvider>
      </SelectedHeroModalProvider>
    </SearchResultsProvider>
  );
}
