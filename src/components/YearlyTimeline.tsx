import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const YearlyTimeline = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const timelineData = [
    {
      year: 2016,
      series: [
        {
          title: "First Light",
          image: "/lovable-uploads/b228d232-065b-464f-9ed7-c6fc2545dc27.png",
          link: "/our-series",
          description: "An epic journey begins with the first rays of dawn, where heroes discover their destiny."
        },
        {
          title: "Shadow Chronicles",
          image: "/lovable-uploads/b228d232-065b-464f-9ed7-c6fc2545dc27.png",
          link: "/our-series",
          description: "Dark mysteries unfold in the realm of shadows and ancient secrets."
        },
        {
          title: "Midnight Adventures",
          image: "/lovable-uploads/b228d232-065b-464f-9ed7-c6fc2545dc27.png",
          link: "/our-series",
          description: "When the world sleeps, the greatest adventures begin under starlit skies."
        },
        {
          title: "Dawn Warriors",
          image: "/lovable-uploads/b228d232-065b-464f-9ed7-c6fc2545dc27.png",
          link: "/our-series",
          description: "Brave warriors unite at the break of dawn to defend their homeland."
        }
      ]
    },
    {
      year: 2017,
      series: [
        {
          title: "Ocean Dreams",
          image: "/lovable-uploads/b228d232-065b-464f-9ed7-c6fc2545dc27.png",
          link: "/our-series",
          description: "Dive into the depths of the ocean where dreams and reality merge."
        },
        {
          title: "Mountain Tales",
          image: "/lovable-uploads/b228d232-065b-464f-9ed7-c6fc2545dc27.png",
          link: "/our-series",
          description: "Ancient stories echo through the mountain peaks and hidden valleys."
        },
        {
          title: "City Lights",
          image: "/lovable-uploads/b228d232-065b-464f-9ed7-c6fc2545dc27.png",
          link: "/our-series",
          description: "Urban adventures shine bright in the neon-lit metropolis."
        },
        {
          title: "River Legends",
          image: "/lovable-uploads/b228d232-065b-464f-9ed7-c6fc2545dc27.png",
          link: "/our-series",
          description: "Follow the flowing waters to discover legendary tales of old."
        }
      ]
    },
    {
      year: 2018,
      series: [
        {
          title: "Forest Whispers",
          image: "/lovable-uploads/b228d232-065b-464f-9ed7-c6fc2545dc27.png",
          link: "/our-series",
          description: "The ancient forest holds secrets whispered by the wind through the trees."
        },
        {
          title: "Desert Winds",
          image: "/lovable-uploads/b228d232-065b-464f-9ed7-c6fc2545dc27.png",
          link: "/our-series",
          description: "Endless dunes hide treasures and dangers in the scorching desert."
        },
        {
          title: "Arctic Quest",
          image: "/lovable-uploads/b228d232-065b-464f-9ed7-c6fc2545dc27.png",
          link: "/our-series",
          description: "Brave the frozen wilderness in search of legendary artifacts."
        },
        {
          title: "Jungle Mysteries",
          image: "/lovable-uploads/b228d232-065b-464f-9ed7-c6fc2545dc27.png",
          link: "/our-series",
          description: "Uncover ancient civilizations hidden deep within the jungle canopy."
        }
      ]
    },
    {
      year: 2019,
      series: [
        {
          title: "Stellar Journey",
          image: "/lovable-uploads/b228d232-065b-464f-9ed7-c6fc2545dc27.png",
          link: "/our-series",
          description: "Embark on an interstellar voyage across the cosmos."
        },
        {
          title: "Cosmic Realms",
          image: "/lovable-uploads/b228d232-065b-464f-9ed7-c6fc2545dc27.png",
          link: "/our-series",
          description: "Explore dimensions beyond imagination in the cosmic realms."
        },
        {
          title: "Galaxy Heroes",
          image: "/lovable-uploads/b228d232-065b-464f-9ed7-c6fc2545dc27.png",
          link: "/our-series",
          description: "Heroes unite across galaxies to defend the universe from darkness."
        },
        {
          title: "Nebula Chronicles",
          image: "/lovable-uploads/b228d232-065b-464f-9ed7-c6fc2545dc27.png",
          link: "/our-series",
          description: "Chronicles of adventure spanning the colorful cosmic nebulae."
        }
      ]
    }
  ];

  const handleYearClick = (year: number) => {
    setSelectedYear(selectedYear === year ? null : year);
  };

  const selectedData = timelineData.find(data => data.year === selectedYear);

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
        
        {/* Vertical Timeline */}
        <div className="flex flex-col items-center max-w-md mx-auto mb-16">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-red-600 to-red-700"></div>
            
            {/* Year points */}
            <div className="space-y-12">
              {timelineData.map((yearData, index) => (
                <div key={yearData.year} className="relative flex items-center">
                  {/* Year button */}
                  <button
                    onClick={() => handleYearClick(yearData.year)}
                    className={`relative z-10 w-20 h-20 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-110 ${
                      selectedYear === yearData.year
                        ? 'bg-white text-red-600 shadow-2xl shadow-red-500/50'
                        : 'bg-gradient-to-r from-red-500 to-red-700 text-white shadow-xl hover:shadow-red-500/30'
                    }`}
                  >
                    {yearData.year}
                  </button>
                  
                  {/* Connection dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-black"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Year Content */}
        {selectedData && (
          <div className="transition-all duration-500 animate-fade-in">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">
                Publications from <span className="text-red-500">{selectedData.year}</span>
              </h3>
              <div className="w-16 h-1 bg-red-500 mx-auto"></div>
            </div>
            
            {/* Featured Book Display */}
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {selectedData.series.map((series, index) => (
                  <Link
                    key={index}
                    to={series.link}
                    className="group block transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                    style={{
                      animationDelay: `${index * 100}ms`,
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
                        
                        {/* Year badge */}
                        <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                          {selectedData.year}
                        </div>
                        
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-red-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                          <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="text-sm font-medium mb-1">Read Now</div>
                            <div className="w-8 h-px bg-white mx-auto"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 relative">
                        <h3 className="text-white text-lg font-bold group-hover:text-red-400 transition-colors duration-300 mb-2">
                          {series.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                          {series.description}
                        </p>
                        <div className="flex items-center text-red-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
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
          </div>
        )}

        {/* Instruction text */}
        {!selectedYear && (
          <div className="text-center mt-12">
            <p className="text-gray-400 text-lg">
              Click on any year to explore our publications from that time
            </p>
          </div>
        )}
        
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
