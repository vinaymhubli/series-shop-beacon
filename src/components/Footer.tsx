
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Footer = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);

  const footerSections = [
    {
      title: "Crossed Hearts",
      links: [
        "A global publishing house specialising in the English localization of Japanese manga and Korean webtooncomics.",
        "FAQ",
        "Shipping Info",
        "Returns & Exchanges",
        "Customer Support"
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
        "Affiliate Program",
        "Partnership Opportunities"
      ]
    }
  ];

  return (
    <footer 
      ref={elementRef}
      className={`bg-black text-gray-400 py-12 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className={`flex justify-center mb-8 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <img 
            src="/lovable-uploads/e894503b-5d22-4a7a-9940-15abeb76e58b.png" 
            alt="Crossed Hearts" 
            className="h-12 w-28"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <h3 className="text-red-500 font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {linkIndex === 0 && index === 0 ? (
                      <p className="text-sm text-gray-500 leading-relaxed">{link}</p>
                    ) : (
                      <a href="#" className="text-sm hover:text-white transition-colors duration-200 transform hover:translate-x-1">
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className={`border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center transition-all duration-700 delay-800 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex space-x-4 mb-4 md:mb-0">
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
          
          <p className="text-sm text-gray-500">
            © 2024 Crossed Hearts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
