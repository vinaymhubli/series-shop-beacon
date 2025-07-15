
import { Button } from '@/components/ui/button';
import { Heart, Star } from 'lucide-react';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      console.log('Video element found, attempting to play...');
      
      video.addEventListener('loadeddata', () => {
        console.log('Video data loaded');
      });
      
      video.addEventListener('canplay', () => {
        console.log('Video can play');
        video.play().catch(err => {
          console.error('Video play failed:', err);
        });
      });
      
      video.addEventListener('error', (e) => {
        console.error('Video error:', e);
      });

      // Force play attempt after a short delay
      setTimeout(() => {
        if (video.readyState >= 3) {
          video.play().catch(err => {
            console.error('Delayed video play failed:', err);
          });
        }
      }, 1000);
    }
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-red-900/20 to-gray-900 py-20 overflow-hidden">
      {/* Large Cartoon/Comic Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transform scale-110"
        style={{
          backgroundImage: `url('/lovable-uploads/a0c88e05-5aba-4550-8ee0-7644ad456776.png')`
        }}
      />
      
      {/* Video Background (hidden initially, shows if it loads successfully) */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => {
          if (videoRef.current) {
            videoRef.current.style.opacity = '1';
          }
        }}
      >
        <source src="https://videos.pexels.com/video-files/4622735/4622735-hd_1920_1080_30fps.mp4" type="video/mp4" />
        <source src="https://videos.pexels.com/video-files/3945008/3945008-hd_1920_1080_30fps.mp4" type="video/mp4" />
        <source src="https://videos.pexels.com/video-files/6344139/6344139-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>
      
      {/* Lighter overlay for better image visibility */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-bold text-white mb-4">
            Crossed Hearts: Exclusive Edition
          </h2>
          <p className="text-lg text-gray-300 mb-2">by Miyuki Tanaka</p>
          <p className="text-gray-400 mb-8 max-w-lg">
            The epic saga continues with this store-exclusive edition featuring bonus chapters and artwork!
          </p>
          
          <div className="flex items-center mb-8">
            <span className="text-3xl font-bold text-white mr-4">$24.99</span>
            <span className="text-gray-400">or 2499 coins</span>
          </div>

          <div className="flex items-center space-x-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
              <Heart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
              <Star className="w-4 h-4 mr-2" />
              Wishlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
