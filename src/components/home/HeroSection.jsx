import { useEffect, useRef, useState } from 'react';

const statCards = [
  { value: '31+', label: 'University Partners' },
  { value: '10K+', label: 'Students Guided' },
  { value: '95%', label: 'Visa Success Rate' },
];

export default function HeroSection() {
  const sectionRef = useRef(null);
  const mediaRef = useRef(null);
  const videoRef = useRef(null);
  const sourceRef = useRef(null);
  const textRef = useRef(null);
  const fogRef = useRef(null);
  const statsRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const updateMobileState = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updateMobileState);
      return () => mediaQuery.removeEventListener('change', updateMobileState);
    }

    mediaQuery.addListener(updateMobileState);
    return () => mediaQuery.removeListener(updateMobileState);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || isMobile) return undefined;

    const section = sectionRef.current;
    const video = videoRef.current;
    const source = sourceRef.current;

    if (!section || !video || !source) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const dataSrc = source.dataset.src;
        if (dataSrc && !source.src) {
          source.src = dataSrc;
          video.load();
        }

        observer.disconnect();
      },
      { rootMargin: '200px 0px' }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [isMobile]);

  useEffect(() => {
    if (typeof window === 'undefined' || isMobile) return undefined;

    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const offset = Math.max(0, -rect.top);
      const progress = Math.min(offset / 360, 1);

      if (mediaRef.current) {
        mediaRef.current.style.transform = `translate3d(0, ${offset * 0.55}px, 0) scale(1.16)`;
      }

      if (textRef.current) {
        textRef.current.style.transform = `translate3d(0, ${offset * 0.3}px, 0)`;
        textRef.current.style.opacity = `${Math.max(0.08, 1 - progress)}`;
      }

      if (fogRef.current) {
        fogRef.current.style.transform = `translate3d(0, ${offset * 0.38}px, 0) scale(1.12)`;
      }

      if (statsRef.current) {
        statsRef.current.style.transform = `translate3d(0, ${offset * -0.18}px, 0)`;
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] overflow-hidden bg-[#0D0A1A] text-white"
    >
      <div
        ref={mediaRef}
        className="absolute inset-0 scale-[1.08]"
        style={{ willChange: 'transform' }}
      >
        <img
          src="/videos/hero-poster.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {!isMobile && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/videos/hero-poster.png"
            onLoadedData={() => setIsVideoReady(true)}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
              isVideoReady ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source ref={sourceRef} data-src="/videos/hero.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(13,10,26,0.88) 0%, rgba(13,10,26,0.55) 60%, rgba(13,10,26,0.25) 100%)',
        }}
      />

      <div
        ref={fogRef}
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[320px]"
        style={{
          willChange: 'transform',
          background:
            'radial-gradient(ellipse 100% 80% at 50% 100%, rgba(45,27,105,0.65) 0%, transparent 70%)',
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[120px]"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0D0A1A)',
        }}
      />

      <div className="relative z-10 flex min-h-[100dvh] items-center px-4 pb-44 pt-28 sm:px-6 md:pb-40 lg:px-8">
        <div
          ref={textRef}
          className="mx-auto w-full max-w-7xl"
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="max-w-3xl">
            <span
              className="inline-flex rounded-full border border-brand-orange/30 bg-brand-orange/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-orange sm:text-xs"
              style={{ animation: 'fadeDown 600ms ease forwards', opacity: 0 }}
            >
              {'\u{1F30D}'} India's Trusted Global Education Partner
            </span>

            <h1
              className="mt-6 font-heading text-[36px] font-bold leading-[1.1] text-white sm:text-[44px] lg:text-[60px]"
              style={{ animation: 'fadeUp 700ms ease 100ms forwards', opacity: 0 }}
            >
              <span className="block">Your Dream University.</span>
              <span className="block">Our Proven Pathway.</span>
            </h1>

            <p
              className="mt-6 max-w-lg text-base leading-7 text-white/70 sm:text-[18px]"
              style={{ animation: 'fadeUp 700ms ease 200ms forwards', opacity: 0 }}
            >
              We connect ambitious Indian students with world-class universities across 9
              countries {'\u2014'} from application to visa, every step guided.
            </p>

            <div
              className="mt-8 flex flex-col gap-4 sm:flex-row"
              style={{ animation: 'fadeUp 700ms ease 300ms forwards', opacity: 0 }}
            >
              <button
                type="button"
                className="rounded-xl bg-brand-orange px-6 py-4 text-sm font-semibold text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,82,26,0.4)]"
              >
                Start Your Journey
              </button>
              <button
                type="button"
                className="rounded-xl border border-white/30 bg-white/5 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 ease-out hover:bg-white/10"
              >
                Watch Our Story {'\u25B6'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={statsRef}
        className="pointer-events-none absolute inset-x-0 bottom-10 z-10 px-4 sm:px-6 lg:px-8"
        style={{ willChange: 'transform' }}
      >
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-4">
          {statCards.map((card, index) => (
            <div
              key={card.label}
              className="min-w-[160px] rounded-2xl border border-white/15 bg-white/8 px-5 py-4 text-center shadow-[0_24px_60px_rgba(13,10,26,0.28)] backdrop-blur-[20px] sm:px-7"
              style={{
                animation: `slideUp 800ms ease ${500 + index * 120}ms forwards`,
                opacity: 0,
              }}
            >
              <p className="font-heading text-[28px] font-bold text-white">{card.value}</p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.22em] text-white/50">
                {card.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-white/40">
        <svg
          className="h-6 w-6 animate-[bounce_2s_ease-in-out_infinite]"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
