# Tabernacle Community Baptist Church (TCBC) Website Template

Production-quality church website with non-technical admin portal, built for **Tabernacle Community Baptist Church** (2500 W Medford Ave, Milwaukee, WI 53206).

- **Pastor:** Reverend Dr. Donna Childs
- **Tagline:** "Empowering and Transforming Lives Through the Word of God"
- **Call-In Prayer Line:** 1-669-275-1164 (No access code)

---

## Technical Stack
- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS, shadcn/ui primitives, design tokens (`styles/tokens.css`)
- **Database & Storage:** Firebase Firestore & Cloud Storage (modular v9+ client SDK + `firebase-admin` server SDK)
- **Deployment:** Vercel

---

## Local Development & Emulators

```bash
# 1. Install dependencies
npm install

# 2. Run Next.js local development server
npm run dev

# 3. (Optional) Run Firebase Emulators
npx firebase emulators:start
```

---

## Environment Variables (`.env.local`)

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase Client API key |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase Project ID (`tcb-church`) |
| `FIREBASE_CLIENT_EMAIL` | Firebase Admin SDK Service Account Email |
| `FIREBASE_PRIVATE_KEY` | Firebase Admin SDK Private Key |
| `REVALIDATION_SECRET` | Secret token for `/api/revalidate` ISR endpoint |
| `NEXT_PUBLIC_RAG_FEEDBACK_URL` | ReadyAimGo Clients App API endpoint (`https://clients.readyaimgo.biz`) |
| `NEXT_PUBLIC_RAG_PROJECT_ID` | Project Identifier (`tcb-church`) |
| `NEXT_PUBLIC_RAG_PROJECT_KEY` | Project API Key |

---

## Admin Portal & Bootstrapping

1. Assign Owner claim to an admin email:
   ```bash
   npm run create-admin -- admin@tcb-church.com
   ```
2. Seed initial published content:
   ```bash
   npm run seed
   ```

---

## Documentation
- [Runbook](docs/RUNBOOK.md) — Cohort onboarding checklist.
- [Content Guide](docs/CONTENT_GUIDE.md) — Non-technical guide for church secretaries.
- [Dev Mode Documentation](docs/DEV_MODE.md) — How to use "Suggest a change" overlay.
- [Build Log](BUILD_LOG.md) — Development trajectory & verification log.