# 🚀 Anti-Gravity Technology — Full Stack Website

A stunning sci-fi themed full-stack website built with **React** (Vite) frontend and **Node.js/Express/MongoDB** backend.

![Theme](https://img.shields.io/badge/Theme-Sci--Fi%20Anti--Gravity-blueviolet)
![Frontend](https://img.shields.io/badge/Frontend-React%2018-61DAFB)
![Backend](https://img.shields.io/badge/Backend-Express.js-000000)
![Database](https://img.shields.io/badge/Database-MongoDB-47A248)

## ✨ Features

- **Hero Section** — Floating astronauts, planets, cars with orbit ring animations
- **About Section** — Animated glowing orb with rotating rings
- **Services Section** — Dynamic cards fetched from the backend API
- **Image Gallery** — Responsive grid with category filters and lightbox modal
- **Contact Form** — Sends data to backend REST API
- **Glassmorphism UI** — Frosted glass effects throughout
- **Neon Glow Design** — Blue/purple gradient accents and glow effects
- **Dark Space Theme** — Animated star-field background
- **Fully Responsive** — Mobile-first design with hamburger menu

## 📁 Folder Structure

```
├── backend/
│   ├── config/db.js          # MongoDB connection
│   ├── models/               # Mongoose schemas
│   │   ├── Image.js
│   │   ├── Service.js
│   │   └── Contact.js
│   ├── routes/               # Express API routes
│   │   ├── imageRoutes.js    # GET /api/images
│   │   ├── serviceRoutes.js  # GET /api/services
│   │   └── contactRoutes.js  # POST /api/contact
│   ├── seed.js               # Database seed script
│   ├── server.js             # Express entry point
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/       # React components + CSS
    │   │   ├── Navbar
    │   │   ├── Hero
    │   │   ├── About
    │   │   ├── Services
    │   │   ├── Gallery
    │   │   ├── Contact
    │   │   └── Footer
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css         # Global design system
    │   └── main.jsx
    ├── index.html
    ├── vite.config.js
    └── package.json
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas) — *optional, app works with fallback data*

### 1. Backend

```bash
cd backend
npm install

# Optional: seed the database (requires MongoDB running)
npm run seed

# Start the server
npm start
```

The API runs at **http://localhost:5000**

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

The app runs at **http://localhost:5173**

### 3. API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/images` | Returns gallery images |
| GET | `/api/services` | Returns service cards |
| POST | `/api/contact` | Saves contact form data |
| GET | `/api/health` | Health check |

> **Note:** If MongoDB is not running, the API automatically serves fallback data so the demo still works!

## 🎨 Design System

- **Font (Headings):** Orbitron
- **Font (Body):** Inter
- **Primary:** `#00d4ff` (Neon Blue)
- **Secondary:** `#a855f7` (Neon Purple)
- **Background:** `#0a0a1a` (Dark Space)
- **Glass:** `backdrop-filter: blur(16px)` with 5% white bg
