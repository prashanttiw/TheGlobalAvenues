import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Contact } from '../components/Contact';
import { Testimonials } from '../components/Testimonials';
import { PortfolioPreview } from '../components/PortfolioPreview';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="pt-16">
      <Hero />
      <Services />

      <Testimonials />
      <Contact />
    </div>
  );
}
