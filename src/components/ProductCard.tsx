
import { Button } from '@/components/ui/button';
import { Heart, Unlock, Star } from 'lucide-react';

interface ProductCardProps {
  title: string;
  author: string;
  volume: string;
  price: string;
  originalPrice?: string;
  coins: string;
  imageUrl: string;
  isNew?: boolean;
  isOnSale?: boolean;
  rating?: number;
}

const ProductCard = ({ 
  title, 
  author, 
  volume, 
  price, 
  originalPrice, 
  coins, 
  imageUrl, 
  isNew, 
  isOnSale,
  rating 
}: ProductCardProps) => {
  return (
    <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:from-gray-750 hover:to-gray-850 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 border border-gray-700/50 hover:border-red-500/30">
      <div className="relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Enhanced badges */}
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

        {/* Enhanced heart button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-3 right-3 text-white hover:bg-black/60 hover:text-red-400 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
        >
          <Heart className="w-4 h-4 transition-transform duration-300 group-hover:animate-pulse" />
        </Button>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-5 space-y-3">
        <h3 className="text-white font-semibold text-lg truncate group-hover:text-red-300 transition-colors duration-300">{title}</h3>
        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{author}</p>
        <p className="text-gray-500 text-xs uppercase tracking-wide">{volume}</p>
        
        {rating && (
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 transition-all duration-300 ${
                  i < rating 
                    ? 'text-yellow-400 fill-current group-hover:scale-125' 
                    : 'text-gray-600'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              />
            ))}
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-white font-bold text-lg group-hover:text-red-300 transition-colors duration-300">{price}</span>
            {originalPrice && (
              <span className="text-gray-500 line-through text-sm">{originalPrice}</span>
            )}
          </div>
          <span className="text-gray-400 text-xs">{coins}</span>
        </div>
        
        <div className="flex space-x-2 pt-2">
          <Button 
            size="sm" 
            className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xs font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
          >
            Add to Cart
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="border-gray-600 text-black hover:bg-gray-700 hover:text-black text-xs transform hover:scale-105 transition-all duration-300 group/unlock"
          >
            <Unlock className="w-3 h-3 mr-1 text-black group-hover/unlock:animate-bounce" />
            Unlock
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
