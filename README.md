# Pillay Sir's ICSE Classes — Website Guide (React + Vite)

This repository contains the official production website for **Pillay Sir's ICSE Classes**, built using **React.js** and bundled with **Vite** as a Multi-Page Application (MPA).

It preserves 100% of the original visual design, mobile responsiveness, SEO optimization, and existing Google-indexed `.html` URLs.

---

## 1. Quick Start / Development

### Prerequisites
Make sure **Node.js** (v18 or higher) is installed on your machine.

### Installation
```bash
npm install
```

### Run Locally (Development Mode)
```bash
npm run dev
```
Open the URL shown in your terminal (typically `http://localhost:5173/index.html` or `http://localhost:5173/`).

### Production Build
```bash
npm run build
```
This compiles the application and outputs optimized static files into the `dist/` directory.

### Preview Production Build Locally
```bash
npm run preview
```

---

## 2. GitHub Pages Deployment

The website is hosted on GitHub Pages under the repository path `/Pillay-Sir-s-ICSE-Classes/`.

The Vite base path is configured in `vite.config.js`:
```js
export default defineConfig({
  base: '/Pillay-Sir-s-ICSE-Classes/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        courses: resolve(__dirname, 'courses.html'),
        about: resolve(__dirname, 'about.html'),
        location: resolve(__dirname, 'location.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
});
```

### Deployment Steps:
1. Build the production files:
   ```bash
   npm run build
   ```
2. Deploy the contents of the `dist/` directory to the `gh-pages` branch (or via GitHub Actions).
3. The deployed website serves all 5 public pages without redirects:
   - `https://avaneesh-cyber2006.github.io/Pillay-Sir-s-ICSE-Classes/`
   - `https://avaneesh-cyber2006.github.io/Pillay-Sir-s-ICSE-Classes/courses.html`
   - `https://avaneesh-cyber2006.github.io/Pillay-Sir-s-ICSE-Classes/about.html`
   - `https://avaneesh-cyber2006.github.io/Pillay-Sir-s-ICSE-Classes/location.html`
   - `https://avaneesh-cyber2006.github.io/Pillay-Sir-s-ICSE-Classes/contact.html`
   - Verification file: `https://avaneesh-cyber2006.github.io/Pillay-Sir-s-ICSE-Classes/google9654c7d37e578f32.html`
   - Robots & Sitemap: `robots.txt`, `sitemap.xml`, `sitemap.txt`

---

## 3. How to Edit Website Content

### 3.1 Editing Courses & Test Series
Open `src/data/coursesData.js`.
- Modify `classProgrammes` to update Class 8, Class 9, or Class 10 titles, descriptions, subjects, or pricing.
- Modify `testSeries` to update Test Series 1, 2, 3 details or pricing.

### 3.2 Editing Toppers Data
Open `src/data/toppersData.js`.
- Update `toppers2026` or `toppers2025` arrays with student names, rank/category, achievement percentage, and photo filename.
- Add student photos to `public/` (e.g., `public/topper13.png`).

### 3.3 Editing Branch Locations & Maps
Open `src/pages/Location.jsx`.
- Update address strings or the Google Maps link URL in the `branches` array.

### 3.4 Editing Phone, Email & Instagram
Open `src/pages/Contact.jsx`.
- Update phone numbers in `phoneNumbers` array.
- Update `EMAIL_ADDRESS`, `INSTAGRAM_USERNAME`, or `INSTAGRAM_URL`.

### 3.5 Updating WhatsApp Number
In `src/pages/Contact.jsx`, locate the top configuration variable:
```js
const WHATSAPP_NUMBER = 'WHATSAPP_NUMBER';
```
Replace `'WHATSAPP_NUMBER'` with the full phone number including country code and no `+` sign (e.g., `'919822574252'`).

### 3.6 Editing SEO Titles, Descriptions & Canonical Links
Each HTML entry file in the root directory contains the static `<head>` metadata:
- `index.html` — Home page title, description, canonical link, Open Graph, and `EducationalOrganization` JSON-LD
- `courses.html` — Courses page SEO metadata
- `about.html` — About Us SEO metadata
- `location.html` — Location SEO metadata
- `contact.html` — Contact SEO metadata

---

## 4. Project Structure

```text
Pillay-Sir-s-ICSE-Classes/
│
├── public/                      # Static assets & SEO verification files
│   ├── logo.jpg
│   ├── orientation2026.png
│   ├── topper1.png ... topper12.png
│   ├── google9654c7d37e578f32.html
│   ├── robots.txt
│   ├── sitemap.xml
│   └── sitemap.txt
│
├── src/
│   ├── assets/                  # CSS-bundled assets
│   ├── components/              # Shared React components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── CourseCard.jsx
│   │   ├── TopperCard.jsx
│   │   ├── LocationCard.jsx
│   │   ├── ContactCard.jsx
│   │   └── MathSymbolEffect.jsx
│   │
│   ├── data/                    # Structured data
│   │   ├── coursesData.js
│   │   └── toppersData.js
│   │
│   ├── entries/                 # Multi-page React entry scripts
│   │   ├── main.jsx
│   │   ├── courses.jsx
│   │   ├── about.jsx
│   │   ├── location.jsx
│   │   └── contact.jsx
│   │
│   ├── pages/                   # Page components
│   │   ├── Home.jsx
│   │   ├── Courses.jsx
│   │   ├── About.jsx
│   │   ├── Location.jsx
│   │   └── Contact.jsx
│   │
│   └── style.css                # Source of truth CSS stylesheet
│
├── index.html                   # Home page entry
├── courses.html                 # Courses page entry
├── about.html                   # About page entry
├── location.html                # Location page entry
├── contact.html                 # Contact page entry
├── package.json
├── vite.config.js
└── README.md
```
