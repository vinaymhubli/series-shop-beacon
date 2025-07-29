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
      className={`relative bg-gradient-to-br from-gray-800 via-gray-850 to-gray-900 py-12 overflow-hidden transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`flex items-center justify-between mb-8 transition-all duration-1000 delay-200 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
                Recommended For You
              </span>
            </h2>
            <p className="text-gray-400">Curated picks based on your interests and genres</p>
          </div>
          <div className="flex space-x-4">
            <button className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:from-red-700 hover:to-red-800 transform hover:scale-105 shadow-lg hover:shadow-red-500/25">
              <span className="relative z-10">Digital</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/0 via-white/20 to-red-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-lg"></div>
            </button>
            <button className="group bg-gray-700 text-gray-300 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-600 hover:text-white transform hover:scale-105 shadow-lg">
              Merchandise
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendedItems.map((item, index) => (
            <div 
              key={index} 
              className={`group bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl overflow-hidden hover:from-gray-850 hover:to-gray-900 transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple-500/20 border border-gray-700/50 hover:border-purple-500/30 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              <div className="relative group/image overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-3 right-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm transition-all duration-300 group-hover:from-purple-600 group-hover:to-purple-700">
                  {item.type}
                </span>
                
                {/* Hover overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-5 space-y-3">
                <h3 className="text-white font-semibold text-lg group-hover:text-purple-300 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{item.author}</p>
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-lg group-hover:text-purple-300 transition-colors duration-300">{item.price}</span>
                  <span className="text-gray-400 text-xs">{item.coins}</span>
                </div>
                
                <div className="flex items-center space-x-3 pt-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-transparent border border-gray-600 text-gray-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-700 hover:border-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                  >
                    <ShoppingCart className="w-3 h-3 mr-2" />
                    Add to Cart
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all duration-300 transform hover:scale-110 p-3"
                  >
                    <Heart className="w-4 h-4 hover:animate-pulse" />
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
