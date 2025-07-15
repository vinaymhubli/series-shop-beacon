
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const products = [
    {
      title: "One Piece Vol. 98",
      author: "Eiichiro Oda",
      volume: "Adventure",
      price: "$11.99",
      coins: "1199 coins",
      imageUrl: "/lovable-uploads/907e2c66-ea0e-425d-8b48-a80ffcbd2267.png",
      isNew: true,
      rating: 5
    },
    {
      title: "Attack on Titan Vol. 34",
      author: "Hajime Isayama",
      volume: "Action",
      price: "$12.99",
      coins: "1299 coins",
      imageUrl: "/lovable-uploads/907e2c66-ea0e-425d-8b48-a80ffcbd2267.png",
      isNew: true,
      rating: 5
    },
    {
      title: "Jujutsu Kaisen Vol. 15",
      author: "Gege Akutami",
      volume: "Horror",
      price: "$9.99",
      originalPrice: "$14.99",
      coins: "999 coins",
      imageUrl: "/lovable-uploads/907e2c66-ea0e-425d-8b48-a80ffcbd2267.png",
      isOnSale: true,
      rating: 4
    },
    {
      title: "Chainsaw Man Vol. 8",
      author: "Tatsuki Fujimoto",
      volume: "Action",
      price: "$10.99",
      coins: "1099 coins",
      imageUrl: "/lovable-uploads/907e2c66-ea0e-425d-8b48-a80ffcbd2267.png",
      rating: 5
    },
    {
      title: "Spy x Family Vol. 7",
      author: "Tatsuya Endo",
      volume: "Comedy",
      price: "$9.99",
      coins: "999 coins",
      imageUrl: "/lovable-uploads/907e2c66-ea0e-425d-8b48-a80ffcbd2267.png",
      rating: 4
    },
    {
      title: "Tokyo Ghoul Vol. 14",
      author: "Sui Ishida",
      volume: "Horror",
      price: "$12.99",
      coins: "1299 coins",
      imageUrl: "/lovable-uploads/907e2c66-ea0e-425d-8b48-a80ffcbd2267.png",
      rating: 4
    }
  ];

  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        {/* Section Navigation */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex space-x-8">
            <button className="text-red-500 font-semibold border-b-2 border-red-500 pb-2">
              New Releases
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              Best Sellers
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              Leaving Soon
            </button>
          </div>
          <button className="text-red-500 hover:text-red-400 text-sm">
            View All →
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
