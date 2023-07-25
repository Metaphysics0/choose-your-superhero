import Header from "@/ui/Header";
import Search from "@/ui/search/Search";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center p-24">
      <Header />
      <Search />
    </main>
  );
}
