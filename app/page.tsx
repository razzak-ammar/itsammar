import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import Projects from "./components/Projects";
import BlogPosts from "./components/BlogPosts";
import ParticleBackground from "./components/ParticleBackground";
import Footer from "./layout/Footer";
import About from "./components/About";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 font-[family-name:var(--font-geist-sans)] text-white">
      <main id="home" className="relative h-full scroll-mt-24 overflow-x-clip">
        <div className="absolute inset-x-0 top-0 z-0 h-screen" aria-hidden="true">
          <ParticleBackground />
        </div>
        <div className="relative z-10">
          <Navbar />
          <Showcase />
          <About />
          <Projects />
          <BlogPosts />
        </div>
      </main>
      <Footer />
    </div>
  );
}
