import { adminDb } from "../lib/firebase/admin";
import { siteConfig } from "../site.config";
import fs from "fs";
import path from "path";

async function seedDatabase() {
  console.log("Seeding Firestore database for Tabernacle Community Baptist Church...");

  const now = new Date().toISOString();

  // 1. siteSettings/main
  await adminDb.collection("siteSettings").doc("main").set({
    name: siteConfig.name,
    tagline: siteConfig.tagline,
    centennialTagline: siteConfig.centennialTagline,
    address: siteConfig.address,
    phone: siteConfig.phone,
    email: siteConfig.email,
    serviceTimes: siteConfig.serviceTimes,
    socials: siteConfig.socials,
    livestreamUrl: siteConfig.socials.facebook || "",
    giving: siteConfig.giving,
    seo: {
      metaTitle: `${siteConfig.name} — Celebrating 100 Years`,
      metaDescription: siteConfig.tagline,
    },
    updatedAt: now,
    updatedBy: "seed-script",
  });
  console.log("  ✓ Seeded siteSettings/main");

  // 2. announcements
  await adminDb.collection("announcements").doc("ann-centennial").set({
    status: "published",
    title: "Celebrating 100 Years of Faith & Service (1926–2026)",
    body: "Tabernacle Community Baptist Church is celebrating 100 years! Join us for special centennial worship services, community outreach rallies, and homecoming celebrations.",
    pinned: true,
    publishAt: now,
    createdAt: now,
    updatedAt: now,
    updatedBy: "seed-script",
  });
  console.log("  ✓ Seeded announcements");

  // 3. events
  await adminDb.collection("events").doc("evt-1").set({
    status: "published",
    title: "Sunday Morning Worship & Praise",
    slug: "sunday-worship",
    startAt: new Date(Date.now() + 86400000 * 2).toISOString(),
    endAt: new Date(Date.now() + 86400000 * 2 + 7200000).toISOString(),
    recurrence: "weekly",
    location: "Main Sanctuary — 2500 W Medford Ave",
    description: "Join us for inspiring worship, prayer, and empowering ministry from the Word of God.",
    rsvpEnabled: false,
    createdAt: now,
    updatedAt: now,
    updatedBy: "seed-script",
  });
  console.log("  ✓ Seeded events");

  // 4. Seed sermons from seed/tcbc-content.json if present
  const contentPath = path.join(__dirname, "../seed/tcbc-content.json");
  if (fs.existsSync(contentPath)) {
    const rawData = fs.readFileSync(contentPath, "utf-8");
    const json = JSON.parse(rawData);
    if (Array.isArray(json.sermons)) {
      for (const sermon of json.sermons) {
        await adminDb.collection("sermons").doc(sermon.id).set({
          ...sermon,
          createdAt: now,
          updatedAt: now,
          updatedBy: "seed-script",
        });
      }
      console.log(`  ✓ Seeded ${json.sermons.length} sermons from tcbc-content.json (archive back to Jan 2023)`);
    }
  }

  // 5. Seed all verified ministries from site.config.ts
  for (const min of siteConfig.ministries) {
    await adminDb.collection("ministries").doc(min.slug).set({
      status: "published",
      name: min.name,
      slug: min.slug,
      summary: min.summary,
      description: min.description,
      order: min.order,
      createdAt: now,
      updatedAt: now,
      updatedBy: "seed-script",
    });
  }
  console.log(`  ✓ Seeded ${siteConfig.ministries.length} verified TCBC ministries`);

  console.log("✅ Database seeding finished cleanly!");
}

seedDatabase().catch((err) => {
  console.error("❌ Seeding failed:", err);
  process.exit(1);
});
