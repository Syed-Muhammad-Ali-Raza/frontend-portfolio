import React, { useState } from 'react';
import { SKILLS } from '../data/portfolio';
import { getSkillCategoryName } from '../utils/helpers';
import { useTheme } from '../contexts/ThemeContext';
import Section from './ui/Section';
import Icon from './ui/Icon';

interface SkillCategory {
  id: string;
  label: string;
  skills: typeof SKILLS;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { isDark } = useTheme();

  // Group skills by category
  const skillCategories: SkillCategory[] = [
    {
      id: 'all',
      label: 'All Skills',
      skills: SKILLS
    },
    {
      id: 'frontend',
      label: 'Frontend Development',
      skills: SKILLS.filter(skill => skill.category === 'frontend')
    },
    {
      id: 'backend',
      label: 'Backend Development',
      skills: SKILLS.filter(skill => skill.category === 'backend')
    },
    {
      id: 'tools',
      label: 'Development Tools',
      skills: SKILLS.filter(skill => skill.category === 'tools')
    },
    {
      id: 'design',
      label: 'Design Tools',
      skills: SKILLS.filter(skill => skill.category === 'design')
    }
  ];

  const currentSkills = skillCategories.find(cat => cat.id === activeCategory)?.skills || SKILLS;

  const highlights = [
    {
      icon: "Palette",
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with modern design principles"
    },
    {
      icon: "Smartphone",
      title: "Responsive Design",
      description: "Building applications that work seamlessly across all devices and screen sizes"
    },
    {
      icon: "Zap",
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and excellent user experience"
    },
    {
      icon: "Shield",
      title: "Security",
      description: "Implementing best practices to ensure secure and reliable applications"
    }
  ];

  return (
    <Section
      id="skills"
      title="Skills & Expertise"
      subtitle="Technologies I work with"
      className={isDark ? 'bg-gray-900' : 'bg-gray-50'}
    >
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {skillCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              activeCategory === category.id
                ? 'bg-blue-600 text-white shadow-lg'
                : isDark
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {currentSkills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>

      {/* Skills Highlights */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map((highlight, index) => (
          <div key={index} className="text-center group">
            <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center transition-colors ${
              isDark 
                ? 'bg-blue-900/20 group-hover:bg-blue-900/30' 
                : 'bg-blue-100 group-hover:bg-blue-200'
            }`}>
              <Icon
                name={highlight.icon as any}
                size={32}
                className="text-blue-600"
              />
            </div>
            <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {highlight.title}
            </h4>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {highlight.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

// Skill Card Component
interface SkillCardProps {
  skill: typeof SKILLS[0];
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const { isDark } = useTheme();
  const getProficiencyColor = (level: number) => {
    if (level >= 90) return 'text-green-600';
    if (level >= 80) return 'text-blue-600';
    if (level >= 70) return 'text-yellow-600';
    return 'text-gray-600';
  };

  const getProficiencyLabel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${isDark ? 'shadow-soft-dark' : 'shadow-soft'}`}>
      <div className="flex items-center space-x-4 mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <Icon
            name={skill.icon as any}
            size={24}
            className={isDark ? 'text-gray-300' : 'text-gray-600'}
          />
        </div>
        <div className="flex-1">
          <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{skill.name}</h3>
          <p className={`text-sm font-medium ${getProficiencyColor(skill.proficiency)}`}>
            {getProficiencyLabel(skill.proficiency)}
          </p>
        </div>
        <div className="text-right">
          <div className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{skill.proficiency}%</div>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className={`w-full rounded-full h-2 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
        <div
          className={`h-2 rounded-full transition-all duration-1000 ease-out ${
            skill.proficiency >= 90 ? 'bg-green-500' :
            skill.proficiency >= 80 ? 'bg-blue-500' :
            skill.proficiency >= 70 ? 'bg-yellow-500' : 'bg-gray-400'
          }`}
          style={{ width: `${skill.proficiency}%` }}
        />
      </div>
      
      {/* Category Badge */}
      <div className="mt-3">
        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
          isDark 
            ? 'bg-blue-900/30 text-blue-300' 
            : 'bg-blue-100 text-blue-800'
        }`}>
          {getSkillCategoryName(skill.category)}
        </span>
      </div>
    </div>
  );
};

export default Skills;
