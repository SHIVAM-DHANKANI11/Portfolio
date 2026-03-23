# 🚀 Deployment Guide - Shivam's Portfolio

Your portfolio is complete and ready to deploy! Follow these simple steps to get it live.

---

## ✅ **Pre-Deployment Checklist**

Before deploying, make sure you have:

1. ✅ All content updated with your information
2. ✅ Resume PDF placed in `public/resume.pdf`
3. ✅ Social media links updated in Contact section
4. ✅ Project GitHub links added
5. ✅ Tested locally (running at http://localhost:5173)

---

## 🌐 **Deployment Options**

### **Option 1: Netlify (Recommended - Easiest)**

#### Method A: Drag & Drop (Simplest)
1. Run build command:
   ```bash
   npm run build
   ```
2. Go to https://app.netlify.com/drop
3. Drag the `dist` folder to the upload area
4. Your site will be live in seconds!

#### Method B: Git Integration (Automatic Updates)
1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/shivamdhankani/portfolio.git
   git push -u origin main
   ```

2. Go to https://app.netlify.com/start
3. Import your GitHub repository
4. Netlify will auto-detect Vite settings
5. Click "Deploy site"
6. Future pushes will automatically redeploy!

**Configuration:**
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18.x

---

### **Option 2: Vercel (Fast Performance)**

#### Deploy with Vercel CLI:
```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project
cd portfolio

# Deploy
vercel
```

#### Or use Git Integration:
1. Push to GitHub (same as above)
2. Go to https://vercel.com/new
3. Import your repository
4. Vercel auto-configures everything
5. Click "Deploy"

**Configuration:** (Already set in `vercel.json`)
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

---

### **Option 3: GitHub Pages (Free & Simple)**

#### Install gh-pages:
```bash
npm install --save-dev gh-pages
```

#### Add to package.json scripts:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

#### Update vite.config.js:
```javascript
export default defineConfig({
  base: '/portfolio/', // Replace with your repo name
  plugins: [react()],
})
```

#### Deploy:
```bash
npm run deploy
```

#### Enable GitHub Pages:
1. Go to your GitHub repository
2. Settings → Pages
3. Source: gh-pages branch
4. Your site will be live at: `https://yourusername.github.io/portfolio/`

---

## 🎯 **Custom Domain Setup**

### For Netlify:
1. Go to Domain Settings
2. Add custom domain (e.g., shivamdhankani.com)
3. Update DNS records as instructed
4. SSL certificate is automatic

### For Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS at your registrar
4. Automatic HTTPS

### For GitHub Pages:
1. Add CNAME file to public folder:
   ```
   shivamdhankani.com
   ```
2. Update DNS at your domain registrar

---

## 📊 **Analytics Setup (Optional)**

### Google Analytics:

1. Get your GA4 Measurement ID from https://analytics.google.com
2. Create `src/components/Analytics.jsx`:

```jsx
import { useEffect } from 'react';

const GA_ID = 'YOUR_GA_ID_HERE';

function Analytics() {
  useEffect(() => {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', GA_ID);
  }, []);

  return null;
}

export default Analytics;
```

3. Import in App.jsx:
```jsx
import Analytics from './components/Analytics';

function App() {
  return (
    <>
      <Analytics />
      {/* rest of your app */}
    </>
  );
}
```

---

## 🔧 **Environment Variables (If Needed)**

Create `.env.production`:
```
VITE_API_URL=https://your-api.com
VITE_ANALYTICS_ID=your_id
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

⚠️ **Never commit sensitive data!** `.env` files are in `.gitignore`

---

## 📱 **Performance Optimization**

### Before Deploy:
```bash
# Analyze bundle size
npm run build
npx vite-bundle-visualizer

# Check performance
npm run preview
```

### Optimize Images:
- Use WebP format
- Compress images with tools like TinyPNG
- Lazy load images below the fold

### Reduce Bundle Size:
- Code splitting is automatic with Vite
- Tree-shaking removes unused code
- Consider lazy loading heavy components

---

## 🚀 **Post-Deployment**

### Test Your Live Site:
1. ✅ Check all sections load properly
2. ✅ Test all buttons and links
3. ✅ Verify mobile responsiveness
4. ✅ Test dark/light mode toggle
5. ✅ Download resume works
6. ✅ Social links work
7. ✅ Check browser console for errors

### Share Your Portfolio:
- Add to LinkedIn profile
- Include in resume
- Share on social media
- Add to GitHub profile
- Send to recruiters

---

## 📈 **Monitoring & Maintenance**

### Regular Updates:
- Keep dependencies updated
- Add new projects regularly
- Update skills as you learn
- Refresh achievements

### Monitor Performance:
- Use Google PageSpeed Insights
- Check Core Web Vitals
- Monitor uptime (use UptimeRobot)

### Backup:
- Keep code on GitHub
- Export Netlify/Vercel settings
- Save environment variables securely

---

## 🎨 **SEO Optimization**

Your portfolio already includes:
- ✅ Meta tags for search engines
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML structure
- ✅ Mobile-friendly design
- ✅ Fast loading speed

### Additional SEO Tips:
1. Submit sitemap to Google Search Console
2. Create a blog section for more content
3. Add alt text to any images
4. Use descriptive link text
5. Ensure good color contrast

---

## 🆘 **Troubleshooting**

### Build Fails:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 Errors on Refresh:
Add to netlify.toml or _redirects file:
```
/* /index.html 200
```

### Slow Loading:
- Optimize images
- Reduce particle count in background
- Enable compression
- Use CDN for assets

---

## 💡 **Pro Tips**

1. **Use a Custom Domain**: Looks more professional
2. **Enable HTTPS**: Automatic on most platforms
3. **Add Social Preview Image**: Create og:image meta tag
4. **Set Up Email Forwarding**: contact@shivamdhankani.com
5. **Create a Blog**: Show off your expertise
6. **Add Testimonials**: From professors or peers
7. **Track Visitors**: Use analytics to see what works

---

## 🎉 **You're Live!**

Once deployed, your portfolio will be accessible worldwide and ready to impress:
- Recruiters
- Potential employers
- Collaborators
- Tech community

### Next Steps:
1. Deploy to your chosen platform
2. Share on LinkedIn and social media
3. Add to your resume
4. Start applying for opportunities!

---

## 📞 **Support Resources**

- Netlify Docs: https://docs.netlify.com
- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev
- React Docs: https://react.dev

---

**Good luck with your career! 🚀✨**

Your amazing portfolio deserves to be seen by the world!
