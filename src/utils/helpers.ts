/**
 * Smooth scroll to a specific element by ID
 * @param elementId - The ID of the element to scroll to
 * @param offset - Optional offset from the top (default: 0)
 */
export const scrollToElement = (elementId: string, offset: number = 0): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Validate email format
 * @param email - Email string to validate
 * @returns boolean indicating if email is valid
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Format phone number for display
 * @param phone - Raw phone number string
 * @returns Formatted phone number
 */
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`;
  }
  return phone;
};

/**
 * Debounce function to limit how often a function can be called
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Get skill category display name
 * @param category - Skill category
 * @returns Display name for the category
 */
export const getSkillCategoryName = (category: string): string => {
  const categoryNames: Record<string, string> = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    tools: 'Development Tools',
    design: 'Design Tools'
  };
  return categoryNames[category] || category;
};

/**
 * Get project category display name
 * @param category - Project category
 * @returns Display name for the category
 */
export const getProjectCategoryName = (category: string): string => {
  const categoryNames: Record<string, string> = {
    frontend: 'Frontend'
  };
  return categoryNames[category] || category;
};
