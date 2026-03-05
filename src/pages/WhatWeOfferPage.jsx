import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Zap, Users, Globe, Award, CheckCircle, ArrowRight, MapPin } from 'lucide-react';

const programsData = {
  'fulltime-degree': {
    name: 'Full Time Degree Program',
    description: 'Comprehensive degree programs from top universities worldwide',
    color: 'from-blue-500 to-blue-600',
    icon: BookOpen,
    overview: 'Full-time degree programs involve enrolling in undergraduate or postgraduate studies at a university abroad. These programs typically last for a minimum of one year and require a student visa, which allows you to reside in the country for the duration of your studies.',
    services: [
      {
        title: 'Pre-Departure Briefing',
        description: 'Guidance on travel, accommodation, and settling into your new academic environment.'
      },
      {
        title: 'Visa Interview Preparation',
        description: 'In-depth training to prepare you for student visa interviews, which are often required for countries like the USA, Canada, and the UK.'
      },
      {
        title: 'Visa Application Guidance',
        description: 'Step-by-step support with completing and submitting your visa application, ensuring all criteria are met.'
      },
      {
        title: 'Document Preparation',
        description: 'Support in preparing required documents, such as admission letters, financial proof, academic transcripts, and more.'
      },
      {
        title: 'University and Program Selection',
        description: 'Assistance in selecting the right institution and program that aligns with your academic and career goals.'
      },
    ],
    requirements: [
      { title: 'Acceptance Letter', description: 'From a recognized institution in the destination country.' },
      { title: 'Financial Proof', description: 'Demonstrating that you have sufficient funds to cover tuition fees and living expenses.' },
      { title: 'Health Insurance', description: 'Mandatory in most countries for international students.' },
      { title: 'Proof of Language Proficiency', description: 'Depending on the program\'s language, you might need to prove your skills in English (IELTS, TOEFL) or another language.' },
      { title: 'Visa Application Fee', description: 'Varies by country.' },
    ],
    documents: [
      'Proof of accommodation (if required)',
      'Health insurance (if required by the host country)',
      'Visa application form',
      'Valid passport',
      'Proof of sufficient financial means (e.g., bank statements or scholarship letters)',
      'Admission letter from a recognized institution'
    ],
    countries: [
      'USA', 'Canada', 'UK', 'Germany', 'France', 'Italy', 'Switzerland', 'Spain', 'Netherlands'
    ]
  },
  'online-program': {
    name: 'Online Program',
    description: 'Flexible learning from anywhere in the world',
    color: 'from-purple-500 to-purple-600',
    icon: Zap,
    overview: 'Study world-class programs from the comfort of your home. Our online programs offer flexibility with industry-recognized certifications and global accessibility.',
    services: [
      {
        title: 'Enrollment Support',
        description: 'Complete guidance through the online registration and enrollment process.'
      },
      {
        title: 'Technical Setup',
        description: 'Assistance with learning platform access, software requirements, and technical troubleshooting.'
      },
      {
        title: 'Mentorship Program',
        description: 'One-on-one support from academic mentors and industry professionals.'
      },
      {
        title: 'Time Management Coaching',
        description: 'Strategies for balancing online studies with work and personal commitments.'
      },
      {
        title: 'Certification Preparation',
        description: 'Guidance for completing coursework and preparing for final assessments.'
      },
    ],
    requirements: [
      { title: 'Internet Connection', description: 'Stable high-speed internet for attending live sessions and accessing materials.' },
      { title: 'Academic Credentials', description: 'Relevant educational qualifications as per program requirements.' },
      { title: 'Computer Access', description: 'Laptop or desktop with required software capabilities.' },
      { title: 'English Language Proficiency', description: 'Minimum IELTS/TOEFL scores for non-native speakers.' },
    ],
    documents: [
      'Academic transcripts',
      'Passport copy',
      'Proof of English proficiency',
      'Statement of purpose',
      'CV/Resume',
      'Reference letters'
    ],
    countries: ['Global - No Geographic Restriction']
  },
  'vocational-courses': {
    name: 'Vocational Courses',
    description: 'Industry-focused certifications and skill development',
    color: 'from-green-500 to-green-600',
    icon: Award,
    overview: 'Gain practical skills and industry certifications through hands-on vocational training programs. Perfect for career advancement and skill-based employment.',
    services: [
      {
        title: 'Career Counseling',
        description: 'Identify the right vocational path based on your interests and market demand.'
      },
      {
        title: 'Practical Training',
        description: 'Hands-on instruction in real-world workplace environments.'
      },
      {
        title: 'Internship Placement',
        description: 'Direct placement opportunities with leading industry partners.'
      },
      {
        title: 'Certification Support',
        description: 'Preparation for industry-recognized certifications and licenses.'
      },
      {
        title: 'Job Placement Assistance',
        description: 'Resume building and interview coaching for employment opportunities.'
      },
    ],
    requirements: [
      { title: 'Educational Background', description: 'Minimum secondary education qualification.' },
      { title: 'Language Proficiency', description: 'Basic to intermediate English for international programs.' },
      { title: 'Technical Aptitude', description: 'Interest in hands-on, practical learning.' },
    ],
    documents: [
      'Educational certificates',
      'Passport',
      'Medical clearance',
      'Work visa (if applicable)',
      'Insurance documentation'
    ],
    countries: ['Germany', 'Switzerland', 'Austria', 'Australia', 'Canada']
  },
  'internship-abroad': {
    name: 'Internship Abroad',
    description: 'Gain international experience with leading companies',
    color: 'from-orange-500 to-orange-600',
    icon: Globe,
    overview: 'Build professional experience through internships at top international companies. Develop global networks and enhance your resume with valuable work experience.',
    services: [
      {
        title: 'Internship Placement',
        description: 'Placement with reputed multinational companies and organizations.'
      },
      {
        title: 'Work Visa Processing',
        description: 'Complete assistance with internship/work visa applications and documentation.'
      },
      {
        title: 'Pre-Departure Orientation',
        description: 'Cultural and workplace orientation programs.'
      },
      {
        title: 'Mentorship During Internship',
        description: 'Regular check-ins and support throughout your internship period.'
      },
      {
        title: 'Post-Internship Career Support',
        description: 'Help with full-time job conversions and future career planning.'
      },
    ],
    requirements: [
      { title: 'Enrollment Status', description: 'Currently enrolled in an undergraduate or postgraduate program.' },
      { title: 'Academic Standing', description: 'Maintain good academic progress (minimum GPA requirements vary).' },
      { title: 'Work Authorization', description: 'Eligible for work visa in the destination country.' },
      { title: 'Language Skills', description: 'Intermediate English and subject-specific language proficiency.' },
    ],
    documents: [
      'Student ID/Enrollment certificate',
      'Academic transcript',
      'CV and cover letter',
      'Passport',
      'Work visa application',
      'Insurance',
      'Background check'
    ],
    countries: ['USA', 'UK', 'Canada', 'Germany', 'Singapore', 'Australia', 'Japan']
  },
  'summer-winter-school': {
    name: 'Summer/Winter School',
    description: 'Short-term immersive learning experiences',
    color: 'from-pink-500 to-pink-600',
    icon: Users,
    overview: 'Experience intensive short-term programs during summer and winter breaks. These programs offer cultural immersion, skill development, and networking opportunities.',
    services: [
      {
        title: 'Program Selection',
        description: 'Wide range of 2-8 week programs across diverse fields and locations.'
      },
      {
        title: 'Accommodation Arrangements',
        description: 'Accommodation in university dormitories or host families.'
      },
      {
        title: 'Visa Assistance',
        description: 'Short-term visa documentation and processing support.'
      },
      {
        title: 'Cultural Activities',
        description: 'Excursions and cultural activities integrated into the program.'
      },
      {
        title: 'Certificate of Completion',
        description: 'Recognized certificates upon successful program completion.'
      },
    ],
    requirements: [
      { title: 'Age Requirement', description: 'Minimum 18 years of age.' },
      { title: 'Language Skills', description: 'Basic to intermediate English proficiency.' },
      { title: 'Enrollment', description: 'Currently enrolled in a recognized institution (preferred).' },
    ],
    documents: [
      'Passport',
      'Enrollment certificate',
      'Academic records',
      'Medical insurance',
      'Travel insurance',
      'Emergency contact information'
    ],
    countries: ['USA', 'UK', 'Canada', 'Germany', 'Spain', 'France', 'Australia', 'Japan']
  }
};

export default function WhatWeOfferPage() {
  const [activeTab, setActiveTab] = useState('fulltime-degree');
  const currentProgram = programsData[activeTab];
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
            Explore our comprehensive range of educational programs designed to shape your future
          </motion.p>
        </div>

        {/* Tabs Navigation */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start md:gap-3 mb-12">
            {Object.entries(programsData).map(([key, program]) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our Programs?</h2>
            <p className="text-lg text-muted-foreground">We provide comprehensive support at every step of your educational journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Expert Guidance',
                description: 'Our experienced consultants provide personalized guidance tailored to your goals.',
                icon: Users
              },
              {
                title: 'Global Network',
                description: 'Access to partnerships with top universities and institutions worldwide.',
                icon: Globe
              },
              {
                title: 'Complete Support',
                description: 'From application to visa processing and settlement, we are with you every step.',
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-muted-foreground mb-8">Get in touch with our expert consultants to explore the program that's right for you.</p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
