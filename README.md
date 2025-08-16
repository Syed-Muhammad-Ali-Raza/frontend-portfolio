# 🚀 Frontend Developer Portfolio

A modern, responsive portfolio website built with React and Vite, designed specifically for frontend developers. This portfolio showcases your skills, projects, and professional experience with a clean and professional design.

## ✨ Features

- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Project Showcase** - Display your frontend projects with filtering
- **Skills Section** - Highlight your technical expertise
- **Contact Form** - Easy way for potential clients/employers to reach you
- **SEO Optimized** - Built with best practices for search engines
- **Fast Performance** - Optimized for speed and user experience

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **CSS3** - Custom styling with modern CSS features
- **JavaScript ES6+** - Modern JavaScript features
- **Responsive Design** - Mobile-first approach

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎨 Customization Guide

### 1. Personal Information

#### Update Hero Section (`src/components/Hero.jsx`)
```jsx
// Change "Your Name" to your actual name
<h1 className="hero-title">
  Hi, I'm <span className="highlight">Your Name</span>
</h1>

// Update the rotating text to match your specialties
const texts = [
  "Frontend Developer",
  "React Specialist", 
  "UI/UX Enthusiast",
  "Web Designer"
]
```

#### Update About Section (`src/components/About.jsx`)
```jsx
// Update statistics to reflect your experience
const stats = [
  { number: "2+", label: "Years Experience" },
  { number: "30+", label: "Projects Completed" },
  { number: "15+", label: "Happy Clients" },
  { number: "100%", label: "Client Satisfaction" }
]
```

### 2. Skills & Technologies

#### Update Skills Section (`src/components/Skills.jsx`)
```jsx
const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      // Add or modify skills based on your expertise
    ]
  }
]
```

### 3. Projects

#### Update Projects Section (`src/components/Projects.jsx`)
```jsx
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Description of your project",
    image: "🛒", // Choose appropriate emoji
    category: "frontend", // or "fullstack"
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://your-project-url.com",
    githubUrl: "https://github.com/yourusername/project"
  }
  // Add more projects...
]
```

### 4. Contact Information

#### Update Contact Section (`src/components/Contact.jsx`)
```jsx
const contactInfo = [
  {
    icon: "📧",
    title: "Email",
    value: "your.email@example.com",
    link: "mailto:your.email@example.com"
  },
  {
    icon: "📱",
    title: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567"
  },
  {
    icon: "📍",
    title: "Location",
    value: "Your City, Country",
    link: "#"
  }
]

const socialLinks = [
  { icon: "💼", name: "LinkedIn", url: "https://linkedin.com/in/yourprofile" },
  { icon: "🐙", name: "GitHub", url: "https://github.com/yourusername" },
  { icon: "📝", name: "Blog", url: "https://yourblog.com" },
  { icon: "📸", name: "Dribbble", url: "https://dribbble.com/yourprofile" }
]
```

### 5. Profile Photo

Replace the placeholder in the Hero and About sections:
```jsx
// In Hero.jsx and About.jsx, replace the placeholder with your actual image
<div className="avatar-placeholder">
  <img src="/path/to/your/photo.jpg" alt="Your Name" />
</div>
```

### 6. Styling & Colors

#### Update CSS Variables (`src/index.css`)
```css
:root {
  --primary-color: #007bff; /* Your preferred primary color */
  --secondary-color: #6c757d; /* Your preferred secondary color */
  --accent-color: #28a745; /* Your preferred accent color */
  --text-color: #333; /* Your preferred text color */
  --bg-color: #fff; /* Your preferred background color */
}
```

## 📱 Responsive Design

The portfolio is fully responsive and includes:
- Mobile-first design approach
- Tablet and desktop optimizations
- Touch-friendly navigation
- Optimized images and content

## 🚀 Deployment

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages
1. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## 📋 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Included Projects

The portfolio comes with 12 sample frontend projects:

1. **E-Commerce Platform** - React, Firebase, Tailwind CSS
2. **Task Management App** - React, TypeScript, Firebase
3. **Weather Dashboard** - JavaScript, OpenWeather API, Chart.js
4. **Portfolio Website** - React, Framer Motion, Sass
5. **Social Media Dashboard** - Vue.js, Chart.js, Vuetify
6. **Recipe Finder** - React, Spoonacular API, CSS Grid
7. **Music Player** - JavaScript, Web Audio API, Canvas
8. **Quiz Application** - React, Trivia API, Local Storage
9. **Chat Application** - React, Firebase, Socket.io
10. **Blog Platform** - Next.js, Markdown, Tailwind CSS
11. **Fitness Tracker** - React, Chart.js, PWA
12. **Color Palette Generator** - JavaScript, Color Theory, CSS Variables

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing your portfolio, please open an issue on GitHub.

---

**Made with ❤️ for frontend developers**

Happy coding! 🎉
