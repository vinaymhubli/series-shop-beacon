import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Star, Users, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SeriesGrid = () => {
  const navigate = useNavigate();
  const [hoveredSeries, setHoveredSeries] = useState<number | null>(null);

  const series = [
    {
      id: 1,
      title: "One Piece",
      author: "Eiichiro Oda",
      genre: "Adventure",
      description: "Join Monkey D. Luffy on his epic adventure to become the Pirate King in this legendary manga series.",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      rating: 5,
      popularity: 98,
      volumeCount: 108,
      status: "Ongoing",
      followers: "2.5M"
    },
    {
      id: 2,
      title: "Attack on Titan",
      author: "Hajime Isayama",
      genre: "Action",
      description: "Humanity's last stand against the titans in this gripping and emotional saga.",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      rating: 5,
      popularity: 95,
      volumeCount: 34,
      status: "Completed",
      followers: "2.1M"
    },
    {
      id: 3,
      title: "Demon Slayer",
      author: "Koyoharu Gotouge",
      genre: "Action",
      description: "Follow Tanjiro's journey to save his sister and defeat demons in this beautifully illustrated series.",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      rating: 5,
      popularity: 92,
      volumeCount: 23,
      status: "Completed",
      followers: "1.8M"
    },
    {
      id: 4,
      title: "Jujutsu Kaisen",
      author: "Gege Akutami",
      genre: "Action",
      description: "Enter the world of curses and sorcery with Yuji Itadori in this supernatural thriller.",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      rating: 4,
      popularity: 90,
      volumeCount: 24,
      status: "Ongoing",
      followers: "1.6M"
    },
    {
      id: 5,
      title: "Chainsaw Man",
      author: "Tatsuki Fujimoto",
      genre: "Horror",
      description: "A dark and twisted tale of devils, contracts, and chainsaws in modern Japan.",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      rating: 4,
      popularity: 88,
      volumeCount: 11,
      status: "Completed",
      followers: "1.4M"
    },
    {
      id: 6,
      title: "Spy x Family",
      author: "Tatsuya Endo",
      genre: "Comedy",
      description: "A spy, an assassin, and a telepath form an unlikely family in this heartwarming comedy.",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      rating: 4,
      popularity: 85,
      volumeCount: 12,
      status: "Ongoing",
      followers: "1.2M"
    },
    {
      id: 7,
      title: "Tokyo Revengers",
      author: "Ken Wakui",
      genre: "Drama",
      description: "Time travel meets gang warfare in this intense story of redemption and friendship.",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      rating: 4,
      popularity: 82,
      volumeCount: 31,
      status: "Completed",
      followers: "1.1M"
    },
    {
      id: 8,
      title: "My Hero Academia",
      author: "Kohei Horikoshi",
      genre: "Action",
      description: "In a world where everyone has superpowers, one boy dreams of becoming a hero.",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      rating: 4,
      popularity: 80,
      volumeCount: 38,
      status: "Ongoing",
      followers: "1.0M"
    }
  ];

  const handleSeriesClick = (seriesId: number) => {
    console.log('🔍 Series clicked:', seriesId);
    navigate(`/series/${seriesId}`);
  };

  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">
            All Series <span className="text-gray-400 text-lg font-normal">({series.length} series)</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {series.map((seriesItem, index) => (
            <div
              key={seriesItem.id}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:from-gray-750 hover:to-gray-850 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 border border-gray-700/50 hover:border-red-500/30 cursor-pointer"
              onMouseEnter={() => setHoveredSeries(seriesItem.id)}
              onMouseLeave={() => setHoveredSeries(null)}
              onClick={() => handleSeriesClick(seriesItem.id)}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: 1,
                transform: 'translateY(0)'
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={seriesItem.imageUrl} 
                  alt={seriesItem.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Status Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full shadow-lg ${
                    seriesItem.status === 'Ongoing' 
                      ? 'bg-gradient-to-r from-green-600 to-green-700 text-white animate-pulse' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                  }`}>
                    {seriesItem.status}
                  </span>
                </div>

                {/* Popularity Badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    #{seriesItem.popularity}% Popular
                  </span>
                </div>

                {/* Hover overlay with stats */}
                {hoveredSeries === seriesItem.id && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="space-y-2">
                      <div className="flex items-center text-white text-sm">
                        <BookOpen className="w-4 h-4 mr-2" />
                        {seriesItem.volumeCount} Volumes
                      </div>
                      <div className="flex items-center text-white text-sm">
                        <Users className="w-4 h-4 mr-2" />
                        {seriesItem.followers} Followers
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-red-400 text-xs font-semibold uppercase tracking-wide">{seriesItem.genre}</span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 transition-all duration-300 ${
                          i < seriesItem.rating 
                            ? 'text-yellow-400 fill-current group-hover:scale-125' 
                            : 'text-gray-600'
                        }`}
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-white font-semibold text-lg truncate group-hover:text-red-300 transition-colors duration-300">
                  {seriesItem.title}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {seriesItem.author}
                </p>
                <p className="text-gray-500 text-xs line-clamp-2 group-hover:text-gray-400 transition-colors duration-300">
                  {seriesItem.description}
                </p>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="text-gray-400 text-xs">
                    {seriesItem.volumeCount} volumes
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xs font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSeriesClick(seriesItem.id);
                    }}
                  >
                    Add to Cart
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

export default SeriesGrid;
