
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Newsletter = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.3);

  return (
    <section 
      ref={elementRef}
      className={`bg-gray-900 py-16 border-t border-gray-800 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className={`text-3xl font-bold text-white mb-4 transition-all duration-700 delay-200 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <span className="text-red-500">Subscribe</span> to Our Newsletter
        </h2>
        <p className={`text-gray-400 mb-8 max-w-md mx-auto transition-all duration-700 delay-400 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Crossed Hearts Collector's Circle provides you with latest updates on your favourite titles
        </p>
        
        <div className={`max-w-md mx-auto flex space-x-4 transition-all duration-700 delay-600 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <Input 
            placeholder="Your email address"
            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 flex-1 transition-all duration-200 focus:scale-105"
          />
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 transition-all duration-200 transform hover:scale-105">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
