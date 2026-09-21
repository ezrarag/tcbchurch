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
    <div className="bg-[#221c19] text-stone-100 flex flex-col">
      {/* 1) Alert banner (if emergency alert active) */}
      <AlertBanner alert={alert} />

      {/* 2) Pinterest Architectural Hero Frame (Take a step toward the light) */}
      <PinterestHero
        latestSermon={latestSermon}
        nextServiceInfo={nextServiceInfo}
      />

      {/* 3) Facebook Synced Services & Events Feed */}
      <section className="w-full py-12 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
        <FacebookEventsFeed
          events={events}
          title="Upcoming Services & Facebook Events"
          subtitle="Real-time notifications, service times, and community gatherings directly from our church."
        />
      </section>

      {/* 4) Pastor Welcome */}
      <div className="bg-[#181311] border-y border-stone-800 text-stone-200">
        <PastorWelcome />
      </div>

      {/* 5) Ministries Grid */}
      <div className="bg-[#221c19] text-stone-100">
        <MinistriesGrid ministries={ministries} />
      </div>

      {/* 6) Give CTA */}
      <div className="bg-[#181311] border-t border-stone-800">
        <GiveCTA />
      </div>
    </div>
  );
}
