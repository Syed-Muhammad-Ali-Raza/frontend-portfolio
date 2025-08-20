import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const { isDark } = useTheme();
  
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: isDark ? 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400' : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: isDark ? 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500' : 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: isDark ? 'border-2 border-blue-400 text-blue-400 hover:bg-blue-900/20 focus:ring-blue-400' : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    ghost: isDark ? 'text-gray-300 hover:bg-gray-700 focus:ring-gray-500' : 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
