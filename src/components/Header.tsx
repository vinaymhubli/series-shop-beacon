

import { useState } from 'react';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    'Our series',
    'Shop all',
    'About us',
    'Contact us',
    'Affiliate programs',
    'Readers mode'
  ];

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/e894503b-5d22-4a7a-9940-15abeb76e58b.png" 
              alt="Crossed Hearts" 
              className="h-20 w-32"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
              <User className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium px-2 py-1"
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center space-x-4 px-2 pt-4 border-t border-gray-800">
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <User className="h-5 w-5" />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

