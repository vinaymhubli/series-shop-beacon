
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, Star, Eye, Filter, Grid3X3, List } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ShopGrid = () => {
  const navigate = useNavigate();
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const products = [
    {
      id: 1,
      title: "One Piece Vol. 98",
      author: "Eiichiro Oda",
      category: "Manga",
      price: "$11.99",
      originalPrice: "$14.99",
      coins: "1199 coins",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      isNew: true,
      isOnSale: true,
      rating: 5,
      inStock: true,
      description: "The epic adventure continues with Luffy and the Straw Hat Pirates!"
    },
    {
      id: 2,
      title: "Attack on Titan Vol. 34",
      author: "Hajime Isayama",
      category: "Manga",
      price: "$12.99",
      coins: "1299 coins",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      isNew: true,
      rating: 5,
      inStock: true,
      description: "The final battle against the titans reaches its climax!"
    },
    {
      id: 3,
      title: "Demon Slayer Figure Set",
      author: "Koyoharu Gotouge",
      category: "Merchandise",
      price: "$49.99",
      coins: "4999 coins",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      rating: 4,
      inStock: false,
      description: "Premium collectible figures of your favorite Demon Slayer characters!"
    },
    {
      id: 4,
      title: "Jujutsu Kaisen Vol. 15",
      author: "Gege Akutami",
      category: "Manga",
      price: "$9.99",
      originalPrice: "$13.99",
      coins: "999 coins",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      isOnSale: true,
      rating: 4,
      inStock: true,
      description: "The supernatural battles intensify in this thrilling volume!"
    },
    {
      id: 5,
      title: "Chainsaw Man Vol. 8",
      author: "Tatsuki Fujimoto",
      category: "Manga",
      price: "$10.99",
      coins: "1099 coins",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      rating: 5,
      inStock: true,
      description: "Dark and twisted tales that will keep you on the edge!"
    },
    {
      id: 6,
      title: "Tokyo Ghoul Complete Box Set",
      author: "Sui Ishida",
      category: "Collectibles",
      price: "$159.99",
      coins: "15999 coins",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      rating: 5,
      inStock: true,
      description: "Complete collection of the acclaimed dark fantasy series!"
    }
  ];

  const handleProductClick = (productId: number) => {
    navigate(`/pre-order/${productId}`);
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-black to-gray-800 py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 space-y-6 md:space-y-0">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                All Products
              </span>
            </h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-lg">
                {products.length} items found
              </span>
              <div className="h-1 w-16 bg-gradient-to-r from-red-500 to-purple-500 rounded-full"></div>
            </div>
          </div>
          
          {/* View Mode Toggle */}
          <div className="flex items-center space-x-4">
            <div className="flex bg-gray-800 rounded-lg p-1 border border-gray-700">
              <Button
                size="sm"
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                onClick={() => setViewMode('grid')}
                className={`${
                  viewMode === 'grid' 
                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                onClick={() => setViewMode('list')}
                className={`${
                  viewMode === 'list' 
                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Product Grid */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden hover:from-gray-750/80 hover:to-gray-850/80 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 border border-gray-700/50 hover:border-red-500/50 cursor-pointer ${
                viewMode === 'list' ? 'flex' : ''
              }`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => handleProductClick(product.id)}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: 1,
                transform: 'translateY(0)'
              }}
            >
              <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-48 h-48' : ''}`}>
                <img 
                  src={product.imageUrl} 
                  alt={product.title}
                  className={`object-cover group-hover:scale-110 transition-transform duration-700 ${
                    viewMode === 'list' ? 'w-full h-full' : 'w-full h-80'
                  }`}
                />
                
                {/* Enhanced badges */}
                <div className="absolute top-3 left-3 space-y-2">
                  {product.isNew && (
                    <span className="bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse backdrop-blur-sm">
                      NEW
                    </span>
                  )}
                  {product.isOnSale && (
                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse backdrop-blur-sm">
                      SALE
                    </span>
                  )}
                  {!product.inStock && (
                    <span className="bg-gradient-to-r from-gray-600 to-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg backdrop-blur-sm">
                      PRE-ORDER
                    </span>
                  )}
                </div>

                {/* Heart button */}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-3 right-3 text-white hover:bg-black/60 hover:text-red-400 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('Added to wishlist:', product.title);
                  }}
                >
                  <Heart className="w-4 h-4 transition-transform duration-300 group-hover:animate-pulse" />
                </Button>

                {/* Quick view overlay */}
                {hoveredProduct === product.id && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                    <Button 
                      size="sm"
                      className="bg-white/90 text-black hover:bg-white transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProductClick(product.id);
                      }}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Quick View
                    </Button>
                  </div>
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className={`p-6 space-y-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-center justify-between">
                  <span className="text-red-400 text-xs font-semibold uppercase tracking-wide bg-red-400/10 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                  {product.rating && (
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 transition-all duration-300 ${
                            i < product.rating 
                              ? 'text-yellow-400 fill-current group-hover:scale-125' 
                              : 'text-gray-600'
                          }`}
                          style={{ transitionDelay: `${i * 50}ms` }}
                        />
                      ))}
                      <span className="text-xs text-gray-400 ml-1">({product.rating})</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-white font-bold text-xl group-hover:text-red-300 transition-colors duration-300 leading-tight">
                  {product.title}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300 font-medium">
                  {product.author}
                </p>
                
                {viewMode === 'list' && product.description && (
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {product.description}
                  </p>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-white font-bold text-xl group-hover:text-red-300 transition-colors duration-300">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through text-sm bg-gray-500/10 px-2 py-1 rounded">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-gray-400 text-xs bg-gray-400/10 px-2 py-1 rounded">
                    {product.coins}
                  </span>
                </div>
                
                <div className="flex space-x-3 pt-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-sm font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductClick(product.id);
                    }}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {product.inStock ? 'Add to Cart' : 'Pre-Order'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-red-500/25"
          >
            Load More Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShopGrid;
