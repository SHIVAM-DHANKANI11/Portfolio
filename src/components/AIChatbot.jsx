import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle, Minimize2, Maximize2 } from 'lucide-react';
import './AIChatbot.css';

const chatbotResponses = {
  greetings: {
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    responses: [
      "Hello! I'm Shivam's AI assistant. How can I help you explore his portfolio?",
      "Hi there! Welcome to Shivam's AI workspace. What would you like to know?",
      "Hey! I'm here to help you discover Shivam's amazing work. Ask me anything!"
    ]
  },
  about: {
    keywords: ['about', 'who is', 'tell me about', 'shivam'],
    responses: [
      "Shivam Dhankani is a Computer Science student specializing in AI/ML at Chandigarh Group of Colleges with a CGPA of 8.33. He's passionate about Python development and building intelligent systems!",
      "Shivam is an AI/ML enthusiast and Python developer who loves solving real-world problems through code. He's currently studying at CGC Jhanjeri.",
      "Shivam specializes in AI/ML technologies including YOLO, OpenCV, and Machine Learning. He's also skilled in web development and has a strong foundation in computer science fundamentals."
    ]
  },
  skills: {
    keywords: ['skill', 'technologies', 'tools', 'know', 'proficient'],
    responses: [
      "Shivam has expertise in:\n\nProgramming: Python (92%), C++ (85%), C (80%)\nWeb: HTML, CSS, JavaScript\nAI/ML: YOLO, OpenCV, Machine Learning\nTools: Git, VS Code\n\nWould you like me to show you his skills sphere?",
      "His technical skills include Python, C++, Web Development, and AI/ML technologies like YOLO and OpenCV. He's also proficient with Git and modern development tools. Want to see the neural sphere?"
    ]
  },
  projects: {
    keywords: ['project', 'work', 'built', 'created', 'portfolio'],
    responses: [
      "Shivam has built some amazing projects:\n\n1️⃣ Discount Calculator - Web app for online shopping\n2️⃣ AI Object Detection - Real-time detection using YOLO\n3️⃣ Face Recognition Login - Secure authentication system\n\nClick on any project cube to explore details!",
      "His projects showcase web development and AI/ML expertise. The floating cubes around you represent each project - click them to learn more!"
    ]
  },
  achievements: {
    keywords: ['achievement', 'award', 'recognition', 'accomplishment'],
    responses: [
      "Shivam's achievements include:\n\n🏆 Core Member - D4 Club\n🎯 Hack N Win Participant & Coordinator\n🇮🇳 Smart India Hackathon Team Member\n💻 Active coding competition participant\n\nCheck out the trophy pods floating nearby!",
      "He's actively involved in hackathons and coding communities. The achievement pods around the space showcase his accomplishments!"
    ]
  },
  contact: {
    keywords: ['contact', 'email', 'phone', 'reach', 'linkedin', 'github'],
    responses: [
      "You can reach Shivam at:\n\n📧 shivamdhankani9@gmail.com\n📱 +91 84670 55979\n\nConnect on:\n• GitHub: @SHIVAM-DHANKANI11\n• LinkedIn: /in/shivamdhankani\n• LeetCode, HackerRank, GeeksforGeeks",
      "Want to collaborate? Email him at shivamdhankani9@gmail.com or connect on social media. Check the contact portal!"
    ]
  },
  resume: {
    keywords: ['resume', 'cv', 'download', 'pdf'],
    responses: [
      "You can download Shivam's resume using the Download Resume button in the navigation menu. It has all his qualifications, projects, and achievements!",
      "The resume is available for download! Look for the resume button or I can help you find it."
    ]
  },
  education: {
    keywords: ['education', 'college', 'university', 'study', 'degree'],
    responses: [
      "Shivam is pursuing Computer Science at Chandigarh Group of Colleges, Jhanjeri with an impressive CGPA of 8.33. His focus is on AI/ML and software development.",
      "He's studying at CGC Jhanjeri, where he's diving deep into AI, ML, and computer science fundamentals."
    ]
  },
  default: [
    "That's interesting! You can ask me about Shivam's skills, projects, achievements, or contact information. What would you like to explore?",
    "I'm here to help! Try asking about Shivam's background, his amazing projects, or technical skills.",
    "Great question! I can tell you about Shivam's work, education, or how to get in touch. What interests you?"
  ]
};

function AIChatbot({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initial welcome message after a short delay
    const timer = setTimeout(() => {
      addBotMessage("Welcome! 👋 I'm Shivam's AI assistant. You can explore projects, skills, achievements, or ask me anything!");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const findBestResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const category in chatbotResponses) {
      if (category === 'default') continue;
      
      const categoryData = chatbotResponses[category];
      if (categoryData.keywords && Array.isArray(categoryData.keywords)) {
        for (const keyword of categoryData.keywords) {
          if (lowerMessage.includes(keyword)) {
            const responses = categoryData.responses;
            return responses[Math.floor(Math.random() * responses.length)];
          }
        }
      } else if (Array.isArray(categoryData)) {
        // Handle case where category directly contains responses array
        for (const keyword of categoryData) {
          if (lowerMessage.includes(keyword)) {
            const responses = categoryData;
            return responses[Math.floor(Math.random() * responses.length)];
          }
        }
      }
    }
    
    const defaultResponses = chatbotResponses.default;
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const addUserMessage = (text) => {
    setMessages(prev => [...prev, { type: 'user', text, timestamp: new Date() }]);
  };

  const addBotMessage = (text, delay = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { type: 'bot', text, timestamp: new Date() }]);
    }, delay);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    addUserMessage(userMessage);
    setInputValue('');

    // Get and send bot response
    const response = findBestResponse(userMessage);
    addBotMessage(response, 800 + Math.random() * 700);

    // Check for navigation triggers
    handleNavigationTriggers(userMessage);
  };

  const handleNavigationTriggers = (message) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('project')) {
      setTimeout(() => {
        if (onNavigate) onNavigate('projects');
      }, 1500);
    } else if (lowerMessage.includes('skill')) {
      setTimeout(() => {
        if (onNavigate) onNavigate('skills');
      }, 1500);
    } else if (lowerMessage.includes('achievement') || lowerMessage.includes('trophy')) {
      setTimeout(() => {
        if (onNavigate) onNavigate('achievements');
      }, 1500);
    } else if (lowerMessage.includes('contact')) {
      setTimeout(() => {
        if (onNavigate) onNavigate('contact');
      }, 1500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickActions = [
    { label: 'Projects', query: 'Tell me about projects' },
    { label: 'Skills', query: 'What are Shivam\'s skills?' },
    { label: 'Contact', query: 'How can I contact Shivam?' },
    { label: 'Resume', query: 'Where can I download the resume?' }
  ];

  const handleQuickAction = (query) => {
    addUserMessage(query);
    const response = findBestResponse(query);
    addBotMessage(response, 800);
    handleNavigationTriggers(query);
  };

  return (
    <div className="ai-chatbot-container">
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            className="chatbot-window"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="chatbot-title">
                <div className="ai-avatar">🤖</div>
                <div>
                  <h4>Shivam's AI Assistant</h4>
                  <span className="status-indicator">● Online</span>
                </div>
              </div>
              <div className="chatbot-controls">
                <button onClick={() => setIsMinimized(true)} className="control-btn">
                  <Minimize2 size={16} />
                </button>
                <button onClick={() => setIsOpen(false)} className="control-btn close">
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="chatbot-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.type}`}>
                  <div className="message-bubble">
                    {msg.text.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                  <span className="message-time">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))}
              
              {isTyping && (
                <div className="message bot typing">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="quick-actions">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action.query)}
                  className="quick-action-btn"
                >
                  {action.label}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="chatbot-input">
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about Shivam..."
                rows="1"
              />
              <button onClick={handleSend} className="send-btn">
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        className={`chatbot-toggle ${isOpen ? 'open' : ''} ${isMinimized ? 'minimized' : ''}`}
        onClick={() => {
          if (isMinimized) {
            setIsMinimized(false);
          } else {
            setIsOpen(!isOpen);
          }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isMinimized ? (
          <Maximize2 size={24} />
        ) : isOpen ? (
          <MessageCircle size={24} />
        ) : (
          <>
            <MessageCircle size={24} />
            <span className="pulse-ring"></span>
          </>
        )}
      </motion.button>

      {/* Minimized Header */}
      {isMinimized && (
        <motion.div
          className="chatbot-minimized"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => setIsMinimized(false)}
        >
          <div className="mini-avatar">🤖</div>
          <span>Shivam's AI Assistant</span>
        </motion.div>
      )}
    </div>
  );
}

export default AIChatbot;
