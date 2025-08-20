import React from 'react';
import { PERSONAL_INFO, NAVIGATION_ITEMS, SOCIAL_LINKS } from '../data/portfolio';
import { scrollToElement } from '../utils/helpers';
import { useTheme } from '../contexts/ThemeContext';
import Icon from './ui/Icon';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { isDark } = useTheme();

  const handleNavigationClick = (href: string) => {
    const elementId = href.replace('#', '');
    scrollToElement(elementId, 80);
  };

  return (
    <footer className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} text-white`}>
      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {PERSONAL_INFO.name}
            </h3>
            <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Passionate about creating responsive, accessible, and performant web applications 
              using modern frontend technologies and best practices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Quick Links</h4>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavigationClick(item.href)}
                    className={`transition-colors text-left ${
                      isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact Info</h4>
            <ul className="space-y-2">
              <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <Icon
                  name="Mail"
                  size={16}
                  className={`mr-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                />
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-gray-900'}`}
                >
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <Icon
                  name="Phone"
                  size={16}
                  className={`mr-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                />
                <a 
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-gray-900'}`}
                >
                  {PERSONAL_INFO.phone}
                </a>
              </li>
              <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <Icon
                  name="MapPin"
                  size={16}
                  className={`mr-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                />
                <span>{PERSONAL_INFO.location}</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Follow Me</h4>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors group ${
                    isDark 
                      ? 'bg-gray-800 hover:bg-blue-600' 
                      : 'bg-gray-200 hover:bg-blue-600'
                  }`}
                  aria-label={`Visit ${social.name}`}
                >
                  <Icon
                    name={social.icon as any}
                    size={16}
                    className="text-gray-300 group-hover:text-white group-hover:scale-110 transition-all"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={`border-t pt-8 ${isDark ? 'border-gray-800' : 'border-gray-300'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
            </p>
            <div className={`flex items-center space-x-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <span>Built with modern web technologies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
