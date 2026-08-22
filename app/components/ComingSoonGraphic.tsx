type ComingSoonGraphicProps = {
  label: string;
  note: string;
  index: string;
};

export default function ComingSoonGraphic({ label, note, index }: ComingSoonGraphicProps) {
  return (
    <div className="coming-soon-rail group relative overflow-hidden border-y border-white/10 py-8 md:py-10">
      <div className="relative z-10 grid items-center gap-6 md:grid-cols-[auto_1fr_auto]">
        <span className="font-mono text-[0.65rem] tracking-[0.25em] text-violet-300/70">
          {index}
        </span>
        <div>
          <p className="text-2xl font-medium tracking-tight text-white md:text-4xl">{label}</p>
          <p className="mt-2 max-w-xl text-sm font-light leading-relaxed text-gray-400 md:text-base">
            {note}
          </p>
        </div>
        <div className="flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-violet-300">
          <span className="coming-soon-dot h-2 w-2 rounded-full bg-violet-300" />
          In progress
        </div>
      </div>
      <div className="coming-soon-signal pointer-events-none absolute inset-y-0 left-0 w-1/3 opacity-30" />
    </div>
  );
}
