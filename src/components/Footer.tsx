import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Footer = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);

  const footerSections = [
    {
      title: "Crossed Hearts",
      links: [
        "A global publishing house specialising in the English localization of Japanese manga and Korean webcomics.",
        "Announcements",
        "Blogs",
        "Crossed Hearts Ambassador's Program"
      ]
    },
    {
      title: "Help & Support",
      links: [
        "FAQ",
        "Shipping Info", 
        "Returns & Exchanges",
        "Customer Support"
      ]
    },
    {
      title: "Legal",
      links: [
        "Terms of Service",
        "Privacy Policy",
        "Copyright Notice",
        "Language Terms"
      ]
    },
    {
      title: "For Creators",
      links: [
        "Author Portal",
        "Submission Guidelines",
        "Affiliate Programs",
        "Partnership Opportunities",
        "Business Inquiries"
      ]
    },
    {
      title: "Our Imprints",
      links: [
        "K-NOVEL PRESS"
      ]
    }
  ];

  return (
    <footer 
      ref={elementRef}
      className={`bg-black text-gray-400 py-8 sm:py-12 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className={`flex justify-center sm:justify-start mb-6 sm:mb-8 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <img 
            src="/lovable-uploads/464d8ea7-d84c-4d59-a0dc-01715d6ce881.png" 
            alt="Crossed Hearts" 
            className="h-10 w-auto sm:h-12 sm:w-auto"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {footerSections.map((section, index) => (
            <div 
              key={index}
              className={`text-center sm:text-left transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <h3 className="text-red-500 font-semibold mb-3 sm:mb-4 text-base sm:text-lg">{section.title}</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {linkIndex === 0 && index === 0 ? (
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed px-2 sm:px-0">{link}</p>
                    ) : (
                      <a href="#" className="text-xs sm:text-sm hover:text-white transition-colors duration-200 transform hover:translate-x-1 block px-2 sm:px-0 py-1">
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className={`border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0 transition-all duration-700 delay-800 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-110">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-110">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-110">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-110">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-xs sm:text-sm text-gray-500 text-center">
            © 2024 Crossed Hearts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
