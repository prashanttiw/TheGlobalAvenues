import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useCounterAnimation, useSideSlideAnimation } from '../hooks/useScrollAnimation';

export default function Hero() {
  const counterRef = useRef(null);
  const contentRef = useRef(null);
  const visualRef = useRef(null);

  useCounterAnimation(counterRef);
  useSideSlideAnimation(contentRef, 'left');
  useSideSlideAnimation(visualRef, 'right');

  return (
    <section id="home" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden relative">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div ref={contentRef} className="flex flex-col gap-8 scroll-slide-in-left" style={{ opacity: 0 }}>
            <div>
              <h1 className="section-heading text-foreground leading-tight">
                Global Talent, <span className="text-primary">Locally Connected</span>
              </h1>
              <p className="section-subheading text-muted-foreground">
                Connecting world-class talent with industry leaders. We bridge the gap between exceptional professionals and transformative opportunities across continents.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary inline-flex items-center justify-center gap-2 group">
                Explore Opportunities
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="btn-outline inline-flex items-center justify-center gap-2">
                Learn More
              </button>
            </div>

            {/* Stats with Counter Animation */}
            <div ref={counterRef} className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="scroll-fade-in stagger-1" data-stagger style={{ animation: 'fadeInUp 0.6s ease-out 0.1s forwards', opacity: 0 }}>
                <div className="text-3xl md:text-4xl font-bold text-primary" data-counter="5000">0</div>
                <p className="text-muted-foreground text-sm mt-1">Professionals Placed</p>
              </div>
              <div className="scroll-fade-in stagger-2" data-stagger style={{ animation: 'fadeInUp 0.6s ease-out 0.2s forwards', opacity: 0 }}>
                <div className="text-3xl md:text-4xl font-bold text-primary" data-counter="150">0</div>
                <p className="text-muted-foreground text-sm mt-1">Partner Companies</p>
              </div>
              <div className="scroll-fade-in stagger-3" data-stagger style={{ animation: 'fadeInUp 0.6s ease-out 0.3s forwards', opacity: 0 }}>
                <div className="text-3xl md:text-4xl font-bold text-primary" data-counter="45">0</div>
                <p className="text-muted-foreground text-sm mt-1">Countries Served</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div ref={visualRef} className="relative hidden lg:block scroll-slide-in-right" style={{ opacity: 0 }}>
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border border-border card-hover card-hover-glow shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center float-animation">
                    <svg className="w-12 h-12 text-primary transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 19H9m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-foreground font-semibold">Professional Network</p>
                  <p className="text-muted-foreground text-sm">Connecting global talent</p>
                </div>
              </div>
            </div>

            {/* Decorative elements with animation */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
