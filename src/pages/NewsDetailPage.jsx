import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag, Share2, Clock, Eye, MessageCircle } from 'lucide-react';
import { useState } from 'react';

// NewsItems data - keeping in sync with NewsVlogPage
const newsItems = [
  {
    id: 1,
    type: 'news',
    title: 'Partnership with Top UK Universities Announced',
    excerpt: 'The Global Avenues partners with leading UK institutions to expand opportunities for South Asian students seeking quality education abroad.',
    content: 'We are excited to announce our strategic partnerships with top UK universities including Edinburgh, Manchester, and Durham. These collaborations will provide students unprecedented access to world-class education and enhanced placement opportunities. Our commitment to facilitating quality education for South Asian students has led us to partner with some of the most prestigious institutions in the United Kingdom. Through these partnerships, we aim to create a seamless pathway for students aspiring to pursue higher education in the UK. Students will benefit from enhanced counseling, admission support, and placement assistance.',
    image: '/news/uk-partnership.jpg',
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
    title: 'Student Success Story: From India to Canada',
    excerpt: 'Read how Priya transformed her dreams into reality with our comprehensive guidance and support through her Canadian education journey.',
    content: 'In this exclusive blog post, Priya shares her incredible journey from applying to Canadian universities, getting accepted, and now thriving in her first year. She discusses the challenges she faced and how our team supported her every step of the way. Priya\'s journey is an inspiration to many aspiring students who dream of studying abroad. From her initial consultation with our team to receiving her acceptance letter, Priya shares the ups and downs of the process. Her story showcases the importance of proper guidance, timely application, and consistent support throughout the journey.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '12:45',
    date: '2024-03-10',
    author: 'The Global Avenues',
    category: 'Success Story',
    featured: true,
    views: 5800,
    readTime: '8 min read',
  },
  {
    id: 3,
    type: 'news',
    title: 'Australia Study Visa Updates 2024',
    excerpt: 'Latest changes in Australian student visa requirements and how they impact South Asian applicants seeking to study in Australia.',
    content: 'The Australian government has announced new changes to student visa processing. We break down what these changes mean for you and how to navigate them successfully. These new regulations aim to streamline the application process while maintaining strict security standards. International students applying to Australian universities should be aware of the updated requirements. Our experts have compiled a comprehensive guide to help you understand the implications and prepare your application accordingly.',
    image: '/news/australia-visa.jpg',
    date: '2024-03-08',
    author: 'Deepshikha Chauhan',
    category: 'Visa Updates',
    featured: false,
    views: 1800,
    readTime: '6 min read',
  },
  {
    id: 4,
    type: 'blog',
    title: 'IELTS Preparation Tips with Expert Trainer',
    excerpt: 'Master IELTS exam strategies with our expert trainer. Learn proven techniques to maximize your band score.',
    content: 'In this comprehensive blog post, our IELTS expert shares insider tips, common mistakes, and preparation strategies used by top scorers. Whether you\'re preparing for the first time or retaking the exam, these strategies will help you maximize your band score. Our expert covers all four sections of the IELTS exam: Listening, Reading, Writing, and Speaking. Learn practical techniques that have helped hundreds of students achieve their target scores.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '18:20',
    date: '2024-03-05',
    author: 'The Global Avenues',
    category: 'Exam Prep',
    featured: false,
    views: 3200,
    readTime: '10 min read',
  },
  {
    id: 5,
    type: 'news',
    title: 'New Scholarship Opportunities for 2024-25',
    excerpt: 'Exciting scholarship programs launched by our partner universities for outstanding students from India.',
    content: 'We are thrilled to announce multiple scholarship opportunities for the 2024-25 academic year. These scholarships cover tuition, living expenses, and more. Our partner universities have committed significant funding to support talented students from India. Applications are now open for various scholarship programs ranging from 50% to 100% tuition coverage. Early applications are encouraged as funding is limited and allocated on a first-come, first-served basis.',
    image: '/news/scholarship.jpg',
    date: '2024-03-01',
    author: 'Naman Sharma',
    category: 'Scholarship',
    featured: false,
    views: 4200,
    readTime: '4 min read',
  },
  {
    id: 6,
    type: 'blog',
    title: 'Campus Life: A Day in the Life of an International Student',
    excerpt: 'Follow Arjun as he shares his experience through a typical day at his university in the UK.',
    content: 'Experience campus life through the eyes of Arjun, an international student thriving in his UK university. From early morning classes to late-night study sessions and weekend adventures, discover what life is really like as an international student. Arjun shares his experiences with university facilities, social life, and the support systems available to international students. His candid account provides valuable insights for students considering studying in the UK.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '15:30',
    date: '2024-02-25',
    author: 'The Global Avenues',
    category: 'Campus Life',
    featured: false,
    views: 2900,
    readTime: '7 min read',
  },
];

export default function NewsDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  const newsItem = newsItems.find(item => item.id === parseInt(id));

  if (!newsItem) {
    return (
      <motion.div
        className="pt-16 min-h-screen flex flex-col items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/news-blog')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News & Blog
          </button>
        </motion.div>
      </motion.div>
    );
  }

  // Get related articles
  const relatedArticles = newsItems
    .filter(item => item.id !== newsItem.id && item.category === newsItem.category)
    .slice(0, 3);

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
    <div className="pt-16 min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Back Button */}
      <motion.div
        className="sticky top-20 z-40 px-4 sm:px-6 lg:px-8 py-4 bg-background/80 backdrop-blur-md border-b border-border"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/news-blog')}
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to News & Blog
          </button>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Content */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                {newsItem.category}
              </span>
              <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-semibold rounded-full">
                {newsItem.type === 'blog' ? 'Blog Post' : 'News'}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-foreground">
              {newsItem.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-muted-foreground">
                <User className="w-4 h-4" />
                <span className="text-sm">{newsItem.author}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{new Date(newsItem.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{newsItem.readTime}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground ml-auto">
                <Eye className="w-4 h-4" />
                <span className="text-sm">{newsItem.views.toLocaleString()} views</span>
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20"
          >
            {newsItem.type === 'blog' ? (
              <>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10">
                  <motion.div
                    className="w-20 h-20 bg-accent/80 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-8 h-8 text-white fill-white ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </div>
                <img src="/blog-thumbnail.jpg" alt={newsItem.title} className="w-full h-full object-cover" />
              </>
            ) : (
              <img src={newsItem.image} alt={newsItem.title} className="w-full h-full object-cover" />
            )}
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="prose prose-invert max-w-none space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              {newsItem.excerpt}
            </p>

            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>{newsItem.content}</p>
            </div>

            {newsItem.type === 'blog' && newsItem.videoUrl && (
              <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden bg-black/20">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={newsItem.videoUrl}
                  title={newsItem.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </motion.div>

          {/* Share & Actions */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 py-6 border-t border-b border-border"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLiked(!liked)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                liked
                  ? 'bg-red-500/20 text-red-500'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <span className="text-xl">{liked ? '❤️' : '🤍'}</span>
              <span className="text-sm font-medium">Like</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-muted-foreground hover:bg-muted/80 transition-all duration-300"
            >
              <Share2 className="w-4 h-4" />
              <span className="text-sm font-medium">Share</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-muted-foreground hover:bg-muted/80 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Comment</span>
            </motion.button>
          </motion.div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-2xl font-bold">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    whileHover={{ translateY: -4 }}
                    onClick={() => navigate(`/news/${article.id}`)}
                    className="group bg-background border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-4">
                      <p className="text-xs font-semibold text-primary mb-2">{article.category}</p>
                      <h3 className="font-bold line-clamp-2 group-hover:text-primary transition-colors">{article.title}</h3>
                      <p className="text-xs text-muted-foreground mt-2">{new Date(article.date).toLocaleDateString()}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
