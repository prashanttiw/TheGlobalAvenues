# ⚡ Quick Start Guide - The Global Avenues Website

## 🏃 30-Second Setup

```bash
# 1. Install
npm install

# 2. Start
npm run dev

# 3. Open
# → http://localhost:5173
```

**That's it!** You now have a beautiful, animated website running locally.

---

## 🎯 Most Common Edits

### Change Company Name
**File:** `src/components/Header.jsx` (line 29)
```jsx
Global Avenues  // ← Change this
```

### Change Contact Email
**File:** `src/components/Contact.jsx` (line 23)
```jsx
<p className="text-muted-foreground">your@email.com</p>
```

### Change Phone Number
**File:** `src/components/Contact.jsx` (line 22)
```jsx
<p className="text-muted-foreground">+91 XXXXXXXXXX</p>
```

### Change Services
**File:** `src/components/Services.jsx` (line 4-20)
```javascript
const services = [
  {
    title: 'Your Service',
    description: 'Your description...',
  },
  // Edit these
];
```

### Change Testimonials
**File:** `src/components/Testimonials.jsx` (line 4-24)
```javascript
const testimonials = [
  {
    name: 'Client Name',
    content: 'Their quote...',
  },
  // Edit these
];
```

### Change Colors
**File:** `src/index.css` (line 7-23)
```css
:root {
  --primary: 210 100% 45%;        /* Edit this */
  --secondary: 200 40% 35%;       /* Edit this */
  --accent: 45 100% 50%;          /* Edit this */
}
```

---

## 🎨 Color Reference

HSL Color Format: `HUE SATURATION% LIGHTNESS%`

### Popular Colors:
| Color | HSL Value | Usage |
|-------|-----------|-------|
| Blue | 210 100% 50% | Primary |
| Green | 120 100% 50% | Success |
| Red | 0 100% 50% | Error |
| Orange | 30 100% 50% | Warning |
| Purple | 280 100% 50% | Secondary |
| Teal | 170 100% 50% | Accent |
| Pink | 320 100% 50% | Accent |

---

## 🔗 Important Files

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main app structure |
| `src/index.css` | Global styles & animations |
| `src/components/Header.jsx` | Navigation & logo |
| `src/components/Hero.jsx` | Main hero section |
| `src/components/Services.jsx` | Services showcase |
| `src/components/About.jsx` | Company info |
| `src/components/Contact.jsx` | Contact form |
| `src/components/Footer.jsx` | Footer info |
| `tailwind.config.js` | Tailwind settings |
| `SETUP_GUIDE.md` | Full customization guide |

---

## 🚀 Deploy in 3 Steps

### Option 1: Vercel (Easiest)
1. Push to GitHub
2. Go to vercel.com
3. Import repository
4. Click Deploy ✅

### Option 2: Netlify
1. `npm run build`
2. Drag `dist` folder to netlify.com
3. Deploy ✅

### Option 3: Traditional Hosting
1. `npm run build`
2. Upload `dist` folder to your server
3. Set up routing for SPA ✅

---

## 📱 Test Responsive Design

1. Open your browser (Chrome/Firefox)
2. Press `F12` (Developer Tools)
3. Click device icon (top-left)
4. Test on different devices
5. Check mobile, tablet, desktop

---

## 🎬 Animation Classes

Use these in any component:

```jsx
// Scroll-triggered animations
className="animate-fade-in-up"      // Fade in from bottom
className="animate-fade-in-down"    // Fade in from top
className="animate-fade-in-left"    // Fade in from left
className="animate-fade-in-right"   // Fade in from right
className="animate-scale-in"        // Scale in effect

// Continuous animations
className="animate-float"           // Floating motion
className="animate-glow"            // Glowing effect

// Staggered delays (for lists)
className="stagger-1"               // 0.1s delay
className="stagger-2"               // 0.2s delay
className="stagger-3"               // 0.3s delay
```

---

## 🔧 Common Tasks

### Add New Section
1. Create `src/components/YourSection.jsx`
2. Export component
3. Import in `src/App.jsx`
4. Add to main JSX

### Add Navigation Link
**File:** `src/components/Header.jsx` (line 15-21)
```jsx
const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'Your Link', href: '#yoursection' },  // Add this
];
```

### Change Logo
Replace in `src/components/Header.jsx`:
```jsx
<div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg">
  {/* Your logo or text here */}
</div>
```

### Add Image
1. Save image in `public/images/`
2. Use in component:
```jsx
<img src="/images/your-image.jpg" alt="Description" />
```

---

## 🐛 Troubleshooting

### Site not loading?
```bash
npm install
npm run dev
```

### Dark mode not working?
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R)

### Animations too slow/fast?
Edit in `src/index.css`:
```css
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;  /* Change 0.6s */
}
```

### Build fails?
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📞 Contact Information to Update

Replace these values:

| Item | File | Line |
|------|------|------|
| Phone | `src/components/Contact.jsx` | 22-24 |
| Email | `src/components/Contact.jsx` | 30-32 |
| Address | `src/components/Contact.jsx` | 40-43 |
| Phone (Footer) | `src/components/Footer.jsx` | 12-14 |
| Address (Footer) | `src/components/Footer.jsx` | 46-48 |

---

## 🎓 Key Concepts

### Theme Context
Handles dark/light mode globally. Used in Header.jsx.

### Scroll Animations
`useScrollAnimation()` hook triggers animations on scroll. Used in all sections.

### Intersection Observer
Detects when elements enter viewport for animations. High performance.

### CSS Variables
Use `--primary`, `--secondary`, etc. for consistent theming.

### Tailwind CSS
Utility-first CSS framework. Use classes like `p-4`, `text-center`, etc.

---

## 💾 Before Going Live

- [ ] Update company name
- [ ] Update contact info
- [ ] Update services
- [ ] Update testimonials
- [ ] Change colors if needed
- [ ] Add company logo
- [ ] Update social media links
- [ ] Test on mobile
- [ ] Test form submission
- [ ] Check dark mode
- [ ] Verify all links work
- [ ] Test animations

---

## 📊 Project Stats

- **Components**: 9
- **Total Lines of Code**: ~950
- **Animation Styles**: 15+
- **Color Variables**: 12
- **Responsive Breakpoints**: 6
- **Bundle Size**: ~50KB (optimized)

---

## 🆘 Need Help?

1. **Setup Issues**: Check `SETUP_GUIDE.md`
2. **Customization**: Check `SETUP_GUIDE.md` Customization section
3. **Project Overview**: Check `PROJECT_INFO.md`
4. **Full Details**: Check `IMPLEMENTATION_SUMMARY.md`

---

## ✨ Feature Checklist

✅ Header with navigation
✅ Dark/Light mode toggle
✅ Mobile hamburger menu
✅ Hero section with animations
✅ Statistics displays
✅ Services grid (6 items)
✅ About section
✅ Testimonials carousel
✅ Contact form
✅ Social media links
✅ Newsletter signup
✅ Scroll-to-top button
✅ Smooth scroll navigation
✅ Animations on scroll
✅ Responsive design

---

## 🚀 Ready to Launch?

1. **Customize content** (20 mins)
2. **Test locally** (5 mins)
3. **Build for production** (`npm run build`)
4. **Deploy** (5-10 mins on Vercel)
5. **Celebrate!** 🎉

---

**Start editing → See changes instantly → Deploy to the world!**

Happy coding! 💻
