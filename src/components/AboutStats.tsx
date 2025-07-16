
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutStats = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);

  const stats = [
    {
      number: "2M+",
      label: "Happy Readers",
      description: "Readers worldwide enjoying our content"
    },
    {
      number: "15",
      label: "Countries",
      description: "Global distribution network"
    },
    {
      number: "8",
      label: "Years",
      description: "Of publishing excellence"
    },
    {
      number: "99%",
      label: "Satisfaction",
      description: "Reader satisfaction rate"
    }
  ];

  return (
    <section 
      ref={elementRef}
      className={`py-12 sm:py-16 bg-gray-900 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12">
          Our Impact in <span className="text-red-500">Numbers</span>
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="bg-black rounded-lg p-4 sm:p-6 hover:bg-gray-800 transition-colors duration-300">
                <h3 className="text-red-500 text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">{stat.number}</h3>
                <h4 className="text-white text-sm sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">{stat.label}</h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-tight">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
