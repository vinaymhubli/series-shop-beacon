import { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { ArrowLeft, CreditCard, Lock, ShoppingCart, MapPin, Mail, Plus, Clock } from 'lucide-react';

interface CheckoutFormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardName: string;
  couponCode: string;
}

interface RecommendedItem {
  id: number;
  title: string;
  author: string;
  price: number;
  imageUrl: string;
  type: 'ebook' | 'physical' | 'coins';
}

const Checkout = () => {
  const { productId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const { product, quantity, totalPrice } = location.state || {};
  
  // Mock recommended items
  const recommendedItems: RecommendedItem[] = [
    {
      id: 2,
      title: "One Piece Vol. 99",
      author: "Eiichiro Oda",
      price: 11.99,
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      type: 'ebook'
    },
    {
      id: 3,
      title: "Naruto Vol. 72",
      author: "Masashi Kishimoto",
      price: 10.99,
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      type: 'physical'
    },
    {
      id: 4,
      title: "Premium Coins Pack",
      author: "Digital Currency",
      price: 19.99,
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      type: 'coins'
    }
  ];

  const form = useForm<CheckoutFormData>({
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'United States',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardName: '',
      couponCode: ''
    }
  });

  // Detect product type and calculate shipping
  const productType = product?.type || 'physical'; // ebook, physical, coins
  const subtotal = totalPrice || 0;
  const shipping = productType === 'physical' ? 5.99 : 0; // Only charge shipping for physical items
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const addRecommendedItem = (item: RecommendedItem) => {
    console.log('Adding recommended item to cart:', item);
    // In a real implementation, this would add the item to cart state
  };

  const onSubmit = async (data: CheckoutFormData) => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    navigate('/payment-success', {
      state: {
        orderData: {
          ...data,
          product,
          quantity,
          subtotal,
          tax,
          total,
          orderNumber: 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase()
        }
      }
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Product not found</h2>
          <Button onClick={() => navigate('/shop-all')}>Return to Shop</Button>
        </div>
      </div>
    );
  }

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
          Back to Product
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recommended Items Section - Left */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Plus className="w-5 h-5 mr-2 text-red-500" />
                  Recommended for You
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendedItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title}
                        className="w-12 h-16 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white text-sm font-medium truncate">{item.title}</h4>
                        <p className="text-gray-400 text-xs truncate">{item.author}</p>
                        <p className="text-red-400 text-sm font-semibold">${item.price}</p>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => addRecommendedItem(item)}
                        className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white text-xs px-2"
                      >
                        Add
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Checkout Form - Right */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2 text-red-500" />
                  Checkout
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Contact Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-red-500" />
                        Contact Information
                      </h3>
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300">Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                type="email"
                                className="bg-gray-700 border-gray-600 text-white focus:border-red-500"
                                placeholder="your.email@example.com"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Shipping Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-red-500" />
                        Shipping Address
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-300">First Name</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="bg-gray-700 border-gray-600 text-white focus:border-red-500"
                                  placeholder="John"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-300">Last Name</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="bg-gray-700 border-gray-600 text-white focus:border-red-500"
                                  placeholder="Doe"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300">Address</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="bg-gray-700 border-gray-600 text-white focus:border-red-500"
                                placeholder="123 Main Street"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-300">City</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="bg-gray-700 border-gray-600 text-white focus:border-red-500"
                                  placeholder="New York"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-300">State</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="bg-gray-700 border-gray-600 text-white focus:border-red-500"
                                  placeholder="NY"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="zipCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-300">ZIP Code</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="bg-gray-700 border-gray-600 text-white focus:border-red-500"
                                  placeholder="10001"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Coupon Code */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Coupon Code</h3>
                      <FormField
                        control={form.control}
                        name="couponCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="bg-gray-700 border-gray-600 text-white focus:border-red-500"
                                placeholder="Enter coupon code"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      {/* Leaving Soon Section */}
                      <div className="mt-4 p-4 bg-orange-900/30 border border-orange-500/30 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Clock className="w-4 h-4 text-orange-400" />
                          <span className="text-orange-300 font-semibold">Leaving Soon</span>
                        </div>
                        <div className="space-y-1 text-sm text-gray-300">
                          <p>• One Piece Complete Collection - 15% off (expires in 2 days)</p>
                          <p>• Premium Membership - 20% off (expires in 5 days)</p>
                          <p>• Digital Manga Bundle - 25% off (expires in 1 day)</p>
                        </div>
                      </div>
                    </div>

                    {/* Payment Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <CreditCard className="w-4 h-4 mr-2 text-red-500" />
                        Payment Information
                      </h3>
                      
                      <FormField
                        control={form.control}
                        name="cardName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300">Cardholder Name</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="bg-gray-700 border-gray-600 text-white focus:border-red-500"
                                placeholder="John Doe"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="cardNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300">Card Number</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="bg-gray-700 border-gray-600 text-white focus:border-red-500"
                                placeholder="1234 5678 9012 3456"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="expiryDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-300">Expiry Date</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="bg-gray-700 border-gray-600 text-white focus:border-red-500"
                                  placeholder="MM/YY"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="cvv"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-300">CVV</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="bg-gray-700 border-gray-600 text-white focus:border-red-500"
                                  placeholder="123"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                      <h4 className="text-red-300 font-semibold mb-2">Important Notice</h4>
                      <p className="text-gray-300 text-sm">
                        <strong>All sales are final.</strong> We do not accept returns or provide refunds. 
                        By proceeding with this purchase, you acknowledge and agree to this policy.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-4 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/25 disabled:opacity-50 disabled:hover:scale-100"
                    >
                      {isProcessing ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Processing Payment...
                        </div>
                      ) : (
                        <>
                          <Lock className="w-4 h-4 mr-2" />
                          Complete Checkout - ${total.toFixed(2)}
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="bg-gray-800 border-gray-700 sticky top-4">
              <CardHeader>
                <CardTitle className="text-white">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Current Product */}
                <div className="flex space-x-4">
                  <img
                    src={product.images?.[0] || product.imageUrl}
                    alt={product.title}
                    className="w-16 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-sm">{product.title}</h4>
                    <p className="text-gray-400 text-xs">by {product.author}</p>
                    <p className="text-gray-400 text-xs">Qty: {quantity}</p>
                    <p className="text-white font-semibold">${product.price}</p>
                    {productType === 'ebook' && (
                      <span className="text-blue-400 text-xs">E-book - No Download</span>
                    )}
                    {productType === 'coins' && (
                      <span className="text-yellow-400 text-xs">Digital Currency</span>
                    )}
                  </div>
                </div>

                {/* Recommended Items */}
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="text-white font-semibold mb-3">Recommended for You</h4>
                  <div className="space-y-3">
                    {recommendedItems.map((item) => (
                      <div key={item.id} className="flex items-center space-x-3 p-2 bg-gray-700/50 rounded-lg">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-12 h-14 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h5 className="text-white text-xs font-medium">{item.title}</h5>
                          <p className="text-gray-400 text-xs">{item.author}</p>
                          <p className="text-white text-sm font-semibold">${item.price}</p>
                        </div>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => addRecommendedItem(item)}
                          className="text-red-400 hover:text-red-300 hover:bg-red-500/20"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="border-t border-gray-700 pt-4 space-y-2">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? "text-green-400" : ""}>
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  {productType === 'ebook' && (
                    <p className="text-blue-400 text-xs">E-books are added directly to your library</p>
                  )}
                  {productType === 'coins' && (
                    <p className="text-yellow-400 text-xs">Digital coins - No shipping required</p>
                  )}
                  <div className="flex justify-between text-gray-300">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-700 pt-2">
                    <div className="flex justify-between text-white font-bold text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Security Badges */}
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex items-center space-x-2 text-gray-400 text-xs">
                    <Lock className="w-3 h-3" />
                    <span>Secure 256-bit SSL encryption</span>
                  </div>
                  <div className="mt-2 text-gray-400 text-xs">
                    <p>Payment gateway supports worldwide transactions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
