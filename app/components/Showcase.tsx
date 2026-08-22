import ScrollAnimation from "./ScrollAnimation";

function Showcase() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100svh-5.5rem)] max-w-6xl overflow-hidden px-4 text-center">
      <div className="relative z-10 flex w-full flex-col items-center justify-center pb-16">
        <div className="max-w-3xl mx-auto">
          <ScrollAnimation direction="fade">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.35em] text-[#b99a5e]">
              Student · Researcher · Builder
            </p>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
              hi, it&apos;s <span className="text-[#d1b777] drop-shadow-[0_0_28px_rgba(185,154,94,0.22)]">Ammar</span> here.
            </h1>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={150}>
            <p className="mx-auto max-w-2xl px-6 pt-3 text-lg font-light leading-relaxed text-gray-300 md:text-2xl">
              I work across research, technology, and community—following questions that matter.
            </p>
          </ScrollAnimation>
          <ScrollAnimation direction="fade" delay={300}>
            <a
              href="#about"
              className="mt-10 inline-flex items-center gap-3 border-b border-[#5aa9a0]/55 pb-2 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-[#78bdb6] transition-all hover:gap-5 hover:border-[#78bdb6]"
            >
              More about me <span aria-hidden="true">↓</span>
            </a>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
