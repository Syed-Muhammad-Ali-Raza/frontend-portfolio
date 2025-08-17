import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';

// Custom render function that includes providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything
export * from '@testing-library/react';

// Override render method
export { customRender as render };

// Mock data for testing
export const mockPersonalInfo = {
  name: 'John Doe',
  title: 'Frontend Developer',
  email: 'john@example.com',
  phone: '+1 (555) 123-4567',
  location: 'New York, NY',
  bio: 'Passionate frontend developer with 5+ years of experience.',
  avatar: '/assets/avatar.jpg'
};

export const mockSkills = [
  {
    name: 'React',
    category: 'frontend' as const,
    proficiency: 90,
    icon: 'Atom'
  },
  {
    name: 'TypeScript',
    category: 'frontend' as const,
    proficiency: 85,
    icon: 'FileType'
  },
  {
    name: 'Node.js',
    category: 'backend' as const,
    proficiency: 80,
    icon: 'Server'
  }
];

export const mockProjects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with React and TypeScript.',
    imageUrl: '/assets/projects/portfolio.jpg',
    category: 'frontend' as const,
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://portfolio.example.com',
    githubUrl: 'https://github.com/example/portfolio',
    featured: true
  },
  {
    id: 2,
    title: 'E-commerce App',
    description: 'Full-stack e-commerce application with payment integration.',
    imageUrl: '/assets/projects/ecommerce.jpg',
    category: 'frontend' as const,
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://ecommerce.example.com',
    githubUrl: 'https://github.com/example/ecommerce',
    featured: false
  }
];

export const mockContactInfo = [
  {
    type: 'email' as const,
    value: 'test@example.com',
    link: 'mailto:test@example.com',
    icon: 'Mail'
  },
  {
    type: 'phone' as const,
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
    icon: 'Phone'
  },
  {
    type: 'location' as const,
    value: 'New York, NY',
    link: 'https://maps.google.com',
    icon: 'MapPin'
  }
];

export const mockSocialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/test',
    icon: 'Github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/test',
    icon: 'Linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/test',
    icon: 'Twitter'
  }
];

// Helper functions for testing
export const createMockEvent = (value: string) => ({
  target: { value, name: 'test' }
}) as React.ChangeEvent<HTMLInputElement>;

export const waitForLoadingToFinish = () => 
  new Promise(resolve => setTimeout(resolve, 0));

export const mockConsoleError = () => {
  const originalError = console.error;
  const mockError = vi.fn();
  console.error = mockError;
  return {
    mockError,
    restore: () => {
      console.error = originalError;
    }
  };
};

export const mockConsoleLog = () => {
  const originalLog = console.log;
  const mockLog = vi.fn();
  console.log = mockLog;
  return {
    mockLog,
    restore: () => {
      console.log = originalLog;
    }
  };
};
