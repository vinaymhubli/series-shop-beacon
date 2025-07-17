
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import AnnouncementFilters from '@/components/AnnouncementFilters';
import AnnouncementGrid from '@/components/AnnouncementGrid';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';

const Announcements = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation(0.1);
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section 
        ref={heroRef as any}
        className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black py-20 sm:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-16 left-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-16 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 transition-all duration-1000 transform ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="text-red-500">Latest</span> Announcements
          </h1>
          <p className={`text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed transition-all duration-1000 delay-300 transform ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Stay updated with new series, limited editions, volume releases, and exciting events
          </p>
        </div>
      </section>

      <AnnouncementFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <AnnouncementGrid activeFilter={activeFilter} />
      
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Announcements;
