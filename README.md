# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases professional development skills with clean, maintainable code and modern web development practices.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Type Safety**: Full TypeScript implementation for better development experience
- **Component Architecture**: Reusable, well-structured components
- **Performance Optimized**: Fast loading and smooth animations
- **Accessibility**: WCAG compliant with proper ARIA labels
- **SEO Friendly**: Semantic HTML and meta tags
- **Modern UI/UX**: Clean design with smooth interactions

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Package Manager**: npm
- **Linting**: ESLint
- **Code Formatting**: Prettier (recommended)

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Icon.tsx
│   │   └── Section.tsx
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer component
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Projects.tsx    # Projects showcase
│   └── Skills.tsx      # Skills section
├── data/               # Static data
│   └── portfolio.ts    # Portfolio information
├── types/              # TypeScript type definitions
│   └── index.ts
├── utils/              # Utility functions
│   └── helpers.ts
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📝 Configuration

### Personal Information

Update your personal information in `src/data/portfolio.ts`:

```typescript
export const PERSONAL_INFO = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',
  location: 'Your City, Country',
  bio: 'Your bio description...',
  avatar: '/assets/avatar.jpg'
};
```

### Projects

Add your projects in the same file:

```typescript
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Project Title",
    description: "Project description...",
    imageUrl: "/assets/projects/project.jpg",
    category: "frontend",
    technologies: ["React", "TypeScript"],
    liveUrl: "https://project-url.com",
    githubUrl: "https://github.com/username/project"
  }
];
```

### Skills

Update your skills:

```typescript
export const SKILLS: Skill[] = [
  {
    name: "React",
    category: "frontend",
    proficiency: 95,
    icon: "/assets/icons/react.svg"
  }
];
```

## 🎨 Customization

### Colors

The project uses Tailwind CSS with a custom color palette. You can modify colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    // ... more shades
  }
}
```

### Styling

- Global styles are in `src/index.css`
- Component-specific styles use Tailwind CSS classes
- Custom animations and utilities are defined in the CSS file

### Icons

The project uses SVG icons with fallback emojis. Add your icons to the `public/assets/icons/` directory and reference them in the data files.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- Focus management
- Color contrast compliance
- Screen reader friendly

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Vite](https://vitejs.dev/) - Build tool

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact me at [your-email@example.com]

---

Made with ❤️ using React & TypeScript
