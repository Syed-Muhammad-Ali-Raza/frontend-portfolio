import React from 'react';
import { PERSONAL_INFO } from '../data/portfolio';
import Section from './ui/Section';

interface Stat {
  number: string;
  label: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const About: React.FC = () => {
  const stats: Stat[] = [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  const features: Feature[] = [
    {
      icon: "🎨",
      title: "UI/UX Focused",
      description: "Creating beautiful, intuitive interfaces that prioritize user experience and accessibility."
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Building applications that work seamlessly across all devices and screen sizes."
    },
    {
      icon: "⚡",
      title: "Performance Optimized",
      description: "Writing efficient code that loads fast and provides smooth user interactions."
    },
    {
      icon: "🔧",
      title: "Modern Tools",
      description: "Using the latest frontend technologies and best practices to deliver cutting-edge solutions."
    }
  ];

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Get to know me better"
    >
      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Text Content */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Who I Am
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm a passionate frontend developer with a strong foundation in modern web technologies. 
                I specialize in creating responsive, user-friendly applications that deliver exceptional user experiences.
              </p>
              <p>
                With expertise in React, TypeScript, and modern CSS frameworks, I bring designs to life with clean, 
                maintainable code. I believe in writing semantic HTML, accessible components, and creating intuitive 
                interfaces that delight users across all devices.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <span className="text-4xl text-white font-bold">
                    {PERSONAL_INFO.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <p className="text-gray-600 font-medium">Professional Photo</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full opacity-80"></div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-xl flex items-center justify-center text-2xl group-hover:bg-blue-200 transition-colors">
              {feature.icon}
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              {feature.title}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default About;
