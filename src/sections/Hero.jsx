import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Download } from 'lucide-react';
import NeuralNetworkBackground from '../components/3D/NeuralNetworkBackground';
import Character from '../components/3D/Character';
import TypingAnimation from '../components/TypingAnimation';
import { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      {/* 3D Canvas */}
      <div className="canvas-container">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#bc13fe" />
          <spotLight position={[0, 10, 5]} intensity={1} color="#ff1493" />
          
          {/* Background */}
          <NeuralNetworkBackground />
          
          {/* Character */}
          <Character mousePosition={mousePosition} />
          
          {/* Controls */}
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
            minAzimuthAngle={-Math.PI / 6}
            maxAzimuthAngle={Math.PI / 6}
          />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.h1 
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Shivam <span className="gradient-text">Dhankani</span>
          </motion.h1>
          
          <motion.p 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            AI/ML Enthusiast | Python Developer
          </motion.p>
          
          <motion.p 
            className="hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            Building intelligent systems and solving real-world problems
          </motion.p>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <TypingAnimation
              texts={[
                'Python Developer',
                'AI/ML Enthusiast',
                'Problem Solver',
                'Web Developer'
              ]}
              speed={80}
              deleteSpeed={40}
              delay={2000}
            />
          </motion.div>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
          >
            <button className="btn btn-primary" onClick={scrollToProjects}>
              View Projects
              <ArrowRight size={20} />
            </button>
            
            <button className="btn btn-secondary" onClick={scrollToContact}>
              Contact Me
              <Mail size={20} />
            </button>
            
            <a href="/resume.pdf" download className="btn btn-download">
              Download Resume
              <Download size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll Down</p>
      </motion.div>
    </section>
  );
}

export default Hero;
