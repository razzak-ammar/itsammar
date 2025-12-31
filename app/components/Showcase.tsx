import ParticleBackground from "./ParticleBackground";
import ScrollAnimation from "./ScrollAnimation";

function Showcase() {
  return (
    <div className="relative text-center h-[90vh] overflow-hidden container mx-auto px-4">
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="max-w-3xl mx-auto">
          <ScrollAnimation direction="fade">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              hi, it's <span className="text-teal-400 drop-shadow-[0_0_30px_rgba(45,212,191,0.5)]">Ammar</span> here.
            </h1>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={150}>
            <p className="text-gray-300 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed px-6 pt-6">
              I'm an undergraduate student at Emory University studying Applied Math and Chemistry.
              My primary research interests are focused on quantitative biomedical research. I work at
              the intersection of physiology, data science, and engineering—building tools, models, and
              systems that turn complex biological data into meaningful insight.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
