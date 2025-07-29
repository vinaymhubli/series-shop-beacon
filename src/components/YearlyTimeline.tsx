import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const YearlyTimeline = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);
  const [selectedYear, setSelectedYear] = useState<number>(2025);

  const timelineData = [
    {
      year: 2022,
      book: {
        title: "Chronicles of Dawn",
        description: "A mystical journey through ancient realms where heroes discover their true destiny in the first light.",
        images: [
          "/lovable-uploads/b228d232-065b-464f-9ed7-c6fc2545dc27.png",
          "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
          "/lovable-uploads/e894503b-5d22-4a7a-9940-15abeb76e58b.png"
        ]
      }
    },
    {
      year: 2023,
      book: {
        title: "Shadow Legends",
        description: "Dark mysteries unfold in the realm of shadows where ancient secrets await brave souls.",
        images: [
          "/lovable-uploads/a0c88e05-5aba-4550-8ee0-7644ad456776.png",
          "/lovable-uploads/b303e6ac-f71f-4969-b8b5-b567e0c9bf95.png",
          "/lovable-uploads/781ea40e-866e-4ee8-9bf7-862a42bb8716.png"
        ]
      }
    },
    {
      year: 2024,
      book: {
        title: "Midnight Adventures",
        description: "When the world sleeps, the greatest adventures begin under the starlit cosmic canvas.",
        images: [
          "/lovable-uploads/7b8f7dcc-b06f-4c89-b5af-906cd241ae0c.png",
          "/lovable-uploads/907e2c66-ea0e-425d-8b48-a80ffcbd2267.png",
          "/lovable-uploads/6fb6d014-0083-4f09-95a2-0416443da769.png"
        ]
      }
    },
    {
      year: 2025,
      book: {
        title: "Eternal Light Saga",
        description: "The ultimate quest begins as warriors unite to defend their realm against eternal darkness.",
        images: [
          "/lovable-uploads/503cc23b-a28f-4564-86f9-53896fa75f10.png",
          "/lovable-uploads/26efc76c-fa83-4369-8d8d-354eab1433e6.png",
          "/lovable-uploads/0e70be33-bdfc-41db-8ae1-5c0dcf1b885c.png"
        ]
      }
    },
    {
      year: 2026,
      book: {
        title: "Future Realms",
        description: "Explore dimensions beyond imagination in the cosmic realms of tomorrow's adventures.",
        images: [
          "/lovable-uploads/b228d232-065b-464f-9ed7-c6fc2545dc27.png",
          "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
          "/lovable-uploads/e894503b-5d22-4a7a-9940-15abeb76e58b.png"
        ]
      }
    }
  ];

  const cardImages = [
    "/lovable-uploads/c329fdd6-be7b-4f27-8670-008a030b5b9e.png",
    "/lovable-uploads/e5072af9-fcd6-47c6-868c-035382ab9e20.png",
    "/lovable-uploads/97f88fee-e070-4d97-a73a-c747112fa093.png",
    "/lovable-uploads/dec36eb1-43e4-40dc-9068-88317b09eab2.png"
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left Section - Book Image Carousel */}
            <div className="lg:col-span-1">
              <Carousel
                opts={{
                  align: "center",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent>
                  {selectedData.book.images.map((image, index) => (
                    <CarouselItem key={index} className="basis-full">
                      <div className="flex justify-center">
                        <img 
                          src={image}
                          alt={`${selectedData.book.title} ${index + 1}`}
                          className="w-full max-w-sm h-64 object-cover rounded-lg shadow-lg border border-gray-800"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            {/* Center Section - Book Info */}
            <div className="lg:col-span-1 text-center space-y-6">
              <div className="text-gray-400 text-sm">24-11-{selectedData.year}</div>
              <h3 className="text-4xl font-bold text-white mb-4">
                {selectedData.book.title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto">
                {selectedData.book.description}
              </p>
            </div>

            {/* Right Section - Speed Cards Carousel */}
            <div className="lg:col-span-1">
              <Carousel
                opts={{
                  align: "center",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 2500,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent>
                  {cardImages.map((cardImage, index) => (
                    <CarouselItem key={index} className="basis-full">
                      <div className="flex justify-center">
                        <img 
                          src={cardImage}
                          alt={`Playing card ${index + 1}`}
                          className="w-full h-64 object-contain rounded-lg shadow-lg border border-gray-300"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default YearlyTimeline;