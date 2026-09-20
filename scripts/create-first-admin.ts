import { adminAuth, adminDb } from "../lib/firebase/admin";

async function createFirstAdmin() {
  const email = process.argv[2] || "admin@tcb-church.com";
  console.log(`Setting up owner admin custom claim for: ${email}`);

  try {
    const user = await adminAuth.getUserByEmail(email);
    await adminAuth.setCustomUserClaims(user.uid, { role: "owner" });

    await adminDb.collection("admins").doc(user.uid).set({
      uid: user.uid,
      email: user.email,
      role: "owner",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    console.log(`✅ Owner custom claim and admin doc created successfully for UID: ${user.uid}`);
  } catch (err) {
    console.error("❌ Error setting up admin user:", err);
    process.exit(1);
  }
}

createFirstAdmin();
