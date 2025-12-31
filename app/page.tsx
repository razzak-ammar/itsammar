import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import Projects from "./components/Projects";
import BlogPosts from "./components/BlogPosts";
import ParticleBackground from "./components/ParticleBackground";
import Footer from "./layout/Footer";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-gray-950 text-white min-h-screen">
      <main className="h-full">
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
        </div>
        <div className="container mx-auto relative z-10">
          <Navbar />
          <Showcase />
          <Projects />
          <BlogPosts />
        </div>
      </main>
      <Footer />
    </div>
  );
}
