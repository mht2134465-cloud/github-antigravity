# ⚡ Alex Rivera | Staff Full-Stack & AI Systems Architect Portfolio

A modern, high-performance, and interactive Developer Portfolio built with **React 19**, **Tailwind CSS**, and **Vite**.

![Portfolio Preview Banner](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80)

---

## ✨ Features & Highlights

- **⚡ Fast & Modern Tech Stack**: Powered by React 19, Tailwind CSS, and Vite.
- **🌌 Interactive Particle Constellation**: Canvas-driven starfield background that smoothly reacts to cursor interaction.
- **💻 Interactive CLI Terminal Emulator (`>_ CLI`)**:
  - Full keyboard command line interface (try `help`, `bio`, `skills`, `projects`, `experience`, `theme <name>`, `matrix`, `sudo hire`, `clear`).
  - History traversal with Up/Down arrow keys.
  - Easter eggs including matrix digital rain and celebratory confetti!
- **🎨 Live Glassmorphism & Shader Lab**:
  - Interactive playground where visitors can tweak backdrop blurs, surface opacities, specular reflections, and border aura tints with live 60 FPS feedback.
  - 1-click CSS snippet copy.
- **📁 Comprehensive Case Studies & Spec Modals**:
  - Filterable project grid (AI & ML, Full-Stack, Cloud & Systems, Creative & Web3).
  - Deep-dive architectural specification modals with Problem, Solution, Impact Metrics, and Tech Badges.
- **💼 Timeline & Career Progression**:
  - Quantifiable metrics for each career phase, tech badges, and formal credentials/education.
- **🔊 Tactile UI Audio Synthesizer**:
  - Built-in Web Audio API sound generator (pure math, no external mp3 assets needed!).
  - Mute/Unmute toggle directly in the navigation bar.
- **📑 Printable & Exportable Executive CV / Resume**:
  - Instant print/PDF stylesheet formatting (`window.print()`).
- **💬 Working Interactive Contact Form**:
  - Form validation, direct email copy button with tooltip, Calendly meeting link, and confetti celebrations.
- **🌗 Multi-Theme Support**:
  - Cyber Indigo (Default)
  - Midnight Violet
  - Emerald Matrix
  - Solar Clean

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Production Build
```bash
npm run build
```
The optimized bundle will be generated in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🛠️ How to Customize with Your Own Data

All profile information, projects, experiences, articles, and skills are stored cleanly in one central file:

👉 `src/data/portfolioData.js`

To personalize this portfolio for yourself or your client:
1. Open [`src/data/portfolioData.js`](src/data/portfolioData.js).
2. Update the `personal` object with your name, bio, title, email, and social links.
3. Edit or add your projects in the `projects` array.
4. Update `skills`, `experience`, `testimonials`, and `articles`.
5. Run `npm run build` or `npm run dev` to see your updates live!

---

## 📦 Project Structure

```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx               # Glassmorphic header with theme, audio & CLI toggles
│   │   ├── Hero.jsx                 # Dynamic typewriter bio, CTAs & code widget
│   │   ├── ParticleBackground.jsx   # Interactive canvas constellation background
│   │   ├── SkillsSection.jsx        # Category tabs with animated proficiency bars
│   │   ├── ProjectsSection.jsx      # Filterable showcase grid with deep-dive modals
│   │   ├── ProjectModal.jsx         # Architectural spec modal for case studies
│   │   ├── ExperienceSection.jsx    # Career history & credentials timeline
│   │   ├── InteractivePlayground.jsx# Live Glassmorphism CSS generator
│   │   ├── TestimonialsSection.jsx  # Client & peer recommendations
│   │   ├── ArticlesSection.jsx      # Technical blog posts & modal reader
│   │   ├── ContactSection.jsx       # Working form, email copy & Calendly link
│   │   ├── Footer.jsx               # Local time ticker, quick links, back to top
│   │   ├── TerminalModal.jsx        # Interactive developer CLI terminal
│   │   ├── ResumeModal.jsx          # Printable executive CV modal
│   │   └── SocialIcons.jsx          # Clean SVG icons
│   ├── data/
│   │   └── portfolioData.js         # Central demo & configuration dataset
│   ├── utils/
│   │   └── audio.js                 # Web Audio API sound synthesizer
│   ├── App.jsx                      # Root container & theme management
│   ├── index.css                    # Tailwind CSS imports & custom animations
│   └── main.jsx                     # Vite entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚢 Deployment

You can deploy this project in seconds to:
- **Vercel**: Run `npx vercel` or link your GitHub repository.
- **Netlify**: Run `npx netlify deploy` or drag-and-drop the `dist` folder.
- **GitHub Pages**: Build with `npm run build` and deploy the `dist` folder.

---

Crafted with React 19 & Tailwind CSS.
