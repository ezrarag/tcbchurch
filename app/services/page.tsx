import { siteConfig } from "@/site.config";
import { getUpcomingEvents } from "@/lib/firebase/firestore";
import { Calendar, Clock, MapPin, Phone, Video } from "lucide-react";

export default async function ServicesPage() {
  const events = await getUpcomingEvents(6);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <span className="text-church-gold font-bold text-xs uppercase tracking-wider block">
          Gatherings & Schedule
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-church-navy">
          Worship Services & Gathering Times
        </h1>
        <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto">
          Join us for inspirational praise, prayer, Bible study, and spiritual fellowship throughout the week.
        </p>
      </div>

      {/* Service Schedule Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {siteConfig.serviceTimes.map((service, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="font-serif font-bold text-xl text-church-navy">{service.label}</span>
              <Clock className="w-5 h-5 text-church-gold" />
            </div>
            <div className="text-base font-semibold text-slate-800">
              {service.day} at {service.time}
            </div>
            {service.note && (
              <p className="text-xs text-slate-500 bg-amber-50 p-2 rounded border border-amber-200">
                {service.note}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Connection Methods */}
      <div className="bg-church-navy text-white p-8 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 border-t-4 border-church-gold">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-church-gold font-bold text-lg">
            <Phone className="w-5 h-5" />
            <span>Daily Call-In Prayer Line</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            Connect every morning Monday–Saturday at 7:00 AM and Thursdays at 11:00 AM for prayer and encouragement.
          </p>
          <a
            href={`tel:${siteConfig.callInLineRaw}`}
            className="inline-block px-4 py-2 bg-church-gold hover:bg-church-gold-hover text-white font-bold text-sm rounded shadow transition-colors"
          >
            Tap to Call: {siteConfig.callInLine}
          </a>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-church-gold font-bold text-lg">
            <Video className="w-5 h-5" />
            <span>Facebook Live Stream</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            Watch Sunday Worship live online every Sunday morning starting at 10:00 AM CST.
          </p>
          {siteConfig.socials.facebook && (
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-600 rounded transition-colors"
            >
              Open Facebook Live Page
            </a>
          )}
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="space-y-6 pt-4">
        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-church-navy border-b pb-2">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((evt) => (
            <div key={evt.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-xs font-bold text-church-gold block">{evt.startAt?.slice(0, 10)}</span>
              <h3 className="font-serif font-bold text-lg text-church-navy">{evt.title}</h3>
              <p className="text-xs text-slate-600 line-clamp-2">{evt.description}</p>
              <div className="pt-2 text-xs text-slate-500 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-church-gold" />
                <span className="truncate">{evt.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
