import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const RecommendedSection = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.1);

  const recommendedItems = [
    {
      title: "Tokyo Ghoul Vol. 14",
      author: "Sui Ishida",
      price: "$12.99",
      coins: "1299 coins",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      type: "Digital"
    },
    {
      title: "Demon Slayer Tanjiro Figure",
      author: "Koyoharu Gotouge",
      price: "$49.99",
      coins: "4999 coins",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      type: "Merchandise"
    },
    {
      title: "Naruto Vol. 72",
      author: "Masashi Kishimoto",
      price: "$9.99",
      coins: "999 coins",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      type: "Digital"
    },
    {
      title: "My Hero Academia Keychain Set",
      author: "Kohei Horikoshi",
      price: "$14.99",
      coins: "1499 coins",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      type: "Merchandise"
    }
  ];

  return (
    <section 
      ref={elementRef}
      className={`bg-gray-800 py-16 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between mb-8 transition-all duration-700 delay-200 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-2xl font-bold text-white">Recommended For You</h2>
          <div className="flex space-x-4">
            <button className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700 transition-all duration-200 transform hover:scale-105">
              Digital
            </button>
            <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded text-sm hover:bg-gray-600 transition-all duration-200 transform hover:scale-105">
              Merchandise
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedItems.map((item, index) => (
            <div 
              key={index} 
              className={`bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-850 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
            >
              <div className="relative group">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute top-2 right-2 bg-gray-700 text-white text-xs px-2 py-1 rounded transition-all duration-200 transform group-hover:scale-105">
                  {item.type}
                </span>
              </div>
              
              <div className="p-4">
                <h3 className="text-white font-medium mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{item.author}</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-bold">{item.price}</span>
                  <span className="text-gray-400 text-xs">{item.coins}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button size="sm" className="flex-1 bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-700 transition-all duration-200 transform hover:scale-105">
                    <ShoppingCart className="w-3 h-3 mr-1" />
                    Add to Cart
                  </Button>
                  <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-110">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedSection;
