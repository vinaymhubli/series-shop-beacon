import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, 
  Shirt, 
  Gamepad2, 
  Book, 
  Car, 
  Home, 
  Smartphone, 
  Heart 
} from 'lucide-react';

const SolutionsGrid = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);
  const navigate = useNavigate();

  const categories = [
    {
      icon: Book,
      title: "Comics & Manga",
      description: "Latest releases and classics",
      link: "/our-series",
      color: "from-red-500 to-red-600"
    },
    {
      icon: ShoppingBag,
      title: "Merchandise",
      description: "Official branded products",
      link: "/shop-all",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Shirt,
      title: "Apparel",
      description: "Fashion and lifestyle wear",
      link: "/shop-all?category=apparel",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description: "Games and accessories",
      link: "/shop-all?category=gaming",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Heart,
      title: "Collectibles",
      description: "Limited edition items",
      link: "/shop-all?category=collectibles",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Smartphone,
      title: "Tech Accessories",
      description: "Phone cases and gadgets",
      link: "/shop-all?category=tech",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Home,
      title: "Home & Living",
      description: "Decor and lifestyle",
      link: "/shop-all?category=home",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Car,
      title: "Automotive",
      description: "Car accessories and decals",
      link: "/shop-all?category=automotive",
      color: "from-teal-500 to-teal-600"
    }
  ];

  const handleCategoryClick = (link: string) => {
    navigate(link);
  };

  return (
    <section 
      ref={elementRef}
      className={`py-20 bg-gradient-to-b from-gray-50 to-white transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of products across multiple categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                onClick={() => handleCategoryClick(category.link)}
                className={`group cursor-pointer p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-gray-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${category.color} text-white rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-500 transition-colors">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;