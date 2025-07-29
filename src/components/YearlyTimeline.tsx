import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';

const YearlyTimeline = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);
  const [selectedYear, setSelectedYear] = useState<number>(2025);

  const timelineData = [
    {
      year: 2022,
      book: {
        title: "Chronicles of Dawn",
        description: "A mystical journey through ancient realms where heroes discover their true destiny in the first light.",
        leftImage: "/lovable-uploads/b228d232-065b-464f-9ed7-c6fc2545dc27.png",
        rightImage: "/lovable-uploads/c329fdd6-be7b-4f27-8670-008a030b5b9e.png"
      }
    },
    {
      year: 2023,
      book: {
        title: "Shadow Legends",
        description: "Dark mysteries unfold in the realm of shadows where ancient secrets await brave souls.",
        leftImage: "/lovable-uploads/a0c88e05-5aba-4550-8ee0-7644ad456776.png",
        rightImage: "/lovable-uploads/e5072af9-fcd6-47c6-868c-035382ab9e20.png"
      }
    },
    {
      year: 2024,
      book: {
        title: "Midnight Adventures",
        description: "When the world sleeps, the greatest adventures begin under the starlit cosmic canvas.",
        leftImage: "/lovable-uploads/7b8f7dcc-b06f-4c89-b5af-906cd241ae0c.png",
        rightImage: "/lovable-uploads/97f88fee-e070-4d97-a73a-c747112fa093.png"
      }
    },
    {
      year: 2025,
      book: {
        title: "Eternal Light Saga",
        description: "The ultimate quest begins as warriors unite to defend their realm against eternal darkness.",
        leftImage: "/lovable-uploads/503cc23b-a28f-4564-86f9-53896fa75f10.png",
        rightImage: "/lovable-uploads/dec36eb1-43e4-40dc-9068-88317b09eab2.png"
      }
    },
    {
      year: 2026,
      book: {
        title: "Future Realms",
        description: "Explore dimensions beyond imagination in the cosmic realms of tomorrow's adventures.",
        leftImage: "/lovable-uploads/b228d232-065b-464f-9ed7-c6fc2545dc27.png",
        rightImage: "/lovable-uploads/c329fdd6-be7b-4f27-8670-008a030b5b9e.png"
      }
    }
  ];
  
  const selectedData = timelineData.find(data => data.year === selectedYear);

  return (
    <section 
      ref={elementRef}
      className={`py-20 bg-black relative overflow-hidden transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Yearly <span className="text-red-500">Timeline</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Journey through our collection across the years and discover the evolution of storytelling
          </p>
        </div>

        {/* Top Year Selector */}
        <div className="mb-16">
          <div className="flex justify-center items-center space-x-12 mb-8">
            {timelineData.map((yearData) => (
              <button
                key={yearData.year}
                onClick={() => setSelectedYear(yearData.year)}
                className={`text-2xl font-bold transition-all duration-300 hover:scale-110 ${
                  selectedYear === yearData.year
                    ? 'text-white'
                    : 'text-red-500 hover:text-red-400'
                }`}
              >
                {yearData.year}
              </button>
            ))}
          </div>
        </div>

        {/* Middle Content Section */}
        {selectedData && (
          <div 
            key={selectedData.year}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center animate-fade-in"
          >
            {/* Left Section - Book Image */}
            <div className="lg:col-span-1">
              <div className="transform transition-all duration-500 hover:scale-105">
                <img 
                  src={selectedData.book.leftImage}
                  alt={`${selectedData.book.title} cover`}
                  className="w-full h-64 object-cover rounded-lg shadow-lg border border-gray-800 transition-all duration-300"
                />
              </div>
            </div>

            {/* Center Section - Book Info */}
            <div className="lg:col-span-1 text-center space-y-6">
              <div className="text-gray-400 text-sm transform transition-all duration-300 delay-100">
                24-11-{selectedData.year}
              </div>
              <h3 className="text-4xl font-bold text-white mb-4 transform transition-all duration-300 delay-200">
                {selectedData.book.title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto transform transition-all duration-300 delay-300">
                {selectedData.book.description}
              </p>
            </div>

            {/* Right Section - Playing Card */}
            <div className="lg:col-span-1">
              <div className="transform transition-all duration-500 hover:scale-105">
                <img 
                  src={selectedData.book.rightImage}
                  alt={`Playing card for ${selectedData.year}`}
                  className="w-full h-64 object-cover rounded-lg shadow-lg border border-gray-300 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default YearlyTimeline;