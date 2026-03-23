import { useState, useEffect } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import { About, Skills, Projects, Certifications, Achievements, Contact } from './sections/Sections';
import './styles/global.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="app">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact />
      
      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        background: 'rgba(0,0,0,0.5)',
        color: '#b8b8d1',
        fontSize: '0.9rem'
      }}>
        <p>© 2026 Shivam Dhankani. Built with ❤️ using React + Three.js</p>
      </footer>
    </div>
  );
}

export default App;
