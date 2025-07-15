
import ProductCard from './ProductCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProductGrid = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.1);

  const products = [
    {
      title: "One Piece Vol. 98",
      author: "Eiichiro Oda",
      volume: "Adventure",
      price: "$11.99",
      coins: "1199 coins",
      imageUrl: "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=400&h=600&fit=crop&crop=center",
      isNew: true,
      rating: 5
    },
    {
      title: "Attack on Titan Vol. 34",
      author: "Hajime Isayama",
      volume: "Action",
      price: "$12.99",
      coins: "1299 coins",
      imageUrl: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&h=600&fit=crop&crop=center",
      isNew: true,
      rating: 5
    },
    {
      title: "Jujutsu Kaisen Vol. 15",
      author: "Gege Akutami",
      volume: "Horror",
      price: "$9.99",
      originalPrice: "$14.99",
      coins: "999 coins",
      imageUrl: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop&crop=center",
      isOnSale: true,
      rating: 4
    },
    {
      title: "Chainsaw Man Vol. 8",
      author: "Tatsuki Fujimoto",
      volume: "Action",
      price: "$10.99",
      coins: "1099 coins",
      imageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=600&fit=crop&crop=center",
      rating: 5
    },
    {
      title: "Spy x Family Vol. 7",
      author: "Tatsuya Endo",
      volume: "Comedy",
      price: "$9.99",
      coins: "999 coins",
      imageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=600&fit=crop&crop=center",
      rating: 4
    },
    {
      title: "Tokyo Ghoul Vol. 14",
      author: "Sui Ishida",
      volume: "Horror",
      price: "$12.99",
      coins: "1299 coins",
      imageUrl: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=400&h=600&fit=crop&crop=center",
      rating: 4
    }
  ];

  return (
    <section 
      ref={elementRef}
      className={`relative bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 py-20 overflow-hidden transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Navigation */}
        <div className={`flex items-center justify-between mb-12 transition-all duration-1000 delay-200 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="flex space-x-8">
            <button className="group relative text-red-500 font-semibold pb-3 transform hover:scale-105 transition-all duration-300">
              <span className="relative z-10">New Releases</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-100 transition-transform duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-400 blur-sm"></div>
            </button>
            <button className="group relative text-gray-400 hover:text-white transition-all duration-300 pb-3 transform hover:scale-105">
              <span className="relative z-10">Best Sellers</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white to-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </button>
            <button className="group relative text-gray-400 hover:text-white transition-all duration-300 pb-3 transform hover:scale-105">
              <span className="relative z-10">Leaving Soon</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white to-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </button>
          </div>
          <button className="group text-red-500 hover:text-red-400 text-sm font-medium transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
            <span>View All</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>

        {/* Enhanced Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 transform hover:scale-105 hover:-translate-y-3 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${400 + index * 150}ms`,
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
              }}
            >
              <div className="relative">
                <ProductCard {...product} />
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
