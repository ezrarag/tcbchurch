import { adminDb } from "./admin";
import { siteConfig } from "@/site.config";
import {
  SiteSettingsDoc,
  AlertDoc,
  AnnouncementDoc,
  EventDoc,
  SermonDoc,
  MinistryDoc,
  StaffDoc,
} from "@/lib/types";

// Static fallback data for builds & unauthenticated dev mode
export async function getSiteSettings(): Promise<SiteSettingsDoc> {
  if (process.env.NEXT_PHASE === "phase-production-build") {
    return getSiteConfigFallback();
  }
  try {
    const doc = await adminDb.collection("siteSettings").doc("main").get();
    if (doc.exists) {
      return doc.data() as SiteSettingsDoc;
    }
  } catch (err) {
    console.warn("Using site.config fallback for getSiteSettings");
  }
  return getSiteConfigFallback();
}

function getSiteConfigFallback(): SiteSettingsDoc {
  return {
    name: siteConfig.name,
    tagline: siteConfig.tagline,
    address: {
      street: siteConfig.address.street,
      city: siteConfig.address.city,
      state: siteConfig.address.state,
      zip: siteConfig.address.zip,
    },
    phone: siteConfig.phone,
    email: siteConfig.email,
    serviceTimes: siteConfig.serviceTimes,
    socials: siteConfig.socials,
    livestreamUrl: siteConfig.socials.facebook || "",
    giving: {
      provider: siteConfig.giving.provider,
      url: siteConfig.giving.memberUrl,
      note: siteConfig.giving.note,
      manualOptions: ["AccessACS Member Login", "AccessACS Guest Login", siteConfig.giving.textToGive],
      fundList: siteConfig.giving.funds,
    },
    seo: {
      metaTitle: siteConfig.name,
      metaDescription: siteConfig.tagline,
    },
    updatedAt: new Date().toISOString(),
    updatedBy: "system",
  };
}

export async function getActiveAlert(): Promise<AlertDoc | null> {
  if (process.env.NEXT_PHASE === "phase-production-build") return null;
  try {
    const now = new Date().toISOString();
    const snapshot = await adminDb
      .collection("alerts")
      .where("status", "==", "published")
      .where("startsAt", "<=", now)
      .limit(5)
      .get();

    const active = snapshot.docs
      .map((d) => ({ id: d.id, ...(d.data() as Omit<AlertDoc, "id">) }))
      .filter((a) => !a.expiresAt || a.expiresAt >= now);

    return active[0] || null;
  } catch (err) {
    return null;
  }
}

export async function getPublishedAnnouncements(limitCount = 5): Promise<AnnouncementDoc[]> {
  const fallback: AnnouncementDoc[] = [
    {
      id: "sample-1",
      status: "published",
      title: "Welcome to Tabernacle Community Baptist Church",
      body: "Join us this Sunday at 10:00 AM for Worship in-person or on Facebook Live.", // TODO confirm
      pinned: true,
      publishAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  if (process.env.NEXT_PHASE === "phase-production-build") return fallback;

  try {
    const snapshot = await adminDb
      .collection("announcements")
      .where("status", "==", "published")
      .orderBy("publishAt", "desc")
      .limit(limitCount)
      .get();

    return snapshot.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<AnnouncementDoc, "id">) }));
  } catch (err) {
    return fallback;
  }
}

export async function getUpcomingEvents(limitCount = 3): Promise<EventDoc[]> {
  const fallback: EventDoc[] = [
    {
      id: "evt-1",
      status: "published",
      title: "Sunday Morning Worship & Praise",
      slug: "sunday-worship",
      startAt: new Date(Date.now() + 86400000 * 2).toISOString(),
      endAt: new Date(Date.now() + 86400000 * 2 + 7200000).toISOString(),
      recurrence: "weekly",
      location: "Main Sanctuary — 2500 W Medford Ave",
      description: "Join us for inspiring worship, prayer, and empowering ministry from the Word of God.",
      rsvpEnabled: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "evt-2",
      status: "published",
      title: "TIPS for Growth — Midweek Bible Study",
      slug: "tips-for-growth",
      startAt: new Date(Date.now() + 86400000 * 4).toISOString(),
      endAt: new Date(Date.now() + 86400000 * 4 + 3600000).toISOString(),
      recurrence: "weekly",
      location: "Fellowship Hall & Online",
      description: "Transformational Interactive Practical Study for spiritual growth.",
      rsvpEnabled: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "evt-3",
      status: "published",
      title: "Thursday Prayer Call",
      slug: "thursday-prayer-call",
      startAt: new Date(Date.now() + 86400000 * 6).toISOString(),
      endAt: new Date(Date.now() + 86400000 * 6 + 1800000).toISOString(),
      recurrence: "weekly",
      location: "Call-in Line: 1-669-275-1164",
      description: "Gather with the church family for morning prayer and encouragement.",
      rsvpEnabled: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  if (process.env.NEXT_PHASE === "phase-production-build") return fallback;

  try {
    const now = new Date().toISOString();
    const snapshot = await adminDb
      .collection("events")
      .where("status", "==", "published")
      .where("startAt", ">=", now)
      .orderBy("startAt", "asc")
      .limit(limitCount)
      .get();

    return snapshot.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<EventDoc, "id">) }));
  } catch (err) {
    return fallback;
  }
}

export async function getPublishedSermons(limitCount = 5): Promise<SermonDoc[]> {
  const fallback: SermonDoc[] = [
    {
      id: "sermon-1",
      status: "published",
      title: "Walking in Divine Purpose",
      slug: "walking-in-divine-purpose",
      speaker: siteConfig.pastorTitle + " " + siteConfig.pastorName,
      date: new Date().toISOString().split("T")[0],
      series: "Empowered Living",
      scripture: "Matthew 4:23",
      videoUrl: "https://www.facebook.com/tcbchurchmke",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  if (process.env.NEXT_PHASE === "phase-production-build") return fallback;

  try {
    const snapshot = await adminDb
      .collection("sermons")
      .where("status", "==", "published")
      .orderBy("date", "desc")
      .limit(limitCount)
      .get();

    return snapshot.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<SermonDoc, "id">) }));
  } catch (err) {
    return fallback;
  }
}

export async function getPublishedMinistries(): Promise<MinistryDoc[]> {
  const fallback: MinistryDoc[] = [
    {
      id: "min-1",
      status: "published",
      name: "Christian School & Early Education", // TODO confirm
      slug: "christian-school",
      summary: "Nurturing faith, academic excellence, and character development in children.",
      description: "TCBC Christian Academy provides quality Christ-centered education for pre-K through elementary students.",
      order: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "min-2",
      status: "published",
      name: "Mother's Day Out", // TODO confirm
      slug: "mothers-day-out",
      summary: "Supportive early care and social development for young toddlers and infants.",
      description: "Providing parents with safe, loving childcare and early spiritual foundations.",
      order: 2,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "min-3",
      status: "published",
      name: "Biblical Counseling & Pastoral Care", // TODO confirm
      slug: "counseling",
      summary: "Compassionate spiritual guidance, prayer, and emotional healing.",
      description: "Grounding personal restoration in the truth of God's Word and prayer.",
      order: 3,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  if (process.env.NEXT_PHASE === "phase-production-build") return fallback;

  try {
    const snapshot = await adminDb
      .collection("ministries")
      .where("status", "==", "published")
      .orderBy("order", "asc")
      .get();

    return snapshot.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<MinistryDoc, "id">) }));
  } catch (err) {
    return fallback;
  }
}
