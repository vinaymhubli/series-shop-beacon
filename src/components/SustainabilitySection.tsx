import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Leaf, Recycle, Globe, Heart } from 'lucide-react';

const SustainabilitySection = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);

  const initiatives = [
    {
      icon: Leaf,
      title: "Eco-Friendly Packaging",
      description: "100% recyclable and biodegradable materials"
    },
    {
      icon: Recycle,
      title: "Carbon Neutral Shipping",
      description: "Offsetting our carbon footprint with every delivery"
    },
    {
      icon: Globe,
      title: "Sustainable Sourcing",
      description: "Partners committed to environmental responsibility"
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Supporting local communities and fair trade"
    }
  ];

  return (
    <section 
      ref={elementRef}
      className={`py-20 bg-gradient-to-b from-green-50 to-emerald-50 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sustainability Commitment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a better future through responsible business practices and environmental stewardship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <div
                key={index}
                className={`text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{initiative.title}</h3>
                <p className="text-gray-600">{initiative.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;