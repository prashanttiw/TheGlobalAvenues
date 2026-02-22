import { useRef } from 'react';
import { Globe, Users, TrendingUp, FileText, Zap, Handshake } from 'lucide-react'
import { useAlternatingSlideAnimation } from '../hooks/useScrollAnimation';

export default function Services() {
  const containerRef = useRef(null);
  useAlternatingSlideAnimation(containerRef, 0.12);

  const services = [
    {
      icon: Globe,
      title: 'Executive Search',
      description: 'Targeted recruitment for C-suite and senior leadership positions across industries and geographies.'
    },
    {
      icon: TrendingUp,
      title: 'Talent Strategy',
      description: 'Comprehensive workforce planning and talent acquisition strategies aligned with your business goals.'
    },
    {
      icon: Users,
      title: 'Permanent Placement',
      description: 'Dedicated candidate sourcing and placement for permanent roles across multiple sectors and levels.'
    },
    {
      icon: FileText,
      title: 'Recruitment Process Outsourcing',
      description: 'End-to-end recruitment management from job analysis to onboarding and talent integration.'
    },
    {
      icon: Zap,
      title: 'Skills Assessment',
      description: 'Comprehensive candidate evaluation and verification to ensure quality and authenticity.'
    },
    {
      icon: Handshake,
      title: 'International Mobility',
      description: 'Seamless global talent mobility programs facilitating cross-border assignments and visa processing.'
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-fade-in" style={{ animation: 'fadeInUp 0.8s ease-out forwards', opacity: 0 }}>
          <h2 className="section-heading">Our Services</h2>
          <p className="section-subheading max-w-3xl mx-auto">
            Comprehensive talent acquisition and recruitment solutions designed to connect organizations with world-class professionals.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const slideDirection = index % 2 === 0 ? 'scroll-slide-in-left' : 'scroll-slide-in-right'
            return (
              <div
                key={index}
                data-slide
                className={`group p-8 bg-background border border-border rounded-lg card-hover card-hover-glow ${slideDirection}`}
                style={{
                  opacity: 0
                }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-secondary/30 group-hover:to-primary/30 transition-all duration-300 icon-bounce">
                  <Icon className="text-primary group-hover:text-secondary transition-colors duration-300" size={28} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
