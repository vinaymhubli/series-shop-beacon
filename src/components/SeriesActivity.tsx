
import { Heart, Clock, ShoppingCart } from 'lucide-react';

const SeriesActivity = () => {
  const recentActivity = [
    { 
      action: "Purchased", 
      item: "Jujutsu Kaisen Vol. 15", 
      date: "June 15, 2024",
      icon: ShoppingCart,
      color: "text-green-400"
    },
    { 
      action: "Reviewed", 
      item: "Chainsaw Man Vol. 11", 
      date: "June 2, 2024",
      icon: Heart,
      color: "text-red-400"
    },
    { 
      action: "Added", 
      item: "One Piece Box Set to Wishlist", 
      date: "May 28, 2024",
      icon: Heart,
      color: "text-purple-400"
    },
    { 
      action: "Received", 
      item: "Level 25", 
      date: "May 20, 2024",
      icon: Clock,
      color: "text-yellow-400"
    }
  ];

  const wishlist = [
    { title: "One Piece Box Set", price: "$299.99", image: "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=80&h=120&fit=crop" },
    { title: "Naruto Complete Collection", price: "$199.99", image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=80&h=120&fit=crop" },
    { title: "Attack on Titan Final Edition", price: "$49.99", image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=80&h=120&fit=crop" }
  ];

  const recentOrders = [
    { order: "#ORD-7824", date: "June 15, 2024", items: "3 items • $119.97", status: "Delivered" },
    { order: "#ORD-7845", date: "May 29, 2024", items: "1 item • $19.99", status: "Delivered" }
  ];

  return (
    <section className="bg-gray-850 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Recent Activity */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Recent Activity</h3>
            <div className="space-y-6">
              {recentActivity.map((activity, index) => {
                const IconComponent = activity.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors">
                    <div className={`p-2 rounded-full bg-gray-700 ${activity.color}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">
                        <span className={activity.color}>{activity.action}</span> {activity.item}
                      </p>
                      <p className="text-gray-400 text-sm mt-1">{activity.date}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-8 text-center">
              <button className="text-red-400 hover:text-red-300 font-medium">
                View All Activity
              </button>
            </div>
          </div>
          
          {/* Wishlist & Recent Orders */}
          <div className="space-y-12">
            {/* Wishlist */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Wishlist</h3>
              <div className="space-y-4">
                {wishlist.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-12 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="text-white font-medium">{item.title}</h4>
                      <p className="text-red-400 font-semibold">{item.price}</p>
                    </div>
                    <Heart className="w-5 h-5 text-red-400 fill-current" />
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <button className="text-red-400 hover:text-red-300 font-medium">
                  View All Wishlist Items
                </button>
              </div>
            </div>
            
            {/* Recent Orders */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Recent Orders</h3>
              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <div key={index} className="p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">{order.order}</span>
                      <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">
                        {order.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{order.date}</p>
                    <p className="text-gray-300 text-sm">{order.items}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <button className="text-red-400 hover:text-red-300 font-medium">
                  View All Orders
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeriesActivity;
