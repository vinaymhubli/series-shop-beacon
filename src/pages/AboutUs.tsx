
import Header from '@/components/Header';
import AboutHero from '@/components/AboutHero';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import RecommendedSection from '@/components/RecommendedSection';
import AboutTabs from '@/components/AboutTabs';
import AboutStats from '@/components/AboutStats';
import AboutTeam from '@/components/AboutTeam';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <AboutHero />
      <HeroSection />
      <ProductGrid />
      <RecommendedSection />
      <AboutTabs />
      <AboutStats />
      <AboutTeam />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default AboutUs;
