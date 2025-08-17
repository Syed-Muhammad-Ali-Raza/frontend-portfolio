import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps {
  name: keyof typeof LucideIcons;
  className?: string;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  className = '', 
  size = 24, 
  color = 'currentColor' 
}) => {
  const IconComponent = LucideIcons[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in Lucide React`);
    return null;
  }

  // Use JSX with proper typing
  const Component = IconComponent as React.ComponentType<{ size?: number; className?: string; color?: string }>;
  
  return <Component size={size} className={className} color={color} />;
};

export default Icon;
