import { SearchResultsProvider } from "@/providers/searchResultsProvider";
import { SelectedHeroesProvider } from "@/providers/selectedHeroesProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SearchResultsProvider>
      <SelectedHeroesProvider>{children}</SelectedHeroesProvider>
    </SearchResultsProvider>
  );
}
