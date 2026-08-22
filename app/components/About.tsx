import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

const focusAreas = [
  "Trauma neuroscience",
  "Physiological signal processing",
  "Wearable health technology",
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
            <div className="relative aspect-square w-[min(72vw,22rem)] overflow-hidden rounded-full border border-violet-300/35 bg-gray-900 p-2 shadow-[0_0_80px_rgba(167,139,250,0.13)]">
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
            <span className="absolute -bottom-4 right-2 rounded-full border border-white/10 bg-gray-950 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-violet-300 shadow-xl md:right-0">
              Atlanta, GA
            </span>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="left" delay={120}>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-teal-300">
            01 / About
          </p>
          <h2 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-6xl">
            Studying the signals between body, brain, and behavior.
          </h2>
          <div className="mt-8 max-w-2xl space-y-5 text-base font-light leading-relaxed text-gray-300 md:text-lg">
            <p>
              I&apos;m a rising senior at Emory University double majoring in Applied Mathematics and
              Chemistry on the pre-MD/PhD track. In Dr. Negar Fani&apos;s trauma neuroscience lab, I study
              autonomic regulation and PTSD through psychophysiology, neuroimaging, and computational work.
            </p>
            <p>
              I build pipelines for physiological signals including ECG, HRV, EDA, and respiration, and
              contribute to wearable technology designed to support new approaches to trauma treatment.
              Research gives me a place to ask difficult questions, build useful tools, and work toward
              direct clinical impact.
            </p>
            <p>
              Beyond the lab, I teach quantum chemistry, tutor and mentor students, and build software and
              operational systems for local businesses. I also previously served in finance and operations
              leadership with the Global Indigenous Health Coalition through July 2026.
            </p>
          </div>

          <div className="mt-10 border-t border-white/10">
            {focusAreas.map((area, index) => (
              <div
                key={area}
                className="group flex items-center gap-5 border-b border-white/10 py-4 text-sm text-gray-300 transition-colors hover:text-white"
              >
                <span className="font-mono text-[0.65rem] text-violet-300/70">0{index + 1}</span>
                <span className="tracking-wide">{area}</span>
                <span className="ml-auto h-px w-8 bg-white/20 transition-all duration-300 group-hover:w-16 group-hover:bg-violet-300" />
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
