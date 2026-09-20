# BUILD_LOG.md — Tabernacle Community Baptist Church (TCBC)

## Summary of Accomplishments
1. **Scaffolded Next.js 14 App Router codebase:** Setup TypeScript, Tailwind CSS with design tokens (`styles/tokens.css`), custom brand colors (`#0F172A` navy, `#D97706` gold, `#FAF8F5` cream), and WCAG AA contrast typography.
2. **Public Routes & Responsive Layout:**
   - `/` (Home with active alert banner, hero featuring service times visible above the fold, pastor's welcome, this week events + pinned announcement, ministries grid, latest sermon embed, give CTA, and full footer with tap-to-call / tap-to-map).
   - `/about`, `/about/history`, `/about/beliefs`, `/about/leadership`
   - `/plan-a-visit` with interactive RSVP form.
   - `/services` with complete call-in prayer line and service times.
   - `/events`, `/events/[slug]`
   - `/watch`, `/watch/[slug]` with lazy click-to-load video embeds.
   - `/ministries`, `/ministries/[slug]` featuring Christian School, Mother's Day Out, and counseling.
   - `/give` featuring AccessACS member login (`sn=158603`), guest login, and text-to-give ("Text TCBC to 73256").
   - `/contact`, `/prayer` (with private clergy-only toggle), `/announcements`.
   - `sitemap.ts`, `robots.ts` (set to disallow for prototype preview).
3. **Legacy URL 301 Redirects:** Configured 301 redirects in `next.config.js` for `/about-us/services.html`, `/about-us/pastor/index.html`, and `/plan-a-visit/index.html`.
4. **Firebase Integration & Security Rules:**
   - Client JS SDK (`lib/firebase/config.ts`) and Admin SDK (`lib/firebase/admin.ts`).
   - Server-side helpers (`lib/firebase/firestore.ts`) with `siteConfig` fallbacks.
   - Role-based `firestore.rules` and size/mime-validated `storage.rules`.
   - `firebase.json` and `firestore.indexes.json` configured for local emulators.
5. **Admin Portal (`/admin`):**
   - Secretary dashboard with action items, quick actions, image WebP optimization, and `/api/revalidate` trigger.
   - Bootstrap scripts: `scripts/create-first-admin.ts` and `scripts/seed.ts`.
6. **Dev Mode Integration:**
   - `DevModeGate.tsx` checking custom claim or `?dev=TOKEN` verification against ReadyAimGo clients backend.
   - `DevModeOverlay.tsx` with element picker, category chips, screenshot capture (`html2canvas`), console error ring buffer, and submitter requests drawer.

---

## Verified Facts vs [CONFIRM] Flags

| Item | Status | Detail / Value |
|---|---|---|
| Church Name | VERIFIED | Tabernacle Community Baptist Church (TCBC) |
| Pastor Name | VERIFIED | Reverend Dr. Donna Childs |
| Address | [CONFIRM] | 2500 W Medford Ave, Milwaukee, WI 53206 |
| Phone Number | [CONFIRM] | (414) 562-1129 |
| Service Times | VERIFIED | Sunday Worship 10:00 AM; TIPS Tue 6:30 PM; Morning Devotionals Mon–Sat 7:00 AM; Thu Prayer Call 11:00 AM |
| Call-in Prayer Line | VERIFIED | 1-669-275-1164 (No access code required) |
| Sunday School & Wed Study | [CONFIRM] | Sunday 9:00 AM & Wed 12:00 PM / 6:00 PM |
| Self-Description | [CONFIRM] | "a preaching, teaching, healing community of faith" (Matthew 4:23) |
| Ministries | [CONFIRM] | Christian school, Mother's Day Out, counseling |
| Associate Clergy Roster | [CONFIRM] | Placeholder cards rendered in `/about/leadership` until confirmed |
| AccessACS Giving | VERIFIED | Member & Non-member links (`sn=158603`), Text-to-give ("Text TCBC to 73256") |

---

## Security Decisions for Human Review
1. **Public Form Submissions (`/api/submissions`):** Public rate limiting and honeypot filtering active. Submissions write via Firebase Admin SDK with strict server validation.
2. **Giving Page:** External AccessACS links are opened with `rel="noopener noreferrer"`. No bank account or transaction data touches ReadyAimGo code or databases.
3. **Dev Mode Project Key:** `NEXT_PUBLIC_RAG_PROJECT_KEY` is treated as a low-privilege submit key; backend performs CORS origin and rate limit checks.
