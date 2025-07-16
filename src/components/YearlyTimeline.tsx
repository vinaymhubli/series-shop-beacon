
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
          image: "/lovable-uploads/26efc76c-fa83-4369-8d8d-354eab1433e6.png",
          link: "/our-series"
        },
        {
          title: "Shadow Chronicles",
          image: "/lovable-uploads/503cc23b-a28f-4564-86f9-53896fa75f10.png",
          link: "/our-series"
        }
      ]
    },
    {
      year: 2017,
      series: [
        {
          title: "Ocean Dreams",
          image: "/lovable-uploads/6fb6d014-0083-4f09-95a2-0416443da769.png",
          link: "/our-series"
        },
        {
          title: "Mountain Tales",
          image: "/lovable-uploads/781ea40e-866e-4ee8-9bf7-862a42bb8716.png",
          link: "/our-series"
        },
        {
          title: "City Lights",
          image: "/lovable-uploads/7b8f7dcc-b06f-4c89-b5af-906cd241ae0c.png",
          link: "/our-series"
        }
      ]
    },
    {
      year: 2018,
      series: [
        {
          title: "Forest Whispers",
          image: "/lovable-uploads/907e2c66-ea0e-425d-8b48-a80ffcbd2267.png",
          link: "/our-series"
        },
        {
          title: "Desert Winds",
          image: "/lovable-uploads/b303e6ac-f71f-4969-b8b5-b567e0c9bf95.png",
          link: "/our-series"
        }
      ]
    },
    {
      year: 2019,
      series: [
        {
          title: "Stellar Journey",
          image: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
          link: "/our-series"
        }
      ]
    }
  ];

  return (
    <section 
      ref={elementRef}
      className={`py-16 bg-gray-900 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Our Publishing <span className="text-red-500">Timeline</span>
        </h2>
        
        <div className="space-y-12">
          {timelineData.map((yearData, yearIndex) => (
            <div key={yearData.year} className="relative">
              {/* Year Header */}
              <div className="flex items-center mb-8">
                <div className="bg-red-500 text-white px-6 py-2 rounded-full font-bold text-xl mr-4">
                  {yearData.year}
                </div>
                <div className="h-px bg-gray-600 flex-1"></div>
              </div>
              
              {/* Series Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 ml-8">
                {yearData.series.map((series, seriesIndex) => (
                  <Link
                    key={seriesIndex}
                    to={series.link}
                    className="group block transform transition-all duration-300 hover:scale-105"
                  >
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group-hover:shadow-red-500/20">
                      <img 
                        src={series.image}
                        alt={series.title}
                        className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
                      />
                      <div className="p-3">
                        <h3 className="text-white text-sm font-medium group-hover:text-red-500 transition-colors line-clamp-2">
                          {series.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YearlyTimeline;
