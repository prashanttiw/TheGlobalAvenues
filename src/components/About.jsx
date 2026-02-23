import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CheckCircle2 } from 'lucide-react';

const offerings = [
  { title: 'Choosing University/School', description: '350+ degree programs conducted in English from reputed partner universities.' },
  { title: 'Financial Support', description: 'Guidance on fund requirements and cost of living at your study destination.' },
  { title: 'Immigration/Arrival Support', description: 'Full assistance with embassy guidelines, accommodation, and practicalities.' },
  { title: 'Visa Process', description: 'Complete support with visa application, interview preparation, and documentation.' },
  { title: 'Acceptance within 72hrs', description: 'Simple and fast application process ensuring you do not miss enrollment deadlines.' },
  { title: 'Pre Departure Briefing', description: 'Key information and checklist to ensure smooth transition to your study destination.' },
];

export function About() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
          }`}
        >
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
              📖 About Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Leading Student Recruitment Experts in South Asia
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Global Avenues leverages its strong presence in South Asia and deep expertise in localized outreach to help you achieve your international student enrollment goals. We collaborate with higher education institutions, schools, and education service providers to create customized plans that enhance brand recognition and attract top-tier students.
            </p>
            <div className="pt-4">
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Start Your Journey
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-background p-8 rounded-3xl border border-border space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Offering End To End Support</h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Comprehensive Support</p>
                    <p className="text-sm text-muted-foreground">From university selection to post-arrival assistance</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Expert Guidance</p>
                    <p className="text-sm text-muted-foreground">Professional consultants with years of experience</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Fast Processing</p>
                    <p className="text-sm text-muted-foreground">Acceptance within 72 hours of application</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Offerings Grid */}
        <div>
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Our Step-by-Step Support</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offering, index) => {
              const [offeringRef, offeringIsVisible] = useScrollAnimation();
              return (
                <div
                  key={index}
                  ref={offeringRef}
                  className={`p-6 bg-background border border-border rounded-xl hover:border-primary hover:shadow-md transition-all duration-500 ${
                    offeringIsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl font-bold text-primary bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">{offering.title}</h4>
                      <p className="text-sm text-muted-foreground">{offering.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from 'lucide-react';
