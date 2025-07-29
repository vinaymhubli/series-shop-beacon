
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import ShopGrid from '@/components/ShopGrid';
import ShopFilters from '@/components/ShopFilters';
import FeaturedSeriesSlideshow from '@/components/FeaturedSeriesSlideshow';
import SeriesGrid from '@/components/SeriesGrid';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';

const ShopAll = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation(0.1);
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation(0.2);
  const { elementRef: filtersRef, isVisible: filtersVisible } = useScrollAnimation(0.2);
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation(0.2);
  
  const [viewMode, setViewMode] = useState<'series' | 'volume'>('series');

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section 
        ref={heroRef as any}
        className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black py-16 overflow-hidden"
      >
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/6ce223e4-a7e8-4282-a3a6-0f55f5341a03.png"
            alt="Explore Series Background"
            className="w-full h-full object-cover opacity-80"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[400px]">
            <div className="text-left lg:w-1/2">
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-1000 transform ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                Explore Series
              </h1>
              <p className={`text-lg md:text-xl text-gray-300 max-w-lg mb-8 leading-relaxed transition-all duration-1000 delay-300 transform ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                Discover new series through manga and anime stories. Read stories, discover new characters, and learn lore through the life cycle.
              </p>
              
              <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-500 transform ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2">
                  <span>Popular Series</span>
                </button>
                <button className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2">
                  <span>Browse All</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <div 
        ref={filtersRef as any}
        className={`transition-all duration-1000 transform ${
          filtersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <ShopFilters viewMode={viewMode} setViewMode={setViewMode} />
      </div>

      {/* Featured Series Section */}
      <section className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Featured Series Cards */}
            <div className="bg-gradient-to-br from-red-900/50 to-red-800/30 rounded-xl overflow-hidden border border-red-700/30 hover:border-red-500/50 transition-all duration-300 group">
              <div className="relative h-48">
                <img 
                  src="/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png" 
                  alt="Demon Slayer" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                  9.0
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-lg mb-2">Demon Slayer</h3>
                <p className="text-gray-400 text-sm mb-4">Follow Tanjiro's journey to save his sister and defeat demons in this epic tale of brotherhood and determination.</p>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition-colors duration-200">
                  Read Now
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 rounded-xl overflow-hidden border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="relative h-48">
                <img 
                  src="/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png" 
                  alt="Jujutsu Kaisen" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                  8.8
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-lg mb-2">Jujutsu Kaisen</h3>
                <p className="text-gray-400 text-sm mb-4">Enter the world of curses and sorcery with Yuji Itadori as he navigates the dangerous supernatural realm.</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors duration-200">
                  Read Now
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/50 to-cyan-800/30 rounded-xl overflow-hidden border border-cyan-700/30 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="relative h-48">
                <img 
                  src="/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png" 
                  alt="One Piece" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-cyan-600 text-white px-2 py-1 rounded text-xs font-bold">
                  9.5
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-lg mb-2">One Piece</h3>
                <p className="text-gray-400 text-sm mb-4">Join Monkey D. Luffy on his epic adventure to become the Pirate King in this legendary series.</p>
                <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-lg font-semibold transition-colors duration-200">
                  Read Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Series Section */}
      <section className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8">All Series</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {/* Series Grid Items */}
            {[
              { title: "Kimetsu Yaiba", rating: "8.5" },
              { title: "My Hero Academia", rating: "8.9" },
              { title: "Attack on Titan", rating: "9.2" },
              { title: "Spy x Family", rating: "8.7" },
              { title: "Black Clover", rating: "8.3" },
              { title: "Chainsaw Man", rating: "8.6" },
              { title: "Naruto", rating: "9.0" },
              { title: "Dragon Ball Super", rating: "8.8" },
              { title: "One Punch Man", rating: "8.4" },
              { title: "Haikyuu!!", rating: "9.1" },
              { title: "Demon Slayer", rating: "9.0" },
              { title: "Tokyo Ghoul", rating: "8.2" }
            ].map((series, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-700/50 transition-all duration-300 cursor-pointer group">
                <div className="relative aspect-[3/4]">
                  <img 
                    src="/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png" 
                    alt={series.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-black/70 text-white px-1.5 py-0.5 rounded text-xs">
                    {series.rating}
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-white text-sm font-medium truncate">{series.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center">
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 border border-gray-600">
              Load more
            </button>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default ShopAll;
