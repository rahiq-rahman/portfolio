# Rahiq Rahman — Portfolio

A modern, sophisticated personal portfolio built with **Vite + React**.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📸 Adding Your Photo

Replace the placeholder with your actual photo:

1. Copy your photo (JPG/PNG) to `src/assets/`
2. Rename it to `profile.jpg`
3. Done! The hero section will display it automatically.

## 🎨 Design Features

- **Custom magnetic cursor** with blend-mode difference
- **3D tilt effect** on cards (mouse-tracking perspective transform)
- **Scroll reveal** animations with staggered delays
- **Floating orbs** with ambient glow effects
- **Grid background** with radial mask in hero
- **Marquee ticker** of tech skills
- **Glassmorphism** navbar with backdrop blur
- **Timeline** experience section with animated line
- **Noise texture** overlay for tactile depth

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── profile.jpg       ← Replace with your photo
│   ├── App.jsx               ← All sections & data
│   ├── index.css             ← Full design system & animations
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🛠 Customization

All content data lives at the top of `src/App.jsx`:
- `skillCategories` — your tech stack
- `projects` — project cards
- `experiences` — work timeline
- `education` — academic history

Colors and fonts are CSS variables in `src/index.css` under `:root`.

## 📦 Dependencies

- React 18
- Vite 5
- Google Fonts: Syne, DM Mono, Instrument Serif (loaded via CDN)
