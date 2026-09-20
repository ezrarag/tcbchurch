import { getUpcomingEvents } from "@/lib/firebase/firestore";
import Link from "next/link";
import { Calendar, MapPin, Clock, ArrowLeft } from "lucide-react";

export default async function EventDetailPage({ params }: { params: { slug: string } }) {
  const events = await getUpcomingEvents(10);
  const event = events.find((e) => e.slug === params.slug || e.id === params.slug) || events[0];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <Link href="/events" className="inline-flex items-center gap-1.5 text-sm font-bold text-church-navy hover:text-church-gold">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Events</span>
      </Link>

      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold text-church-gold bg-amber-50 px-3 py-1 rounded inline-block">
            {event.recurrence === "weekly" ? "Weekly Gathering" : "Church Event"}
          </span>
          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-church-navy">
            {event.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl text-sm border border-slate-200">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-church-gold" />
            <span><strong>Date:</strong> {event.startAt?.slice(0, 10)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-church-gold" />
            <span><strong>Time:</strong> {event.startAt?.slice(11, 16)}</span>
          </div>
          <div className="sm:col-span-2 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-church-gold" />
            <span><strong>Location:</strong> {event.location}</span>
          </div>
        </div>

        <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed">
          <p>{event.description}</p>
        </div>
      </div>
    </div>
  );
}
