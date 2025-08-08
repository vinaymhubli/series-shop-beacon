import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Filter, Search, ArrowUpDown } from 'lucide-react';

interface ShopFiltersProps {
  viewMode: 'series' | 'volume';
  setViewMode: (mode: 'series' | 'volume') => void;
}

const ShopFilters = ({ viewMode, setViewMode }: ShopFiltersProps) => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = [
    'All', 'Action', 'Adventure', 'Romance', 'Fantasy', 'Sci-Fi', 
    'Horror', 'Comedy', 'Drama', 'More...'
  ];

  return (
    <div className="bg-gray-900 py-6 fixed top-16 left-0 right-0 z-40 shadow-lg border-b border-gray-800">
      <div className="container mx-auto px-4">
        {/* Search Bar and Filter Controls */}
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search series..."
              className="w-full pl-12 pr-4 py-3 bg-blue-900/30 border border-blue-800 text-white placeholder-gray-400 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Filter and Sort Buttons */}
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              className="bg-blue-900/50 border-blue-700 text-white hover:bg-blue-800/60 px-6 py-2 rounded-lg"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button 
              variant="outline" 
              className="bg-blue-900/50 border-blue-700 text-white hover:bg-blue-800/60 px-6 py-2 rounded-lg"
            >
              <ArrowUpDown className="h-4 w-4 mr-2" />
              Sort By
            </Button>
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-red-600 text-white hover:bg-red-700 border-0'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
              }`}
              variant={activeCategory === category ? 'default' : 'outline'}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopFilters;