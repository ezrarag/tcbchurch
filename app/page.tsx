import { getActiveAlert, getPublishedMinistries } from "@/lib/firebase/firestore";
import { getFacebookSermons, getFacebookEvents, getNextSundayService } from "@/lib/facebook/client";
import { AlertBanner } from "@/components/home/AlertBanner";
import { PinterestHero } from "@/components/home/PinterestHero";
import { FacebookEventsFeed } from "@/components/events/FacebookEventsFeed";
import { PastorWelcome } from "@/components/home/PastorWelcome";
import { MinistriesGrid } from "@/components/home/MinistriesGrid";
import { GiveCTA } from "@/components/home/GiveCTA";

export const revalidate = 60; // ISR revalidate every 60s

export default async function HomePage() {
  const [alert, sermons, events, nextServiceInfo, ministries] = await Promise.all([
    getActiveAlert(),
    getFacebookSermons(3),
    getFacebookEvents(3),
    getNextSundayService(),
    getPublishedMinistries(),
  ]);

  const latestSermon = sermons[0];

  return (
    <div className="bg-[#221c19] text-stone-100 flex flex-col w-full overflow-x-hidden">
      {/* 1) Alert banner (if emergency alert active) */}
      <AlertBanner alert={alert} />

      {/* 2) Pinterest Architectural Hero Frame (Take a step toward the light) */}
      <PinterestHero
        latestSermon={latestSermon}
        nextServiceInfo={nextServiceInfo}
      />

      {/* 3) Facebook Synced Services & Events Feed (Full-bleed band on #181311) */}
      <section className="w-full bg-[#181311] py-16 lg:py-24 px-4 sm:px-6 lg:px-12 text-stone-100">
        <div className="max-w-[1440px] mx-auto">
          <FacebookEventsFeed
            events={events}
            title="Upcoming Services & Facebook Events"
            subtitle="Real-time notifications, service times, and community gatherings directly from our church."
          />
        </div>
      </section>

      {/* 4) Pastor Welcome (Full-bleed band on #221c19) */}
      <PastorWelcome />

      {/* 5) Ministries Grid (Full-bleed band on #181311) */}
      <MinistriesGrid ministries={ministries} />

      {/* 6) Give CTA (Full-bleed band on #221c19) */}
      <GiveCTA />
    </div>
  );
}
