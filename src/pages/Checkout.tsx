
import { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { ArrowLeft, CreditCard, Lock, ShoppingCart, MapPin, User, Mail, Phone } from 'lucide-react';

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
}

const Checkout = () => {
  const { productId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const { product, quantity, totalPrice } = location.state || {};
  
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
      cardName: ''
    }
  });

  const subtotal = totalPrice || 0;
  const shipping = 0; // Free shipping
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

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
          {/* Checkout Form */}
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
                          Complete Pre-Order - ${total.toFixed(2)}
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
                {/* Product */}
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
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-4 space-y-2">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Shipping</span>
                    <span className="text-green-400">Free</span>
                  </div>
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
