# 💰 BitAkiba

> A mobile-first savings and payments app powered by Bitcoin's Lightning Network, designed to help users save automatically and access financial services in low or offline environments.

[![Next.js](https://img.shields.io/badge/Next.js-14+-black.svg)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-blue.svg)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Demo-orange.svg)]()

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Vision & Mission](#-vision--mission)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Demo Screens](#-demo-screens)
- [Installation](#-installation)
- [Internationalization](#-internationalization)
- [Progressive Web App](#-progressive-web-app)
- [Development](#-development)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Support](#-support)

---

## 🎯 Overview

**BitAkiba** is an innovative mobile-first application that combines **savings functionality** with **Bitcoin Lightning Network payments** to provide accessible financial services for underserved markets.

**Key Vision:**
- 💡 Empower users to save automatically
- 🌐 Work seamlessly in low or offline environments
- 🗣️ Support multiple African languages
- ✅ Enable secure, verified payments
- ⚡ Leverage Bitcoin Lightning Network for instant settlements

---

## 🎨 Vision & Mission

### Vision
To revolutionize financial accessibility by providing a simple, secure, and accessible savings and payments platform powered by Bitcoin.

### Mission
Enable users to:
- Save money automatically and securely
- Send and receive payments instantly
- Manage multiple wallets
- Access financial services with minimal connectivity
- Control their finances independently

---

## ✨ Features

| Feature | Description | Status |
|---------|-------------|--------|
| 💳 **Receive Payments** | Accept payments with unique payment codes | ✅ Demo |
| 💰 **Savings Vault** | Automated savings management | ✅ Demo |
| 📊 **Dashboard** | Overview of account and activity | ✅ Demo |
| 📈 **Transactions** | View and manage transaction history | ✅ Demo |
| 🌍 **Multi-Language** | Support for African languages | ✅ Demo |
| ⚙️ **Settings** | Personalization and preferences | ✅ Demo |
| 🔐 **Authentication** | Secure login and signup | ✅ Demo |
| 📱 **PWA Ready** | Install as app on mobile/desktop | 🔄 Scaffolded |
| 🌐 **Offline Support** | Basic offline functionality | 🔄 Scaffolded |

---

## 🛠️ Tech Stack

### Frontend Technologies

| Technology | Purpose | Version |
|-----------|---------|---------|
| **Next.js** | React framework with App Router | 14+ |
| **React** | UI component library | 18+ |
| **TypeScript** | Type-safe JavaScript | Latest |
| **Tailwind CSS** | Utility-first CSS | 3.0+ |

### Internationalization & Localization

| Technology | Purpose |
|-----------|---------|
| **react-i18next** | Multi-language support |
| **i18next** | Internationalization framework |

### Progressive Web App

| Technology | Purpose |
|-----------|---------|
| **Service Worker** | Offline functionality & caching |
| **Web Manifest** | Installation & app configuration |
| **PWA Plugin** | Next.js PWA integration |

---

## 📁 Project Structure

```
bit-akiba/
│
├── frontend/                    # Next.js frontend application
│   ├── public/
│   │   ├── manifest.webmanifest # PWA manifest
│   │   ├── sw.js               # Service worker
│   │   └── images/
│   │
│   ├── src/
│   │   ├── app/                # Next.js App Router pages
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx        # Dashboard (/)
│   │   │   ├── receive/        # /receive
│   │   │   ├── savings/        # /savings
│   │   │   ├── transactions/   # /transactions
│   │   │   ├── settings/       # /settings
│   │   │   └── auth/           # /auth
│   │   │
│   │   ├── components/         # Reusable components
│   │   │   ├── Header.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── PaymentCard.tsx
│   │   │
│   │   ├── hooks/              # Custom React hooks
│   │   │   ├── usePayment.ts
│   │   │   └── useSavings.ts
│   │   │
│   │   ├── utils/              # Utility functions
│   │   │   ├── api.ts
│   │   │   └── helpers.ts
│   │   │
│   │   ├── locales/            # i18n translation files
│   │   │   ├── en/
│   │   │   ├── sw/             # Swahili
│   │   │   ├── am/             # Amharic
│   │   │   └── or/             # Oromo
│   │   │
│   │   └── styles/             # Global styles
│   │       └── globals.css
│   │
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── package.json
│
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites

```
✓ Node.js v16 or higher
✓ npm or yarn package manager
✓ Git
✓ Modern web browser
```

### Installation

**Step 1:** Clone the repository
```bash
git clone https://github.com/Sheeba193/bit-akiba.git
cd bit-akiba
```

**Step 2:** Navigate to frontend directory
```bash
cd frontend
```

**Step 3:** Install dependencies
```bash
npm install
# or
yarn install
```

**Step 4:** Start development server
```bash
npm run dev
# or
yarn dev
```

✅ Application opens at `http://localhost:3000`

---

## 📱 Demo Screens

### Available Routes

| Route | Screen Name | Description | Status |
|-------|-------------|-------------|--------|
| `/` | Dashboard | Main account overview | ✅ Live |
| `/receive` | Receive Payment | Accept payments with unique codes | ✅ Live |
| `/savings` | Savings Vault | Manage automated savings | ✅ Live |
| `/transactions` | Transactions | View transaction history | ✅ Live |
| `/settings/language` | Language Settings | Change app language | ✅ Live |
| `/auth/signup` | Sign Up | Create new account | ✅ Live |
| `/auth/login` | Login | User authentication | ✅ Live |

---

## 💻 Installation

### Prerequisites Check

Ensure you have:
- ✓ Node.js v16+ installed
- ✓ npm or yarn available
- ✓ Git configured
- ✓ Active internet connection

### Step-by-Step Setup

**1. Clone Repository**
```bash
git clone https://github.com/Sheeba193/bit-akiba.git
cd bit-akiba/frontend
```

**2. Install Dependencies**
```bash
npm install
```

**3. Environment Setup**
```bash
# Create .env.local file (optional for development)
touch .env.local
```

**4. Run Development Server**
```bash
npm run dev
```

**5. Open in Browser**
```
http://localhost:3000
```

### Available Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

---

## 🌍 Internationalization

### Supported Languages

| Language | Code | Status |
|----------|------|--------|
| English | `en` | ✅ Complete |
| Swahili | `sw` | ✅ Complete |
| Amharic | `am` | 🔄 In Progress |
| Oromo | `or` | 🔄 In Progress |

### Translation Files Location

```
src/locales/
├── en/
│   └── common.json
├── sw/
│   └── common.json
├── am/
│   └── common.json
└── or/
    └── common.json
```

### Using Translations in Components

```typescript
import { useTranslation } from 'react-i18next';

export function MyComponent() {
  const { t, i18n } = useTranslation();
  
  return (
    <div>
      <h1>{t('dashboard.title')}</h1>
      <button onClick={() => i18n.changeLanguage('sw')}>
        Swahili
      </button>
    </div>
  );
}
```

---

## 📲 Progressive Web App

### PWA Features

| Feature | Status | Description |
|---------|--------|-------------|
| **Installable** | 🔄 Scaffolded | Install as native app |
| **Offline Mode** | 🔄 Scaffolded | Work without internet |
| **App Shell** | ✅ Ready | Fast loading experience |
| **Push Notifications** | 📋 Planned | Real-time updates |

### Service Worker (`public/sw.js`)

The service worker is scaffolded for implementing:
- Cache strategies
- Offline functionality
- Background sync

### Web Manifest (`public/manifest.webmanifest`)

Configures:
- App name and branding
- Display modes
- Theme colors
- App icons

---

## 🔧 Development

### Environment Variables

Create `.env.local` in `frontend/`:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001

# Features
NEXT_PUBLIC_ENABLE_PWA=true
NEXT_PUBLIC_ENABLE_OFFLINE=true
```

### Code Quality

**ESLint Configuration**
```bash
npm run lint
```

**Code Formatting**
```bash
npm run format
```

### Best Practices

- ✅ Use TypeScript for type safety
- ✅ Follow Next.js conventions
- ✅ Use Tailwind CSS for styling
- ✅ Add translations for all text
- ✅ Write meaningful commit messages

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag & drop 'out' folder to Netlify Dashboard
```

### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t bitakiba:latest .
docker run -p 3000:3000 bitakiba:latest
```

---

## 🌐 Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ Full Support |
| Firefox | Latest | ✅ Full Support |
| Safari | Latest | ✅ Full Support |
| Edge | Latest | ✅ Full Support |
| Safari iOS | 12+ | ✅ Full Support |
| Chrome Mobile | Latest | ✅ Full Support |

---

## 🔒 Security & Best Practices

### Security Measures
- ✅ Input validation on all forms
- ✅ XSS protection
- ✅ Environment variables for secrets
- ✅ HTTPS enforced in production
- ✅ Secure header configuration

### Code Quality
- ✅ TypeScript for type safety
- ✅ ESLint for code standards
- ✅ Prettier for formatting
- ✅ Git pre-commit hooks
- ✅ Branch protection rules

---

## 🤝 Contributing

We welcome contributions! Here's how to contribute:

**1. Fork the Repository**
```bash
git clone https://github.com/Sheeba193/bit-akiba.git
```

**2. Create Feature Branch**
```bash
git checkout -b feature/YourFeatureName
```

**3. Make Changes**
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Add translations for new text

**4. Commit Changes**
```bash
git commit -m "Add: Description of feature"
```

**5. Push to Branch**
```bash
git push origin feature/YourFeatureName
```

**6. Open Pull Request**

### Code Guidelines
- Use TypeScript (no `any` types)
- Follow Next.js best practices
- Use Tailwind CSS classes
- Add comments for complex logic
- Include translations for new features

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🐛 Support & Issues

### Report a Bug

Open an [Issue](https://github.com/Sheeba193/bit-akiba/issues) with:
- Clear description of the problem
- Steps to reproduce
- Screenshots if applicable
- Your environment details

### Ask Questions

Use [GitHub Discussions](https://github.com/Sheeba193/bit-akiba/discussions) for:
- General questions
- Ideas and feedback
- Show and tell

---

## 👤 About

**Creator:** Bathseba Kerubo Kengere  
**GitHub:** [@Sheeba193](https://github.com/Sheeba193)  
**Email:** 116869315+Sheeba193@users.noreply.github.com

---

## 📝 Important Notes

### Current Status
- ✅ **Frontend-only demo** for prototyping
- ✅ **UI/UX focused** experience
- 🔄 **API integration** coming soon
- 🔄 **Payment system** scaffolded
- 🔄 **Wallet integration** planned

### Limitations
- No real payment processing (demo only)
- APIs not connected yet
- Service worker features scaffolded but not fully implemented
- Authentication is UI only

---

<div align="center">

**Made with ❤️ to empower financial inclusion**

*Last updated: September 1, 2026*

[GitHub](https://github.com/Sheeba193/bit-akiba) | [Issues](https://github.com/Sheeba193/bit-akiba/issues) | [Discussions](https://github.com/Sheeba193/bit-akiba/discussions)

⚡ **Powered by Bitcoin Lightning Network** 💰

</div>
