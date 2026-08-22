import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

const focusAreas = [
  "Quantitative problem-solving",
  "Software + systems",
  "Teaching + mentorship",
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-y border-white/10 bg-gray-950/70 px-4 py-24 backdrop-blur-sm md:py-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <ScrollAnimation direction="right" className="flex justify-center lg:justify-start">
          <div className="portrait-orbit relative">
            <div className="relative aspect-square w-[min(72vw,22rem)] overflow-hidden rounded-full border border-[#b99a5e]/40 bg-gray-900 p-2 shadow-[0_0_80px_rgba(185,154,94,0.11)]">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/ammar-headshot.jpeg"
                  alt="Ammar Razzak"
                  fill
                  sizes="(max-width: 1024px) 72vw, 352px"
                  className="object-cover object-[50%_37%] transition-transform duration-700 hover:scale-[1.025]"
                  priority
                />
              </div>
            </div>
            <span className="absolute -bottom-4 right-2 rounded-full border border-white/10 bg-gray-950 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[#c5a96d] shadow-xl md:right-0">
              Atlanta, GA
            </span>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="left" delay={120}>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-[#70b8b0]">
            01 / About
          </p>
          <h2 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-6xl">
            Curiosity takes me across disciplines.
          </h2>
          <div className="mt-8 max-w-2xl space-y-5 text-base font-light leading-relaxed text-gray-300 md:text-lg">
            <p>
              I&apos;m a rising senior at Emory University double majoring in Applied Mathematics and
              Chemistry on the pre-MD/PhD track. I&apos;m most energized by work that combines analytical
              thinking, creativity, and tangible impact.
            </p>
            <p>
              At Emory, I analyze physiological data in Dr. Negar Fani&apos;s lab, teach quantum chemistry,
              and have worked on applied AI research with the Chemistry Department. Outside campus, I build
              software and operational systems for local businesses and tutor and mentor students.
            </p>
            <p>
              I also previously served in finance and operations leadership with the Global Indigenous
              Health Coalition through July 2026. Whether I&apos;m working with data, code, a classroom, or a
              team, I like taking complicated problems and building something useful from them.
            </p>
          </div>

          <div className="mt-10 border-t border-white/10">
            {focusAreas.map((area, index) => (
              <div
                key={area}
                className="group flex items-center gap-5 border-b border-white/10 py-4 text-sm text-gray-300 transition-colors hover:text-white"
              >
                <span className="font-mono text-[0.65rem] text-[#b99a5e]/80">0{index + 1}</span>
                <span className="tracking-wide">{area}</span>
                <span className="ml-auto h-px w-8 bg-white/20 transition-all duration-300 group-hover:w-16 group-hover:bg-[#b99a5e]" />
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
