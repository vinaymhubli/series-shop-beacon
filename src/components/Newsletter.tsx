
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  return (
    <section className="bg-gray-900 py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          <span className="text-red-500">Subscribe</span> to Our Newsletter
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Crossed Hearts Collector's Circle provides you with latest updates on your favourite titles
        </p>
        
        <div className="max-w-md mx-auto flex space-x-4">
          <Input 
            placeholder="Your email address"
            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 flex-1"
          />
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
