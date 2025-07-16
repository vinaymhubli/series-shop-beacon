
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Filter, Search, SlidersHorizontal, X, ToggleLeft, ToggleRight } from 'lucide-react';

interface ShopFiltersProps {
  viewMode: 'series' | 'volume';
  setViewMode: (mode: 'series' | 'volume') => void;
}

const ShopFilters = ({ viewMode, setViewMode }: ShopFiltersProps) => {
  const [activeGenre, setActiveGenre] = useState('all');
  const [activeRelease, setActiveRelease] = useState('all');
  const [activeAuthor, setActiveAuthor] = useState('all');
  const [sortBy, setSortBy] = useState('popularity-high');
  const [searchQuery, setSearchQuery] = useState('');

  const genres = [
    { id: 'all', label: 'All Genres' },
    { id: 'action', label: 'Action' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'romance', label: 'Romance' },
    { id: 'fantasy', label: 'Fantasy' },
    { id: 'sci-fi', label: 'Sci-Fi' },
    { id: 'horror', label: 'Horror' },
    { id: 'comedy', label: 'Comedy' },
    { id: 'drama', label: 'Drama' },
    { id: 'slice-of-life', label: 'Slice of Life' }
  ];

  const releaseTypes = [
    { id: 'all', label: 'All Releases' },
    { id: 'released', label: 'Released' },
    { id: 'pre-order', label: 'Pre-Order' },
    { id: 'to-be-released', label: 'To Be Released' }
  ];

  const authors = [
    { id: 'all', label: 'All Authors' },
    { id: 'eiichiro-oda', label: 'Eiichiro Oda' },
    { id: 'hajime-isayama', label: 'Hajime Isayama' },
    { id: 'gege-akutami', label: 'Gege Akutami' },
    { id: 'tatsuki-fujimoto', label: 'Tatsuki Fujimoto' },
    { id: 'koyoharu-gotouge', label: 'Koyoharu Gotouge' }
  ];

  const sortOptions = [
    { id: 'popularity-high', label: 'Popularity: High to Low' },
    { id: 'popularity-low', label: 'Popularity: Low to High' },
    { id: 'newest', label: 'Newest First' },
    { id: 'oldest', label: 'Oldest First' },
    { id: 'alphabetical-asc', label: 'A to Z' },
    { id: 'alphabetical-desc', label: 'Z to A' }
  ];

  const clearAllFilters = () => {
    setActiveGenre('all');
    setActiveRelease('all');
    setActiveAuthor('all');
    setSortBy('popularity-high');
    setSearchQuery('');
  };

  const hasActiveFilters = activeGenre !== 'all' || activeRelease !== 'all' || activeAuthor !== 'all' || sortBy !== 'popularity-high' || searchQuery;

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

        {/* Search Bar and View Mode Toggle */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={`Search for ${viewMode === 'series' ? 'series' : 'volumes and merchandise'}...`}
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

          {/* View Mode Toggle */}
          <div className="flex justify-center">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-2 border border-gray-700/50">
              <div className="flex items-center space-x-4">
                <span className={`text-sm font-medium transition-colors ${viewMode === 'series' ? 'text-white' : 'text-gray-400'}`}>
                  View by Series
                </span>
                <button
                  onClick={() => setViewMode(viewMode === 'series' ? 'volume' : 'series')}
                  className="text-red-500 hover:text-red-400 transition-colors"
                >
                  {viewMode === 'series' ? <ToggleLeft className="w-8 h-8" /> : <ToggleRight className="w-8 h-8" />}
                </button>
                <span className={`text-sm font-medium transition-colors ${viewMode === 'volume' ? 'text-white' : 'text-gray-400'}`}>
                  View by Volume
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
          {/* Filter Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Filter className="w-5 h-5 mr-2 text-red-500" />
              Filters & Sorting
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

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Genres */}
            <div className="space-y-4">
              <h4 className="text-white font-medium mb-3 flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                Genre
              </h4>
              <select
                value={activeGenre}
                onChange={(e) => setActiveGenre(e.target.value)}
                className="w-full bg-gray-700/50 backdrop-blur-sm text-white px-4 py-3 rounded-lg border border-gray-600/50 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all duration-300 cursor-pointer"
              >
                {genres.map((genre) => (
                  <option key={genre.id} value={genre.id} className="bg-gray-800">
                    {genre.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Release Status */}
            <div className="space-y-4">
              <h4 className="text-white font-medium mb-3 flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                Release Status
              </h4>
              <select
                value={activeRelease}
                onChange={(e) => setActiveRelease(e.target.value)}
                className="w-full bg-gray-700/50 backdrop-blur-sm text-white px-4 py-3 rounded-lg border border-gray-600/50 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 cursor-pointer"
              >
                {releaseTypes.map((release) => (
                  <option key={release.id} value={release.id} className="bg-gray-800">
                    {release.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Authors */}
            <div className="space-y-4">
              <h4 className="text-white font-medium mb-3 flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Author
              </h4>
              <select
                value={activeAuthor}
                onChange={(e) => setActiveAuthor(e.target.value)}
                className="w-full bg-gray-700/50 backdrop-blur-sm text-white px-4 py-3 rounded-lg border border-gray-600/50 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-300 cursor-pointer"
              >
                {authors.map((author) => (
                  <option key={author.id} value={author.id} className="bg-gray-800">
                    {author.label}
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
                {activeGenre !== 'all' && (
                  <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded-full text-xs border border-red-500/30">
                    {genres.find(g => g.id === activeGenre)?.label}
                  </span>
                )}
                {activeRelease !== 'all' && (
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs border border-blue-500/30">
                    {releaseTypes.find(r => r.id === activeRelease)?.label}
                  </span>
                )}
                {activeAuthor !== 'all' && (
                  <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs border border-green-500/30">
                    {authors.find(a => a.id === activeAuthor)?.label}
                  </span>
                )}
                {sortBy !== 'popularity-high' && (
                  <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs border border-purple-500/30">
                    {sortOptions.find(s => s.id === sortBy)?.label}
                  </span>
                )}
                {searchQuery && (
                  <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs border border-yellow-500/30">
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
