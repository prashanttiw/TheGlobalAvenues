# 🎨 Design System - The Global Avenues

## Color Palette

### Light Mode
```
┌─────────────────────────────────────────┐
│ Background:   #FFFFFF (White)           │
│ Foreground:   #141428 (Dark Blue)       │
├─────────────────────────────────────────┤
│ Primary:      #2196F3 (Royal Blue)      │
│ Secondary:    #1A237E (Steel Blue)      │
│ Accent:       #FFD700 (Amber Gold)      │
├─────────────────────────────────────────┤
│ Muted:        #E0E0E0 (Light Gray)      │
│ Border:       #F0F0F0 (Very Light Gray) │
└─────────────────────────────────────────┘
```

### Dark Mode
```
┌─────────────────────────────────────────┐
│ Background:   #1A1F3A (Dark Blue)       │
│ Foreground:   #F0F0F0 (Near White)      │
├─────────────────────────────────────────┤
│ Primary:      #3BA9FF (Sky Blue)        │
│ Secondary:    #4A90E2 (Light Blue)      │
│ Accent:       #FFD700 (Amber Gold)      │
├─────────────────────────────────────────┤
│ Muted:        #404060 (Dark Gray)       │
│ Border:       #303050 (Darker Gray)     │
└─────────────────────────────────────────┘
```

### HSL Values for Customization

**Light Mode CSS Variables:**
```css
:root {
  --primary: 210 100% 45%;           /* Blue */
  --secondary: 200 40% 35%;          /* Dark Blue */
  --accent: 45 100% 50%;             /* Amber */
  --background: 0 0% 100%;           /* White */
  --foreground: 200 15% 20%;         /* Dark Blue */
  --muted: 200 12% 88%;              /* Light Gray */
  --border: 200 12% 90%;             /* Very Light */
}
```

**Dark Mode CSS Variables:**
```css
.dark {
  --primary: 210 100% 55%;           /* Sky Blue */
  --secondary: 200 40% 45%;          /* Light Blue */
  --accent: 45 100% 50%;             /* Amber */
  --background: 200 20% 12%;         /* Dark Blue */
  --foreground: 0 0% 95%;            /* Near White */
  --muted: 200 15% 25%;              /* Dark Gray */
  --border: 200 15% 25%;             /* Darker Gray */
}
```

---

## Typography

### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", 
             "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", 
             "Droid Sans", "Helvetica Neue", sans-serif;
```

### Font Sizes & Usage
```
h1: 56px (3.5rem)  - Page titles
h2: 48px (3rem)    - Section titles
h3: 32px (2rem)    - Subsection titles
h4: 24px (1.5rem)  - Card titles
body: 16px (1rem)  - Body text
small: 14px (0.875rem) - Helper text
```

### Font Weights
```
Light:   300
Regular: 400
Medium:  500
Semibold: 600
Bold:    700
```

### Line Heights
```
Headings:  1.2 (tight)
Body:      1.6 (relaxed)
Lists:     1.8 (spacious)
```

---

## Spacing System

### 8px Grid System
```
2px:    0.125rem (xs)
4px:    0.25rem  (sm)
8px:    0.5rem   (md) ← Base unit
12px:   0.75rem  (lg)
16px:   1rem     (xl) ← Common
24px:   1.5rem   (2xl)
32px:   2rem     (3xl)
40px:   2.5rem   (4xl)
48px:   3rem     (5xl)
56px:   3.5rem   (6xl)
64px:   4rem     (7xl)
```

### Common Spacing Classes
```
p-2   → 8px padding
p-4   → 16px padding
p-6   → 24px padding
p-8   → 32px padding

m-2   → 8px margin
m-4   → 16px margin
m-6   → 24px margin
m-8   → 32px margin

gap-4 → 16px gap
gap-6 → 24px gap
gap-8 → 32px gap
```

---

## Border Radius

### Radius Scale
```
sm: 4px    - Small rounded corners
md: 8px    - Medium rounded corners (default)
lg: 12px   - Large rounded corners
full: 9999px - Fully rounded (circles, pills)
```

### Usage
```
Button:       rounded-lg (12px)
Card:         rounded-xl (12px)
Input:        rounded-lg (12px)
Image:        rounded-full (9999px)
Badge:        rounded-full (9999px)
```

---

## Shadows & Depth

### Shadow Levels
```
sm:   0 1px 2px 0 rgba(0,0,0,0.05)
md:   0 4px 6px -1px rgba(0,0,0,0.1)
lg:   0 10px 15px -3px rgba(0,0,0,0.1)
xl:   0 20px 25px -5px rgba(0,0,0,0.1)
2xl:  0 25px 50px -12px rgba(0,0,0,0.25)
```

### Usage
```
Cards:      shadow-md
Buttons:    hover: shadow-lg
Modals:     shadow-2xl
Inputs:     focus: shadow-md
Hover Cards: shadow-lg
```

---

## Component Styles

### Buttons

**Primary Button**
```jsx
className="px-6 py-3 bg-primary text-primary-foreground rounded-lg 
           font-semibold hover:bg-secondary transition-all 
           duration-300 transform hover:scale-105"
```

**Secondary Button**
```jsx
className="px-6 py-3 border-2 border-primary text-primary rounded-lg
           font-semibold hover:bg-primary hover:text-primary-foreground 
           transition-all duration-300"
```

**Icon Button**
```jsx
className="p-2 hover:bg-muted rounded-lg transition-colors"
```

### Cards

**Standard Card**
```jsx
className="p-6 bg-background border border-border rounded-xl 
           hover:border-primary hover:shadow-md transition-all"
```

**Service Card**
```jsx
className="p-8 bg-background border border-border rounded-2xl 
           hover:border-primary hover:shadow-lg transition-all 
           duration-500 hover:-translate-y-2"
```

### Inputs

**Text Input**
```jsx
className="w-full px-4 py-3 bg-muted border border-border rounded-lg
           focus:outline-none focus:ring-2 focus:ring-primary 
           focus:border-transparent transition-all"
```

**Textarea**
```jsx
className="w-full px-4 py-3 bg-muted border border-border rounded-lg
           focus:outline-none focus:ring-2 focus:ring-primary 
           focus:border-transparent transition-all resize-none"
```

---

## Animation Styles

### Timing Functions
```
ease-out:  (Recommended for entrance animations)
ease-in:   (Recommended for exit animations)
ease-in-out: (Recommended for continuous animations)
linear:    (Recommended for rotate, opacity)
```

### Duration Scale
```
100ms:  Very quick (micro-interactions)
300ms:  Quick (buttons, hovers)
500ms:  Medium (page transitions)
600ms:  Standard (scroll animations)
1000ms: Slow (important transitions)
```

### Preset Animations
```
fadeInUp:    0.6s, up 30px, ease-out
fadeInDown:  0.6s, down 30px, ease-out
fadeInLeft:  0.6s, left 30px, ease-out
fadeInRight: 0.6s, right 30px, ease-out
scaleIn:     0.6s, scale 0.95→1, ease-out
float:       3s, continuous up-down motion
glow:        2s, pulsing shadow effect
```

### Staggered Animation Delays
```
stagger-1:  100ms delay
stagger-2:  200ms delay
stagger-3:  300ms delay
stagger-4:  400ms delay
stagger-5:  500ms delay
stagger-6:  600ms delay
```

---

## Icon System

### Icon Sizes
```
sm:   16px (w-4 h-4)   - Inline icons
md:   20px (w-5 h-5)   - Standard
lg:   24px (w-6 h-6)   - Header icons
xl:   32px (w-8 h-8)   - Feature icons
2xl:  40px (w-10 h-10) - Hero icons
3xl:  48px (w-12 h-12) - Large features
```

### Usage
```jsx
import { IconName } from 'lucide-react';

// Standard icon
<IconName className="w-5 h-5" />

// Colored icon
<IconName className="w-6 h-6 text-primary" />

// In button
<button>
  <IconName className="w-4 h-4" />
  Click me
</button>
```

---

## Responsive Breakpoints

### Screen Sizes
```
xs:   ≥ 0px      - Mobile phones
sm:   ≥ 640px    - Landscape phones
md:   ≥ 768px    - Tablets
lg:   ≥ 1024px   - Laptops
xl:   ≥ 1280px   - Desktops
2xl:  ≥ 1536px   - Large desktops
```

### Responsive Example
```jsx
<div className="grid grid-cols-1 
                md:grid-cols-2 
                lg:grid-cols-3 
                gap-6">
  {/* Items */}
</div>
```

---

## Accessibility (WCAG 2.1 AA)

### Color Contrast
- **Normal text**: Minimum 4.5:1 ratio
- **Large text**: Minimum 3:1 ratio
- **Decorative**: No requirement

### Focus States
```jsx
className="focus:outline-none focus:ring-2 focus:ring-primary"
```

### Alt Text
```jsx
<img src="image.jpg" alt="Descriptive text" />
```

### Semantic HTML
```jsx
<header>Navigation</header>
<main>Content</main>
<section>Section</section>
<article>Article</article>
<footer>Footer</footer>
<button>Action</button>
```

---

## Motion Preferences

### Respecting User Preferences
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Dark Mode Implementation

### Theme Toggle
```jsx
import { useTheme } from './context/ThemeContext';

function Component() {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
}
```

### Conditional Styling
```jsx
// Using Tailwind dark: prefix
className="bg-white dark:bg-slate-900 text-black dark:text-white"

// Using custom logic
isDark ? 'bg-dark' : 'bg-light'
```

---

## Performance Guidelines

### Image Optimization
```jsx
<img 
  src="image.jpg" 
  alt="Description"
  loading="lazy"
  width="400"
  height="300"
/>
```

### CSS Optimization
- Use CSS variables for theming
- Minimize JavaScript calculations
- Use GPU-accelerated transforms
- Avoid layout thrashing

### JavaScript Optimization
- Use React.memo for memoization
- Use useCallback for event handlers
- Use useMemo for expensive computations
- Lazy load components when possible

---

## Quick Reference

### Most Used Classes
```
Flexbox:      flex items-center justify-between
Grid:         grid grid-cols-3 gap-4
Padding:      p-4 px-6 py-3
Margin:       m-4 mx-auto my-2
Text:         text-center text-foreground
Background:   bg-primary bg-opacity-10
Border:       border border-primary rounded-lg
Shadow:       shadow-md hover:shadow-lg
Animation:    animate-fade-in-up
Hover:        hover:bg-primary hover:scale-105
Transition:   transition-all duration-300
```

---

## Brand Guidelines

### Do's ✅
- Use primary color for CTAs
- Maintain proper spacing
- Use consistent typography
- Keep animations subtle
- Respect user preferences

### Don'ts ❌
- Don't use 6+ colors in one section
- Don't mix animation styles
- Don't use decorative fonts for body text
- Don't forget alt text on images
- Don't override focus states

---

## File Location Reference

- **Colors**: `src/index.css` (lines 7-23, 25-41)
- **Animations**: `src/index.css` (lines 45-172)
- **Tailwind Config**: `tailwind.config.js`
- **Component Styles**: Individual component files
- **Global Styles**: `src/index.css`

---

**This design system ensures consistency, accessibility, and beautiful user experience across The Global Avenues platform.**
