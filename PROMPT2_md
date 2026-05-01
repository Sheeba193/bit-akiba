Project description

BitAkiba is a mobile-first fintech web application (PWA) designed for small-scale traders and informal earners in Africa.

The platform allows users to:
- Receive payments
- Automatically save up to 10% of every transaction
- Connect different wallet providers
- Operate in low internet environments
- Use the app in multiple African languages

The system uses Bitcoin Lightning Network in the backend but hides all crypto complexity from users.

The experience should feel like a simple mobile money app.

---

User story

- I should be able to sign up and log in securely
- I should be able to select my language (Swahili, French, Zulu, English)
- I should optionally define my user type (trader, freelancer, seller)
- I should connect a wallet from multiple options
- I should receive payments via QR or link
- I should automatically save a portion of every transaction (max 10%)
- I should view my savings separately
- I should not withdraw savings before lock period ends
- I should view transactions clearly
- I should upgrade to premium for more flexibility

---

Landing page requirements

- Hero section (value proposition)
- How it works section (3 steps)
- Benefits:
  - Lower fees
  - Automatic savings
  - Financial discipline
- FAQ:
  - Do I need a wallet?
  - How does saving work?
- Terms and conditions
- CTA button “Get Started”

---

App transition

- On clicking Get Started:
  - Switch UI to mobile app view
  - Center screen inside phone frame layout

---

Core features

- Wallet connection system
- Auto-saving (max 10%)
- Lock-based savings vault
- Payment receiving (QR)
- Transaction tracking
- Multi-language support
- Offline-first support

---

Wallet system

Supported options:
- Browser wallet (window.ethereum)
- LNbits
- Breez SDK
- WalletConnect
- M-Pesa bridge

Wallet setup flow:
1. Email authentication (OTP)
2. Permission approval
3. Wallet handshake
4. Confirmation

---

Frontend

- Use Next.js (App Router)
- Use Tailwind CSS
- Mobile-first design
- PWA enabled
- Phone frame UI after onboarding

Pages:
- Landing page
- Auth screens
- Dashboard
- Wallet connect flow
- Transactions
- Savings vault
- Profile
- Language settings

---

Backend

- Node.js + Express
- TypeScript
- PostgreSQL or MongoDB

Endpoints:
- /signup
- /login
- /verify-otp
- /connect-wallet
- /receive-payment
- /split-payment
- /transactions
- /withdraw-savings
- /upgrade-premium

---

Database

User:
- id
- name
- email
- pin
- language
- user_type
- is_premium

Wallet:
- id
- user_id
- provider
- status

Transaction:
- id
- user_id
- amount
- saved_amount
- type
- status

Savings:
- user_id
- amount
- lock_period
- unlock_date

---

Savings logic

- Max saving percentage = 10%
- Split on every transaction
- Enforce lock period
- Withdrawal only after unlock

---

Premium features

- Flexible savings percentage
- Early withdrawal (emergency mode)
- Savings goals
- Analytics dashboard
- Notifications

---

Offline support

- Cache UI using service worker
- Store transactions locally
- Sync when back online

---

Language system

- Use react-i18next
- Provide translations:
  - English
  - Swahili
  - French
  - Zulu

---

Security

- JWT authentication
- PIN verification
- Secure wallet handshake
- Prevent fake transactions

---

Style

Primary color:
- #003D9B (blue)

Design:
- Clean fintech UI
- Rounded buttons
- Large touch targets
- Minimal text

---

Goal

Build a realistic MVP that:
- Does not feel like a demo
- Simulates real wallet connections
- Demonstrates real user value

---

Output required

- Full architecture
- Folder structure
- UI components
- Backend APIs
- Wallet integration logic
- Step-by-step implementation plan
