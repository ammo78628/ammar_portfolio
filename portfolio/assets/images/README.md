# Images Directory

Store your portfolio images here:

## Recommended Images

1. **profile.jpg** (or profile.png)
   - Size: 300x300px (square)
   - Use: Replace the emoji avatar in the hero section
   - Suggestion: Professional headshot or avatar

2. **project1.jpg**
   - Size: 400x250px (landscape)
   - Description: E-Commerce Platform screenshot/mockup
   - Use: First project card image

3. **project2.jpg**
   - Size: 400x250px (landscape)
   - Description: Weather App screenshot/mockup
   - Use: Second project card image

4. **project3.jpg**
   - Size: 400x250px (landscape)
   - Description: Task Manager screenshot/mockup
   - Use: Third project card image

5. **favicon.ico**
   - Size: 32x32px (or 64x64px)
   - Use: Browser tab icon

## Image Optimization Tips

- Compress images using tools like TinyPNG, ImageOptim, or Squoosh
- Use modern formats (WebP, AVIF) for better compression
- Maintain aspect ratios for consistency
- Consider lazy loading for better performance

## Updating in HTML

To replace the emoji avatars with images:

```html
<!-- In Hero Section -->
<img src="assets/images/profile.jpg" alt="Ammar Agvan" class="w-full h-full object-cover">

<!-- In Project Cards -->
<img src="assets/images/project1.jpg" alt="E-Commerce Platform" class="w-full h-full object-cover">
```

**Note**: Make sure image paths are correct relative to index.html location.
