import { Facebook, Instagram, Twitter, Youtube, Settings, LogIn } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCMS } from '@/hooks/useCMS';
import { useSupabaseAuth } from '@/hooks/useSupabaseAuth';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);
  const { getSectionContent } = useCMS();
  const { isAdmin, user } = useSupabaseAuth();

  // Get footer content from CMS or use defaults
  const footerContent = getSectionContent('footer', 'main_content');
  
  const defaultSections = [
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
      links: []
    }
  ];

  const footerSections = footerContent?.sections || defaultSections;
  const copyrightText = footerContent?.copyright || "© 2025 Crossed Hearts. All rights reserved.";
  const companyDescription = footerContent?.description || "A global publishing house specialising in the English localization of Japanese manga and Korean webcomics.";

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
          {/* Mobile logo */}
          <img 
            src="/lovable-uploads/fdd0cb0d-369d-4e2c-b325-fd7bac14abc3.png" 
            alt="Hearts"
            className="h-14 w-auto block sm:hidden"
          />
          {/* Desktop logo */}
          <img 
            src="/lovable-uploads/d2efe27c-7713-4015-9de8-ea1ddfbe2830.png" 
            alt="Crossed Hearts"
            className="h-16 w-auto sm:h-20 sm:w-auto hidden sm:block"
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
              {index === 4 ? (
                <div className="flex flex-col space-y-3 items-center sm:items-start">
                  <img 
                    src="/lovable-uploads/c63bffdb-4754-4d64-8063-6ac8bba72106.png" 
                    alt="GL Ami Pop" 
                    className="h-8 w-auto"
                  />
                  <img 
                    src="/lovable-uploads/298cc90c-2dff-4daf-b31b-2ebe77649735.png" 
                    alt="UE" 
                    className="h-8 w-auto"
                  />
                  <img 
                    src="/lovable-uploads/0eb9fe03-348b-4a44-a643-6c8dfbba66a9.png" 
                    alt="BL Club" 
                    className="h-8 w-auto"
                  />
                  <img 
                    src="/lovable-uploads/9c2bfe8c-6585-45b0-bc73-7b72048725ee.png" 
                    alt="Novel" 
                    className="h-8 w-auto"
                  />
                </div>
              ) : (
                <ul className="space-y-1.5 sm:space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {linkIndex === 0 && index === 0 ? (
                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed px-2 sm:px-0">{companyDescription}</p>
                      ) : link === "Privacy Policy" ? (
                        <Link to="/privacy-policy" className="text-xs sm:text-sm hover:text-white transition-colors duration-200 transform hover:translate-x-1 block px-2 sm:px-0 py-1">
                          {link}
                        </Link>
                      ) : link === "Copyright Notice" ? (
                        <Link to="/copyright" className="text-xs sm:text-sm hover:text-white transition-colors duration-200 transform hover:translate-x-1 block px-2 sm:px-0 py-1">
                          {link}
                        </Link>
                      ) : link === "Shipping Info" || link === "Returns & Exchanges" ? (
                        <Link to="/order-shipping" className="text-xs sm:text-sm hover:text-white transition-colors duration-200 transform hover:translate-x-1 block px-2 sm:px-0 py-1">
                          {link}
                        </Link>
                      ) : link === "Terms of Service" ? (
                        <Link to="/terms-conditions" className="text-xs sm:text-sm hover:text-white transition-colors duration-200 transform hover:translate-x-1 block px-2 sm:px-0 py-1">
                          {link}
                        </Link>
                      ) : null}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        
        <div className={`border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0 transition-all duration-700 delay-800 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex space-x-6 items-center">
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
            {isAdmin && (
              <Link 
                to="/admin" 
                className="text-gray-400 hover:text-red-500 transition-all duration-200 transform hover:scale-110 flex items-center gap-1 text-xs"
                title="CMS Admin Panel"
              >
                <Settings className="w-4 h-4" />
                <span className="hidden sm:inline">CMS</span>
              </Link>
            )}
            {!user && (
              <Link
                to="/auth"
                className="text-gray-400 hover:text-red-500 transition-all duration-200 transform hover:scale-110 flex items-center gap-1 text-xs"
                title="Admin Login"
              >
                <LogIn className="w-4 h-4" />
                <span className="hidden sm:inline">Admin Login</span>
              </Link>
            )}
          </div>
          
          <p className="text-xs sm:text-sm text-gray-500 text-center">
            {copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
