
import { Button } from '@/components/ui/button';
import { Heart, Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const HeroSection = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);

  return (
    <section 
      ref={elementRef}
      className={`relative bg-gradient-to-br from-gray-900 via-red-900/30 to-purple-900/20 min-h-[70vh] flex items-center overflow-hidden transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-500/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Comic Background Image with enhanced overlay */}
      <div 
        className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transform transition-all duration-2000 ${
          isVisible ? 'scale-100 opacity-30' : 'scale-110 opacity-20'
        }`}
        style={{
          backgroundImage: `url('/lovable-uploads/a0c88e05-5aba-4550-8ee0-7644ad456776.png')`
        }}
      />
      
      {/* Enhanced gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-900/40 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className={`max-w-3xl transition-all duration-1500 delay-300 transform ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
        }`}>
          {/* Logo replacing the title */}
          <div className="mb-6 min-h-[1.2em] relative">
            <img 
              src="/lovable-uploads/2c5604f6-57cc-4557-a8f4-996b91e1d0f7.png" 
              alt="Crossed Hearts: Exclusive Edition"
              className="w-full max-w-lg h-auto object-contain"
            />
            {/* Glow effect for logo */}
            <div className="absolute inset-0 opacity-30 blur-lg">
              <img 
                src="/lovable-uploads/2c5604f6-57cc-4557-a8f4-996b91e1d0f7.png" 
                alt=""
                className="w-full max-w-lg h-auto object-contain"
              />
            </div>
          </div>

          {/* Enhanced author info */}
          <div className={`transition-all duration-1000 delay-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p className="text-xl text-red-300 mb-2 font-medium">by Miyuki Tanaka</p>
            <p className="text-gray-300 mb-8 max-w-2xl text-lg leading-relaxed">
              The epic saga continues with this store-exclusive edition featuring bonus chapters and premium artwork!
            </p>
          </div>
          
          {/* Enhanced pricing with animation */}
          <div className={`flex items-center mb-8 transition-all duration-1000 delay-900 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <div className="relative">
              <span className="text-3xl lg:text-4xl font-bold text-white mr-6 relative z-10">$24.99</span>
              <div className="absolute inset-0 text-3xl lg:text-4xl font-bold text-red-400/50 blur-sm">$24.99</div>
            </div>
            <span className="text-gray-400 text-lg">or 2499 coins</span>
          </div>

          {/* Enhanced buttons with better animations */}
          <div className={`flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-1000 delay-1100 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Button className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 text-lg font-semibold transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-red-500/25 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/0 via-white/20 to-red-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <Heart className="w-5 h-5 mr-3 relative z-10" />
              <span className="relative z-10">Add to Cart</span>
            </Button>
            
            <Button variant="outline" className="group border-2 border-gray-400 text-black hover:bg-white hover:text-black px-10 py-4 text-lg font-semibold transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-white/25 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <Star className="w-5 h-5 mr-3 relative z-10 text-black group-hover:text-yellow-500 transition-colors duration-300" />
              <span className="relative z-10">Wishlist</span>
            </Button>
          </div>

          {/* New floating elements */}
          <div className={`mt-8 flex items-center space-x-8 transition-all duration-1000 delay-1300 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                ))}
              </div>
              <span className="text-gray-300 ml-2">4.9/5 Rating</span>
            </div>
            <div className="h-6 w-px bg-gray-600"></div>
            <div className="text-gray-300">
              <span className="text-white font-bold">10K+</span> Happy Readers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
