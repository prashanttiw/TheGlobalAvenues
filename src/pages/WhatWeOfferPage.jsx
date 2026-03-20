import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Zap, Users, Globe, Award, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import { getOfferings } from '../services/contentApi';

const programsData = {
  'fulltime-degree': {
    name: 'Market Entry & Representation',
    description: 'Localized institutional representation for sustained growth in South Asia',
    color: 'from-blue-500 to-blue-600',
    icon: BookOpen,
    overview: 'We position your university in high-potential markets through on-ground representation, recruitment strategy, and brand visibility programs.',
    services: [
      {
        title: 'In-Country Representation',
        description: 'Dedicated local team to represent your institution in priority markets.'
      },
      {
        title: 'Institution Positioning',
        description: 'Clear value proposition and messaging adapted to regional decision-makers.'
      },
      {
        title: 'Channel Development',
        description: 'Build and activate counselor and agency networks aligned to your goals.'
      },
      {
        title: 'Admissions Process Alignment',
        description: 'Optimize workflows between your admissions team and market channels.'
      },
      {
        title: 'Quarterly Business Reviews',
        description: 'Performance reviews with insights, opportunities, and action plans.'
      },
    ],
    requirements: [
      { title: 'Program Portfolio Clarity', description: 'Defined priority programs and intake cycles.' },
      { title: 'Admissions Guidelines', description: 'Transparent criteria and turnaround expectations.' },
      { title: 'Brand Assets', description: 'Approved marketing collateral and communication standards.' },
      { title: 'Decision-Making SPOC', description: 'Institutional point of contact for campaign alignment.' },
      { title: 'Growth KPIs', description: 'Agreement on measurable goals and reporting cadence.' },
    ],
    documents: [
      'Institution profile and brand guidelines',
      'Program matrix with entry requirements',
      'Admissions SOP and timelines',
      'Scholarship and fee policy',
      'Offer and policy process notes',
      'Compliance and partnership policy'
    ],
    countries: [
      'India', 'Nepal', 'Bangladesh', 'Sri Lanka', 'UAE', 'UK', 'Canada', 'Germany', 'Australia'
    ]
  },
  'online-program': {
    name: 'Digital Demand Generation',
    description: 'Campaign-led digital outreach for quality application demand',
    color: 'from-purple-500 to-purple-600',
    icon: Zap,
    overview: 'Run digital-first campaigns to improve program awareness, generate qualified leads, and increase conversion efficiency.',
    services: [
      {
        title: 'Campaign Strategy',
        description: 'Channel mix planning for high-intent segments and priority geographies.'
      },
      {
        title: 'Landing Page & Funnel Setup',
        description: 'Build conversion-ready pathways from awareness to qualified inquiry.'
      },
      {
        title: 'Content Localization',
        description: 'Region-specific content adapted for applicants, counselors, and institution stakeholders.'
      },
      {
        title: 'Lead Qualification Framework',
        description: 'Scoring and filtering rules to improve application quality.'
      },
      {
        title: 'Performance Optimization',
        description: 'Weekly optimization based on CPL, conversion, and intake demand.'
      },
    ],
    requirements: [
      { title: 'Target Segment Definition', description: 'Priority audience and program focus.' },
      { title: 'Approved Messaging', description: 'Institutional positioning for campaign consistency.' },
      { title: 'Response SLA', description: 'Timely follow-up from admissions or recruitment teams.' },
      { title: 'CRM Visibility', description: 'Lead tracking and funnel transparency.' },
    ],
    documents: [
      'Campaign brief and intake objectives',
      'Approved communication templates',
      'Program brochures and fee sheets',
      'Application process FAQs',
      'Scholarship and financial aid details',
      'Contact matrix for escalations'
    ],
    countries: ['Global - Digital Outreach']
  },
  'vocational-courses': {
    name: 'Counselor & Agent Enablement',
    description: 'Structured training and quality controls for partner channels',
    color: 'from-green-500 to-green-600',
    icon: Award,
    overview: 'Strengthen your channel ecosystem with training frameworks, governance controls, and performance-led partner enablement.',
    services: [
      {
        title: 'Partner Onboarding',
        description: 'Structured onboarding for counselors and recruitment agencies.'
      },
      {
        title: 'Training Modules',
        description: 'Program updates, admission criteria, and compliance best practices.'
      },
      {
        title: 'Quality Monitoring',
        description: 'Application quality checks and partner performance review loops.'
      },
      {
        title: 'Incentive Design',
        description: 'Aligned reward models for sustainable and ethical growth.'
      },
      {
        title: 'Partner Communication Hub',
        description: 'Centralized updates, webinars, and support touchpoints.'
      },
    ],
    requirements: [
      { title: 'Channel Policy', description: 'Defined partner code of conduct and compliance terms.' },
      { title: 'Training Calendar', description: 'Regular enablement schedule across intakes.' },
      { title: 'Quality Benchmarks', description: 'Submission standards and rejection controls.' },
    ],
    documents: [
      'Partner onboarding toolkit',
      'Program fact sheets',
      'Admission and visa requirement notes',
      'Compliance declaration templates',
      'Performance scorecard format'
    ],
    countries: ['India', 'Nepal', 'Bangladesh', 'Sri Lanka', 'Middle East']
  },
  'internship-abroad': {
    name: 'Application Conversion Operations',
    description: 'End-to-end operations to improve offer quality and conversion velocity',
    color: 'from-orange-500 to-orange-600',
    icon: Globe,
    overview: 'We support your admission funnel from inquiry to enrollment with process governance, conversion nudges, and stakeholder coordination.',
    services: [
      {
        title: 'Application Triage',
        description: 'Pre-screening and profile matching to reduce non-fit submissions.'
      },
      {
        title: 'Document Readiness',
        description: 'Structured support to improve first-pass application quality.'
      },
      {
        title: 'Offer Acceptance Support',
        description: 'Coordinated communication to improve decision timelines.'
      },
      {
        title: 'Offer Conversion Coordination',
        description: 'Support operations for post-offer conversion continuity.'
      },
      {
        title: 'Intake Forecasting',
        description: 'Pipeline forecasting for better planning and resource allocation.'
      },
    ],
    requirements: [
      { title: 'Clear Admissions Criteria', description: 'Program-level eligibility and priorities.' },
      { title: 'Offer Timelines', description: 'Defined SLA for review and decisions.' },
      { title: 'Conversion KPIs', description: 'Offer-to-enrollment targets and monitoring cadence.' },
      { title: 'Escalation Matrix', description: 'Fast resolution path for critical cases.' },
    ],
    documents: [
      'Application checklist by program',
      'Decision timeline matrix',
      'Offer communication templates',
      'Visa support FAQs',
      'Pre-departure communication flow'
    ],
    countries: ['UK', 'Canada', 'USA', 'Germany', 'France', 'Australia', 'Netherlands']
  },
  'summer-winter-school': {
    name: 'Partner Events & Delegations',
    description: 'B2B events, institutional visits, and recruitment-facing engagement',
    color: 'from-pink-500 to-pink-600',
    icon: Users,
    overview: 'Create direct engagement with schools, counselors, and recruitment networks through curated B2B events and institutional delegations.',
    services: [
      {
        title: 'Institution Showcases',
        description: 'City-based events to present programs and value proposition.'
      },
      {
        title: 'Counselor Workshops',
        description: 'Focused sessions for training and relationship strengthening.'
      },
      {
        title: 'Delegation Planning',
        description: 'End-to-end planning for regional visits and institutional meetings.'
      },
      {
        title: 'B2B Conference Support',
        description: 'Participation strategy and execution at key industry events.'
      },
      {
        title: 'Post-Event Follow Through',
        description: 'Lead capture, partner follow-up, and conversion handover support.'
      },
    ],
    requirements: [
      { title: 'Event Objectives', description: 'Clear targets by geography and stakeholder type.' },
      { title: 'Speaker Availability', description: 'Institution representation for sessions and meetings.' },
      { title: 'Program Priorities', description: 'Defined portfolio focus for outreach events.' },
    ],
    documents: [
      'Event calendar and priority locations',
      'Presentation deck and brochures',
      'Speaker notes and FAQs',
      'Lead capture and follow-up workflow',
      'Reporting template for event outcomes'
    ],
    countries: ['India', 'UAE', 'Nepal', 'Sri Lanka', 'Bangladesh', 'Europe']
  }
};

export default function WhatWeOfferPage() {
  const [activeTab, setActiveTab] = useState('fulltime-degree');
  const [apiProgramMap, setApiProgramMap] = useState({});

  const parseCountries = (value) =>
    String(value || '')
      .split(/[,|;/]/)
      .map((item) => item.trim())
      .filter(Boolean);

  const mergedPrograms = useMemo(() => {
    const defaultColors = [
      'from-blue-500 to-blue-600',
      'from-purple-500 to-purple-600',
      'from-green-500 to-green-600',
      'from-orange-500 to-orange-600',
      'from-pink-500 to-pink-600',
    ];
    const defaultIcons = [BookOpen, Zap, Award, Globe, Users];

    const merged = { ...programsData };

    Object.entries(apiProgramMap).forEach(([slug, offering], index) => {
      const fallback = merged[slug];
      const generated = {
        name: offering.title || `Program ${index + 1}`,
        description: offering.description || 'Explore this service track with structured execution support from our team.',
        color: defaultColors[index % defaultColors.length],
        icon: defaultIcons[index % defaultIcons.length],
        overview:
          offering.description || 'Detailed program information will be added soon.',
        services: [
          {
            title: 'Expert Guidance',
            description:
              'Our team aligns your institution goals, market priorities, and delivery process.',
          },
        ],
        requirements: [
          {
            title: 'Eligibility Review',
            description: 'Requirements vary by institution policy and target market.',
          },
        ],
        documents: ['Institution Brief', 'Program Matrix', 'Partner SOP'],
        countries: parseCountries(offering.countries),
      };

      merged[slug] = {
        ...(fallback || generated),
        ...(offering.title ? { name: offering.title } : {}),
        ...(offering.description ? { overview: offering.description } : {}),
        ...(parseCountries(offering.countries).length > 0
          ? { countries: parseCountries(offering.countries) }
          : {}),
      };
    });

    return merged;
  }, [apiProgramMap]);

  useEffect(() => {
    const controller = new AbortController();

    const loadOfferings = async () => {
      try {
        const data = await getOfferings({ signal: controller.signal });
        const offerings = Array.isArray(data) ? data : [];

        if (offerings.length === 0) {
          return;
        }

        const mapped = offerings.reduce((acc, item) => {
          const slug = String(item.slug || '').trim();
          if (!slug) return acc;
          acc[slug] = item;
          return acc;
        }, {});

        if (Object.keys(mapped).length > 0) {
          setApiProgramMap(mapped);
        }
      } catch (error) {
        if (error.name === 'AbortError') return;
      }
    };

    loadOfferings();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (mergedPrograms[activeTab]) return;
    const firstProgram = Object.keys(mergedPrograms)[0];
    if (firstProgram) {
      setActiveTab(firstProgram);
    }
  }, [activeTab, mergedPrograms]);

  const currentProgram = mergedPrograms[activeTab] || programsData['fulltime-degree'];
  const CurrentIcon = currentProgram.icon;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            What We Offer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our institution-first service tracks built to strengthen market presence and conversion quality
          </motion.p>
        </div>

        {/* Tabs Navigation */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start md:gap-3 mb-12">
            {Object.entries(mergedPrograms).map(([key, program]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-muted text-foreground hover:bg-muted-foreground/20'
                }`}
              >
                <span className="hidden sm:inline">{program.name}</span>
                <span className="sm:hidden">{program.name.split(' ')[0]}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${currentProgram.color} text-white`}>
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">{currentProgram.name}</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">{currentProgram.overview}</p>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Services */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Services</h3>
                <div className="space-y-4">
                  {currentProgram.services.map((service, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="flex gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Requirements</h3>
                <div className="space-y-4">
                  {currentProgram.requirements.map((req, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border"
                    >
                      <h4 className="font-semibold text-foreground mb-2">{req.title}</h4>
                      <p className="text-sm text-muted-foreground">{req.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Documents Required */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-6">Documents Typically Required</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentProgram.documents.map((doc, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.03 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span className="text-foreground text-sm">{doc}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Countries */}
            <div className="mb-12 p-8 rounded-xl bg-gradient-to-br from-muted/50 to-background border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-primary" />
                Countries Offering This Program
              </h3>
              <div className="flex flex-wrap gap-3">
                {currentProgram.countries.map((country, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: idx * 0.05 }}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium border border-primary/20"
                  >
                    {country}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                to={`/education-program/${activeTab}/undergraduate`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Explore {currentProgram.name}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Partner With Us?</h2>
            <p className="text-lg text-muted-foreground">We provide full-cycle partnership support from strategy to measurable outcomes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Expert Guidance',
                description: 'Our experienced consultants align strategy, channels, and delivery with your institution goals.',
                icon: Users
              },
              {
                title: 'Global Network',
                description: 'Access to partnerships with top universities and institutions worldwide.',
                icon: Globe
              },
              {
                title: 'Complete Support',
                description: 'From demand generation to application conversion, we support every stage of the partnership lifecycle.',
                icon: CheckCircle
              }
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-8 rounded-xl bg-background border border-border hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Scale Your Institutional Reach?</h2>
          <p className="text-lg text-muted-foreground mb-8">Connect with our team to design a partnership model aligned to your growth priorities.</p>
          <Link
            to="/collaborate"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Start the Partnership
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
