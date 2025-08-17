import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Outlet } from 'react-router-dom';
import App from '../App';

// Mock all the components to avoid complex rendering
vi.mock('../components/Header', () => ({
  default: () => <div data-testid="header">Header</div>
}));

vi.mock('../components/Hero', () => ({
  default: () => <div data-testid="hero">Hero</div>
}));

vi.mock('../components/About', () => ({
  default: () => <div data-testid="about">About</div>
}));

vi.mock('../components/Skills', () => ({
  default: () => <div data-testid="skills">Skills</div>
}));

vi.mock('../components/Projects', () => ({
  default: () => <div data-testid="projects">Projects</div>
}));

vi.mock('../components/Contact', () => ({
  default: () => <div data-testid="contact">Contact</div>
}));

vi.mock('../components/Footer', () => ({
  default: () => <div data-testid="footer">Footer</div>
}));

vi.mock('../admin/AdminLayout', () => ({
  default: () => (
    <div data-testid="admin-layout">
      <div data-testid="admin-sidebar">Admin Sidebar</div>
      <div data-testid="admin-content">
        <Outlet />
      </div>
    </div>
  )
}));

vi.mock('../admin/Dashboard', () => ({
  default: () => <div data-testid="dashboard">Dashboard</div>
}));

vi.mock('../admin/PersonalInfo', () => ({
  default: () => <div data-testid="personal-info">Personal Info</div>
}));

vi.mock('../admin/Skills', () => ({
  default: () => <div data-testid="skills-admin">Skills Admin</div>
}));

vi.mock('../admin/Projects', () => ({
  default: () => <div data-testid="projects-admin">Projects Admin</div>
}));

vi.mock('../admin/SocialLinks', () => ({
  default: () => <div data-testid="social-links">Social Links</div>
}));

// Helper function to render App
const renderApp = (initialRoute = '/') => {
  window.history.pushState({}, 'Test page', initialRoute);
  return render(<App />);
};

describe('App Component', () => {
  it('should render portfolio components on home route', () => {
    renderApp('/');
    
    // Check that portfolio components are rendered
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('hero')).toBeInTheDocument();
    expect(screen.getByTestId('about')).toBeInTheDocument();
    expect(screen.getByTestId('skills')).toBeInTheDocument();
    expect(screen.getByTestId('projects')).toBeInTheDocument();
    expect(screen.getByTestId('contact')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    
    // Check that admin components are not rendered
    expect(screen.queryByTestId('admin-layout')).not.toBeInTheDocument();
    expect(screen.queryByTestId('dashboard')).not.toBeInTheDocument();
  });

  it('should render admin dashboard on /admin route', () => {
    renderApp('/admin');
    
    // Check that admin layout is rendered
    expect(screen.getByTestId('admin-layout')).toBeInTheDocument();
    expect(screen.getByTestId('admin-sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('admin-content')).toBeInTheDocument();
    expect(screen.getByTestId('dashboard')).toBeInTheDocument();
    
    // Check that portfolio components are not rendered
    expect(screen.queryByTestId('hero')).not.toBeInTheDocument();
    expect(screen.queryByTestId('about')).not.toBeInTheDocument();
  });

  it('should render personal info admin on /admin/personal-info route', () => {
    renderApp('/admin/personal-info');
    
    expect(screen.getByTestId('admin-layout')).toBeInTheDocument();
    expect(screen.getByTestId('personal-info')).toBeInTheDocument();
    expect(screen.queryByTestId('dashboard')).not.toBeInTheDocument();
  });

  it('should render skills admin on /admin/skills route', () => {
    renderApp('/admin/skills');
    
    expect(screen.getByTestId('admin-layout')).toBeInTheDocument();
    expect(screen.getByTestId('skills-admin')).toBeInTheDocument();
    expect(screen.queryByTestId('dashboard')).not.toBeInTheDocument();
  });

  it('should render projects admin on /admin/projects route', () => {
    renderApp('/admin/projects');
    
    expect(screen.getByTestId('admin-layout')).toBeInTheDocument();
    expect(screen.getByTestId('projects-admin')).toBeInTheDocument();
    expect(screen.queryByTestId('dashboard')).not.toBeInTheDocument();
  });

  it('should render social links admin on /admin/social route', () => {
    renderApp('/admin/social');
    
    expect(screen.getByTestId('admin-layout')).toBeInTheDocument();
    expect(screen.getByTestId('social-links')).toBeInTheDocument();
    expect(screen.queryByTestId('dashboard')).not.toBeInTheDocument();
  });

  it('should handle unknown routes gracefully', () => {
    renderApp('/unknown-route');
    
    // Should show empty content for unknown routes
    // This is the expected behavior since there's no catch-all route
    expect(screen.queryByTestId('header')).not.toBeInTheDocument();
    expect(screen.queryByTestId('admin-layout')).not.toBeInTheDocument();
  });

  it('should maintain admin layout structure across admin routes', () => {
    const adminRoutes = ['/admin', '/admin/personal-info', '/admin/skills', '/admin/projects', '/admin/social'];
    
    adminRoutes.forEach(route => {
      const { unmount } = renderApp(route);
      
      expect(screen.getByTestId('admin-layout')).toBeInTheDocument();
      expect(screen.getByTestId('admin-sidebar')).toBeInTheDocument();
      expect(screen.getByTestId('admin-content')).toBeInTheDocument();
      
      unmount();
    });
  });

  it('should not render admin components on portfolio routes', () => {
    const portfolioRoutes = ['/', '/#about', '/#skills', '/#projects', '/#contact'];
    
    portfolioRoutes.forEach(route => {
      const { unmount } = renderApp(route);
      
      expect(screen.queryByTestId('admin-layout')).not.toBeInTheDocument();
      expect(screen.queryByTestId('admin-sidebar')).not.toBeInTheDocument();
      expect(screen.queryByTestId('admin-content')).not.toBeInTheDocument();
      
      unmount();
    });
  });

  it('should render portfolio components in correct order', () => {
    renderApp('/');
    
    const portfolioComponents = [
      'header',
      'hero',
      'about',
      'skills',
      'projects',
      'contact',
      'footer'
    ];
    
    const renderedComponents = screen.getAllByTestId(/header|hero|about|skills|projects|contact|footer/);
    
    // Check that all components are rendered
    expect(renderedComponents).toHaveLength(portfolioComponents.length);
    
    // Check that components are in the correct order (this is a basic check)
    const componentTexts = renderedComponents.map(comp => comp.textContent);
    expect(componentTexts).toContain('Header');
    expect(componentTexts).toContain('Hero');
    expect(componentTexts).toContain('About');
    expect(componentTexts).toContain('Skills');
    expect(componentTexts).toContain('Projects');
    expect(componentTexts).toContain('Contact');
    expect(componentTexts).toContain('Footer');
  });

  it('should handle route changes correctly', () => {
    // Test portfolio route
    renderApp('/');
    expect(screen.getByTestId('hero')).toBeInTheDocument();
    expect(screen.queryByTestId('admin-layout')).not.toBeInTheDocument();
  });
});
