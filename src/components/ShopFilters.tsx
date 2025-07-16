
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Filter, Search, SlidersHorizontal } from 'lucide-react';

const ShopFilters = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'manga', label: 'Manga' },
    { id: 'novels', label: 'Light Novels' },
    { id: 'merchandise', label: 'Merchandise' },
    { id: 'collectibles', label: 'Collectibles' }
  ];

  const priceRanges = [
    { id: 'all', label: 'All Prices' },
    { id: 'under-10', label: 'Under $10' },
    { id: '10-20', label: '$10 - $20' },
    { id: '20-50', label: '$20 - $50' },
    { id: 'over-50', label: 'Over $50' }
  ];

  const sortOptions = [
    { id: 'newest', label: 'Newest First' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' },
    { id: 'popular', label: 'Most Popular' },
    { id: 'rating', label: 'Highest Rated' }
  ];

  return (
    <section className="bg-gray-800 py-8 border-b border-gray-700">
      <div className="container mx-auto px-4">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-gray-700 text-white pl-10 pr-4 py-3 rounded-lg border border-gray-600 focus:border-red-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Filter Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-3 flex items-center">
              <Filter className="w-4 h-4 mr-2 text-red-500" />
              Categories
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  size="sm"
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={`text-xs ${
                    activeCategory === category.id
                      ? 'bg-red-600 hover:bg-red-700 text-white border-red-600'
                      : 'bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="text-white font-semibold mb-3">Price Range</h3>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-red-500 focus:outline-none"
            >
              {priceRanges.map((range) => (
                <option key={range.id} value={range.id}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div>
            <h3 className="text-white font-semibold mb-3 flex items-center">
              <SlidersHorizontal className="w-4 h-4 mr-2 text-red-500" />
              Sort By
            </h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-red-500 focus:outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopFilters;
