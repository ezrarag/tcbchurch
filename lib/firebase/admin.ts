import * as admin from "firebase-admin";

if (!admin.apps.length) {
  const projectId = process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "tcb-church";
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const rawPrivateKey = process.env.FIREBASE_PRIVATE_KEY;

  const isValidPem =
    rawPrivateKey &&
    rawPrivateKey.includes("-----BEGIN PRIVATE KEY-----") &&
    !rawPrivateKey.includes("DEMO_PRIVATE_KEY");

  if (clientEmail && isValidPem && rawPrivateKey) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId,
        clientEmail,
        privateKey: rawPrivateKey.replace(/\\n/g, "\n"),
      }),
    });
  } else {
    // Development / static build fallback
    admin.initializeApp({
      projectId,
    });
  }
}

export const adminDb = admin.firestore();
export const adminAuth = admin.auth();
export const adminStorage = admin.storage();
