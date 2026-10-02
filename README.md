# Jay Goswami — Security Research Lab & Portfolio (`hackerjay.com`)

Production-ready, highly optimized personal security research lab and professional portfolio website for **Jay Goswami (Jaypuri Goswami)**, hosted at [https://hackerjay.com](https://hackerjay.com).

This platform represents Jay as a:
- **Security Researcher**
- **Cloud Security Engineer**
- **Cybersecurity Educator**
- **Penetration Tester**

Built strictly using verified materials from official credentials, university degrees, and documented laboratory architectures.

---

## 🛡️ Core Creative & Architectural Philosophy

- **Zero "Fake Hacker" Tropes:** No green matrix rain, skull iconography, fake terminals executing spoofed commands, or arbitrary proficiency percentages (`Python 97%`).
- **Research Lab Aesthetic:** Modeled after a serious security researcher's technical notebook, cloud infrastructure blueprints, and modern engineering portfolios.
- **Deep Technical Accuracy:** All certifications (PNPT, eWPTv2), educational milestones (BCA, CGPA 8.81), and academic lecturing appointments (VJ Modha College) are sourced strictly from authentic documentation.
- **Strict Credential Integrity:** Completed credentials include verifiable IDs and official documents. Forward-looking certifications (AZ-104 & AZ-500) are explicitly labeled as `CURRENTLY PREPARING` and never represented as completed.

---

## ⚡ Tech Stack

- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS with custom charcoal/near-black theme (`#080c14`), technical cyan accents (`#38bdf8`), and technical grid backdrops
- **Icons:** Lucide React
- **Typography:** Inter (Modern Technical Sans) & JetBrains Mono (Technical Monospace)
- **Deployment Targets:** Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any static object storage (AWS S3, Azure Blob Storage)

---

## 📂 Project Architecture

```
hackerjay-portfolio/
├── public/
│   ├── assets/
│   │   ├── jay-goswami.jpg                 # Verified photograph
│   │   ├── Jaypuri_Goswami_Resume.pdf      # Verified downloadable resume PDF
│   │   └── certifications/
│   │       ├── ewpt-certificate.png        # Official eWPT certificate image
│   │       ├── pnpt-certificate.png        # Official PNPT certificate image
│   │       └── pnpt-certificate.pdf        # Official PNPT certificate PDF
│   ├── favicon.svg                         # Security shield SVG favicon
│   ├── robots.txt                          # Search engine bot directives
│   └── sitemap.xml                         # XML sitemap for hackerjay.com
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                      # Sticky responsive header with mobile drawer
│   │   ├── SecurityConsole.jsx             # Interactive hero telemetry console
│   │   ├── CertificateModal.jsx            # High-res certificate inspector modal
│   │   ├── ResearchModal.jsx               # Deep-dive lab methodology inspector
│   │   └── Footer.jsx                      # Minimal, elegant footer
│   ├── sections/
│   │   ├── Hero.jsx                        # Hero with portrait, CTAs, and metadata
│   │   ├── WhatIWorkOn.jsx                 # 6 capability cards with real tools
│   │   ├── Experience.jsx                  # Career path & timeline (VJ Modha College, MrWebSecure)
│   │   ├── TeachingEducation.jsx           # Dedicated pedagogy & lab design highlight
│   │   ├── Certifications.jsx              # Vault: Completed, Preparing (AZ-104/500), Planned (OSCP)
│   │   ├── CloudSecurity.jsx               # Signature interactive Azure architecture blueprint
│   │   ├── LearningRoadmap.jsx             # Technical trajectory from BCA to Cloud Defense
│   │   ├── Research.jsx                    # AD home lab, HACK-TOOLS & research areas
│   │   ├── AttackSurfaceLab.jsx            # Educational interactive attack surface pipeline
│   │   ├── Skills.jsx                      # Contextual skills with zero fake percentages
│   │   ├── About.jsx                       # Factual background and formal BCA degree
│   │   └── Contact.jsx                     # Email, verified Linktree, and validated form
│   ├── data/
│   │   ├── profile.js                      # Core biography, contact info, and metadata
│   │   ├── experience.js                   # Work history and institutional roles
│   │   ├── education.js                    # University degree, CGPA, and capstone
│   │   ├── certifications.js               # Structured credential vault
│   │   ├── research.js                     # Research projects and research areas
│   │   ├── skills.js                       # Grouped technical toolchains
│   │   ├── cloudArchitecture.js            # Azure 6-layer zero-trust blueprint
│   │   ├── attackSurface.js                # Educational 6-node attack surface data
│   │   └── roadmap.js                      # 5-phase career and certification roadmap
│   ├── App.jsx                             # Main page assembler
│   ├── index.css                           # Base Tailwind styles & technical patterns
│   └── main.jsx                            # Application entry point
├── vercel.json                             # Vercel configuration with security headers
├── netlify.toml                            # Netlify configuration with security headers
├── tailwind.config.js                      # Custom color palette and font definitions
└── vite.config.js                          # Vite build setup
```

---

## 🚀 Installation & Local Development

### 1. Prerequisites
Ensure [Node.js](https://nodejs.org/) (v18 or newer) is installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized static build will be placed into the `dist/` folder.

### 5. Preview Production Build Locally
```bash
npm run preview
```
Open `http://localhost:4173` to test the exact production bundle.

---

## 🌐 Deploying to `hackerjay.com`

### Option A: Vercel (Recommended)
1. Push this repository to GitHub/GitLab.
2. In the [Vercel Dashboard](https://vercel.com), click **Add New Project** and import the repository.
3. Framework Preset: **Vite**.
4. Output Directory: `dist`.
5. Deploy.
6. Under **Settings > Domains**, add `hackerjay.com` and `www.hackerjay.com`.
7. Configure your DNS provider with the CNAME and A records provided by Vercel.

`vercel.json` is already configured with strict HTTP security headers:
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
- `Referrer-Policy: strict-origin-when-cross-origin`

### Option B: Netlify
1. Connect your repository to [Netlify](https://app.netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. The included `netlify.toml` automatically handles SPA routing and security headers.
5. In **Domain Management**, assign `hackerjay.com` and follow DNS instructions.

### Option C: Cloudflare Pages
1. In Cloudflare Dashboard, go to **Workers & Pages > Create application > Pages**.
2. Connect repository.
3. Build command: `npm run build`, output directory: `dist`.
4. Point DNS for `hackerjay.com` directly in Cloudflare DNS.

---

## 📝 How to Update Information

Content is strictly decoupled from presentation inside the `src/data/` folder. You never have to touch JSX components to add or update your data!

### 1. Adding a New Security Research Article / Project
Open `src/data/research.js` and add an object to `researchProjects`:

```javascript
{
  id: "new-finding-slug",
  slug: "new-finding-slug",
  title: "Title of Your Security Research",
  type: "Vulnerability Research / Lab Dissection",
  category: "Web Application Security / Cloud Security",
  targetEnvironment: "Azure Cloud / Isolated Docker Environment",
  technologies: ["Burp Suite", "Python", "Azure Entra ID"],
  securityConcept: "Summary of Core Security Vector",
  summary: "A concise overview of what you tested and discovered.",
  methodology: [
    "Step 1 of assessment...",
    "Step 2 of assessment..."
  ],
  defensiveHardening: [
    "Mitigation 1...",
    "Mitigation 2..."
  ],
  result: "Documented finding and validation.",
  status: "Completed Writeup",
  date: "October 2026",
  featured: true
}
```

### 2. Updating Certification Status (e.g. When AZ-104 or AZ-500 is Completed)
Open `src/data/certifications.js`:
- Move the item from `currentlyPreparing` to `completed`.
- Update `issueDate`, `credentialId`, and add the certificate image path to `image`.
- The Certification Vault will immediately reflect the new completed badge, verification modal, and counters.

### 3. Updating Biography or Contact Info
Open `src/data/profile.js` to modify your headline, bio statements, hero metadata, email, or Linktree link.

### 4. Updating Resume PDF
Simply replace `public/assets/Jaypuri_Goswami_Resume.pdf` with your new PDF file. The navbar, hero, and contact download buttons automatically serve it.

---

## 🔒 Security Best Practices Implemented

1. **No Secret Leakage:** Zero hardcoded API keys or credentials.
2. **Safe Link Targets:** All external links use `rel="noopener noreferrer"`.
3. **Anti-Spam Contact Form:** Honeypot field trap that prevents automated bot submissions without annoying captchas.
4. **Strict HTTP Security Headers:** Configured in `vercel.json` and `netlify.toml`.
5. **No Dangerous HTML:** React's default sanitization prevents XSS; zero `dangerouslySetInnerHTML` usage.
6. **Accessible Motion:** Complete support for `prefers-reduced-motion` in CSS.

---

&copy; 2026 Jay Goswami &bull; [hackerjay.com](https://hackerjay.com)
