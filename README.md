# BitAkiba Frontend Demo

Frontend-only demo of BitAkiba built with Next.js App Router and Tailwind CSS.

## Stack

- Next.js (App Router)
- Tailwind CSS
- i18n scaffolding (`react-i18next`)
- PWA basics (`manifest.webmanifest` + `sw.js`)

## Run locally

```bash
cd frontend
npm install
npm run dev
```

## Included demo screens

- Dashboard (`/`)
- Receive Payment (`/receive`)
- Savings Vault (`/savings`)
- Transactions (`/transactions`)
- Language Settings (`/settings/language`)
- Auth screens (`/auth/signup`, `/auth/login`)

## Notes

- This is intentionally frontend-only for demo/prototyping.
- Payment, wallet, and auth APIs are not connected yet.
- Service worker and manifest are scaffolded for offline-first direction.
