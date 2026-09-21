import { getPublishedAnnouncements } from "@/lib/firebase/firestore";
import { Bell, Pin, Calendar, Sparkles } from "lucide-react";
import { ChurchLogo, ChurchLogoWatermark } from "@/components/ui/ChurchLogo";

export const metadata = {
  title: "Announcements & Bulletins | Tabernacle Community Baptist Church",
  description: "Stay informed with official ministry updates, announcements, and bulletins from Tabernacle Community Baptist Church.",
};

export default async function AnnouncementsPage() {
  const announcements = await getPublishedAnnouncements(15);

  return (
    <div className="w-full bg-[#221c19] text-stone-100 min-h-screen py-6 sm:py-10 px-3 sm:px-6 lg:px-10">
      <div className="max-w-[1000px] mx-auto space-y-8 text-left">
        
        {/* Header */}
        <div className="relative rounded-2xl sm:rounded-[32px] overflow-hidden bg-[#181311] border border-stone-800/80 p-6 sm:p-10 shadow-2xl space-y-3">
          <div className="absolute top-6 right-6 pointer-events-none opacity-10 text-stone-300">
            <ChurchLogoWatermark size={180} />
          </div>

          <div className="relative z-10 space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block">
              Church Life & Notices
            </span>
            <h1 className="text-3xl sm:text-5xl font-light font-sans text-white tracking-tight">
              Announcements & Bulletins
            </h1>
            <p className="text-stone-300 text-sm sm:text-base font-light">
              Current updates, event schedules, and fellowship announcements for the Tabernacle congregation.
            </p>
          </div>
        </div>

        {/* List of Announcements */}
        <div className="space-y-6">
          {announcements.map((ann) => (
            <div
              key={ann.id}
              className={`rounded-2xl p-6 sm:p-7 border transition-all duration-300 space-y-3 ${
                ann.pinned
                  ? "bg-[#1f1714] border-amber-500/60 shadow-lg"
                  : "bg-[#181311] border-stone-800/80"
              }`}
            >
              <div className="flex items-center justify-between">
                {ann.pinned ? (
                  <span className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full">
                    <Pin className="w-3.5 h-3.5" />
                    <span>Pinned Highlight</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400">
                    <Bell className="w-3.5 h-3.5" />
                    <span>Church Notice</span>
                  </span>
                )}
                <div className="flex items-center gap-1 text-xs text-stone-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{ann.publishAt?.slice(0, 10)}</span>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-light text-white leading-snug">
                {ann.title}
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                {ann.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
