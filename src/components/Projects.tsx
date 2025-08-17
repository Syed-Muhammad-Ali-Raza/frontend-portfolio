import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../data/portfolio';
import Section from './ui/Section';
import Button from './ui/Button';
import Icon from './ui/Icon';

interface ProjectFilter {
  id: string;
  label: string;
  category: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters: ProjectFilter[] = [
    { id: 'all', label: 'All Projects', category: 'all' },
    { id: 'frontend', label: 'Frontend', category: 'frontend' }
  ];

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return PROJECTS;
    }
    return PROJECTS.filter(project => project.category === activeFilter);
  }, [activeFilter]);

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
  };

  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="Some of my recent work and personal projects"
      className="bg-gray-50"
    >
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? 'primary' : 'outline'}
            size="sm"
            onClick={() => handleFilterChange(filter.id)}
            className="transition-all duration-200"
          >
            {filter.label}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
                     <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
             <Icon name="FileText" size={32} className="text-gray-400" />
           </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No projects found</h3>
          <p className="text-gray-600">Try selecting a different category to see more projects.</p>
        </div>
      )}
    </Section>
  );
};

// Project Card Component
interface ProjectCardProps {
  project: typeof PROJECTS[0];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
        <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center">
          <Icon
            name={(
              project.imageUrl.includes('ecommerce') ? 'ShoppingCart' :
              project.imageUrl.includes('task') ? 'CheckSquare' :
              project.imageUrl.includes('weather') ? 'Cloud' :
              project.imageUrl.includes('portfolio') ? 'Briefcase' :
              project.imageUrl.includes('social') ? 'BarChart3' :
              project.imageUrl.includes('recipe') ? 'Utensils' : 'Code'
            ) as any}
            size={32}
            className="text-gray-600"
          />
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-medium">
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Project Links */}
        <div className="flex gap-3">
          <Button
            variant="primary"
            size="sm"
            onClick={() => window.open(project.liveUrl, '_blank')}
            className="flex-1 group"
          >
                         <Icon name="ExternalLink" size={16} className="mr-2" />
            Live Demo
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(project.githubUrl, '_blank')}
            className="flex-1"
          >
                         <Icon name="Github" size={16} className="mr-2" />
            Code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
