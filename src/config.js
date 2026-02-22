// Configuration file for The Global Avenues website
// Update these values to customize the site content

export const SITE_CONFIG = {
  // Company Information
  company: {
    name: 'The Global Avenues',
    shortName: 'TGA',
    description: 'Your trusted partner for international student recruitment in South Asia',
    tagline: 'Unlock Your Potential With The Global Avenues',
    year: new Date().getFullYear(),
  },

  // Contact Information
  contact: {
    phone: ['+91 11 4680 1133', '+91 93198 31133', '+91 97178 01133'],
    email: {
      general: 'connect@theglobalavenues.com',
      admissions: 'admissions@theglobalavenues.com',
      partnerships: 'partnerships@theglobalavenues.com',
    },
    address: {
      street: 'A 6, Block A, South Extension II',
      city: 'New Delhi',
      state: 'Delhi',
      country: 'India',
      zipcode: '110049',
    },
  },

  // Social Media Links
  social: {
    facebook: 'https://facebook.com/theglobalavenues',
    linkedin: 'https://linkedin.com/company/theglobalavenues',
    youtube: 'https://youtube.com/theglobalavenues',
    instagram: 'https://instagram.com/theglobalavenues',
    whatsapp: 'https://wa.me/919131983113',
  },

  // Statistics
  stats: {
    studentsRecruited: '3000+',
    partnerUniversities: '50+',
    countriesCovered: '15+',
    visaSuccessRate: '98%',
  },

  // Navigation Links
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ],

  // Services
  services: [
    {
      title: 'In-Country Representation',
      description: 'Establish your international institution\'s presence locally and maximize student recruitment potential in South Asia.',
      icon: 'Globe',
    },
    {
      title: 'Marketing & Promotion',
      description: 'Strategic marketing campaigns and targeted promotional activities to attract top-tier international students.',
      icon: 'TrendingUp',
    },
    {
      title: 'Agent Management',
      description: 'Develop recruitment strategies, provide personalized counseling, and organize informative sessions for prospective students.',
      icon: 'Users',
    },
    {
      title: 'Market Research & Analysis',
      description: 'Deep market insights and strategic recommendations to enhance your international recruitment efforts.',
      icon: 'FileText',
    },
    {
      title: 'Administrative Services',
      description: 'Complete support from assessment, application, enrollment, visa processing to ongoing student support.',
      icon: 'Zap',
    },
    {
      title: 'Partnerships & Collaboration',
      description: 'Strategic alliances with educational institutions, EdTech platforms, and service providers.',
      icon: 'Handshake',
    },
  ],

  // Portfolio API Configuration
  portfolio: {
    // Set this to your API endpoint for dynamic data
    apiEndpoint: null, // null = use mock data, set to 'YOUR_API_URL/portfolios' for live data
    itemsPerPage: 6,
    categories: ['All', 'University Partnership', 'Program Launch', 'Multi-University', 'Consortium', 'Foundation Year', 'Pathway Program'],
  },

  // Process Steps
  processSteps: [
    {
      number: '01',
      title: 'Choose University',
      description: 'Access our network of 350+ degree programs at reputed partner universities worldwide.',
      icon: 'GraduationCap',
    },
    {
      number: '02',
      title: 'Financial Guidance',
      description: 'Receive comprehensive guidance on funding requirements and cost of living analysis.',
      icon: 'DollarSign',
    },
    {
      number: '03',
      title: 'Visa Process',
      description: 'Professional visa interview preparation and complete documentation support.',
      icon: 'Passport',
    },
    {
      number: '04',
      title: 'Fast Acceptance',
      description: 'Streamlined application process with acceptance within 72 hours.',
      icon: 'CheckCircle',
    },
    {
      number: '05',
      title: 'Pre-Departure',
      description: 'Comprehensive briefing and orientation for smooth transition to your destination.',
      icon: 'BookOpen',
    },
    {
      number: '06',
      title: 'Arrival Support',
      description: 'On-arrival assistance, accommodation guidance, and ongoing student support services.',
      icon: 'Plane',
    },
  ],

  // Color Theme Configuration
  colors: {
    primary: '#1e3a8a',      // Navy Blue
    secondary: '#d97706',    // Gold
    foreground: '#1f2937',   // Dark gray
    background: '#ffffff',   // White
    muted: '#d1d5db',        // Light gray
    accent: '#1e3a8a',       // Same as primary
  },

  // SEO Meta Tags
  seo: {
    title: 'The Global Avenues - International Student Recruitment',
    description: 'Your trusted partner for international student recruitment in South Asia. 3000+ successful placements with 98% visa success rate.',
    keywords: 'international education, student recruitment, South Asia, universities, visa support',
    author: 'The Global Avenues',
    ogImage: '/logo.png',
  },

  // Features
  features: {
    mobileResponsive: true,
    darkMode: false,
    apiIntegration: true,
    analytics: false, // Set to true if using analytics
    contactForm: true,
  },

  // Footer Links
  footerLinks: {
    quickLinks: [
      { name: 'Home', href: '#' },
      { name: 'Services', href: '#services' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'About Us', href: '#about' },
    ],
    services: [
      { name: 'In-Country Representation', href: '#' },
      { name: 'Marketing & Promotion', href: '#' },
      { name: 'Visa Support', href: '#' },
      { name: 'Student Counseling', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Disclaimer', href: '#' },
    ],
  },
}

export default SITE_CONFIG
