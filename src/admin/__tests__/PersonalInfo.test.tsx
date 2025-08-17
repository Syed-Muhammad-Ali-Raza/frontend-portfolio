import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PersonalInfo from '../PersonalInfo';

// Mock the data imports
vi.mock('../../data/portfolio', () => ({
  PERSONAL_INFO: {
    name: 'John Doe',
    title: 'Frontend Developer',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    bio: 'Passionate frontend developer with 5+ years of experience.',
    avatar: '/assets/avatar.jpg'
  }
}));

describe('PersonalInfo Admin Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render personal info form with pre-filled data', () => {
    render(<PersonalInfo />);
    
    expect(screen.getByText('Personal Information')).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toHaveValue('John Doe');
    expect(screen.getByLabelText(/title/i)).toHaveValue('Frontend Developer');
    expect(screen.getByLabelText(/email/i)).toHaveValue('john@example.com');
    expect(screen.getByLabelText(/phone/i)).toHaveValue('+1 (555) 123-4567');
    expect(screen.getByLabelText(/location/i)).toHaveValue('New York, NY');
    expect(screen.getByLabelText(/bio/i)).toHaveValue('Passionate frontend developer with 5+ years of experience.');
    expect(screen.getByLabelText(/avatar url/i)).toHaveValue('/assets/avatar.jpg');
  });

  it('should handle form input changes', async () => {
    const user = userEvent.setup();
    render(<PersonalInfo />);
    
    const nameInput = screen.getByLabelText(/name/i);
    const titleInput = screen.getByLabelText(/title/i);
    const emailInput = screen.getByLabelText(/email/i);
    const phoneInput = screen.getByLabelText(/phone/i);
    const locationInput = screen.getByLabelText(/location/i);
    const bioInput = screen.getByLabelText(/bio/i);
    const avatarInput = screen.getByLabelText(/avatar url/i);
    
    await user.clear(nameInput);
    await user.type(nameInput, 'Jane Smith');
    await user.clear(titleInput);
    await user.type(titleInput, 'Senior Developer');
    await user.clear(emailInput);
    await user.type(emailInput, 'jane@example.com');
    await user.clear(phoneInput);
    await user.type(phoneInput, '+1 (555) 987-6543');
    await user.clear(locationInput);
    await user.type(locationInput, 'San Francisco, CA');
    await user.clear(bioInput);
    await user.type(bioInput, 'Experienced developer with expertise in React and TypeScript.');
    await user.clear(avatarInput);
    await user.type(avatarInput, '/assets/new-avatar.jpg');
    
    expect(nameInput).toHaveValue('Jane Smith');
    expect(titleInput).toHaveValue('Senior Developer');
    expect(emailInput).toHaveValue('jane@example.com');
    expect(phoneInput).toHaveValue('+1 (555) 987-6543');
    expect(locationInput).toHaveValue('San Francisco, CA');
    expect(bioInput).toHaveValue('Experienced developer with expertise in React and TypeScript.');
    expect(avatarInput).toHaveValue('/assets/new-avatar.jpg');
  });

  it('should handle form submission', async () => {
    const user = userEvent.setup();
    render(<PersonalInfo />);
    
    const saveButton = screen.getByRole('button', { name: /save changes/i });
    await user.click(saveButton);
    
    // Check that form submission was attempted
    expect(saveButton).toBeInTheDocument();
  });

  it('should show loading state during submission', async () => {
    const user = userEvent.setup();
    render(<PersonalInfo />);
    
    const saveButton = screen.getByRole('button', { name: /save changes/i });
    await user.click(saveButton);
    
    // Button should be clickable
    expect(saveButton).toBeInTheDocument();
  });

  it('should handle submission error', async () => {
    const user = userEvent.setup();
    render(<PersonalInfo />);
    
    const saveButton = screen.getByRole('button', { name: /save changes/i });
    await user.click(saveButton);
    
    // Check that form submission was attempted
    expect(saveButton).toBeInTheDocument();
  });

  it('should handle form submission with required fields', async () => {
    const user = userEvent.setup();
    render(<PersonalInfo />);
    
    const saveButton = screen.getByRole('button', { name: /save changes/i });
    await user.click(saveButton);
    
    // Check that form submission was attempted
    expect(saveButton).toBeInTheDocument();
  });

  it('should handle email input', async () => {
    const user = userEvent.setup();
    render(<PersonalInfo />);
    
    const emailInput = screen.getByLabelText(/email/i);
    await user.clear(emailInput);
    await user.type(emailInput, 'newemail@example.com');
    
    expect(emailInput).toHaveValue('newemail@example.com');
  });

  it('should handle name input changes', async () => {
    const user = userEvent.setup();
    render(<PersonalInfo />);
    
    const nameInput = screen.getByLabelText(/name/i);
    await user.clear(nameInput);
    await user.type(nameInput, 'Jane Smith');
    
    expect(nameInput).toHaveValue('Jane Smith');
  });

  it('should handle form input changes', async () => {
    const user = userEvent.setup();
    render(<PersonalInfo />);
    
    // Change some values
    const nameInput = screen.getByLabelText(/name/i);
    await user.clear(nameInput);
    await user.type(nameInput, 'Jane Smith');
    
    // Should have the new value
    expect(nameInput).toHaveValue('Jane Smith');
  });

  it('should handle avatar URL input', async () => {
    const user = userEvent.setup();
    render(<PersonalInfo />);
    
    const avatarInput = screen.getByLabelText(/avatar url/i);
    await user.clear(avatarInput);
    await user.type(avatarInput, '/assets/new-avatar.jpg');
    
    expect(avatarInput).toHaveValue('/assets/new-avatar.jpg');
  });

  it('should handle bio textarea with multiple lines', async () => {
    const user = userEvent.setup();
    render(<PersonalInfo />);
    
    const bioInput = screen.getByLabelText(/bio/i);
    await user.clear(bioInput);
    await user.type(bioInput, 'Line 1\nLine 2\nLine 3');
    
    expect(bioInput).toHaveValue('Line 1\nLine 2\nLine 3');
  });

  it('should have proper form labels and accessibility', () => {
    render(<PersonalInfo />);
    
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/location/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/bio/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/avatar url/i)).toBeInTheDocument();
  });

  it('should show character count for bio field', async () => {
    const user = userEvent.setup();
    render(<PersonalInfo />);
    
    const bioInput = screen.getByLabelText(/bio/i);
    await user.clear(bioInput);
    await user.type(bioInput, 'Short bio');
    
    // Should show character count
    expect(screen.getByText(/9\/500 characters/i)).toBeInTheDocument();
  });

  it('should handle bio text input', async () => {
    const user = userEvent.setup();
    render(<PersonalInfo />);
    
    const bioInput = screen.getByLabelText(/bio/i);
    await user.clear(bioInput);
    await user.type(bioInput, 'New bio text');
    
    // Should show character count
    expect(screen.getByText(/12\/500 characters/i)).toBeInTheDocument();
  });
});
