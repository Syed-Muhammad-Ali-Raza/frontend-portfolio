import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  scrollToElement,
  isValidEmail,
  formatPhoneNumber,
  debounce,
  getSkillCategoryName,
  getProjectCategoryName,
} from '../helpers';

describe('Utility Functions', () => {
  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();
    
    // Mock document.getElementById
    document.getElementById = vi.fn();
    
    // Mock window.scrollTo
    window.scrollTo = vi.fn();
  });

  describe('scrollToElement', () => {
    it('should scroll to element when element exists', () => {
      const mockElement = {
        offsetTop: 100,
      };
      document.getElementById = vi.fn().mockReturnValue(mockElement as HTMLElement);

      scrollToElement('test-id');

      expect(document.getElementById).toHaveBeenCalledWith('test-id');
      expect(window.scrollTo).toHaveBeenCalledWith({
        top: 100,
        behavior: 'smooth',
      });
    });

    it('should scroll to element with offset', () => {
      const mockElement = {
        offsetTop: 100,
      };
      document.getElementById = vi.fn().mockReturnValue(mockElement as HTMLElement);

      scrollToElement('test-id', 20);

      expect(window.scrollTo).toHaveBeenCalledWith({
        top: 80,
        behavior: 'smooth',
      });
    });

    it('should not scroll when element does not exist', () => {
      document.getElementById = vi.fn().mockReturnValue(null);

      scrollToElement('non-existent-id');

      expect(document.getElementById).toHaveBeenCalledWith('non-existent-id');
      expect(window.scrollTo).not.toHaveBeenCalled();
    });
  });

  describe('isValidEmail', () => {
    it('should return true for valid email addresses', () => {
      const validEmails = [
        'test@example.com',
        'user.name@domain.co.uk',
        'user+tag@example.org',
        '123@numbers.com',
        'test.email@subdomain.example.com',
      ];

      validEmails.forEach(email => {
        expect(isValidEmail(email)).toBe(true);
      });
    });

    it('should return false for invalid email addresses', () => {
      const invalidEmails = [
        'invalid-email',
        '@example.com',
        'test@',
        'test@.com',
        '',
        'test example@domain.com',
        'test@example.',
      ];

      invalidEmails.forEach(email => {
        expect(isValidEmail(email)).toBe(false);
      });
    });
  });

  describe('formatPhoneNumber', () => {
    it('should format valid US phone numbers', () => {
      const testCases = [
        { input: '11234567890', expected: '+1 (123) 456-7890' },
        { input: '15551234567', expected: '+1 (555) 123-4567' },
        { input: '19876543210', expected: '+1 (987) 654-3210' },
      ];

      testCases.forEach(({ input, expected }) => {
        expect(formatPhoneNumber(input)).toBe(expected);
      });
    });

    it('should return original string for non-matching formats', () => {
      const invalidNumbers = [
        '123',
        '123456789',
        '123456789012',
        'abc123def',
        '',
        '123-456-7890',
        '(123) 456-7890',
      ];

      invalidNumbers.forEach(number => {
        expect(formatPhoneNumber(number)).toBe(number);
      });
    });

    it('should handle already formatted numbers', () => {
      const formattedNumber = '+1 (234) 567-890';
      expect(formatPhoneNumber(formattedNumber)).toBe(formattedNumber);
    });
  });

  describe('debounce', () => {
    it('should debounce function calls', async () => {
      const mockFn = vi.fn();
      const debouncedFn = debounce(mockFn, 100);

      // Call the function multiple times quickly
      debouncedFn('arg1');
      debouncedFn('arg2');
      debouncedFn('arg3');

      // Function should not be called immediately
      expect(mockFn).not.toHaveBeenCalled();

      // Wait for debounce delay
      await new Promise(resolve => setTimeout(resolve, 150));

      // Function should be called only once with the last argument
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toHaveBeenCalledWith('arg3');
    });

    it('should handle multiple debounced calls', async () => {
      const mockFn = vi.fn();
      const debouncedFn = debounce(mockFn, 50);

      debouncedFn('first');
      await new Promise(resolve => setTimeout(resolve, 100));
      
      debouncedFn('second');
      await new Promise(resolve => setTimeout(resolve, 100));

      expect(mockFn).toHaveBeenCalledTimes(2);
      expect(mockFn).toHaveBeenNthCalledWith(1, 'first');
      expect(mockFn).toHaveBeenNthCalledWith(2, 'second');
    });

    it('should work with functions that have multiple parameters', async () => {
      const mockFn = vi.fn();
      const debouncedFn = debounce(mockFn, 50);

      debouncedFn('param1', 'param2', 123);
      await new Promise(resolve => setTimeout(resolve, 100));

      expect(mockFn).toHaveBeenCalledWith('param1', 'param2', 123);
    });
  });

  describe('getSkillCategoryName', () => {
    it('should return correct display names for known categories', () => {
      const testCases = [
        { input: 'frontend', expected: 'Frontend Development' },
        { input: 'backend', expected: 'Backend Development' },
        { input: 'tools', expected: 'Development Tools' },
        { input: 'design', expected: 'Design Tools' },
      ];

      testCases.forEach(({ input, expected }) => {
        expect(getSkillCategoryName(input)).toBe(expected);
      });
    });

    it('should return original category for unknown categories', () => {
      const unknownCategories = ['unknown', 'custom', 'other', ''];

      unknownCategories.forEach(category => {
        expect(getSkillCategoryName(category)).toBe(category);
      });
    });
  });

  describe('getProjectCategoryName', () => {
    it('should return correct display names for known categories', () => {
      expect(getProjectCategoryName('frontend')).toBe('Frontend');
    });

    it('should return original category for unknown categories', () => {
      const unknownCategories = ['backend', 'mobile', 'unknown', ''];

      unknownCategories.forEach(category => {
        expect(getProjectCategoryName(category)).toBe(category);
      });
    });
  });
});
