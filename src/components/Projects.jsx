import React, { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce application with shopping cart, product filtering, and responsive design.",
      image: "🛒",
      category: "fullstack",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with drag-and-drop functionality and real-time updates.",
      image: "📋",
      category: "frontend",
      technologies: ["React", "TypeScript", "Firebase"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application with location-based forecasts and interactive weather maps.",
      image: "🌤️",
      category: "frontend",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website with smooth animations and modern design.",
      image: "💼",
      category: "frontend",
      technologies: ["React", "Framer Motion", "Sass"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "A dashboard for managing social media accounts with analytics and scheduling features.",
      image: "📊",
      category: "frontend",
      technologies: ["Vue.js", "Chart.js", "Vuetify"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Recipe Finder",
      description: "A recipe discovery app with search, filtering, and favorite recipes functionality.",
      image: "🍳",
      category: "frontend",
      technologies: ["React", "Spoonacular API", "CSS Grid"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 7,
      title: "Music Player",
      description: "A web-based music player with playlist management and audio visualization.",
      image: "🎵",
      category: "frontend",
      technologies: ["JavaScript", "Web Audio API", "Canvas"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 8,
      title: "Quiz Application",
      description: "An interactive quiz app with multiple categories, scoring, and progress tracking.",
      image: "❓",
      category: "frontend",
      technologies: ["React", "Trivia API", "Local Storage"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 9,
      title: "Chat Application",
      description: "A real-time chat application with user authentication and message history.",
      image: "💬",
      category: "fullstack",
      technologies: ["React", "Firebase", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 10,
      title: "Blog Platform",
      description: "A content management system for creating and managing blog posts.",
      image: "📝",
      category: "frontend",
      technologies: ["Next.js", "Markdown", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 11,
      title: "Fitness Tracker",
      description: "A workout tracking app with exercise library and progress visualization.",
      image: "💪",
      category: "frontend",
      technologies: ["React", "Chart.js", "PWA"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 12,
      title: "Color Palette Generator",
      description: "A tool for generating and managing color palettes with accessibility features.",
      image: "🎨",
      category: "frontend",
      technologies: ["JavaScript", "Color Theory", "CSS Variables"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>

        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.liveUrl} className="project-link">
                    <span>🌐</span> Live Demo
                  </a>
                  <a href={project.githubUrl} className="project-link">
                    <span>📁</span> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
