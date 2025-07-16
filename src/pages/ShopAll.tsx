
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import ShopGrid from '@/components/ShopGrid';
import ShopFilters from '@/components/ShopFilters';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ShopAll = () => {
  const { elementRef: filtersRef, isVisible: filtersVisible } = useScrollAnimation(0.2);
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation(0.2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black py-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-white via-red-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
                Shop All
              </span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-purple-500 mx-auto rounded-full animate-scale-in"></div>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.5s'}}>
              Discover our complete collection of manga, novels, and exclusive merchandise
            </p>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in" style={{animationDelay: '1s'}}>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">500+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Manga Titles</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">200+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Light Novels</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">1000+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Merchandise</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Collectibles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Filters Section */}
      <div 
        ref={filtersRef as any}
        className={`transition-all duration-1000 transform ${
          filtersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <ShopFilters />
      </div>

      {/* Enhanced Products Grid */}
      <div 
        ref={gridRef as any}
        className={`transition-all duration-1000 transform ${
          gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <ShopGrid />
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default ShopAll;
