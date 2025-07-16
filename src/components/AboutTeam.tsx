
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent } from '@/components/ui/card';

const AboutTeam = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);

  const values = [
    {
      title: "Quality First",
      description: "We never compromise on the quality of our translations and localizations. Every panel, every dialogue bubble receives meticulous attention.",
      icon: "⭐",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Cultural Respect",
      description: "We honor the original creators' vision while making stories accessible to new audiences, preserving cultural nuances.",
      icon: "🌍",
      gradient: "from-blue-500 to-green-500"
    },
    {
      title: "Reader Focus",
      description: "Everything we do is guided by what will create the best possible reading experience for our global community.",
      icon: "📚",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Innovation",
      description: "We continuously explore new technologies and methods to improve our publishing process and reader experience.",
      icon: "🚀",
      gradient: "from-red-500 to-red-600"
    }
  ];

  return (
    <section 
      ref={elementRef}
      className={`py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,0.1)_50%,transparent_65%)] bg-[length:20px_20px] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
            <span className="text-red-400 font-semibold text-sm uppercase tracking-wide">Our Foundation</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              Values
            </span>
          </h2>
        </div>

        {/* Enhanced Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {values.map((value, index) => (
            <Card 
              key={index}
              className={`group bg-gradient-to-br from-gray-800 via-gray-900 to-black border-gray-700 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-2 bg-gradient-to-r ${value.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <CardContent className="p-8 relative">
                <div className="flex items-start space-x-4">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-red-500 text-2xl font-bold mb-4 group-hover:text-red-400 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </div>
                
                {/* Decorative Element */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Enhanced CTA Section */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 to-red-700/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl p-12 border border-red-500/20">
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  Journey
                </span>
              </h3>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                Whether you're a reader, creator, or industry professional, we'd love to hear from you. 
                Let's continue building bridges between cultures through the power of storytelling.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group px-10 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
                  <span className="flex items-center justify-center space-x-2">
                    <span>Contact Us</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </button>
                <button className="group px-10 py-4 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Join Our Team</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
