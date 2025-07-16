
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
      <section className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-gradient-to-r from-red-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white via-red-200 to-purple-200 bg-clip-text text-transparent">
              Shop All
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our complete collection of manga, novels, and exclusive merchandise
          </p>
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
