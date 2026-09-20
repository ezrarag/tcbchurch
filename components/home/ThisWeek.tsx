import Link from "next/link";
import { EventDoc, AnnouncementDoc } from "@/lib/types";
import { Calendar, Bell, Pin, ArrowRight, MapPin, Clock } from "lucide-react";

interface ThisWeekProps {
  events: EventDoc[];
  announcements: AnnouncementDoc[];
}

export function ThisWeek({ events, announcements }: ThisWeekProps) {
  const pinnedAnnouncement = announcements.find((a) => a.pinned) || announcements[0];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-church-cream border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-300 pb-4">
          <div>
            <span className="text-church-gold font-bold text-xs sm:text-sm uppercase tracking-wider block">
              Gatherings & Updates
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-4xl text-church-navy">
              This Week at TCBC
            </h2>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 font-bold text-church-navy hover:text-church-gold transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-church-gold rounded p-1"
          >
            <span>View All Events</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pinned Announcement Highlight Card */}
          {pinnedAnnouncement && (
            <div className="lg:col-span-1 bg-church-navy text-white rounded-xl p-6 shadow-md border-l-4 border-church-gold flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 bg-church-gold/20 text-church-gold text-xs font-bold px-2.5 py-1 rounded">
                    <Pin className="w-3.5 h-3.5" />
                    <span>Pinned Announcement</span>
                  </span>
                  <Bell className="w-4 h-4 text-slate-400" />
                </div>
                <h3 className="font-serif font-bold text-xl text-white">
                  {pinnedAnnouncement.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {pinnedAnnouncement.body}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-700 mt-4">
                <Link
                  href="/announcements"
                  className="inline-flex items-center gap-2 text-xs font-bold text-church-gold hover:text-white transition-colors"
                >
                  <span>See all church announcements</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* Next 3 Upcoming Events */}
          <div className={`${pinnedAnnouncement ? "lg:col-span-2" : "lg:col-span-3"} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`}>
            {events.slice(0, 3).map((event) => {
              const startDate = new Date(event.startAt);
              const formattedDate = isNaN(startDate.getTime())
                ? "Upcoming"
                : startDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
              const formattedTime = isNaN(startDate.getTime())
                ? ""
                : startDate.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

              return (
                <div key={event.id} className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-church-gold bg-amber-50 px-2.5 py-1 rounded w-fit">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{formattedDate}</span>
                    </div>
                    <h4 className="font-serif font-bold text-lg text-church-navy leading-snug">
                      {event.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-3">
                      {event.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-4 space-y-1.5 text-xs text-slate-500">
                    {formattedTime && (
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-church-gold" />
                        <span>{formattedTime}</span>
                      </div>
                    )}
                    <div className="flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-church-gold flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
