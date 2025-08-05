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
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${product.heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 h-full flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="text-white hover:text-gray-300 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Shop
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Book Cover */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 p-6 rounded-lg">
              <img
                src={product.coverImage}
                alt={product.title}
                className="w-full max-w-64 mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Genre Tags */}
            <div className="flex flex-wrap gap-2">
              {product.genres.map((genre, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded uppercase tracking-wide"
                >
                  {genre}
                </span>
              ))}
            </div>

            {/* Series Title (Clickable) */}
            <div>
              <button
                onClick={handleSeriesClick}
                className="text-3xl lg:text-4xl font-bold text-white hover:text-red-400 transition-colors duration-200 text-left"
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
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-600'
                    }`}
                  />
                ))}
                <span className="text-gray-400 ml-2">★★★★★</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <Button
                onClick={handlePreOrder}
                className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3"
              >
                ADD TO CART
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-700 px-8 py-3"
              >
                WISH TO BUY
              </Button>
            </div>

            {/* Preview Section */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-white font-semibold mb-4 text-lg">PREVIEW THE KIT</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-red-400 font-semibold mb-2">Chapter 1 Preview</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
                <div className="bg-gray-700 p-4 rounded">
                  <img
                    src={product.coverImage}
                    alt="Chapter 1 Preview"
                    className="w-full h-32 object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Characters Section */}
        <div className="mb-12">
          <h2 className="text-white text-2xl font-bold mb-6 uppercase tracking-wide">Characters</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {product.characters.map((character) => (
              <div key={character.id} className="text-center">
                <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden bg-gray-800">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-white font-semibold text-sm uppercase tracking-wide">
                  {character.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-red-400 font-bold text-lg mb-4 uppercase">Creator</h3>
            <p className="text-white text-lg font-semibold">{product.creator}</p>
            {product.artist && (
              <p className="text-gray-400">Artist: {product.artist}</p>
            )}
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-400 block">RELEASE</span>
                <span className="text-white font-semibold">{product.releaseDate2}</span>
              </div>
              <div>
                <span className="text-gray-400 block">CATEGORY</span>
                <span className="text-white font-semibold">{product.category2}</span>
              </div>
              <div>
                <span className="text-gray-400 block">AGE RATING</span>
                <span className="text-white font-semibold">{product.ageRating}</span>
              </div>
              <div>
                <span className="text-gray-400 block">GENRE</span>
                <span className="text-white font-semibold">{product.genre2}</span>
              </div>
            </div>
            <div>
              <span className="text-gray-400 block text-sm">LENGTH</span>
              <span className="text-white font-semibold">{product.length}</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PreOrder;
