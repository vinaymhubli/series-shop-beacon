import { useState } from 'react';

const SimpleProductGrid = () => {
  const [activeSection, setActiveSection] = useState('best-sellers');

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 py-12 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Navigation - ALWAYS VISIBLE */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex space-x-6">
            <button 
              onClick={() => setActiveSection('new-releases')}
              className={`font-semibold pb-2 transition-all duration-300 ${
                activeSection === 'new-releases' ? 'text-red-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              New Releases
            </button>
            <button 
              onClick={() => setActiveSection('best-sellers')}
              className={`font-semibold pb-2 transition-all duration-300 ${
                activeSection === 'best-sellers' ? 'text-red-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              Best Sellers
            </button>
            <button 
              onClick={() => setActiveSection('leaving-soon')}
              className={`font-semibold pb-2 transition-all duration-300 ${
                activeSection === 'leaving-soon' ? 'text-red-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              Leaving Soon
            </button>
          </div>
          <button className="text-red-500 hover:text-red-400 text-sm font-medium">
            View All
          </button>
        </div>

        {/* Simple Card Grid - ALWAYS VISIBLE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Test Card to verify rendering */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700/50 min-h-[560px]">
            <div className="relative overflow-hidden">
              <img 
                src="https://static.vecteezy.com/system/resources/thumbnails/044/280/984/small_2x/stack-of-books-on-a-brown-background-concept-for-world-book-day-photo.jpg" 
                alt="Test Book"
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                  NEW
                </span>
              </div>
              <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                vol 98
              </div>
            </div>
            
            <div className="p-5 space-y-3 flex-1 flex flex-col">
              <h3 className="text-white font-semibold text-lg">Test Book</h3>
              <p className="text-gray-400 text-sm">Author Test</p>
              <p className="text-gray-500 text-xs uppercase tracking-wide">Horror</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-white font-bold text-lg">$19.00</span>
                  <span className="text-gray-500 line-through text-sm">$34.00</span>
                </div>
                <span className="text-gray-400 text-xs">1900 coins</span>
              </div>
              
              <div className="flex flex-col space-y-2 pt-2 mt-auto">
                <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xs font-semibold py-2 rounded">
                  Add to Cart
                </button>
                <button className="w-full bg-white text-black text-xs py-2 rounded">
                  Buy Now
                </button>
                <button className="w-full text-gray-400 hover:text-white text-xs border border-gray-600 py-2 rounded">
                  Unlock with coins
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Debug Information */}
        <div className="mt-8 p-4 bg-gray-800 rounded-lg">
          <h4 className="text-white font-semibold mb-2">Debug Information:</h4>
          <p className="text-gray-300 text-sm">This is a simplified version that should always be visible.</p>
          <p className="text-gray-300 text-sm">Active section: {activeSection}</p>
          <p className="text-red-400 text-sm">If you can see this, the component is rendering correctly!</p>
        </div>
      </div>
    </section>
  );
};

export default SimpleProductGrid;