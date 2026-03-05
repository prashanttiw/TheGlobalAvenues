import { useState, useEffect } from 'react';
import { ChevronRight, Bell, BookOpen, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EducationSpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const programs = [
    {
      id: 'fulltime-degree',
      name: 'Full Time Degree Program',
      description: 'Comprehensive 3-4 year programs from top universities worldwide',
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600',
      path: '/education-program/fulltime-degree/undergraduate',
      highlight: 'Popular Choice',
    },
    {
      id: 'online-program',
      name: 'Online Program',
      description: 'Flexible learning from anywhere in the world',
      icon: Zap,
      color: 'from-purple-500 to-purple-600',
      path: '/education-program/online-program/undergraduate',
      highlight: 'Now Available',
    },
    {
      id: 'vocational-courses',
      name: 'Vocational Courses',
      description: 'Industry-focused certifications and skill development',
      icon: BookOpen,
      color: 'from-green-500 to-green-600',
      path: '/education-program/vocational-courses/undergraduate',
      highlight: 'New',
    },
    {
      id: 'internship-abroad',
      name: 'Internship Abroad',
      description: 'Gain international experience with leading companies',
      icon: Zap,
      color: 'from-orange-500 to-orange-600',
      path: '/education-program/internship-abroad/undergraduate',
      highlight: 'Hot Opportunity',
    },
    {
      id: 'summer-winter-school',
      name: 'Summer/Winter School',
      description: 'Short-term immersive learning experiences',
      icon: BookOpen,
      color: 'from-pink-500 to-pink-600',
      path: '/education-program/summer-winter-school/undergraduate',
      highlight: 'Limited Spots',
    },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % programs.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, [isAutoPlay, programs.length]);

  const currentProgram = programs[currentIndex];
  const CurrentIcon = currentProgram.icon;

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-4">
            <Bell className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm font-semibold text-accent">Spotlight Programs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explore Our
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Educational Pathways
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from diverse learning opportunities tailored to your goals and ambitions
          </p>
        </div>

        {/* Main Spotlight Display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Main Spotlight Card */}
          <div className="lg:col-span-2">
            <div
              className={`relative overflow-hidden rounded-2xl transition-all duration-500 ease-out transform`}
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
            >
              {/* Animated Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${currentProgram.color} opacity-90 transition-all duration-500`}
              ></div>

              {/* Spotlight Blur Effect */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-float"></div>
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

              {/* Content */}
              <div className="relative p-12 h-96 flex flex-col justify-between text-white z-10">
                <div>
                  <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur rounded-full mb-6">
                    <span className="text-sm font-semibold text-white">{currentProgram.highlight}</span>
                  </div>

                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-4xl font-bold mb-3">{currentProgram.name}</h3>
                      <p className="text-lg text-white/90">{currentProgram.description}</p>
                    </div>
                    <div className="p-4 bg-white/20 backdrop-blur rounded-xl">
                      <CurrentIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to={currentProgram.path}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur rounded-lg font-semibold transition-all duration-300 w-fit group"
                >
                  Explore Program
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Notification Popup in Spotlight */}
              <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur rounded-lg p-4 border border-white/30 max-w-xs animate-bounce-in z-20">
                <div className="flex items-start gap-3">
                  <Bell className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-white">Limited Time Offer</p>
                    <p className="text-xs text-white/80">Applications closing soon. Secure your spot today!</p>
                    <a href="#contact" className="text-xs text-white/90 hover:text-white font-medium mt-2 inline-flex items-center gap-1 group">
                      Learn more <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Program Cards Grid */}
          <div className="space-y-4">
            {programs.map((program, index) => (
              <button
                key={program.id}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlay(false);
                }}
                className={`w-full p-4 rounded-xl transition-all duration-300 transform text-left group ${
                  currentIndex === index
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-muted/50 hover:bg-muted text-foreground hover:scale-102'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-sm mb-1">{program.name.split(' ').slice(0, 2).join(' ')}</p>
                    <p className={`text-xs ${currentIndex === index ? 'text-white/80' : 'text-muted-foreground'}`}>
                      {program.description.substring(0, 35)}...
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 flex-shrink-0 transition-transform ${
                      currentIndex === index ? 'translate-x-1 text-white' : ''
                    }`}
                  />
                </div>

                {/* Progress Indicator */}
                <div className={`mt-3 h-1 rounded-full overflow-hidden ${currentIndex === index ? 'bg-white/30' : 'bg-muted'}`}>
                  <div
                    className={`h-full ${currentIndex === index ? 'bg-white' : 'bg-primary'} transition-all duration-500`}
                    style={{
                      width: currentIndex === index ? '100%' : '0%',
                      animation: currentIndex === index && isAutoPlay ? 'progress 6s linear' : 'none',
                    }}
                  ></div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {programs.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlay(false);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary w-8' : 'bg-muted w-2 hover:bg-muted-foreground'
              }`}
              aria-label={`Go to program ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CSS Animation for Progress Bar */}
      <style>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
