import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Admin Components
import AdminLayout from './admin/AdminLayout';
import Dashboard from './admin/Dashboard';
import PersonalInfo from './admin/PersonalInfo';
import SkillsAdmin from './admin/Skills';
import ProjectsAdmin from './admin/Projects';
import SocialLinks from './admin/SocialLinks';

const Portfolio: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Portfolio Route */}
          <Route path="/" element={<Portfolio />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="personal-info" element={<PersonalInfo />} />
            <Route path="skills" element={<SkillsAdmin />} />
            <Route path="projects" element={<ProjectsAdmin />} />
            <Route path="social" element={<SocialLinks />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
