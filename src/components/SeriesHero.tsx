
import { Button } from '@/components/ui/button';
import { Play, Eye } from 'lucide-react';

const SeriesHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20 overflow-hidden min-h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1920&h=800&fit=crop&crop=center"
          alt="Anime and Manga Series Collection"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
            Explore Series
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed drop-shadow-lg">
            Discover your next favorite manga and anime series. From classic masterpieces to the latest hits, dive into worlds of endless imagination.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold shadow-lg">
              <Play className="w-5 h-5 mr-2" />
              Popular Series
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg backdrop-blur-sm transition-colors">
              <Eye className="w-5 h-5 mr-2" />
              Browse All
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeriesHero;
