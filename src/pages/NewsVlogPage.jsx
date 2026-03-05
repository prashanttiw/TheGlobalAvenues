import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Play, Calendar, User, Tag, ArrowRight, Flame } from 'lucide-react';

export default function NewsVlogPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const newsItems = [
    {
      id: 1,
      type: 'news',
      title: 'Partnership with Top UK Universities Announced',
      excerpt: 'The Global Avenues partners with leading UK institutions to expand opportunities for South Asian students seeking quality education abroad.',
      content: 'We are excited to announce our strategic partnerships with top UK universities including Edinburgh, Manchester, and Durham. These collaborations will provide students unprecedented access to world-class education and enhanced placement opportunities.',
      image: '/news/uk-partnership.jpg',
      date: '2024-03-15',
      author: 'Neetu Verma Gupta',
      category: 'Partnership',
      featured: true,
      views: 2500,
    },
    {
      id: 2,
      type: 'blog',
      title: 'Student Success Story: From India to Canada',
      excerpt: 'Read how Priya transformed her dreams into reality with our comprehensive guidance and support through her Canadian education journey.',
      content: 'In this exclusive blog post, Priya shares her incredible journey from applying to Canadian universities, getting accepted, and now thriving in her first year. She discusses the challenges she faced and how our team supported her every step of the way.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '12:45',
      date: '2024-03-10',
      author: 'The Global Avenues',
      category: 'Success Story',
      featured: true,
      views: 5800,
    },
    {
      id: 3,
      type: 'news',
      title: 'Australia Study Visa Updates 2024',
      excerpt: 'Latest changes in Australian student visa requirements and how they impact South Asian applicants seeking to study in Australia.',
      content: 'The Australian government has announced new changes to student visa processing. We break down what these changes mean for you and how to navigate them successfully.',
      image: '/news/australia-visa.jpg',
      date: '2024-03-08',
      author: 'Deepshikha Chauhan',
      category: 'Visa Updates',
      featured: false,
      views: 1800,
    },
    {
      id: 4,
      type: 'blog',
      title: 'IELTS Preparation Tips with Expert Trainer',
      excerpt: 'Master IELTS exam strategies with our expert trainer. Learn proven techniques to maximize your band score.',
      content: 'In this comprehensive blog post, our IELTS expert shares insider tips, common mistakes, and preparation strategies used by top scorers.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '18:20',
      date: '2024-03-05',
      author: 'The Global Avenues',
      category: 'Exam Prep',
      featured: false,
      views: 3200,
    },
    {
      id: 5,
      type: 'news',
      title: 'New Scholarship Opportunities for 2024-25',
      excerpt: 'Exciting scholarship programs launched by our partner universities for outstanding students from India.',
      content: 'We are thrilled to announce multiple scholarship opportunities for the 2024-25 academic year. These scholarships cover tuition, living expenses, and more.',
      image: '/news/scholarship.jpg',
      date: '2024-03-01',
      author: 'Naman Sharma',
      category: 'Scholarship',
      featured: false,
      views: 4200,
    },
    {
      id: 6,
      type: 'blog',
      title: 'Campus Life: A Day in the Life of an International Student',
      excerpt: 'Follow Arjun as he shares his experience through a typical day at his university in the UK.',
      content: 'Experience campus life through the eyes of Arjun, an international student thriving in his UK university.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '15:30',
      date: '2024-02-25',
      author: 'The Global Avenues',
      category: 'Campus Life',
      featured: false,
      views: 2900,
    },
  ];

  const categories = ['all', 'Partnership', 'Success Story', 'Visa Updates', 'Exam Prep', 'Scholarship', 'Campus Life'];

  const filteredItems = newsItems.filter((item) => {
    const matchesTab = activeTab === 'all' || item.type === activeTab;
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesTab && matchesCategory;
  });

  const featuredItems = newsItems.filter((item) => item.featured);

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
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 text-balance"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            News & Blog
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stay updated with the latest news, success stories, and expert guidance from The Global Avenues
          </motion.p>
        </div>
      </motion.section>

      {/* Featured Section */}
      {featuredItems.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="mb-12"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Flame className="w-5 h-5 text-accent" />
                <h2 className="text-2xl md:text-3xl font-bold">Featured Content</h2>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {featuredItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="group bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ translateY: -8 }}
                  onClick={() => navigate(`/news/${item.id}`)}
                >
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                    {item.type === 'blog' ? (
                      <>
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10">
                          <div className="w-16 h-16 bg-accent/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 text-white fill-white ml-1" />
                          </div>
                        </div>
                        <img src="/blog-thumbnail.jpg" alt={item.title} className="w-full h-full object-cover" />
                      </>
                    ) : (
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {item.category}
                      </span>
                      {item.type === 'blog' && (
                        <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                          {item.duration}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{item.excerpt}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(item.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {item.author}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Type Filter */}
          <motion.div
            className="mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase">Type</h3>
            <div className="flex gap-3 flex-wrap">
              {['all', 'news', 'blog'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {tab === 'blog' ? 'Blog' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase">Category</h3>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                    selectedCategory === category
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* News & Vlogs Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredItems.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="group bg-background border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ translateY: -4 }}
                  onClick={() => navigate(`/news/${item.id}`)}
                >
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                    {item.type === 'blog' ? (
                      <>
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10 group-hover:bg-black/40 transition-colors">
                          <div className="w-14 h-14 bg-accent/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play className="w-6 h-6 text-white fill-white ml-1" />
                          </div>
                        </div>
                        <img src="/blog-thumbnail.jpg" alt={item.title} className="w-full h-full object-cover" />
                      </>
                    ) : (
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded">
                        {item.category}
                      </span>
                      {item.type === 'blog' && (
                        <span className="text-xs text-muted-foreground">{item.duration}</span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{item.excerpt}</p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                      <span className="flex items-center gap-1">
                        👁 {item.views.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-2xl font-bold text-muted-foreground mb-4">No content found</p>
              <p className="text-muted-foreground">Try adjusting your filters to find more content</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest news, expert tips, and success stories from students around the world
            </p>
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-secondary transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto group">
              Subscribe Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
