
import { Button } from '@/components/ui/button';
import { Heart, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      className="relative bg-gradient-to-r from-gray-900 via-red-900/20 to-gray-900 py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop&crop=center')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-bold text-white mb-4">
            Crossed Hearts: Exclusive Edition
          </h2>
          <p className="text-lg text-gray-300 mb-2">by Miyuki Tanaka</p>
          <p className="text-gray-400 mb-8 max-w-lg">
            The epic saga continues with this store-exclusive edition featuring bonus chapters and artwork!
          </p>
          
          <div className="flex items-center mb-8">
            <span className="text-3xl font-bold text-white mr-4">$24.99</span>
            <span className="text-gray-400">or 2499 coins</span>
          </div>

          <div className="flex items-center space-x-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
              <Heart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
              <Star className="w-4 h-4 mr-2" />
              Wishlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
