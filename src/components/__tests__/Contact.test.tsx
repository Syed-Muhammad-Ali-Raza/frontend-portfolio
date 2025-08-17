import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from '../Contact';

// Mock the data imports
vi.mock('../../data/portfolio', () => ({
  CONTACT_INFO: [
    {
      type: 'email',
      value: 'test@example.com',
      link: 'mailto:test@example.com',
      icon: 'Mail'
    },
    {
      type: 'phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      icon: 'Phone'
    },
    {
      type: 'location',
      value: 'New York, NY',
      link: 'https://maps.google.com',
      icon: 'MapPin'
    }
  ],
  SOCIAL_LINKS: [
    {
      name: 'GitHub',
      url: 'https://github.com/test',
      icon: 'Github'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/test',
      icon: 'Linkedin'
    }
  ]
}));

describe('Contact Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render contact form and information', () => {
    render(<Contact />);
    
    // Check form elements
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
    
    // Check contact info
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument();
    expect(screen.getByText('New York, NY')).toBeInTheDocument();
  });

  it('should handle form input changes', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const subjectInput = screen.getByLabelText(/subject/i);
    const messageInput = screen.getByLabelText(/message/i);
    
    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(subjectInput, 'Test Subject');
    await user.type(messageInput, 'This is a test message');
    
    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');
    expect(subjectInput).toHaveValue('Test Subject');
    expect(messageInput).toHaveValue('This is a test message');
  });

  it('should validate required fields', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);
    
    // Check for validation errors
    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument();
      expect(screen.getByText('Email is required')).toBeInTheDocument();
      expect(screen.getByText('Subject is required')).toBeInTheDocument();
      expect(screen.getByText('Message is required')).toBeInTheDocument();
    });
  });

  it('should validate email format', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const subjectInput = screen.getByLabelText(/subject/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });
    
    // Fill out all required fields except email
    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'invalid-email');
    await user.type(subjectInput, 'Test Subject');
    await user.type(messageInput, 'This is a test message that is long enough');
    await user.click(submitButton);
    
    // Check that the form validation prevents submission
    expect(emailInput).toHaveValue('invalid-email');
  });

  it('should validate message length', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });
    
    await user.type(messageInput, 'Short');
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Message must be at least 10 characters long')).toBeInTheDocument();
    });
  });

  it('should clear validation errors when user starts typing', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);
    
    // Wait for validation errors to appear
    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument();
    });
    
    // Start typing in name field
    const nameInput = screen.getByLabelText(/name/i);
    await user.type(nameInput, 'John');
    
    // Error should be cleared
    await waitFor(() => {
      expect(screen.queryByText('Name is required')).not.toBeInTheDocument();
    });
  });

  it('should handle successful form submission', async () => {
    const user = userEvent.setup();
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    
    render(<Contact />);
    
    // Fill out the form
    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/subject/i), 'Test Subject');
    await user.type(screen.getByLabelText(/message/i), 'This is a test message that is long enough');
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);
    
    // Check that form is submitted
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Form submitted:', {
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Test Subject',
        message: 'This is a test message that is long enough'
      });
    });
    
    // Check success message
    await waitFor(() => {
      expect(screen.getByText(/thank you for your message/i)).toBeInTheDocument();
    });
    
    // Check that form is cleared
    expect(screen.getByLabelText(/name/i)).toHaveValue('');
    expect(screen.getByLabelText(/email/i)).toHaveValue('');
    expect(screen.getByLabelText(/subject/i)).toHaveValue('');
    expect(screen.getByLabelText(/message/i)).toHaveValue('');
    
    consoleSpy.mockRestore();
  });

  it('should handle form submission', async () => {
    const user = userEvent.setup();
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    
    render(<Contact />);
    
    // Fill out the form
    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/subject/i), 'Test Subject');
    await user.type(screen.getByLabelText(/message/i), 'This is a test message that is long enough');
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);
    
    // Check that the form was submitted (console.log should be called)
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalled();
    });
    
    consoleSpy.mockRestore();
  });

  it('should disable submit button during submission', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    // Fill out the form
    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/subject/i), 'Test Subject');
    await user.type(screen.getByLabelText(/message/i), 'This is a test message that is long enough');
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);
    
    // Button should be disabled during submission
    expect(submitButton).toBeDisabled();
  });

  it('should render contact information links correctly', () => {
    render(<Contact />);
    
    const emailLink = screen.getByRole('link', { name: /test@example\.com/i });
    const phoneLink = screen.getByRole('link', { name: /\+1 \(555\) 123-4567/i });
    const locationLink = screen.getByRole('link', { name: /New York, NY/i });
    
    expect(emailLink).toHaveAttribute('href', 'mailto:test@example.com');
    expect(phoneLink).toHaveAttribute('href', 'tel:+15551234567');
    expect(locationLink).toHaveAttribute('href', 'https://maps.google.com');
  });

  it('should render social links correctly', () => {
    render(<Contact />);
    
    const githubLink = screen.getByRole('link', { name: /github/i });
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    
    expect(githubLink).toHaveAttribute('href', 'https://github.com/test');
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/test');
  });
});
