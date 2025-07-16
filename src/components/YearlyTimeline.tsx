import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const YearlyTimeline = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);

  const timelineData = [
    {
      year: 2016,
      series: [
        {
          title: "First Light",
          image: "/lovable-uploads/b228d232-065b-464f-9ed7-c6fc2545dc27.png",
          link: "/our-series"
        },
        {
          title: "Shadow Chronicles",
          image: "/lovable-uploads/b228d232-065b-464f-9ed7-c6fc2545dc27.png",
          link: "/our-series"
        }
      ]
    },
    {
      year: 2017,
      series: [
        {
          title: "Ocean Dreams",
          image: "/lovable-uploads/b228d232-065b-464f-9ed7-c6fc2545dc27.png",
          link: "/our-series"
        },
        {
          title: "Mountain Tales",
          image: "/lovable-uploads/b228d232-065b-464f-9ed7-c6fc2545dc27.png",
          link: "/our-series"
        },
        {
          title: "City Lights",
          image: "/lovable-uploads/b228d232-065b-464f-9ed7-c6fc2545dc27.png",
          link: "/our-series"
        }
      ]
    },
    {
      year: 2018,
      series: [
        {
          title: "Forest Whispers",
          image: "/lovable-uploads/b228d232-065b-464f-9ed7-c6fc2545dc27.png",
          link: "/our-series"
        },
        {
          title: "Desert Winds",
          image: "/lovable-uploads/b228d232-065b-464f-9ed7-c6fc2545dc27.png",
          link: "/our-series"
        }
      ]
    },
    {
      year: 2019,
      series: [
        {
          title: "Stellar Journey",
          image: "/lovable-uploads/b228d232-065b-464f-9ed7-c6fc2545dc27.png",
          link: "/our-series"
        }
      ]
    }
  ];

  return (
    <section 
      ref={elementRef}
      className={`py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Our Publishing <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Timeline</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Journey through the years of exceptional storytelling and discover the incredible series we've brought to life
          </p>
        </div>
        
        <div className="space-y-20">
          {timelineData.map((yearData, yearIndex) => (
            <div key={yearData.year} className="relative">
              {/* Timeline connector */}
              {yearIndex < timelineData.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-32 w-px h-20 bg-gradient-to-b from-red-500 to-transparent z-0"></div>
              )}
              
              {/* Year Header */}
              <div className="flex items-center justify-center mb-12">
                <div className="relative">
                  <div className="bg-gradient-to-r from-red-500 to-red-700 text-white px-8 py-4 rounded-full font-bold text-2xl shadow-2xl border-4 border-white/10 backdrop-blur-sm">
                    {yearData.year}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 rounded-full blur-xl opacity-30 -z-10"></div>
                </div>
              </div>
              
              {/* Series Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
                {yearData.series.map((series, seriesIndex) => (
                  <Link
                    key={seriesIndex}
                    to={series.link}
                    className="group block transform transition-all duration-500 hover:scale-110 hover:-translate-y-2"
                    style={{
                      animationDelay: `${seriesIndex * 100}ms`,
                      animation: isVisible ? 'fade-in 0.8s ease-out forwards' : 'none'
                    }}
                  >
                    <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-red-500/30 border border-gray-700 group-hover:border-red-500/50 transition-all duration-500">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative">
                        <img 
                          src={series.image}
                          alt={series.title}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-red-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                          <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="text-sm font-medium mb-1">Read Now</div>
                            <div className="w-8 h-px bg-white mx-auto"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 relative">
                        <h3 className="text-white text-lg font-bold group-hover:text-red-400 transition-colors duration-300 line-clamp-2 leading-tight">
                          {series.title}
                        </h3>
                        <div className="mt-3 flex items-center text-red-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                          <span>Explore Series</span>
                          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Corner accent */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-red-500/20 to-transparent transform rotate-45 translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom decorative element */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-red-500"></div>
            <div className="text-sm font-medium">More stories coming soon</div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-red-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YearlyTimeline;
