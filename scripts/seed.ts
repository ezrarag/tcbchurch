import { adminDb } from "../lib/firebase/admin";
import { siteConfig } from "../site.config";

async function seedDatabase() {
  console.log("Seeding Firestore database for Tabernacle Community Baptist Church...");

  const now = new Date().toISOString();

  // 1. siteSettings/main
  await adminDb.collection("siteSettings").doc("main").set({
    name: siteConfig.name,
    tagline: siteConfig.tagline,
    address: siteConfig.address,
    phone: siteConfig.phone,
    email: siteConfig.email,
    serviceTimes: siteConfig.serviceTimes,
    socials: siteConfig.socials,
    livestreamUrl: siteConfig.socials.facebook || "",
    giving: siteConfig.giving,
    seo: {
      metaTitle: siteConfig.name,
      metaDescription: siteConfig.tagline,
    },
    updatedAt: now,
    updatedBy: "seed-script",
  });
  console.log("  ✓ Seeded siteSettings/main");

  // 2. announcements
  await adminDb.collection("announcements").doc("ann-1").set({
    status: "published",
    title: "Welcome to Tabernacle Community Baptist Church",
    body: "Join us this Sunday at 10:00 AM for Worship in-person or live on Facebook. Call-in prayer line is available daily at 7:00 AM. [CONFIRM]",
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

  // 4. sermons
  await adminDb.collection("sermons").doc("sermon-1").set({
    status: "published",
    title: "Walking in Divine Purpose",
    slug: "walking-in-divine-purpose",
    speaker: `${siteConfig.pastorTitle} ${siteConfig.pastorName}`,
    date: new Date().toISOString().split("T")[0],
    series: "Empowered Living",
    scripture: "Matthew 4:23",
    videoUrl: siteConfig.socials.facebook || "https://www.facebook.com/tcbchurchmke",
    createdAt: now,
    updatedAt: now,
    updatedBy: "seed-script",
  });
  console.log("  ✓ Seeded sermons");

  // 5. ministries
  await adminDb.collection("ministries").doc("min-1").set({
    status: "published",
    name: "Christian School & Early Education [CONFIRM]",
    slug: "christian-school",
    summary: "Nurturing faith, academic excellence, and character development in children.",
    description: "TCBC Christian Academy provides quality Christ-centered education for pre-K through elementary students.",
    order: 1,
    createdAt: now,
    updatedAt: now,
    updatedBy: "seed-script",
  });
  console.log("  ✓ Seeded ministries");

  console.log("✅ Database seeding finished cleanly!");
}

seedDatabase().catch((err) => {
  console.error("❌ Seeding failed:", err);
  process.exit(1);
});
