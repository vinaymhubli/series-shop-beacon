
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const AllSeries = () => {
  const allSeries = [
    { title: "Chainsaw Man", rating: 4.7, image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=300&h=400&fit=crop" },
    { title: "My Hero Academia", rating: 4.6, image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&h=400&fit=crop" },
    { title: "Attack on Titan", rating: 4.9, image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=300&h=400&fit=crop" },
    { title: "Spy x Family", rating: 4.8, image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=300&h=400&fit=crop" },
    { title: "Tokyo Revengers", rating: 4.5, image: "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=300&h=400&fit=crop" },
    { title: "Black Clover", rating: 4.4, image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop" },
    { title: "Bleach", rating: 4.6, image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&h=400&fit=crop" },
    { title: "Naruto", rating: 4.8, image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=300&h=400&fit=crop" },
    { title: "Dragon Ball Super", rating: 4.7, image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=300&h=400&fit=crop" },
    { title: "One Punch Man", rating: 4.8, image: "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=300&h=400&fit=crop" },
    { title: "Haikyuu!", rating: 4.9, image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop" },
    { title: "Demon Slayer", rating: 4.9, image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&h=400&fit=crop" }
  ];

  return (
    <section className="bg-gray-850 py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">All Series</h2>
          <span className="text-gray-400">Showing 12 series</span>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {allSeries.map((series, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-3">
                <img 
                  src={series.image} 
                  alt={series.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                  <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                  <span className="text-white text-xs font-semibold">{series.rating}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white text-xs">
                    Read
                  </Button>
                </div>
              </div>
              <h3 className="text-white font-medium text-sm group-hover:text-red-400 transition-colors duration-200 line-clamp-2">
                {series.title}
              </h3>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3">
            Load More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AllSeries;
