# 🚀 Futuristic 3D Portfolio - Shivam Dhankani

A modern, interactive 3D portfolio website built with React, Three.js, and cutting-edge web technologies.

## ✨ Features

### 🧑‍💻 Interactive 3D Character
- Animated developer avatar with laptop
- Mouse tracking (head follows cursor)
- Idle animations (breathing, typing effects)
- Floating holographic screens with tech stats
- Glowing cyberpunk elements

### 🌌 Neural Network Background
- 2000+ animated particles
- Dynamic connections between nodes
- Rotating 3D space environment
- Parallax mouse movement effects

### 🎨 Glassmorphism UI Design
- Frosted glass effect cards
- Neon glow borders
- Smooth hover animations
- Tilt and scale effects on interaction

### 🎯 Complete Sections
1. **Hero** - Eye-catching intro with 3D character
2. **About Me** - Personal introduction
3. **Skills** - Interactive progress bars
4. **Projects** - 3D cards with hover effects
5. **Certifications** - Achievement showcase
6. **Achievements** - Honors and recognition
7. **Contact** - Easy to reach out

### 🌓 Dark/Light Mode Toggle
- Seamless theme switching
- Persistent user preference
- Smooth color transitions

### 📱 Fully Responsive
- Mobile-first design
- Adaptive layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **3D Rendering**: Three.js + React Three Fiber + Drei
- **Animations**: Framer Motion + GSAP
- **Icons**: Lucide React
- **Styling**: Custom CSS with glassmorphism effects

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the portfolio directory:
```bash
cd portfolio
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open browser and visit:
```
http://localhost:5173
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   └── 3D/
│   │       ├── Character.jsx          # 3D animated character
│   │       └── NeuralNetworkBackground.jsx  # Particle background
│   ├── sections/
│   │   ├── Navbar.jsx                 # Navigation with theme toggle
│   │   ├── Hero.jsx                   # Hero section with 3D canvas
│   │   ├── Sections.jsx               # All content sections
│   │   ├── Navbar.css                 # Navbar styles
│   │   ├── Hero.css                   # Hero styles
│   │   └── Sections.css               # Section styles
│   ├── styles/
│   │   └── global.css                 # Global styles & variables
│   ├── App.jsx                        # Main app component
│   ├── index.css                      # Base styles
│   └── main.jsx                       # Entry point
└── package.json
```

## 🎨 Color Palette

- **Background**: `#0a0a0f` (Dark), `#f8f9fa` (Light)
- **Neon Blue**: `#00f3ff`
- **Neon Purple**: `#bc13fe`
- **Neon Pink**: `#ff1493`
- **Gradient 1**: `#667eea` → `#764ba2`
- **Gradient 2**: `#f093fb` → `#f5576c`

## 🔥 Key Animations

- **Character**: Breathing, head tracking, floating
- **Particles**: Rotation, connection lines
- **UI Cards**: Hover tilt, glow, scale
- **Buttons**: Lift on hover, shadow effects
- **Scroll**: Smooth scroll behavior
- **Entrance**: Fade-in animations

## 🎯 Interactive Elements

1. **Mouse Tracking**: Character's head follows cursor
2. **Orbit Controls**: Rotate view around character (limited)
3. **Hover Effects**: Cards lift and glow on hover
4. **Smooth Scrolling**: Navigate between sections
5. **Theme Toggle**: Click sun/moon icon
6. **Download Resume**: Click resume button in navbar

## 📱 Responsive Breakpoints

- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

## 🚀 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

## 🌐 Deploy

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Vercel
```bash
vercel
```

### GitHub Pages
```bash
npm run build
gh-pages -d dist
```

## 🎨 Customization

### Update Personal Info
Edit the following files:
- `src/sections/Hero.jsx` - Name and title
- `src/sections/Sections.jsx` - About, skills, projects, etc.
- `src/sections/Navbar.jsx` - Contact links

### Change Colors
Modify CSS variables in:
- `src/styles/global.css`

### Adjust 3D Character
Edit:
- `src/components/3D/Character.jsx`

### Modify Particles
Edit:
- `src/components/3D/NeuralNetworkBackground.jsx`

## ⚡ Performance Optimizations

- Lazy loading 3D models
- Memoized particle calculations
- Optimized render loops
- Efficient animation frames
- Responsive canvas sizing

## 🤝 Contributing

Feel free to fork this project and submit pull requests!

## 📄 License

MIT License - Feel free to use this for your own portfolio!

## 👨‍💻 Author

**Shivam Dhankani**
- AI/ML Developer | Python Enthusiast
- Building intelligent systems with code and creativity

---

Made with ❤️ using React + Three.js
