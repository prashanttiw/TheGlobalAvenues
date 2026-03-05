import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PortfolioDisplay from './PortfolioDisplay';

export default function PortfolioSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Featured Opportunities
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Our Featured Portfolio
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Discover top universities and educational institutions we partner with. Each offers unique opportunities for global education and career advancement.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-hidden"
        >
          <PortfolioDisplay limit={10} />
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-semibold text-sm sm:text-base rounded-lg hover:bg-primary/90 transition-all duration-300 group"
          >
            Explore All Universities
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mt-3 sm:mt-4">
            Browse our complete portfolio of 100+ partner institutions worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
}
