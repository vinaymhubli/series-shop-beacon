
import Header from '@/components/Header';
import AboutHero from '@/components/AboutHero';
import AboutTabs from '@/components/AboutTabs';
import AboutStats from '@/components/AboutStats';
import YearlyTimeline from '@/components/YearlyTimeline';
import CreativeCorner from '@/components/CreativeCorner';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Simple gradient background without parallax */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black opacity-50 pointer-events-none" />
      
      <div className="relative z-10">
        <Header />
        
        <section id="hero">
          <AboutHero />
        </section>
        
        <section id="tabs" className="px-4 sm:px-0">
          <AboutTabs />
        </section>
        
        <section id="stats">
          <AboutStats />
        </section>
        
        <section id="timeline">
          <YearlyTimeline />
        </section>
        
        <section id="creative-corner">
          <CreativeCorner />
        </section>
        
        <section id="newsletter">
          <Newsletter />
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
