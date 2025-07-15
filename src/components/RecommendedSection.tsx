import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';

const RecommendedSection = () => {
  const recommendedItems = [
    {
      title: "Tokyo Ghoul Vol. 14",
      author: "Sui Ishida",
      price: "$12.99",
      coins: "1299 coins",
      imageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=500&fit=crop&crop=center",
      type: "Digital"
    },
    {
      title: "Demon Slayer Tanjiro Figure",
      author: "Koyoharu Gotouge",
      price: "$49.99",
      coins: "4999 coins",
      imageUrl: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?w=400&h=500&fit=crop&crop=center",
      type: "Merchandise"
    },
    {
      title: "Naruto Vol. 72",
      author: "Masashi Kishimoto",
      price: "$9.99",
      coins: "999 coins",
      imageUrl: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=500&fit=crop&crop=center",
      type: "Digital"
    },
    {
      title: "My Hero Academia Keychain Set",
      author: "Kohei Horikoshi",
      price: "$14.99",
      coins: "1499 coins",
      imageUrl: "https://images.unsplash.com/photo-1626618012641-bfbca5362dd1?w=400&h=500&fit=crop&crop=center",
      type: "Merchandise"
    }
  ];

  return (
    <section className="bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Recommended For You</h2>
          <div className="flex space-x-4">
            <button className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700 transition-colors">
              Digital
            </button>
            <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded text-sm hover:bg-gray-600 transition-colors">
              Merchandise
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedItems.map((item, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-850 transition-colors">
              <div className="relative">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <span className="absolute top-2 right-2 bg-gray-700 text-white text-xs px-2 py-1 rounded">
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
                  <Button size="sm" className="flex-1 bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-700">
                    <ShoppingCart className="w-3 h-3 mr-1" />
                    Add to Cart
                  </Button>
                  <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
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
