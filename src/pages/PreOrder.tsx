import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Diamond, Star, ShoppingCart, Plus, Minus, ArrowLeft, Truck, Shield, RotateCcw } from 'lucide-react';

const PreOrder = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    console.log('🎯 PreOrder page loaded');
    console.log('📦 Product ID from URL:', productId);
    console.log('📍 Current URL:', window.location.href);
  }, [productId]);

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handlePreOrder = () => {
    console.log('🛒 Check Out button clicked');
    console.log('📦 Product:', product);
    console.log('📊 Quantity:', quantity);
    console.log('💰 Total Price:', product.price * quantity);
    console.log('🚀 Navigating to checkout...');
    
    navigate(`/checkout/${productId}`, { 
      state: { 
        product,
        quantity,
        totalPrice: product.price * quantity
      }
    });
  };

  const product = {
    id: parseInt(productId || '1'),
    title: "SKIP AND LOAFER",
    subtitle: "VOL.1",
    author: "Misaki Takamatsu",
    category: "Manga",
    genres: ["HIGH SCHOOL", "ROMANCE", "DRAMA", "HIGH SCHOOL", "FANTASY", "ACTION TALES"],
    price: 11.99,
    originalPrice: 14.99,
    coins: "1199 coins",
    rating: 4.5,
    heroImage: "/lovable-uploads/4e6b2521-dc40-43e9-aed0-53fef670570b.png",
    coverImage: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
    images: [
      "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png"
    ],
    isNew: true,
    isOnSale: true,
    inStock: false,
    releaseDate: "March 15, 2024",
    description: "Overall, Oshi no Ko is best described as a subversive, dramatic take on the idol industry in Japan, though it has some romantic plotlines as well. Protagonist Aqua Hoshino is more interested in pursuing his quest for vengeance in an exploitative industry, but he finds himself in the spotlight without even meaning to. Two girls around Aqua's age, Kana Arima and Akane Kurokawa, both mean a lot to Aqua, and they have a strong interest in him.",
    creator: "MISAKI TAKAMATSU",
    artist: "",
    releaseDate2: "FEBRUARY 11, 2025",
    category2: "MANGA",
    ageRating: "TEEN",
    genre2: "16+",
    length: "200 PAGES",
    characters: [
      {
        id: 1,
        name: "MITSUMI IWAKURA",
        image: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png"
      },
      {
        id: 2,
        name: "SOUSUKE SHIMA",
        image: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png"
      },
      {
        id: 3,
        name: "MIKA EGASHIRA",
        image: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png"
      },
      {
        id: 4,
        name: "MAKOTO KURUME",
        image: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png"
      }
    ],
    features: [
      "200 pages of full-color manga",
      "Premium paper quality",
      "Exclusive cover art",
      "Digital bonus content included"
    ],
    estimatedShipping: "2-3 weeks after release"
  };

  const handleSeriesClick = () => {
    console.log('🔗 Series title clicked - navigating to series page');
    navigate(`/series/${productId}`);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Large Hero Background Image */}
      <div 
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(/lovable-uploads/abed4463-239d-408d-ad63-f574b272f199.png)` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Main Content Container */}
      <div className="bg-black relative">
        <div className="container mx-auto px-4">
          {/* Product Section */}
          <div className="flex flex-col lg:flex-row gap-0 mb-8">
            {/* Left Side - Book Cover (Overlapping Hero) */}
            <div className="flex justify-start lg:justify-start relative -mt-24 z-10 w-80">
              <div className="w-80">
                <img
                  src={product.coverImage}
                  alt={product.title}
                  className="w-full rounded-lg shadow-2xl animate-fade-in"
                />
              </div>
            </div>

            {/* Right Side - Product Details */}
            <div className="space-y-4 min-h-96 py-8 w-full flex-1 pl-8 pr-24">
              {/* Genre Tags */}
              <div className="flex flex-wrap gap-2">
                {product.genres.slice(0, 4).map((genre, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded uppercase tracking-wide"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              {/* Series Title (Clickable) */}
              <div>
                <button
                  onClick={handleSeriesClick}
                  className="text-2xl lg:text-3xl font-bold text-white hover:text-red-400 transition-colors duration-200 text-left block"
                >
                  {product.title}, {product.subtitle}
                </button>
                <p className="text-gray-400 text-sm mt-1">ORIGINAL TITLE: SUKIPPU TU RŌFĀ</p>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <span className="text-white font-semibold">Rating</span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) 
                          ? 'text-red-500 fill-current' 
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                  <span className="text-white ml-2 font-bold">★★★★★</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4">
                <Button
                  onClick={handlePreOrder}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-bold uppercase"
                >
                  ADD TO CART
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-500 text-gray-300 hover:bg-gray-700 px-8 py-3 font-bold uppercase"
                >
                  WISH TO BUY
                </Button>
              </div>

            </div>
          </div>

          {/* Characters Section */}
          <div className="mb-12">
            <h2 className="text-white text-xl font-bold mb-6 uppercase tracking-wide bg-gray-900 p-3 rounded">Characters</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {product.characters.map((character) => (
              <div key={character.id} className="text-center bg-gray-900 p-4 rounded-lg">
                <div className="w-full h-32 mb-3 overflow-hidden bg-gray-800 rounded">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-cover"
                  />
                  </div>
                  <p className="text-white font-semibold text-xs uppercase tracking-wide">
                    {character.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Details Grid */}
          <div className="flex flex-col md:flex-row gap-6 bg-gray-900 p-6 rounded-lg">
            {/* Left Container - Book Description (70% width) */}
            <div className="md:w-[70%] border border-gray-700 p-4 rounded-lg">
              <h3 className="text-red-400 font-bold text-lg mb-4 uppercase">About the Series</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>
            
            {/* Right Container - Details (30% width) */}
            <div className="md:w-[30%] space-y-4 border border-gray-700 p-4 rounded-lg">
              <div>
                <h4 className="text-red-400 font-bold text-sm mb-2 uppercase">Creator</h4>
                <p className="text-white font-bold">{product.creator}</p>
                {product.artist && (
                  <p className="text-gray-400 text-sm">Artist: {product.artist}</p>
                )}
              </div>
              
              <div>
                <h4 className="text-red-400 font-bold text-sm mb-2 uppercase">Release</h4>
                <p className="text-white font-bold">{product.releaseDate2}</p>
              </div>
              
              <div>
                <h4 className="text-red-400 font-bold text-sm mb-2 uppercase">Category</h4>
                <p className="text-white font-bold">{product.category2}</p>
              </div>
              
              <div>
                <h4 className="text-red-400 font-bold text-sm mb-2 uppercase">Age Rating</h4>
                <p className="text-white font-bold">{product.ageRating}</p>
              </div>
              
              <div>
                <h4 className="text-red-400 font-bold text-sm mb-2 uppercase">Genre</h4>
                <p className="text-white font-bold">{product.genre2}</p>
              </div>
              
              <div>
                <h4 className="text-red-400 font-bold text-sm mb-2 uppercase">Length</h4>
                <p className="text-white font-bold">{product.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PreOrder;
