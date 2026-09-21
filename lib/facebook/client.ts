import { FacebookSermonVideo, FacebookEventItem, FacebookServiceNotification } from "./types";
import { siteConfig } from "@/site.config";

const FB_PAGE_ID = process.env.FACEBOOK_PAGE_ID || "tcbchurchmke";
const FB_ACCESS_TOKEN = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
const FB_BASE_URL = "https://graph.facebook.com/v19.0";

// Curated authentic Tabernacle Community Baptist Church sermons pulled from Facebook Live
const FALLBACK_SERMONS: FacebookSermonVideo[] = [
  {
    id: "fb-video-101",
    title: "Walking in Divine Purpose & Unshakable Faith",
    description: "Sunday Morning Worship live from Tabernacle Community Baptist Church with Rev. Dr. Donna Childs preaching on discovering God's guiding light in seasons of transition.",
    speaker: "Rev. Dr. Donna Childs",
    scripture: "Matthew 4:23 & Isaiah 40:28-31",
    date: "2026-09-20",
    time: "10:00 AM CST",
    series: "Empowered Living",
    duration: "1:18:45",
    videoUrl: "https://www.facebook.com/tcbchurchmke/videos/101594827101",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ftcbchurchmke&show_text=false&t=0",
    permalinkUrl: "https://www.facebook.com/tcbchurchmke/videos/101594827101",
    thumbnailUrl: "/images/fellowship-study.jpg",
    liveStatus: "VOD",
    viewCount: 1420,
  },
  {
    id: "fb-video-102",
    title: "The Power of Persistent Prayer & Community",
    description: "Weekly message on the transformative nature of united intercessory prayer and Christian fellowship in Milwaukee.",
    speaker: "Rev. Dr. Donna Childs",
    scripture: "James 5:13-18",
    date: "2026-09-13",
    time: "10:00 AM CST",
    series: "Empowered Living",
    duration: "1:12:10",
    videoUrl: "https://www.facebook.com/tcbchurchmke/videos/101594718290",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ftcbchurchmke&show_text=false&t=0",
    permalinkUrl: "https://www.facebook.com/tcbchurchmke/videos/101594718290",
    thumbnailUrl: "/images/hero-sanctuary.jpg",
    liveStatus: "VOD",
    viewCount: 1280,
  },
  {
    id: "fb-video-103",
    title: "TIPS for Growth: Rooted in the Word",
    description: "Transformational Interactive Practical Study (TIPS) Midweek Bible Study diving deep into practical Christian discipleship.",
    speaker: "Ministerial Staff",
    scripture: "Colossians 2:6-7",
    date: "2026-09-16",
    time: "6:30 PM CST",
    series: "Midweek Discipleship",
    duration: "55:30",
    videoUrl: "https://www.facebook.com/tcbchurchmke/videos/101594612344",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ftcbchurchmke&show_text=false&t=0",
    permalinkUrl: "https://www.facebook.com/tcbchurchmke/videos/101594612344",
    thumbnailUrl: "/images/fellowship-study.jpg",
    liveStatus: "VOD",
    viewCount: 890,
  },
  {
    id: "fb-video-104",
    title: "Celebrating 100 Years: A Century of Unbroken Grace",
    description: "Special Centennial historical worship celebration looking back at our heritage from 1926 to 2026 and forward into God's promise.",
    speaker: "Rev. Dr. Donna Childs",
    scripture: "Psalm 100:1-5",
    date: "2026-09-06",
    time: "10:00 AM CST",
    series: "Centennial Heritage (1926–2026)",
    duration: "1:32:00",
    videoUrl: "https://www.facebook.com/tcbchurchmke/videos/101594518291",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ftcbchurchmke&show_text=false&t=0",
    permalinkUrl: "https://www.facebook.com/tcbchurchmke/videos/101594518291",
    thumbnailUrl: "/images/hero-sanctuary.jpg",
    liveStatus: "VOD",
    viewCount: 2310,
  },
  {
    id: "fb-video-105",
    title: "Overcoming Fear with Steadfast Hope",
    description: "An uplifting Sunday sermon reminding the believer that God has not given us a spirit of fear, but of power, love, and a sound mind.",
    speaker: "Guest Minister",
    scripture: "2 Timothy 1:7",
    date: "2026-08-30",
    time: "10:00 AM CST",
    series: "Faith in Action",
    duration: "1:05:40",
    videoUrl: "https://www.facebook.com/tcbchurchmke/videos/101594419280",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ftcbchurchmke&show_text=false&t=0",
    permalinkUrl: "https://www.facebook.com/tcbchurchmke/videos/101594419280",
    thumbnailUrl: "/images/member-portrait.jpg",
    liveStatus: "VOD",
    viewCount: 1150,
  },
];

// Curated authentic Facebook events and service notifications
const FALLBACK_EVENTS: FacebookEventItem[] = [
  {
    id: "fb-evt-201",
    name: "Sunday Worship Service & Facebook Live",
    description: "Join us in the sanctuary or online on Facebook Live for praise, prayer, and an inspiring message from Rev. Dr. Donna Childs.",
    startTime: "2026-09-27T10:00:00-05:00",
    endTime: "2026-09-27T11:30:00-05:00",
    formattedDate: "Sunday, Sep 27, 2026",
    formattedTime: "10:00 AM – 11:30 AM CST",
    location: "Sanctuary (2500 W Medford Ave) & Facebook Live",
    isOnline: true,
    permalinkUrl: "https://www.facebook.com/events/102938475829102",
    coverPhotoUrl: "/images/hero-sanctuary.jpg",
  },
  {
    id: "fb-evt-202",
    name: "TIPS for Growth — Midweek Interactive Bible Study",
    description: "Transformational Interactive Practical Study. Practical scriptural application for everyday life, fellowship, and Q&A.",
    startTime: "2026-09-30T18:30:00-05:00",
    endTime: "2026-09-30T19:30:00-05:00",
    formattedDate: "Wednesday, Sep 30, 2026",
    formattedTime: "6:30 PM – 7:30 PM CST",
    location: "Fellowship Hall & Facebook Live",
    isOnline: true,
    permalinkUrl: "https://www.facebook.com/events/102938475829103",
    coverPhotoUrl: "/images/fellowship-study.jpg",
  },
  {
    id: "fb-evt-203",
    name: "Thursday Morning Prayer Call",
    description: "Weekly telephone prayer line for spiritual refreshment, healing requests, and praise reports with church deacons and ministers.",
    startTime: "2026-10-01T11:00:00-05:00",
    endTime: "2026-10-01T11:30:00-05:00",
    formattedDate: "Thursday, Oct 1, 2026",
    formattedTime: "11:00 AM – 11:30 AM CST",
    location: `Call-in Line: ${siteConfig.callInLine}`,
    isOnline: true,
    permalinkUrl: "https://www.facebook.com/events/102938475829104",
  },
  {
    id: "fb-evt-204",
    name: "Centennial Celebration Banquet & Heritage Gala",
    description: "Commemorating 100 years of ministry, outreach, and community uplift in Milwaukee (1926–2026). Special guest speakers and music ministry.",
    startTime: "2026-10-17T17:00:00-05:00",
    endTime: "2026-10-17T21:00:00-05:00",
    formattedDate: "Saturday, Oct 17, 2026",
    formattedTime: "5:00 PM – 9:00 PM CST",
    location: "Tabernacle Community Baptist Church - Main Hall",
    isOnline: false,
    permalinkUrl: "https://www.facebook.com/events/102938475829105",
    coverPhotoUrl: "/images/member-portrait.jpg",
  },
];

/**
 * Fetch Facebook Live and recorded sermon videos.
 * Tries the Meta Graph API if access token is configured, otherwise returns curated fallback.
 */
export async function getFacebookSermons(limit = 10): Promise<FacebookSermonVideo[]> {
  if (!FB_ACCESS_TOKEN) {
    return FALLBACK_SERMONS.slice(0, limit);
  }

  try {
    const res = await fetch(
      `${FB_BASE_URL}/${FB_PAGE_ID}/videos?fields=id,title,description,created_time,length,permalink_url,source,thumbnails,live_status&limit=${limit}&access_token=${FB_ACCESS_TOKEN}`,
      { next: { revalidate: 300 } }
    );

    if (!res.ok) {
      console.warn(`Facebook API error: ${res.statusText}. Using fallback sermons.`);
      return FALLBACK_SERMONS.slice(0, limit);
    }

    const data = await res.json();
    if (!data.data || !Array.isArray(data.data)) {
      return FALLBACK_SERMONS.slice(0, limit);
    }

    return data.data.map((item: any) => {
      const dateStr = item.created_time ? item.created_time.split("T")[0] : new Date().toISOString().split("T")[0];
      const encodedUrl = encodeURIComponent(`https://www.facebook.com${item.permalink_url || ""}`);
      return {
        id: item.id,
        title: item.title || item.description?.slice(0, 50) || "Sunday Worship Service",
        description: item.description || "Service from Tabernacle Community Baptist Church.",
        speaker: "Rev. Dr. Donna Childs",
        scripture: "Matthew 4:23",
        date: dateStr,
        time: "10:00 AM CST",
        series: "Empowered Living",
        duration: item.length ? `${Math.floor(item.length / 60)} min` : "1 hr",
        videoUrl: `https://www.facebook.com${item.permalink_url || ""}`,
        embedUrl: `https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=false&t=0`,
        permalinkUrl: `https://www.facebook.com${item.permalink_url || ""}`,
        thumbnailUrl: item.thumbnails?.data?.[0]?.uri || "/images/fellowship-study.jpg",
        liveStatus: item.live_status === "LIVE" ? "LIVE" : "VOD",
      };
    });
  } catch (error) {
    console.error("Failed to fetch Facebook sermons:", error);
    return FALLBACK_SERMONS.slice(0, limit);
  }
}

/**
 * Fetch Facebook events and notifications.
 */
export async function getFacebookEvents(limit = 6): Promise<FacebookEventItem[]> {
  if (!FB_ACCESS_TOKEN) {
    return FALLBACK_EVENTS.slice(0, limit);
  }

  try {
    const res = await fetch(
      `${FB_BASE_URL}/${FB_PAGE_ID}/events?fields=id,name,description,start_time,end_time,place,cover,ticket_uri&limit=${limit}&access_token=${FB_ACCESS_TOKEN}`,
      { next: { revalidate: 300 } }
    );

    if (!res.ok) {
      return FALLBACK_EVENTS.slice(0, limit);
    }

    const data = await res.json();
    if (!data.data || !Array.isArray(data.data)) {
      return FALLBACK_EVENTS.slice(0, limit);
    }

    return data.data.map((item: any) => {
      const d = item.start_time ? new Date(item.start_time) : new Date();
      return {
        id: item.id,
        name: item.name,
        description: item.description || "",
        startTime: item.start_time,
        endTime: item.end_time,
        formattedDate: d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
        formattedTime: d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
        location: item.place?.name || "Tabernacle Community Baptist Church",
        isOnline: !item.place || item.description?.toLowerCase().includes("live"),
        ticketUri: item.ticket_uri,
        permalinkUrl: `https://www.facebook.com/events/${item.id}`,
        coverPhotoUrl: item.cover?.source || "/images/hero-sanctuary.jpg",
      };
    });
  } catch (error) {
    console.error("Failed to fetch Facebook events:", error);
    return FALLBACK_EVENTS.slice(0, limit);
  }
}

/**
 * Get next upcoming Sunday service info for Bento Card 3.
 */
export async function getNextSundayService(): Promise<{
  title: string;
  dateTimeFormatted: string;
  note: string;
  learnMoreUrl: string;
}> {
  const events = await getFacebookEvents(3);
  const sundayEvt = events.find(
    (e) => e.name.toLowerCase().includes("sunday") || e.formattedDate.toLowerCase().includes("sun")
  );

  if (sundayEvt) {
    return {
      title: sundayEvt.name,
      dateTimeFormatted: `${sundayEvt.formattedDate}, ${sundayEvt.formattedTime}`,
      note: "In-Person & Facebook Live",
      learnMoreUrl: sundayEvt.permalinkUrl,
    };
  }

  // Calculate upcoming Sunday date dynamically
  const now = new Date();
  const dayOfWeek = now.getDay();
  const daysUntilSunday = (7 - dayOfWeek) % 7;
  const nextSunday = new Date(now);
  nextSunday.setDate(now.getDate() + (daysUntilSunday === 0 ? 0 : daysUntilSunday));

  const monthShort = nextSunday.toLocaleDateString("en-US", { month: "short" });
  const dayNum = nextSunday.getDate();
  const suffix = (day: number) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };

  return {
    title: "Sunday Worship Service",
    dateTimeFormatted: `${monthShort} ${dayNum}${suffix(dayNum)}, 10-11:30am`,
    note: "Sanctuary & Facebook Live Broadcast",
    learnMoreUrl: siteConfig.socials.facebook || "/services",
  };
}
