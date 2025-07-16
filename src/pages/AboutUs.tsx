
import Header from '@/components/Header';
import AboutHero from '@/components/AboutHero';
import AboutTabs from '@/components/AboutTabs';
import AboutContent from '@/components/AboutContent';
import AboutStats from '@/components/AboutStats';
import AboutTeam from '@/components/AboutTeam';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <AboutHero />
      <AboutTabs />
      <AboutContent />
      <AboutStats />
      <AboutTeam />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default AboutUs;
