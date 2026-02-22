import { GraduationCap, DollarSign, Plane, Passport, CheckCircle, BookOpen } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      number: '01',
      icon: GraduationCap,
      title: 'Choose University',
      description: 'Access our network of 350+ degree programs at reputed partner universities worldwide.'
    },
    {
      number: '02',
      icon: DollarSign,
      title: 'Financial Guidance',
      description: 'Receive comprehensive guidance on funding requirements and cost of living analysis.'
    },
    {
      number: '03',
      icon: Passport,
      title: 'Visa Process',
      description: 'Professional visa interview preparation and complete documentation support.'
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Fast Acceptance',
      description: 'Streamlined application process with acceptance within 72 hours.'
    },
    {
      number: '05',
      icon: BookOpen,
      title: 'Pre-Departure',
      description: 'Comprehensive briefing and orientation for smooth transition to your destination.'
    },
    {
      number: '06',
      icon: Plane,
      title: 'Arrival Support',
      description: 'On-arrival assistance, accommodation guidance, and ongoing student support services.'
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">End-to-End Student Journey</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            We support you at every step from university selection to arrival and beyond.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && index % 3 !== 2 && (
                  <div className="hidden md:block absolute top-24 -right-4 w-8 h-1 bg-gradient-to-r from-secondary to-transparent"></div>
                )}

                {/* Card */}
                <div className="bg-white rounded-xl p-8 border border-border hover:border-primary transition-colors h-full">
                  {/* Step Number and Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-4xl font-bold text-muted-foreground opacity-30">{step.number}</span>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="text-primary" size={24} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>

                  {/* Accent */}
                  <div className="mt-6 h-1 w-12 bg-secondary rounded-full"></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start your international education journey?
          </p>
          <button className="btn-primary">Begin Your Journey</button>
        </div>
      </div>
    </section>
  )
}
