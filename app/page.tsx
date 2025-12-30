import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-gray-950 text-white min-h-screen">
      <main className="h-full">
        <div className="container mx-auto">
          <Navbar />
        </div>
        <Showcase />
      </main>
    </div>
  );
}
