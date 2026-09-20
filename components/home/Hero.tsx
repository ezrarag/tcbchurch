import Link from "next/link";
import { siteConfig } from "@/site.config";
import { Calendar, Video, Phone, MapPin, ArrowRight } from "lucide-react";

export function Hero() {
  const mainServices = siteConfig.serviceTimes.slice(0, 3);

  return (
    <section className="relative bg-gradient-to-b from-church-navy via-slate-900 to-church-navy-light text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-church-gold overflow-hidden">
      {/* Decorative Subtle Accent Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D97706_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center space-y-6">
        {/* Subtitle Badge */}
        <div className="inline-flex items-center gap-2 bg-church-gold/20 border border-church-gold/40 px-3 py-1 rounded-full text-church-gold text-xs sm:text-sm font-semibold tracking-wide">
          <span>{siteConfig.selfDescription}</span>
        </div>

        {/* Church Name & Tagline */}
        <h1 className="font-serif font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
          {siteConfig.name}
        </h1>
        <p className="text-lg sm:text-2xl text-slate-200 font-serif italic max-w-3xl mx-auto leading-snug">
          &ldquo;{siteConfig.tagline}&rdquo;
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/plan-a-visit"
            className="w-full sm:w-auto min-h-[44px] px-6 py-3 bg-church-gold hover:bg-church-gold-hover text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-base focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span>Plan a Visit</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href={siteConfig.socials.facebook || "/watch"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[44px] px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold border border-slate-600 rounded-lg shadow transition-all flex items-center justify-center gap-2 text-base focus:outline-none focus:ring-2 focus:ring-church-gold"
          >
            <Video className="w-5 h-5 text-church-gold" />
            <span>Watch Live</span>
          </a>
        </div>

        {/* Quick Contact & Worship Line */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 pt-1">
          <a
            href={`tel:${siteConfig.callInLineRaw}`}
            className="inline-flex items-center gap-1.5 hover:text-church-gold transition-colors focus:outline-none focus:ring-2 focus:ring-church-gold rounded px-1"
          >
            <Phone className="w-4 h-4 text-church-gold" />
            <span>Call-in Line: <strong>{siteConfig.callInLine}</strong> (No code)</span>
          </a>
          <a
            href={siteConfig.address.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-church-gold transition-colors focus:outline-none focus:ring-2 focus:ring-church-gold rounded px-1"
          >
            <MapPin className="w-4 h-4 text-church-gold" />
            <span>{siteConfig.address.formatted}</span>
          </a>
        </div>

        {/* SERVICE TIMES CARD — Guaranteed visible without scrolling on mobile */}
        <div className="bg-slate-800/90 border border-church-gold/30 rounded-xl p-4 sm:p-5 shadow-2xl backdrop-blur-sm text-left max-w-3xl mx-auto mt-4">
          <div className="flex items-center gap-2 mb-3 border-b border-slate-700 pb-2">
            <Calendar className="w-5 h-5 text-church-gold" />
            <h2 className="font-serif text-base sm:text-lg font-bold text-white tracking-wide">
              Weekly Worship & Gathering Times
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
            {mainServices.map((service, idx) => (
              <div key={idx} className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-700/50">
                <span className="block font-bold text-church-gold">{service.label}</span>
                <span className="block text-white font-medium">{service.day} @ {service.time}</span>
                {service.note && <span className="block text-[11px] text-slate-400 mt-0.5">{service.note}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
