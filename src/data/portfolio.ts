import { Project, Skill, ContactInfo, SocialLink, NavigationItem } from '../types';

// Personal Information
export const PERSONAL_INFO = {
  name: 'John Doe',
  title: 'Frontend Developer',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  bio: 'Passionate frontend developer with 3+ years of experience creating beautiful, responsive, and accessible web applications. Specialized in React, TypeScript, and modern CSS frameworks.',
  avatar: '/assets/avatar.jpg'
};

// Navigation
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' }
];

// Skills Data - Frontend Focus Only
export const SKILLS: Skill[] = [
  // Core Frontend Technologies
  { name: 'HTML5', category: 'frontend', proficiency: 98, icon: 'FileCode' },
  { name: 'CSS3', category: 'frontend', proficiency: 95, icon: 'Palette' },
  { name: 'JavaScript', category: 'frontend', proficiency: 92, icon: 'Code' },
  { name: 'TypeScript', category: 'frontend', proficiency: 88, icon: 'FileType' },
  
  // Frontend Frameworks & Libraries
  { name: 'React', category: 'frontend', proficiency: 90, icon: 'Atom' },
  { name: 'Next.js', category: 'frontend', proficiency: 85, icon: 'ArrowRight' },
  { name: 'Vue.js', category: 'frontend', proficiency: 80, icon: 'Circle' },
  { name: 'Svelte', category: 'frontend', proficiency: 75, icon: 'Zap' },
  
  // CSS Frameworks & Preprocessors
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 90, icon: 'Wind' },
  { name: 'Sass/SCSS', category: 'frontend', proficiency: 85, icon: 'Scissors' },
  { name: 'Styled Components', category: 'frontend', proficiency: 80, icon: 'Component' },
  { name: 'CSS Modules', category: 'frontend', proficiency: 85, icon: 'Layers' },
  
  // State Management & Data Fetching
  { name: 'Redux Toolkit', category: 'frontend', proficiency: 85, icon: 'Database' },
  { name: 'Zustand', category: 'frontend', proficiency: 80, icon: 'Package' },
  { name: 'React Query', category: 'frontend', proficiency: 75, icon: 'RefreshCw' },
  { name: 'SWR', category: 'frontend', proficiency: 70, icon: 'RotateCcw' },
  
  // Build Tools & Development
  { name: 'Vite', category: 'tools', proficiency: 85, icon: 'Zap' },
  { name: 'Webpack', category: 'tools', proficiency: 75, icon: 'Package' },
  { name: 'Git', category: 'tools', proficiency: 90, icon: 'GitBranch' },
  { name: 'ESLint', category: 'tools', proficiency: 80, icon: 'CheckCircle' },
  
  // Testing
  { name: 'Jest', category: 'tools', proficiency: 75, icon: 'TestTube' },
  { name: 'React Testing Library', category: 'tools', proficiency: 80, icon: 'Beaker' },
  { name: 'Cypress', category: 'tools', proficiency: 70, icon: 'Shield' },
  
  // Design & UI
  { name: 'Figma', category: 'design', proficiency: 80, icon: 'PenTool' },
  { name: 'Adobe XD', category: 'design', proficiency: 70, icon: 'Edit' },
  { name: 'Framer Motion', category: 'frontend', proficiency: 75, icon: 'Move' },
  { name: 'GSAP', category: 'frontend', proficiency: 65, icon: 'Play' }
];

// Projects Data - Frontend Focus Only
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Landing Page',
    description: 'A modern, responsive e-commerce landing page with product showcase, shopping cart, and smooth animations. Built with React, TypeScript, and Tailwind CSS.',
    imageUrl: '/assets/projects/ecommerce.jpg',
    category: 'frontend',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/johndoe/ecommerce-landing',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A beautiful task management application with drag-and-drop functionality, dark mode, and local storage persistence.',
    imageUrl: '/assets/projects/task-manager.jpg',
    category: 'frontend',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://task-manager-demo.com',
    githubUrl: 'https://github.com/johndoe/task-manager',
    featured: true
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather application with location-based forecasts, interactive charts, and beautiful weather icons.',
    imageUrl: '/assets/projects/weather.jpg',
    category: 'frontend',
    technologies: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API'],
    liveUrl: 'https://weather-dashboard.com',
    githubUrl: 'https://github.com/johndoe/weather-dashboard'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A modern portfolio website with smooth scroll animations, dark/light theme toggle, and responsive design.',
    imageUrl: '/assets/projects/portfolio.jpg',
    category: 'frontend',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://johndoe.dev',
    githubUrl: 'https://github.com/johndoe/portfolio'
  },
  {
    id: 5,
    title: 'Social Media Dashboard',
    description: 'A responsive dashboard for social media analytics with interactive charts and real-time data visualization.',
    imageUrl: '/assets/projects/social-dashboard.jpg',
    category: 'frontend',
    technologies: ['Vue.js', 'Chart.js', 'Vuetify', 'D3.js'],
    liveUrl: 'https://social-dashboard.com',
    githubUrl: 'https://github.com/johndoe/social-dashboard'
  },
  {
    id: 6,
    title: 'Recipe Finder',
    description: 'A recipe discovery app with search, filtering, and beautiful food photography. Features infinite scroll and responsive grid layout.',
    imageUrl: '/assets/projects/recipe-finder.jpg',
    category: 'frontend',
    technologies: ['React', 'TypeScript', 'Spoonacular API', 'CSS Grid'],
    liveUrl: 'https://recipe-finder.com',
    githubUrl: 'https://github.com/johndoe/recipe-finder'
  }
];

// Contact Information
export const CONTACT_INFO: ContactInfo[] = [
  {
    type: 'email',
    value: PERSONAL_INFO.email,
    link: `mailto:${PERSONAL_INFO.email}`,
    icon: 'Mail'
  },
  {
    type: 'phone',
    value: PERSONAL_INFO.phone,
    link: `tel:${PERSONAL_INFO.phone}`,
    icon: 'Phone'
  },
  {
    type: 'location',
    value: PERSONAL_INFO.location,
    link: '#',
    icon: 'MapPin'
  }
];

// Social Links
export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/johndoe', icon: 'Linkedin' },
  { name: 'GitHub', url: 'https://github.com/johndoe', icon: 'Github' },
  { name: 'Twitter', url: 'https://twitter.com/johndoe', icon: 'Twitter' },
  { name: 'Dribbble', url: 'https://dribbble.com/johndoe', icon: 'Dribbble' }
];
