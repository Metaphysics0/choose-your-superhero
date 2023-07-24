import Header from "@/ui/Header";
import SearchInput from "@/ui/search/SearchInput";
import SearchResults from "@/ui/search/SearchResults";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center p-24">
      <Header />
      <div>
        <SearchInput />
        <SearchResults />
      </div>
    </main>
  );
}
