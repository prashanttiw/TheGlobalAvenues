import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Globe, Users, TrendingUp, MapPin, Filter } from 'lucide-react';

export default function UniversitiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');

  const universities = [
    { name: 'MIT', country: 'USA', ranking: 1, students: 150, image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=500&h=300&fit=crop' },
    { name: 'Stanford University', country: 'USA', ranking: 2, students: 200, image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=500&h=300&fit=crop' },
    { name: 'Harvard University', country: 'USA', ranking: 3, students: 180, image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=300&fit=crop' },
    { name: 'Oxford University', country: 'UK', ranking: 4, students: 120, image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&h=300&fit=crop' },
    { name: 'Cambridge University', country: 'UK', ranking: 5, students: 110, image: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=500&h=300&fit=crop' },
    { name: 'University of Toronto', country: 'Canada', ranking: 21, students: 95, image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&h=300&fit=crop' },
    { name: 'University of Melbourne', country: 'Australia', ranking: 37, students: 85, image: 'https://images.unsplash.com/photo-1497633762265-25c1467516aa?w=500&h=300&fit=crop' },
    { name: 'National University of Singapore', country: 'Singapore', ranking: 11, students: 70, image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&h=300&fit=crop' },
    { name: 'ETH Zurich', country: 'Switzerland', ranking: 9, students: 60, image: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=500&h=300&fit=crop' },
    { name: 'University of Tokyo', country: 'Japan', ranking: 42, students: 50, image: 'https://images.unsplash.com/photo-1541339907198-ccb3ee7dfa51?w=500&h=300&fit=crop' },
  ];

  const countries = ['all', ...new Set(universities.map(u => u.country))];

  const filtered = universities.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCountry = selectedCountry === 'all' || uni.country === selectedCountry;
    return matchesSearch && matchesCountry;
  });

  const stats = [
    { icon: Globe, label: 'Partner Universities', value: '500+' },
    { icon: Users, label: 'Students Placed', value: '5000+' },
    { icon: TrendingUp, label: 'Success Rate', value: '98%' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Partner Universities
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our network of world-class universities across the globe
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-muted/30 border border-border/50 rounded-xl p-6 text-center"
                  variants={itemVariants}
                  whileHover={{ translateY: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Search & Filter */}
          <motion.div
            className="space-y-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search universities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {countries.map((country) => (
                <motion.button
                  key={country}
                  onClick={() => setSelectedCountry(country)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize flex items-center gap-2 ${
                    selectedCountry === country
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe className="w-4 h-4" />
                  {country === 'all' ? 'All Countries' : country}
                </motion.button>
              ))}
            </div>

            <p className="text-sm text-muted-foreground">
              Showing {filtered.length} universities
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Universities Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filtered.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filtered.map((university, index) => (
                <motion.div
                  key={index}
                  className="bg-muted/30 border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all group"
                  variants={itemVariants}
                  whileHover={{ translateY: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                    <motion.img
                      src={university.image}
                      alt={university.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Ranking Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-bold rounded-full">
                      Rank #{university.ranking}
                    </div>

                    {/* Country Badge */}
                    <div className="absolute bottom-4 left-4 px-3 py-1 bg-secondary/90 text-secondary-foreground text-xs font-bold rounded-full flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {university.country}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">{university.name}</h3>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-primary/10 rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-primary mb-1">{university.ranking}</p>
                        <p className="text-xs text-muted-foreground">Global Rank</p>
                      </div>
                      <div className="bg-secondary/10 rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-secondary mb-1">{university.students}</p>
                        <p className="text-xs text-muted-foreground">Our Students</p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      className="w-full py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-secondary transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-2xl font-bold text-foreground mb-2">No universities found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Why Partner With Us</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get preferred access to our extensive university network
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: 'Direct Pathways', description: 'Guaranteed interview opportunities at partner universities' },
              { title: 'Scholarship Support', description: 'Access to exclusive scholarship and financial aid programs' },
              { title: 'Expert Guidance', description: 'Personalized university selection and application support' },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-background border border-border/50 rounded-xl p-8 text-center hover:border-primary/50 transition-all"
                variants={itemVariants}
                whileHover={{ translateY: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
