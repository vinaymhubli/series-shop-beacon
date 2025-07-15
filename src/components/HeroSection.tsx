
import { Button } from '@/components/ui/button';
import { Heart, Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';

const HeroSection = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);
  const { displayedText, isComplete } = useTypingAnimation('Crossed Hearts: Exclusive Edition', 100, 800);

  return (
    <section 
      ref={elementRef}
      className={`relative bg-gradient-to-r from-gray-900 via-red-900/20 to-gray-900 py-20 overflow-hidden transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Comic Background Image */}
      <div 
        className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transform transition-transform duration-1000 ${
          isVisible ? 'scale-100' : 'scale-110'
        }`}
        style={{
          backgroundImage: `url('/lovable-uploads/a0c88e05-5aba-4550-8ee0-7644ad456776.png')`
        }}
      />
      
      {/* Additional subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20"></div>
      
      {/* Main overlay for text visibility */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-2xl transition-all duration-1000 delay-300 transform ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}>
          <h2 className="text-5xl font-bold text-white mb-4 min-h-[1.2em]">
            {displayedText}
            {!isComplete && <span className="animate-pulse">|</span>}
          </h2>
          <p className="text-lg text-gray-300 mb-2">by Miyuki Tanaka</p>
          <p className="text-gray-400 mb-8 max-w-lg">
            The epic saga continues with this store-exclusive edition featuring bonus chapters and artwork!
          </p>
          
          <div className={`flex items-center mb-8 transition-all duration-700 delay-500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="text-3xl font-bold text-white mr-4">$24.99</span>
            <span className="text-gray-400">or 2499 coins</span>
          </div>

          <div className={`flex items-center space-x-4 transition-all duration-700 delay-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 transform hover:scale-105 transition-transform duration-200">
              <Heart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
            <Button variant="outline" className="border-gray-600 text-black hover:bg-gray-800 hover:text-white px-8 py-3 transform hover:scale-105 transition-transform duration-200">
              <Star className="w-4 h-4 mr-2 text-black" />
              Wishlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
