
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutHero = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);

  return (
    <section 
      ref={elementRef}
      className={`relative py-40 md:py-52 bg-gradient-to-br from-gray-900 via-black to-red-900/20 overflow-hidden transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-red-500/5 to-transparent rounded-full"></div>
      </div>

      {/* Banner Image with enhanced overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Library books background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-red-900/20"></div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Enhanced Typography */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            About{' '}
            <span className="relative inline-block">
              <span className="text-red-500 relative z-10">Crossed Hearts</span>
              <div className="absolute -bottom-2 left-0 w-full h-4 bg-red-500/20 rounded-lg transform -skew-x-12"></div>
            </span>
          </h1>
          
          <div className="relative">
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 font-light">
              A global publishing house specialising in the English localization of{' '}
              <span className="text-red-400 font-medium">Japanese manga</span> and{' '}
              <span className="text-red-400 font-medium">Korean webtoon</span> comics, 
              bringing incredible stories to readers worldwide.
            </p>
            
            {/* Decorative Quote Marks */}
            <div className="absolute -top-4 -left-4 text-red-500/30 text-6xl font-serif">"</div>
            <div className="absolute -bottom-4 -right-4 text-red-500/30 text-6xl font-serif rotate-180">"</div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
              Explore Our Series
            </button>
            <button className="px-8 py-4 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
              Read Our Story
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
