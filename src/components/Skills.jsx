import React from 'react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "Vue.js", level: 70 },
        { name: "Sass/SCSS", level: 85 },
        { name: "Tailwind CSS", level: 80 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Webpack", level: 70 },
        { name: "Vite", level: 75 },
        { name: "Figma", level: 80 },
        { name: "Agile", level: 85 },
        { name: "Jest", level: 70 },
        { name: "Redux", level: 75 },
        { name: "Next.js", level: 70 }
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-highlights">
          <div className="highlight-card">
            <div className="highlight-icon">🎨</div>
            <h4>UI/UX Design</h4>
            <p>Creating intuitive and beautiful user interfaces with modern design principles</p>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-icon">📱</div>
            <h4>Responsive Design</h4>
            <p>Building applications that work seamlessly across all devices and screen sizes</p>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-icon">⚡</div>
            <h4>Performance</h4>
            <p>Optimizing applications for speed, efficiency, and excellent user experience</p>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-icon">🔒</div>
            <h4>Security</h4>
            <p>Implementing best practices to ensure secure and reliable applications</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
