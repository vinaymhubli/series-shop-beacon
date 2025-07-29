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
      className={`py-20 bg-black relative overflow-hidden transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
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
        
        <div className="flex max-w-7xl mx-auto min-h-[600px]">
          {/* Left Timeline */}
          <div className="w-1/3 relative">
            {/* Vertical line */}
            <div className="absolute left-16 top-0 bottom-0 w-1 bg-red-500"></div>
            
            {/* Year points */}
            <div className="relative space-y-16 pt-8">
              {timelineData.map((yearData, index) => (
                <div key={yearData.year} className="relative flex items-center">
                  {/* Year button */}
                  <button
                    onClick={() => handleYearClick(yearData.year)}
                    className={`relative z-10 w-16 h-16 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center ${
                      selectedYear === yearData.year
                        ? 'bg-white text-red-600 shadow-lg'
                        : 'bg-red-500 text-white hover:bg-red-400'
                    }`}
                  >
                    {yearData.year}
                  </button>
                  
                  {/* Connection dot to line */}
                  <div className="absolute left-16 transform -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content Area */}
          <div className="w-2/3 pl-12">
            {selectedData ? (
              <div className="transition-all duration-500 animate-fade-in">
                {/* Header */}
                <div className="mb-8">
                  <div className="text-gray-400 text-sm mb-2">24-11-{selectedData.year}</div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Publications from {selectedData.year}
                  </h3>
                </div>
                
                {/* Books Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {selectedData.series.map((series, index) => (
                    <Link
                      key={index}
                      to={series.link}
                      className="group block transform transition-all duration-300 hover:scale-105"
                    >
                      <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg group-hover:shadow-red-500/20 border border-gray-800 group-hover:border-red-500/30 transition-all duration-300">
                        <div className="relative">
                          <img 
                            src={series.image}
                            alt={series.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        
                        <div className="p-4">
                          <h4 className="text-white text-sm font-semibold group-hover:text-red-400 transition-colors duration-300 line-clamp-2">
                            {series.title}
                          </h4>
                          <p className="text-gray-400 text-xs mt-2 line-clamp-2">
                            {series.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-gray-500 text-lg mb-4">Select a year to view publications</div>
                  <div className="text-gray-600 text-sm">Click on any year from the timeline</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YearlyTimeline;
