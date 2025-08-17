export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'frontend';
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
  proficiency: number; // 1-100
  icon: string; // Lucide React icon name
}

export interface ContactInfo {
  type: 'email' | 'phone' | 'location';
  value: string;
  link: string;
  icon: string; // Lucide React icon name
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Lucide React icon name
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}
