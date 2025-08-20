import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolio';
import { scrollToElement } from '../utils/helpers';
import { useTheme } from '../contexts/ThemeContext';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const { isDark } = useTheme();
  
  const roleTitles = [
    'Frontend Developer',
    'React Specialist',
    'UI/UX Enthusiast',
    'Web Designer'
  ];

  // Animated text rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % roleTitles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roleTitles.length]);

  const handleScrollToSection = (sectionId: string) => {
    scrollToElement(sectionId, 80);
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center pt-20 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-blue-50 to-indigo-100'
    }`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Hi, I'm{' '}
              <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'} bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent`}>
                {PERSONAL_INFO.name}
              </span>
            </h1>
            
            <h2 className={`text-xl md:text-2xl mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm a{' '}
              <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'} font-semibold min-h-[1.5em] inline-block`}>
                {roleTitles[currentTextIndex]}
              </span>
            </h2>
            
            <p className={`text-lg mb-8 max-w-2xl mx-auto lg:mx-0 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {PERSONAL_INFO.bio}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleScrollToSection('projects')}
                className="group"
              >
                View My Work
                <svg 
                  className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleScrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          {/* Profile Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-xl p-8 max-w-sm ${isDark ? 'shadow-soft-dark' : 'shadow-soft'}`}>
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                    <span className="text-3xl text-white font-bold">
                      {PERSONAL_INFO.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Available for opportunities
                  </h3>
                  <p className={`mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Let's create amazing web experiences together!
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className={`flex items-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <svg className="w-4 h-4 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>React & TypeScript Expert</span>
                  </div>
                  <div className={`flex items-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <svg className="w-4 h-4 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>5+ Years Experience</span>
                  </div>
                  <div className={`flex items-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <svg className="w-4 h-4 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Remote Work Ready</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-indigo-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => handleScrollToSection('about')}
            className={`p-2 rounded-full backdrop-blur-sm shadow-lg transition-colors ${
              isDark 
                ? 'bg-gray-800/80 hover:bg-gray-700' 
                : 'bg-white/80 hover:bg-white'
            }`}
            aria-label="Scroll to next section"
          >
            <svg className={`w-6 h-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
