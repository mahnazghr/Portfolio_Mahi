# Portfolio_Mahi

Personal UI/UX portfolio of Mahnaz Gharehbaghi — plain HTML/CSS/JS, deployed on Vercel.

- `index.html` – home page (hero, about, case studies, contact)
- `case-studies/hot2go.html` – HOT2GO case study (sections exported from Figma as WebP)
- `case-studies/hero-section.html` – code practice: hero section built with plain HTML & CSS
- `demos/hero-section/` – live demo of that hero section (copy of github.com/mahnazghr/hero-section-html-css, asset paths made absolute)
- `case-studies/coming-soon.html` – unused placeholder for a future case study
- `styles.css`, `main.js` – styles and scroll animations

## Add a new case study
1. Export the Figma sections as images into `assets/<project>/`.
2. Copy `case-studies/hot2go.html`, rename it and update text + image paths.
3. Point the second card in `index.html` to the new page.
4. Commit and push – Vercel redeploys automatically.
