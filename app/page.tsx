import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-gray-950 line-clamp-2">
      <main className="h-full">
        <div className="container mx-auto">
          <Navbar />
        </div>
        <Showcase />
        {/* <h1>its Ammar. </h1> */}
      </main>
    </div>
  );
}
