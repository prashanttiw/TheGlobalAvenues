import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Building2, Megaphone, Users, BarChart3, Settings, Handshake, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'In-Country Representation',
    description: 'Represent international educational institutions locally and establish their presence in the South Asian market.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Megaphone,
    title: 'Marketing & Promotion',
    description: 'Expert-driven international student recruitment with targeted marketing and promotion strategies.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Agent Management',
    description: 'Develop targeted recruitment strategies and provide personalized counseling for prospective students.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: BarChart3,
    title: 'Market Research & Analysis',
    description: 'Conduct comprehensive market research to identify trends and provide strategic recommendations.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Settings,
    title: 'Administrative Services',
    description: 'Assist with assessment, application, enrollment, visa, immigration, and student support services.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Handshake,
    title: 'Collaboration & Partnerships',
    description: 'Enhance global reach through strategic collaboration and comprehensive student recruitment services.',
    gradient: 'from-indigo-500 to-blue-500',
  },
];

export function Services() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="services" className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
          }`}
        >
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            🎯 What We Offer
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive University Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide end-to-end support to help higher education institutions expand their reach and recruit top-tier international students.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const [cardRef, cardIsVisible] = useScrollAnimation();

            return (
              <div
                key={index}
                ref={cardRef}
                className={`group p-8 bg-background border border-border rounded-2xl hover:border-primary hover:shadow-lg transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                  cardIsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`inline-block p-4 bg-gradient-to-br ${service.gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Link */}
                <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
