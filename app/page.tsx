import {
  getActiveAlert,
  getPublishedAnnouncements,
  getUpcomingEvents,
  getPublishedSermons,
  getPublishedMinistries,
} from "@/lib/firebase/firestore";
import { AlertBanner } from "@/components/home/AlertBanner";
import { Hero } from "@/components/home/Hero";
import { PastorWelcome } from "@/components/home/PastorWelcome";
import { ThisWeek } from "@/components/home/ThisWeek";
import { MinistriesGrid } from "@/components/home/MinistriesGrid";
import { LatestSermon } from "@/components/home/LatestSermon";
import { GiveCTA } from "@/components/home/GiveCTA";

export const revalidate = 60; // ISR revalidate every 60s or on-demand revalidate API

export default async function HomePage() {
  const [alert, announcements, events, sermons, ministries] = await Promise.all([
    getActiveAlert(),
    getPublishedAnnouncements(5),
    getUpcomingEvents(3),
    getPublishedSermons(1),
    getPublishedMinistries(),
  ]);

  return (
    <div>
      {/* 1) Alert banner */}
      <AlertBanner alert={alert} />

      {/* 2) Hero section */}
      <Hero />

      {/* 3) Pastor Welcome */}
      <PastorWelcome />

      {/* 4) This Week (3 events + pinned announcement) */}
      <ThisWeek events={events} announcements={announcements} />

      {/* 5) Ministries Grid */}
      <MinistriesGrid ministries={ministries} />

      {/* 6) Latest Sermon */}
      <LatestSermon sermon={sermons[0] || null} />

      {/* 7) Give CTA */}
      <GiveCTA />
    </div>
  );
}
