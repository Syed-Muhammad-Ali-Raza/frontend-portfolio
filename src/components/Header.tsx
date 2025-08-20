import React, { useState, useEffect } from 'react';
import { NAVIGATION_ITEMS } from '../data/portfolio';
import { scrollToElement } from '../utils/helpers';
import { useTheme } from '../contexts/ThemeContext';
import Button from './ui/Button';
import ThemeToggle from './ui/ThemeToggle';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark } = useTheme();

  // Handle scroll effect for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation click
  const handleNavigationClick = (href: string) => {
    const elementId = href.replace('#', '');
    scrollToElement(elementId, 80); // Offset for fixed header
    setIsMobileMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? isDark 
            ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-gray-700' 
            : 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              John Doe
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.id}>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleNavigationClick(item.href)}
                    className={`${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}
                  >
                    {item.label}
                  </Button>
                </li>
              ))}
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span 
                className={`block w-5 h-0.5 transition-all duration-300 ${
                  isDark ? 'bg-gray-300' : 'bg-gray-700'
                } ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}
              />
              <span 
                className={`block w-5 h-0.5 transition-all duration-300 ${
                  isDark ? 'bg-gray-300' : 'bg-gray-700'
                } ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <span 
                className={`block w-5 h-0.5 transition-all duration-300 ${
                  isDark ? 'bg-gray-300' : 'bg-gray-700'
                } ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className={`py-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.id}>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleNavigationClick(item.href)}
                    className={`w-full text-left ${
                      isDark 
                        ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-700' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Button>
                </li>
              ))}
              <li className="pt-2">
                <div className="flex justify-center">
                  <ThemeToggle />
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
