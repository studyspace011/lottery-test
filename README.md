# 🎫 Lottery Ledger PWA

> **Track. Analyze. Export. All offline.**

**Lottery Ledger** is a lightweight, installable **Progressive Web App (PWA)** designed for lottery vendors to effortlessly log daily ticket sales and generate insightful weekly reports — **fully offline**, **privacy-first**, and **ready to install** on any device.

Built with simplicity and reliability in mind, your data never leaves your device. No accounts. No cloud. Just fast, secure, and always-available ledger management.

---

## ✨ Features

- **📱 Installable PWA**  
  Add to home screen on mobile or desktop—works like a native app.
  
- **🔌 100% Offline Support**  
  Powered by a Service Worker: works instantly, even with no internet.

- **📅 Daily Entry System**  
  Log sales (`In`) and returns (`Ret`) for **Morning**, **Day**, and **Night** sessions.

- **📊 Weekly Reports (Mon–Sun)**  
  View summarized performance with clear visual layout.

- **🖨️ Professional PDF Exports**  
  Generate color-coded, print-ready PDF reports with one click.

- **🔒 Finalize Weeks**  
  Lock completed weeks to prevent accidental edits.

- **🔄 Backup & Restore**  
  Export all data to CSV or restore from a backup—full control over your records.

- **🎨 Personalized Settings**  
  - Set your **name** for report headers  
  - Customize **ticket rate** for auto-revenue calculation  
  - Toggle between **Light** and **Dark** mode

---

## 🚀 Quick Start

> ⚠️ **PWA Requirement**: Must be served over **HTTPS** (Service Workers don’t work on `http://localhost` unless using a dev server with HTTPS or during local development in secure contexts).

### 1. Deploy
Upload these files to any HTTPS-enabled web host:
```
index.html
manifest.json
sw.js
icon-192x192.png
icon-512x512.png
```

### 2. Install
- **On Mobile (Chrome/Safari)**:  
  Open the URL → Tap **"Add to Home Screen"**.
  
- **On Desktop (Chrome/Edge)**:  
  Look for the **install icon (↓)** in the address bar → Click to install.

### 3. Use
- **Daily Entry**: Log sales under the *Daily Entry* tab.
- **Weekly Report**: Switch to *Weekly Report* to analyze or export.
- **Settings**: Personalize your experience under *Settings*.

---

## 📁 Project Structure

| File                 | Purpose |
|----------------------|--------|
| `index.html`         | Single-page app (HTML + inline CSS/JS) |
| `manifest.json`      | Defines PWA metadata (name, icons, display mode) |
| `sw.js`              | Service Worker for offline caching |
| `icon-192x192.png`   | App icon (mobile/home screen) |
| `icon-512x512.png`   | App icon (splash screen, desktop) |

> 💡 Entire app is **self-contained** in one HTML file—no build step required!

---

## 🛠️ Tech Stack

- **Core**: HTML5, JavaScript (ES6+), CSS  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (via CDN)  
- **PWA APIs**:  
  - Web App Manifest  
  - Service Worker (caching strategy: cache-first)  
- **PDF Generation**: [jsPDF](https://github.com/parallax/jsPDF) + [jspdf-autotable](https://github.com/simonbengtsson/jsPDF-AutoTable)  
- **Storage**: `localStorage` (client-side only — your data stays private)

---

## 🔒 Privacy & Security

- **Zero external requests** (no analytics, no trackers).  
- **All data stored locally** in your browser.  
- **No internet? No problem.** The app works flawlessly offline.

---

## 📄 License

MIT License — feel free to use, modify, and distribute.

---

> 💬 **Made with ❤️ for small business owners who value simplicity, speed, and control.**  
> ✨ **No signup. No fees. Just your ledger, your way.**

---

[![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-222222?logo=github&logoColor=white)](https://studyspace011.github.io/lottery-test/)

---

Let me know if you'd like a live demo link, contribution guidelines, or screenshots added!
