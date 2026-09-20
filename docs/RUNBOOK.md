# RUNBOOK — Client Onboarding & Cohort Deployment Guide

This runbook guides the BEAM cohort step-by-step through deploying the church website for Tabernacle Community Baptist Church or onboarding the next church template.

## Checklist

### 1. Firebase Console Setup
- [ ] Create a new project in Firebase Console (e.g. `tcb-church`).
- [ ] Enable **Authentication** (Google & Email Link sign-in).
- [ ] Enable **Firestore Database** in production mode.
- [ ] Enable **Cloud Storage**.
- [ ] Generate Service Account Key JSON under Project Settings -> Service Accounts.

### 2. Configure Environment Variables
- [ ] Copy `.env.example` to `.env.local`.
- [ ] Fill in Firebase Web Config parameters (`NEXT_PUBLIC_FIREBASE_*`).
- [ ] Fill in Admin SDK credentials (`FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY`).
- [ ] Set `REVALIDATION_SECRET` and ReadyAimGo keys (`NEXT_PUBLIC_RAG_*`).

### 3. Deploy Security Rules & Indexes
- [ ] Run `firebase deploy --only firestore:rules,storage:rules,firestore:indexes`

### 4. Create First Owner Admin & Seed Content
- [ ] Execute `npm run create-admin -- pastor@tcb-church.com`
- [ ] Execute `npm run seed`

### 5. Vercel Deployment
- [ ] Import Git repository into Vercel.
- [ ] Add all environment variables to Vercel Project Settings.
- [ ] Deploy and verify domain mapping (`www.tcb-church.com`).
