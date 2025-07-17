
import { Button } from '@/components/ui/button';
import { Sparkles, ShoppingCart } from 'lucide-react';

const ProfileRecommended = () => {
  const recommendedItems = [
    {
      title: 'Tokyo Ghoul Vol. 14',
      author: 'Sui Ishida',
      price: '$12.99',
      imageUrl: '/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png',
      reason: 'Based on your reading history'
    },
    {
      title: 'Chainsaw Man Vol. 11',
      author: 'Tatsuki Fujimoto',
      price: '$11.99',
      imageUrl: '/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png',
      reason: 'Popular among collectors'
    }
  ];

  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-400" />
          Recommended Reads
        </h3>
      </div>
      
      <div className="space-y-4">
        {recommendedItems.map((item, index) => (
          <div key={index} className="p-3 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
            <div className="flex gap-3">
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-12 h-16 object-cover rounded-md"
              />
              <div className="flex-1">
                <h4 className="text-white font-medium text-sm">{item.title}</h4>
                <p className="text-gray-400 text-xs">{item.author}</p>
                <p className="text-red-400 font-semibold text-sm mt-1">{item.price}</p>
                <p className="text-gray-500 text-xs mt-1">{item.reason}</p>
              </div>
            </div>
            <Button size="sm" className="w-full mt-3 bg-red-600 hover:bg-red-700 text-white">
              <ShoppingCart className="w-3 h-3 mr-2" />
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileRecommended;
