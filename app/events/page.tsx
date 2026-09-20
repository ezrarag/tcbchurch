import { getUpcomingEvents } from "@/lib/firebase/firestore";
import Link from "next/link";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

export default async function EventsPage() {
  const events = await getUpcomingEvents(10);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
      <div className="border-b border-slate-200 pb-4">
        <span className="text-church-gold font-bold text-xs uppercase tracking-wider block">
          Calendar & Community
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-church-navy">
          Church Events & Gatherings
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((evt) => (
          <div key={evt.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-church-gold bg-amber-50 px-2.5 py-1 rounded">
                <Calendar className="w-3.5 h-3.5" />
                <span>{evt.startAt?.slice(0, 10)}</span>
              </div>
              <h2 className="font-serif font-bold text-xl text-church-navy">
                {evt.title}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {evt.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-church-gold" />
                <span>{evt.startAt?.slice(11, 16)} CST</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-church-gold" />
                <span>{evt.location}</span>
              </div>
              <Link
                href={`/events/${evt.slug || evt.id}`}
                className="inline-flex items-center gap-1 font-bold text-church-navy hover:text-church-gold pt-2 text-xs"
              >
                <span>Event details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
