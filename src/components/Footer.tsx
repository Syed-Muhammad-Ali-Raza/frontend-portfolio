import React from 'react';
import { PERSONAL_INFO, NAVIGATION_ITEMS, SOCIAL_LINKS } from '../data/portfolio';
import { scrollToElement } from '../utils/helpers';
import Icon from './ui/Icon';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavigationClick = (href: string) => {
    const elementId = href.replace('#', '');
    scrollToElement(elementId, 80);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Passionate about creating responsive, accessible, and performant web applications 
              using modern frontend technologies and best practices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavigationClick(item.href)}
                    className="text-gray-300 hover:text-white transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <Icon
                  name="Mail"
                  size={16}
                  className="mr-2 text-gray-300"
                />
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <Icon
                  name="Phone"
                  size={16}
                  className="mr-2 text-gray-300"
                />
                <a 
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <Icon
                  name="MapPin"
                  size={16}
                  className="mr-2 text-gray-300"
                />
                <span>{PERSONAL_INFO.location}</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Follow Me</h4>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors group"
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
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Made with ❤️ using React & TypeScript</span>
              <span>•</span>
              <span>Built with modern web technologies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
