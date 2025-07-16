
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Sword, 
  Heart, 
  Sparkles, 
  Zap, 
  Ghost, 
  Laugh, 
  Telescope, 
  Crown,
  Flame,
  Shield,
  Wand2,
  Skull
} from 'lucide-react';

const GenreSection = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.1);
  const navigate = useNavigate();

  const genres = [
    { name: 'Action', icon: Sword, color: 'from-red-500 to-orange-500', filter: 'action' },
    { name: 'Romance', icon: Heart, color: 'from-pink-500 to-rose-500', filter: 'romance' },
    { name: 'Fantasy', icon: Sparkles, color: 'from-purple-500 to-indigo-500', filter: 'fantasy' },
    { name: 'Sci-Fi', icon: Zap, color: 'from-blue-500 to-cyan-500', filter: 'sci-fi' },
    { name: 'Horror', icon: Ghost, color: 'from-gray-600 to-gray-800', filter: 'horror' },
    { name: 'Comedy', icon: Laugh, color: 'from-yellow-500 to-orange-500', filter: 'comedy' },
    { name: 'Adventure', icon: Telescope, color: 'from-green-500 to-emerald-500', filter: 'adventure' },
    { name: 'Drama', icon: Crown, color: 'from-purple-600 to-pink-600', filter: 'drama' },
    { name: 'Shounen', icon: Flame, color: 'from-orange-500 to-red-600', filter: 'shounen' },
    { name: 'Seinen', icon: Shield, color: 'from-slate-500 to-gray-700', filter: 'seinen' },
    { name: 'Shoujo', icon: Wand2, color: 'from-pink-400 to-purple-400', filter: 'shoujo' },
    { name: 'Thriller', icon: Skull, color: 'from-red-700 to-black', filter: 'thriller' }
  ];

  const handleGenreClick = (filter: string) => {
    console.log(`Genre clicked: ${filter}`);
    navigate(`/shop-all?genre=${filter}`);
  };

  return (
    <section 
      ref={elementRef}
      className={`relative bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 py-16 overflow-hidden transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 transition-all duration-1000 delay-200 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-500 bg-clip-text text-transparent">
              Explore by Genres
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Discover your next favorite series by genre</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {genres.map((genre, index) => {
            const IconComponent = genre.icon;
            return (
              <div 
                key={genre.name}
                onClick={() => handleGenreClick(genre.filter)}
                className={`group cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:from-gray-750 hover:to-gray-850 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 hover:shadow-2xl border border-gray-700/50 hover:border-white/20 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="text-center space-y-4">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${genre.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-sm group-hover:text-gray-100 transition-colors duration-300">
                    {genre.name}
                  </h3>
                </div>
                
                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${genre.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl pointer-events-none`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GenreSection;
