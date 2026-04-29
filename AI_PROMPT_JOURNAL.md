Project description

BitAkiba is a savings-first fintech web application (PWA) designed for small-scale traders and informal workers in Africa.

The app allows users to receive payments, automatically save a percentage of their income, and operate even in low or no internet conditions. It supports multiple African languages and is built for users with low digital literacy.

The system is powered by Bitcoin Lightning Network in the backend, but users should not see or interact with crypto concepts.

---

User story

- I should be able to sign up using phone/email (simple onboarding)
- I should be able to log in securely with a PIN
- I should be able to receive payments via QR code
- I should automatically save a portion of every payment (default 10%)
- I should see my savings separately from my main balance
- I should view my transaction history
- I should switch between languages (Swahili, Zulu, French, English)
- I should still access the app in low or no internet conditions
- I should see clear confirmation when a payment is successful (no fake proof)
- I should understand everything easily without technical knowledge

---

Core features

- Auto-saving logic (split payments automatically)
- Offline-first support (PWA + sync later)
- QR-based payment receiving
- Multi-language UI
- Simple dashboard (balance + savings)
- Transaction tracking

---

Create main screens

- Home Dashboard
  - Show:
    - Main balance
    - Savings balance
    - “Receive Payment” button
    - Quick stats (today’s earnings)

- Receive Payment
  - QR code display
  - Optional amount input
  - Payment status

- Savings Vault
  - Total savings
  - Lock indicator (if applied)
  - Withdraw button (with restrictions)

- Transactions
  - List of all payments
  - Show saved portion per transaction

- Language Settings
  - Switch between:
    - English
    - Swahili
    - French
    - Zulu

---

Stacks (use hyphens to indicate pointers)

Frontend:
- Use Next.js (App Router)
- Use Tailwind CSS
- Use PWA setup (service worker + manifest)
- Use react-i18next for language support

Backend:
- Use Node.js with Express
- Use TypeScript
- Use PostgreSQL or MongoDB
- Use Prisma ORM (if SQL)

Payments:
- Use LNbits or Breez SDK (Lightning Network)

Offline:
- Use service workers for caching
- Use local storage/indexedDB for pending transactions

---

Pattern

- Use MVC architecture
- Separate folders:
  - frontend
  - backend

---

Database ORM (structure your schema)

User:
- id
- email / phone
- pin
- language
- created_at

Wallet:
- user_id
- main_balance
- savings_balance

Transaction:
- id
- user_id
- amount
- saved_amount
- type (incoming)
- status
- created_at

---

Core logic

Auto-saving:
- On payment received:
  - 90% → main_balance
  - 10% → savings_balance
- Allow configurable percentage (5–20%)

---

Offline logic

- Cache UI using service worker
- Store transactions locally when offline
- Sync transactions when back online
- Show offline indicator

---

Third parties

- Lightning backend (LNbits or Breez)
- Optional SMS API (Africa’s Talking) for future offline fallback

---

Security

- PIN-based authentication
- JWT authentication for API
- Secure payment verification (no fake confirmations)

---

Style

Primary color:
- Blue (modern fintech tone)

Secondary colors:
- White
- Light gray

Theme:
- Light mode (default)
- Optional dark mode

Responsiveness:
- Mobile-first
- Works on web + installable as PWA

Navigation:
- Bottom navigation (mobile style)

Button style:
- Rounded corners
- Large touch targets

Font:
- Clean sans-serif (Inter or Satoshi)

---

Features (UX details)

- Large buttons for accessibility
- Minimal text
- Icons for clarity
- Clear “Receive Payment” CTA
- Savings visually highlighted
- Language switch easily accessible

---

Goal

Build a SIMPLE, working MVP that:
- Can be used by non-technical users
- Works in low connectivity environments
- Demonstrates auto-saving clearly

---

Output required

- Full folder structure
- Frontend component structure
- Backend API routes
- Sample UI code (Next.js + Tailwind)
- Explanation of Lightning integration
- Step-by-step build plan
