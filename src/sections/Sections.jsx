import { motion } from 'framer-motion';
import { User, Code, Briefcase, Award, Trophy, Mail } from 'lucide-react';
import './Sections.css';

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <User size={40} color="#00f3ff" />
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <motion.div
          className="glass-card content-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="section-content">
            Computer Science student with a strong interest in AI/ML, Python, and Data Structures & Algorithms. 
            Experienced in web development and problem-solving, with a passion for building real-world applications 
            that make a difference. Currently pursuing my education and actively seeking opportunities to learn 
            and grow in the field of Artificial Intelligence.
          </p>
          
          <div className="about-stats">
            <div className="stat-item">
              <h3 className="stat-value">8.33</h3>
              <p className="stat-label">CGPA</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3 className="stat-label">College</h3>
              <p className="stat-value-small">Chandigarh Group of Colleges, Jhanjeri</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    { name: 'Python', level: 92, category: 'Programming' },
    { name: 'C++', level: 85, category: 'Programming' },
    { name: 'C', level: 80, category: 'Programming' },
    { name: 'HTML & CSS', level: 88, category: 'Web' },
    { name: 'JavaScript', level: 82, category: 'Web' },
    { name: 'YOLO', level: 78, category: 'AI/ML' },
    { name: 'OpenCV', level: 80, category: 'AI/ML' },
    { name: 'Machine Learning', level: 85, category: 'AI/ML' },
    { name: 'Git', level: 83, category: 'Tools' },
    { name: 'VS Code', level: 90, category: 'Tools' },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Code size={40} color="#bc13fe" />
          <h2 className="section-title">Skills & Technologies</h2>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glass-card skill-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
            >
              <div className="skill-category">{skill.category}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                />
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: 'Discount Calculator for Online Store',
      description: 'A web-based calculator that computes discounts and final prices for online shopping, helping users save money with accurate calculations.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      link: '#'
    },
    {
      title: 'AI-Based Object Detection System',
      description: 'Real-time object detection system using YOLO and OpenCV to identify and track objects in images and video streams with high accuracy.',
      tech: ['Python', 'YOLO', 'OpenCV'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      link: '#'
    },
    {
      title: 'Face Recognition Login System',
      description: 'Secure authentication system using facial recognition technology with OpenCV, providing a password-less login experience.',
      tech: ['Python', 'OpenCV', 'Machine Learning'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Briefcase size={40} color="#ff1493" />
          <h2 className="section-title">Featured Projects</h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass-card project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -10 }}
              onClick={() => window.open(project.link, '_blank')}
              style={{ cursor: 'pointer' }}
            >
              <div 
                className="project-image"
                style={{ background: project.gradient }}
              />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  const certifications = [
    { name: 'NPTEL Python Certification', issuer: 'NPTEL', year: '2023', icon: '🐍' },
    { name: 'Machine Learning Certification', issuer: 'NPTEL', year: '2023', icon: '🤖' },
    { name: 'DBMS & SQL Certification', issuer: 'Oracle', year: '2022', icon: '🗄️' },
    { name: 'AWS & Google Cloud Certifications', issuer: 'AWS/Google', year: '2023', icon: '☁️' },
    { name: 'Generative AI Foundations', issuer: 'Online Platform', year: '2024', icon: '✨' },
  ];

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Award size={40} color="#00f3ff" />
          <h2 className="section-title">Certifications</h2>
        </motion.div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              className="glass-card certification-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
            >
              <div className="cert-icon">{cert.icon}</div>
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-year">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  const achievements = [
    { title: 'Core Member – D4 Club', description: 'Active contributor to coding and development community', icon: '🎯' },
    { title: 'Hack N Win Participant & Coordinator', description: 'Organized and participated in hackathon events', icon: '🏆' },
    { title: 'Smart India Hackathon Team Member', description: 'Represented college in national level hackathon', icon: '🇮🇳' },
    { title: 'Coding Competitions', description: 'Active participant in various coding competitions and workshops', icon: '💻' },
  ];

  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Trophy size={40} color="#bc13fe" />
          <h2 className="section-title">Achievements & Honors</h2>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="glass-card achievement-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Mail size={40} color="#ff1493" />
          <h2 className="section-title">Get In Touch</h2>
        </motion.div>

        <motion.div
          className="glass-card contact-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="contact-text">
            I'm actively seeking internships and job opportunities in AI/ML and software development.
            Whether you have a project idea, want to collaborate, or just want to connect, feel free to reach out!
          </p>
          
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <a href="mailto:shivamdhankani9@gmail.com" className="contact-link">shivamdhankani9@gmail.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <span className="contact-link">+91 84670 55979</span>
            </div>
          </div>
          
          <div className="contact-links">
            <motion.a
              href="https://github.com/shivamdhankani"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🐙 GitHub
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/shivamdhankani"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              💼 LinkedIn
            </motion.a>
            
            <motion.a
              href="https://leetcode.com/shivamdhankani"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ⚡ LeetCode
            </motion.a>
            
            <motion.a
              href="https://hackerrank.com/shivamdhankani"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🎯 HackerRank
            </motion.a>
            
            <motion.a
              href="https://auth.geeksforgeeks.org/user/shivamdhankani"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📚 GeeksforGeeks
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { About, Skills, Projects, Certifications, Achievements, Contact };
