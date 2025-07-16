
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Filter, Search, SlidersHorizontal, X } from 'lucide-react';

const ShopFilters = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');

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

  const clearAllFilters = () => {
    setActiveCategory('all');
    setPriceRange('all');
    setSortBy('newest');
    setSearchQuery('');
  };

  const hasActiveFilters = activeCategory !== 'all' || priceRange !== 'all' || sortBy !== 'newest' || searchQuery;

  return (
    <section className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black py-12 border-b border-gray-700/50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/3 w-32 h-32 bg-gradient-to-r from-red-500 to-purple-500 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Find Your Perfect Item</h2>
          <p className="text-gray-400">Filter and search through our extensive collection</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for manga, novels, merchandise..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-700/50 backdrop-blur-sm text-white pl-12 pr-4 py-4 rounded-xl border border-gray-600/50 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all duration-300 placeholder-gray-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Controls */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
          {/* Filter Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Filter className="w-5 h-5 mr-2 text-red-500" />
              Filters
            </h3>
            {hasActiveFilters && (
              <Button
                onClick={clearAllFilters}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-700/50"
              >
                <X className="w-4 h-4 mr-1" />
                Clear All
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Categories */}
            <div className="space-y-4">
              <h4 className="text-white font-medium mb-3 flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                Categories
              </h4>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    size="sm"
                    variant={activeCategory === category.id ? "default" : "outline"}
                    onClick={() => setActiveCategory(category.id)}
                    className={`text-sm transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white border-red-600 shadow-lg shadow-red-500/20'
                        : 'bg-gray-700/50 border-gray-600/50 text-gray-300 hover:bg-gray-600/50 hover:text-white hover:border-gray-500'
                    }`}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="space-y-4">
              <h4 className="text-white font-medium mb-3 flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                Price Range
              </h4>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full bg-gray-700/50 backdrop-blur-sm text-white px-4 py-3 rounded-lg border border-gray-600/50 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 cursor-pointer"
              >
                {priceRanges.map((range) => (
                  <option key={range.id} value={range.id} className="bg-gray-800">
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div className="space-y-4">
              <h4 className="text-white font-medium mb-3 flex items-center">
                <SlidersHorizontal className="w-4 h-4 mr-2 text-purple-500" />
                Sort By
              </h4>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-gray-700/50 backdrop-blur-sm text-white px-4 py-3 rounded-lg border border-gray-600/50 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 cursor-pointer"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id} className="bg-gray-800">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="mt-6 pt-6 border-t border-gray-700/50">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-gray-400 text-sm mr-2">Active filters:</span>
                {activeCategory !== 'all' && (
                  <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded-full text-xs border border-red-500/30">
                    {categories.find(c => c.id === activeCategory)?.label}
                  </span>
                )}
                {priceRange !== 'all' && (
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs border border-blue-500/30">
                    {priceRanges.find(p => p.id === priceRange)?.label}
                  </span>
                )}
                {sortBy !== 'newest' && (
                  <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs border border-purple-500/30">
                    {sortOptions.find(s => s.id === sortBy)?.label}
                  </span>
                )}
                {searchQuery && (
                  <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs border border-green-500/30">
                    "{searchQuery}"
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShopFilters;
