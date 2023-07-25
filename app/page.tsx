import Header from "@/ui/Header";
import SelectedHeroesList from "@/ui/SelectedHeroesList";
import Search from "@/ui/search/Search";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center p-10">
      <Header />
      <Search />
      <SelectedHeroesList />
    </main>
  );
}
