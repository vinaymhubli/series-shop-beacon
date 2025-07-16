import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Heart, Star, ShoppingCart, Plus, Minus, ArrowLeft, Truck, Shield, RotateCcw } from 'lucide-react';

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
    title: "One Piece Vol. 98",
    author: "Eiichiro Oda",
    category: "Manga",
    price: 11.99,
    originalPrice: 14.99,
    coins: "1199 coins",
    images: [
      "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png"
    ],
    isNew: true,
    isOnSale: true,
    rating: 5,
    inStock: false,
    releaseDate: "March 15, 2024",
    description: "The Straw Hat Pirates face their greatest challenge yet as they enter the final stages of their adventure. Will Luffy achieve his dream of becoming the Pirate King?",
    features: [
      "192 pages of full-color manga",
      "Premium paper quality",
      "Exclusive cover art",
      "Digital bonus content included"
    ],
    estimatedShipping: "2-3 weeks after release"
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="text-gray-300 hover:text-white mb-6 p-0"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Shop
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl bg-gray-800">
              <img
                src={product.images[selectedImage]}
                alt={product.title}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 space-y-2">
                {product.isNew && (
                  <span className="bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    NEW
                  </span>
                )}
                {product.isOnSale && (
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    SALE
                  </span>
                )}
                {!product.inStock && (
                  <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    PRE-ORDER
                  </span>
                )}
              </div>

              {/* Wishlist Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-black/60 hover:text-red-400 backdrop-blur-sm"
              >
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-1 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index
                      ? 'border-red-500 opacity-100'
                      : 'border-gray-700 opacity-60 hover:opacity-80'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-red-400 text-sm font-semibold uppercase tracking-wide">{product.category}</span>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${
                        i < product.rating 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                  <span className="text-gray-400 text-sm ml-2">(4.9)</span>
                </div>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">{product.title}</h1>
              <p className="text-gray-300 text-lg">by {product.author}</p>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-white">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
              )}
              <span className="text-sm text-gray-400">{product.coins}</span>
            </div>

            {/* Release Date */}
            <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-purple-300 font-semibold">Expected Release: {product.releaseDate}</span>
              </div>
              <p className="text-gray-300 text-sm mt-1">Estimated shipping: {product.estimatedShipping}</p>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-white font-semibold mb-2">Description</h3>
              <p className="text-gray-300 leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-white font-semibold mb-3">What's Included</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-white font-semibold">Quantity:</span>
                <div className="flex items-center border border-gray-600 rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="text-gray-300 hover:text-white disabled:opacity-50"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <Input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                    className="w-16 text-center bg-transparent border-0 text-white focus:ring-0"
                    min="1"
                    max="10"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= 10}
                    className="text-gray-300 hover:text-white disabled:opacity-50"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-gray-300">Total:</span>
                <span className="text-2xl font-bold text-white">${(product.price * quantity).toFixed(2)}</span>
              </div>

              <Button
                onClick={handlePreOrder}
                size="lg"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-4 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Check Out - ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-700">
              <div className="flex items-center space-x-2 text-gray-300">
                <Truck className="w-4 h-4 text-green-400" />
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Secure Payment</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <RotateCcw className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">Easy Returns</span>
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
