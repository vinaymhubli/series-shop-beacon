
import { Button } from '@/components/ui/button';
import { Heart, Unlock, ShoppingCart, Diamond, Club, Spade } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  title: string;
  author: string;
  volume: string;
  price: string;
  originalPrice?: string;
  coins: string;
  imageUrl: string;
  hoverImageUrl?: string;
  isNew?: boolean;
  isOnSale?: boolean;
  canUnlockWithCoins?: boolean;
  label?: string;
  cardIndex?: number; // Add index to determine which symbol to show
}

const ProductCard = ({ 
  title, 
  author, 
  volume, 
  price, 
  originalPrice, 
  coins, 
  imageUrl,
  hoverImageUrl,
  isNew, 
  isOnSale,
  canUnlockWithCoins = true,
  label,
  cardIndex = 0
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Use red diamond for all books
  const SymbolIcon = Diamond;
  const symbolColor = 'text-red-500';

  return (
    <div 
      className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:from-gray-750 hover:to-gray-850 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 border border-gray-700/50 hover:border-red-500/30 min-h-[520px] flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden flex-shrink-0">
        <img 
          src={isHovered && hoverImageUrl ? hoverImageUrl : imageUrl} 
          alt={title}
          className="w-full h-80 object-cover group-hover:scale-110 transition-all duration-700"
        />
        
        {/* Enhanced badges with longer labels */}
        <div className="absolute top-3 left-3 space-y-2">
          {isNew && (
            <span className="bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
              NEW
            </span>
          )}
          {isOnSale && (
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
              SALE
            </span>
          )}
        </div>

        {/* Enhanced label in top right */}
        {label && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg max-w-[120px] text-center">
            {label}
          </div>
        )}

        {/* Heart button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute bottom-3 right-3 text-white hover:bg-black/60 hover:text-red-400 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
        >
          <Heart className="w-4 h-4 transition-transform duration-300 group-hover:animate-pulse" />
        </Button>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-5 space-y-3 flex-1 flex flex-col">
        <div className="flex-1 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-semibold text-lg truncate group-hover:text-red-300 transition-colors duration-300 flex-1 mr-2">{title}</h3>
            <SymbolIcon className={`w-5 h-5 ${symbolColor} transition-colors duration-300 flex-shrink-0`} />
          </div>
          <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{author}</p>
          <p className="text-gray-500 text-xs uppercase tracking-wide">{volume}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-white font-bold text-lg group-hover:text-red-300 transition-colors duration-300">{price}</span>
              {originalPrice && (
                <span className="text-gray-500 line-through text-sm">{originalPrice}</span>
              )}
            </div>
            {canUnlockWithCoins && (
              <span className="text-gray-400 text-xs">{coins}</span>
            )}
          </div>
        </div>
        
        <div className="flex space-x-2 pt-2 mt-auto">
          <Button 
            size="sm" 
            className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xs font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
          >
            <ShoppingCart className="w-3 h-3 mr-1" />
            Add to Cart
          </Button>
          {canUnlockWithCoins && (
            <Button 
              size="sm" 
              variant="outline" 
              className="border-gray-600 text-black hover:bg-gray-700 hover:text-black text-xs transform hover:scale-105 transition-all duration-300 group/unlock"
            >
              <Unlock className="w-3 h-3 mr-1 text-black group-hover/unlock:animate-bounce" />
              Unlock
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
