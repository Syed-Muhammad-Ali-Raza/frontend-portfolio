import React from 'react'
import './About.css'

const About = () => {
  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "30+", label: "Projects Completed" },
    { number: "15+", label: "Happy Clients" },
    { number: "100%", label: "Client Satisfaction" }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              I'm a passionate frontend developer with a strong foundation in modern web technologies. 
              I specialize in creating responsive, user-friendly applications that deliver exceptional user experiences.
            </p>
            
            <p>
              With expertise in React, JavaScript, and modern CSS frameworks, I bring designs to life with clean, 
              maintainable code. I believe in writing semantic HTML, accessible components, and creating intuitive 
              interfaces that delight users across all devices.
            </p>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-image">
            <div className="image-container">
              <div className="image-placeholder">
                <span>👨‍💻</span>
                <p>Your Photo Here</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-features">
          <div className="feature">
            <div className="feature-icon">🎨</div>
            <h4>UI/UX Focused</h4>
            <p>Creating beautiful, intuitive interfaces that prioritize user experience and accessibility.</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">📱</div>
            <h4>Responsive Design</h4>
            <p>Building applications that work seamlessly across all devices and screen sizes.</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">⚡</div>
            <h4>Performance Optimized</h4>
            <p>Writing efficient code that loads fast and provides smooth user interactions.</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">🔧</div>
            <h4>Modern Tools</h4>
            <p>Using the latest frontend technologies and best practices to deliver cutting-edge solutions.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
