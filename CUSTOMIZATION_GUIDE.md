# 🎨 Customization Guide - Shivam's Portfolio

This guide will help you customize every aspect of your 3D portfolio website.

## 📝 Quick Updates

### 1. Update Personal Information

#### Hero Section (Name & Title)
File: `src/sections/Hero.jsx`
```jsx
// Line ~75
<motion.h1 className="hero-name">
  Shivam <span className="gradient-text">Dhankani</span>
</motion.h1>

// Line ~84
<motion.p className="hero-title">
  AI/ML Developer | Python Enthusiast
</motion.p>

// Line ~92
<motion.p className="hero-tagline">
  Building intelligent systems with code and creativity
</motion.p>
```

#### Contact Information
File: `src/sections/Sections.jsx`
```jsx
// Contact section (around line 280)
<motion.a href="mailto:shivam@example.com" className="contact-btn">
  📧 shivam@example.com
</motion.a>

<motion.a href="https://linkedin.com/in/shivamdhankani" className="contact-btn">
  💼 LinkedIn
</motion.a>

<motion.a href="https://github.com/shivamdhankani" className="contact-btn">
  🐙 GitHub
</motion.a>
```

### 2. Update Skills
File: `src/sections/Sections.jsx` - Skills section (around line 60)
```jsx
const skills = [
  { name: 'Python', level: 95 },
  { name: 'TensorFlow', level: 90 },
  { name: 'PyTorch', level: 88 },
  // Add or modify your skills here
];
```

### 3. Update Projects
File: `src/sections/Sections.jsx` - Projects section (around line 120)
```jsx
const projects = [
  {
    title: 'Your Project Title',
    description: 'Description of your project',
    tech: ['Technology1', 'Technology2'],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  // Add more projects
];
```

### 4. Update Certifications
File: `src/sections/Sections.jsx` - Certifications section (around line 200)
```jsx
const certifications = [
  { name: 'Your Certification', issuer: 'Organization', year: '2024' },
  // Add more certifications
];
```

### 5. Update Achievements
File: `src/sections/Sections.jsx` - Achievements section (around line 240)
```jsx
const achievements = [
  { title: 'Your Achievement', description: 'Details', icon: '🏆' },
  // Add more achievements
];
```

## 🎨 Color Customization

### Global Theme Colors
File: `src/styles/global.css`
```css
:root {
  --bg-primary: #0a0a0f;          /* Main background */
  --bg-secondary: #12121a;         /* Secondary background */
  --text-primary: #ffffff;         /* Primary text color */
  --text-secondary: #b8b8d1;       /* Secondary text color */
  --neon-blue: #00f3ff;            /* Neon blue accent */
  --neon-purple: #bc13fe;          /* Neon purple accent */
  --neon-pink: #ff1493;            /* Neon pink accent */
}
```

### Light Mode Colors
File: `src/styles/global.css`
```css
[data-theme='light'] {
  --bg-primary: #f8f9fa;
  --text-primary: #1a1a2e;
  /* Modify light mode colors here */
}
```

## 🎭 3D Character Customization

### Character Position
File: `src/components/3D/Character.jsx`
```jsx
// Line ~17 - Adjust position based on screen size
position={[isMobile ? 0 : 2.5, -1, 0]}  // [x, y, z]
```

### Character Colors
File: `src/components/3D/Character.jsx`
```jsx
// Torso color (line ~55)
<meshStandardMaterial 
  color="#1a1a2e"        // Change body color
  emissive="#667eea"     // Change glow color
  emissiveIntensity={0.3}
/>

// Visor/Eyes color (line ~78)
<meshBasicMaterial color="#00f3ff" />  // Change eye color
```

### Mouse Tracking Sensitivity
File: `src/components/3D/Character.jsx`
```jsx
// Line ~28-30 - Adjust tracking speed
headRef.current.rotation.y = THREE.MathUtils.lerp(
  headRef.current.rotation.y,
  targetX * 0.5,  // Increase for more movement
  0.05            // Increase for faster response
);
```

## ✨ Animation Customization

### Breathing Animation Speed
File: `src/components/3D/Character.jsx`
```jsx
// Line ~21
bodyRef.current.position.y = Math.sin(time * 0.5) * 0.05;
// Change 0.5 to adjust speed
// Change 0.05 to adjust intensity
```

### Floating Animation
File: `src/styles/global.css`
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }  // Adjust height
}
```

### Hover Effects
File: `src/sections/Sections.css`
```css
.glass-card:hover {
  border-color: rgba(0, 243, 255, 0.3);
  box-shadow: 0 12px 40px rgba(0, 243, 255, 0.2);
  // Adjust hover effects here
}
```

## 🌊 Background Particles

### Particle Count
File: `src/components/3D/NeuralNetworkBackground.jsx`
```jsx
// Line ~11
const particlesCount = 2000;  // Increase/decrease for more/fewer particles
```

### Particle Color
File: `src/components/3D/NeuralNetworkBackground.jsx`
```jsx
// Line ~56
<PointMaterial
  transparent
  color="#00f3ff"  // Change particle color
  size={0.03}
/>
```

### Connection Lines Color
File: `src/components/3D/NeuralNetworkBackground.jsx`
```jsx
// Line ~73
<lineBasicMaterial
  attach="material"
  color="#bc13fe"  // Change connection line color
  transparent
  opacity={0.15}
/>
```

## 📱 Responsive Breakpoints

### Mobile Breakpoint
File: Multiple CSS files
```css
@media (max-width: 768px) {
  /* Mobile styles */
}
```

### Tablet Breakpoint
```css
@media (min-width: 768px) and (max-width: 1024px) {
  /* Tablet styles */
}
```

## 🔤 Typography

### Font Family
File: `src/index.css`
```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

### Font Sizes
File: `src/sections/Hero.css`
```css
.hero-name {
  font-size: 4rem;  /* Adjust hero name size */
}

.section-title {
  font-size: 3rem;  /* Adjust section titles */
}
```

## 🎯 Interactive Elements

### Button Styles
File: `src/sections/Hero.css`
```css
.btn-primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  padding: 1rem 2rem;
  border-radius: 12px;
  /* Customize buttons here */
}
```

### Card Tilt Effect
File: `src/sections/Sections.css`
```css
.project-card:hover {
  transform: scale(1.03) translateY(-10px);
  /* Adjust hover transformation */
}
```

## 🌓 Theme Toggle

### Default Theme
File: `src/App.jsx`
```jsx
// Line ~8
const [darkMode, setDarkMode] = useState(true);  // Change to false for light mode default
```

## 📊 Performance Tips

### Reduce Particle Count for Better Performance
```jsx
// NeuralNetworkBackground.jsx
const particlesCount = 1000;  // Reduce from 2000 for better FPS
```

### Simplify Character Model
Remove or reduce holographic screens in Character.jsx for better performance on mobile devices.

## 🔧 Advanced Customizations

### Add New Section
1. Create new component in `src/sections/`
2. Import in `App.jsx`
3. Add to the component tree
4. Add navigation link in Navbar.jsx

### Custom Animations
Add new keyframes in `src/styles/global.css`:
```css
@keyframes yourAnimation {
  0% { /* start state */ }
  100% { /* end state */ }
}
```

### Add Social Media Links
File: `src/sections/Sections.jsx` - Contact section
```jsx
<motion.a 
  href="https://twitter.com/yourusername" 
  className="contact-btn"
  whileHover={{ scale: 1.05 }}
>
  🐦 Twitter
</motion.a>
```

## 💡 Pro Tips

1. **Test on Multiple Devices**: Always check how changes look on desktop, tablet, and mobile
2. **Performance**: Keep animations smooth by not overloading with too many particles/effects
3. **Accessibility**: Ensure good contrast ratios in both light and dark modes
4. **SEO**: Update meta tags in `index.html`
5. **Analytics**: Consider adding Google Analytics or similar for tracking

## 🐛 Troubleshooting

### Character Not Showing
- Check console for Three.js errors
- Ensure WebGL is enabled in browser
- Try reducing particle count for performance

### Animations Not Smooth
- Reduce particle count
- Simplify complex animations
- Use browser DevTools to profile performance

### Colors Not Changing
- Clear browser cache
- Check CSS specificity
- Ensure correct variable names

---

Need help? Check the main README.md for more details!
