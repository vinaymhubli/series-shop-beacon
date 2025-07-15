
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
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors duration-200 group">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-200"
        />
        {isNew && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
            NEW
          </span>
        )}
        {isOnSale && (
          <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
            SALE
          </span>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 text-white hover:bg-black/50"
        >
          <Heart className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="p-4">
        <h3 className="text-white font-semibold mb-1 truncate">{title}</h3>
        <p className="text-gray-400 text-sm mb-1">{author}</p>
        <p className="text-gray-500 text-xs mb-3">{volume}</p>
        
        {rating && (
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
              />
            ))}
          </div>
        )}
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-white font-bold">{price}</span>
            {originalPrice && (
              <span className="text-gray-500 line-through text-sm">{originalPrice}</span>
            )}
          </div>
          <span className="text-gray-400 text-xs">{coins}</span>
        </div>
        
        <div className="flex space-x-2">
          <Button 
            size="sm" 
            className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs"
          >
            Add to Cart
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="border-gray-600 text-black hover:bg-gray-700 hover:text-white text-xs"
          >
            <Unlock className="w-3 h-3 mr-1 text-black" />
            Unlock
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
