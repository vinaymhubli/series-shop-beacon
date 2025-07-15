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
      className={`bg-gray-900 py-16 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Section Navigation */}
        <div className={`flex items-center justify-between mb-8 transition-all duration-700 delay-200 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex space-x-8">
            <button className="text-red-500 font-semibold border-b-2 border-red-500 pb-2 transform hover:scale-105 transition-transform duration-200">
              New Releases
            </button>
            <button className="text-gray-400 hover:text-white transition-colors transform hover:scale-105 duration-200">
              Best Sellers
            </button>
            <button className="text-gray-400 hover:text-white transition-colors transform hover:scale-105 duration-200">
              Leaving Soon
            </button>
          </div>
          <button className="text-red-500 hover:text-red-400 text-sm transform hover:scale-105 transition-transform duration-200">
            View All →
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
