
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Filter, Search, SlidersHorizontal, X, TrendingUp, Star } from 'lucide-react';

const ShopFilters = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Products', count: 1700 },
    { id: 'manga', label: 'Manga', count: 500 },
    { id: 'novels', label: 'Light Novels', count: 200 },
    { id: 'merchandise', label: 'Merchandise', count: 800 },
    { id: 'collectibles', label: 'Collectibles', count: 200 }
  ];

  const priceRanges = [
    { id: 'all', label: 'All Prices' },
    { id: 'under-10', label: 'Under $10' },
    { id: '10-20', label: '$10 - $20' },
    { id: '20-50', label: '$20 - $50' },
    { id: 'over-50', label: 'Over $50' }
  ];

  const sortOptions = [
    { id: 'newest', label: 'Newest First', icon: TrendingUp },
    { id: 'price-low', label: 'Price: Low to High', icon: TrendingUp },
    { id: 'price-high', label: 'Price: High to Low', icon: TrendingUp },
    { id: 'popular', label: 'Most Popular', icon: Star },
    { id: 'rating', label: 'Highest Rated', icon: Star }
  ];

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <section className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 py-12 border-b border-gray-700/50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-xl blur"></div>
            <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-600/50 overflow-hidden">
              <div className="flex items-center">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search manga, novels, merchandise..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-white pl-12 pr-12 py-4 text-lg focus:outline-none placeholder-gray-400"
                />
                {searchQuery && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={clearSearch}
                    className="absolute right-2 text-gray-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Filter Options */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Enhanced Categories */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg mb-4 flex items-center">
              <Filter className="w-5 h-5 mr-3 text-red-500" />
              Categories
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  size="sm"
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={`justify-between h-auto p-4 text-left transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white border-red-600 shadow-lg shadow-red-500/25'
                      : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-gray-700/70 hover:text-white hover:border-gray-500'
                  }`}
                >
                  <span className="font-medium">{category.label}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activeCategory === category.id
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-600/50 text-gray-400'
                  }`}>
                    {category.count}
                  </span>
                </Button>
              ))}
            </div>
          </div>

          {/* Enhanced Price Range */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg mb-4">Price Range</h3>
            <div className="relative">
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full bg-gray-800/90 backdrop-blur-sm text-white px-4 py-4 rounded-xl border border-gray-600/50 focus:border-red-500 focus:outline-none appearance-none cursor-pointer transition-all duration-300 hover:bg-gray-700/90"
              >
                {priceRanges.map((range) => (
                  <option key={range.id} value={range.id} className="bg-gray-800">
                    {range.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                <SlidersHorizontal className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Enhanced Sort By */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg mb-4 flex items-center">
              <SlidersHorizontal className="w-5 h-5 mr-3 text-red-500" />
              Sort By
            </h3>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-gray-800/90 backdrop-blur-sm text-white px-4 py-4 rounded-xl border border-gray-600/50 focus:border-red-500 focus:outline-none appearance-none cursor-pointer transition-all duration-300 hover:bg-gray-700/90"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id} className="bg-gray-800">
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                <TrendingUp className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Active Filters Display */}
        {(activeCategory !== 'all' || priceRange !== 'all' || sortBy !== 'newest' || searchQuery) && (
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="text-gray-400 text-sm font-medium">Active filters:</span>
            {activeCategory !== 'all' && (
              <span className="inline-flex items-center bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm">
                {categories.find(c => c.id === activeCategory)?.label}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setActiveCategory('all')}
                  className="ml-2 h-4 w-4 text-red-400 hover:text-red-300"
                >
                  <X className="w-3 h-3" />
                </Button>
              </span>
            )}
            {priceRange !== 'all' && (
              <span className="inline-flex items-center bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                {priceRanges.find(p => p.id === priceRange)?.label}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setPriceRange('all')}
                  className="ml-2 h-4 w-4 text-purple-400 hover:text-purple-300"
                >
                  <X className="w-3 h-3" />
                </Button>
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                "{searchQuery}"
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={clearSearch}
                  className="ml-2 h-4 w-4 text-blue-400 hover:text-blue-300"
                >
                  <X className="w-3 h-3" />
                </Button>
              </span>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ShopFilters;
