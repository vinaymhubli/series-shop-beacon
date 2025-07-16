
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent } from '@/components/ui/card';

const AboutContent = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);

  return (
    <section 
      ref={elementRef}
      className={`py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            {/* Section Header */}
            <div className="mb-12">
              <div className="inline-block px-6 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wide">Our Mission</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Bridging{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  Cultures
                </span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-red-500 to-red-700 rounded-full"></div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  At Crossed Hearts, we believe that great stories transcend borders and languages. Our mission is to bring the most compelling manga and webtoon stories from Japan and Korea to English-speaking audiences around the world.
                </p>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-red-700 to-red-900 rounded-full"></div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We work closely with talented creators to ensure that every translation captures not just the words, but the emotion, humor, and cultural nuances that make these stories truly special.
                </p>
              </div>
            </div>

            {/* Enhanced Stats Cards */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-red-500/50 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="text-red-500 text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                  <p className="text-gray-300 font-medium">Titles Published</p>
                  <div className="w-8 h-1 bg-red-500/30 mx-auto mt-2 rounded-full"></div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-red-500/50 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="text-red-500 text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                  <p className="text-gray-300 font-medium">Partner Creators</p>
                  <div className="w-8 h-1 bg-red-500/30 mx-auto mt-2 rounded-full"></div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            {/* Enhanced Image Container */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-red-700/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-2xl">
                <img 
                  src="/lovable-uploads/a0c88e05-5aba-4550-8ee0-7644ad456776.png"
                  alt="About Crossed Hearts"
                  className="rounded-xl shadow-2xl w-full transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-2 rounded-xl border border-red-500/20 pointer-events-none"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-red-500/20 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-red-500/30 rounded-full blur-sm animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
