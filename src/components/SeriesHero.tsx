
import { Button } from '@/components/ui/button';
import { Play, Eye } from 'lucide-react';

const SeriesHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=800&fit=crop&crop=center"
          alt="Explore Series Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Explore Series
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Discover your next favorite manga and anime series. From classic masterpieces to the latest hits, dive into worlds of endless imagination.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold">
              <Play className="w-5 h-5 mr-2" />
              Popular Series
            </Button>
            <Button variant="outline" className="border-gray-400 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg">
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
