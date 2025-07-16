
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const CreativeCorner = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);

  const creativeWorks = [
    {
      title: "Moonlit Sakura",
      description: "A breathtaking tale of love and loss set against the backdrop of cherry blossoms in ancient Japan.",
      image: "/lovable-uploads/a0c88e05-5aba-4550-8ee0-7644ad456776.png",
      author: "Akira Tanaka",
      genre: "Romance, Drama",
      link: "/our-series"
    },
    {
      title: "Neon Shadows",
      description: "In a cyberpunk future, a hacker discovers a conspiracy that threatens the very fabric of reality.",
      image: "/lovable-uploads/26efc76c-fa83-4369-8d8d-354eab1433e6.png", 
      author: "Kim Min-jun",
      genre: "Sci-Fi, Thriller",
      link: "/our-series"
    }
  ];

  return (
    <section 
      ref={elementRef}
      className={`py-16 bg-black transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Creative <span className="text-red-500">Corner</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover handpicked series that showcase the pinnacle of storytelling artistry
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {creativeWorks.map((work, index) => (
            <Link
              key={index}
              to={work.link}
              className="group block"
            >
              <Card className="bg-gray-900 border-gray-700 overflow-hidden group-hover:border-red-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-500/20">
                <div className="relative">
                  <img 
                    src={work.image}
                    alt={work.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded-full mb-2">
                      {work.genre}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    by {work.author}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {work.description}
                  </p>
                  <div className="mt-4 text-red-500 text-sm font-medium group-hover:underline">
                    Read More →
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeCorner;
