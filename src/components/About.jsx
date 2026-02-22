import React, { useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { useAlternatingSlideAnimation, useSideSlideAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const valuesRef = useRef(null);
  const contentRef = useRef(null);
  const visualRef = useRef(null);
  
  useAlternatingSlideAnimation(valuesRef, 0.1);
  useSideSlideAnimation(contentRef, 'left');
  useSideSlideAnimation(visualRef, 'right');

  const values = [
    {
      title: 'Excellence',
      description: 'Delivering exceptional results through meticulous attention to detail and unwavering commitment to quality.'
    },
    {
      title: 'Integrity',
      description: 'Building trust through transparency, honesty, and ethical practices in all our professional relationships.'
    },
    {
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology and forward-thinking strategies to stay ahead in a dynamic market.'
    },
    {
      title: 'Global Vision',
      description: 'Understanding diverse cultures and markets to create opportunities that transcend geographical boundaries.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div ref={contentRef} className="flex flex-col gap-8 scroll-slide-in-left" style={{ opacity: 0 }}>
            <div>
              <h2 className="section-heading">Who We Are</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Global Avenues is a leading international recruitment and talent consulting firm with a presence across multiple continents. Our team of experienced professionals understands the nuances of global talent acquisition and brings together organizations with the world's best talent.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                With over a decade of experience, we've successfully connected thousands of professionals with career-defining opportunities. Our expertise spans multiple industries including technology, finance, healthcare, and executive search.
              </p>
              <div className="flex items-start gap-4 scroll-fade-in stagger-1" data-stagger style={{ animation: 'fadeInUp 0.6s ease-out 0.1s forwards', opacity: 0 }}>
                <CheckCircle className="text-secondary flex-shrink-0 mt-1 icon-scale" size={24} />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Proven Track Record</h4>
                  <p className="text-muted-foreground">Successfully placed 5000+ professionals globally</p>
                </div>
              </div>
              <div className="flex items-start gap-4 scroll-fade-in stagger-2" data-stagger style={{ animation: 'fadeInUp 0.6s ease-out 0.2s forwards', opacity: 0 }}>
                <CheckCircle className="text-secondary flex-shrink-0 mt-1 icon-scale" size={24} />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Expert Team</h4>
                  <p className="text-muted-foreground">Industry veterans with deep market knowledge</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div ref={visualRef} className="relative hidden lg:block scroll-slide-in-right" style={{ opacity: 0 }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 border border-border aspect-square flex items-end card-hover card-hover-glow scroll-fade-in stagger-1" data-stagger style={{ animation: 'scaleIn 0.6s ease-out 0.1s forwards', opacity: 0 }}>
                <div>
                  <p className="text-4xl font-bold text-primary">15+</p>
                  <p className="text-muted-foreground text-sm mt-2">Years of Excellence</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-8 border border-border aspect-square flex items-end card-hover card-hover-glow scroll-fade-in stagger-2" data-stagger style={{ animation: 'scaleIn 0.6s ease-out 0.2s forwards', opacity: 0 }}>
                <div>
                  <p className="text-4xl font-bold text-secondary">45+</p>
                  <p className="text-muted-foreground text-sm mt-2">Countries Active</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-xl p-8 border border-border col-span-2 aspect-auto flex items-center justify-center card-hover card-hover-glow scroll-fade-in stagger-3" data-stagger style={{ animation: 'scaleIn 0.6s ease-out 0.3s forwards', opacity: 0 }}>
                <div className="text-center">
                  <p className="text-3xl font-bold text-foreground mb-2">150+</p>
                  <p className="text-muted-foreground">Enterprise Partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-4xl font-bold text-foreground mb-4 text-center scroll-fade-in" style={{ animation: 'fadeInUp 0.8s ease-out forwards', opacity: 0 }}>Our Core Values</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto scroll-fade-in" style={{ animation: 'fadeInUp 0.8s ease-out 0.1s forwards', opacity: 0 }}>
            These principles guide every decision we make and every relationship we build
          </p>
          <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const slideDirection = idx % 2 === 0 ? 'scroll-slide-in-left' : 'scroll-slide-in-right'
              return (
              <div 
                key={idx} 
                data-slide
                className={`bg-gradient-to-br from-background to-muted/30 border border-border rounded-lg p-8 card-hover card-hover-glow group ${slideDirection}`}
                style={{ 
                  opacity: 0
                }}
              >
                <h4 className="font-bold text-foreground text-lg mb-3 group-hover:text-primary transition-colors duration-300">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
