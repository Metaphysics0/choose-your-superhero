import Header from "@/ui/Header";
import SearchInput from "@/ui/SearchInput";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center p-24">
      <Header />
      <SearchInput />
    </main>
  );
}
