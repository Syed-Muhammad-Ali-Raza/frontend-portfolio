import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolio';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'frontend';
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(PROJECTS);
  const [isAdding, setIsAdding] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const [newProject, setNewProject] = useState<Omit<Project, 'id'>>({
    title: '',
    description: '',
    imageUrl: '',
    category: 'frontend',
    technologies: [],
    liveUrl: '',
    githubUrl: '',
    featured: false
  });

  const [newTechnology, setNewTechnology] = useState('');

  const handleAddProject = () => {
    if (newProject.title.trim() && newProject.description.trim()) {
      const project: Project = {
        ...newProject,
        id: Date.now()
      };
      setProjects(prev => [...prev, project]);
      setNewProject({
        title: '',
        description: '',
        imageUrl: '',
        category: 'frontend',
        technologies: [],
        liveUrl: '',
        githubUrl: '',
        featured: false
      });
      setIsAdding(false);
    }
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
  };

  const handleSaveEdit = () => {
    if (editingProject && editingProject.title.trim() && editingProject.description.trim()) {
      setProjects(prev => prev.map(project => 
        project.id === editingProject.id ? editingProject : project
      ));
      setEditingProject(null);
    }
  };

  const handleDeleteProject = (id: number) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(prev => prev.filter(project => project.id !== id));
    }
  };

  const handleAddTechnology = (projectId: number) => {
    if (newTechnology.trim()) {
      setProjects(prev => prev.map(project => 
        project.id === projectId 
          ? { ...project, technologies: [...project.technologies, newTechnology.trim()] }
          : project
      ));
      setNewTechnology('');
    }
  };

  const handleRemoveTechnology = (projectId: number, techIndex: number) => {
    setProjects(prev => prev.map(project => 
      project.id === projectId 
        ? { ...project, technologies: project.technologies.filter((_, index) => index !== techIndex) }
        : project
    ));
  };

  const handleSaveAll = async () => {
    setIsSaving(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Saving projects:', projects);
      alert('Projects saved successfully!');
    } catch (error) {
      console.error('Save error:', error);
      alert('Error saving projects');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects Management</h1>
          <p className="text-gray-600">Manage your portfolio projects</p>
        </div>
        <Button
          variant="primary"
          onClick={handleSaveAll}
          disabled={isSaving}
        >
          {isSaving ? (
            <>
              <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Icon name="Save" size={16} className="mr-2" />
              Save All Changes
            </>
          )}
        </Button>
      </div>

      {/* Add New Project */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Add New Project</h2>
          <Button
            variant="outline"
            onClick={() => setIsAdding(!isAdding)}
          >
            {isAdding ? (
              <>
                <Icon name="X" size={16} className="mr-2" />
                Cancel
              </>
            ) : (
              <>
                <Icon name="Plus" size={16} className="mr-2" />
                Add Project
              </>
            )}
          </Button>
        </div>

        {isAdding && (
          <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Project title"
                value={newProject.title}
                onChange={(e) => setNewProject(prev => ({ ...prev, title: e.target.value }))}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              
              <input
                type="url"
                placeholder="Image URL"
                value={newProject.imageUrl}
                onChange={(e) => setNewProject(prev => ({ ...prev, imageUrl: e.target.value }))}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <textarea
              placeholder="Project description"
              value={newProject.description}
              onChange={(e) => setNewProject(prev => ({ ...prev, description: e.target.value }))}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 resize-none"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="url"
                placeholder="Live demo URL"
                value={newProject.liveUrl}
                onChange={(e) => setNewProject(prev => ({ ...prev, liveUrl: e.target.value }))}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              
              <input
                type="url"
                placeholder="GitHub URL"
                value={newProject.githubUrl}
                onChange={(e) => setNewProject(prev => ({ ...prev, githubUrl: e.target.value }))}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={newProject.featured}
                  onChange={(e) => setNewProject(prev => ({ ...prev, featured: e.target.checked }))}
                  className="mr-2"
                />
                <span className="text-sm">Featured Project</span>
              </label>
            </div>

            <div className="flex justify-end">
              <Button
                variant="primary"
                onClick={handleAddProject}
                disabled={!newProject.title.trim() || !newProject.description.trim()}
              >
                <Icon name="Plus" size={16} className="mr-2" />
                Add Project
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Projects List */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Current Projects ({projects.length})</h2>
        </div>
        
        <div className="divide-y divide-gray-200">
          {projects.map((project) => (
            <div key={project.id} className="p-6">
              {editingProject?.id === project.id ? (
                // Edit Mode
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Project title"
                      value={editingProject.title}
                      onChange={(e) => setEditingProject(prev => prev ? { ...prev, title: e.target.value } : null)}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                    
                    <input
                      type="url"
                      placeholder="Image URL"
                      value={editingProject.imageUrl}
                      onChange={(e) => setEditingProject(prev => prev ? { ...prev, imageUrl: e.target.value } : null)}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <textarea
                    placeholder="Project description"
                    value={editingProject.description}
                    onChange={(e) => setEditingProject(prev => prev ? { ...prev, description: e.target.value } : null)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 resize-none"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="url"
                      placeholder="Live demo URL"
                      value={editingProject.liveUrl}
                      onChange={(e) => setEditingProject(prev => prev ? { ...prev, liveUrl: e.target.value } : null)}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                    
                    <input
                      type="url"
                      placeholder="GitHub URL"
                      value={editingProject.githubUrl}
                      onChange={(e) => setEditingProject(prev => prev ? { ...prev, githubUrl: e.target.value } : null)}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={editingProject.featured}
                        onChange={(e) => setEditingProject(prev => prev ? { ...prev, featured: e.target.checked } : null)}
                        className="mr-2"
                      />
                      <span className="text-sm">Featured Project</span>
                    </label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleSaveEdit}
                      disabled={!editingProject.title.trim() || !editingProject.description.trim()}
                    >
                      <Icon name="Check" size={14} className="mr-2" />
                      Save
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setEditingProject(null)}
                    >
                      <Icon name="X" size={14} className="mr-2" />
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                // View Mode
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        {project.featured && (
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-2">{project.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>Category: {project.category}</span>
                        <span>Technologies: {project.technologies.length}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditProject(project)}
                      >
                        <Icon name="Edit" size={14} className="mr-2" />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteProject(project.id)}
                      >
                        <Icon name="Trash2" size={14} className="mr-2" />
                        Delete
                      </Button>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md flex items-center"
                        >
                          {tech}
                          <button
                            onClick={() => handleRemoveTechnology(project.id, index)}
                            className="ml-1 text-blue-600 hover:text-blue-800"
                          >
                            <Icon name="X" size={12} />
                          </button>
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        placeholder="Add technology"
                        value={newTechnology}
                        onChange={(e) => setNewTechnology(e.target.value)}
                        className="px-2 py-1 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleAddTechnology(project.id)}
                        disabled={!newTechnology.trim()}
                      >
                        <Icon name="Plus" size={12} />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
