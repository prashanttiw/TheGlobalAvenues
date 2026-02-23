# The Global Avenues - Complete Setup & Deployment Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or pnpm package manager

### Installation & Development

1. **Install Dependencies**
   ```bash
   npm install
   # or if using pnpm
   pnpm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

3. **Open in Browser**
   - Navigate to `http://localhost:5173`
   - You should see the animated website with dark/light mode toggle

### Build for Production

```bash
npm run build
# Output will be in dist/ folder
```

Preview production build:
```bash
npm run preview
```

---

## 🎨 Customization Guide

### 1. Update Company Information

**Header Logo & Brand Name** (`src/components/Header.jsx`)
```jsx
<span className="font-bold text-lg text-foreground hidden sm:inline">
  Global Avenues  // Change to your company name
</span>
```

**Footer Company Info** (`src/components/Footer.jsx`)
```jsx
<span className="font-bold text-lg text-foreground">Global Avenues</span>
```

### 2. Change Color Theme

Edit CSS variables in `src/index.css`:

**Light Mode Colors:**
```css
:root {
  --primary: 210 100% 45%;        /* Blue */
  --secondary: 200 40% 35%;       /* Dark Blue */
  --accent: 45 100% 50%;          /* Amber/Gold */
  --background: 0 0% 100%;        /* White */
  --foreground: 200 15% 20%;      /* Dark Blue */
}
```

**Dark Mode Colors:**
```css
.dark {
  --primary: 210 100% 55%;        /* Light Blue */
  --secondary: 200 40% 45%;       /* Blue */
  --accent: 45 100% 50%;          /* Amber/Gold */
  --background: 200 20% 12%;      /* Dark Blue */
  --foreground: 0 0% 95%;         /* Near White */
}
```

**How HSL Works:**
- First number: Hue (0-360 degrees)
- Second: Saturation (0-100%)
- Third: Lightness (0-100%)

Example color values:
- Red: 0 100% 50%
- Green: 120 100% 50%
- Blue: 210 100% 50%
- Orange: 30 100% 50%

### 3. Update Contact Information

**Contact Section** (`src/components/Contact.jsx`)
```jsx
<p className="text-muted-foreground">+91 11 4680 1133</p>
<p className="text-muted-foreground">connect@theglobalavenues.com</p>
```

**Footer Contact Info** (`src/components/Footer.jsx`)
```jsx
<p className="text-muted-foreground">
  A 6, Block A, South Extension II<br />
  New Delhi - 110049, India
</p>
```

### 4. Update Services

**Services Grid** (`src/components/Services.jsx`)

Edit the `services` array:
```javascript
const services = [
  {
    icon: Building2,                        // Icon from lucide-react
    title: 'Service Title',                 // Your service name
    description: 'Service description...',  // Your description
    gradient: 'from-blue-500 to-cyan-500', // Tailwind gradient
  },
  // Add more services...
];
```

Available icons from lucide-react: Building2, Megaphone, Users, BarChart3, Settings, Handshake, etc.

### 5. Update Testimonials

**Testimonials** (`src/components/Testimonials.jsx`)

Edit the `testimonials` array:
```javascript
const testimonials = [
  {
    name: 'Client Name',
    location: 'City, Country',
    content: 'Their testimonial text...',
    rating: 5,
  },
  // Add more testimonials...
];
```

### 6. Update About Section Offerings

**About Offerings** (`src/components/About.jsx`)

Edit the `offerings` array:
```javascript
const offerings = [
  {
    title: 'Step Title',
    description: 'Step description...',
  },
  // Add more steps...
];
```

### 7. Add Social Media Links

**Header Social Links** (`src/components/Header.jsx`)
```jsx
<a href="https://facebook.com/yourpage" className="...">
  <Facebook className="w-5 h-5" />
</a>
```

**Footer Social Links** (`src/components/Footer.jsx`)
- Update href attributes in social media links

---

## 🎬 Animation Customization

### Modify Animation Duration

Edit in `src/index.css`:
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;  /* Change 0.6s to desired duration */
}
```

### Add Reduced Motion Support

Add to `src/index.css`:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Create Custom Animation

1. Add keyframes to `src/index.css`:
```css
@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

2. Add animation class:
```css
.animate-slide-in-left {
  animation: slideInFromLeft 0.8s ease-out;
}
```

3. Use in components:
```jsx
<div className="animate-slide-in-left">Content</div>
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/theglobalavenues.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to vercel.com
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Drag and drop the `dist` folder to netlify.com
   - Or connect your GitHub repository

### Deploy to Traditional Hosting

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload `dist` folder** to your server using:
   - FTP
   - GitHub Actions
   - CI/CD pipeline

---

## 🔧 Advanced Customization

### Add Analytics

Install Google Analytics:
```bash
npm install @react-ga/core
```

Update `src/App.jsx`:
```jsx
import ReactGA from '@react-ga/core';

ReactGA.initialize('GA_MEASUREMENT_ID');

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  
  return (/* ... */);
}
```

### Add Form Backend Integration

The contact form currently submits locally. To save submissions:

**Option 1: Formspree (Easy)**
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  {/* form fields */}
</form>
```

**Option 2: Custom Backend**
```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  // Handle response
};
```

### Add Newsletter Integration

Integrate with services like:
- Mailchimp
- ConvertKit
- Substack
- EmailJS

---

## 📱 Mobile Optimization

### Test Responsive Design

1. Open DevTools (F12)
2. Click device toggle icon
3. Test on different screen sizes

### Optimize Images

- Use WebP format for better compression
- Add images to `public/` folder
- Import and use in components:

```jsx
<img 
  src="/images/your-image.jpg" 
  alt="Description"
  className="w-full h-auto"
/>
```

---

## ⚡ Performance Tips

1. **Lazy Load Images**
   ```jsx
   <img loading="lazy" src="..." />
   ```

2. **Code Splitting**
   ```jsx
   import { lazy, Suspense } from 'react';
   const Services = lazy(() => import('./components/Services'));
   
   <Suspense fallback={<div>Loading...</div>}>
     <Services />
   </Suspense>
   ```

3. **Minimize Re-renders**
   - Use `useCallback` for event handlers
   - Use `useMemo` for expensive computations

4. **Check Bundle Size**
   ```bash
   npm run build  # Check output size
   ```

---

## 🐛 Troubleshooting

### Dark Mode Not Working
- Clear browser cache
- Check `localStorage` in DevTools
- Verify CSS variables in `index.css`

### Animations Not Showing
- Check if `useScrollAnimation` hook is imported
- Verify animation classes exist in `index.css`
- Test scroll trigger with browser DevTools

### Build Errors
```bash
# Clear dependencies and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf .vite dist
npm run build
```

### Slow Performance
- Check DevTools Performance tab
- Reduce animation duration temporarily
- Check for memory leaks
- Profile with React DevTools

---

## 📚 Additional Resources

- **Tailwind CSS Docs**: tailwindcss.com
- **React Docs**: react.dev
- **Vite Docs**: vitejs.dev
- **Lucide Icons**: lucide.dev
- **MDN Web Docs**: developer.mozilla.org

---

## 🤝 Support

For issues or questions:
1. Check the PROJECT_INFO.md file
2. Review component documentation in code
3. Refer to Tailwind and React documentation
4. Test in browser DevTools

---

**Happy coding! 🎉**
