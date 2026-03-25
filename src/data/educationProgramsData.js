// B2B Offerings Data for The Global Avenues
export const educationPrograms = [
  {
    id: 'fulltime-degree',
    name: 'Market Entry & In-Country Representation',
    description:
      'Build structured market presence with local representation, positioning, and partner activation.',
    icon: 'ME',
    color: '#3B82F6',
    regions: ['India & South Asia'],
    modules: [
      {
        title: 'Market Prioritization',
        detail:
          'Identify high-potential cities, segments, and intakes based on demand and fit.',
      },
      {
        title: 'Institution Positioning',
        detail:
          'Refine messaging, differentiation, and program narratives for local stakeholders.',
      },
      {
        title: 'On-Ground Representation',
        detail:
          'Dedicated market team to represent your university with counselors and schools.',
      },
      {
        title: 'Partner Activation',
        detail:
          'Launch and manage counselor/agent channels with clear quality standards.',
      },
    ],
    kpis: [
      'Qualified inquiry volume',
      'Agent activation rate',
      'Application quality score',
      'Offer-to-enrollment conversion',
    ],
    complianceFocus: [
      'Brand and communication control',
      'Partner code-of-conduct adherence',
      'Transparent escalation pathway',
      'Weekly pipeline governance',
    ],
    outcomes: [
      'Faster market-entry readiness',
      'Stronger brand consistency across channels',
      'Higher-fit application pipelines',
    ],
    degrees: [
      {
        id: 'fulltime-degree-undergraduate',
        level: 'Launch Sprint',
        description:
          '90-day go-to-market setup for one priority region with core representation.',
        duration: 'First 90 Days',
        students: 1200,
        team: 'Market Lead + Partner Success Manager',
        reporting: '1-month execution cycle with progress tracking and strategic review.',
        focus: 'Entry readiness',
        conversionTarget: '10-14%',
        color: '#3B82F6',
      },
      {
        id: 'fulltime-degree-postgraduate',
        level: 'Growth Engine',
        description:
          'Scale across priority cities with stronger channel governance and demand planning.',
        duration: 'Quarterly Cycle',
        students: 3200,
        team: 'Regional Manager + Admissions Operations',
        reporting: '1-month execution cycle with progress tracking and strategic review.',
        focus: 'Multi-city scale',
        conversionTarget: '14-18%',
        color: '#3B82F6',
      },
      {
        id: 'fulltime-degree-doctorate',
        level: 'Enterprise Command',
        description:
          'Executive oversight for multi-market growth, quality controls, and strategic expansion.',
        duration: 'Bi-Annual Strategic Plan',
        students: 6500,
        team: 'Program Director + Insights Analyst + Ops Desk',
        reporting: '1-month execution cycle with progress tracking and strategic review.',
        focus: 'Portfolio-wide expansion',
        conversionTarget: '18-24%',
        color: '#3B82F6',
      },
    ],
  },
  {
    id: 'online-program',
    name: 'Digital Demand Generation',
    description:
      'Run data-driven digital campaigns to increase quality inquiries and improve funnel efficiency.',
    icon: 'DG',
    color: '#10B981',
    regions: ['India & South Asia'],
    modules: [
      {
        title: 'Audience & Channel Strategy',
        detail:
          'Define high-intent audience clusters and allocate spend by intake and destination.',
      },
      {
        title: 'Funnel & Landing Experience',
        detail:
          'Create high-conversion destination/program pages with clear qualification paths.',
      },
      {
        title: 'Lead Scoring Framework',
        detail:
          'Apply quality filters so admissions teams receive better-fit prospects.',
      },
      {
        title: 'Performance Optimization',
        detail:
          'Weekly optimization on CPL, lead quality, and conversion milestones.',
      },
    ],
    kpis: [
      'Cost per qualified lead',
      'Lead-to-application conversion',
      'Landing page conversion rate',
      'Channel ROI by market',
    ],
    complianceFocus: [
      'Data consent and privacy safeguards',
      'Approved messaging governance',
      'Campaign-level audit trail',
      'Destination-specific communication rules',
    ],
    outcomes: [
      'Lower cost of quality acquisition',
      'Higher campaign-to-application efficiency',
      'Predictable intake pipeline visibility',
    ],
    degrees: [
      {
        id: 'online-program-undergraduate',
        level: 'Launch Sprint',
        description:
          'Set up full-funnel campaigns for one destination and two priority programs.',
        duration: '6-8 Weeks',
        students: 1500,
        team: 'Campaign Manager + Content Specialist',
        reporting: '1-month execution cycle with progress tracking and strategic review.',
        focus: 'Channel validation',
        conversionTarget: '8-12%',
        color: '#10B981',
      },
      {
        id: 'online-program-postgraduate',
        level: 'Growth Engine',
        description:
          'Scale paid, organic, and partner co-marketing with quality-led filtering.',
        duration: 'Quarterly Optimization Loop',
        students: 4200,
        team: 'Growth Lead + Conversion Analyst + Ops SPOC',
        reporting: '1-month execution cycle with progress tracking and strategic review.',
        focus: 'Conversion acceleration',
        conversionTarget: '12-17%',
        color: '#10B981',
      },
      {
        id: 'online-program-doctorate',
        level: 'Enterprise Command',
        description:
          'Multi-market demand generation with unified attribution and executive reporting.',
        duration: 'Annual Demand Plan',
        students: 8200,
        team: 'Performance Pod + Insights Desk',
        reporting: '1-month execution cycle with progress tracking and strategic review.',
        focus: 'Portfolio-level demand',
        conversionTarget: '16-22%',
        color: '#10B981',
      },
    ],
  },
  {
    id: 'vocational-courses',
    name: 'Counselor & Agent Enablement',
    description:
      'Train, govern, and scale channel partners with clear quality standards and accountability.',
    icon: 'CE',
    color: '#F59E0B',
    regions: ['India & South Asia'],
    modules: [
      {
        title: 'Partner Onboarding Playbook',
        detail:
          'Structured onboarding workflows for agencies and school counselor networks.',
      },
      {
        title: 'Training Academy',
        detail:
          'Program updates, eligibility workshops, visa readiness, and compliance training.',
      },
      {
        title: 'Quality Assurance Checks',
        detail:
          'Submission quality scorecards and rejection root-cause controls.',
      },
      {
        title: 'Partner Performance Governance',
        detail:
          'Cadenced partner reviews with incentives tied to quality outcomes.',
      },
    ],
    kpis: [
      'Partner activation velocity',
      'Training completion rate',
      'Application acceptance ratio',
      'Rework and rejection reduction',
    ],
    complianceFocus: [
      'Agent/counselor code of conduct',
      'Curbing migration risk',
      'Document authenticity checks',
      'Escalation and incident controls',
    ],
    outcomes: [
      'Stronger channel quality control',
      'More predictable partner output',
      'Reduced low-fit submissions',
    ],
    degrees: [
      {
        id: 'vocational-courses-undergraduate',
        level: 'Launch Sprint',
        description:
          'Build a compliant onboarding and training baseline for priority partners.',
        duration: '45-60 Days',
        students: 1800,
        team: 'Partner Trainer + QA Coordinator',
        reporting: 'Reporting & Strategic Management',
        focus: 'Partner onboarding quality',
        conversionTarget: '9-13%',
        color: '#F59E0B',
      },
      {
        id: 'vocational-courses-postgraduate',
        level: 'Growth Engine',
        description:
          'Expand partner network with performance segmentation and governed communication.',
        duration: 'Quarterly Partner Cycle',
        students: 3600,
        team: 'Partner Success Pod + Compliance Reviewer',
        reporting: 'Reporting & Strategic Management',
        focus: 'Network scale with control',
        conversionTarget: '13-18%',
        color: '#F59E0B',
      },
      {
        id: 'vocational-courses-doctorate',
        level: 'Enterprise Command',
        description:
          'Deploy a mature partner ecosystem with policy-led governance and tiered incentives.',
        duration: 'Bi-Annual Governance Plan',
        students: 7000,
        team: 'Channel Director + Audit & Risk Desk',
        reporting: 'Reporting & Strategic Management',
        focus: 'Enterprise partner governance',
        conversionTarget: '18-23%',
        color: '#F59E0B',
      },
    ],
  },
  {
    id: 'internship-abroad',
    name: 'Admissions & Conversion Operations',
    description:
      'Support admissions flow from inquiry to enrollment through process controls and execution rigor.',
    icon: 'CO',
    color: '#EF4444',
    regions: ['India & South Asia', 'USA/Europe'],
    modules: [
      {
        title: 'Application Triage',
        detail:
          'Pre-screen applications to improve fit, completeness, and processing speed.',
      },
      {
        title: 'Document Readiness',
        detail:
          'Checklist-led controls for financial, academic, and supporting documentation.',
      },
      {
        title: 'Offer-to-Enrollment Nurture',
        detail:
          'Stage-based communication to reduce drop-offs after offer issuance.',
      },
      {
        title: 'Pipeline Forecasting',
        detail:
          'Intake-specific projections to support planning and resource allocation.',
      },
    ],
    kpis: [
      'Application turnaround time',
      'Offer acceptance rate',
      'Offer-to-enrollment conversion',
      'Decision-cycle reduction',
    ],
    complianceFocus: [
      'Admissions criteria consistency',
      'Document control checkpoints',
      'Destination-specific policy adherence',
    ],
    outcomes: [
      'Lower processing friction',
      'Faster conversion velocity',
      'Higher enrollment predictability',
    ],
    degrees: [
      {
        id: 'internship-abroad-undergraduate',
        level: 'Launch Sprint',
        description:
          'Implement core admissions triage and checklist governance for one intake.',
        duration: '8-10 Weeks',
        students: 1300,
        team: 'Admissions Coordinator + QA Analyst',
        reporting: '1-month execution cycle with progress tracking and strategic review.',
        focus: 'Cycle-time stabilization',
        conversionTarget: '11-15%',
        color: '#EF4444',
      },
      {
        id: 'internship-abroad-postgraduate',
        level: 'Growth Engine',
        description:
          'Scale offer management and conversion workflows across programs and destinations.',
        duration: 'Quarterly Intake Operations',
        students: 3400,
        team: 'Conversion Lead + Ops Team + Escalation SPOC',
        reporting: '1-month execution cycle with progress tracking and strategic review.',
        focus: 'Offer conversion acceleration',
        conversionTarget: '15-20%',
        color: '#EF4444',
      },
      {
        id: 'internship-abroad-doctorate',
        level: 'Enterprise Command',
        description:
          'Drive cross-market operations with executive risk monitoring and forecasting.',
        duration: 'Annual Conversion Program',
        students: 7600,
        team: 'Operations Director + Planning Analyst',
        reporting: '1-month execution cycle with progress tracking and strategic review.',
        focus: 'Portfolio conversion control',
        conversionTarget: '20-26%',
        color: '#EF4444',
      },
    ],
  },
  {
    id: 'summer-winter-school',
    name: 'Partner Events & Delegations',
    description:
      'Execute B2B showcases, counselor workshops, and delegation programs that create qualified opportunities.',
    icon: 'EV',
    color: '#8B5CF6',
    regions: ['India & South Asia'],
    modules: [
      {
        title: 'Institution Showcases',
        detail:
          'City-specific showcases with pre-qualified counselor and school audiences.',
      },
      {
        title: 'Counselor Workshops',
        detail:
          'Focused training sessions to align partners with programs and processes.',
      },
      {
        title: 'Delegation Planning',
        detail:
          'End-to-end planning for leadership visits, meetings, and strategic engagements.',
      },
      {
        title: 'Post-Event Conversion Loop',
        detail:
          'Structured follow-up and handoff to admissions and partner success teams.',
      },
    ],
    kpis: [
      'Event-to-opportunity conversion',
      'Qualified meeting volume',
      'Partner engagement score',
      'Post-event pipeline velocity',
    ],
    complianceFocus: [
      'Event communication governance',
      'Lead capture quality standards',
      'Consent and data handling controls',
    ],
    outcomes: [
      'Stronger institution visibility in target markets',
      'Higher-value counselor and partner interactions',
      'More structured post-event conversion',
    ],
    degrees: [
      {
        id: 'summer-winter-school-undergraduate',
        level: 'Launch Sprint',
        description:
          'Plan and execute one regional event cycle with follow-up governance.',
        duration: '4-6 Weeks',
        students: 1100,
        team: 'Event Lead + Partner Success SPOC',
        reporting: '1-month execution cycle with progress tracking and strategic review.',
        focus: 'Event pilot execution',
        conversionTarget: '8-11%',
        color: '#8B5CF6',
      },
      {
        id: 'summer-winter-school-postgraduate',
        level: 'Growth Engine',
        description:
          'Run a multi-city calendar with workshop tracks and partner outcomes management.',
        duration: 'Quarterly Event Calendar',
        students: 2700,
        team: 'Regional Events Pod + Conversion Coordinator',
        reporting: '1-month execution cycle with progress tracking and strategic review.',
        focus: 'Multi-city event scale',
        conversionTarget: '11-16%',
        color: '#8B5CF6',
      },
      {
        id: 'summer-winter-school-doctorate',
        level: 'Enterprise Command',
        description:
          'Institution-wide event strategy tied to pipeline planning and growth goals.',
        duration: 'Annual Delegation Program',
        students: 5200,
        team: 'Strategic Events Director + Insights Analyst',
        reporting: '1-month execution cycle with progress tracking and strategic review.',
        focus: 'Strategic visibility and conversion',
        conversionTarget: '16-22%',
        color: '#8B5CF6',
      },
    ],
  },
];

// Utility function to get program details by ID
export const getProgramById = (programId) =>
  educationPrograms.find((program) => program.id === programId);

// Utility function to get degree details by program and level ID
export const getDegreeDetails = (programId, degreeId) => {
  const program = getProgramById(programId);
  if (!program) return null;
  return program.degrees.find((degree) => degree.id === degreeId) || null;
};

// Utility function to get all program names
export const getProgramNames = () =>
  educationPrograms.map((program) => ({
    id: program.id,
    name: program.name,
  }));

// API-ready wrapper for future backend integration
export const fetchEducationPrograms = async () => educationPrograms;
