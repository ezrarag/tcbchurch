import { getUpcomingEvents } from "@/lib/firebase/firestore";
import Link from "next/link";
import { Calendar, MapPin, Clock, ArrowLeft } from "lucide-react";
import { ChurchLogo, ChurchLogoWatermark } from "@/components/ui/ChurchLogo";

export default async function EventDetailPage({ params }: { params: { slug: string } }) {
  const events = await getUpcomingEvents(10);
  const event = events.find((e) => e.slug === params.slug || e.id === params.slug) || events[0];

  return (
    <div className="w-full bg-[#221c19] text-stone-100 min-h-screen py-6 sm:py-10 px-3 sm:px-6 lg:px-10">
      <div className="max-w-[1000px] mx-auto space-y-6 text-left">
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Events</span>
        </Link>

        {/* Framed Event Card */}
        <div className="relative rounded-2xl sm:rounded-[32px] overflow-hidden bg-[#181311] border border-stone-800/80 p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="absolute top-6 right-6 pointer-events-none opacity-10 text-stone-300">
            <ChurchLogoWatermark size={180} />
          </div>

          <div className="relative z-10 border-b border-stone-800 pb-6 space-y-3">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block">
              {event.recurrence === "weekly" ? "Weekly Gathering" : "Church Event"}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light font-sans text-white tracking-tight leading-tight">
              {event.title}
            </h1>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#120e0d] p-5 rounded-2xl text-xs sm:text-sm text-stone-300 border border-stone-800">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span><strong>Date:</strong> {event.startAt?.slice(0, 10)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span><strong>Time:</strong> {event.startAt?.slice(11, 16)}</span>
            </div>
            <div className="sm:col-span-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span><strong>Location:</strong> {event.location}</span>
            </div>
          </div>

          <div className="relative z-10 text-sm sm:text-base text-stone-300 font-light leading-relaxed">
            <p>{event.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
