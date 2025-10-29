# Carlos Elias Rivera Mercado - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Data Scientist and Software Developer. Built with clean HTML5, CSS3, and vanilla JavaScript.

## Features

### Design
- Modern dark theme inspired by professional portfolio designs
- Fully responsive layout (mobile, tablet, desktop)
- Smooth scrolling and elegant animations
- Clean, minimalist aesthetic with accent colors

### Bilingual Support
- Toggle between English and Spanish
- Language preference saved in localStorage
- Seamless content switching without page reload

### Sections

1. **Hero Section**
   - Eye-catching introduction
   - Call-to-action buttons
   - Smooth scroll indicator

2. **About Section**
   - Professional photo
   - Educational background (ITAM, GPA: 9.58/10)
   - Study abroad experience (Aalto University, Finland)
   - IBM AI Hackathon achievement

3. **Experience Section**
   - Timeline-style layout
   - Deep Dive (Jr. Data Scientist and Lead of Research)
   - ITAM (PhD Research Assistant)
   - Crime and Security Project (Technical Lead)

4. **Projects Section**
   - Face Verification Model (PyTorch on AWS)
   - Insurance Chatbot (LangGraph + RAG on Google Cloud)
   - Crime & Security Platform (Interactive mapping)
   - Dive CLI Chatbot (Current project)

5. **Publications Section**
   - Featured Medium article on R&D
   - Link to full article

6. **Skills Section**
   - Technical skills organized by category
   - Machine Learning & AI
   - Natural Language Processing
   - Cloud Architecture (AWS, GCP)
   - Programming Languages (Python, Java, C++, SQL, Bash)
   - Data Engineering
   - Full Stack Development

7. **Contact Section**
   - Email, phone, location
   - Social media links (GitHub, LinkedIn, Twitter, Instagram)

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: 
  - CSS Grid and Flexbox for layouts
  - CSS Variables for theming
  - Smooth transitions and animations
  - Media queries for responsiveness
- **JavaScript**: 
  - Vanilla JS (no frameworks)
  - Language toggle functionality
  - Smooth scrolling
  - Intersection Observer for scroll animations
  - Mobile navigation

## Color Scheme

- Primary Background: `#0a192f` (Dark Navy)
- Secondary Background: `#112240`
- Card Background: `#1a2e4a`
- Accent Color: `#64ffda` (Cyan)
- Text Primary: `#ccd6f6` (Light Gray)
- Text Secondary: `#8892b0` (Muted Gray)

## Fonts

- Primary Font: Inter
- Heading Font: Space Grotesk
- Fallbacks: System fonts for optimal performance

## File Structure

```
Carlos-Elias-Riv.github.io/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css       # Custom styles
│   ├── js/
│   │   └── main.js         # JavaScript functionality
│   └── imgs/
│       ├── IMG_1302.png    # Profile photo
│       ├── IBM_HACKATHON.jpeg
│       └── [other images]
└── README.md
```

## Setup & Deployment

### Local Development
1. Clone the repository
2. Open `index.html` in your browser, or
3. Use a local server:
   ```bash
   python3 -m http.server 8080
   ```
4. Navigate to `http://localhost:8080`

### GitHub Pages Deployment
1. Push changes to the main branch
2. Go to repository Settings > Pages
3. Select main branch as source
4. Your site will be available at: `https://carlos-elias-riv.github.io/`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Minimal dependencies (no heavy frameworks)
- Optimized images
- CSS and JS minification ready
- Lazy loading for images (optional)
- Debounced scroll handlers

## Customization

### Changing Colors
Edit CSS variables in `assets/css/style.css`:
```css
:root {
    --primary-bg: #0a192f;
    --accent-color: #64ffda;
    /* ... other variables */
}
```

### Adding/Editing Content
- Update HTML content in `index.html`
- Add translations in `assets/js/main.js` in the `translations` object

### Adding New Sections
1. Add section in HTML with unique ID
2. Add corresponding CSS in `style.css`
3. Add navigation link if needed
4. Add translations for bilingual support

## Contact

- **Email**: carlos.rivera311202@gmail.com
- **Phone**: +52 56 18 15 5628
- **GitHub**: [Carlos-Elias-Riv](https://github.com/Carlos-Elias-Riv)
- **LinkedIn**: [Carlos Elías Rivera Mercado](https://www.linkedin.com/in/carlos-el%C3%ADas-rivera-mercado-435002239/)

## License

© 2024 Carlos Elias Rivera Mercado. All rights reserved.

---

**Note**: This portfolio is built for GitHub Pages and follows best practices for static site deployment.

