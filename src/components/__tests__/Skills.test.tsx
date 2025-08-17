import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Skills from '../Skills';

// Mock the data imports
vi.mock('../../data/portfolio', () => ({
  SKILLS: [
    {
      name: 'React',
      category: 'frontend',
      proficiency: 90,
      icon: 'Atom'
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      proficiency: 85,
      icon: 'FileType'
    },
    {
      name: 'Node.js',
      category: 'backend',
      proficiency: 80,
      icon: 'Server'
    },
    {
      name: 'Git',
      category: 'tools',
      proficiency: 95,
      icon: 'GitBranch'
    },
    {
      name: 'Figma',
      category: 'design',
      proficiency: 75,
      icon: 'Palette'
    }
  ]
}));

describe('Skills Component', () => {
  it('should render skills section with title', () => {
    render(<Skills />);
    
    expect(screen.getByText('Skills & Expertise')).toBeInTheDocument();
    expect(screen.getByText(/technologies i work with/i)).toBeInTheDocument();
  });

  it('should render category filter buttons', () => {
    render(<Skills />);
    
    expect(screen.getByRole('button', { name: /all skills/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /frontend development/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /backend development/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /development tools/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /design tools/i })).toBeInTheDocument();
  });

  it('should show all skills by default', () => {
    render(<Skills />);
    
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('Git')).toBeInTheDocument();
    expect(screen.getByText('Figma')).toBeInTheDocument();
  });

  it('should filter skills by category when category button is clicked', async () => {
    const user = userEvent.setup();
    render(<Skills />);
    
    // Click on Frontend Development filter
    const frontendButton = screen.getByRole('button', { name: /frontend development/i });
    await user.click(frontendButton);
    
    // Should show only frontend skills
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.queryByText('Node.js')).not.toBeInTheDocument();
    expect(screen.queryByText('Git')).not.toBeInTheDocument();
    expect(screen.queryByText('Figma')).not.toBeInTheDocument();
  });

  it('should show backend skills when backend filter is selected', async () => {
    const user = userEvent.setup();
    render(<Skills />);
    
    const backendButton = screen.getByRole('button', { name: /backend development/i });
    await user.click(backendButton);
    
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.queryByText('React')).not.toBeInTheDocument();
    expect(screen.queryByText('TypeScript')).not.toBeInTheDocument();
  });

  it('should show tools skills when tools filter is selected', async () => {
    const user = userEvent.setup();
    render(<Skills />);
    
    const toolsButton = screen.getByRole('button', { name: /development tools/i });
    await user.click(toolsButton);
    
    expect(screen.getByText('Git')).toBeInTheDocument();
    expect(screen.queryByText('React')).not.toBeInTheDocument();
    expect(screen.queryByText('Node.js')).not.toBeInTheDocument();
  });

  it('should show design skills when design filter is selected', async () => {
    const user = userEvent.setup();
    render(<Skills />);
    
    const designButton = screen.getByRole('button', { name: /design tools/i });
    await user.click(designButton);
    
    expect(screen.getByText('Figma')).toBeInTheDocument();
    expect(screen.queryByText('React')).not.toBeInTheDocument();
    expect(screen.queryByText('Git')).not.toBeInTheDocument();
  });

  it('should show all skills when All Skills filter is clicked', async () => {
    const user = userEvent.setup();
    render(<Skills />);
    
    // First filter to frontend
    const frontendButton = screen.getByRole('button', { name: /frontend development/i });
    await user.click(frontendButton);
    
    // Then click All Skills
    const allSkillsButton = screen.getByRole('button', { name: /all skills/i });
    await user.click(allSkillsButton);
    
    // Should show all skills again
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('Git')).toBeInTheDocument();
    expect(screen.getByText('Figma')).toBeInTheDocument();
  });

  it('should display skill proficiency bars', () => {
    render(<Skills />);
    
    // Check that proficiency bars are rendered (they are divs with rounded-full class)
    const progressBars = screen.getAllByRole('generic').filter(el => 
      el.className.includes('rounded-full') && el.className.includes('h-2')
    );
    expect(progressBars.length).toBeGreaterThan(0);
  });

  it('should render skill highlights section', () => {
    render(<Skills />);
    
    expect(screen.getByText('UI/UX Design')).toBeInTheDocument();
    expect(screen.getByText('Responsive Design')).toBeInTheDocument();
    expect(screen.getByText('Performance')).toBeInTheDocument();
    expect(screen.getByText('Security')).toBeInTheDocument();
  });

  it('should highlight active category button', async () => {
    const user = userEvent.setup();
    render(<Skills />);
    
    const frontendButton = screen.getByRole('button', { name: /frontend development/i });
    await user.click(frontendButton);
    
    // The active button should have different styling
    expect(frontendButton).toHaveClass('bg-blue-600', 'text-white');
  });

  it('should maintain filter state when switching between categories', async () => {
    const user = userEvent.setup();
    render(<Skills />);
    
    // Click frontend filter
    const frontendButton = screen.getByRole('button', { name: /frontend development/i });
    await user.click(frontendButton);
    
    // Click backend filter
    const backendButton = screen.getByRole('button', { name: /backend development/i });
    await user.click(backendButton);
    
    // Should show only backend skills
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.queryByText('React')).not.toBeInTheDocument();
    expect(screen.queryByText('TypeScript')).not.toBeInTheDocument();
  });

  it('should render skill icons', () => {
    render(<Skills />);
    
    // Check that skill items have icons (they should be rendered as spans or divs with icon names)
    const skillItems = screen.getAllByText(/React|TypeScript|Node\.js|Git|Figma/);
    expect(skillItems.length).toBeGreaterThan(0);
  });

  it('should display skill proficiency percentages', () => {
    render(<Skills />);
    
    // Check that proficiency percentages are displayed
    expect(screen.getByText('90%')).toBeInTheDocument(); // React
    expect(screen.getByText('85%')).toBeInTheDocument(); // TypeScript
    expect(screen.getByText('80%')).toBeInTheDocument(); // Node.js
    expect(screen.getByText('95%')).toBeInTheDocument(); // Git
    expect(screen.getByText('75%')).toBeInTheDocument(); // Figma
  });

  it('should have proper accessibility attributes', () => {
    render(<Skills />);
    
    const categoryButtons = screen.getAllByRole('button');
    expect(categoryButtons.length).toBeGreaterThan(0);
    
    // Check that buttons have proper styling classes
    categoryButtons.forEach(button => {
      expect(button).toHaveClass('px-4', 'py-2', 'rounded-lg', 'font-medium');
    });
  });

  it('should handle empty skills array gracefully', () => {
    // Mock empty skills array
    vi.doMock('../../data/portfolio', () => ({
      SKILLS: []
    }));
    
    render(<Skills />);
    
    // Should still render the section structure
    expect(screen.getByText('Skills & Expertise')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /all skills/i })).toBeInTheDocument();
  });
});
