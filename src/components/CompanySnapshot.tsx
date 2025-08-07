import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Building2, Users, Globe, Award } from 'lucide-react';

const CompanySnapshot = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);

  const stats = [
    {
      icon: Building2,
      value: "15+",
      label: "Years of Excellence",
      description: "Leading in industry innovation"
    },
    {
      icon: Users,
      value: "10K+",
      label: "Happy Customers",
      description: "Trusted by businesses worldwide"
    },
    {
      icon: Globe,
      value: "50+",
      label: "Countries Served",
      description: "Global reach and presence"
    },
    {
      icon: Award,
      value: "100+",
      label: "Industry Awards",
      description: "Recognition for excellence"
    }
  ];

  return (
    <section 
      ref={elementRef}
      className={`py-20 bg-gradient-to-br from-slate-50 to-blue-50 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Company Snapshot
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering exceptional solutions and building lasting partnerships across industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</h4>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompanySnapshot;