import { getFacebookEvents } from "@/lib/facebook/client";
import { FacebookEventsFeed } from "@/components/events/FacebookEventsFeed";
import { ChurchLogo } from "@/components/ui/ChurchLogo";
import { siteConfig } from "@/site.config";
import { Radio, ExternalLink, Phone } from "lucide-react";

export const metadata = {
  title: "Events & Services | Tabernacle Community Baptist Church",
  description: "Stay connected with upcoming Sunday services, midweek Bible studies, prayer lines, and community events from Tabernacle Community Baptist Church.",
};

export const revalidate = 60;

export default async function EventsPage() {
  const events = await getFacebookEvents(12);

  return (
    <div className="w-full bg-[#221c19] text-stone-100 min-h-screen py-10 sm:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto space-y-12">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-800 pb-8 text-left">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <ChurchLogo className="w-7 h-7" size={28} />
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                Facebook Synced Calendar
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light font-sans text-white tracking-tight">
              Church Services & Events
            </h1>

            <p className="text-stone-300 text-sm sm:text-base font-light max-w-2xl leading-relaxed">
              Find times and details for our weekly worship, spiritual education, prayer calls, and fellowship gatherings in Milwaukee.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={siteConfig.socials.facebook ? `${siteConfig.socials.facebook}/events` : "https://www.facebook.com/tcbchurchmke/events"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-lg transition-colors"
            >
              <Radio className="w-4 h-4" />
              <span>Facebook Events Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-xs text-stone-300">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call-In: {siteConfig.callInLine}</span>
            </div>
          </div>
        </div>

        {/* Facebook Events Grid */}
        <FacebookEventsFeed
          events={events}
          title="Scheduled Services & Gatherings"
          subtitle="Notifications for Sunday worship, Midweek TIPS study, prayer line, and Centennial events."
        />
      </div>
    </div>
  );
}
