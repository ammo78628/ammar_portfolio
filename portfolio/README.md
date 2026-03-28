# Ammar Agvan - Frontend Developer Portfolio

A modern, minimalist single-page portfolio website built with **HTML5**, **Tailwind CSS**, and **Vanilla JavaScript**. Features a dark mode aesthetic with Electric Blue accents, fully responsive design, and smooth animations.

## 🎯 Features

✨ **Dark Mode** with Electric Blue accent color
📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
⚡ **Smooth Animations** - Scroll reveals, hover effects, and transitions
🎨 **Modern Design** - Clean, professional, minimalist aesthetic
♿ **Accessible** - Semantic HTML and focus states
🚀 **Performance** - Lightweight, no external dependencies
📊 **Tailwind CSS** - Utility-first CSS styling
🖱️ **Interactive Elements** - Mobile menu, smooth scrolling, scroll progress

## 📂 Project Structure

```
ammar-portfolio/
├── index.html          # Main entry point with all sections
├── css/
│   └── style.css       # Custom styles and animations
├── js/
│   └── main.js         # Interactive functionality
└── assets/
    ├── images/         # Profile pictures, project screenshots
    └── icons/          # Social media and technology icons
```

## 🎨 Sections

### Hero Section
- Bold, gradient typography
- Professional introduction
- Call-to-action buttons
- Animated profile avatar

### About Me
- Personalized introduction
- Focus on clean code and UX
- Stats card (Experience, Projects, Technologies)

### Skills
- Grid layout showcasing 4 core technologies
- HTML5, CSS3, JavaScript, Tailwind CSS
- Hover effect cards with emojis
- Responsive grid (2 columns mobile, 4 columns desktop)

### Projects
- 3 Featured project cards
- Project images/avatars
- Project descriptions
- "View Project" links
- Hover scale and shadow effects
- Multiple gradient colors

### Contact
- Section header
- Call-to-action text
- Social media links (GitHub, LinkedIn, Email)
- Emoji-based icons
- Large social buttons with hover effects

### Navigation
- Fixed navbar with logo
- Desktop menu links
- Mobile hamburger menu
- Active state indicators on scroll
- Responsive design

## 🚀 Getting Started

### Option 1: Open in Browser Directly
1. Navigate to the `ammar-portfolio` folder
2. Double-click `index.html` to open in your default browser

### Option 2: Local Development Server
Use any local server to view the site:

**Python 3:**
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
# Visit http://localhost:8000
```

**Node.js (with http-server):**
```bash
npm install -g http-server
http-server
```

**Live Server (VS Code Extension):**
1. Install Live Server extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

## 🎨 Customization

### Change Colors
Edit the accent color throughout the site by replacing:
- `from-blue-400 to-blue-600` with other Tailwind colors
- Examples: `from-emerald-400 to-emerald-600` or `from-purple-400 to-purple-600`

### Update Content
Edit `index.html` directly:
- **Hero Section**: Change the introduction text
- **About Section**: Update personal description
- **Projects**: Modify project cards with your own work
- **Contact**: Update email and social links

### Add Profile Picture
1. Place your profile image in `assets/images/`
2. Replace the emoji avatar in the hero section with:
```html
<img src="assets/images/profile.jpg" alt="Ammar Agvan" class="w-full h-full object-cover">
```

### Add Project Images
1. Place project images in `assets/images/`
2. Replace the emoji in project cards with:
```html
<img src="assets/images/project1.jpg" alt="Project Name" class="w-full h-full object-cover">
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS 3** - Utility-first CSS framework (CDN)
- **Vanilla JavaScript** - Pure JS, no frameworks
- **CSS Animations** - Custom animations and transitions

## ✨ Interactive Features

1. **Mobile Menu** - Hamburger menu that toggles on mobile
2. **Smooth Scrolling** - Seamless navigation between sections
3. **Scroll Reveal** - Elements fade in as you scroll
4. **Active Navigation** - Nav links highlight current section
5. **Scroll Progress** - Visual progress bar at top of page
6. **Hover Effects** - Interactive effects on cards and buttons
7. **Parallax** - Subtle parallax scrolling effect (optional)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (small phones and tablets)
- **Tablet**: 768px - 1024px (medium devices)
- **Desktop**: > 1024px (large screens)

All elements scale appropriately for each breakpoint using Tailwind's responsive prefixes (sm:, md:, lg:).

## ♿ Accessibility

- Semantic HTML elements
- Proper heading hierarchy
- Focus states for keyboard navigation
- Color contrast compliance
- Alt text support for images
- ARIA labels where needed

## 🚀 Performance Tips

1. **Optimize Images**: Compress images before adding to assets/
2. **Lazy Loading**: Add `loading="lazy"` to images for faster load times
3. **Minify CSS**: If adding custom CSS, minify it for production
4. **CDN**: Tailwind CSS is loaded via CDN for seamless performance

## 📝 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 🔧 Future Enhancements

Consider adding:
- Blog section
- Testimonials
- Dark/Light theme toggle
- Form submission (with backend service)
- Project filtering by technology
- Animation library (AOS, GSAP)
- PDF resume download
- Skill progress bars

## 📄 License

Free to use and modify for your portfolio.

## 👨‍💻 About This Template

This portfolio template is designed to be:
- **Clean** - Minimal, distraction-free design
- **Modern** - Current design trends and practices
- **Fast** - Optimized for performance
- **Accessible** - Inclusive for all users
- **Responsive** - Perfect on any device
- **Customizable** - Easy to personalize

---

**Ready to showcase your work?** Start customizing and deploying! 🚀
