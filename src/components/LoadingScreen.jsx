import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreen.css';

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [bootText, setBootText] = useState('Initializing Shivam AI System...');
  const [showContent, setShowContent] = useState(true);

  const bootMessages = [
    'Initializing Shivam AI System...',
    'Loading neural interfaces...',
    'Activating 3D environment...',
    'Calibrating holographic displays...',
    'Syncing project databases...',
    'Initializing AI assistant...',
    'System ready. Welcome.'
  ];

  useEffect(() => {
    const duration = 3000; // 3 seconds total
    const interval = 50;
    const increment = 100 / (duration / interval);

    let currentProgress = 0;
    let messageIndex = 0;

    const timer = setInterval(() => {
      currentProgress += increment;
      setProgress(Math.min(currentProgress, 100));

      // Update boot message based on progress
      const newIndex = Math.floor((currentProgress / 100) * bootMessages.length);
      if (newIndex !== messageIndex && newIndex < bootMessages.length) {
        messageIndex = newIndex;
        setBootText(bootMessages[newIndex]);
      }

      if (currentProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setShowContent(false);
          setTimeout(onComplete, 500);
        }, 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showContent && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.5 }}
        >
          <div className="loading-content">
            {/* Animated Logo */}
            <motion.div
              className="loading-logo"
              initial={{ scale: 0.5, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <div className="logo-circle">
                <div className="logo-inner"></div>
              </div>
              <div className="logo-ring ring-1"></div>
              <div className="logo-ring ring-2"></div>
              <div className="logo-ring ring-3"></div>
            </motion.div>

            {/* Boot Text */}
            <motion.p
              className="boot-text"
              key={bootText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {bootText}
            </motion.p>

            {/* Progress Bar */}
            <div className="progress-container">
              <div className="progress-bar">
                <motion.div
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                >
                  <div className="progress-glow"></div>
                </motion.div>
              </div>
              <span className="progress-percentage">{Math.round(progress)}%</span>
            </div>

            {/* Decorative Elements */}
            <div className="loading-grid"></div>
            <div className="loading-particles">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 3}s`
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Scan Line Effect */}
          <div className="scan-line"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
