# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This project features both a public portfolio showcase and an admin panel for content management, showcasing professional development skills with clean, maintainable code and modern web development practices.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Tailwind CSS, Vite
- **Dual Interface**: Public portfolio view + Admin panel for content management
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Type Safety**: Full TypeScript implementation for better development experience
- **Component Architecture**: Reusable, well-structured components
- **Performance Optimized**: Fast loading and smooth animations
- **Accessibility**: WCAG compliant with proper ARIA labels
- **SEO Friendly**: Semantic HTML and meta tags
- **Modern UI/UX**: Clean design with smooth interactions
- **Content Management**: Admin panel for easy portfolio updates

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Package Manager**: npm
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint
- **Code Formatting**: Prettier (recommended)

## 📁 Project Structure

```
src/
├── components/          # Public portfolio components
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
├── admin/              # Admin panel components
│   ├── AdminLayout.tsx # Admin layout wrapper
│   ├── Dashboard.tsx   # Admin dashboard
│   ├── PersonalInfo.tsx # Personal info management
│   ├── Skills.tsx      # Skills management
│   ├── Projects.tsx    # Projects management
│   └── SocialLinks.tsx # Social links management
├── data/               # Static data
│   └── portfolio.ts    # Portfolio information
├── types/              # TypeScript type definitions
│   └── index.ts
├── utils/              # Utility functions
│   └── helpers.ts
├── test/               # Test utilities and setup
│   ├── setup.ts        # Test environment setup
│   └── test-utils.tsx  # Custom test utilities
├── App.tsx             # Main app component with routing
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
   Navigate to `http://localhost:5173` (Vite default port)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:ui` - Run tests with UI interface
- `npm run test:coverage` - Run tests with coverage report

## 🎯 Application Structure

### Public Portfolio (`/`)
The main portfolio page showcasing:
- Hero section with personal introduction
- About section with bio and background
- Skills section with technical competencies
- Projects section with portfolio work
- Contact form for inquiries
- Footer with social links

### Admin Panel (`/admin`)
A comprehensive admin interface for managing portfolio content:
- **Dashboard**: Overview and quick actions
- **Personal Info**: Update name, title, bio, contact details
- **Skills**: Add, edit, and manage technical skills
- **Projects**: Manage portfolio projects with images and links
- **Social Links**: Configure social media and contact links

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

The project uses Lucide React icons for consistency. You can import additional icons from the Lucide library:

```typescript
import { Github, Linkedin, Mail } from 'lucide-react';
```

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

## 🧪 Testing

The project includes comprehensive unit tests using Vitest and React Testing Library:

### Test Structure
- **Unit Tests**: Individual component and function tests
- **Integration Tests**: Component interaction tests
- **Utility Tests**: Helper function validation
- **Admin Tests**: Admin panel functionality tests

### Test Coverage
- **Components**: All UI components are tested for rendering and interactions
- **Utilities**: Helper functions have comprehensive test coverage
- **Forms**: Form validation and submission logic is thoroughly tested
- **Routing**: App routing and navigation is tested
- **Admin Panel**: All admin functionality is tested

### Running Tests
```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test:run

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

### Test Files Location
- Component tests: `src/components/__tests__/`
- Admin tests: `src/admin/__tests__/`
- Utility tests: `src/utils/__tests__/`
- App tests: `src/__tests__/`
- Test utilities: `src/test/`

## 🔧 Admin Panel Features

The admin panel provides a user-friendly interface for:
- **Real-time Updates**: Instant preview of changes
- **Form Validation**: Built-in validation for all inputs
- **Image Management**: Easy upload and management of project images
- **Drag & Drop**: Intuitive reordering of skills and projects
- **Responsive Design**: Works seamlessly on all devices

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

### Deploy to GitHub Pages

1. Add to `package.json`:
   ```json
   {
     "homepage": "https://username.github.io/repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

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
- [React Router](https://reactrouter.com/) - Client-side routing
- [Lucide React](https://lucide.dev/) - Icon library

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact me at [your-email@example.com]

---

Made with ❤️ using React & TypeScript
