// Portfolio data - easily update this to fetch from API in future
export const portfolioData = [
  {
    id: 1,
    title: "Global Talent Recruitment Platform",
    category: "Recruitment Technology",
    description: "Developed a comprehensive talent acquisition platform that connects organizations with top international talent, featuring AI-powered matching and streamlined hiring workflows.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "AI/ML", "Cloud"],
    year: 2024,
    impact: "Connected 5000+ candidates with leading organizations"
  },
  {
    id: 2,
    title: "International Compliance Management System",
    category: "Enterprise Solutions",
    description: "Built a multi-country compliance framework for regulatory adherence across different jurisdictions, ensuring seamless operations for multinational enterprises.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    technologies: ["Node.js", "PostgreSQL", "Docker", "AWS"],
    year: 2024,
    impact: "Reduced compliance costs by 40%"
  },
  {
    id: 3,
    title: "Executive Search & Placement",
    category: "C-Level Recruitment",
    description: "Executed targeted search campaigns for C-suite positions across Europe, Asia, and Americas, placing 20+ executives in Fortune 500 companies.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    technologies: ["CRM Systems", "Analytics", "Database"],
    year: 2023,
    impact: "Successfully placed 20+ executives globally"
  },
  {
    id: 4,
    title: "Skills Assessment & Verification",
    category: "Talent Verification",
    description: "Implemented a comprehensive verification system for candidate skills and credentials, ensuring quality and authenticity across all hires.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    technologies: ["Python", "Machine Learning", "Blockchain"],
    year: 2023,
    impact: "Verified credentials for 10,000+ professionals"
  },
  {
    id: 5,
    title: "Workforce Analytics Dashboard",
    category: "Business Intelligence",
    description: "Created an advanced analytics platform providing real-time insights into workforce trends, talent gaps, and strategic recommendations.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    technologies: ["React", "D3.js", "BigQuery", "Python"],
    year: 2023,
    impact: "Enabled data-driven decisions for 50+ clients"
  },
  {
    id: 6,
    title: "Cross-Border Talent Mobility Program",
    category: "International Expansion",
    description: "Facilitated seamless international assignments and visa processing for multinational organizations, simplifying global mobility.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    technologies: ["Workflow Automation", "Compliance Tools"],
    year: 2022,
    impact: "Processed 1000+ international assignments"
  }
];

// Function to fetch portfolio data from API (ready for future integration)
// Update this function to point to your API endpoint
export async function fetchPortfolioData() {
  try {
    // Example: const response = await fetch('https://your-api.com/portfolio');
    // return await response.json();
    
    // For now, return mock data
    return portfolioData;
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    return portfolioData;
  }
}
