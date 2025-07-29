
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedSeriesSlideshow = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredSeries = [
    {
      id: 1,
      title: "One Piece",
      description: "Join Monkey D. Luffy on his epic adventure to become the Pirate King",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      seriesUrl: "/series/one-piece"
    },
    {
      id: 2,
      title: "Attack on Titan",
      description: "Humanity's last stand against the titans in this gripping saga",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      seriesUrl: "/series/attack-on-titan"
    },
    {
      id: 3,
      title: "Demon Slayer",
      description: "Follow Tanjiro's journey to save his sister and defeat demons",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      seriesUrl: "/series/demon-slayer"
    },
    {
      id: 4,
      title: "Jujutsu Kaisen",
      description: "Enter the world of curses and sorcery with Yuji Itadori",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      seriesUrl: "/series/jujutsu-kaisen"
    }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredSeries.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [featuredSeries.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredSeries.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredSeries.length) % featuredSeries.length);
  };

  const handleSeriesClick = (seriesUrl: string) => {
    navigate('/our-series'); // Navigate to the series page
  };

  return (
    <section className="relative bg-gray-900 py-8 border-b border-gray-700/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Featured Series</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-80 rounded-xl overflow-hidden">
            {featuredSeries.map((series, index) => (
              <div
                key={series.id}
                className={`absolute inset-0 transition-opacity duration-500 cursor-pointer ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={() => handleSeriesClick(series.seriesUrl)}
              >
                <img
                  src={series.imageUrl}
                  alt={series.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{series.title}</h3>
                  <p className="text-gray-300 text-lg max-w-2xl">{series.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Slide indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {featuredSeries.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-red-500' : 'bg-gray-500'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSeriesSlideshow;
