
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutStats = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);

  const stats = [
    {
      number: "2M+",
      label: "Happy Readers",
      description: "Readers worldwide enjoying our content",
      color: "from-red-500 to-red-600"
    },
    {
      number: "15",
      label: "Countries",
      description: "Global distribution network",
      color: "from-red-600 to-red-700"
    },
    {
      number: "8",
      label: "Years",
      description: "Of publishing excellence",
      color: "from-red-700 to-red-800"
    },
    {
      number: "99%",
      label: "Satisfaction",
      description: "Reader satisfaction rate",
      color: "from-red-500 to-red-700"
    }
  ];

  return (
    <section 
      ref={elementRef}
      className={`py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-red-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
            <span className="text-red-400 font-semibold text-sm uppercase tracking-wide">Our Impact</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Our Impact in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              Numbers
            </span>
          </h2>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`group transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="relative h-full">
                {/* Glow Effect */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-8 border border-gray-700 group-hover:border-red-500/50 transition-all duration-300 h-full">
                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-red-500/30 rounded-tr-lg"></div>
                  
                  <div className="text-center">
                    <h3 className={`text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                      {stat.number}
                    </h3>
                    <h4 className="text-white text-xl font-semibold mb-3 group-hover:text-red-400 transition-colors duration-300">
                      {stat.label}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {stat.description}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
