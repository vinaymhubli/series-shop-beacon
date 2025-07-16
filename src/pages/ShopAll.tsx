
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
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black py-32 md:py-40 lg:py-48 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/26efc76c-fa83-4369-8d8d-354eab1433e6.png"
            alt="Collection of colorful comic books and manga"
            className="w-full h-full object-cover opacity-60"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-gray-800/20 to-black/40"></div>
        </div>
        
        {/* Animated Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-16 left-1/4 w-80 h-80 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-16 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-20 right-1/3 w-72 h-72 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2.5s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            <span className="text-red-500">
              Shop All
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Discover our complete collection of manga, novels, and exclusive merchandise from the world's most captivating stories
          </p>
          
          {/* Stats Section */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">500+</div>
              <div className="text-gray-400 text-sm md:text-base">Manga Titles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">150+</div>
              <div className="text-gray-400 text-sm md:text-base">Light Novels</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-400 text-sm md:text-base">Exclusive Series</div>
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
