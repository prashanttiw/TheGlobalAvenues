// Education Programs Data - Can be replaced with API call in future
export const educationPrograms = [
  {
    id: 'fulltime-degree',
    name: 'Full Time Degree Program',
    description: 'Comprehensive full-time degree programs designed for immersive learning',
    icon: '📚',
    color: '#3B82F6',
    degrees: [
      {
        id: 'fulltime-undergraduate',
        level: 'Undergraduate',
        description: 'Undergraduate Full Time Degree Program',
        duration: '4 Years',
        institutions: 25,
        students: 5000,
        color: '#3B82F6'
      },
      {
        id: 'fulltime-postgraduate',
        level: 'Postgraduate',
        description: 'Postgraduate Full Time Degree Program',
        duration: '2-3 Years',
        institutions: 18,
        students: 2500,
        color: '#3B82F6'
      },
      {
        id: 'fulltime-doctorate',
        level: 'Doctorate',
        description: 'Doctoral Full Time Degree Program',
        duration: '3-5 Years',
        institutions: 12,
        students: 1200,
        color: '#3B82F6'
      }
    ]
  },
  {
    id: 'online-program',
    name: 'Online Program',
    description: 'Flexible online learning opportunities accessible from anywhere',
    icon: '💻',
    color: '#10B981',
    degrees: [
      {
        id: 'online-undergraduate',
        level: 'Undergraduate',
        description: 'Undergraduate Online Program',
        duration: '4 Years',
        institutions: 30,
        students: 8000,
        color: '#10B981'
      },
      {
        id: 'online-postgraduate',
        level: 'Postgraduate',
        description: 'Postgraduate Online Program',
        duration: '2 Years',
        institutions: 22,
        students: 4000,
        color: '#10B981'
      },
      {
        id: 'online-doctorate',
        level: 'Doctorate',
        description: 'Doctoral Online Program',
        duration: '3-4 Years',
        institutions: 10,
        students: 800,
        color: '#10B981'
      }
    ]
  },
  {
    id: 'vocational-courses',
    name: 'Vocational Courses',
    description: 'Industry-focused vocational training and skill development programs',
    icon: '🛠️',
    color: '#F59E0B',
    degrees: [
      {
        id: 'vocational-undergraduate',
        level: 'Undergraduate',
        description: 'Undergraduate Vocational Courses',
        duration: '2-3 Years',
        institutions: 40,
        students: 6000,
        color: '#F59E0B'
      },
      {
        id: 'vocational-postgraduate',
        level: 'Postgraduate',
        description: 'Postgraduate Vocational Courses',
        duration: '1-2 Years',
        institutions: 20,
        students: 2000,
        color: '#F59E0B'
      },
      {
        id: 'vocational-doctorate',
        level: 'Doctorate',
        description: 'Doctoral Vocational Research Program',
        duration: '2-3 Years',
        institutions: 8,
        students: 400,
        color: '#F59E0B'
      }
    ]
  },
  {
    id: 'internship-abroad',
    name: 'Internship Abroad',
    description: 'International internship opportunities for practical global experience',
    icon: '🌍',
    color: '#EF4444',
    degrees: [
      {
        id: 'internship-undergraduate',
        level: 'Undergraduate',
        description: 'Undergraduate Internship Abroad',
        duration: '3-6 Months',
        institutions: 35,
        students: 3500,
        color: '#EF4444'
      },
      {
        id: 'internship-postgraduate',
        level: 'Postgraduate',
        description: 'Postgraduate Internship Abroad',
        duration: '6-12 Months',
        institutions: 25,
        students: 2500,
        color: '#EF4444'
      },
      {
        id: 'internship-doctorate',
        level: 'Doctorate',
        description: 'Doctoral Research Internship Abroad',
        duration: '6-12 Months',
        institutions: 15,
        students: 900,
        color: '#EF4444'
      }
    ]
  },
  {
    id: 'summer-winter-school',
    name: 'Summer/Winter School',
    description: 'Intensive seasonal programs for skill enhancement and global networking',
    icon: '☀️',
    color: '#8B5CF6',
    degrees: [
      {
        id: 'summer-winter-undergraduate',
        level: 'Undergraduate',
        description: 'Undergraduate Summer/Winter School',
        duration: '2-4 Weeks',
        institutions: 50,
        students: 7000,
        color: '#8B5CF6'
      },
      {
        id: 'summer-winter-postgraduate',
        level: 'Postgraduate',
        description: 'Postgraduate Summer/Winter School',
        duration: '2-4 Weeks',
        institutions: 35,
        students: 4500,
        color: '#8B5CF6'
      },
      {
        id: 'summer-winter-doctorate',
        level: 'Doctorate',
        description: 'Doctoral Summer/Winter School',
        duration: '2-4 Weeks',
        institutions: 20,
        students: 2000,
        color: '#8B5CF6'
      }
    ]
  }
];

// Utility function to get program details by ID
export const getProgramById = (programId) => {
  return educationPrograms.find(program => program.id === programId);
};

// Utility function to get degree details by program and level
export const getDegreeDetails = (programId, degreeId) => {
  const program = getProgramById(programId);
  if (program) {
    return program.degrees.find(degree => degree.id === degreeId);
  }
  return null;
};

// Utility function to get all program names
export const getProgramNames = () => {
  return educationPrograms.map(program => ({
    id: program.id,
    name: program.name
  }));
};

// Function to fetch programs (API-ready - for future backend integration)
export const fetchEducationPrograms = async () => {
  // TODO: Replace with actual API call
  // const response = await fetch('/api/education-programs');
  // return await response.json();
  return educationPrograms;
};
