// Education Programs Data - Can be replaced with API call in future
export const educationPrograms = [
  {
    id: 'fulltime-degree',
    name: 'Market Entry & Representation',
    description: 'Localized institutional representation for sustained growth in South Asia',
    icon: 'ME',
    color: '#3B82F6',
    degrees: [
      {
        id: 'fulltime-undergraduate',
        level: 'Undergraduate',
        description: 'Regional market-entry planning and on-ground representation',
        duration: '12-Month Cycle',
        institutions: 25,
        students: 5000,
        color: '#3B82F6',
      },
      {
        id: 'fulltime-postgraduate',
        level: 'Postgraduate',
        description: 'Institution positioning, partner activation, and admissions alignment',
        duration: '6-9 Months',
        institutions: 18,
        students: 2500,
        color: '#3B82F6',
      },
      {
        id: 'fulltime-doctorate',
        level: 'Doctorate',
        description: 'Executive governance and expansion support for strategic markets',
        duration: '3-6 Months',
        institutions: 12,
        students: 1200,
        color: '#3B82F6',
      },
    ],
  },
  {
    id: 'online-program',
    name: 'Digital Demand Generation',
    description: 'Campaign-led digital outreach for qualified application demand',
    icon: 'DG',
    color: '#10B981',
    degrees: [
      {
        id: 'online-undergraduate',
        level: 'Undergraduate',
        description: 'Digital campaign setup and audience targeting framework',
        duration: '12-Month Cycle',
        institutions: 30,
        students: 8000,
        color: '#10B981',
      },
      {
        id: 'online-postgraduate',
        level: 'Postgraduate',
        description: 'Conversion funnel optimization and lead qualification workflows',
        duration: '6-Month Cycle',
        institutions: 22,
        students: 4000,
        color: '#10B981',
      },
      {
        id: 'online-doctorate',
        level: 'Doctorate',
        description: 'Performance analytics and strategic campaign planning',
        duration: 'Quarterly Reviews',
        institutions: 10,
        students: 800,
        color: '#10B981',
      },
    ],
  },
  {
    id: 'vocational-courses',
    name: 'Counselor & Agent Enablement',
    description: 'Structured training and quality controls for partner channels',
    icon: 'CE',
    color: '#F59E0B',
    degrees: [
      {
        id: 'vocational-undergraduate',
        level: 'Undergraduate',
        description: 'Foundational channel onboarding and process training',
        duration: '2-3 Months',
        institutions: 40,
        students: 6000,
        color: '#F59E0B',
      },
      {
        id: 'vocational-postgraduate',
        level: 'Postgraduate',
        description: 'Advanced partner enablement and quality benchmarking',
        duration: '1-2 Months',
        institutions: 20,
        students: 2000,
        color: '#F59E0B',
      },
      {
        id: 'vocational-doctorate',
        level: 'Doctorate',
        description: 'Leadership workshops for channel performance governance',
        duration: '4-8 Weeks',
        institutions: 8,
        students: 400,
        color: '#F59E0B',
      },
    ],
  },
  {
    id: 'internship-abroad',
    name: 'Application Conversion Operations',
    description: 'End-to-end operations to improve offer quality and conversion velocity',
    icon: 'CO',
    color: '#EF4444',
    degrees: [
      {
        id: 'internship-undergraduate',
        level: 'Undergraduate',
        description: 'Pipeline triage and documentation-readiness operations',
        duration: '3-6 Months',
        institutions: 35,
        students: 3500,
        color: '#EF4444',
      },
      {
        id: 'internship-postgraduate',
        level: 'Postgraduate',
        description: 'Offer management and conversion communication support',
        duration: '6-12 Months',
        institutions: 25,
        students: 2500,
        color: '#EF4444',
      },
      {
        id: 'internship-doctorate',
        level: 'Doctorate',
        description: 'Executive dashboards and conversion risk management',
        duration: 'Quarterly Cycle',
        institutions: 15,
        students: 900,
        color: '#EF4444',
      },
    ],
  },
  {
    id: 'summer-winter-school',
    name: 'Partner Events & Delegations',
    description: 'B2B events, institutional visits, and recruitment-facing engagement',
    icon: 'EV',
    color: '#8B5CF6',
    degrees: [
      {
        id: 'summer-winter-undergraduate',
        level: 'Undergraduate',
        description: 'City showcases and institution briefing sessions',
        duration: '2-4 Weeks',
        institutions: 50,
        students: 7000,
        color: '#8B5CF6',
      },
      {
        id: 'summer-winter-postgraduate',
        level: 'Postgraduate',
        description: 'Counselor workshops and partner-network engagement',
        duration: '2-4 Weeks',
        institutions: 35,
        students: 4500,
        color: '#8B5CF6',
      },
      {
        id: 'summer-winter-doctorate',
        level: 'Doctorate',
        description: 'Conference participation and post-event conversion planning',
        duration: '2-4 Weeks',
        institutions: 20,
        students: 2000,
        color: '#8B5CF6',
      },
    ],
  },
];

// Utility function to get program details by ID
export const getProgramById = (programId) => {
  return educationPrograms.find((program) => program.id === programId);
};

// Utility function to get degree details by program and level
export const getDegreeDetails = (programId, degreeId) => {
  const program = getProgramById(programId);
  if (program) {
    return program.degrees.find((degree) => degree.id === degreeId);
  }
  return null;
};

// Utility function to get all program names
export const getProgramNames = () => {
  return educationPrograms.map((program) => ({
    id: program.id,
    name: program.name,
  }));
};

// Function to fetch programs (API-ready - for future backend integration)
export const fetchEducationPrograms = async () => {
  // TODO: Replace with actual API call
  // const response = await fetch('/api/education-programs');
  // return await response.json();
  return educationPrograms;
};
