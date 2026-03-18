const trustItems = [
  { id: 1, label: 'Mesoyios College', href: 'https://www.mesoyios.ac.cy/' },
  { id: 2, label: 'CEFAM International School', href: 'https://www.cefam.fr/en/' },
  { id: 3, label: 'KES College Nicosia', href: 'https://www.kescollege.ac.cy/en/' },
  { id: 4, label: 'International American University', href: 'https://iaula.edu/' },
  { id: 5, label: 'EIT InnoEnergy', href: 'https://innoenergy.com/' },
  { id: 6, label: 'FH Kufstein Tirol', href: 'https://www.fh-kufstein.ac.at/en/Home' },
  { id: 7, label: 'MJM Graphic Design', href: 'https://www.mjm-design.com/en' },
  { id: 8, label: 'Estonian Entrepreneurship University', href: 'https://www.eek.ee/en/' },
  { id: 9, label: 'ICN Business School', href: 'https://www.icn-artem.com/en/' },
];

export default function UniversityTrustBar() {
  const marqueeItems = [...trustItems, ...trustItems];

  return (
    <section
      className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(to bottom, #0D0A1A 0%, #1A1033 100%)',
      }}
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.28em] text-white/30">
          Trusted by leading universities worldwide
        </p>

        <div
          className="overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          }}
        >
          <div className="group flex w-max min-w-full gap-4 hover:[animation-play-state:paused] motion-safe:animate-[trustScroll_25s_linear_infinite]">
            {marqueeItems.map((item, index) => (
              <a
                key={`${item.id}-${index}`}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 min-w-[90px] flex-shrink-0 items-center justify-center rounded-[10px] border border-white/8 bg-white/5 px-4 text-[11px] text-white/40 opacity-40 transition-all duration-200 hover:border-brand-orange hover:opacity-100 sm:h-12 sm:min-w-[120px]"
                style={{
                  filter: 'grayscale(1) brightness(0) invert(1)',
                }}
              >
                {/* TODO: replace with university <img> logo */}
                <span className="whitespace-nowrap font-medium tracking-[0.12em]">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes trustScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
