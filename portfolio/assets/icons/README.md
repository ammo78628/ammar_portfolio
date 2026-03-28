# Icons Directory

Store your icon files here for social media and technology badges.

## Current Setup

The portfolio currently uses **emojis** for icons:

### Social Media Icons
- GitHub: 🐙 (Octopus emoji)
- LinkedIn: 💼 (Briefcase emoji)
- Email: ✉️ (Envelope emoji)

### Technology Icons
- HTML5: 📋 (Document emoji)
- CSS3: 🎨 (Palette emoji)
- JavaScript: ⚡ (Lightning emoji)
- Tailwind CSS: 💨 (Wind/Speed emoji)

### Project Icons
- E-Commerce: 🌐 (Globe emoji)
- Weather App: 📱 (Phone emoji)
- Task Manager: 📝 (Notepad emoji)

## Alternative Icon Solutions

### 1. SVG Icons (Recommended)
Best for: Performance, scalability, customization
- Download from: [Feather Icons](https://feathericons.com/), [Heroicons](https://heroicons.com/), [Tabler Icons](https://tabler-icons.io/)
- Place SVG files in this folder
- Use in HTML: `<img src="assets/icons/github.svg" alt="GitHub">`

### 2. Font Awesome
Best for: Consistency, wide variety
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
<!-- Usage: <i class="fab fa-github"></i> -->
```

### 3. Material Icons
Best for: Google design language
```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<!-- Usage: <span class="material-icons">github</span> -->
```

### 4. Convert Emojis to PNG
If you want consistent emoji appearance:
- Use emoji-to-png converters
- Or create custom emoji pngs
- Place here and reference in HTML

## How to Replace Emojis with Icons

### Example: Replace GitHub emoji with SVG

**Step 1**: Download GitHub SVG from Feather Icons

**Step 2**: Save as `github.svg` in this folder

**Step 3**: Update HTML (in index.html, Contact section):
```html
<!-- From: -->
<span>🐙</span>

<!-- To: -->
<img src="assets/icons/github.svg" alt="GitHub" class="w-6 h-6">
```

## Available Icon Resources

| Resource | Style | License | Best For |
|----------|-------|---------|----------|
| [Feather Icons](https://feathericons.com/) | Minimal | MIT | Clean, simple icons |
| [Heroicons](https://heroicons.com/) | Modern | MIT | Professional look |
| [Tabler Icons](https://tabler-icons.io/) | Consistent | MIT | Full set variety |
| [Font Awesome](https://fontawesome.com/) | Varied | Free/Paid | Most icons available |
| [Material Icons](https://fonts.google.com/icons) | Google | BSD | Material Design |

## Tips for Icon Usage

1. **Size Consistency**: Keep all icons the same size (e.g., 24x24px)
2. **Color Matching**: Use icons that match your Electric Blue accent color
3. **Accessibility**: Always include alt text for icon images
4. **Performance**: Use SVG for scalability and performance
5. **Naming**: Use clear file names (e.g., `linkedin.svg`, not `icon1.svg`)

---

Choose the approach that best fits your aesthetic and needs!
