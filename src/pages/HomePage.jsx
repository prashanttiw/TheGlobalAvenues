import HeroSection from '../components/home/HeroSection';
import UniversityTrustBar from '../components/home/UniversityTrustBar';
import ImageCarousel from '../components/ImageCarousel';
import { Services } from '../components/Services';
import { Contact } from '../components/Contact';
import { Testimonials } from '../components/Testimonials';
import PortfolioSection from '../components/PortfolioSection';

export default function HomePage() {
  return (
    <div className="pt-16">
      <HeroSection />
      <UniversityTrustBar />
      <ImageCarousel />
      <Services />
      <PortfolioSection />
      <Testimonials />
      <Contact />
    </div>
  );
}
