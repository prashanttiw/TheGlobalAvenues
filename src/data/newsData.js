export const newsItems = [
  {
    id: 1,
    type: 'news',
    title: 'Partnership Expansion Across the UK',
    excerpt:
      'The Global Avenues expanded collaboration with leading UK institutions to strengthen recruitment quality in South Asia.',
    content:
      'The Global Avenues has expanded its collaboration portfolio with leading UK institutions, including multi-intake recruitment plans and in-market visibility initiatives. The engagement model focuses on qualified application pipelines, counselor enablement, and transparent reporting for admissions teams. This expansion supports institutional goals for sustainable growth, stronger conversion quality, and long-term regional presence.',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=800&fit=crop&q=80',
    date: '2024-03-15',
    author: 'Neetu Verma Gupta',
    category: 'Partnership',
    featured: true,
    views: 2500,
    readTime: '5 min read',
  },
  {
    id: 2,
    type: 'blog',
    title: 'How Universities Can Improve Offer Conversion in India',
    excerpt:
      'A practical framework for institutions to improve application quality, decision speed, and final enrollment conversion.',
    content:
      'Offer conversion improves when institutions align market messaging, counselor enablement, and admissions SLAs. In this article, we break down a practical operating model used by our partner network: profile filtering, quality checks before submission, decision timeline governance, and conversion follow-up workflows. Universities using this structure typically see stronger predictability across intakes and better alignment between regional demand and institutional capacity.',
    thumbnail:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=800&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '12:45',
    date: '2024-03-10',
    author: 'The Global Avenues',
    category: 'Growth Strategy',
    featured: true,
    views: 5800,
    readTime: '8 min read',
  },
  {
    id: 3,
    type: 'news',
    title: 'Australia Policy Update: Institutional Action Checklist',
    excerpt:
      'Key policy updates affecting international recruitment and the operational checklist institutions should follow.',
    content:
      'Recent policy updates in Australia affect documentation timelines, applicant profiling, and communication cadence. This update outlines what institutions should align immediately: requirement updates across channels, counselor briefing packs, and SLA checkpoints for the admissions desk. The objective is simple: protect conversion quality while maintaining compliance across every stage of the funnel.',
    image:
      'https://images.unsplash.com/photo-1498419043582-62c3f1f42b78?w=1200&h=800&fit=crop&q=80',
    date: '2024-03-08',
    author: 'Deepshikha Chauhan',
    category: 'Policy Updates',
    featured: false,
    views: 1800,
    readTime: '6 min read',
  },
  {
    id: 4,
    type: 'blog',
    title: 'Building a High-Performance Counselor Enablement Program',
    excerpt:
      'What top-performing institutions do differently to keep counselor channels informed, compliant, and conversion-ready.',
    content:
      'Counselor channels perform best when institutions provide structured enablement. This post covers practical frameworks for quarterly training, program update broadcasts, quality scorecards, and escalation paths. With the right enablement rhythm, institutions reduce mismatch submissions, improve communication quality, and create a more reliable flow of qualified applications.',
    thumbnail:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&h=800&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '18:20',
    date: '2024-03-05',
    author: 'The Global Avenues',
    category: 'Channel Enablement',
    featured: false,
    views: 3200,
    readTime: '10 min read',
  },
  {
    id: 5,
    type: 'news',
    title: 'Merit and Scholarship Campaign Playbook Released',
    excerpt:
      'A campaign model to communicate scholarship opportunities clearly while preserving quality-led recruitment outcomes.',
    content:
      'Scholarship campaigns are most effective when institutions align financial messaging with profile quality requirements. This release includes a practical playbook for intake planning, campaign sequencing, counselor communication, and fast-response admissions handling. The model helps institutions attract right-fit applicants while keeping conversion quality stable.',
    image:
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&h=800&fit=crop&q=80',
    date: '2024-03-01',
    author: 'Naman Sharma',
    category: 'Campaigns',
    featured: false,
    views: 4200,
    readTime: '4 min read',
  },
  {
    id: 6,
    type: 'blog',
    title: 'From Inquiry to Enrollment: A B2B Operations Blueprint',
    excerpt:
      'A detailed operating model for institutions looking to optimize each stage of their international recruitment pipeline.',
    content:
      'This blueprint outlines the core stages of a scalable international recruitment pipeline: inquiry qualification, application readiness, offer conversion management, and post-offer coordination. It also includes reporting structures and accountability checkpoints that help institutions track performance by market, partner type, and intake. Institutions implementing this model gain better visibility and stronger conversion consistency over time.',
    thumbnail:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '15:30',
    date: '2024-02-25',
    author: 'The Global Avenues',
    category: 'Operations',
    featured: false,
    views: 2900,
    readTime: '7 min read',
  },
];

export const getNewsItemById = (id) =>
  newsItems.find((item) => item.id === Number.parseInt(id, 10));

export const getFeaturedNewsItems = () => newsItems.filter((item) => item.featured);
