
import Header from '@/components/Header';
import AboutHero from '@/components/AboutHero';
import AboutTabs from '@/components/AboutTabs';
import AboutStats from '@/components/AboutStats';
import AboutTeam from '@/components/AboutTeam';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { usePageScrollAnimation } from '@/hooks/usePageScrollAnimation';

const AboutUs = () => {
  const { scrollY, isScrolling } = usePageScrollAnimation();

  return (
    <div 
      className={`min-h-screen bg-gray-900 transition-all duration-300 ${
        isScrolling ? 'scroll-smooth' : ''
      }`}
      style={{
        transform: `translateY(${scrollY * 0.1}px)`,
      }}
    >
      {/* Parallax background effect */}
      <div 
        className="fixed inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black opacity-50 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />
      
      <div className="relative z-10">
        <div
          className="transition-transform duration-300"
          style={{
            transform: `translateY(${scrollY * -0.05}px)`,
          }}
        >
          <Header />
        </div>
        
        <section 
          id="hero"
          className="transition-transform duration-500"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <AboutHero />
        </section>
        
        <section 
          id="tabs"
          className="transition-all duration-700"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`,
            opacity: scrollY > 200 ? 1 : 0.8,
          }}
        >
          <AboutTabs />
        </section>
        
        <section 
          id="stats"
          className="transition-all duration-700"
          style={{
            transform: `translateY(${scrollY * 0.03}px)`,
            opacity: scrollY > 400 ? 1 : 0.9,
          }}
        >
          <AboutStats />
        </section>
        
        <section 
          id="team"
          className="transition-all duration-700"
          style={{
            transform: `translateY(${scrollY * 0.02}px)`,
            opacity: scrollY > 600 ? 1 : 0.9,
          }}
        >
          <AboutTeam />
        </section>
        
        <section 
          id="newsletter"
          className="transition-all duration-500"
          style={{
            transform: `translateY(${scrollY * 0.01}px)`,
          }}
        >
          <Newsletter />
        </section>
        
        <div
          className="transition-transform duration-300"
          style={{
            transform: `translateY(${scrollY * -0.02}px)`,
          }}
        >
          <Footer />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-red-500 to-purple-500 transition-all duration-300"
          style={{
            width: `${Math.min((scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`,
          }}
        />
      </div>
    </div>
  );
};

export default AboutUs;
