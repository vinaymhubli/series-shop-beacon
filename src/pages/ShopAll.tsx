
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import ShopGrid from '@/components/ShopGrid';
import ShopFilters from '@/components/ShopFilters';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ShopAll = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation(0.1);
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation(0.2);
  const { elementRef: filtersRef, isVisible: filtersVisible } = useScrollAnimation(0.2);
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation(0.2);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section 
        ref={heroRef as any}
        className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black py-20 sm:py-32 md:py-40 lg:py-48 overflow-hidden"
      >
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/26efc76c-fa83-4369-8d8d-354eab1433e6.png"
            alt="Collection of colorful comic books and manga"
            className="w-full h-full object-cover opacity-60"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-gray-800/10 to-black/30"></div>
        </div>
        
        {/* Animated Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-16 left-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-16 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-20 right-1/3 w-54 sm:w-72 h-54 sm:h-72 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2.5s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 transition-all duration-1000 transform ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="text-red-500">
              Shop All
            </span>
          </h1>
          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0 transition-all duration-1000 delay-300 transform ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Discover our complete collection of manga, novels, and exclusive merchandise from the world's most captivating stories
          </p>
          
          {/* Stats Section */}
          <div 
            ref={statsRef as any}
            className={`flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 transition-all duration-1000 delay-500 transform ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center transform hover:scale-105 transition-transform duration-300 min-w-0">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-400 mb-1 sm:mb-2">500+</div>
              <div className="text-gray-400 text-xs sm:text-sm md:text-base">Manga Titles</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300 min-w-0">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">150+</div>
              <div className="text-gray-400 text-xs sm:text-sm md:text-base">Light Novels</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300 min-w-0">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-1 sm:mb-2">50+</div>
              <div className="text-gray-400 text-xs sm:text-sm md:text-base">Exclusive Series</div>
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
        <ShopFilters />
      </div>

      {/* Products Grid */}
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
