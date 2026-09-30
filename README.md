# Oke Precious Abioye — Developer Portfolio

A futuristic, high-performance developer portfolio built with React, Vite, and a bespoke Glassmorphism design system. Designed to showcase full-stack engineering expertise, production applications, and open-source contributions.

## 🚀 Technologies & Architecture

- **Core Framework**: React 19 + Vite
- **Styling Architecture**: Futuristic Glassmorphism with CSS Custom Properties, backdrop-filter blur, luminous accents, and dark-first theming
- **Typography**: Poppins & modern monospace font stacks
- **Animations**: AOS (Animate on Scroll) & cubic-bezier micro-interactions
- **Icons**: FontAwesome 6
- **Data Source**: Centralized data architecture in `src/data/portfolioData.js`

## 🌟 Key Sections

1. **Floating Glass Navbar**: Sticky frosted navigation with active section scroll spy, theme toggle, and responsive mobile drawer.
2. **Hero Section**: Dynamic typing indicator, live availability status, and high-tech glass framed portrait.
3. **About & Engineering Philosophy**: Background narrative paired with an interactive developer spec terminal card.
4. **Key Metrics**: Tabular animated statistic counters (10+ Projects, 8+ Happy Clients, 2+ Years Experience).
5. **Core Competencies**: Categorized technical ecosystem (Frontend, Backend, Databases, Tools, Design).
6. **Portfolio Showcase**:
   - **Featured Flagship Project**: *Gavel Case Tracker* (MERN stack, JWT auth, RBAC, CSV/PDF reports).
   - Filterable projects: *Precious Bank Web App*, *Projexa*, *Atmos Weather*, *Special Bean Scene*, and *Special Hotel*.
7. **GitHub Integration**: Direct public sync with `github.com/Oke-Precious` displaying repositories, star counts, and language badges.
8. **Services & Solutions**: Clean glass cards defining development capabilities.
9. **Client Testimonials**: Verified founder reviews in glass quotation containers.
10. **Contact & Channels**: Working contact form with spam protection and direct social coordinates.

## 🛠️ Local Development

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- npm or bun

### 2. Installation
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
The application will launch on `http://localhost:3000`.

### 4. Build for Production
```bash
npm run build
```
Optimized assets will be generated in the `dist` directory.

### 5. Preview Production Build
```bash
npm run preview
```

## 🌐 Deploying to Netlify

This project includes a pre-configured `netlify.toml` and `public/_redirects`.

### Option A: Connected via GitHub (Recommended)
1. Push your repository to GitHub.
2. In Netlify, go to **Site configuration > Build & deploy > Continuous deployment**.
3. Ensure the build settings are:
   - **Base directory**: (leave blank or `/`)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Trigger a new deploy. Netlify will run the build and publish the compiled `dist/` directory.

### Option B: Manual Deploy (Drag & Drop)
1. Run `npm run build` locally in your terminal.
2. Drag and drop the generated **`dist`** folder (NOT the root project folder) into Netlify.

## ⚙️ Configuration & Environment

Refer to `.env.example` for environment variable options:
```env
PORT=3000
```

Project content can be maintained directly in `src/data/portfolioData.js`.

---
© 2026 Oke Precious Abioye. All Rights Reserved.
