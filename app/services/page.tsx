import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/site.config";
import { Calendar, Clock, MapPin, Phone, Video, Sparkles, ExternalLink } from "lucide-react";
import { ChurchLogo, ChurchLogoWatermark } from "@/components/ui/ChurchLogo";
import { getFacebookEvents } from "@/lib/facebook/client";
import { FacebookEventsFeed } from "@/components/events/FacebookEventsFeed";

export const metadata = {
  title: "Worship Services & Schedule | Tabernacle Community Baptist Church",
  description: "Join Tabernacle Community Baptist Church for Sunday Worship, Wednesday Bible Study, and daily prayer calls.",
};

export const revalidate = 60;

export default async function ServicesPage() {
  const events = await getFacebookEvents(6);

  return (
    <div className="w-full bg-[#221c19] text-stone-100 min-h-screen py-4 sm:py-8 px-3 sm:px-6 lg:px-10">
      <div className="max-w-[1440px] mx-auto space-y-8 sm:space-y-12">
        
        {/* ============================================================
            HERO HEADER: Conforms to Pinterest dark framed aesthetic
            ============================================================ */}
        <div className="rounded-2xl sm:rounded-[32px] overflow-hidden bg-[#181311] shadow-2xl border border-stone-800/60 relative min-h-[360px] sm:min-h-[440px] flex flex-col justify-between p-6 sm:p-10 lg:p-12">
          {/* Background Photography with Warm Dark Gradient */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/images/hero-sanctuary.jpg"
              alt="Altar and sanctuary during worship service"
              fill
              priority
              className="object-cover object-center scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181311] via-transparent to-black/50" />
          </div>

          {/* Watermark in background */}
          <div className="absolute top-1/2 -right-12 -translate-y-1/2 pointer-events-none opacity-15 text-stone-300">
            <ChurchLogoWatermark size={320} />
          </div>

          {/* Top Bar Badge */}
          <div className="relative z-10 flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <ChurchLogo className="w-8 h-8 sm:w-10 sm:h-10" size={40} />
              <div className="flex flex-col text-left">
                <span className="text-xs uppercase tracking-widest text-stone-300 font-light">
                  Tabernacle Community Baptist Church
                </span>
                <span className="text-xs sm:text-sm font-medium text-white">
                  Weekly Worship & Gathering Schedule
                </span>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>In-Person & Online</span>
            </span>
          </div>

          {/* Hero Editorial Headline */}
          <div className="relative z-10 space-y-4 max-w-3xl text-left my-auto py-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400">
              Gather With Us
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light font-sans tracking-tight text-white leading-[1.1]">
              Worship, Praise & <br className="hidden sm:inline" />
              Spiritual Fellowship
            </h1>
            <p className="text-stone-300 text-sm sm:text-lg font-light leading-relaxed max-w-2xl">
              Join us in our historic Milwaukee sanctuary or connect live online as we lift our voices in praise, study God&apos;s holy word, and pray together throughout the week.
            </p>
          </div>

          {/* Bottom Highlights Strip */}
          <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-12 text-xs text-stone-300">
            <div>
              <span className="text-amber-400 font-semibold text-sm sm:text-base mr-1.5">Sunday 10:00 AM</span>
              <span className="font-light">• Morning Worship</span>
            </div>
            <div>
              <span className="text-amber-400 font-semibold text-sm sm:text-base mr-1.5">Tue 6:30 PM</span>
              <span className="font-light">• T.I.P.S. Fellowship</span>
            </div>
            <div>
              <span className="text-amber-400 font-semibold text-sm sm:text-base mr-1.5">Mon–Sat 7:00 AM</span>
              <span className="font-light">• Daily Prayer Call</span>
            </div>
          </div>
        </div>

        {/* ============================================================
            SERVICE TIMES BENTO GRID
            ============================================================ */}
        <div className="space-y-6 text-left">
          <div className="border-b border-stone-800 pb-3">
            <span className="text-[11px] uppercase tracking-widest text-amber-400 font-semibold block">
              Core Gatherings
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-white font-sans tracking-tight">
              Weekly Service Schedule
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.serviceTimes.map((service, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#181311] p-6 sm:p-7 border border-stone-800/80 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-amber-400 font-medium">
                      {service.day}
                    </span>
                    <Clock className="w-4 h-4 text-stone-400 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-white group-hover:text-amber-300 transition-colors">
                    {service.label}
                  </h3>
                  <div className="text-base font-mono text-amber-300">
                    {service.time}
                  </div>
                  {service.note && (
                    <p className="text-xs text-stone-400 font-light leading-relaxed pt-1">
                      {service.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================
            CONNECTION HUBS (Prayer Call + Facebook Live)
            ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Daily Prayer Line */}
          <div className="rounded-2xl sm:rounded-[28px] bg-[#181311] p-6 sm:p-8 border border-stone-800 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-light text-white">
                Daily Call-In Prayer Line
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                Start your day with Scripture and intercessory prayer. Dial in Monday–Saturday at 7:00 AM CST and Thursdays at 11:00 AM CST.
              </p>
            </div>

            <div className="pt-4 border-t border-stone-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs text-stone-400 block">Conference Dial-In:</span>
                <span className="text-sm font-semibold text-white">{siteConfig.callInLine}</span>
                <span className="text-xs text-stone-400 block">Access Code: {siteConfig.callInAccessCode}</span>
              </div>
              <a
                href={`tel:${siteConfig.callInLineRaw}`}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs transition-colors shadow-md whitespace-nowrap"
              >
                Tap to Call Now
              </a>
            </div>
          </div>

          {/* Facebook Live Channel */}
          <div className="rounded-2xl sm:rounded-[28px] bg-[#181311] p-6 sm:p-8 border border-stone-800 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-light text-white">
                Facebook Live Stream
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                Can&apos;t be there in person? Watch Sunday Worship and special church broadcasts streamed live directly to our Facebook page every Sunday at 10:00 AM CST.
              </p>
            </div>

            <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
              <span className="text-xs text-stone-400">
                Live & on-demand replays
              </span>
              <a
                href={siteConfig.socials.facebook || "https://www.facebook.com/tcbchurchmke"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white font-semibold text-xs transition-colors shadow-md flex items-center gap-2"
              >
                <span>Watch Live on Facebook</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Facebook Events & RSVP Section */}
        <FacebookEventsFeed events={events} />

      </div>
    </div>
  );
}
